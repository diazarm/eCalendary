

const Users=require('../models/usuarioModel')
const Servicio=require('../models/servicioModel')
const ReservationModel=require('../models/reservaModel')
const HorarioServicioModel=require('../models/horariosServicioModel')
const Horarios=require('../models/horarioModel')

const initModels=()=>{
    Users.hasOne(Servicio)
    Servicio.belongsTo(Users)

    ReservationModel.hasMany( HorarioServicioModel )
    HorarioServicioModel.belongsTo( ReservationModel )

    Servicio.belongsToMany( Horarios, { through: HorarioServicioModel } )   
    Horarios.belongsToMany( Servicio, { through: HorarioServicioModel } )  
    
}
module.exports=initModels