const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI,putUpdateUserAPI,DeleteUserAPI,
    uploadSingleFileAPI,uploadMultiFileAPI} = require('../controllers/apiController')
routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data:'hello firt api'
    })
})

const {postCustomerAPI, postArrayCustomerAPI} = require('../controllers/customerController')
routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', DeleteUserAPI)

routerAPI.post('/file', uploadSingleFileAPI)
routerAPI.post('/files', uploadMultiFileAPI)

routerAPI.post('/customers', postCustomerAPI)
routerAPI.post('/customers-many', postArrayCustomerAPI)




module.exports = routerAPI;