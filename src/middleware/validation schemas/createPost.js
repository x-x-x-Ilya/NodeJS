const Joi = require("@hapi/joi");

module.exports = Joi.object({
    img: Joi.string()
        .max(50)
        .pattern(new RegExp("^[A-Za-z0-9]{3,30}$")),   // в качестве картинки ссылка на неё в интернете
    caption: Joi.string()
        .max(50)
        .required()
        .pattern(new RegExp("^[A-Za-z0-9]{3,30}$"))
});