const { expect } = require('chai')
const transform_to_months_and_days_from = require("../src/utils/transform_to_months_and_days_from")

describe('Transformar una lista de fechas a 2 array de meses y días de la semana', function () {
   [
      {
         dates: ['2023-09-11 03:00']
         , month: [9]
         , wday: [1]
      }, {
         dates: ['2023-09-12 03:00']
         , month: [9]
         , wday: [2]
      }, {
         dates: ['2023-09-11 03:00', '2023-09-12 03:00']
         , month: [9]
         , wday: [1,2]
      }, {
         dates: ['2023-09-11 03:00', '2023-09-14 03:00']
         , month: [9]
         , wday: [1,4]
      }, {
         dates: [
            '2023-09-04 06:00',
            '2023-09-06 06:00',
            '2023-09-11 06:00',
            '2023-09-13 06:00',
            '2023-09-18 06:00',
            '2023-09-20 06:00',
            '2023-09-25 06:00',
            '2023-09-27 06:00'
         ], month: [9], wday: [1, 3]
      }, {
         dates: [
            '2023-09-04T06:00', '2023-09-07T06:00',
            '2023-09-11T06:00', '2023-09-14T06:00',
            '2023-09-18T06:00', '2023-09-21T06:00',
            '2023-09-25T06:00', '2023-09-28T06:00',
            '2023-10-02T06:00', '2023-10-05T06:00',
            '2023-10-09T06:00', '2023-10-12T06:00',
            '2023-10-16T06:00', '2023-10-19T06:00',
            '2023-10-23T06:00', '2023-10-26T06:00',
            '2023-10-30T06:00', '2023-11-02T06:00',
            '2023-11-06T06:00', '2023-11-09T06:00',
            '2023-11-13T06:00', '2023-11-16T06:00',
            '2023-11-20T06:00', '2023-11-23T06:00',
            '2023-11-27T06:00', '2023-11-30T06:00'
         ], month: [9, 10, 11], wday: [1, 4]
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