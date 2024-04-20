const comunicat = document.querySelector('.panel-error')
const btn = document.querySelector('.panel-account__btn')
const menuBtn = document.querySelector('.panel-btn')
const menuLeft = document.querySelector('.panel-left')

const checkInputs = () => {
    comunicat.textContent = 'Pomyślnie zapisano zmiany'
}
const openPanel = () => {
    menuLeft.classList.toggle('panel-active')
}

menuBtn.addEventListener('click', openPanel)
btn.addEventListener('click', checkInputs)