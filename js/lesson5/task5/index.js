for (let li of document.querySelectorAll('li')) {
  console.log(li);
  let names = li.firstChild.data;
  let count = li.getElementsByTagName('li').length;
  console.log(names); //имена потомков
  console.log(count); // кол-во потомков
}
