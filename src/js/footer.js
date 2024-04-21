const footerYear = document.querySelector('.footer-bottom__year');
const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.cookies-box__btn');
const currentDate = new Date();

cookiesBtn.addEventListener('click', () => {
	cookies.classList.add('active');
});

footerYear.textContent = currentDate.getFullYear();
