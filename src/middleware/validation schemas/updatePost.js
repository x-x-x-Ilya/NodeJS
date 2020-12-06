import joi from '@hapi/joi';

export default joi.object({
    id: joi.number().required(),
    img: joi.string().optional(),
    caption: joi.string().optional(),
    tags: joi.array().optional(),
});
