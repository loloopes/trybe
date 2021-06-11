const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'PR', 'SC', 'SP', 'SE', 'TO'];
const dropDown = document.getElementById('estado');

function addEstado (){
  for (let index = 0; index < estados.length; index += 1){
    let mu = document.createElement('option')
    mu.value = estados[index];
    mu.innerHTML = estados[index];
    dropDown.appendChild(mu);
  }
}

addEstado ()