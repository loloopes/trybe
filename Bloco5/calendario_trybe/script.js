function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();
  createDaysOfTheMonth();
  holidaysOfTheMonth();
  fridaysOfTheMonth();
  holidays('FeriadBLAU');
  holidayListener();
  changeFriday('XablausterS');
  reallyFriday();
  zoomIn();
  zoomOut();
  tasks('cozinhar');

  function fridaysOfTheMonth(){

    
    let li = document.querySelectorAll ('li');

    for (let i in li){
      if(li[i].innerHTML == 4 || li[i].innerHTML == 11 || li[i].innerHTML == 18 || li[i].innerHTML == 25) {
        li[i].innerHTML = 'Xablousious';
        li[i].classList.add('friday');
      }

    }


  }
 
  
  
  function holidaysOfTheMonth(){

    
    let li = document.querySelectorAll ('.day, .Holiday');

    for (let i in li){
      if(i== 25 || i== 26 || i == 32) {
        li[i].innerHTML = 'E feriado';
        li[i].className = 'Holiday';
      }

    }


  }


  function createDaysOfTheMonth(){
    
    
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ul = document.querySelector ('#days');

    for (let i = 0; i<dezDaysList.length; i+=1){
      let days = document.createElement('li');
      days.innerHTML = dezDaysList[i];
      ul.appendChild(days);
      days.className = 'day';
    }
}

function holidayListener(){ 
  const button = document.getElementById('btn-holiday')
  button.addEventListener('click',() => {
  const li = document.querySelectorAll ('.Holiday');
  for (let i in li) { if (li[i].style.backgroundColor != 'red') {
    li[i].style.backgroundColor = 'red';
  } else {
    li[i].style.backgroundColor = '#eee';
  }
  }                                
  })
}; 
  

 

function holidays(holidaysString) {
  //Selecionar o elemento
  //Criar o elemento
  //pai.appendChild(filho)
  const buttonCont = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  buttonCont.appendChild(button);
  button.id='btn-holiday';
  button.innerText=holidaysString;
}


function changeFriday(String) {
  const buttonCont = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  buttonCont.appendChild(button);
  button.id = 'btn-friday';
  button.innerText=String;
}

function reallyFriday(){ 
  const button = document.getElementById('btn-friday')

  button.addEventListener('click',() => {
  const li = document.querySelectorAll ('.day, .Holiday');
  for (let i = 5; i < li.length; i +=7) { if (li[i].style.backgroundColor != 'red') {
    li[i].style.backgroundColor = 'red';
  } else {
    li[i].style.backgroundColor = '#eee';
  }
  }                                
  })
} 


function zoomIn(){
  let daysList = document.querySelector('#days')
  daysList.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}

function zoomOut(){
  let daysList = document.querySelector('#days')
  daysList.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}

function tasks(String){
    const buttonCont = document.querySelector('.my-tasks');
    const span = document.createElement('span');
    buttonCont.appendChild(span);
    span.innerText=String;
  
  }



