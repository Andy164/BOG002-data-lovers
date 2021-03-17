import { filterByLetterName } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//const arr = filterByLetterName(data.results, 'A');
// const arr = filterName(data.results);
// let list = Array.from(arr);
// document.getElementById('names').innerHTML = list;

// Guardar en la constante characters el arreglo de objetos que contienen la información de cada personaje
let characters = data.results;

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
     let arrcharacters=filterByLetterName(characters, letter);
      removeCharacters(characters);listCharacters(arrcharacters);


    }
    // Agregar el botón creado al contenedor del HTML (contFilterByLetter)
    contFilterByLetter.appendChild(btn);
}

// 
const contCards = document.getElementById("contCards");

function listCharacters(data){
    for(let character of data) {
    let card = document.createElement("div");
    card.className = "card-character";
    card.id= character.id;
    let image = document.createElement("img");
    image.src = character.image;
    // Se le pone a la imagen el evento onclick
    image.onclick=function(){
        document.getElementById("modalImg").src=character.image;
        modal.style.display = "block";
        document.getElementById("name").innerHTML=character.name;
        document.getElementById("status").innerHTML=character.status;
        document.getElementById("specie").innerHTML=character.species;
        document.getElementById("type").innerHTML=character.type;
        document.getElementById("gender").innerHTML=character.gender;
        document.getElementById("origin").innerHTML=character.origin.name;
        document.getElementById("location").innerHTML=character.location.name;
        


    }
    let name = document.createElement("p");
    name.textContent = character.name;

    card.appendChild(image);
    card.appendChild(name);

    contCards.appendChild(card);
}
}
listCharacters(characters);
function removeCharacters(data){
    for(let character of data) {
      const contCards=document.getElementById("contCards");
      let card= document.getElementById(character.id);
    if(card){
        contCards.removeChild(card);
    }
      
      }
}

const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// console.log(list);




