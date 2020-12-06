import joi from '@hapi/joi';

export default joi.object({
    img: joi.string(), // в качестве картинки ссылка на неё в интернете
    caption: joi.string().required(),
    tags: joi.array().optional(),
});
