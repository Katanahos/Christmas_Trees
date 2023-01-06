const buttonsOrder = document.querySelectorAll('.product__button_order');
const overlayOrder = document.querySelector('.overlay__order');
const order = overlayOrder.querySelector('.modal__order');
const buttonConsult = document.querySelector('.header__consultation');
const overlayConsult = document.querySelector('.overlay__consultation');

buttonsOrder.forEach((buttonOrder) => {
    buttonOrder.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_active');
        order.value = buttonOrder.dataset.order;
    })
});

overlayOrder.addEventListener('click', event => {
    const target = event.target;

    if (target === overlayOrder || target.closest('.modal__close')) {
        overlayOrder.classList.remove('overlay_active');
    }
});

buttonConsult.addEventListener('click', () => {
    overlayConsult.classList.add('overlay_active');
});

overlayConsult.addEventListener('click', event => {
    const target = event.target;

    if (target === overlayConsult || target.closest('.modal__close')) {
        overlayConsult.classList.remove('overlay_active');
    }
});