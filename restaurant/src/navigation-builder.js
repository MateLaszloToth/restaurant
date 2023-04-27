export function loadNavBar() {
    const navBar = document.querySelector('nav');
    navBar.classList.add('nav');

    const homeTab = document.createElement('div');
    homeTab.textContent = "Home";
    homeTab.classList.add('tab');
    homeTab.id = 'home';

    const menuTab = document.createElement('div');
    menuTab.textContent = "Menu";
    menuTab.classList.add('tab');
    menuTab.id = 'menu';

    const contactTab = document.createElement('div');
    contactTab.textContent = "Contact";
    contactTab.classList.add('tab');
    contactTab.id = 'contact';

    navBar.replaceChildren(homeTab, menuTab, contactTab);

    return navBar;
}