const paneElem = document.querySelectorAll('.pane');
for (let pane of paneElem) {
  pane.insertAdjacentHTML(
    'afterbegin',
    '<button class="remove-button">[x]</button>'
  );
}
