import { headerData } from "../index.js";

export function header() {
    const navDOM = document.getElementById('main-navigation');
    const titleDOM = document.getElementsByTagName('title');
    let headerHTML = ``;
    for (const data of headerData) {
        if (!titleDOM[0].innerText.toUpperCase().includes('HOME')) {
            headerHTML += `<a class="link" href="${data.link}">${data.text}</a>`;
        } else {
            headerHTML += `<a class="link" href="${data.link.replace('..', '.')}">${data.text}</a>`
        }
    }

    navDOM.innerHTML = headerHTML;
}

