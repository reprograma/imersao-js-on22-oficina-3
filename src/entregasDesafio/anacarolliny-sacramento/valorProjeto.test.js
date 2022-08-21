const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor Total do Projeto', () => {
    beforeEach(() =>{
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })

    test('Deve retornar o valor do projeto, baseado na quantidade de funcionalidades', () =>{
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

