// estas funciones son de ejemplo

export const filterByLetterName = (data, letter) => {
  const result = data.filter(character => character.name[0] == letter);
  return result;
};

export const filterName = (data) => {
  const result = data.map(character => character.name);
  
  return result;
}
export const getDimensions = (data) =>{
  const dimensions = data.map(location =>location.dimension);

 return dimensions;
}


export const getIdCharacters = (data) => data.map((item) => item.slice(42));

export const getTemporade = (data) =>{
  const temporadas = data.map(temporada=> temporada.episode);
  return temporadas;
}


export const anotherExample = () => {
  return 'OMG';
};
