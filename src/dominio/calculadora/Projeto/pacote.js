const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto 
)[0];
// o teste estava dando errado porque o value não estava com a condicional correta de >=
exports.calcularPacote = calcularPacote;
