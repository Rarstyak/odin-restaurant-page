function initHeader() {
    const header = document.querySelector('header');

    const image = document.createElement('img');
    const headline = document.createElement('h1');
    const text = document.createElement('p');

    image.src = '';
    headline.textContent = 'Lackadaisy';
    text.textContent = `Rigbarth's local ship shaped restaurant.`;

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

    const copyrightText = document.createElement('div');
    const linkRF5Data = document.createElement('a');
    const linkRecipe = document.createElement('a');
    const linkOfficial = document.createElement('a');
    const linkOdin = document.createElement('a');
    const linkAssignment = document.createElement('a');

    linkRF5Data.textContent = 'RF5_Data by kuroba-';
    linkRF5Data.href = 'https://docs.google.com/spreadsheets/d/1LFkOEVQuJ-x1Lkn64Lt8Z7NvbVyUgqHP794Ehw3wbts/edit#gid=914955553';
    linkRecipe.textContent = 'Recipe Data HTML ver 0.8, with english name & img by kuroba- & ZA MAWNEE (Translator)';
    linkRecipe.href = 'https://drive.google.com/file/d/1-tPb-6cwqVKs5K6gEOfYhvXM3tRPZUaj/view?usp=sharing';
    linkOfficial.textContent = 'official Rune Factory website';
    linkOfficial.href = 'https://runefactory.com/rf5';
    linkOdin.textContent = 'The Odin Project';
    linkOdin.href = 'https://www.theodinproject.com/';
    linkAssignment.textContent = 'Restaurant Page Assignment';
    linkAssignment.href = 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page';

    copyrightText.innerHTML = `Uses data from `
    copyrightText.appendChild(linkRF5Data);
    copyrightText.innerHTML += ` and `;
    copyrightText.appendChild(linkRecipe);
    copyrightText.innerHTML += ` which were datamined from Rune Factory 5, as well as data from the `;
    copyrightText.appendChild(linkOfficial);
    copyrightText.innerHTML += `<br><br>`;

    copyrightText.innerHTML += `©2022 Marvelous Inc. All Rights Reserved. Licensed to and published by XSEED Games / Marvelous USA, Inc.`;
    copyrightText.innerHTML += `<br><br>`;

    copyrightText.innerHTML += `The copyrights of videos of games used in our content and other intellectual property rights belong to the provider of the game.`;
    copyrightText.innerHTML += `<br><br>`;

    copyrightText.innerHTML += `This site was designed for `
    copyrightText.appendChild(linkOdin);
    copyrightText.innerHTML += `'s `;
    copyrightText.appendChild(linkAssignment);
    copyrightText.innerHTML += `. Its contents are not accurate to the game.`;

    footer.appendChild(copyrightText);
}

export default function initPage(tabs) {
    initHeader();
    initNav(tabs);
    initFooter();
}