const Joi = require("@hapi/joi");

module.exports = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .min(5)
        .max(50)
        .pattern(new RegExp(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)),
    firstName: Joi.string()
        .min(3)
        .max(20)
        .pattern(new RegExp("[a-zA-Z]"))
        .required(),
    lastName: Joi.string()
        .min(3)
        .max(30)
        .pattern(new RegExp("[a-zA-Z]"))
        .required(),
    password: Joi.string()
        .required()
        .min(4)
        .max(20)
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
});