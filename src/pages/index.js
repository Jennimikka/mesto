import './index.css';
import { Card } from "../components/Card/Card.js";
import { items } from "../utils/items/items.js"; 
import { FormValidator } from "../components/FormValidator/FormValidator.js";
import { validateSetting } from "../utils/validate.js";
import { Section } from "../components/Section/Section.js";
import { PopupWithForm } from "../components/PopupWithForm/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage/PopupWithImage.js";

const formList = document.querySelectorAll('.popup__info'); 

const popup = document.querySelector('.popup'); 

 

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

 

const popupImg = document.querySelector('.popup__img'); 

const imagePopupCaption = document.querySelector('.popup__caption'); 

const cardEl = document.querySelector('.element'); 

const userInfo = new UserInfo ({userNameSelector: '.profile__title', userProfessionSelector: '.profile__subtitle'});

const section = new Section({
    renderer: (item) => {
        section.addItem(createCard(item, '.element-template'));
      }
    },
    '.elements' 
);

function createCard(item, selector){
    const card = new Card (item, selector, 
      {handleCardClick: () => {
          imagePopup.open(card.link, card.name);
        }
      })
}
const profilePopup = new PopupWithForm('.popup_type_profile',handleFormProfileSubmit(data))

function handleFormProfileSubmit(data) {
    userInfo.setUserInfo(data)
    profilePopup.close()
    
}
 
profilePopup.setEventListeners()

const imagePopup = new PopupWithImage('.popup_type_image')

function handleCardClick (name, link) {
   
    imagePopup.open(link, name)
}

const cardPopup = new PopupWithForm('.popup_type_card',handleFormCardSubmit)
function handleFormCardSubmit() {
    const newItem = {};
    newItem.name = cardLocationInput.value; 
    newItem.link = cardLinkInput.value;
    section.addNewItem(createCard(newItem, '.element-template', handleCardClick));

    cardPopup.close()
    
    
}
cardPopup.setEventListeners()



profilePopupOpenButton.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    profileNameInput.value = userData.name;
    profileProfessionInput.value = userData.profession;
    profilePopup.open()
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






const containerEl = document.querySelector('.elements');
const template = document.querySelector('.element-template').content;



imagePopup.setEventListeners()



    formList.forEach((form) => {
        const formValidator = new FormValidator(form, validateSetting);
        formValidator.enableValidation()
    })


 

  



        
export { imagePopup, profilePopup }
