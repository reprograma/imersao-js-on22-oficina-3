const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calculo das horas totais para finalizar o projeto', () => {
  test('Dado um array com as funcionalidades desejadas no projeto, retorna', () => {
    const funcionalidades = [
      'setup',
      'construcao_1_pagina',
      'formulario'
    ]
    const result = calcularHorasDeProjeto(funcionalidades)
    expect(result).toEqual(32)
  })
})