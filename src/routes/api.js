const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI,putUpdateUserAPI,DeleteUserAPI,
    uploadSingleFileAPI,uploadMultiFileAPI} = require('../controllers/apiController')
routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data:'hello firt api'
    })
})

const {postCustomerAPI, postArrayCustomerAPI,
     getAllCustomersAPI, updateCustomersAPI,deleteACustomersAPI,
     deleteArrCustomersAPI
    }= require('../controllers/customerController')
const {postCreateProject, getProjects, deleleProjects, updateProjects} = require('../controllers/projectsController')

const {postCreateTasks,getCreateTasks,updateCreateTasks,deleteCreateTasks} = require('../controllers/tasksController')

routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', DeleteUserAPI)

routerAPI.post('/file', uploadSingleFileAPI)
routerAPI.post('/files', uploadMultiFileAPI)

routerAPI.post('/customers', postCustomerAPI)
routerAPI.post('/customers-many', postArrayCustomerAPI)
routerAPI.get('/customers', getAllCustomersAPI)
routerAPI.put('/customers', updateCustomersAPI)
routerAPI.delete('/customers', deleteACustomersAPI)
routerAPI.delete('/customers-many', deleteArrCustomersAPI)

routerAPI.post('/projects', postCreateProject)
routerAPI.get('/projects', getProjects)
routerAPI.delete('/projects', deleleProjects)
routerAPI.put('/projects', updateProjects)

routerAPI.post('/tasks', postCreateTasks)
routerAPI.get('/tasks', getCreateTasks)
routerAPI.put('/tasks', updateCreateTasks)
routerAPI.delete('/tasks', deleteCreateTasks)


routerAPI.get('/info', (req, res) =>{
    console.log(req.query)
    return res.status(200).json({
        data:req.query
    })
})



module.exports = routerAPI;