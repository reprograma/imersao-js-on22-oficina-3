const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcula o tipo de pacote', () =>{

    test('Calcula qual o tipo de pacote dado o total de horas de um projeto', () =>{
        const totalHorasProjeto = 50;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_basico')
    });

    test('Calcula qual o tipo de pacote dado o total de horas de um projeto', () =>{
        const totalHorasProjeto = 100;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_intermediario')
    });

    test('Calcula qual o tipo de pacote dado o total de horas de um projeto', () =>{
        const totalHorasProjeto = 200;

        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_premium')
    });

});