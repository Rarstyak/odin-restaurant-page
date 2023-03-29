import DataBank from './recipe_data.js';

// Images are 128x128

function accessItem(name, cost, desc) {
    // console.log(name.toUpperCase());
    // console.log(DataBank[0].name.toUpperCase())
    const obj = DataBank.find( (item) => item.name.toUpperCase()==name.toUpperCase() );
    // console.log(obj);
    
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
    imgE.src = obj.img;
    div.appendChild(imgE);

    return div;

}

export default function build() {
    const div = document.createElement('div');

    // via access
    const menu = [
        // Category name, array of items : name, desc, cost
        ['Handmade', [
            ['Onigiri', '180 G', 'A staple food, in a recognizable shape. Despite how common it is, the triangle shape is harder to make than one would think. Uniformity is even more difficult once fillings and toppings are added.'],
        ]],
        ['Knife', [
            ['Pike Sashimi', '150 G', 'Thinkly sliced Pike Sashimi.'],
            ['Shrimp Sashimi', '680 G', 'Why are the shrimp so big in this game?'],
        ]],
        ['Frying Pan', [
            ['Salted Pond Smelt', '600 G', 'Crispy little fish.'],
            ['Salted Pike', '600 G', 'Salted Pike.'],
            ['Fried Eggs', '1100 G', 'Neatly folded. The fluffy texture comes from thorough mixing and even heating.'],
        ]],
        ['Mixer', [
            ['Orange Juice', '290 G', 'Freshly squeezed fruit juice.'],
        ]],
        ['Oven', [
            ['Bread', '440 G', 'A declicious oven baked loaf of bread.'],
            ['Sweet Potato', '870 G', 'Oven roasted yams.'],
            ['Choco Cookie', '8200 G', 'Chocolate flavoured cookies.'],
        ]],
        ['Steamer', [
            ['Dumplings', '150 G', 'Dongo Daikazoku.\nYancha na yaki dango\nYasashii an dango\nSukoshi yumemigachi na\nTsukimi dango\nOsumashi goma dango\nYotsu ko kushi dango\nMinna minna awasete\nHyakunin kazoku'],
        ]],
        ['Pot', [
            ['Rice Porridge', '190 G', 'Soft and fluffy. While some may add sweeteners like milk and honey, salted nuts and pulled pork add a good deal of texture to this dish.'],
            ['Hot Milk', '930 G', 'Warm and creamy. A warm drink that helps soothe the throat and make one sleepy.'],
            ['Cheese Fondue', '3100 G', 'Toasted bread dipped in warm gooey cheese.'],
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
            // Use database instead of creating each
            container.appendChild(accessItem(...item));
        });

        subMenu.appendChild(cat);
    });

    return div;
}