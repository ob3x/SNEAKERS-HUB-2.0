const heartBtn = document.querySelector('.nav-box__list-item--heart');
const heartBtnX = document.querySelector('.menu-title__icon');
const heartMenu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');


const heartPopup = () => {
	heartMenu.classList.toggle('menu-active');
	overlay.classList.toggle('active');
	overlay.addEventListener('click', () => {
		heartMenu.classList.remove('menu-active');
		overlay.classList.add('active');
	});
};

heartBtn.addEventListener('click', heartPopup);
heartBtnX.addEventListener('click', heartPopup);
