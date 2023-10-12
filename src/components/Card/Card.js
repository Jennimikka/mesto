import { imagePopup } from "../../pages/index.js";
import { popupImg, imagePopupCaption } from "../../utils/constants.js";


export class Card {   
        constructor(data, templateSelector, handleCardClick) {
            this._name = data.name;
            this._link = data.link;
            this._templateSelector = templateSelector;
            this._handleCardClick = handleCardClick;
        }
      
        _getTemplate() {
          const el = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element') 
          return el.cloneNode(true);
        }
        
        _deleteCard() {
            this._el.remove();
            }

        _likeCard() {
            this._el.querySelector('.element__like').classList.toggle('element__like_active');
        };

        generateCard() {
            this._el = this._getTemplate();
            this._image = this._el.querySelector('.element__image');
            this._el.querySelector('.element__delete').addEventListener('click', () => {
                this._deleteCard()
              });
            this._el.querySelector('.element__like').addEventListener('click', () => {
               this._likeCard() 
            });
            this._image.addEventListener('click', () => {
                this._handleCardClick(this._name, this._link);
            })
            this._el.querySelector('.element__title').textContent = this._name;
            this._image.src = this._link;
            this._image.name = this._name;

            return this._el;

        };
    }
