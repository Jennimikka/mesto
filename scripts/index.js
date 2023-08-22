const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');

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

let currentOpenPopup = null;

function handleFormProfileSubmit(evt) {
    evt.preventDefault();
    profileNameValue.textContent = profileNameInput.value;
    profileProfessionValue.textContent = profileProfessionInput.value;
    closePopup(profilePopup)
}
formElementProfile.addEventListener('submit', handleFormProfileSubmit)

function handleFormCardSubmit(evt) {
    evt.preventDefault();
    const newItem = {};
    newItem.name = cardLocationInput.value;
    newItem.link = cardLinkInput.value;
    const addNewItem = createElByTemplate(newItem);
    containerEl.prepend(addNewItem);
    closePopup(cardPopup)
    evt.target.reset();
    setButtonForm(cardLinkInput)
}

formElementCard.addEventListener('submit', handleFormCardSubmit)

const keydownWithOpenPopup = (evt) => {
    if (evt.key === "Escape") {
        closePopup(currentOpenPopup);
    }
}

function openPopup(popup) {
    currentOpenPopup = popup;
    document.addEventListener("keydown", keydownWithOpenPopup);
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    document.removeEventListener("keydown", keydownWithOpenPopup);
    popup.classList.remove('popup_opened');
}

profilePopupOpenButton.addEventListener('click', () => {
    openPopup(profilePopup)
    profileNameInput.value = profileNameValue.textContent;
    profileProfessionInput.value = profileProfessionValue.textContent;

})

popupCardButton.addEventListener('click', () => {
    openPopup(cardPopup)
})

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((item) => {
    const popup = item.closest('.popup');
    item.addEventListener('click', () => {
        closePopup(popup)
    });
});

const closeOverlay = document.querySelectorAll('.popup__overlay');
closeOverlay.forEach((item) => {
    const popup = item.closest('.popup');
    item.addEventListener('click', () => {
        closePopup(popup)
    });
});

const items = [{
        name: 'Карачаевск',
        link: 'https://images.unsplash.com/photo-1588584922681-745a2223f72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJUJBJUQwJUIwJUQxJTgwJUQwJUIwJUQxJTg3JUQwJUIwJUQwJUI1JUQwJUIyJUQxJTgxJUQwJUJBfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Гора Эльбрус',
        link: 'https://wikiway.com/upload/resize_cache/iblock/902/500_330_2/Elbrus-na-zakate.jpg'
    },
    {
        name: 'Домбай',
        link: 'https://turvopros.com/wp-content/uploads/2022/10/dombai-kanatka.jpg'
    },
    {
        name: 'Рускеала',
        link: 'https://avatars.mds.yandex.net/get-altay/1371862/2a000001655d39498bbc93fbabd8e526d6e0/XXXL'
    },
    {
        name: 'Камчатка',
        link: 'https://avatars.dzeninfra.ru/get-zen_doc/1921148/pub_5ee9a9472ab5e326049535f2_5ee9aa19987ef673f1bd01af/scale_1200'
    },
    {
        name: 'Владивосток',
        link: 'https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-5f590f63-ade4-421d-ac35-48e328c50e7f'
    }
];

const containerEl = document.querySelector('.elements');
const template = document.querySelector('.element-template').content;

const createElByTemplate = (item) => {
    const el = template.querySelector('.element').cloneNode(true);
    const elTitle = el.querySelector('.element__title');
    elTitle.textContent = item.name;
    const elImg = el.querySelector('.element__image');
    elImg.src = item.link;
    elImg.alt = item.name;
    const elLike = el.querySelector('.element__like');
    elLike.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active')
    });

    const deleteBtn = el.querySelector('.element__delete');

    function removeItem(evt) {
        evt.target.closest('.element').remove();
    }
    deleteBtn.addEventListener('click', removeItem);

    elImg.addEventListener('click', () => {
        openPopup(imagePopup)
        popupImg.src = elImg.src;
        imagePopupCaption.textContent = elTitle.textContent;
        popupImg.alt = elImg.alt;
    });
    return el;
};

const render = () => {
    items.forEach((item) => {
        containerEl.append(createElByTemplate(item));
    });
};
render();