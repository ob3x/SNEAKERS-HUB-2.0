const orderBtn = document.querySelectorAll('.order-right__place-box--item');
const shipment = document.querySelector('.shipment');


const checkOrder = (clickedBtn) => {
    orderBtn.forEach((order) => {
        order.classList.remove('order-right__place-box--item-active');
    });
    clickedBtn.classList.add('order-right__place-box--item-active');
    
    const priceElement = clickedBtn.querySelector('.order-right__place-box--item-price .order-price');

    shipment.textContent =  priceElement.textContent;   
}

orderBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
        checkOrder(btn)
    });
});
