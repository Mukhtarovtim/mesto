let profileItemsEdit = document.querySelector(".profile__edit");
let popupClose = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let popupSave = document.querySelector(".popup__save");
let profileItemsName = document.querySelector(".profile__name");
let profileInfoStatus = document.querySelector(".profile__status");
let popupName = document.querySelector(".popup__item_who_name");
let popupStatus = document.querySelector(".popup__item_who_status");


function popupToggle() {
    popup.classList.toggle ("popup_open");
    profileItemsName.textContent = popupName.value;
    profileInfoStatus.textContent = popupStatus.value;
    popupClose();
}

profileItemsEdit.addEventListener("click", popupToggle);
popupClose.addEventListener("click", popupToggle);
popupSave.addEventListener("click", popupToggle);