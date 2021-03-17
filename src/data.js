// estas funciones son de ejemplo

export const filterByLetterName = (data, letter) => {
  const result = data.filter(character => character.name[0] == letter);
  return result;
};

export const filterName = (data) => {
  const result = data.map(character => character.name);
  
  return result;
}


export const anotherExample = () => {
  return 'OMG';
};
