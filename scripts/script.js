let profileItemsEdit = document.querySelector(".profile-items__edit");
let popupClose = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let popupSave = document.querySelector(".popup__save");
let profileItemsName = document.querySelector(".profile-items__name");
let profileInfoStatus = document.querySelector(".profile-info__status");
let popupName = document.querySelector(".popup__name");
let popupStatus = document.querySelector(".popup__status");


function popupToggle() {
    popup.classList.toggle ("popup_open");
    profileItemsName.textContent = popupName.value;
    profileInfoStatus.textContent = popupStatus.value;
    popupClose();
}

profileItemsEdit.addEventListener("click", popupToggle);
popupClose.addEventListener("click", popupToggle);
popupSave.addEventListener("click", popupToggle);

let elementItemName = document.querySelector(".element-item__name");
function nameString() {
    elementItemName
}