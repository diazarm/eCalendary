const { DataTypes } = require('sequelize')
const sequelize     = require('../utils/connect')
const Servicio      = require('./servicioModel');

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });


// Users.hasOne(Servicio)
// Servicio.belongsTo(Users);

module.exports = Users

