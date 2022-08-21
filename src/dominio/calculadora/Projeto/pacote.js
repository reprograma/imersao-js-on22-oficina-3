const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([_, value]) => value >= totalDeHorasPorProjeto
)[0];

exports.calcularPacote = calcularPacote;
