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
module.exports = {
    createCustomerService,
    createArrayCustomerService
}