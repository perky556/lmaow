console.log("lmao hi");

const enterBtn = document.getElementById('enter_button')
const textInput = document.getElementById('user_text')
const itemList = document.getElementById('item_list')

enterBtn.addEventListener('click', function () {
    if (textInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = textInput.value;

        itemList.appendChild(li);
        textInput.value = '';
        li.addEventListener('click', function () {
            li.remove();
        });
    }
})
