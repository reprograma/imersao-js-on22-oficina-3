// Testes aqui

const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');
const { calcularValorBaseProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

describe('calcularValorHora', () => {
  test('Deve retornar o valor arredondado do valor hora', () => {
    const rendaMensal = 2000
    const valorHora = calcularValorPorHora(rendaMensal);
    //expect(valorHora).toBe(12);
    expect(valorHora).toEqual(12);
    // o certo aqui é usar o toEqual devido ele deixar estrito ao valor, tipo e é mais completo
  })

  test('deve retornar o valor do calculo base do projeto',()=>{
    const valorHora = calcularValorPorHora(2000);
    const totalDeHorasPorProjeto = 100;
    const valorBaseProjeto = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

      expect(valorBaseProjeto).toEqual(1200);
    })
 
})