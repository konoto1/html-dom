const initialElementDOM = document.getElementById('initial-element');

initialElementDOM.innerHTML = `
    <header>
    <img src="#" alt="Logo">
    <nav id="main-navigation"></nav>
    </header>
    <main>MAIN</main>
    <footer>FOOTER</footer>
`;



// const navDOM = document.querySelector('nav');

// const mainLinkData = [
//     {
//         text: 'Home',
//         link: '../',
//     },
//     {
//         text: 'About',
//         link: '../About-us/',
//     },
//     {
//         text: 'Products',
//         link: '../product/',
//     },
//     {
//         text: 'Contact',
//         link: '../contacts/',
//     },
// ];

// let navHTML = '';

// for (const linkData of mainLinkData) {
//     if (linkData.text === 'Contact') {
//         navHTML += `<a class="link active" href="${linkData.link}">${linkData.text}</a>`;
//     } else {
//         navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`;
//     }
// }

// navDOM.innerHTML = navHTML;
// navDOM.innerHTML = `
// <a href="../about-us/">About</a>
// <a href="../about-us/">About</a>
// <a href="../about-us/">About</a>
// <a href="../about-us/">About</a>
// `


/* Reikia sukurti masyva, kuriame yra atskirais objektais aprasyta 10 pokemonu, t.y.
-   pavadinimas
-   pagrindine spalva
-   nuuoroda i paveiksliuka is isorino saltinio (https://www.pokemon.......)
-   forma (ilgas, apvalus, .....)
-   tipas (zeme,oras....)

Visus juos reikia sugeneruoti i <main> tag'a kaip naujus <article> HTML objektus

<article>
<img>
<p>Pavadinimas</p>
<p>Savybe 1</p>
<p>Savybe 2</p>
<p>Savybe 3</p>
<a href="">Read more</a>
</article>

Reikia bent minimalaus dizaino, gal net CSS grid.
Nuoroda turi atsidaryti naujame tab'e;
*/

const mainDOM = initialElementDOM.querySelector('main');
// const mainDOM = initialElementDOM.getElementsByTagName('main');

import { pokemonai } from "./pokemon.js"

mainDOM.innerHTML = `
    <article>
    <img src="#">
    <p>Pavadinimas</p>
    <p>Spalva</p>
    <p>Forma</p>
    <p>Tipas</p>
    <a href="">Read more</a>
    </article>
`;




let pokemonaiHTML = '';

for (const data of pokemonai) {
    pokemonaiHTML +=
        `<article>
    <img src="${data.src}" alt="${data.pavadinimas} Logo"></img>
    <p><b>Name:</b> ${data.pavadinimas}</p>
    <p><b>Color:</b> ${data.spalva}</p>
    <p><b>Category:</b> ${data.forma}</p>
    <p><b>Type:</b> ${data.tipas}</p>
    <a href="${data.nuoroda}" target="_blank">Read more</a>
    </article>`
};

mainDOM/*[0]*/.innerHTML = pokemonaiHTML;

