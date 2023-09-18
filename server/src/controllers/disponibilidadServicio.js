const HorariosModel = require("../models/horarioModel");
const Servicio = require('../models/servicioModel')


const dispServicio =  async (req, res) => {
    const servicio = req.query.servicio;
    const fecha = req.query.fecha

    if (!servicio || !fecha) {
        return res.status(400).json({ error: 'Faltan parámetros requeridos' });
        }
    
    try {
        const servicioHorarios = await Servicio.findOne({
            where: { nombre: servicio },
                include: {
                    model: HorariosModel,
                    where: { fecha },
            },
        });
    
        if (!servicioHorarios) {
            return res.status(404).json({ mensaje: 'El servicio solicitado no se encuentra registrado' });
        }
    
        return res.json(servicioHorarios);
    } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
};

module.exports = dispServicio