// estas funciones son de ejemplo

export const filterByLetterName = (data, letter) => data.filter(character => character.name[0] == letter);

export const getDimensions = (data) => data.map(location => location.dimension);

export const getIdCharacters = (data) => data.map((item) => item.slice(42));

export const getTemporade = (data) => data.map(temporada => temporada.episode);