//since we don't have a database we'll use our front end models at the moment
const express = require('express');
const filmsRouter = new express.Router()
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');
const getFilms = require('../client/src/models/films');
const films = getFilms();



module.exports = filmsRouter;
