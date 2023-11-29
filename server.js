const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 3000;
const apiKey = process.env.API_KEY;
const comedyId = 35;

axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${comedyId}`)
.then((response) => {
    console.log(response.data.results);
}).catch((err) => {
    console.error("Erro:", err)
});