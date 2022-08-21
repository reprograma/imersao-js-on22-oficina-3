const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('valor projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    });

    test('Cenário 1: Retorna o valor total para um projeto básico dado as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario'
        ] // soma = 32
        const valorHora = 60
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(2112)
    });

    test('Cenário 2: Retorna o valor total para um projeto básico dado as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina'
        ] // soma = 16
        const valorHora = 60
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(1056)
    });

    test('Cenário 3: Retorna o valor total para um projeto básico dado as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina'
        ] // soma = 16
        const valorHora = 100
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(1760)
    });

});