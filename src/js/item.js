const sizesBtn = document.querySelector('.item-box__right-sizes');
const sizesEl = document.querySelector('.item-box__right-sizes-box');
const arrow = document.querySelector('.item-box__right-sizes--title-icon');
const sizeItems = document.querySelectorAll('.item-box__right-sizes-box--item');
const sizeTitle = document.querySelector('.item-box__right-sizes--title-text');

const changeTitle = (e) => {
    sizeTitle.textContent = e.target.textContent;
};
sizesBtn.addEventListener('click', () => {
	sizesEl.classList.toggle('sizes-active');
	arrow.classList.toggle('arrow-active');
});
sizeItems.forEach((item) => {
	item.addEventListener('click', changeTitle);
});
