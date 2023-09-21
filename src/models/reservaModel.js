const {DataTypes } = require("sequelize");
const sequelize= require('../utils/connect');


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
   schedules: {
      type: DataTypes.STRING
      , allowNull: false
   },
   service_id: {
      type: DataTypes.UUID
      , allowNull: false
   }
}, { timestamps: false });

module.exports = ReservationModel
