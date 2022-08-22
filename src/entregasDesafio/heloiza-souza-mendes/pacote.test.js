const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');
const { MAX_HORAS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes')
describe("Tipo de pacote ", () => {
    test('Informar o pacote  dado um total de horas por projeto', () => {
        const totalDeHorasDoProjeto = 30;
        const result = calcularPacote(totalDeHorasDoProjeto);
        expect(result).toEqual('pacote_basico')
    })
npm
    test('Informar o pacote  dado um total de horas por projeto', () => {
        const totalHorasProjeto = 90;
        const result = calcularPacote(totalHorasProjeto);
        expect(result).toEqual('pacote_intermediario')
    });

    test('Informar o pacote  dado um total de horas por projeto', () => {
        const totalDeHorasDoProjeto = 200;
        const result = calcularPacote(totalDeHorasDoProjeto);
        expect(result).toEqual('pacote_premium')
    })
})

describe("Tipo de pacote ", () => {
    test('Verifica se existe o pacote selecionado', () => {
        const MAX_HORAS_POR_PACOTE = [
            'pacote_basico',
            'pacote_intermediario',
            'pacote_premium'
        ]
        expect(MAX_HORAS_POR_PACOTE).toContain('pacote_basico');
    })

    test('Verifica se existe o pacote selecionado', () => {

        const MAX_HORAS_POR_PACOTE = [
            'pacote_basico',
            'pacote_intermediario',
            'pacote_premium'
        ]

        expect(MAX_HORAS_POR_PACOTE).toContain('pacote_intermediario');
    })

    test('Verifica se existe o pacote selecionado', () => {
        const MAX_HORAS_POR_PACOTE = [
            'pacote_basico',
            'pacote_intermediario',
            'pacote_premium'
        ]
        expect(MAX_HORAS_POR_PACOTE).toContain('pacote_premium');
    })


})