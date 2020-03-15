const Joi = require("@hapi/joi");

module.exports = Joi.object({
    email: Joi.string().required().email(),
    firstName: Joi.string().min(1).max(20).required(),
    lastName: Joi.string().min(1).max(20).required(),
    password: Joi.string().min(7).required()
});