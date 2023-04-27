import {loadLandingPage} from "./landing-page-builder.js";
import {loadMenuPage} from "./menu-page-builder.js";
import {loadContactPage} from "./contact-page-builder.js";

export  function enableTabs() {
    const homeTab = document.querySelector('#home');
    homeTab.addEventListener('click', loadLandingPage);

    const menuTab = document.querySelector('#menu');
    menuTab.addEventListener('click', loadMenuPage);

    const contactTab = document.querySelector('#contact');
    contactTab.addEventListener('click', loadContactPage);
}