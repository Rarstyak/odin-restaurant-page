// Steps 4 and 5: append elements {image, headline, and text} to div#content as a module

export default function initPage() {
    const content = document.querySelector("div#content");

    const image = document.createElement('img');
    const headline = document.createElement('h1');
    const text = document.createElement('p');

    image.src = "";
    headline.textContent = "BEST IN TOWN";
    text.textContent = "Yum, this place has good food. Second sentence.";

    content.appendChild(image);
    content.appendChild(headline);
    content.appendChild(text);
}