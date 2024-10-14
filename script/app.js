const mapImg = document.querySelector('.map_img');

mapImg.addEventListener('mousemove', (e) => {
  const rect = mapImg.getBoundingClientRect();
  const x = e.clientX - rect.left; // позиція миші відносно картинки по X
  const y = e.clientY - rect.top;  // позиція миші відносно картинки по Y

  // Визначаємо відсоткове співвідношення позиції миші по X та Y
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  // Рух картинки у напрямку миші
  mapImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  mapImg.style.transform = 'scale(1.5)';
});

mapImg.addEventListener('mouseleave', () => {
  // Повертаємо картинку до стандартного розміру
  mapImg.style.transformOrigin = 'center center';
  mapImg.style.transform = 'scale(1)';
});
