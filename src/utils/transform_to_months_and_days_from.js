/**
 * Transformo el array de las fechas en un objeto con los meses
 * y los días de la semana de las fechas
*/
module.exports = function( dates_in ) {
   const dates = dates_in.map ( date => new Date( Date.parse(date)+3600*1000*3) );

   const months = dates.reduce( (result, date) => {
      result.push( date.getMonth()+1 )
      return result
   }, [] );

   const week_days = dates.reduce( (result, date) => {
      result.push( date.getDay() );
      return result;
   }, [] )

   return {
      months: Array.from( new Set( months ) )
      , wdays: Array.from( new Set( week_days ) )
   }
}