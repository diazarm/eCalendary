import axios from 'axios'
import { Button, Input } from '@nextui-org/react'
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schemas/business-schema';
import { PATH_CALENDAR } from '../../../../routers/routerPaths';
import { PATH_API_SERVICIO } from '../../../../routers/routerApi';
import { mapDataToSend } from '../../../../utils/business-map';
import { formValidation } from '../../../../componets/ErrorMessage';
import MySelect from '../MySelect';
import { Hora, dias, intervalo, meses } from '../../../../_mocks_/bussinessMocks';
import { useState } from 'react';
import { useBusinessStore } from '../../../../store/BusinessStore';

const FormBusiness = () => {

    const setServiceId = useBusinessStore((state) => state.setServiceId)
    const serviceId = useBusinessStore((state) => state.serviceId)


    const navigate = useNavigate();

    const formMethods = useForm({
        defaultValues: {
            nombre_del_servicio: '',
            meses: '',
            dias: '',
            inicio: '',
            fin: '',
            intervalo: '',
        },
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const {
        register,
        handleSubmit,
        // watch, 
        formState: { isDirty, isValid, errors },
        reset
    } = formMethods;

    // console.log({ errors });

    const onSubmit = async (data) => {
        if (data) {
            const dataParse = mapDataToSend(data);
            console.log(dataParse)
            const token = localStorage.getItem("token")
            console.log(token)
            axios.post(PATH_API_SERVICIO, dataParse, {
                'headers': {
                    Authorization: `JWT ${token}`
                }
            })
                .then((response) => {
                    setServiceId(response.data.identificador)
                    setServiceResponse(response.data)
                    console.log('Es la data recibida ', { response })
                })
                .catch(error => {
                    console.log('Error al hacer la peticion', error)
                })

            // postDataPrivate({ url: PATH_API_SERVICIO, token: token})
            const publicCalendarRoute = `${PATH_CALENDAR}/${serviceId}`
            navigate(publicCalendarRoute)
        }
        reset();
    }

    return (

        <div className='w-full '>
            <h1 className='text-center text-2xl p-8'>Datos del servicio</h1>

            <FormProvider {...formMethods} >
                <form onSubmit={handleSubmit(onSubmit)}
                    className='w-full grid md:grid-cols-2  p-4 gap-8 m-auto'>

                    <Input
                        {...register("nombre_del_servicio")}
                        label="Nombre del servicio"
                        placeholder="Ejemplo: Peluqueria Don Mario"
                        labelPlacement="outside"
                        className=""
                        fullWidth
                        errorMessage={formValidation(errors, "nombre_del_servicio")}
                    />
                    <MySelect name="inicio" lista={Hora} titulo="Horario de inico del servicio" seleccionMultiple={false} />
                    <MySelect name="dias" lista={dias} titulo="Dias laborales de la semana" seleccionMultiple={true} />
                    <MySelect name="fin" lista={Hora} titulo="Horario de finalizacion del servicio" seleccionMultiple={false} />
                    <MySelect name="meses" lista={meses} titulo="Meses laborales" seleccionMultiple={true} />
                    <MySelect name="intervalo" lista={intervalo} titulo="Intervalo de tiempo" />

                    <Button
                        color='primary'
                        variant={(!isDirty || !isValid) ? "flat" : "shadow"}
                        className='md:col-span-2' isDisable={(!isDirty || !isValid)} type='submit' >
                        Crear
                    </Button>
                </form>
            </FormProvider>
        </div>

    )
}

export default FormBusiness
