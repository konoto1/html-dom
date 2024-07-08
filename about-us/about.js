// const h1DOM = document.getElementById('title');
// console.log(h1DOM);
// const pDOM = document.getElementsByTagName('p');
// console.log(pDOM[0].innerText);
// console.log(pDOM[0].textContent);

// console.log(h1DOM.innerText);
// console.log(pDOM.innerText);

// console.log(h1DOM.innerText.toUpperCase());


const ulDOM = document.getElementsByTagName('ul');
// console.log(ulDOM);

// const liDOM = ulDOM[0].getElementsByTagName('li');

// for (let z = 0; z < ulDOM.length; z++) {
//     let liDOM = ulDOM[z].getElementsByTagName('li')
//     console.log(liDOM);
//     for (let i = 0; i < liDOM.length; i++) {
//         console.log(liDOM[i].innerText = `${i + 1}) ${liDOM[i].innerText}`);
//     }
// }

let index = 1;
for (const list of ulDOM) {
    const liDOM = list.getElementsByTagName('li');
    for (const item of liDOM) {
        item.innerText = `${index++}) ${item.innerText}`;
    }
}


// const listItemsDOM = document.querySelector('ul');
// const listItemsDOM = document.querySelectorAll('ul:nth-child(6) > li');
const listItemsDOM = document.querySelectorAll('ul > li:first-child');



const ulItemsDOM = document.querySelectorAll('ul > li:nth-child(2)');

const olItemsDOM = document.querySelectorAll('ol > li:nth-child(2)');


const allItemsDOM = [...ulItemsDOM, ...olItemsDOM];


