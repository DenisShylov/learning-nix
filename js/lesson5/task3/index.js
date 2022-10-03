const tableElem = document.querySelector('table');

for (let i = 1; i <= 5; i++) {
  const trElem = document.createElement('tr');
  for (let j = 1; j <= 5; j++) {
    const tdElem = document.createElement('td');
    tdElem.textContent = `${j}:${i}`;
    j === i ? (tdElem.style.backgroundColor = 'red') : '';
    trElem.append(tdElem);
  }
  tableElem.append(trElem);
}
