const Router = require('express')
const router = new Router()
const StudentController = require('../conntrollers/students.controller')

router.post('/student',StudentController.createStudent)
router.get('/student',StudentController.getStudents)
router.get('/student/:id',StudentController.getOneStudent)
router.put('/student',StudentController.updateStudent)
router.delete('/student/:id',StudentController.deleteStudent)


module.exports =  router ;