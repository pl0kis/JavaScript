// Таймер
// let button = document.querySelector('.button')
// let enterUser = document.querySelector('.input')
// let time = null
// function timer(){
//   if(enterUser.value!=0){
//     enterUser.value = enterUser.value-1
//   }
//   else{
//     button.textContent='Пуск'
//   }
// }

// button.addEventListener('click', ()=>{
//   if (button.textContent == 'Пуск'){
//     time = setInterval(timer, 1000)
//     button.textContent = 'Стоп'
//   }
//   else{
//     button.textContent = 'Пуск'
//     clearInterval(time)
//   }
// })
//Задание 2 
let time = null
let h2 = document.querySelector('.h2')
let input = document.querySelector('.input')


function wait(){
  h2.innerHTML = input.value
    
}

input.addEventListener('input', () =>{ 
  clearTimeout(time)
  time = setTimeout(wait,300) 
})