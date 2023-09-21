const translate_to_days_number = function (day) {
    return [
        'domingo', 'lunes', 'martes', 'miercoles', 'jueves'
        , 'viernes', 'sabado'
    ].indexOf(day);
}
const MONTHS = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'
    , 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]

const month_days = function (month) {
    const increment = 24 * 3600 * 1000;
    /**
     * VALIDAR DISTANCIA ENTRE MESES PARA DETERMINAR
     * LOS AÑOS DE LAS FECHAS
     **/

    const first_month = month;
    const last_month = (month + 1) % 12
    const CURRENT_YEAR = new Date().getFullYear()
    const LAST_YEAR = first_month < last_month ? CURRENT_YEAR : CURRENT_YEAR + 1;
    const first = new Date(CURRENT_YEAR, first_month, 1);
    const last = new Date(LAST_YEAR, last_month, 1);
    const dates = [];
    for (i = first.valueOf(); i < last.valueOf(); i += increment) {
        dates.push(new Date(i));
    }
    return dates;
}

const generate_days_from = function (params) {
    const months = params.months.map((month) => MONTHS.indexOf(month));
    const days = params.days.map((day) => translate_to_days_number(day));
    return months.reduce((dates, month) => {
        return dates.concat(month_days(month)
            .filter(day => days.includes(day.getDay())))
    }, []);
}


module.exports = generate_days_from;