import axios from 'axios';
const instance = axios.create({ baseURL: 'https://rickandmortyapi.com/api' });

// Promesa de axios

export const getCharacter = (name) => instance.get(`/character/?name=${name}`);
export const getPage = (page) => instance.get(`/character/?page=${page}`);