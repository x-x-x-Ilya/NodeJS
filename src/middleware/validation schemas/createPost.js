const Joi = require("@hapi/joi");

module.exports = Joi.object({
        img: Joi.string().required(),
        caption: Joi.string(),
        tags: Joi.array().items(Joi.string())
    });