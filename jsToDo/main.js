let but1 = document.querySelector('.button')
let input = document.querySelector('.input')
let ul = document.querySelector('.ul')


but1.addEventListener('click',()=>{
    if(input.value != ""){
        let li = document.createElement('li')
        let but2 = document.createElement('button')
        let but3 = document.createElement('button')
        ul.appendChild(li).append(input.value)
        li.appendChild(but2).append(but2.value = "Готово")
        li.appendChild(but3).append(but3.value = "Удалить")
    }else{
        alert("Нельзя добавить пустое дело")
    }

    
})
