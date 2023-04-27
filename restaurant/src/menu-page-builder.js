import pizza from '/menu/pizza.jpeg';
import hamburger from '/menu/hamburger.jpeg';
import breakfast from '/menu/breakfast.jpeg';
import spaghetti from '/menu/spaghetti.jpeg';
import {loadNavBar} from "./navigation-builder.js";

export function loadMenuPage() {
    const page = document.querySelector('#app');

    const menu = document.createElement('main');
    menu.classList.add('menu');
    const urls = [pizza, hamburger, breakfast, spaghetti];

    for (const url of urls) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${url}" alt="A nice dish">
        <h2>A dish</h2>
        <p>Nagyon finom ingyom-bingyom egytál étel</p>
        `;
        menu.appendChild(card);
    }

    page.replaceChildren(menu);
}