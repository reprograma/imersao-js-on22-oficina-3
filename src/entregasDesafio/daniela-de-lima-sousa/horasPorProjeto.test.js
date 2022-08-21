const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Cálculo das horas totais para finalizar um projeto', () => {
  test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias', () => {
    const funcionalidades = [
      'setup',
      'construcao_1_pagina',
      'formulario'
    ];

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(32);
  });

  test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias', () => {
    const funcionalidades = [];

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(0);
  });

  test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias', () => {
    const funcionalidades = ['setup'];

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(8);
  });
});
