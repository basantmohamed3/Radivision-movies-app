const express = require('express')
const router = express.Router()
const controllers = require("../controllers/moviesControllers")
const moviesData = require("../data/movies.json")
console.log(controllers.movies)
router.get('/movies', controllers.movies)



module.exports = router