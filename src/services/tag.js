const TagRepository = require('../repositories/tag');
const tagRepository = new TagRepository();

class tagServices {

    async createTag(data) {
        return await tagRepository.createTag(data);
    }

    async getTag(data) {
        return await tagRepository.getTag(data);
    }

    async getAllTags() {
        return await tagRepository.getAllTags();
    }

    async updateTag(data) {
        return await tagRepository.updateTag(data);
    }

}

module.exports = tagServices;