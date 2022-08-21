const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote', () => {
    test('calcular o nível de pacote de acordo com o número de horas máximas trabalhadas', () => {

        const totalHorasProjeto = 200;

        const result = calcularPacote(totalHorasProjeto);

        if(totalHorasProjeto <= 50) {
            expect(result).toEqual('pacote_basico');
        } else if(totalHorasProjeto <= 100) {
            expect(result).toEqual('pacote_intermediario');
        } else if(totalHorasProjeto <= 200) {
            expect(result).toEqual('pacote_premium');
        }

    })
})