const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
        pacote.calcularPacote.mockReturnValue('pacote_intermediario')
        pacote.calcularPacote.mockReturnValue('pacote_avançado')

    })

    test('Dada a execução das funcionalidades: setup, construcao_1_pagina e formulario executando as atividades oir hora no valor de 60 deverá retorna o valor total para 0 projeto básico igual à 2112', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario'
        ]    
        const valorHora = 60;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toEqual(2112)
    });
});