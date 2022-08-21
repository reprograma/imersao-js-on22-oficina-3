const { calcularValorTotalProjeto, calcularValorBaseProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('valor projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test('retorna o valor total para um projeto básico dado as funcioinalidades pedidas e o valor da hora da desenvolvedora', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario'
        ]

        const valorHora = 60
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(2112)
    })

    test('retorna o total do cálculo do valor base do projeto', () => {
        const totalHorasProjeto = 120
        const valorHora = 100

        const result = calcularValorBaseProjeto(totalHorasProjeto, valorHora)
        expect(result).toEqual(12000)
    })
})