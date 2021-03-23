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
export const getName = (data) =>{
  const nameDimensions = data.map(location=> location.name);

  return nameDimensions
}

export const getIdCharacters = (data) => data.map((item) => item.slice(42));


export const anotherExample = () => {
  return 'OMG';
};
