import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'c0151d4854msh4ee1ca37ba28a6fp1410a6jsnb6ffde0f62ce',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

export default axios.request(options).then(function (response) {
	return response.data;
}).catch(function (error) {
	console.error(error);
});