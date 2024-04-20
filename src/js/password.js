const email = document.querySelector('.passwordEmail')
const error = document.querySelector('.passwordError')
const btn = document.querySelector('.passwordBtn')


const checkLogin = () => {
	if (email.value !== '') {
		console.log('wyślij');
        error.classList.add('login-error__active')
		error.textContent = 'Wysyłanie...';
		setTimeout(function () {
			error.classList.add('login-error__activete');
			error.textContent = 'Wysłano!';
		}, 1000);
		setTimeout(function () {
			error.classList.remove('login-error__activete');
			error.classList.remove('login-error__active');
			error.textContent = '';
		}, 5000);
	} else {
        error.classList.remove('login-error__active');
        error.classList.remove('login-error__activete');
		error.textContent = 'Wpisz adres e-mail!';
	}
};

btn.addEventListener('click', checkLogin)
