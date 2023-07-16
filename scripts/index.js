console.log('скрипт подключен');
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__open-popup');

const popupCloseButton = popup.querySelector('.popup__close');
let name = document.querySelector('.profile__title');
let profession = document.querySelector('.profile__subtitle');

const formElement = popup.querySelector('.popup__info');
let nameInput = document.querySelector('.popup__input_type_name');
let professionInput = document.querySelector('.popup__input_type_job');

const popupToggle = function () {
    popup.classList.toggle('popup_opened');
}
function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let professionValue = professionInput.value;
    name.textContent = nameValue;
    profession.textContent = professionValue;
    popupToggle()
}

popupOpenButton.addEventListener('click', function() {
popupToggle()
      nameInput.value = name.textContent;
      professionInput.value = profession.textContent;
})
popupCloseButton.addEventListener('click', function() {
    popupToggle()
})

formElement.addEventListener('submit', handleFormSubmit); 
