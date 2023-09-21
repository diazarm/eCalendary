const { v4: uuidv4 }                      = require('uuid');
const generate_days_from                  = require('../utils/days_generator');
const transform_to_months_and_days_from   = require('../utils/transform_to_months_and_days_from');
const JobModel                            = require('../models/servicioModel');
const JobScheduled                        = require('../models/horariosServicioModel')
const UserModel                           = require('../models/usuarioModel')
const ScheduleModel                       = require('../models/horarioModel');

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
         throw new Object({name: 'JobNotFound', message: 'Servicio no encontrado'})
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
         if( 'TypeError' === error.name){
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

         const days_schedules = generate_days_from({
            "months": job_data.months,
            "days": job_data.days
         }).forEach(async element => {
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

   async getJobCalendary(serviceId){
      const schedulesJob= await JobModel.findAll({
         where:{
            service_id:serviceId
         },
         include:{
         model:ScheduleModel,
         attributes:{
            exclude:["createdAt","updatedAt"]
         }
         }
      })
      const datesJob=schedulesJob[0].schedules.map(data=>data.schedule)
      return {
         job:schedulesJob[0],
         dates:transform_to_months_and_days_from(datesJob)
      }
      
   }
}


module.exports = new JobsService();