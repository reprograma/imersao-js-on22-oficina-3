const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote', () => {
    test('retornar pacote_basico dado um total de horas por projeto menor ou igual à 50', () => {
        const totalHorasProjeto = 50;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_basico')
    });

    test('retornar pacote_intermediario dado um total de horas por projeto entre 51 e 100', () => {
        const totalHorasProjeto = 100;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_intermediario')
    });

    test('retornar pacote_premium dado um total de horas por projeto entre 101 e 200', () => {
        const totalHorasProjeto = 200;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_premium')
    });
});