console.log('скрипт подключен');
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__open-popup');
const popupCloseButton = popup.querySelector('.popup__close');
let profile = popup.querySelector('.popup__info');
let name = profile.querySelector('.profile__name');
let profession = profile.querySelector('.profile__job');
let nameInput = profile.querySelector('.popup__input-name');
let jobInput = profile.querySelector('.popup__input-job');
const popupToggle = function (event){
    popup.classList.toggle('popup__opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}
function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    popupToggle();
}
popupOpenButton.addEventListener('click', popupToggle);

popupCloseButton.addEventListener('click', popupToggle);

formElement.addEventListener('submit', handleFormSubmit); 
