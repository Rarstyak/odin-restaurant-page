import Elsje from './img/npc/Elsje.png';
import Fuuka from './img/npc/Fuuka.png';
import Priscilla from './img/npc/Priscilla.png';

function makeContact(name, title, number, mail, img) {
    const div = document.createElement('div');
    div.classList.add('card-contact');

    const nameE = document.createElement('h4');
    nameE.textContent = name;
    div.appendChild(nameE);

    const titleE = document.createElement('p');
    titleE.textContent = title;
    div.appendChild(titleE);

    const numberE = document.createElement('a');
    numberE.href = `tel:${number}`;
    numberE.textContent = number;
    div.appendChild(numberE);

    const mailE = document.createElement('a');
    mailE.href = `mailto:${mail}`;
    mailE.textContent = mail;
    div.appendChild(mailE);

    const imgE = document.createElement('img');
    imgE.src = img;
    div.appendChild(imgE);

    return div;
}

export default function build() {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact';
    div.appendChild(h2);

    const container = document.createElement('div');
    container.classList.add('card-contact-container');
    div.appendChild(container);

    container.appendChild(makeContact('Elsje', 'Owner, Chef', '(123)456-7890', 'mail@real.com', Elsje));
    container.appendChild(makeContact('Fuuka', 'Server', '(123)456-7890', 'mail@real.com', Fuuka));
    container.appendChild(makeContact('Priscilla', 'Sister', '(123)456-7890', 'mail@real.com', Priscilla));

    return div;
}