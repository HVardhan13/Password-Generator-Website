const generateBtn = document.querySelector('#generate-btn');
const passwordEl = document.querySelector('#password');

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const generatePassword = () => {
    const length = parseInt(document.querySelector('#length').value);
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[];,.<>';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset[getRandomInt(charset.length)];
    }
    passwordEl.innerHTML = password;
};
generateBtn.addEventListener('click', generatePassword);