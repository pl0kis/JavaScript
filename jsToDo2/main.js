(function(){
    const main = document.querySelector('.main')
    function createAppList(){
      const name = document.createElement('h1')
      name.textContent = "Список дел"
      name.className = "name"
      name.id = "name"
      main.append(name)
    }
    createAppList()
  
    function createTodoItemForm() {
      const form = document.createElement('form')
      form.className="form"
      main.append(form)
  
      const input = document.createElement('input')
      input.className='input'
      input.id='input'
      form.append(input)
  
      const buttonAdd=document.createElement('button')
      buttonAdd.className='class="waves-effect waves-light btn-small'
      buttonAdd.id='buttonAdd'
      buttonAdd.innerText='Добавить дело'
      buttonAdd.type='button'
      form.append(buttonAdd)
      buttonAdd.addEventListener('click', createTodoItem)
      
      
      
      
    }
    createTodoItemForm()
  
    function createTodoList() {
      const ul = document.createElement('ul')
      ul.className='ul'
      ul.id='ul'
      main.append(ul)
    }
    createTodoList()
  
    function createTodoItem(){
      const ul = document.getElementById('ul')
      const input = document.getElementById('input')
      const li = document.createElement('li')
      li.className = 'collection-item'
      li.id='id'
      li.style="list-style-type: none"
      li.textContent=input.value
      
  
      const buttons = document.createElement('div')
      buttons.className='buttons'
      li.append(buttons)
  
      let buttonDone=document.createElement('button')
      buttonDone.type='button'
      buttonDone.className='class="waves-effect waves-light btn-small'
      buttonDone.id='buttonDone'
      buttonDone.textContent='Выполнено'
      buttonDone.addEventListener('click',()=>{
        li.style.backgroundColor = 'green'
      })
      buttons.append(buttonDone)
  
      let buttonDelet=document.createElement('button')
      buttonDelet.type='button'
      buttonDelet.className='class="waves-effect waves-light btn-small'
      buttonDelet.id='buttonDelet'
      buttonDelet.textContent='Удалить'
      buttonDelet.addEventListener('click', ()=>{
        li.remove(EventTarget)
      })
      buttons.append(buttonDelet)
  
      ul.append(li)
    }
  })()