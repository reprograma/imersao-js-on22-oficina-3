const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calculo das horas totais para finalizar um pacote', () => {
    test('Dado um array com as funcionalidades desejadas no projeto: setup, construcao_1_pagina, formulario e construcao_1_pagina deverá retornar a soma das horas necessárias igual à 40', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'formulario',
            'construcao_1_pagina'  
        ]    
        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(40)
    });
});