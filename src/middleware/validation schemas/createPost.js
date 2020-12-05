import { object, string } from '@hapi/joi';

export default object({
    img: string().min(1).max(50), // в качестве картинки ссылка на неё в интернете
    caption: string().min(1).max(50).required(),
});
