const setButtonForm = (input, formSelector, submitButtonSelector, inactiveButtonClass) => {
    const form = input.closest(formSelector);
    const btnElement = form.querySelector(submitButtonSelector);
    if (form.checkValidity()) {
        btnElement.classList.remove(inactiveButtonClass)
        btnElement.removeAttribute('disabled');
    } else {
        btnElement.classList.add(inactiveButtonClass)
        btnElement.setAttribute('disabled', true);
    }
};

// Находим элемент ошибки внутри самой функции
const showInputError = (input, errorClass) => {
    input.classList.add(errorClass);
    input.nextElementSibling.textContent = input.validationMessage;    
}

// находим элемент ошибки
const hideInputError = (input, errorClass) => {
    input.classList.remove(errorClass);
    input.nextElementSibling.textContent = ''; 
}

const checkInputValidity = (input, inputErrorClass) => {
    if (!input.validity.valid) {
        showInputError(input, inputErrorClass);
    } else {
        hideInputError(input, inputErrorClass);
    }
}
// устанавливаем прослушиватель событий
const setEventListeners = (form, setting) => {
    const inputList = Array.from(form.querySelectorAll(setting.inputSelector))
    inputList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(input, setting.inputErrorClass);
            setButtonForm(input, setting.formSelector, setting.submitButtonSelector, setting.inactiveButtonClass);
        });
    });
    form.addEventListener('reset', (e) => {
        let lastInput = null;
        inputList.forEach((input) => {
            lastInput = input;
            hideInputError(input, setting.inputErrorClass);
        });
        setTimeout(()=>{
            setButtonForm(lastInput, setting.formSelector, setting.submitButtonSelector, setting.inactiveButtonClass);
        }, 10);
    })
};

const enableValidation = function(setting) {
    const formList = Array.from(
        document.querySelectorAll(setting.formSelector)
    );
    formList.forEach((form) => {
        setEventListeners(form, setting)
    })
}

enableValidation({
    formSelector: '.popup__info',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error'
});