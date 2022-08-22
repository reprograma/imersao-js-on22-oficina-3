const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor projeto', ()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })

    test('Retorna o valor para um projeto básico dado as funcionalidades pedidas e o valor da hora da desenvolvedora', ()=>{
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario'
        ]

        const valorHora = 60;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toEqual(2112);

    })
})