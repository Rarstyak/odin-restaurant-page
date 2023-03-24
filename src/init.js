function initHeader() {
    const header = document.querySelector('header');

    const image = document.createElement('img');
    const headline = document.createElement('h1');
    const text = document.createElement('p');

    image.src = '';
    headline.textContent = 'Lackadaisy';
    text.textContent = `Rigbarth's local restaurant.`;

    header.appendChild(image);
    header.appendChild(headline);
    header.appendChild(text);
}

function makeTab(tabName) {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.classList.add(`tab-${tabName}`);

    btn.classList.add(`tab-${tabName}-btn`);
    btn.textContent = tabName;

    li.appendChild(btn);
    return li;
}

function initNav(tabs) {
    const nav = document.querySelector('nav');

    const ul = document.createElement('ul');

    ul.classList.add(`tab-container`);

    tabs.forEach(tab => {
        ul.appendChild(makeTab(tab));
    });

    nav.appendChild(ul);
}

function initFooter() {
    const footer = document.querySelector('footer');
}

export default function initPage(tabs) {
    initHeader();
    initNav(tabs);
    initFooter();
}