const expect = require('chai').expect;

const generate_days_from = require('../src/utils/days_generator');

describe('DaysGenerator', function () {
    [
        {
            months: [ 'agosto' ]
            , days: [ 'lunes', 'martes' ]
            , days_expected: [
                new Date('2023-08-01'),
                new Date('2023-08-07'),
                new Date('2023-08-08'),
                new Date('2023-08-14'),
                new Date('2023-08-15'),
                new Date('2023-08-21'),
                new Date('2023-08-22'),
                new Date('2023-08-28'),
                new Date('2023-08-29')
            ]
        }
        , {
            months:[ 'agosto' ]
            , days: [ 'lunes', 'miercoles' ]
            , days_expected: [
                new Date('2023-08-02'),
                new Date('2023-08-07'),
                new Date('2023-08-09'),
                new Date('2023-08-14'),
                new Date('2023-08-16'),
                new Date('2023-08-21'),
                new Date('2023-08-23'),
                new Date('2023-08-28'),
                new Date('2023-08-30')
            ]
        }
    ].forEach(function (params) {
        context(`cuando se le pasa ${params.months[0]} y los días ${params.days[0]} y ${params.days[1]}`, function () {
            it(`debería generar una lista con la fecha de todos los ${params.days[0]} y ${params.days[1]} de agosto`, function () {

                const days = generate_days_from({
                    months: params.months, days: params.days
                });
                expect(days).to.eql(params.days_expected);
            })
        });
    });

    [
        {
            months: [ 'agosto', 'septiembre' ]
            , days: [ 'martes', 'viernes' ]
            , days_expected: [
                new Date("2023-08-01")
                , new Date("2023-08-04")
                , new Date("2023-08-08")
                , new Date("2023-08-11")
                , new Date("2023-08-15")
                , new Date("2023-08-18")
                , new Date("2023-08-22")
                , new Date("2023-08-25")
                , new Date("2023-08-29")
                , new Date("2023-09-01")
                , new Date("2023-09-05")
                , new Date("2023-09-08")
                , new Date("2023-09-12")
                , new Date("2023-09-15")
                , new Date("2023-09-19")
                , new Date("2023-09-22")
                , new Date("2023-09-26")
                , new Date("2023-09-29")
            ]
        }
    ].forEach(function (params) {
        describe(`cuando se le pasa los meses de ${params.months[0]} y ${params.months[1]}`, function () {
            describe(`y se le pasa los días ${params.days[0]} y ${params.days[1]}`, function () {
                it('debería retornar una lista con los martes y viernes de agosto y septiembre', function () {
                
                    const days = generate_days_from({
                        months: params.months
                        , days: params.days
                    })

                    expect(days).to.eql(params.days_expected);
                })
            })
        })
    });

    [
        {
            months: [ 'septiembre', 'octubre', 'noviembre' ]
            , days: [ 'lunes' ,'martes' ,'jueves' ]
            , days_expected: [
                new Date("2023-09-04"),
                new Date("2023-09-05"),
                new Date("2023-09-07"),
                new Date("2023-09-11"),
                new Date("2023-09-12"),
                new Date("2023-09-14"),
                new Date("2023-09-18"),
                new Date("2023-09-19"),
                new Date("2023-09-21"),
                new Date("2023-09-25"),
                new Date("2023-09-26"),
                new Date("2023-09-28"),
                new Date("2023-10-02"),
                new Date("2023-10-03"),
                new Date("2023-10-05"),
                new Date("2023-10-09"),
                new Date("2023-10-10"),
                new Date("2023-10-12"),
                new Date("2023-10-16"),
                new Date("2023-10-17"),
                new Date("2023-10-19"),
                new Date("2023-10-23"),
                new Date("2023-10-24"),
                new Date("2023-10-26"),
                new Date("2023-10-30"),
                new Date("2023-10-31"),
                new Date("2023-11-02"),
                new Date("2023-11-06"),
                new Date("2023-11-07"),
                new Date("2023-11-09"),
                new Date("2023-11-13"),
                new Date("2023-11-14"),
                new Date("2023-11-16"),
                new Date("2023-11-20"),
                new Date("2023-11-21"),
                new Date("2023-11-23"),
                new Date("2023-11-27"),
                new Date("2023-11-28"),
                new Date("2023-11-30")
                
            ]
        }
    ].forEach(function (params) {
        describe(`cuando se le pasa los meses de ${params.months[0]}, ${params.months[1]} y ${params.months[2]}`, function () {
            describe(`y se le pasa los días ${params.days[0]}, ${params.days[1]} y ${params.days[2]}`, function () {
                it('debería retornar una lista con los martes y viernes de agosto y septiembre', function () {
                
                    const days = generate_days_from({
                        months: params.months
                        , days: params.days
                    })

                    expect(days).to.eql(params.days_expected);
                })
            })
        })
    });
})