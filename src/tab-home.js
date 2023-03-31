import elsje from './img/npc/RF5_Card_Elsje.png';

function newDialogue() {
    const elsjeCardText = document.querySelector('.card-elsje-text');

    if (!elsjeCardText) {
        return;
    }

    const dialogue = [
        `Welcome...`,
        `Uh... Something wrong?`,
        `Thanks... Come again.`,
        `Thanks for your purchase...`,
        `Come again... I'll still be here.`,
        `Hm? Oh dear. Looks like you don't have any more room. That sucks.`,
        `I'm having a sale today...not that I'll lose sleep if you don't buy anything.`,
        `Want that one?`,
        `Don't want it after all?`,
        `Oh... You don't have enough money.`,
    ];

    const randText = Math.floor(Math.random() * dialogue.length);

    elsjeCardText.textContent = dialogue[randText];
}

export default function build() {
    const div = document.createElement('div');
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Home';
    div.appendChild(h2);

    // Down to 400px wide home section, max whatever?

    const elsjeCardContainer = document.createElement('div');
    elsjeCardContainer.classList.add('card-elsje-container');

    const elsjeCard = document.createElement('div');
    elsjeCard.classList.add('card-elsje');
    elsjeCardContainer.appendChild(elsjeCard);

    const elsjeCardText = document.createElement('div');
    elsjeCardText.classList.add('card-elsje-text');
    elsjeCardText.textContent = '...';
    elsjeCard.appendChild(elsjeCardText);

    const elsjeCardImg = document.createElement('img');
    elsjeCardImg.src = elsje;
    elsjeCard.appendChild(elsjeCardImg);

    elsjeCardContainer.addEventListener('click', newDialogue);
    div.appendChild(elsjeCardContainer);

    setInterval(newDialogue, 15000);

    return div;
}