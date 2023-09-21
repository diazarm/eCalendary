const translate_to_days_number = function( day ) {
    return [
        'lunes', 'martes', 'miercoles', 'jueves'
        , 'viernes', 'sabado', 'domingo'
    ].indexOf( day );
}
const translate_to_months_number = function( month ) {
    return [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'
        , 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ].indexOf(month)+1;
}

const generate_days_from = function (params) {
    const month_days = function (month) {
        const increment = 24 * 3600 * 1000;
        const converter = ['01', '02', '03', '04', '05', '06', '07', '08', '09'
            , '10', '11', '12'];
        const first = new Date(`2023-${converter[month-1]}-01`);
        const last = new Date(`2023-${converter[month]}-01`);
        const dates = [];
        for (i = first.valueOf(); i < last.valueOf(); i += increment) {
            dates.push(new Date(i));
        }
        return dates;
    }
    const months = params['months'].map( (month) => translate_to_months_number( month ) );
    const days = params['days'].map( (day) => translate_to_days_number(day) );
    return months.reduce((dates, month) => {
        return dates.concat(month_days(month)
            .filter(day => days.includes(day.getDay())))
    }, []);
}

module.exports = generate_days_from;