import { Hora, diasRAW, meses, mesesRAW } from "../_mocks_/bussinessMocks";
import { PATH_CALENDAR, PATH_FRONT } from "../routers/routerPaths";
import { formattedDailySchedules } from "./formatBusiness";

const coma = ",";


// dias: "Martes,Viernes"
// hora_fin: "5"
// hora_ini: "3"
// intervalo: "60"
// meses: "Febrero,Marzo,Mayo,Julio"
// servicio: "Peluqueria Don Juan"



//parsear los datos en minuscula

export const mapDataToSend = (data) => {
    if (data) {
        data.dias = data.dias.toLowerCase().split(",")
        data.meses = data.meses.toLowerCase().split(",")
        const horarios = {
            inicio: data.inicio,
            fin: data.fin
        }
        return {...data, horarios}
    }
}


// export const myBussinesData = {
// 	identificador: "01d32f3c-40da-4db8-a154-c006845f8399",
// 	nombre_de_servicio: "Peluqueria Don Juan",
// 	meses: [ 9, 10, 11, 12 ],
// 	dias: [ 1,2,3,4,5 ],
// 	horarios: {
// 		inicio: 8,
// 		fin: 15
// 	},
// 	enlace: "https://c13-15-e-calendary.onrender.com/api/calendarios?service_id=01d32f3c-40da-4db8-a154-c006845f8399"
// }
export const mapDataMyBusinessShow = (myBussinesData) => {

    console.log({myBussinesData});

    var URLdomain = window.location.host;

    const name = myBussinesData.nombre_del_servicio;
    const month = myBussinesData.meses && formattedDailySchedules(myBussinesData.meses, mesesRAW)
    const days = myBussinesData.dias && formattedDailySchedules(myBussinesData.dias, diasRAW)
    const hora_ini = myBussinesData.horarios.inicio && formattedDailySchedules([myBussinesData.horarios.inicio], Hora)
    const hora_fin = myBussinesData.horarios.fin && formattedDailySchedules([myBussinesData.horarios.fin], Hora)
    const public_rout =  URLdomain + PATH_CALENDAR + '/' + myBussinesData.identificador

    return { name, month,  days, hora_ini, hora_fin, public_rout}
}