const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('.popup_type_profile');
const popupOpenButton = document.querySelector('.profile__open-popup');
const popupCloseButton = document.querySelector('.popup__close');
let nameValue = document.querySelector('.profile__title');
let professionValue = document.querySelector('.profile__subtitle');

const formElement = document.querySelector('.popup__info');
let nameInput = document.querySelector('.popup__input_type_name');
let professionInput = document.querySelector('.popup__input_type_job');

const addPopup = document.querySelector('.popup_type_add');
const popupAddButton = document.querySelector('.profile__add-button'); 
const addCloseButton = document.querySelector('.popup__close_add'); 

const formElementAdd = document.querySelector('.popup__form');
let locationInput = document.querySelector('.popup__input_type_location');
let linkInput = document.querySelector('.popup__input_type_link');


const imagePopup = document.querySelector('.popup_type_image'); 
const popupImg = imagePopup.querySelector('.popup__img');
const popupCaption = imagePopup.querySelector('.popup__caption');

function handleFormProfileSubmit (evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  professionValue.textContent = professionInput.value;
  closePopup(profilePopup)
}
formElement.addEventListener('submit', handleFormProfileSubmit)

function handleFormAddSubmit (evt) {
  evt.preventDefault();
  const newItem = {};
  newItem.name = locationInput.value;  
  newItem.link = linkInput.value;
  const addNewItem = createElByTemplate(newItem);
  containerEl.prepend(addNewItem);
  closePopup(addPopup)
  evt.target.reset();
}
formElementAdd.addEventListener('submit', handleFormAddSubmit)

function openPopup(popup) {
  popup.classList.add('popup_opened');  
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');  
}

  popupOpenButton.addEventListener('click', () => {
    openPopup(profilePopup)
    nameInput.value = nameValue.textContent;
    professionInput.value = professionValue.textContent;
   
    })

popupAddButton.addEventListener('click', () => {
openPopup(addPopup)

  })

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((item) => {
  const popup = item.closest('.popup');
  item.addEventListener('click', ()=>{
  closePopup(popup)
  
    });
  });

  const items = [
    {
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
  function removeItem (el) {
  el.target.parentNode.remove();
  } 
  deleteBtn.addEventListener ('click', removeItem);
  
  
  elImg.addEventListener('click', () => {
    openPopup(imagePopup)
      popupImg.src = elImg.src;
      popupCaption.textContent = elTitle.textContent;
      popupImg.alt = elImg.alt;
    });
  return el;
  };
  
  const render = () => {
  items.forEach((item) => {
  containerEl.append(createElByTemplate(item));
         
  });
     
  }; 
  render (items);
  







