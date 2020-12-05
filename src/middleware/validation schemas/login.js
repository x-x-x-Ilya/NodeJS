import { object, string } from '@hapi/joi';

export default object({
    username: string().email().required(),
    password: string().min(3).max(20).required(),
});
