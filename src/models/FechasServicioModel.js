
const { DataTypes }  = require("sequelize");
const sequelize   = require('../utils/connect');
const Servicio       = require('./servicioModel');
const Horarios       = require('./FechaModel');

const FechasServicioModel = sequelize.define('fechas_de_servicios', {
}, { timestamps: false })

module.exports = FechasServicioModel
