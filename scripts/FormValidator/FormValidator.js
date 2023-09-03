
export class FormValidator {
    constructor(setting, form) {
        this._form = form;
        this._formSelector = setting.formSelector;
        this._inputSelector = setting.inputSelector;
        this._submitButtonSelector = setting.submitButtonSelector;
        this._inactiveButtonClass = setting.inactiveButtonClass;
        this._inputErrorClass = setting.inputErrorClass;
        this._errorClass = setting.errorClass;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
        
     
    };
    
    
    _setButtonForm = (input) => {
        this._form = input.closest(this._formSelector);
        this._btnElement = this._form.querySelector(this._submitButtonSelector);
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
        input.classList.add(this._errorClass);
        input.nextElementSibling.textContent = input.validationMessage;
    }

    // находим элемент ошибки
    _hideInputError = (input) => {
        input.classList.remove(this._errorClass);
        input.nextElementSibling.textContent = '';
    }

    _checkInputValidity = (input) => {
        if (!input.validity.valid) {
            this._showInputError(input, this._errorClass);
        } else {
            this._hideInputError(input, this._errorClass);
        }
    }
   
    // устанавливаем прослушиватель событий
    setEventListeners = () => {
        const inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
        inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._setButtonForm(input, this._formSelector, this._submitButtonSelector, this._inactiveButtonClass);
            });
            
        });
        
        this._form.addEventListener('reset', (e) => {
            let lastInput = null;
            inputList.forEach((input) => {
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
        this.setEventListener();  
      };    
    }
    

