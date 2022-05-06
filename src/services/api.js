import axios from 'axios';
const instance = axios.create({ baseURL: 'https://rickandmortyapi.com/api' });

export const getPeople = (name) => instance.get(`/character/?name=${name}`);