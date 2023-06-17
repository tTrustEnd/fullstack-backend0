const Customer = require('../models/cutomer')
const createCustomerService = async(customerData) => {
try {
   let customer= await Customer.create(customerData);
    return customer;
} catch (error) {
    console.log(error)
    return null
}
}
const createArrayCustomerService = async(arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result
    } catch (error) {
        console.log('error:',error)
        return null
    }
}
const getAllCustomersService = async() => {
    try {
        let customers = await Customer.find({});
        return customers
    } catch (error) {
        console.log('error', error);
        return null
    }
}
const updateCustomerService = async (id,data) => {
try {
    let result = await Customer.updateOne({_id:id},data);
    return result
} catch (error) {
    console.log('error',error);
    return null
}
}
const deleteACustomerService = async(id) => {
    try {
        let result = await Customer.deleteById(id);
        return result
    } catch (error) {
        console.log('error',error);
        return null
    }
}
const deleteArrayCustomersService = async (arr) => {
    let result =await Customer.delete({id: { $in: arr}});
    return result
    console.log(result)
}
module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomersService,updateCustomerService,
    deleteACustomerService,
    deleteArrayCustomersService
}