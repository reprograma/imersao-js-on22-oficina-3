const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('valor por Hora', () => {
    test('retorna o valor arredandado correto dado o valor recebido no mes', () =>{
        const valorPorMes = 2000
        
        const result = calcularValorPorHora(valorPorMes)

        expect(result).toEqual(12)

    });

});   