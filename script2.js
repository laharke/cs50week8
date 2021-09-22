

// making a random game to guess what charcter are you
//basicalyl creating an array with some chracters then picking and index randomly

let personajes = ['James Sunderland', 'Chrono', 'a Hunter', 'Zero', 'Kratos', 'Yoshi']
let lengthPersonajes = personajes.length;
let choice = getRandomInt(0, lengthPersonajes-1);
const charButton = document.querySelector('#characterButton');
const characterDiv = document.querySelector('#characterDiv');
let personaje = personajes[choice];
const newDivChar = document.createElement('div');
newDivChar.style.padding = '10px';
let mensajePersonaje = `Amazing! You're ${personaje} !`
const charNode = document.createTextNode(mensajePersonaje);






charButton.addEventListener('click', () => {
    newDivChar.appendChild(charNode);
    characterDiv.appendChild(newDivChar);
    charButton.disabled = true;
});







function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}