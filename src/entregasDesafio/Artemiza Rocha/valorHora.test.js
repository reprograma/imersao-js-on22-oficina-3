
const{ calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('valor por hora', () => {
    test('retorna o valor arredondado correto dado o valor recebido no mês', ()=> {
         const valorPorMes = 2000

         const result = calcularValorPorHora(valorPorMes)

         expect(result).toEqual(12)
    });
});

