import hapi from '@hapi/joi';

export default hapi.object({
    email: hapi.string().required().email(),
    firstName: hapi.string().min(3).max(20).required(),
    lastName: hapi.string().min(3).max(30).required(),
    password: hapi.string().required().min(4).max(20),
});
