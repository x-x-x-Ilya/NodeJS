import TagRepository from '../repositories/TagRepository';
const tagRepository = new TagRepository();

class TagService {
    async createTag(tags, postId, user) {
        return await tagRepository.createTag(tags, postId, user);
    }
}

export default TagService;
