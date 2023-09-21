/**
 * EJEMPLO TIPO DE ESTRUCTURA DE MANEJO DE LOS CONTROLADORES 
 * CADA CONTROLADOR VA EN UN ARCHIVO DISTINTO
 * 
 * Ejm: userController.js, businessController.js etc
 */

const UserService = require('../services/userService')// importamos el archivo userService


// Instanceamos el archivo userService con la palabra service para manejar sus funciones
const service = new UserService();

// creamos un objeto userController y creamos sus metodos
const userController = { 

   // metodo getUsers de userController  
  getUsers: async (req, res) => {
    const user = await service.getUsers();
    res.json(user);
  },
 
   // metodo save (crear) de userController
  save: async (req, res) => {
    const {nombre, apellido_p, apellido_m, correo, contrasena,telefono} = req.body;

    const user = await service.save({
      nombre,
      apellido_p,
      apellido_m,
      correo,
      contrasena,
      telefono
    });

    res.json(user);
  },

 
 // metodo delete de userController
  delete: async (req, res) => {
    const {iduser} = req.body;

    const user = await service.delete(iduser);

    res.json(user);
  },

};

module.exports = userController;
