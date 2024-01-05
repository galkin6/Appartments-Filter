document.querySelector('.menu-btn').onclick = function () {

 // buttonX

 document.querySelector('.menu-btn__open').classList.toggle('menu-icon-active');

 // sidebar

 document.querySelector('.column-sidebar').classList.toggle('column-sidebar--active');
}



// show-more card

const btnHiddenCard = document.querySelector('.button-additional-card-main-1');
const hiddenCard = document.querySelectorAll('.card__card--hidden');

btnHiddenCard.addEventListener('click', function () {

 hiddenCard.forEach(function (card) {
  card.classList.remove('card__card--hidden');
  btnHiddenCard.text
 })
})

// hidden widget

const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
 widget.addEventListener('click', function (e) {
  if (e.target.classList.contains('widget__title')) {
   e.target.classList.toggle('widget__title--active');
   e.target.nextElementSibling.classList.toggle('widget__body--hidden');
  }
 });
});


// выбор кнопки любая и отмена других параметров
const checkBox = document.querySelector('#widget__metro-05');
const CheckBoxMetroTop = document.querySelectorAll('[data-metro-top]');

checkBox.addEventListener('change', function () {
 if (checkBox.checked) {
  CheckBoxMetroTop.forEach(function (item) {
   item.checked = false;
  });
  checkBox.checked = true;
 }
})

// отмена кнопки любая при выборе минут

CheckBoxMetroTop.forEach(function (item) {
 item.addEventListener('change', function () {
  if (checkBox.checked) {
   checkBox.checked = false;
  }
 })
})


// показать дополнительные checkbox
const buttonShowCheckbox = document.querySelector('.checkbox__button');

const checkboxHidden = document.querySelectorAll('.widget__hidden');

buttonShowCheckbox.addEventListener('click', function (e) {
 e.preventDefault();

 checkboxHidden.forEach(function (item) {
  item.classList.remove('widget__hidden');
 })


})
