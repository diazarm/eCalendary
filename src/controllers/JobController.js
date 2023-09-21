const HOST = require('../../config').api.host;
const jobs = require('../services/JobsService.js');

const JobController = class {
   async listing( req, res ) {
      try {
         const user_id = req.user.id
         const { job, months, wdays } = await jobs.list_all({ user_id: user_id });
         console.log(">> CONTROLLER", months, wdays, job.service_id);
         res.json({
            identificador: job.service_id
            , nombre_del_servicio: job.name
            , meses: months
            , dias: wdays
            , horarios: {
               inicio: job.init_time
               , fin: job.finish_time
            }
            , enlace: `${HOST}api/calendarios?service_id=${job.service_id}`
         })
      } catch (error) {
         if (error.name === 'JobNotFound') {
            res.status(404).json({message: "No tienes ni un servicio creado"})
         } else {
            res.status(503).json({message: error })
         }
      }
   }

   async create( req, res ) {
      const {
         identificador_del_usuario
         , nombre_del_servicio
         , meses
         , dias
         , horarios
         , intervalo
      } = req.body;

      try {
         const user_id = req.user.id;
         const job = await jobs.create({
            name: nombre_del_servicio
            , init_time: horarios.inicio
            , finish_time: horarios.fin
            , duration: intervalo
            , userId: user_id
            , months: meses
            , days: dias
         });
         res.status(201).json({
            identificador: job.service_id
            , enlace: `${HOST}api/calendarios?service_id=${job.service_id}`
            , mensaje: "Se creó con éxito el servicio"
         })
      } catch (error) {
         console.error( ">> ERROR ON CONTROLLER CREATE", error );
         res.status(409).json( error )
      }


   }

   async getCalendary(req, res) {
      const serviceId   = req.query.service_id
      const date        = req.query.fecha
      const { job, dates } = await jobs.getJobCalendary({ serviceId, date })
      try {
         if ( job ) {
            if (dates) {
               res.status(200).json({
                  jobName: job.name,
                  calendary: {
                     meses: dates.months,
                     dias: dates.wdays,
                     inicio: job.init_time
                     , fin: job.finish_time
                  }

               })
            } else {
               res.status(200).json({
                  job
               })
            }
         }
         else {
            res.status(404).json({
               message: "Invalid ID"
            })
         }
      } catch (err) {
         res.status(400).json({
            message: err.message
         })
      }

   }
}

module.exports = new JobController();
