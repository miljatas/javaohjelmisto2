'use strict';

const targetElem = document.querySelector('#target');

let htmlKoodi =
    `<li>First item</li>
     <li>Second item</li>
     <li>Third item</li>`

targetElem.innerHTML = htmlKoodi;

targetElem.classList.add('my-list');