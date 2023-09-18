import React, { useContext } from 'react'
import {Button, Card, Divider, Input} from "@nextui-org/react";
import { useForm } from "react-hook-form"
import { PATH_HOME } from '../../../../routers/routerPaths'
import { PATH_API_LOGIN } from '../../../../routers/routerApi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext';

// import { getUser } from '../../services/user';

const FormCustom = ({title, ruta}) => {
  const { login } = useContext(AuthContext)

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()



  const onSubmit = (data) => {
    (title == 'Registro')
      ? axios.post(ruta, data)
        .then((response )=> {
          navigate(PATH_HOME)
          return axios.post(PATH_API_LOGIN, data)
          .then((response) => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                login()
                navigate(PATH_HOME)
              })
        })
      :  axios.post(ruta, data)
          .then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            login()
            navigate(PATH_HOME)
          })
    .catch((error) => {
      console.error('Error al realizar la solicitud POST:', error);
    });
  }


  return (
        <Card className="w-full  md:w-1/2 p-4 flex flex-col gap-2"> 
            <h1 className='text-center text-xl'>{title}</h1> 
            {/* {user ? user.name : 'no hay usuario'} */}
            <Divider className='mt-3 mb-6'/>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
                {title == 'Sesion' ? null : 
                  <Input
                      // type={isVisible ? "text" : "password"}
                      type="text"
                      label="Nombre"
                      labelPlacement="outside"
                      placeholder="Juan Perez"
                      description="Ingrese su nombre"
                      className=" "
                      fullWidth
                      {...register("username", { required: true })} 
                  />
                }
                <Input
                    // isClearable
                    type="email"
                    label="Correo"
                    labelPlacement="outside"
                    placeholder="juan@e_calendary.com"
                    description="Ingrese correctamente su correo electronico."
                    onClear={() => console.log("input cleared")}
                    className="max-w"
                    errorMessage={errors.email ? "Por favor ingresa un correo valido" :""}
                    {...register("email", { required: true }) } 
                    // startContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                />
                <Input
                    type={isVisible ? "text" : "password"}
                    label="Contraseña"
                    labelPlacement="outside"
                    placeholder='*********'
                    description="Ingrese correctamente su contraseña"
                    onClear={() => console.log("input cleared")}
                    className="max-w"
                    errorMessage={errors.password ? "Por favor ingresa una contraseña valida" :""}
                    {...register("password", { required: true })} 
                    // startContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                />
                {/* {errors.password && <span>This field is required</span>} */}

                <Button color="primary" variant="shadow" type='submit'>
                  {title === 'Sesion' ? 'Iniciar Sesion' : 'Registrarse'}
                </Button>  
            </form>
        </Card>
  )
}


export default FormCustom