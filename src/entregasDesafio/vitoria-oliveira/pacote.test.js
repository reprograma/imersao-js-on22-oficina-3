const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote', () => {
    test('calcular o pacote dado um total de hora por projeto', () => {
        const totalHorasProjeto = 60;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_intermediario');

    })
})