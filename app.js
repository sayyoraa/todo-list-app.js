// Kerakli HTML tag lariga ulanish

const form = document.querySelector(".form");
const input = document.querySelector(".form_input");
const btn = document.querySelector(".add_btn");
const todolist = document.querySelector(".todo_list");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // qayta yuklanish hodisasini o'chiradi
  // input.value - input ichidagi qiymatni olish 
  
  // Agar input ichida space dan boshqa narsa yo'q bo'lsa, dastur to'xtashi kerak
  if (!input.value.trim()) {
    return;
  };

    // list_item class li div yasash kerak
    const item = document.createElement('div')
    // classlist - html elementiga class qo'shish, o'chirish uchun ishlatiladi
    // innerHTML - js o'zgaruvchilari ichiga HTML kod qo'shadi
    item.classList.add('list_item');
    item.innerHTML = `
    <div class="item_info">
        <input type="checkbox" class="checkbox">
        <p class="todo">${input.value}</p>
    </div>
    <button class="remove_btn">
        <img src="./img/trash.svg" width="50" height="50" alt="trash-icon">
    </button>
    `

    const checkbox = item.querySelector('.checkbox')
    const todo = item.querySelector('.todo')
    const remove_btn = item.querySelector('.remove_btn')

    checkbox.addEventListener('change', function(e)  {
        todo.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
    })

    remove_btn.addEventListener('click', () => {
        item.remove()
    })

    todolist.appendChild(item);
    input.value = ''

});
