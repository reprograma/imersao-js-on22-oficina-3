const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Cálculo das horas totais para finalizar um projeto', () => {
    test('Cenário 1: Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas necessárias', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario'
        ]
        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(32)
    });

    test('Cenário 2: Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas necessárias', () => {
        const funcionalidades = [
            'setup',
        ]
        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(8)
    });

    test('Cenário 3: Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas necessárias', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina'
        ]
        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(16)
    });
});