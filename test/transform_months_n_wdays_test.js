const { expect } = require('chai')
const transform_to_months_and_days_from = require("../src/utils/transform_to_months_and_days_from")

describe('Transformar una lista de fechas a 2 array de meses y días de la semana', function () {
   [
      {
         dates: ['2023-09-11']
         , month: [8]
         , wday: [1]
      }, {
         dates: ['2023-09-12']
         , month: [8]
         , wday: [2]
      }, {
         dates: ['2023-09-11', '2023-09-12']
         , month: [8]
         , wday: [1,2]
      }, {
         dates: ['2023-9-11', '2023-9-14']
         , month: [8]
         , wday: [1,4]
      }, {
         dates: [
            '2023-09-04','2023-09-06','2023-09-11',
            '2023-09-13','2023-09-18','2023-09-20',
            '2023-09-25','2023-09-27'
         ], month: [8], wday: [1, 3]
      }, {
         dates: [
            '2023-09-04', '2023-09-07','2023-09-11', '2023-09-14',
            '2023-09-18', '2023-09-21','2023-09-25', '2023-09-28',
            '2023-10-02', '2023-10-05','2023-10-09', '2023-10-12',
            '2023-10-16', '2023-10-19','2023-10-23', '2023-10-26',
            '2023-10-30', '2023-11-02','2023-11-06', '2023-11-09',
            '2023-11-13', '2023-11-16','2023-11-20', '2023-11-23',
            '2023-11-27', '2023-11-30'
         ], month: [8, 9, 10], wday: [1, 4]
      }

   ].forEach(params => {
      context(`cuando pasamos ${params.dates} fecha`, function () {
         it(`debería retornar el objeto con una propiedad "month" con ${params.month} y "wdays" con ${params.wday}`, function () {
            const dates = params.dates
            const transformed = transform_to_months_and_days_from(dates);
            expect(transformed).to.eql({
               months: params.month, wdays: params.wday
            })
         })
      })
   })
})