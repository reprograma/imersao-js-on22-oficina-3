const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote', () => {

  test('calcular o pacote básico do projeto dado um total de horas máximas', () => {
    const totalHorasProjetoBasico = 50;

    const result = calcularPacote(totalHorasProjetoBasico);

    expect(result).toEqual('pacote_basico');
  });

  test('calcular o pacote intermediário do projeto dado um total de horas máximas', () => {
    const totalHorasProjetoIntermediario = 100;

    const result = calcularPacote(totalHorasProjetoIntermediario);

    expect(result).toEqual('pacote_intermediario');
  });

  test('calcular o pacote premium do projeto dado um total de horas máximas', () => {
    const totalHorasProjetoPremium = 200;

    const result = calcularPacote(totalHorasProjetoPremium);

    expect(result).toEqual('pacote_premium');
  });
});