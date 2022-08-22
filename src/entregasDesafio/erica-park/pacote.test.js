const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('calcular pacote', () => {
  test('calcular o pacote dado um total de hora por projeto com até 50 horas', () => {
    const totalHorasProjeto = 50;

    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual('pacote_basico')
  });
  test('calcular o pacote dado um total de hora por projeto com até 100 horas', () => {
    const totalHorasProjeto = 100;

    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual('pacote_intermediario')
  });


  test('calcular o pacote dado um total de hora por projeto com até 200 horas', () => {
    const totalHorasProjeto = 200;

    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual('pacote_premium')
  });

});
