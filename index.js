console.log('Привет, Мир!');

const phoneButton = document.querySelector('.contacts-block__button_tel');
const popupPhone = document.querySelector('.popup-phone');

function popupPhoneOpened() {
    popupPhone.classList.add('popup-phone_opened');
}

phoneButton.addEventListener('click', () => {
    popupPhoneOpened();
})