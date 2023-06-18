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
const {postCreateProject, getProjects} = require('../controllers/projectsController')

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


routerAPI.get('/info', (req, res) =>{
    console.log(req.query)
    return res.status(200).json({
        data:req.query
    })
})



module.exports = routerAPI;