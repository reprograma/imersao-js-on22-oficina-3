const {calcularPacote} = require ('../../dominio/calculadora/Projeto/pacote');

describe ('Calcular pacote', () => {
    test ('testar o pacote básico inserindo sua quantidade de hora', () => {
        const TotalHorasProjeto = 49
        const result = calcularPacote(TotalHorasProjeto);
        expect(result).toEqual ('pacote_basico');
    })
    test ('testar o pacote intermediário inserindo sua quantidade de hora', () => {
        const TotalHorasProjeto = 100
        const result = calcularPacote(TotalHorasProjeto);
        expect(result).toEqual ('pacote_intermediario');
    })
    test ('testar o pacote premium inserindo sua quantidade de hora', () => {
        const TotalHorasProjeto = 200
        const result = calcularPacote(TotalHorasProjeto);
        expect(result).toEqual ('pacote_premium');
    })
})
