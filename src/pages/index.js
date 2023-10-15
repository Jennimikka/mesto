import './index.css';
import { Card } from "../components/Card/Card.js";
import { items } from "../utils/items/items.js"; 
import { FormValidator } from "../components/FormValidator/FormValidator.js";
import { validateSetting } from "../utils/validate.js";
import { Section } from "../components/Section/Section.js";
import { PopupWithForm } from "../components/PopupWithForm/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage/PopupWithImage.js";
import { popupCardButton, cardLocationInput, cardLinkInput, profilePopupOpenButton, profileNameInput, profileProfessionInput, profileProfessionValue, profileNameValue, popup, popupImg, imagePopupCaption } from "../utils/constants.js";

const userInfo = new UserInfo ({userNaneSelector: '.profile__title', userProfessionSelector: '.profile__subtitle'});

let section = new Section({
    renderer: (item) => {
        section.addItem(createCard(item, '.element-template'));
      }
    },
    '.elements' 
);

const profilePopup = new PopupWithForm('.popup_type_profile',handleFormProfileSubmit)

function handleFormProfileSubmit(evt) {
    profileNameValue.textContent = profileNameInput.value;
    profileProfessionValue.textContent = profileProfessionInput.value;
    profilePopup.close()
}
profilePopup.setEventListeners()

const imagePopup = new PopupWithImage('.popup_type_image')

function handleCardClick (name, link) {
   
    imagePopup.open(link, name)
}

const cardPopup = new PopupWithForm('.popup_type_card',handleFormCardSubmit)
function handleFormCardSubmit(evt) {
    const newItem = {};
    newItem.name = cardLocationInput.value; 
    newItem.link = cardLinkInput.value;
    const card = new Card(newItem, '.element-template', handleCardClick);
    const cardEl = card.generateCard();
    containerEl.prepend(cardEl);
    cardPopup.close()
    
    
}
cardPopup.setEventListeners()



profilePopupOpenButton.addEventListener('click', () => {
    profilePopup.open()
    profileNameInput.value = profileNameValue.textContent;
    profileProfessionInput.value = profileProfessionValue.textContent;

})

popupCardButton.addEventListener('click', (e) => {
        e.preventDefault();
        cardPopup.open()
})

const closeButtons = document.querySelectorAll('popup__close');
closeButtons.forEach((item) => {
    const popup = item.closest('.popup');
    item.addEventListener('click', () => {
        popup.close()
    });
});

const closeOverlay = document.querySelectorAll('.popup__overlay');
closeOverlay.forEach((item) => {
    const popup = item.closest('.popup');
    item.addEventListener('click', () => {
        popup.classList.remove('popup_opened');
    });
});





const containerEl = document.querySelector('.elements');
const template = document.querySelector('.element-template').content;



const render = () => {
    items.forEach((item) => {
    const card = new Card(item, '.element-template', handleCardClick);
    const cardEl = card.generateCard();
    containerEl.append(cardEl);
    
    });
    
};

console.log(render)
imagePopup.setEventListeners()

const formList = document.querySelectorAll('.popup__info');

    formList.forEach((form) => {
        const formValidator = new FormValidator(form, validateSetting);
        formValidator.enableValidation()
    })

render()
 

  



        
export { imagePopup, profilePopup }
