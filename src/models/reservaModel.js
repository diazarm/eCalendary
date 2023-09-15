const {DataTypes } = require("sequelize");
const sequelize= require('../utils/connect');
const HorarioServicioModel = require("./horariosServicioModel");


const ReservationModel = sequelize.define( 'reservas', {
   reservation_id: {
      type: DataTypes.UUID,
      primaryKey: true
   },
   username: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false
   },
   phone: {
      type: DataTypes.STRING
      , allowNull: false
   }
});

module.exports = ReservationModel
