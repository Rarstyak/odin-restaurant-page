import initPage from './init.js';
import tabHomeBuild from './tab-home.js';
import tabMenuBuild from './tab-menu.js';
import tabContactBuild from './tab-contact.js';

(function setUp() {
    const main = document.querySelector('main');
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
})();