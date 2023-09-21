import * as yup from 'yup';

export const schema = yup
  .object({

    name: yup
        .string()
        .required('Nombre del servicio es requerido')
        .max(50, 'Nombre del servicio debe ser máximo de 50 caracteres')
        .min(4, 'Nombre del servicio debe tener 4 caracteres')
        ,

    email: yup
        .string()
        .required('Nombre del servicio es requerido')
        .max(100, 'Nombre del servicio debe ser máximo de 100 caracteres')
        .min(8, 'Nombre del servicio debe tener 8 caracteres')
        ,

    
  })
  .required();