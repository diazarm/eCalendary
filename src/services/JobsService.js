const { v4: uuidv4 } = require('uuid');
const generate_days_from = require('../utils/days_generator');
const transform_to_months_and_days_from = require('../utils/transform_to_months_and_days_from');
const JobModel = require('../models/servicioModel');
const ScheduleModel = require('../models/FechaModel');
const ReservationModel = require('../models/reservaModel')

const JobsService = class {
   async list_all(params = {}) {
      const job = await JobModel.findOne({
         where: {
            userId: params.user_id
         }
         , include: ScheduleModel
      })

      if (!job) {
         console.log(">> JOB =", job)
         throw new Object({ name: 'JobNotFound', message: 'Servicio no encontrado' })
      }

      try {
         const schedules = await job.getSchedules();
         // Genero un array con las fechas del servicio encontrado
         const dates = schedules.reduce((dates, date) => {
            dates.push(date.schedule);
            return dates;
         }, []);

         const { months, wdays } = transform_to_months_and_days_from(dates);
         return {
            job, months, wdays
         };
      } catch (error) {
         if ('TypeError' === error.name) {
            console.log(">>", error);
            throw { name: 'JobNoFound', message: 'Servicio no encontrado' };
         }
      }
   }

   async create(job_data) {
      try {
         const job = await JobModel.create({
            service_id: uuidv4()
            , name: job_data.name
            , init_time: job_data.init_time
            , finish_time: job_data.finish_time
            , duration: job_data.duration
            , userId: job_data.userId
         });

         console.log(">>>> ON JOBS SERVICE", job.name, job_data.months, job_data.days )

         const days_schedules = generate_days_from({
            months: job_data.months,
            days: job_data.days
         })
         console.log( ">>>> JOBS SERVICES ON DAYS CREATED", days_schedules.length );
         days_schedules.forEach(async element => {
            const schedule = await ScheduleModel.create({
               schedule_id: uuidv4(), schedule: element
            })
            await job.addSchedule(schedule);
         });

         return job;
      } catch (error) {
         if (error.name === 'SequelizeUniqueConstraintError') {
            throw { code: 1, message: `${job_data.name} ya existe` }
         } else if (error.name === 'SequelizeValidationError') {
            throw { code: 2, message: `Error al validar los datos: ${error}` }
         } else {
            throw { code: -1, message: `DESCONOCIDO - ${error}` }
         }
      }
   }

   async getJobCalendary(params = { date: null }) {
      console.log(">>>> JOBS SERVICE ON CALENDARY", params );
      const schedulesJob = await JobModel.findAll({
         where: {
            service_id: params.serviceId
         },
         include: {
            model: ScheduleModel,
            attributes: [ "schedule" ],
            include: {
               model: ReservationModel,
               attributes: ["schedules"]
            }
         }
      })

      const job      = schedulesJob[0];
      let result = {
         job
      };

      if( params.date ) {
         const r = job.schedules.filter( d => {
            return d.schedule === params.date
         } )

         result.job = []
         if( r ) {
            if (r[0]) {
               const dates_reserved = r[0].reservas;
               console.info( ">>>> JOBS SERVICE ON", dates_reserved );
               if (dates_reserved.length > 0) {
                  result.job = dates_reserved.map( reserva => reserva.schedules.split(",").map(x => +x) ).flat()
               }
            }
         }

      } else {
         const datesJob = job.schedules.map(data => data.schedule)
         result.dates = transform_to_months_and_days_from(datesJob) 
      }

      console.log(">>>> JOBS SERVICE ON", result );
      return result;

   }
}


module.exports = new JobsService();