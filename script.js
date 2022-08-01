let email = document.getElementById('email');
let number = document.getElementById('number');
let pincode = document.getElementById('pincode');
isEmail = false;
isNumber = false;
isPincode = false;

email.addEventListener('blur', () => {

    let regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-z]){2,7}$/
    let str = email.value;

    if (regex.test(str)) {
        validEmail.classList.remove('show');
        validEmail.classList.add('hide');
        email.style.border = 'none';
        isEmail = true;

    }
    else {
        let validEmail = document.getElementById('validEmail');
        validEmail.classList.remove('hide');
        validEmail.classList.add('show');
        email.style.border = '1px solid red';
        isEmail = false;
    }
})

number.addEventListener('blur', () => {

    let regex = /^([0-9]){10}$/
    let str = number.value;

    if (regex.test(str)) {
        validNumber.classList.remove('show');
        validNumber.classList.add('hide');
        number.style.border = 'none';
        isNumber = true;
    }
    else {
        let validNumber = document.getElementById('validNumber');
        validNumber.classList.remove('hide');
        validNumber.classList.add('show');
        number.style.border = '1px solid red';
        isNumber = false;
    }
})

pincode.addEventListener('blur', () => {

    let regex = /^[1-9]([0-9]){5}$/
    let str = pincode.value;

    if (regex.test(str)) {
        validPincode.classList.remove('show');
        validPincode.classList.add('hide');
        pincode.style.border = 'none';
        isPincode = true;
    }
    else {
        let validPincode = document.getElementById('validPincode');
        validPincode.classList.remove('hide');
        validPincode.classList.add('show');
        pincode.style.border = '1px solid red';
        isPincode = false;
    }
})

let orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (isEmail && isNumber && isPincode) {
        let successMsg = document.getElementById('successMsg');
        successMsg.classList.remove('hide');
        errorMsg.classList.add('hide');
    }
    else {
        let errorMsg = document.getElementById('errorMsg');
        errorMsg.classList.remove('hide');
        errorMsg.classList.add('show');
        successMsg.classList.add('hide');
    }
})