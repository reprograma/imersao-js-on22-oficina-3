const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Valor por hora', () => {
  test('retorna valor arredondado correto dado o valor recebido no mes', () => {
    const valorPorMes = 2000
    const result = calcularValorPorHora(valorPorMes)
    expect(result).toEqual(12)
  })
})