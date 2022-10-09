button.addEventListener('click', () => alert('1'));
button.removeEventListener('click', () => alert('1'));
button.onclick = () => alert(2);

// Обработчики выполнятся последовательно сверху вниз. Сначала выведется "1", потом обработчик удалится , и выведется "2"
