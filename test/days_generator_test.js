const expect = require('chai').expect;

const generate_days_from = require('../src/utils/days_generator');

describe('DaysGenerator', function () {
    [
        {
            months: [ 'agosto' ]
            , days: [ 'lunes', 'martes' ]
            , days_expected: [
                new Date(2023,7,1),
                new Date(2023,7,7),
                new Date(2023,7,8),
                new Date(2023,7,14),
                new Date(2023,7,15),
                new Date(2023,7,21),
                new Date(2023,7,22),
                new Date(2023,7,28),
                new Date(2023,7,29)
            ]
        }
        , {
            months:[ 'agosto' ]
            , days: [ 'lunes', 'miercoles' ]
            , days_expected: [
                new Date(2023,7,2),
                new Date(2023,7,7),
                new Date(2023,7,9),
                new Date(2023,7,14),
                new Date(2023,7,16),
                new Date(2023,7,21),
                new Date(2023,7,23),
                new Date(2023,7,28),
                new Date(2023,7,30)
            ]
        }
    ].forEach(function (params) {
        context(`cuando se le pasa ${params.months[0]} y los días ${params.days[0]} y ${params.days[1]}`, function () {
            it(`debería generar una lista con la fecha de todos los ${params.days[0]} y ${params.days[1]} de agosto`, function () {

                const days = generate_days_from({
                    months: params.months, days: params.days
                });
                expect(days).to.eql( params.days_expected );
            })
        });
    });

    [
        {
            months: [ 'agosto', 'septiembre' ]
            , days: [ 'martes', 'viernes' ]
            , days_expected: [
                new Date(2023,7,1)
                , new Date(2023,7,4)
                , new Date(2023,7,8)
                , new Date(2023,7,11)
                , new Date(2023,7,15)
                , new Date(2023,7,18)
                , new Date(2023,7,22)
                , new Date(2023,7,25)
                , new Date(2023,7,29)
                , new Date(2023,8,1)
                , new Date(2023,8,5)
                , new Date(2023,8,8)
                , new Date(2023,8,12)
                , new Date(2023,8,15)
                , new Date(2023,8,19)
                , new Date(2023,8,22)
                , new Date(2023,8,26)
                , new Date(2023,8,29)
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
                new Date(2023,8,4),
                new Date(2023,8,5),
                new Date(2023,8,7),
                new Date(2023,8,11),
                new Date(2023,8,12),
                new Date(2023,8,14),
                new Date(2023,8,18),
                new Date(2023,8,19),
                new Date(2023,8,21),
                new Date(2023,8,25),
                new Date(2023,8,26),
                new Date(2023,8,28),
                new Date(2023,9,2),
                new Date(2023,9,3),
                new Date(2023,9,5),
                new Date(2023,9,9),
                new Date(2023,9,10),
                new Date(2023,9,12),
                new Date(2023,9,16),
                new Date(2023,9,17),
                new Date(2023,9,19),
                new Date(2023,9,23),
                new Date(2023,9,24),
                new Date(2023,9,26),
                new Date(2023,9,30),
                new Date(2023,9,31),
                new Date(2023,10,2),
                new Date(2023,10,6),
                new Date(2023,10,7),
                new Date(2023,10,9),
                new Date(2023,10,13),
                new Date(2023,10,14),
                new Date(2023,10,16),
                new Date(2023,10,20),
                new Date(2023,10,21),
                new Date(2023,10,23),
                new Date(2023,10,27),
                new Date(2023,10,28),
                new Date(2023,10,30)
                
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