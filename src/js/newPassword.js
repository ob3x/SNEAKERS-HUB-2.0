const firstEye = document.querySelector('.firstEye');
const secoundEye = document.querySelector('.secoundEye');
const firstPassword = document.querySelector('.firstPassword');
const secoundPassword = document.querySelector('.secoundPassword');
const passwordBtn = document.querySelector('.passwordBtn');
const error = document.querySelector('.passwordError');

const changeEye = () => {
	if (firstPassword.type == 'text') {
		firstPassword.type = 'password';
		firstEye.classList.remove('eye-active');
	} else {
		firstPassword.type = 'text';
		firstEye.classList.add('eye-active');
	}
};

const changeSecoundEye = () => {
	if (secoundPassword.type == 'text') {
		secoundPassword.type = 'password';
		secoundEye.classList.remove('eye-active');
	} else {
		secoundPassword.type = 'text';
		secoundEye.classList.add('eye-active');
	}
};

const checkInputs = () => {
	if (firstPassword.value !== '' && secoundPassword.value !== '') {
		console.log('wyślij');
        error.classList.add('login-error__active')
		error.textContent = 'Zmienianie...';
		setTimeout(function () {
			error.classList.add('login-error__activete');
			error.textContent = 'Zmieniono!';
		}, 1000);
		setTimeout(function () {
			error.classList.remove('login-error__activete');
			error.classList.remove('login-error__active');
			error.textContent = '';
		}, 5000);
	} else {
        error.classList.remove('login-error__active');
        error.classList.remove('login-error__activete');
		error.textContent = 'Uzupełnij wszystkie pola!';
	}
};

firstEye.addEventListener('click', changeEye);
secoundEye.addEventListener('click', changeSecoundEye);
passwordBtn.addEventListener('click', checkInputs);
