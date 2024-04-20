const heartBtn = document.querySelector('.nav-box__list-item--heart');
const heartBtnX = document.querySelector('.menu-title__icon');
const heartMenu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

const greyFog = document.querySelector('.grey-fog');
const panda = document.querySelector('.panda');
const cacaoWow = document.querySelector('.cacao-wow');
const universityRed = document.querySelector('.university-red');
const box = document.querySelector('.menu-box');
const number = document.querySelector('.nav-box__list-style--number');

let cardID = 0;
let num = 0;

const heartPopup = () => {
	heartMenu.classList.toggle('menu-active');
	overlay.classList.toggle('active');
	overlay.addEventListener('click', () => {
		heartMenu.classList.remove('menu-active');
		overlay.classList.add('active');
	});
};

const greyFogFun = () => {
	heartPopup();
	if (!document.querySelector('.grey-fogMenu')) {
		const greyFogs = document.createElement('div');
		greyFogs.classList.add('menu-item');
		greyFogs.classList.add('grey-fogMenu');
		greyFogs.setAttribute('id', cardID);
		num++;
		if (num <= 1) {
			heartBtn.classList.add('heart-active');
		}
		greyFogs.innerHTML = ` <a href="grey-fog.html" class="menu-item__link">
        <div class="menu-item__left">
        <img src="dist/img/grey-fog.png" alt="grey-fog" class="menu-item__img">
        <div class="menu-item__left-box">
        <p class="menu-item__text">Nike Dunk Low "Grey Fog"</p>
            <p class="menu-item__price">449 zł</p>
            </div>
            </div>
            </a>
            <div onclick="deleteItem(${cardID})" class="menu-item__x"></div>
            `;
		box.appendChild(greyFogs);
		cardID++;
	}
	number.textContent = num;
};
const pandaFun = () => {
	heartPopup();
	if (!document.querySelector('.pandaMenu')) {
		const panda = document.createElement('div');
		panda.classList.add('menu-item');
		panda.classList.add('pandaMenu');
		panda.setAttribute('id', cardID);
		num++;
		if (num <= 1) {
			heartBtn.classList.add('heart-active');
		}
		panda.innerHTML = ` <a href="panda.html" class="menu-item__link">
            <div class="menu-item__left">
            <img src="dist/img/panda.png" alt="panda" class="menu-item__img">
            <div class="menu-item__left-box">
            <p class="menu-item__text">Nike Dunk Low "Panda"</p>
            <p class="menu-item__price">449 zł</p>
            </div>
            </div>
            </a>
            <div onclick="deleteItem(${cardID})" class="menu-item__x"></div>
            `;
		box.appendChild(panda);
		cardID++;
	}
	number.textContent = num;
};
const cacaoWowFun = () => {
	heartPopup();
	if (!document.querySelector('.cacaoWow-Menu')) {
		const cacaoWow = document.createElement('div');
		cacaoWow.classList.add('menu-item');
		cacaoWow.classList.add('cacaoWow-Menu');
		cacaoWow.setAttribute('id', cardID);
		num++;
		if (num <= 1) {
			heartBtn.classList.add('heart-active');
		}
		cacaoWow.innerHTML = ` <a href="cacao-wow.html" class="menu-item__link">
            <div class="menu-item__left">
            <img src="dist/img/cacao.png" alt="cacao-wow" class="menu-item__img">
            <div class="menu-item__left-box">
            <p class="menu-item__text">Nike Dunk Low "Cacao Wow"</p>
            <p class="menu-item__price">449 zł</p>
            </div>
            </div>
            </a>
            <div onclick="deleteItem(${cardID})" class="menu-item__x"></div>
            `;
		box.appendChild(cacaoWow);
		cardID++;
	}
	number.textContent = num;
};
const universityRedFun = () => {
	heartPopup();
	if (!document.querySelector('.universityRed-Menu')) {
		const universityRed = document.createElement('div');
		universityRed.classList.add('menu-item');
		universityRed.classList.add('universityRed-Menu');
		universityRed.setAttribute('id', cardID);
		num++;
		if (num <= 1) {
			heartBtn.classList.add('heart-active');
		}

		universityRed.innerHTML = ` <a href="university-red.html" class="menu-item__link">
            <div class="menu-item__left">
            <img src="dist/img/university-red.png" alt="University-Red" class="menu-item__img">
            <div class="menu-item__left-box">
            <p class="menu-item__text">Nike Dunk Low "University Red"</p>
            <p class="menu-item__price">459 zł</p>
            </div>
            </div>
            </a>
            <div onclick="deleteItem(${cardID})" class="menu-item__x"></div>
            `;
		box.appendChild(universityRed);
		cardID++;
	}
	number.textContent = num;
};

const deleteItem = (id) => {
	const greyFogDelete = document.getElementById(id);
	box.removeChild(greyFogDelete);
	num--;
	number.textContent = num;
	if (num == 0) {
		number.textContent = '';
		heartBtn.classList.remove('heart-active');
	}
};

heartBtn.addEventListener('click', heartPopup);
heartBtnX.addEventListener('click', heartPopup);
greyFog.addEventListener('click', greyFogFun);
panda.addEventListener('click', pandaFun);
cacaoWow.addEventListener('click', cacaoWowFun);
universityRed.addEventListener('click', universityRedFun);