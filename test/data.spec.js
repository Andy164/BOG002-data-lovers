import { filterByLetterName, getIdCharacters, getTemporade, getDimensions } from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';
import { episodesData, locationData } from './results.js';

const charactersData = data.results;


describe('filterByLetterName', () => {
  it('is a function', () => {
    expect(typeof filterByLetterName).toBe('function');
  });

  it('should return an array of 3 characters', () => {
    expect(filterByLetterName(charactersData, 'U')).toHaveLength(3);
  });

  it('should return an array', () => {
    expect(Array.isArray(filterByLetterName(charactersData, 'B'))).toBeTruthy();
  });

  it('should return Morty Smith', () => {
    expect(filterByLetterName(charactersData, 'M')[0].name).toBe('Morty Smith');
  });
});


describe('getIdCharacters', () => {
  it('is a function', () => {
    expect(typeof getIdCharacters).toBe('function');
  });

  const url = ["https://rickandmortyapi.com/api/character/10"];

  it('should return "10"', () => {
    expect(getIdCharacters(url)[0]).toBe("10");
  });

  it('should return an array', () => {
    expect(Array.isArray(getIdCharacters(url))).toBeTruthy();
  });
});


describe('getTemporade', () => {
  it('is a function', () => {
    expect(typeof getIdCharacters).toBe('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(getTemporade(episodesData))).toBeTruthy();
  });

  it('should return "S01E01"', () => {
    expect(getTemporade(episodesData)[0]).toBe('S01E01');
  });
});

describe('getDimensions', () => {
  it('is a function', () => {
    expect(typeof getDimensions).toBe('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(getDimensions(locationData))).toBeTruthy();
  });

  it('should return "Dimension C-137"', () => {
    expect(getDimensions(locationData)[0]).toBe('Dimension C-137');
  });
});
