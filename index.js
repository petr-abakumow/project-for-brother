console.log('Привет, Мир!');

const phoneButton = document.querySelector('.contacts-block__button_tel');
const popupPhone = document.querySelector('.popup-phone');
const popupPhoneClose = document.querySelector('.popup-phone__closed');

function popupPhoneOpened() {
    popupPhone.classList.add('popup-phone_opened');
}

function popupPhoneClosed() {
    popupPhone.classList.remove('popup-phone_opened');
}

phoneButton.addEventListener('click', () => {
    popupPhoneOpened();
})

popupPhoneClose.addEventListener('click', () => {
    popupPhoneClosed();
})

popupPhone.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        popupPhoneClosed();
    }
})

document.addEventListener('backbutton',() => {
    if (popupPhone.classList.contains('popup-phone_opened')) {
        popupPhoneClosed();
    }
});