const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');
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

const popupImg = imagePopup.querySelector('.popup__img');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');

const containerEl = document.querySelector('.elements');
const cardEl = document.querySelector('.element');
const template = document.querySelector('.element-template').content;

export { profilePopup, cardPopup, profilePopupOpenButton, profilePopupCloseButton, profileNameValue, profileProfessionValue, formElementProfile, profileNameInput, profileProfessionInput, popupCardButton, cardCloseButton, formElementCard, cardLocationInput, cardLinkInput, popupImg, imagePopupCaption, containerEl, template, cardEl, popup}