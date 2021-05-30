const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
let myWebpage = document.getElementById('mySpotrybefy');
const text = document.querySelector('#input');

function changeClass1(){ 
  divUm.className = 'tech';
  divDois.classList.remove('tech');
  divTres.classList.remove('tech');

}


function changeClass2(){ 
  divDois.className = 'tech';
  divUm.classList.remove('tech');
  divTres.classList.remove('tech');

}


function changeClass3(){ 
  divTres.className = 'tech';
  divUm.classList.remove('tech');
  divDois.classList.remove('tech');

}


function changeDiv(){
  let divTest = document.querySelector('.tech');
  divTest.innerText = input.value;
}

function changeColor(){

  myWebpage.style.backgroundColor='Green';
  myWebpage.innerText = 'Deveria ser um link externo';
  console.log('testandp');
} 

function goToWeb(){
  myWebpage.src='www.google.com';
  myWebpage.href='www.google.com';
  myWebpage.target='_blank';
  console.log('teste dblclick');
  }
// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

    divUm.addEventListener('click', changeClass1);
    divDois.addEventListener('click', changeClass2);
    divTres.addEventListener('click', changeClass3);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

    text.addEventListener('input', changeDiv)


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

  myWebpage.addEventListener('dblclick', goToWeb)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
  
  myWebpage.addEventListener('mouseover', changeColor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.