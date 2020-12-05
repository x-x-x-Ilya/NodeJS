const Joi = require('@hapi/joi');

module.exports = Joi.object({
    email: Joi.string().required().min(5).max(50).email(),
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(30).required(),
    password: Joi.string().required().min(4).max(20),
});
