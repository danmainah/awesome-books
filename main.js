/* eslint-disable no-unused-vars, no-use-before-define, consistent-return */

const bookArray = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
localStorage.setItem('books', JSON.stringify(bookArray));
const library = JSON.parse(localStorage.getItem('books'));

function Book(title, author) {
  this.title = title;
  this.author = author;
}

const createList = (title, author) => {
  const li = document.createElement('li');
  li.textContent = `${title} - by ${author}`;
  const button = document.createElement('button');
  button.setAttribute('class', 'rmItem');
  button.innerHTML = 'Remove';
  button.addEventListener('click', remove);
  li.appendChild(button);
  const ul = document.getElementById('bookList');
  ul.appendChild(li);
}

const remove = (e) => {
  const takeItem = document.querySelectorAll('.rmItem');
  const bookIndex = bookArray.indexOf.call(takeItem, e.target);
  bookArray.splice(bookIndex, 1);
  localStorage.setItem('books', JSON.stringify(bookArray));
  const updatedLibrary = JSON.parse(localStorage.getItem('books'));
  document.getElementById('bookList').innerHTML = '';
  updatedLibrary.forEach((item) => { createList(item.title, item.author); });
}

const add = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(title, author);
  if (title === '' && author === '') {
    return false;
  }
  bookArray.push(book);
  localStorage.setItem('books', JSON.stringify(bookArray));
  createList(title, author);
}

library.forEach((item) => { createList(item.title, item.author); });
/* eslint-enable no-unused-vars, no-use-before-define, consistent-return */