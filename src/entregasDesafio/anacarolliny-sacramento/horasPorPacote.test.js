const {calcularPacote}=require('../../dominio/calculadora/Projeto/pacote')


describe('Calcula tipo de pacote por horas trabalhadas',()=>{
  test('Retorna total de hora para pacote básico',()=>{
    const totalDeHorasPorProjeto = 50;
    if(totalDeHorasPorProjeto<=50){
      expect(calcularPacote(totalDeHorasPorProjeto)).toBe('pacote_basico')
    }
    
  } )

  test('Retorna total de hora para pacote intermediário',()=>{
    const totalDeHorasPorProjeto = 100;
    if(totalDeHorasPorProjeto>50 && totalDeHorasPorProjeto<=100){
      expect(calcularPacote(totalDeHorasPorProjeto)).toBe('pacote_intermediario')
    }
    
  })

  test('Retorna total de hora para pacote premium',()=>{
    const totalDeHorasPorProjeto = 200;
    if(totalDeHorasPorProjeto>100){
      expect(calcularPacote(totalDeHorasPorProjeto)).toBe('pacote_premium')
    }
    
  })
})