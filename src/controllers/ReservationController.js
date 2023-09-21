const reservations = require('../services/ReservationService');
const TAG = "ON RESERVATION CONTROLLER"

class ReservationController {
   /**
    * 
   {
      "service_id": <UUID_service>,
      "reservas": [
         { "horario": "<YYYY-mm-dd HH:MM>"
            , "cliente": "<nombre-del-cliente>"
            , "email": "<email-del-cliente>" 
         }, { "horario": "<YYYY-mm-dd HH:MM>"
               , "cliente": "<nombre-del-cliente>"
               , "email": "<email-del-cliente>"
         }
      ]
   } 
    */
   async list( req, res ) {
      const user_id = req.user.id
      try {
         const bookings = await reservations.list_all_from( {user: user_id} );
         if( !bookings ) {
            return res.status(200).json({message: "no se encontraron reservas" })
         } 
         
         console.log(">> ON BOOKS CONTROLLER", bookings );
         return res.status(200).json(bookings);
      } catch (error ) {
         console.error(">> ERROR ON BOOKS CONTROLLER", error.message )
      }
   }

   async create( req, res ) {
      const { service_id, cliente, email, fecha, horas } = req.body
      // verificando que servicio sea el correcto
      if( !service_id || undefined == service_id ) {
         return res.status( 400 ).json( { message: 'Debes definir el servicio' })
      }

      if( !cliente || undefined == cliente ) {
         return res.status( 400 ).json( {message: 'No se ingresó el cliente' } )
      }

      // verificar que los horarios tenga algún valor
      if( !horas || undefined == horas ) {
         return res.status( 400 ).json( { message: 'No se ingresó los horarios a reservar' } )
      }

      if( !fecha || undefined == fecha ) {
         return res.status( 400 ).json( { message: 'No se ingresó la fecha de la reserva' } )
      }
      
      try {
         const reservation = await reservations.create({ service_id, cliente, email, fecha, horas })
         const date = await reservation.getSchedule();
         console.log( TAG, date.schedule)
         if(!reservation) {
            res.status(400).json( {message: 'Ya se encuentra reservado' } )
         }
         res.status(201).json({
            message: "Reserva realizada"
            , reserva: {
               service_id: reservation.service_id,
               cliente: reservation.username,
               email: reservation.email,
               fecha: date.schedule,
               horas: reservation.schedules.split(",").map( hour => +hour )
            }
         })
      } catch (error) {
         res.status(503).json({ message: error });
      }
   }
}

module.exports = new ReservationController();