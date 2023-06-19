const Joi = require('joi');
const validateCustomer = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    description: Joi.string().max(50),
    phone: Joi.string().pattern(new RegExp('^[0-9]{8,11}$')),
    address: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
const validateProject = {
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    description: Joi.string().max(50),
}
module.exports = {
    validateCustomer,validateProject
}
