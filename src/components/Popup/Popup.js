export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open() {
        document.addEventListener("keydown", this._handleEscClose);
        this._popup.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener("keydown", this._handleEscClose);
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    
    setEventListeners() {
        this._popup.addEventListener('mouseup', (evt) => { 
            const targetClassList = evt.target.classList; 
            if (targetClassList.contains('popup__close') || targetClassList.contains('popup__overlay')) { 
              this.close(); 
            }
        });
    }
}