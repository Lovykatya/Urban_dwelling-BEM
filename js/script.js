let navMain = document.querySelector('.main_navigation');
let navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('main_navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main_navigation__close')) {
    navMain.classList.remove('main_navigation__close');
    navMain.classList.add('main_navigation__open');
  } else {
    navMain.classList.add('main_navigation__close');
    navMain.classList.remove('main_navigation__open');
  }
});


document.addEventListener("DOMContentLoaded", function() {
  // Находим все элементы с классом product-card
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(function(card) {
    // Ищем элемент с классом product-card-discount-price внутри каждой карточки
    const discountPrice = card.querySelector('.product-card-discount-price');

    // Проверяем, не пустое ли содержимое элемента product-card-discount-price
    if (discountPrice && discountPrice.textContent.trim() !== "") {
      // Если содержимое не пустое, добавляем класс product-card-discount
      const discount = card.querySelector('.product-card-discount');
      if (discount) {
        discount.style.display = 'block'; // Отображаем элемент с классом product-card-discount
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Находим все карточки продуктов
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(function(card) {
    const discountPrice = card.querySelector('.product-card-discount-price');

    // Если содержимое .product-card-discount-price пустое или ноль
    if (!discountPrice || discountPrice.textContent.trim() === '') {
      // Добавляем класс .no-discount, чтобы скрыть скидку и сдвигать цену
      card.classList.add('no-discount');
    }
  });
});
