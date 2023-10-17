
export class FormValidator {
    constructor(form, setting) {
        this._form = form;
        this._formSelector = setting.formSelector;
        this._inputSelector = setting.inputSelector;
        this._submitButtonSelector = setting.submitButtonSelector;
        this._inactiveButtonClass = setting.inactiveButtonClass;
        this._inputErrorClass = setting.inputErrorClass;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._btnElement = this._form.querySelector(this._submitButtonSelector);
        
     
    };
    
    
    _setButtonForm = () => {
        if (this._form.checkValidity()) {
            this._btnElement.classList.remove(this._inactiveButtonClass)
            this._btnElement.removeAttribute('disabled');
        } else {
            this._btnElement.classList.add(this._inactiveButtonClass)
            this._btnElement.setAttribute('disabled', true);
        }  
       

    };

    // Находим элемент ошибки внутри самой функции
    _showInputError = (input) => {
        input.classList.add(this._inputErrorClass);
        input.nextElementSibling.textContent = input.validationMessage;
    }

    // находим элемент ошибки
    _hideInputError = (input) => {
        input.classList.remove(this._inputErrorClass);
        input.nextElementSibling.textContent = '';
    }

    _checkInputValidity = (input) => {
        if (!input.validity.valid) {
            this._showInputError(input, this._inputErrorClass);
        } else {
            this._hideInputError(input, this._inputErrorClass);
        }
    }
   
    // устанавливаем прослушиватель событий
    setEventListeners = () => {
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._setButtonForm();
            });
            
        });
        
        this._form.addEventListener('reset', (e) => {
            let lastInput = null;
            this._inputList.forEach((input) => {
                lastInput = input;
                this._hideInputError(input, this._inputErrorClass);
            });
            setTimeout(() => {
                this._setButtonForm(lastInput, this._formSelector, this._submitButtonSelector, this._inactiveButtonClass);
            }, 10);
        })
    };
    enableValidation () {
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
        this.setEventListeners();  
      };    
    }
    

