const add_button = document.querySelector('.arrow-choose>button:first-child');
const remove_button = document.querySelector('.arrow-choose>button:last-child');
const number_field = document.querySelector('.quantity>p');

let number_field_value = 1;

number_field.innerText = number_field_value;

add_button.addEventListener('click', addProducts);
remove_button.addEventListener('click', removeProducts);

function addProducts() {
    number_field_value++;
    number_field.innerText = number_field_value;
}

function removeProducts() {
    if (number_field_value==0) {
        alert('Vous ne pouvez pas descendre en dessous de 0 !')
    }
    else {
        number_field_value--;
        number_field.innerText = number_field_value;
    }
}