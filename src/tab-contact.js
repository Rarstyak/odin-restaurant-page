import Elsje from './img/npc/Elsje.png';
import Fuuka from './img/npc/Fuuka.png';
import Priscilla from './img/npc/Priscilla.png';

function makeContact(name, title, number, mail, img) {
    const div = document.createElement('div');
    div.classList.add('card-contact');

    const nameE = document.createElement('h4');
    nameE.classList.add('card-contact-name');
    nameE.textContent = name;
    div.appendChild(nameE);

    const titleE = document.createElement('div');
    titleE.classList.add('card-contact-title');
    titleE.textContent = title;
    div.appendChild(titleE);

    const text = document.createElement('div');
    text.classList.add('card-contact-text');

    const numberE = document.createElement('a');
    numberE.classList.add('card-contact-number');
    numberE.href = `tel:${number}`;
    numberE.textContent = number;

    const mailE = document.createElement('a');
    mailE.classList.add('card-contact-mail');
    mailE.href = `mailto:${mail}`;
    mailE.textContent = mail;

    text.innerHTML = `Contact Info:`;
    text.innerHTML += `<br><br>`;
    text.appendChild(numberE);
    text.innerHTML += `<br><br>`;
    text.appendChild(mailE);
    div.appendChild(text);

    const imgE = document.createElement('img');
    imgE.classList.add('card-contact-img');
    imgE.src = img;
    div.appendChild(imgE);

    return div;
}

function makeStaff() {
    const cat = document.createElement('div');
    cat.classList.add(`category`);

    const h3 = document.createElement('h3');
    h3.textContent = 'Staff';
    cat.appendChild(h3);

    const container = document.createElement('div');
    container.classList.add('card-contact-container');
    cat.appendChild(container);

    container.appendChild(makeContact('Elsje', 'Owner, Chef', '(123)456-7890', 'mail@real.com', Elsje));
    container.appendChild(makeContact('Fuuka', 'Server', '(123)456-7890', 'mail@real.com', Fuuka));
    container.appendChild(makeContact('Priscilla', 'Sister', '(123)456-7890', 'mail@real.com', Priscilla));

    return cat;
}

function makeHours() {
    const cat = document.createElement('div');
    cat.classList.add(`category`);

    const h3 = document.createElement('h3');
    h3.textContent = 'Hours';
    cat.appendChild(h3);

    const container = document.createElement('div');
    container.classList.add('card-hours-container');
    cat.appendChild(container);

    const hours = document.createElement('div');
    hours.innerHTML = `Weekdays: 12pm-9pm`;
    hours.innerHTML += `<br><br>`;
    hours.innerHTML += `Holidays: 12pm-9pm`;

    container.appendChild(hours);

    return cat;
}

export default function build() {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    div.appendChild(h2);

    const subMenu = document.createElement('div');
    subMenu.classList.add('category-container');
    div.appendChild(subMenu);

    subMenu.appendChild(makeHours());
    subMenu.appendChild(makeStaff());
    
    return div;
}