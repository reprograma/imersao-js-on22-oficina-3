const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Calcular Valor por hora', () => {
    test('Dado um valor recedido por mês igual a 2000 o mesmo deverá retornar o valor por hora igual à 12', () => {
        const valorPorMes = 2000

        const result = calcularValorPorHora(valorPorMes)

        expect(result).toEqual(12)
    });
})


