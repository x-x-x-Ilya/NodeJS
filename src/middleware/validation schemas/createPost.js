import hapi from '@hapi/joi';

export default {
    img: hapi.string().min(1).max(50), // в качестве картинки ссылка на неё в интернете
    caption: hapi.string().min(1).max(50).required(),
};
