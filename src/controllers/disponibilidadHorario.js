const HorarioModel = require("../models/horarioModel");
const HorarioServicioModel = require("../models/horarioServicioModel");


const dispHorario =  async (req, res) => {
    const fecha = req.query.fecha

    if (!fecha) {
        return res.status(400).json({ error: 'Faltan parámetros requeridos' });
        }
    
    try {
        const horariosDisponibles = await HorarioModel.findAll({
            include: [
                {
                    model: HorarioServicioModel,
                        where: {
                        available: true
                    }
                }
                ],
                    where: {
                    schedule: fecha
                }
        });
    
        if (!horariosDisponibles || horariosDisponibles.length === 0) {
            return res.status(404).json({ mensaje: 'No hay horarios disponibles para la fecha especificada' });
        }
    
        return res.json(horariosDisponibles);
    } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
};

module.exports = dispHorario
