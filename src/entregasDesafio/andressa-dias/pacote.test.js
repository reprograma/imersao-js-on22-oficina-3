const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular o pacote', () => {
    test('dado um total de horas de projeto básico, retornar o mesmo', () => {
        const totalHorasProjeto = 50
        const result = calcularPacote(totalHorasProjeto)

        expect(result).toEqual('pacote_basico')
    })

    test('dado um total de horas de projeto intermediário, retornar o mesmo', () => {
        const totalHorasProjeto = 100
        const result = calcularPacote(totalHorasProjeto)

        expect(result).toEqual('pacote_intermediario')
    })

    test('dado um total de horas de projeto premium, retornar o mesmo', () => {
        const totalHorasProjeto = 200
        const result = calcularPacote(totalHorasProjeto)

        expect(result).toEqual('pacote_premium')
    })
})