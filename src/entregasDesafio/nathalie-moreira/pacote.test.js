const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular o pacote dado o total de hora do projeto', ()=>{
    
    test('Calcular pacote básico', ()=>{
        const totalHorasProjeto = 50;
        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_basico');
    });

    test('Calcular pacote intermediário', ()=>{
        const totalHorasProjeto = 60;
        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_intermediario');
    });

    test('Calcular pacote premium', ()=>{
        const totalHorasProjeto = 200;
        const result = calcularPacote(totalHorasProjeto);

        expect(result).toEqual('pacote_premium');
    });

});