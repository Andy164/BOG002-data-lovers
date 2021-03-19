import { filterByLetterName } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


// Guardar en la constante characters el arreglo de objetos que contienen la información de cada personaje
const characters = data.results;

// BOTONES MENÚ --------------------------------------------------------------------------------------------
// Ocultar vista principal y mostrar la de personajes
const btnsToCharacters = document.getElementsByClassName("charactersMenu");
// Iteramos sobre los botones de characters del menú principal y menú hamburguesa
for (let index = 0; index < btnsToCharacters.length; index++) {
  // Agregamos evento click a cada botón
  btnsToCharacters[index].addEventListener("click", () => {
    // Buscamos el div que contiene la vista de los chacarcters
    const viewCharacters = document.getElementById("viewCharacters");
    viewCharacters.style.display = "block";

    // Buscamos la lista de home y la ocultamos
    const viewHome = document.getElementById("titulo");
    viewHome.style.display = "none";

    // Mostramos el botón que abre del menú hamburguesa
    const menu = document.getElementById("openNav");
    menu.style.display = "block";
  });
}

// Ocultar vista principal y mostrar los mundos
const btnsToDimensions = document.getElementsByClassName("dimensionsMenu");
// Iteramos sobre los botones de characters del menú principal y menú hamburguesa
for (let index = 0; index < btnsToDimensions.length; index++) {
  btnsToDimensions[index].addEventListener("click", () => {
    const viewWorlds = document.getElementById("viewWorlds");
    viewWorlds.style.display = "block";

    const viewHome = document.getElementById("titulo");
    viewHome.style.display = "none";

    const menu = document.getElementById("openNav");
    menu.style.display = "block";

    const viewCharacters = document.getElementById("viewCharacters");
    viewCharacters.style.display = "none";
  });
}



// FILTRO POR LETRAS PARA EL NOMBRE -------------------------------------------------------------------------------
// Crear arreglo de letras para crear botones en el dom
const contFilterByLetter = document.getElementById("filterByLetter");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Iteramos sobre el arreglo de letras para tomar cada letra con un ciclo for...of
for (let letter of letters) {
  // Por cada letra creamos un elemento button
  let btn = document.createElement("button");
  // A ese elemento creado le añadimos el texto que es la letra
  btn.textContent = letter;
  // A ese botón creado se le añade el evento click
  btn.onclick = function () {
    let arrcharacters = filterByLetterName(characters, letter);
    removeCharacters(characters); 
    listCharacters(arrcharacters);
  }
  // Agregar el botón creado al contenedor del HTML (contFilterByLetter)
  contFilterByLetter.appendChild(btn);
}

// Crear botón "Ver todos"
let btnAll = document.createElement("button");
btnAll.textContent = "Ver todos";
btnAll.onclick = function () {
  removeCharacters(characters);
  listCharacters(characters);
}
contFilterByLetter.appendChild(btnAll);


// TARJETAS DE PERSONAJES ------------------------------------------------------------------------------------
const contCards = document.getElementById("contCards");

function listCharacters(listCharacters) {
  for (let character of listCharacters) {
    let card = document.createElement("div");
    card.className = "card-character";
    card.id = character.id;
    let image = document.createElement("img");
    image.src = character.image;
    // Se le pone a la imagen el evento onclick
    image.onclick = function () {
      document.getElementById("modalImg").src = character.image;
      modal.style.display = "block";
      document.getElementById("name").innerHTML = character.name;
      document.getElementById("status").innerHTML = character.status;
      document.getElementById("specie").innerHTML = character.species;
      document.getElementById("type").innerHTML = character.type;
      document.getElementById("gender").innerHTML = character.gender;
      document.getElementById("origin").innerHTML = character.origin.name;
      document.getElementById("location").innerHTML = character.location.name;
    }
    let name = document.createElement("p");
    name.textContent = character.name;

    card.appendChild(image);
    card.appendChild(name);

    contCards.appendChild(card);
  }
}
listCharacters(characters);
function removeCharacters(data) {
  for (let character of data) {
    const contCards = document.getElementById("contCards");
    let card = document.getElementById(character.id);
    if (card) {
      contCards.removeChild(card);
    }

  }
}

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//En esta funcion sale el menu hamburguesa 
function openNav() {
  document.getElementById("lateralMenu").style.width = "250px";
}
document.getElementById("openNav").onclick = function () {
  openNav();
}
function closeNav() {
  document.getElementById("lateralMenu").style.width = "0";
}
document.getElementById("closeNav").onclick = function () {
  closeNav();
}

const desplegable = document.getElementsByClassName("desplegable");
for (let index = 0; index < desplegable.length; index++) {
  desplegable[index].addEventListener("click", () => {
    let panel = desplegable[index].nextElementSibling;

    if(panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//const arr = filterByLetterName(data.results, 'A');
//const arr = filterName(data.results);
// let list = Array.from(arr);

// function viewWorlds() {

// }