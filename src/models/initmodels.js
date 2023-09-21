

const Users=require('../models/usuarioModel')
const Servicio=require('../models/servicioModel')
const ReservationModel=require('../models/reservaModel')
const FechasServiciosModel=require('../models/FechasServicioModel')
const Fecha=require('./FechaModel')

const initModels=()=>{
    Users.hasOne(Servicio)
    Servicio.belongsTo(Users)

    Fecha.hasMany( ReservationModel )
    ReservationModel.belongsTo( Fecha )

    Servicio.belongsToMany( Fecha, { through: FechasServiciosModel } )   
    Fecha.belongsToMany( Servicio, { through: FechasServiciosModel } )  
    
}
module.exports=initModels