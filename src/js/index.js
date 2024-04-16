const hearts = document.querySelectorAll('.shop-box__heart');
const footerYear = document.querySelector('.footer-bottom__year');
const currentDate = new Date();


const sizesBtn = document.querySelector('.item-box__right-sizes');
const sizesEl = document.querySelector('.item-box__right-sizes-box');
const arrow = document.querySelector('.item-box__right-sizes--title-icon');

const heartFunction = (e) => {
	e.target.classList.toggle('heart-active');
};


hearts.forEach((heart) => {
    heart.addEventListener('click', heartFunction);
});

sizesBtn.addEventListener('click', () => {
    sizesEl.classList.toggle('sizes-active')
    arrow.classList.toggle('arrow-active')
})
footerYear.textContent = currentDate.getFullYear();