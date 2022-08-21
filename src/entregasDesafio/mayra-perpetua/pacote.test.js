const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe('calcular pacote', () => {
    test('calcular um pacote dado o total de horas de um projeto', () =>{
        const TotalHorasProjeto = 50;

        const result = calcularPacote(TotalHorasProjeto);

        expect(result).toEqual('pacote_basico')
    });
});