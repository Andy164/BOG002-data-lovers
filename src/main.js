import { filterByLetterName, getDimensions, getIdCharacters, getTemporade  } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let episodesData= [];
// Guardar en la constante characters el arreglo de objetos que contienen la información de cada personaje
const charactersData = data.results;


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

    // Ocultamos vista de los mundos
    const viewWorlds = document.getElementById("viewWorlds");
    viewWorlds.style.display = "none";

    const viewEpisodes = document.getElementById("viewEpisodes");
    viewEpisodes.style.display = "none";
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

    const viewEpisodes = document.getElementById("viewEpisodes");
    viewEpisodes.style.display = "none";
  });
}
const btnsToEpisodes = document.getElementsByClassName("episodesmenu");
// Iteramos sobre los botones de characters del menú principal y menú hamburguesa
for (let index = 0; index < btnsToEpisodes.length; index++) {
  btnsToEpisodes[index].addEventListener("click", () => {
    const viewEpisodes = document.getElementById("viewEpisodes");
    viewEpisodes.style.display = "block";

    const viewHome = document.getElementById("titulo");
    viewHome.style.display = "none";

    const menu = document.getElementById("openNav");
    menu.style.display = "block";

    const viewCharacters = document.getElementById("viewCharacters");
    viewCharacters.style.display = "none";

    const worlds = document.getElementById("viewWorlds");
    worlds.style.display = "none";
  });
}

// Ocultar la vista actual y mostrar la de Home
function showHome() {
  const viewHome = document.getElementById("titulo");
  viewHome.style.display = "flex";

  const viewCharacters = document.getElementById("viewCharacters");
  viewCharacters.style.display = "none";

  const viewWorlds = document.getElementById("viewWorlds");
  viewWorlds.style.display = "none";
}
const btnHome = document.getElementById("menuHome");
btnHome.onclick = () => {
  showHome();
  closeNav();
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
    // LLamar a la función que filtra personajes por la letra inicial y se guarda 
    // el resultado (arreglo de personajes) en la variable charactersFiltered
    let charactersFiltered = filterByLetterName(charactersData, letter);

    // Llamamos a la función que remueve todas las tarjetas que están en la página
    removeCharacters(charactersData);

    // Llamamos a la función que va a crear y mostrar los personajes que fueron filtrados
    listCharacters(charactersFiltered);
  }
  // Agregar el botón creado al contenedor del HTML (contFilterByLetter)
  contFilterByLetter.appendChild(btn);
}

// Crear botón "Ver todos"
let btnAll = document.createElement("button");
btnAll.textContent = "Ver todos";
btnAll.onclick = function () {
  // Llamamos a la función remover para quitar las tarjetas que estan en la página
  removeCharacters(charactersData);

  // Llamamos a la función que crea las tarjetas y le pasamos como argumento todos los personajes
  listCharacters(charactersData);
}
// Agregamos el botón de Ver todos al HTML
contFilterByLetter.appendChild(btnAll);


// TARJETAS DE PERSONAJES ------------------------------------------------------------------------------------
const contCards = document.getElementById("contCards");

//Crear función que recibe un arreglo de personajes para crear cada tarjeta de esa lista
function listCharacters(listCharacters) {
  // Iteramos sobre la lista de personajes
  for (let character of listCharacters) {
    // Por cada personaje creamod la card
    let card = document.createElement("div");
    card.className = "card-character";
    card.id = character.id;

    // Creamos una etiqueta de imagen por cada tarjeta para mostrar la foto de cada personajes
    let image = document.createElement("img");
    // Le pasamos la url de la imagen a la etiqueta img en src
    image.src = character.image;

    // Se le pone a la imagen el evento onclick
    image.onclick = function () {
      // Aquí obtener los elementos que estructuran el modal que mostrará los detalles de cada personaje
      // Mostramos el modal (ventana emergente)-------------------------------------------------------------------
      modal.style.display = "block";
      // Pasamos la url de la imagen
      document.getElementById("modalImg").src = character.image;
      // Pasamos el resto de información
      document.getElementById("name").innerHTML = character.name;
      document.getElementById("status").innerHTML = character.status;
      document.getElementById("specie").innerHTML = character.species;
      document.getElementById("type").innerHTML = character.type;
      document.getElementById("gender").innerHTML = character.gender;
      document.getElementById("origin").innerHTML = character.origin.name;
      document.getElementById("location").innerHTML = character.location.name;
      document.getElementsByClassName("dropdown")[0].style.display="block";
      listEpisodes(character.episode);

    }

    // Creamos un etiqueta p para mostrar el nombre del personaje en la tarjeta
    let name = document.createElement("p");
    name.textContent = character.name;

    // Pasamos a la card la imagen y el nombre del personaje
    card.appendChild(image);
    card.appendChild(name);

    // Pasamos la card con el nombre e imagen al HTML
    contCards.appendChild(card);
  }
}

// Llamamos a la función que crea esas tarjetas
listCharacters(charactersData);

// Creamos la función que quitará las tarjetas de personajes
function removeCharacters(charactersData) {
  // Iteramos sobre esa lista de personajes (todos los personajes de data)
  for (let character of charactersData) {
    const contCards = document.getElementById("contCards");
    let card = document.getElementById(character.id);
    // Verificamos si en la vista se creó la tarjeta de cada personaje
    if (card) {
      // Si existe la tarjeta, se elimina de la página
      contCards.removeChild(card);
    }
  }
}


// VENTANA EMERGENTE ---------------------------------------------------------------------------------------------
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
// Agregamos evento click al botón X que cierra la ventana emergente
span.onclick = function () {
  // Ocultar la ventana emergente
  modal.style.display = "none";
}
// Cuando el usuario haga click fuera de la ventana emergente, ésta se cerrará
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function listEpisodes(listEpisodes){
 
  const container= document.getElementsByClassName("dropdown-content")[0];
  container.innerHTML=""

  for (let episode of listEpisodes ){
    const episodio = document.createElement("a")
   episodio.textContent= episodesData[episode.slice(40)-1].name;
  container.appendChild(episodio);
   console.log(episode.slice(40));
 

}
    

  
}

// MENÚ HAMBURGUESA -----------------------------------------------------------------------------------------------
// Función para mostrar el menú
function openNav() {
  document.getElementById("lateralMenu").style.width = "250px";
}
// Agregar el evento click a las líneas para que abran el menú
document.getElementById("openNav").onclick = function () {
  openNav();
}

// Función para cerrar menú
function closeNav() {
  document.getElementById("lateralMenu").style.width = "0";
}
// Agregar el evento click al botón X que cierra el menú
document.getElementById("closeNav").onclick = function () {
  closeNav();
}

// Utilizamos fetch que permite traer los objetos de location
fetch("https://rickandmortyapi.com/api/location")
  .then(response => response.json())
  .then(data => {
    const listDimensions = getDimensions(data.results);
    const dimensionsSet = new Set(listDimensions);
    const dimensions = [...dimensionsSet];

    // Crear lista de  dimensiones
    cardDimensions(dimensions);

    // Crear lista de mundos con su lista de personajes
    cardDesplegable(data.results, dimensions);
  });

function cardDimensions(listDimensions) {
  const containerWorlds = document.getElementById("viewWorlds");

  for (let dimension of listDimensions) {
    const btnDesplegable = document.createElement("button");
    btnDesplegable.className = "desplegable";
    btnDesplegable.textContent = dimension;
    btnDesplegable.onclick = function() {
      let panel = btnDesplegable.nextElementSibling;

      if(panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    }

    const div = document.createElement("div");
    div.className = "listWorlds subdesplegable";

    containerWorlds.appendChild(btnDesplegable);
    containerWorlds.appendChild(div);
  }
}

function cardDesplegable(listWorlds, dimensions) {
  const containerName = document.getElementsByClassName("listWorlds");
  // const desplegable = document.getElementsByClassName("desplegable");
  // console.log(listWorlds);
  for (let index = 0; index < containerName.length; index++) {
    for (let place of listWorlds) {
      if (place.dimension == dimensions[index]) {
        const btnSubDesplegable = document.createElement("button");
        btnSubDesplegable.className = "desplegable";
        btnSubDesplegable.textContent = place.name;
        btnSubDesplegable.onclick = function() {
          let panel = btnSubDesplegable.nextElementSibling;

          if(panel.style.display === "flex") {
            panel.style.display = "none";
          } else {
            panel.style.display = "flex";
          }
        }

        let idCharacters = getIdCharacters(place.residents);
        // console.log(idCharacters);
        
        const contCharacters = document.createElement("div");
        contCharacters.className = "listCharacters subdesplegable";
        const titulo= document.createElement("h2");
        titulo.textContent="Residents";
        titulo.style.width="100%";
        titulo.style.textAlign="center";

        contCharacters.appendChild(titulo);

        for(let id of idCharacters) {
          if(id <= 492){

          let cardCharacter = document.createElement("div");

          let imgCharacter = document.createElement("img");
          
          imgCharacter.src = charactersData[id - 1].image;
          imgCharacter.onclick = function () {
            // Aquí obtener los elementos que estructuran el modal que mostrará los detalles de cada personaje
            // Mostramos el modal (ventana emergente)-------------------------------------------------------------------
            modal.style.display = "block";
            // Pasamos la url de la imagen
            document.getElementById("modalImg").src = charactersData[id - 1].image;
            // Pasamos el resto de información
            document.getElementById("name").innerHTML = charactersData[id - 1].name;
            document.getElementById("status").innerHTML = charactersData[id - 1].status;
            document.getElementById("specie").innerHTML = charactersData[id - 1].species;
            document.getElementById("type").innerHTML = charactersData[id - 1].type;
            document.getElementById("gender").innerHTML = charactersData[id - 1].gender;
            document.getElementById("origin").innerHTML = charactersData[id - 1].origin.name;
            document.getElementById("location").innerHTML = charactersData[id - 1].location.name;
            document.getElementsByClassName("dropdown")[0].style.display="block";
            listEpisodes(charactersData[id - 1]).episode;
          }


          let nameCharacter = document.createElement("p");
          nameCharacter.textContent = charactersData[id - 1].name;

          cardCharacter.appendChild(imgCharacter);
          cardCharacter.appendChild(nameCharacter);
          contCharacters.appendChild(cardCharacter);
          }
         }
        
        containerName[index].appendChild(btnSubDesplegable);
        containerName[index].appendChild(contCharacters);
       
      }
    }
  }
}
fetch("https://rickandmortyapi.com/api/episode")
.then(response => response.json())
  .then(data => {
    episodesData=data.results;
    const listTemporades= getTemporade(data.results);
    const sliceTemporade = listTemporades.map(t => t.slice(0,-3));
    const temporadesSet = new Set(sliceTemporade);
    const temporada = [...temporadesSet];

    cardTemporade(temporada);
    cardEpiodes(temporada, data.results);
});
function cardTemporade(listTemporades) {
  const containerTemporades = document.getElementById("viewEpisodes");

  for (let temporade of listTemporades) {
    const btnDesplegable = document.createElement("button");
    btnDesplegable.className = "desplegableTemporades";
    btnDesplegable.textContent = "Season "+temporade ;
    btnDesplegable.onclick = function() {
      let panel = btnDesplegable.nextElementSibling;

      if(panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    }

    const div = document.createElement("div");
    div.className = "listEpisodes subdesplegableTemporades";

    containerTemporades.appendChild(btnDesplegable);
    containerTemporades.appendChild(div);
  }
}
function cardEpiodes(listTemporades, episodes) {
  const containerName = document.getElementsByClassName("listEpisodes");
  // const desplegable = document.getElementsByClassName("desplegable");
  for (let index = 0; index < containerName.length; index++) {
    for (let episode of episodes) {
      if (episode.episode.slice(0,-3) == listTemporades[index]) {
        const btnSubDesplegable = document.createElement("button");
        btnSubDesplegable.className = "desplegableTemporades";
        btnSubDesplegable.textContent = episode.name;
        btnSubDesplegable.onclick = function() {
          let panel = btnSubDesplegable.nextElementSibling;

        

          if(panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        }
        const info = document.createElement("div");
        info.className="infoEpisodes subdesplegableTemporades";

        containerName[index].appendChild(btnSubDesplegable);
        containerName[index].appendChild(info);

        const infoEpisodes = document.createElement("div");
        infoEpisodes.className="infoForEpisode";

        const h2 = document.createElement("h2");
        h2.textContent=episode.name;

        const p = document.createElement("p");
        const span1 = document.createElement ("span");
        span1.className="number";
        span1.textContent=episode.episode
        const span2 = document.createElement ("span");
        span2.className="toSeparate";
        span2.textContent=" | "
        const span3 = document.createElement ("span");
        span3.className="date";
        span3.textContent=episode.air_date;

        let idCharacters = getIdCharacters(episode.characters);
         const containerCharacters = document.createElement("div");
         containerCharacters.className="containerCharactersT";
         for(let id of idCharacters) {
           if( id <= 493){
         const infoCharacters = document.createElement("div");
         infoCharacters.className="infoCharacters";
          const image= document.createElement("img");
          image.src= charactersData[id-1].image;
          image.onclick = function () {
            // Aquí obtener los elementos que estructuran el modal que mostrará los detalles de cada personaje
            // Mostramos el modal (ventana emergente)-------------------------------------------------------------------
            modal.style.display = "block";
            // Pasamos la url de la imagen
            document.getElementById("modalImg").src = charactersData[id - 1].image;
            // Pasamos el resto de información
            document.getElementById("name").innerHTML = charactersData[id - 1].name;
            document.getElementById("status").innerHTML = charactersData[id - 1].status;
            document.getElementById("specie").innerHTML = charactersData[id - 1].species;
            document.getElementById("type").innerHTML = charactersData[id - 1].type;
            document.getElementById("gender").innerHTML = charactersData[id - 1].gender;
            document.getElementById("origin").innerHTML = charactersData[id - 1].origin.name;
            document.getElementById("location").innerHTML = charactersData[id - 1].location.name;

            document.getElementsByClassName("dropdown")[0].style.display="none";
          }
          const paragraf = document.createElement("p");
          paragraf.textContent=charactersData[id-1].name;
          infoCharacters.appendChild(image);
          infoCharacters.appendChild(paragraf);
         containerCharacters.appendChild(infoCharacters);
         }
        }

       
        
        info.appendChild(infoEpisodes);
        info.appendChild(containerCharacters);
        infoEpisodes.appendChild(h2);
        p.appendChild(span1);
        p.appendChild(span2);
        p.appendChild(span3);
        infoEpisodes.appendChild(p);
        

       
        
       }
    }
  }
}
// const desplegable = document.getElementsByClassName("desplegableTemporades");

// // Iteramos sobre todos los elementos que tienen la clase "desplegable"
// for (let i = 0; i < desplegable.length; i++) {
//   // A cada elemento desplegable le agregamos el evento click para mostrar el panel de opciones
//   desplegable[i].addEventListener("click", () => {
//     let panel = desplegable[i].nextElementSibling;
//   console.log(panel);
//     if(panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
