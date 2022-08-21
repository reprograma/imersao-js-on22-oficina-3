const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calculos de horas totais para finalizar um processo', () => {
    test('dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas necessárias', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario',
        ]

        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(32);
    });
});