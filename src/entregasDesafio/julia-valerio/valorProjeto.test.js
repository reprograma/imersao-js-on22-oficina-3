const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const { calcularValorBaseProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('retorna o valor total para um projeto, dado as funcionalidades pedidas e o valor da hora da dev', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico')
  })

  test('retorna o valor base de um projeto', () => {
    const totalDeHorasPorProjeto = 32
    const valorHora = 60
    const result = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora)

    expect(result).toEqual(1920)
  })

  test('retorna o valor total para um projeto no pacote basico', () => {
    const funcionalidades = [
      'setup',
      'construcao_1_pagina',
      'formulario'
    ]
    const valorHora = 60
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(result).toEqual(2112)
  })

  test('retorna o valor total para um projeto no pacote intermediario', () => {
    const funcionalidades = [
      "formulario",
      "responsividade",
      "integracao_api_propria",
      "otimizacao_seo",
      "integracao_mailchimp"
    ]
    const valorHora = 60
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(result).toEqual(5280)
  })

  test('retorna o valor total para um projeto no pacote premium', () => {
    const funcionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria"
    ]
    const valorHora = 60
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)

    expect(result).toEqual(6864)
  })
});