import {loadNavBar} from "./navigation-builder.js";

export function loadContactPage() {
    const page = document.querySelector('#app');

    const title = document.createElement('h1');
    title.textContent = 'Contact';
    const contacts = document.createElement('main');
    contacts.innerHTML = `
        <ul class="contacts">
          <li>Név:<span>Mák Feri</span></li>
          <li>Telefon:<span>+36 70 123 4567</span></li>
          <li>Email:<span>harommajom@info.com</span></li>
          <li>Cím:<span>Balatonalmádi</span></li>
        </ul>
    `;
    page.replaceChildren(title, contacts);
}