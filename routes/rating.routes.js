const Router = require('express')
const router = new Router()
const RatingController = require('../conntrollers/rating.controller')

router.post('/rating',RatingController.createRating)
router.get('/rating',RatingController.getRating)
router.put('/rating',RatingController.updateRating)
router.delete('/rating/:id',RatingController.deleteRating)


module.exports =  router ;