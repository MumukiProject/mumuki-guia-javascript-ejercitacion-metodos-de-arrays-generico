it(`Si hacemos despedirAlGrupo(['Agus', 'Gaby', 'Lau', 'Lu']) debería retornar ['Hasta luego Agus', 'Hasta luego Gaby', 'Hasta luego Lau', 'Hasta luego Lu']`, function() {
  let resultado = despedirAlGrupo(['Agus', 'Gaby', 'Lau', 'Lu'])
  assert.deepEqual(resultado, ['Hasta luego Agus', 'Hasta luego Gaby', 'Hasta luego Lau', 'Hasta luego Lu'],`despedirAlGrupo debería retornar ['Hasta luego Agus', 'Hasta luego Gaby', 'Hasta luego Lau', 'Hasta luego Lu'] pero fue ${resultado}`);
})

it(`Si hacemos despedirAlGrupo(['Ro', 'Juli']) debería retornar ['Hasta luego Ro', 'Hasta luego Juli']`, function() {
  let resultado = despedirAlGrupo(['Ro', 'Juli'])
  assert.deepEqual(resultado, ['Hasta luego Ro', 
 'Hasta luego Juli'],`despedirAlGrupo debería retornar ['Hasta luego Ro', 'Hasta luego Juli'] pero fue ${resultado}`);
