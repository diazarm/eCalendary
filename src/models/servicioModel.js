const { DataTypes }  = require("sequelize");
const sequelize      = require('../utils/connect');

const Services = sequelize.define('services', {
   service_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false, unique: true
   },
   init_time: {
      type: DataTypes.INTEGER, defaultValue: 8
   },
   finish_time: {
      type: DataTypes.INTEGER, defaultValue: 16
   },
   duration: {
      type: DataTypes.INTEGER,
      default: 15
   }
}, { timestamp: false });

module.exports = Services;
