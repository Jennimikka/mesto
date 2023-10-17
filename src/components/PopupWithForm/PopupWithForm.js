import Popup from "../Popup/Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit){
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__info');
        this._inputs = this._form.querySelectorAll('.popup__input');
        this.button = this._popup.querySelector('.popup__button');
    };

    getInputValues(){
        this.inputValues = {};
        this._inputs.forEach(item =>{
            this.inputValues[item.name] = item.value;
        });
        return this.inputValues; 
        
    };

    setInputValues(data){
        this._inputs.forEach(item => {
            item.value = data[item.name];
        });
    };

    close(){
        super.close();
        this._form.reset();
    };

    setEventListeners(){
        super.setEventListeners();
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.getInputValues();
            this._handleFormSubmit(this.getInputValues());
        });
    }; 
};