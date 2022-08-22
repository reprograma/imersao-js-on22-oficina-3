const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote', () => {
    test ('calcular o pacote dado um total e hora por projeto', () => {

        const totalHorasProjeto = 70;
        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_intermediario')
    });

    test('calcular o pacote dado um total de horas por projeto', () =>{
        
        const totalHorasProjeto = 40;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_basico')
    });

    test('calcular o pacote dado um total de horas por projeto', () =>{
        const totalHorasProjeto =200;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_premium')
    });

});
