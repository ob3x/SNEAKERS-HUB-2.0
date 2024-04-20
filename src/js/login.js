const firstEye = document.querySelector('.firstEye');
const secoundEye = document.querySelector('.secoundEye');
const thirdEye = document.querySelector('.thirdEye');

const loginEmail = document.querySelector('.loginEmail');
const firstPassword = document.querySelector('.firstPassword');
const loginBtn = document.querySelector('.loginBtn');
const loginError = document.querySelector('.loginError');

const nameSurname = document.querySelector('.nameSurname');
const registerEmail = document.querySelector('.registerEmail');
const secoundPassword = document.querySelector('.secoundPassword');
const thirdPassword = document.querySelector('.thirdPassword');
const registerBtn = document.querySelector('.registerBtn');
const registerError = document.querySelector('.registerError');

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

const changeThirdEye = () => {
	if (thirdPassword.type == 'text') {
		thirdPassword.type = 'password';
		thirdEye.classList.remove('eye-active');
	} else {
		thirdPassword.type = 'text';
		thirdEye.classList.add('eye-active');
	}
};

const checkLogin = () => {
	if (loginEmail.value !== '' && firstPassword.value !== '') {
		console.log('zaloguj');
		loginError.textContent = '';
	} else {
		loginError.textContent = 'Uzupełnij wszystkie pola!';
	}
};
const checkRegister = () => {
	if (
		nameSurname.value !== '' &&
		registerEmail.value !== '' &&
		secoundPassword.value !== '' &&
		thirdPassword.value !== ''
	) {
		console.log('zarejestruj');
		registerError.textContent = '';
	} else {
		registerError.textContent = 'Uzupełnij wszystkie pola!';
	}
};

firstEye.addEventListener('click', changeEye);
secoundEye.addEventListener('click', changeSecoundEye);
thirdEye.addEventListener('click', changeThirdEye);
loginBtn.addEventListener('click', checkLogin);
registerBtn.addEventListener('click', checkRegister);
