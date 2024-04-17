const delItems = document.querySelectorAll('.basket-left__x');
const price = document.querySelectorAll('.price');
const count = document.querySelector('.count');
let sum = 0

const deleteItems = (e) => {
	e.target.closest('.basket-left__item').remove();
};

delItems.forEach((item) => {
	item.addEventListener('click', deleteItems);
});

// window.addEventListener('', () => {
//     price.forEach(paragraph => {
//         sum += parseInt(paragraph.textContent);
//         count.textContent = `${sum} zł`
//     })
// })