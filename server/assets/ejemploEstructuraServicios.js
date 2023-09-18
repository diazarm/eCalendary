/**
 * EJEMPLO TIPO DE ESTRUCTURA DE MANEJO DE SEQUELIZE CON LOS MODELOS 
 * CADA MODELO DE SERVICIO VA EN UN ARCHIVO DISTINTO
 * 
 * Ejm: userService.js, businessService.js etc
 */
const {User} = require('../models/User');

class UserService {
 // Servicio que trae todos los usuarios
  async getUsers() {
    const users = await User.findAll();
    return users;
  }

  // Servicio que trae un usuario por email
  async getUser(email){
    
    const user = await User.findOne({
      where:{
        email: email
      },
      attributes:{
        exclude:["img","phone"]
      }
    });
    return user
  }

  // Servicio que trae guarda un usuario nuevo
  async save(userNew) {
    
    const {name, last_name,  email, password,phone} = userNew;
    const users = await Usuario.create({
        name, 
        last_name,  
        email, 
        password,
        phone,
    });

    return users;
  }

 // Servicio que actualiza datos de usuario
  async update(userReplace) {
    const {iduser, name, lastname, email, password,phone,img} =
      userReplace;

    const users = await Usuario.update(
      {
        iduser, 
        name, 
        lastname, 
        email, 
        password,
        phone,
        img,
      },
      {
        where: {
          iduser,
        },
      }
    );

    return users;
  }

// Servicio que borra datos de un usuario
  async delete(iduser) {
    const users = await User.destroy({
      where: {
        iduser,
      },
    });

    return users;
  }
}

module.exports = UserService;
