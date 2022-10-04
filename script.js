// Завдання №1
// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let li = document.querySelector('ul li:last-child');

// Завдання №2
//Правильно, у этого элемента нет nextSibling, он всегда последний.
//Неправильно, перед этим элементом может быть другой узел.

// Завдання №3
// let trLength = document.querySelectorAll('tr').length;
// let tdChilds = 1;

// function changeTable(arg) {
//   if (arg < trLength) {
//     document.querySelectorAll(`tr:nth-child(${tdChilds}) > td`).forEach((elem, i) => {
//       let trNum = i + 1;
//       elem.textContent = `${trNum}:${tdChilds}`;
//       if (trNum === tdChilds) elem.style.backgroundColor = 'red';
//     });
//     changeTable(tdChilds++);
//   }
// }
// changeTable(tdChilds);

// Завдання №4
// document.querySelector('#age-table');
// document.querySelectorAll('#age-table label');
// document.querySelector('#age-table td');
// document.querySelector('form[name="search"]');
// document.querySelector('form[name="search"] input');
// document.querySelector('form[name="search"] input:last-child');

// Завдання №5
// document.querySelectorAll('li').forEach((elem) => {
//     console.log(`${elem.firstChild.data.trim()}, ${elem.querySelectorAll('li').length}`);
// });

// Завдання №6
//При выполнении скрипта последним узлом является <script>. Поэтому результат 1.

// Завдання №7
// BODY
// В html документe находится COMMENT_NODE после добавления через innerHtml.
// Далее выводится содержание комментария.

// Завдання №8
// HTMLDocument
// HTMLDocument находится после EventTarget - Node - Document
// Наследует от Node

// Завдання №9
// let elem = document.querySelector('#elem');
// function clear(elem) {
//   Array.from(elem.children).forEach((child) => {
//     child.innerHTML  = '';
//   });
// }
// clear(elem);

// Завдання №10
// Внутри таблицы не может находиться текстовая нода.
// Браузер исправляет это и ставит текстовую ноду до таблицы.
// При удалении таблицы текст остается.

// Завдання №11
// let ul = document.createElement('ul');
// document.body.append(ul);
// for (;;) {
//   let liContent = prompt('');
//   if (!liContent) {
//     break;
//   }
//   let li = document.createElement('li');
//   li.textContent = liContent;
//   ul.append(li);
// }

// Завдання №12
// const one = document.querySelector('#one');
// const listItems = '<li>2</li><li>3</li>';
// one.insertAdjacentHTML('beforeend', listItems);
