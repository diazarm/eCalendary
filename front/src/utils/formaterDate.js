import { toPascalCase } from "./formaterString"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const toDateFormater = (date) => {
    return toPascalCase(date.toLocaleDateString('default', options))
}

export const toInputDate = (date) =>{
    var mes = date.getMonth()+1; //obteniendo mes
    var dia = date.getDate(); //obteniendo dia
    var ano = date.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10

    return ano+"-"+mes+"-"+dia;
}


export const formattedDailySchedules = ( date , schedules) => {

  if (schedules) {
      const newSchedules = schedules.map((schedule) => {
        const newSchedule = new Date(date)
        newSchedule.setHours(schedule,0,0,0)
        return newSchedule
      })
      return newSchedules
  }
}

