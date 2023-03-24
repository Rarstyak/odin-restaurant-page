

export default function build() {
    const div = document.createElement('div');
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Home';
    div.appendChild(h2);

    return div;
}