const Router = require('express')
const router = new Router()
const ActivityController = require('../conntrollers/activity.controller')

router.post('/activity',ActivityController.createStudentActivity)
router.get('/activity',ActivityController.getStudentActivity)
router.put('/activity',ActivityController.updateActivity)
router.delete('/activity/:id',ActivityController.deleteStudentActivity)


module.exports =  router ;