const {DataTypes } = require('sequelize');
const sequelize = require('../utils/connect');

const Schedules = sequelize.define('schedules', {
   schedule_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
   }, schedule: {
      type: DataTypes.DATEONLY, allowNull: false
   }
}, { timestamps: false });

module.exports = Schedules
