
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote', () => {
  test('calcular o pacote dado um total de hora por projeto', () => {
           const TotalHorasProjeto = 50
           const result = calcularPacote(TotalHorasProjeto);
          
           calcularPacote(TotalHorasProjeto)
      
      });
    
      test('calcular o pacote dado um total de hora por projeto', () => {
        const TotalHorasProjeto = 100
        const result = calcularPacote(TotalHorasProjeto);
       
        calcularPacote(TotalHorasProjeto)

    });
    test('calcular o pacote dado um total de hora por projeto', () => {
        const TotalHorasProjeto = 200
        const result = calcularPacote(TotalHorasProjeto);
       
           calcularPacote(TotalHorasProjeto)
   });

});