const Joi = require("@hapi/joi");

module.exports = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().min(7).required()
});