function showNotification(options) {
  const divHeader = document.querySelector('.header');

  const divElem = document.createElement('div');
  divElem.classList.add('notification');
  divElem.textContent = options.html;
  divElem.style.top = `${options.top}px`;
  divElem.style.right = `${options.right}px`;
  divHeader.append(divElem);

  setTimeout(() => {
    divElem.style.display = 'none';
  }, 1500);
}

showNotification({
  top: 10, // 10px від верхньої межі вікна (за замовчуванням 0px)
  right: 10, // 10px від правого краю вікна (за замовчуванням 0px)
  html: 'Hello!', // HTML-повідомлення
  className: 'welcome', // Додатковий клас для div (необов'язково)
});
