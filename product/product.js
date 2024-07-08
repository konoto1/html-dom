//<button type="button">Click me</button>


// const fromDOM = document.getElementsByTagName('form')[0];

// fromDOM.innerHTML = '<button type="button">Click me</button>';
const allFormDOM = document.getElementsByTagName('form');
allFormDOM[0].innerHTML += `<button type="button">Click me</button>`;
allFormDOM[1].innerHTML += `<button type="button">Click me</button>`;

const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.product-list');

// ulDOM.innerHTML = `
// <li>
//     <p class="title">Duona</p>
//     <p class="count">1</p>
// </li>
// <li>
//     <p class="title">Svietas</p>
//     <p class="count">1</p>
// </li>
// <li>
//     <p class="title">Pomidoras</p>
//     <p class="count">3</p>
// </li>
// <li>
//     <p class="title">Agurkas</p>
//     <p class="count">1</p>
// </li>
// `;

const products = [
    {
        title: 'Duona',
        count: 1,
    },
    {
        title: 'Svietas',
        count: 1,
    },
    {
        title: 'Pomidoras',
        count: 3,
    },
    {
        title: 'Agurkas',
        count: 1,
    },
];

let HTML = '';

for (let i = 0; i < products.length; i++) {
    HTML += `
    <li>
        <p class="title">${products[i].title}</p>
        <p class="count">${products[i].count}</p>
    </li>`;
}

ulDOM.innerHTML = HTML;

// import { header } from '../js/header';

// header();