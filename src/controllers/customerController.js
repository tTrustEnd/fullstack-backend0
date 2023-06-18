const { uploadSingleFile } = require('../services/fileService')
const Customer = require('../models/customer')

const { createCustomerService, createArrayCustomerService,
    getAllCustomersService, updateCustomerService,
    deleteACustomerService, deleteArrayCustomersService } = require('../services/customerService')
module.exports = {
    postCustomerAPI: async (req, res) => {
        let { name, address, phone, email, image, description } = req.body;

        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        }
        else {
            let result = await uploadSingleFile(req.files.image);
            urlImage = result.path;
        }
        let customerData = {
            name, address, phone, email, image, description, image: urlImage
        }

        let customer = await createCustomerService(customerData)
        return res.status(201).json({
            EC: 0,
            data: customer
        })
    },
    postArrayCustomerAPI: async (req, res) => {
        let customer = await createArrayCustomerService(req.body.customers)
        if (customer) {
            res.status(200).json({
                EC: 0,
                data: customer
            })
        }
        else {
            return res.status(200).json({
                EC: -1,
                data: customer
            })
        }
    },
    getAllCustomersAPI: async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;
        let name = req.query.name;
        let result = [];
        if (limit && page) {
            result = await getAllCustomersService(limit, page,name,req.query);
        }
        else
            result = await getAllCustomersService()
        return res.status(200).json({
            EC: 0,
            data: result
        })
        res.send('get customer')
    },
    updateCustomersAPI: async (req, res) => {
        let { id, name, email, address } = req.body;
        let dataupdate = {
            name,
            email,
            address
        }
        let result = await updateCustomerService(id, dataupdate)
        console.log(result)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteACustomersAPI: async (req, res) => {
        let result = await deleteACustomerService(req.body.id)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteArrCustomersAPI: async (req, res) => {
        console.log(req.body.Customersid)
        let result = await deleteArrayCustomersService(req.body.Customersid)
        return res.status(200).json({
            EC: 0,
            data: result
        })

    }
}