import { filterByLetterName } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const arr = filterByLetterName(data.results, 'A');
// const arr = filterName(data.results);
// let list = Array.from(arr);
// document.getElementById('names').innerHTML = list;

// Guardar en la constante characters el arreglo de objetos que contienen la información de cada personaje
const characters = data.results;

// Ocultar vista principal y mostrar la de personajes
function toCharacters() {
    const viewCharacters = document.getElementById("viewCharacters");
    viewCharacters.style.display = "block";

    const viewHome = document.getElementById("titulo");
    viewHome.style.display = "none";
}
document.getElementById("characters").onclick = function() {
    toCharacters();
}

// Crear arreglo de letras para crear botones en el dom
const contFilterByLetter = document.getElementById("filterByLetter");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Iteramos sobre el arreglo de letras para tomar cada letra con un ciclo for...of
for(let letter of letters) {
    // Por cada letra creamos un elemento button
    let btn = document.createElement("button");
    // A ese elemento creado le añadimos el texto que es la letra
    btn.textContent = letter;
    // A ese botón creado se le añade el evento click
    btn.onclick = function() {
        console.log(filterByLetterName(characters, letter));
    }
    // Agregar el botón creado al contenedor del HTML (contFilterByLetter)
    contFilterByLetter.appendChild(btn);
}

// 
const contCards = document.getElementById("contCards");
for(let character of characters) {
    let card = document.createElement("div");
    card.className = "card-character";

    let image = document.createElement("img");
    image.src = character.image;

    let name = document.createElement("p");
    name.textContent = character.name;

    card.appendChild(image);
    card.appendChild(name);

    contCards.appendChild(card);
}



// console.log(list);




