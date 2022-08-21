const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("calcular o pacote", () => {
  test("calcular o pacote basico", () => {
    const totalHorasProjeto = 50;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("pacote_basico");
  });
  test("calcular o pacote intermediario", () => {
    const totalHorasProjeto = 100;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("pacote_intermediario");
  });
  test("calcular o pacote premium", () => {
    const totalHorasProjeto = 200;
    const result = calcularPacote(totalHorasProjeto);

    expect(result).toEqual("pacote_premium");
  });
});
