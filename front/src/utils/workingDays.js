const daysOfWeekWorked = [
    1,2,3,4,5
]

const isDaysOfWeekWorked = (dayIndex) => {
    // Domingo (0) y sábado (6) son fines de semana.
    //Refactorizar para bloquear  los dias no listados 
    // dias: [
	// 	1,	// LUNES
	// 	2,	// MARTES
	// 	4	// JUEVES
	// ],
    // return dayIndex === 0 || dayIndex === 6;
    return  !daysOfWeekWorked.includes(dayIndex)
};

const isDayPast = (date) =>{
    let today = new Date()
    today.setHours(0, 0, 0, 0)

    return (date < today )
}
export const isWorkingDay = (date) => {
    // Agrega tu lógica para deshabilitar días específicos aquí.
    // Por ejemplo, si quieres deshabilitar fines de semana:
    // return isWeekend(date.getDay());
    return isDaysOfWeekWorked(date.getDay()) || isDayPast(date); //+ dias a full
};


const isWeekend = (dayIndex) => {
    // Domingo (0) y sábado (6) son fines de semana.
    return dayIndex === 0 || dayIndex === 6;
};


// 👁‍🗨👁‍🗨Validar la logica, el dia mas cercano laboral👁‍🗨👁‍🗨
export const nearestWorkingDay = (date) => {
    // Domingo (0) y sábado (6) son fines de semana.

    if (isWeekend(date.getDay())) {
        switch (date.getDay()) {
            case 0: //Domingo (0)
                return date.setDate(date.getDate() + 1)
        
            case 6: //sábado (6)
                return date.setDate(date.getDate() + 2)
        }
    }else{
        return date
    }
};

