'use strict';

const targetElem = document.getElementById('target');

const ekaElem = document.createElement('li');
ekaElem.innerHTML = 'First item';

const tokaElem = document.createElement('li');
tokaElem.innerHTML = 'Second item';

const kolmasElem = document.createElement('li');
kolmasElem.innerHTML = 'Third item';

targetElem.appendChild(ekaElem);
targetElem.appendChild(tokaElem);
targetElem.appendChild(kolmasElem);

const liElementit = document.querySelectorAll('li');
const listanTokaElem = liElementit[1];
listanTokaElem.classList.add('my-item');