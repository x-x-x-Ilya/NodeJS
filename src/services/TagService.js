const TagRepository = require('../repositories/TagRepository');
const tagRepository = new TagRepository();

class TagService {

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

module.exports = TagService;