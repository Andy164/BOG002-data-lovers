// estas funciones son de ejemplo

export const filterByLetterName = (data, letter) => data.filter(character => character.name[0] == letter);

export const getDimensions = (data) => data.map(location => location.dimension);

export const getIdCharacters = (data) => data.map((item) => item.slice(42));

export const getTemporade = (data) => data.map(temporada => temporada.episode);

export const countStatusValues = (data) => {
	let alive = 0;
	let dead = 0;
	let unknown = 0;

	data.forEach((character) => {
		switch (character.status) {
		  case 'Alive':
		    alive += 1;
		    break;
		  case 'Dead':
		    dead += 1;
		    break;
		  case 'unknown':
		  	unknown += 1;
		  	break;
		}
	});

	return [ alive, dead, unknown ];
}

export const countGenderValues = (data) => {
	let female = 0;
	let male = 0;
	let genderless = 0;
	let unknown = 0;

	data.forEach((character) => {
		switch (character.gender) {
		  case 'Female':
		    female += 1;
		    break;
		  case 'Male':
		    male += 1;
		    break;
		  case 'Genderless':
		    genderless += 1;
		    break;
		  case 'unknown':
		  	unknown += 1;
		  	break;
		}
	});

	return [ female, male, genderless, unknown ];
};

export const countMainCharactersValues = (data) => {
	let rick = 0;
	let morty = 0;
	let summer = 0;
	let beth = 0;
	let jerry = 0;

	rick = data.filter((character) => character.name.includes('Rick')).length;
	morty = data.filter((character) => character.name.includes('Morty')).length;
	summer = data.filter((character) => character.name.includes('Summer')).length;
	beth = data.filter((character) => character.name.includes('Beth')).length;
	jerry = data.filter((character) => character.name.includes('Jerry')).length;

	return [ rick, morty, summer, beth, jerry ];
};