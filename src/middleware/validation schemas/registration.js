import { object, string } from '@hapi/joi';

export default object({
    email: string().required().min(5).max(50).email(),
    firstName: string().min(3).max(20).required(),
    lastName: string().min(3).max(30).required(),
    password: string().required().min(4).max(20),
});
