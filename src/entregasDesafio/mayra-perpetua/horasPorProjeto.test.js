const {calcularValorPorHora, calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe ('Calculo das horas totais para finalizar um projeto', () =>{
    test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessarias',() => {

    const funcionalidades = [
        'setup',
        'construcao_1_pagina',
        'formulario',
        'construcao_1_pagina',
    ]

    const result = calcularHorasDeProjeto(funcionalidades);
    expect(result).toEqual(40)
})
});