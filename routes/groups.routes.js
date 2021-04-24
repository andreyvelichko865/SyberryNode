const Router = require('express')
const router = new Router()
const GroupsController = require('../conntrollers/groups.controller')

router.post('/group',GroupsController.createGroup)
router.get('/groups',GroupsController.getGroups)
router.put('/group',GroupsController.updateGroup)
router.delete('/group/:id',GroupsController.deleteGroup)


module.exports =  router ;