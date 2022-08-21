const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Valor por Hora', () => {
    test('retorna o valor arredondado correto dado o valor recebido no mês', () => {

        const ValorPorMes = 2000

        const result = calcularValorPorHora(ValorPorMes)
        
        expect(result).toEqual(12)
    });
});


