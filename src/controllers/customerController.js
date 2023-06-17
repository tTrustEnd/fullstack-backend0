const { uploadSingleFile } = require('../services/fileService')
const Customer = require('../models/cutomer')
const { createCustomerService,createArrayCustomerService } = require('../services/customerService')
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
        if(customer){
            res.status(200).json({
                EC:0,
                data:customer
            })
        }
      else{
        return res.status(200).json({
            EC:-1,
            data:customer
        })
      }
    }
}