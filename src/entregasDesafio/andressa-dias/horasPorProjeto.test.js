const  { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('cálculo das horas totais para finalizar um projeto', () => {
    test('dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario'
        ]
        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(32)
    });
});