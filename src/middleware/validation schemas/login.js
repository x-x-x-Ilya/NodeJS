import hapi from '@hapi/joi';

export default hapi.object({
    username: hapi.string().email().required(),
    password: hapi.string().min(3).max(20).required(),
});
