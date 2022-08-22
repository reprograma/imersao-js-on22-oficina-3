const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote', () => {
        test('O total de horas por projeto quando o pacote for menor que 100, é intermediário.', () => {
        const totalDeHorasPorProjeto = 99;
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_intermediario');
        expect(result).not.toEqual('pacote_basico'); //cenário hipotetico quando espero que o cénario não aconteça;
        expect(result).not.toEqual('teste_válido'); //cenário hipotetico quando espero que o cénario não aconteça;
    });

    test('O total de horas por projeto quando o pacotefor for menor que 50, é básico', () => {
        const totalDeHorasPorProjeto = 49;
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico');
        expect(result).not.toEqual('pacote_premium');
        expect(result).not.toEqual('teste_válido'); 
    });

    test('O total de horas por projeto quando o pacote for menor que 200, o pacote é premium', () => {
        const totalDeHorasPorProjeto = 199;
        const result = calcularPacote(totalDeHorasPorProjeto);
         
        expect(result).toEqual('pacote_premium');
        expect(result).not.toEqual('pacote_basico');
        expect(result).not.toEqual('teste_válido');
    });
});