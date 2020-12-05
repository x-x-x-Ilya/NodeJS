import TagRepository from '../repositories/TagRepository';
const tagRepository = new TagRepository();

class TagService {
    async createTag(tags, postId) {
        return await tagRepository.createTag(tags, postId, user);
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

export default TagService;
