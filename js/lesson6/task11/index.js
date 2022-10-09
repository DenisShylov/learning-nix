const selectElem = document.querySelector('#genres');
const newOptionElem = document.createElement('option');

newOptionElem.setAttribute('value', 'classic');
newOptionElem.textContent = 'Классика';
newOptionElem.selected = true;

selectElem.append(newOptionElem);
console.log(newOptionElem);
