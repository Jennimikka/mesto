const enableValidation = function(validateSetting) {
    const setButtonForm = (input) => {
        const form = input.closest('.popup__info');
        const btnElement = form.querySelector('.popup__button');
        if (form.checkValidity()) {
            btnElement.classList.remove(validateSetting.inactiveButtonClass)
            btnElement.removeAttribute('disabled');
        } else {
            btnElement.classList.add(validateSetting.inactiveButtonClass)
            btnElement.setAttribute('disabled', true);
        }
    };

    // Находим элемент ошибки внутри самой функции
    const showInputError = (input) => {
        input.classList.add(validateSetting.inputErrorClass);
        input.nextElementSibling.textContent = input.validationMessage;    
    }

    // находим элемент ошибки
    const hideInputError = (input) => {
        input.classList.remove(validateSetting.inputErrorClass);
        input.nextElementSibling.textContent = ''; 
    }

    const checkInputValidity = (input) => {
        if (!input.validity.valid) {
            showInputError(input);
        } else {
            hideInputError(input);
        }
    }
    // устанавливаем прослушиватель событий
    const setEventListeners = (form) => {
        const inputList = Array.from(form.querySelectorAll(validateSetting.inputSelector))
        const btnElement = form.querySelector(validateSetting.submitButtonSelector)
        inputList.forEach((input) => {
            input.addEventListener('input', () => {
                checkInputValidity(input);
                setButtonForm(input)
            });
        });
    };

    const formList = Array.from(
        document.querySelectorAll(validateSetting.formSelector)
    );
    formList.forEach((form) => {
        setEventListeners(form, validateSetting)
    })
}

enableValidation({
    formSelector: '.popup__info',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error'
});