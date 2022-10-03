const body = document.querySelector('body');
const ulElem = document.createElement('ul');

while (true) {
  let instruction = prompt('Введите пункты списка');

  if (instruction === null || instruction === '') {
    break;
  }

  const liElem = document.createElement('li');
  liElem.textContent = instruction;
  ulElem.append(liElem);
}

body.append(ulElem);
