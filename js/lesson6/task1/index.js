const cal = document.querySelector('body');
function createCalendar(elem, year, month) {
  let tableElem = document.createElement('table');
  tableElem.innerHTML =
    '<tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>';

  let date = new Date(year, month, 0);
  let dayLength = date.getDate();
  date.setDate(1);
  let firstDay = date.getDay();

  let i = 1;
  while (i <= dayLength) {
    let trElem = document.createElement('tr');

    for (let j = 1; j <= 7; j++) {
      if (j <= firstDay - 1 || i > dayLength) {
        trElem.innerHTML += '<td></td>';
        continue;
      }

      trElem.innerHTML += `<td>${i}</td>`;

      i++;
    }

    if (i < 8) {
      firstDay = 0;
    }

    tableElem.firstElementChild.append(trElem);
  }

  elem.append(tableElem);
}

createCalendar(cal, 2012, 9);
