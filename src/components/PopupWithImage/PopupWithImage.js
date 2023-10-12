import Popup from "../Popup/Popup.js";
export class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        super.setEventListeners()
        this._popupImg = this._popup.querySelector('.popup__img');
        this._imagePopupCaption = this._popup.querySelector('.popup__caption');
    }

    open(imgLink, imgAlt){
        this._popupImg.src = imgLink;
        this._popupImg.alt = imgAlt;
        this._imagePopupCaption.textContent = imgAlt;
        super.open();
    }
}
