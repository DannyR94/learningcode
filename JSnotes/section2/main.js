const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

if(nameInput.value === '' || emailInput.value === '') {
    alert('Please complete the fields');
} else {
    console.log('success');
    }
}
// test commit from laptop. Also sync snippets!