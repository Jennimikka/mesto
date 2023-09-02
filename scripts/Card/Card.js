import { openPopup, imagePopup, popupImg, imagePopupCaption } from "../index.js";

export class Card {   
        constructor(data, templateSelector) {
            this._name = data.name;
            this._link = data.link;
            this._templateSelector = templateSelector;
        }
      
        _getTemplate() {
          const el = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);    
          return el;
        }
        
        _deleteCard() {
            this._el.remove();
            }

        _likeCard() {
            this._el.querySelector('.element__like').classList.toggle('element__like_active');
        };
        
        _handleOpenPopup() {
            popupImg.src = this._link;
            imagePopupCaption.textContent = this._name;
            imagePopupCaption.alt = this._name;
            openPopup(imagePopup);
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
                this._handleOpenPopup();
            })
           
            this._el.querySelector('.element__title').textContent = this._name;
            this._image.src = this._link;
            this._image.name = this._name;

            return this._el;

        };
    }
