import initPage from './init.js';
import tabHomeBuild from './tab-home.js';
import tabMenuBuild from './tab-menu.js';
import tabContactBuild from './tab-contact.js';

import './style.css';

(function setUp() {
    const body = document.querySelector('body');

    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    body.appendChild(header);
    body.appendChild(nav);
    body.appendChild(main);
    body.appendChild(footer);

    const tabs = [
        // [0]:tab name, [1]:build function
        ['Home', tabHomeBuild],
        ['Menu', tabMenuBuild],
        ['Contact', tabContactBuild],
    ];

    // Initialize page with named tabs
    initPage(tabs.map(tab => tab[0]));

    // Add eventlisteners to each named tab
    // Clear main and fill with div returned from associated build
    tabs.forEach (tab => {
        const btn = document.querySelector(`button.tab-${tab[0]}-btn`);
        const div = tab[1]();
        btn.addEventListener('click', () => {
            main.innerHTML = '';
            main.appendChild(div);
        });
    });

    document.querySelector(`button.tab-${tabs[0][0]}-btn`).click();
})();