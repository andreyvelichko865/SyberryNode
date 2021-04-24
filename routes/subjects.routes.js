const Router = require('express')
const router = new Router()
const StudentController = require('../conntrollers/subjects.controller')

router.post('/subjects',StudentController.createSubject)
router.get('/subjects',StudentController.getSubjects)
router.put('/subjects',StudentController.updateSubjects)
router.delete('/subjects/:id',StudentController.deleteSubjects)


module.exports =  router ;