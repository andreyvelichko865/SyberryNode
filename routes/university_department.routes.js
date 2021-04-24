const Router = require('express')
const router = new Router()
const universityDepartmentController = require('../conntrollers/university_department.controller')

router.post('/universityDepartment',universityDepartmentController.createUniversityDepartment)
router.get('/universityDepartment',universityDepartmentController.getUniversityDepartment)
router.put('/universityDepartment',universityDepartmentController.updateUniversityDepartment)
router.delete('/universityDepartment/:id',universityDepartmentController.deleteUniversityDepartment)


module.exports =  router ;