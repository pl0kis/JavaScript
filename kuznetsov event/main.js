// Задание 1
// let button = document.querySelector('.button')
// function eventAlert(){
//   alert('Привет, мир!')
// }
// button.onclick = eventAlert

// Задание 2
// let button = document.querySelector('.button')
// let input = document.querySelector('.input')
// button.onclick = function eventClick(){
//   input.value = 'test@email.ru'
// }

// Задаине 3
// let button = document.querySelector('.button')
// let input = document.querySelector('.input')
// button.onclick = function eventClick(){
// if (input.value == ""){
//     alert('Вы ничего не ввели в поле')
//     }
// else{
// alert('Вы ввели текст инпута')
//     }
// }

// Задание 4
// let button = document.querySelector('.button')
// let input1 = document.querySelector('.input1')
// let input2 = document.querySelector('.input2')


// button.onclick = function eventRotate(){
//   let arrayValue = [input1.value, input2.value]

//   input1.value = arrayValue[1]
//   input2.value = arrayValue[0]
// }

// Задание 5
// let but1 = document.querySelector('.button1')
// let but2 = document.querySelector('.button2')
// let input = document.querySelector('.input')
// but1.onclick = function Unblock(){
//   input.disabled = false
// }
// but2.onclick = function Block(){
//   input.disabled = true
// }

// Задание 6
// let button = document.querySelector('.button')
// let square = document.querySelector('.square')
// button.addEventListener('click', () => {
//   if (button.textContent == "Скрыть"){
//     square.style = "background-color:white"
//     button.textContent = "Показать"
//   }
//   else{
//     square.style="background-color: red"
//     button.textContent = "Скрыть"
//   }
// })

// Задание 7
// let square = document.querySelector('.square')
// square.addEventListener('mouseover', () => {
//   square.style = "background-color: green" 
// })
// square.addEventListener('mouseout', () => {
//   square.style = "background-color: red" 
// })

// Задание 8
// let squares = document.querySelectorAll('.square')
// for(let squrs of squares){
//     squrs.addEventListener('click',()=>{
//         if(squrs.style.backgroundColor == 'red'){
//             squrs.style.backgroundColor = 'green'
            

//             for(let Squrs of squares){
//                 if(Squrs != squrs){
//                     Squrs.style.backgroundColor = 'red'
//                 }
//             }
//         }else{
//             squrs.style.backgroundColor = 'red'
//         }
//     })
// }

// Задание 9
// Не получилось
let input = document.querySelector('.input')

let num = document.querySelector('.num')
let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let num3 = document.querySelector('.num3')
let num4 = document.querySelector('.num4')
let num5 = document.querySelector('.num5')
let num6 = document.querySelector('.num6')
let num7 = document.querySelector('.num7')
let num8 = document.querySelector('.num8')
let num9 = document.querySelector('.num9')
let num10 = document.querySelector('.num10')
let num11 = document.querySelector('.num11')
let num12 = document.querySelector('.num12')
let num13 = document.querySelector('.num13')
let num14 = document.querySelector('.num14')


num.addEventListener('click',()=>{
    input.value = input.value + 0
})
num1.addEventListener('click',()=>{
    input.value = input.value + 1
})
num2.addEventListener('click',()=>{
    input.value = input.value + 2
})
num3.addEventListener('click',()=>{
    input.value = input.value + 3
})
num4.addEventListener('click',()=>{
    input.value = input.value + 4
})
num5.addEventListener('click',()=>{
    input.value = input.value + 5
})
num6.addEventListener('click',()=>{
    input.value = input.value + 6
})
num7.addEventListener('click',()=>{
    input.value = input.value + 7
})
num8.addEventListener('click',()=>{
    input.value = input.value + 8
})
num9.addEventListener('click',()=>{
    input.value = input.value + 9
})
num10.addEventListener('click',()=>{
    input.value = input.value + "*"
})
num11.addEventListener('click',()=>{
    input.value = input.value + "/"
})
num12.addEventListener('click',()=>{
    input.value = input.value + "+"
})
num13.addEventListener('click',()=>{
    input.value = input.value + "-"
})
num14.addEventListener('click',()=>{
    
})

