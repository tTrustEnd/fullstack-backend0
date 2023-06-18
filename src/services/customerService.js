const Customer = require('../models/cutomer')
const aqp = require('api-query-params');

const createCustomerService = async (customerData) => {
    try {
        let customer = await Customer.create(customerData);
        return customer;
    } catch (error) {
        console.log(error)
        return null
    }
}
const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result
    } catch (error) {
        console.log('error:', error)
        return null
    }
}
const getAllCustomersService = async (limit, page, name, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;
            console.log('>>> filter:', filter)
            result = await Customer.find(filter).skip(offset).limit(limit).exec();
        }
        else {
            result = await Customer.find({});
        }
        return result
    } catch (error) {
        console.log('error', error);
        return null
    }
}
const updateCustomerService = async (id, data) => {
    try {
        let result = await Customer.updateOne({ _id: id }, data);
        return result
    } catch (error) {
        console.log('error', error);
        return null
    }
}
const deleteACustomerService = async (id) => {
    try {
        let result = await Customer.deleteById(id);
        return result
    } catch (error) {
        console.log('error', error);
        return null
    }
}
const deleteArrayCustomersService = async (arr) => {
    let result = await Customer.delete({ id: { $in: arr } });
    return result
    console.log(result)
}
module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomersService, updateCustomerService,
    deleteACustomerService,
    deleteArrayCustomersService
}