const { v4: uuidv4 }    = require('uuid');
const ReservationModel  = require('../models/reservaModel')
const JobModel          = require('../models/servicioModel')
const Dates             = require('../models/FechaModel');
const { where }         = require('sequelize');
const TAG               = ">> RESERVATION SERVICE"

class ReservationService {
   async create( reservation_data ) {
      const date = reservation_data.fecha;
      const hours = reservation_data.horas;

      console.log( TAG, date );

      try {
         const a_date = await Dates.findOne({
            where: {
               schedule: date
            }, include: ReservationModel
         })

         const reserva = await ReservationModel.create({
            reservation_id: uuidv4()
            , username: reservation_data.cliente
            , email: reservation_data.email
            , schedules: hours.join(",")
            , service_id: reservation_data.service_id
         }, {
            include: Dates
         })

         console.log( TAG, a_date.schedule_id, reservation_data.service_id )
         await reserva.setSchedule( a_date );
         return reserva
      } catch (error) {
         console.error( ">> ERROR", error )
      }
   }

   async list_all_from( params ) {
      const job = await JobModel.findOne( {
         where: {
            userId: params.user
         }
      } )

      const bookings = await ReservationModel.findAll( {
         where: {
            service_id: job.service_id
         },
         include: Dates
      })

      let result = { message: "no se encontraron reservas el usuario"}

      if( bookings ) {
         result = {
            service_id: job.service_id
            , horarios: bookings.map( book => {
               return book.schedules.split(",").map( hour => new Object({
                  horario: `${book.schedule.schedule} ${hour}:00`,
                  cliente: book.username,
                  email: book.email
               }))
            }).flat()
         }
      }

      return result
   }
}

module.exports = new ReservationService();