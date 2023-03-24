import Onigiri from './img/food/Onigiri.png';
import PickledTurnip from './img/food/Pickled Turnip.png';
import PikeSashimi from './img/food/Pike Sashimi.png';
import MasuTroutSashimi from './img/food/Masu Trout Sashimi.png';
import SaltedPondSmelt from './img/food/Salted Pond Smelt.png';
import SaltedPike from './img/food/Salted Pike.png';
import OrangeJuice from './img/food/Orange Juice.png';
import GrapeJuice from './img/food/Grape Juice.png';
import Bread from './img/food/Bread.png';
import BakedOnigiri from './img/food/Baked Onigiri.png';
import Dumplings from './img/food/Dumplings.png';
import Manju from './img/food/Manju.png';
import RicePorridge from './img/food/Rice Porridge.png';
import Marmalade from './img/food/Marmalade.png';

// Images are 128x128

function makeItem(name, desc, cost, img) {
    const div = document.createElement('div');
    div.classList.add('card-item');

    const nameE = document.createElement('h4');
    nameE.classList.add('card-item-name');
    nameE.textContent = name;
    div.appendChild(nameE);

    const descE = document.createElement('p');
    descE.classList.add('card-item-desc');
    descE.textContent = desc;
    div.appendChild(descE);

    const costE = document.createElement('div');
    costE.classList.add('card-item-cost');
    costE.textContent = cost;
    div.appendChild(costE);

    const imgE = document.createElement('img');
    imgE.classList.add('card-item-img');
    imgE.src = img;
    div.appendChild(imgE);

    return div;
}

export default function build() {
    const div = document.createElement('div');
    const menu = [
        // Category name, array of items : name, desc, cost, img
        ['Handmade', [
            ['Onigiri', 'desc', '57 G', Onigiri],
            ['Pickled Turnip', 'desc', '48 G', PickledTurnip],
        ]],
        ['Knife', [
            ['Pike Sashimi', 'desc', '13 G', PikeSashimi],
            ['Masu Trout Sashimi', 'desc', '17 G', MasuTroutSashimi],
        ]],
        ['Frying Pan', [
            ['Salted Pond Smelt', 'desc', '173 G', SaltedPondSmelt],
            ['Salted Pike', 'desc', '190 G', SaltedPike],
        ]],
        ['Mixer', [
            ['Orange Juice', 'desc', '92 G', OrangeJuice],
            ['Grape Juice', 'desc', '140 G', GrapeJuice],
        ]],
        ['Oven', [
            ['Bread', 'desc', '145 G', Bread],
            ['Baked Onigiri', 'desc', '65 G', BakedOnigiri],
        ]],
        ['Steamer', [
            ['Dumplings', 'desc', '45 G', Dumplings],
            ['Manju', 'desc', '272 G', Manju],
        ]],
        ['Pot', [
            ['Rice Porridge', 'desc', '57 G', RicePorridge],
            ['Marmalade', 'desc', '90 G', Marmalade],
        ]],
    ]

    const h2 = document.createElement('h2');
    h2.textContent = 'Dishes';
    div.appendChild(h2);

    const subMenu = document.createElement('div');
    subMenu.classList.add('category-container');
    div.appendChild(subMenu);

    menu.forEach(category => {
        const cat = document.createElement('div');
        cat.classList.add(`category`);

        const h3 = document.createElement('h3');
        h3.textContent = category[0];
        cat.appendChild(h3);

        const container = document.createElement('div');
        container.classList.add('card-item-container');
        cat.appendChild(container);

        category[1].forEach(item => {
            container.appendChild(makeItem(...item));
        });

        subMenu.appendChild(cat);
    });

    return div;
}