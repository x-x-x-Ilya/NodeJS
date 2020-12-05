const Joi = require('@hapi/joi');

module.exports = Joi.object({
    img: Joi.string().min(1).max(50), // в качестве картинки ссылка на неё в интернете
    caption: Joi.string().min(1).max(50).required(),
});
