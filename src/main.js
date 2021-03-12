import { filterName } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// const arr = filterByLetterName(data.results, 'A');

const arr = filterName(data.results);

let list = Array.from(arr);

document.getElementById('names').innerHTML = list;

console.log(arr);
