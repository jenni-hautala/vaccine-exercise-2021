import axios from 'axios';

const url = 'http://localhost:5000/vaccinations';

export const fetchVaccinations = () =>  axios.get(url);