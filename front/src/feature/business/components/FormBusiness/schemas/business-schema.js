import * as yup from 'yup';

export const schema = yup
  .object({

    nombre_del_servicio: yup
        .string()
        .required('Nombre del servicio es requerido')
        .max(50, 'Nombre del servicio debe ser máximo de 50 caracteres')
        .min(4, 'Nombre del servicio debe tener 4 caracteres')
        ,
    meses: yup.string().required('Selecciona al menos un mes') ,
    dias: yup.string().required('Selecciona al menos un día') ,
    inicio: yup.string().required('Selecciona la hora inicial') ,
    fin: yup.string().required('Selecciona la hora final') ,
    intervalo: yup.string().required('Selecciona un intervalo de tiempo') ,
  })
  .required();