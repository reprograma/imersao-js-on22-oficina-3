const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');


describe('Calcula horas totais para finalizar um projeto', () => {
  test('Com base em funcionalidades desejadas no projeto, retorna a soma das horas necessárias',()=>{
    const funcionalidades = ['setup', 'formulario'];
    const horas = calcularHorasDeProjeto(funcionalidades);
    expect(horas).toEqual(24);
  })
})