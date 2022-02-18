const tooglePasswordBtn = document.getElementById('#show-psd');
const inputValue = document.getElementById('#password');

window.addEventListener('load', showTooglePasswordBtn);
tooglePasswordBtn.addEventListener('click', tooglePassword);

function showTooglePasswordBtn(){

    console.log('FREE')
    if (inputValue.innerHTML === 'null'){
        tooglePasswordBtn.style.display = 'none';
        console.log('NONEEEE');
    }
}

function tooglePasswordBtn(){

    if(inputValue.type === 'password'){
        inputValue.type = 'text';
        tooglePasswordBtn.textContent = 'Hide password'
        tooglePasswordBtn.setAttribute('aria-label', 'Hide password')
    }
}

