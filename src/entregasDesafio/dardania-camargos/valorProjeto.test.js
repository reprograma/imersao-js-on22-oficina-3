const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('valor projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })

    test('Retorna o valor total para um projeto básico dados as funcionalidades pedidades e o valor cobrado pela dev.', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario'
        ]
        const valorHora = 60
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(2112)
    });
});