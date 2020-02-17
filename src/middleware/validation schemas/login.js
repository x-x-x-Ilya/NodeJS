const Joi = require("@hapi/joi");

module.exports = Joi.object({
    email: Joi.string()
        .min(5)
        .max(50)
        .required()
        .pattern(new RegExp(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)),
    password: Joi.string()
        .min(3)
        .max(20)
        .required()
        .pattern(new RegExp("^[A-Za-z0-9]{3,30}$"))
});