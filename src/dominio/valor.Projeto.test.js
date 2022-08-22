   const { calcularValorTotalProjeto } = require('../dominio/calculadora/Projeto/valorProjeto.js');
    const pacote = require('../dominio/calculadora/Projeto/pacote.js')

    jest.mock('../dominio/calculadora/Projeto/pacote.js')

    describe('valor projeto', () => {
        beforeEach(() => {
            pacote.calcularPacote.mockReturnValue('pacote_basico')
        })

        test('retorna o valor total para um pacote básico dado as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
               const funcionalidades = [
                'setup',
                'construcao_1_pagina',
                'formulario'
               ]
               
             const valorHora = 60
             const result = calcularValorTotalProjeto(funcionalidades, valorHora )

             expect(result).toEqual(2112)
        })
    })


  