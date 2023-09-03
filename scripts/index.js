import { Card } from "./Card/Card.js";
import { items } from "./items/items.js";
import { FormValidator } from "./FormValidator/FormValidator.js";
import { validateSetting } from "./validate.js";
 

const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');


const profilePopupOpenButton = document.querySelector('.profile__open-popup');
const profilePopupCloseButton = document.querySelector('.popup__close');
const profileNameValue = document.querySelector('.profile__title');
const profileProfessionValue = document.querySelector('.profile__subtitle');

const formElementProfile = document.querySelector('.popup__info_profile');
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileProfessionInput = document.querySelector('.popup__input_type_job');


const popupCardButton = document.querySelector('.profile__add-button');
const cardCloseButton = document.querySelector('.popup__close_card');

const formElementCard = document.querySelector('.popup__info_form');
const cardLocationInput = document.querySelector('.popup__input_type_location');
const cardLinkInput = document.querySelector('.popup__input_type_link');

const popupImg = imagePopup.querySelector('.popup__img');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');


let currentOpenPopup = null;

function handleFormProfileSubmit(evt) {
    evt.preventDefault();
    profileNameValue.textContent = profileNameInput.value;
    profileProfessionValue.textContent = profileProfessionInput.value;
    closePopup(profilePopup)
}
formElementProfile.addEventListener('submit', handleFormProfileSubmit)

function handleFormCardSubmit(evt) {
    evt.preventDefault();
    const newItem = {};
    newItem.name = cardLocationInput.value; 
    newItem.link = cardLinkInput.value;
    const card = new Card(newItem, '.element-template');
    const cardEl = card.generateCard();
    containerEl.prepend(cardEl);
    closePopup(cardPopup)
    evt.target.reset();
}

formElementCard.addEventListener('submit', handleFormCardSubmit)



const keydownWithOpenPopup = (evt) => {
    if (evt.key === "Escape") {
        closePopup(currentOpenPopup);
    }
}

function openPopup(popup) {
    currentOpenPopup = popup;
    document.addEventListener("keydown", keydownWithOpenPopup);
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    document.removeEventListener("keydown", keydownWithOpenPopup);
    popup.classList.remove('popup_opened');
}

profilePopupOpenButton.addEventListener('click', () => {
    openPopup(profilePopup)
    profileNameInput.value = profileNameValue.textContent;
    profileProfessionInput.value = profileProfessionValue.textContent;

})

popupCardButton.addEventListener('click', () => {
    openPopup(cardPopup)
})

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((item) => {
    const popup = item.closest('.popup');
    item.addEventListener('click', () => {
        closePopup(popup)
    });
});

const closeOverlay = document.querySelectorAll('.popup__overlay');
closeOverlay.forEach((item) => {
    const popup = item.closest('.popup');
    item.addEventListener('click', () => {
        closePopup(popup)
    });
});



const containerEl = document.querySelector('.elements');
const template = document.querySelector('.element-template').content;



const render = () => {
    items.forEach((item) => {
    const card = new Card(item, '.element-template');
    const cardEl = card.generateCard();
    containerEl.append(cardEl);
    });
};

const formList = document.querySelectorAll('.popup__info');

    formList.forEach((form) => {
        const formValidator = new FormValidator(form, validateSetting);
        formValidator.enableValidation()
    })


 

  
render();


        
export { openPopup, imagePopup, popupImg, imagePopupCaption }
