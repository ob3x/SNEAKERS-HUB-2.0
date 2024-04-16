const hearts = document.querySelectorAll('.shop-box__heart');
const footerYear = document.querySelector('.footer-bottom__year');
const currentDate = new Date();


const sizesBtn = document.querySelector('.item-box__right-sizes');
const sizesEl = document.querySelector('.item-box__right-sizes-box');
const arrow = document.querySelector('.item-box__right-sizes--title-icon');
const sizeItems = document.querySelectorAll('.item-box__right-sizes-box--item');
const sizeTitle = document.querySelector('.item-box__right-sizes--title-text');

const heartFunction = (e) => {
	e.target.classList.toggle('heart-active');
};
const changeTitle = (e) => {
    sizeTitle.textContent = e.target.textContent
}

hearts.forEach((heart) => {
    heart.addEventListener('click', heartFunction);
});

sizeItems.forEach(item => {
    item.addEventListener('click', changeTitle)
})

sizesBtn.addEventListener('click', () => {
    sizesEl.classList.toggle('sizes-active')
    arrow.classList.toggle('arrow-active')
})
footerYear.textContent = currentDate.getFullYear();