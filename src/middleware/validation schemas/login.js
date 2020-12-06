import joi from '@hapi/joi';

export default joi.object({
    username: joi.string(),
    password: joi.string().required(),
});
