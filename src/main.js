// import { filterName } from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';

// const arr = filterByLetterName(data.results, 'A');
// const arr = filterName(data.results);
// let list = Array.from(arr);
// document.getElementById('names').innerHTML = list;

function toCharacters() {
    const viewCharacters = document.getElementById("viewCharacters");
    viewCharacters.style.display = "block";

    const viewHome = document.getElementById("titulo");
    viewHome.style.display = "none";
}

document.getElementById("characters").onclick = function() {
    toCharacters();
}

const contFilterByLetter = document.getElementById("filterByLetter");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
for(let letter of letters) {
    let btn = document.createElement("button");
    btn.textContent = letter;
    contFilterByLetter.appendChild(btn);
}



// console.log(list);




