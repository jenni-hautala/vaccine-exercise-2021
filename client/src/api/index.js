import axios from 'axios';

// App url in Heroku
// const url = 'https://vaccine-exercise-server.herokuapp.com/';
const url = 'http://localhost:5000/vaccinations';

export const fetchVaccinations = () =>  axios.get(url);