const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular Pacote', () => {
    test('Cenário 1: Calcular o pacote dado um total de horas por projeto - Pacote Básico', () => {
        const totalHorasProjeto = 50;
        
        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_basico');

    });

    test('Cenário 2: Calcular o pacote dado um total de horas por projeto - Pacote Intermediário', () => {
        const totalHorasProjeto = 100;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_intermediario');

    });

    test('Cenário 3: Calcular o pacote dado um total de horas por projeto - Pacote Premium', () => {
        const totalHorasProjeto = 200;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_premium');

    });

    test('Cenário 4: Calcular o pacote dado um total de horas por projeto - Pacote Indisponível', () => {
        const totalHorasProjeto = 201;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_indisponivel');
    });
});