const makeRegister = (name) => {
 return { nomeCompleto : name, email : `${name.split(' ').join('_')}@trybe.com`}
}

const newEmployees = (makeRegister) => {
  const employees = {
    id1: makeRegister('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: makeRegister('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: makeRegister('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log (newEmployees(makeRegister))
