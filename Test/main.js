// Задание 1

// let inputName = document.createElement('input')
// let inputFirst = document.createElement('input')
// let button = document.createElement('button')

// button.className = 'but'
// inputName.className = 'inputN'
// inputFirst.className = 'inputF'

// button.textContent = 'Отправить'
// inputName.placeholder = 'Имя'
// inputFirst.placeholder = 'Фамилия'




// let main = document.querySelector('.main')

// main.append(inputName)
// main.append(inputFirst)
// main.append(button)


// button.addEventListener('click',()=>{
//     alert(`${inputName.value} ${inputFirst.value}`)
//     inputName.value = ''
//     inputFirst.value = ''
// })

// Задание 2


// let inputFirst = document.createElement('input')
// let inputSecond = document.createElement('input')
// let button = document.createElement('button')

// button.className = 'but'
// inputFirst.className = 'inputF'
// inputSecond.className = 'inputS'

// button.textContent = 'Отправить на сравнение'
// inputFirst.placeholder = 'Первое число'
// inputSecond.placeholder = 'Второе число'

// let main = document.querySelector('.main')

// main.append(inputFirst)
// main.append(inputSecond)
// main.append(button)


// button.addEventListener('click',()=>{
//     if(inputFirst.value == '' || inputSecond.value == '' || isNaN(inputFirst.value) == true || isNaN(inputSecond.value) == true){
//         alert('Вы ничего не ввели или ввели строку')
//     }else{

//     if(inputFirst.value > inputSecond.value){
//         alert('Первое число больше второго')
//     }else if(inputFirst.value < inputSecond.value){
//         alert('Второе число больше первого')
//     }else{
//         alert('Оба числа равны')
//     }

// }
//     inputFirst.value = ''
//     inputSecond.value = ''
// })


// Задание 3
    
//     let array = []
//     let result = 0
//     let second = 0
//     enter(array,second)
//     function enter(array,second) {
        
//         second = prompt('Введите число')
//         if(second != null){

//            array.push(second) 
//            enter(array,second)
           
//         }else{
//             check_result(array,result)
//         }
//     }
    
    
// function check_result(array,result){
//     for(let i = 0;i<array.length;i++){
//         if(isNaN(array[i]) == true){
//             console.log('Строка')
//         }else{
//             result = result + parseInt(array[i])
//         }
//     }
//     alert(result)
// }