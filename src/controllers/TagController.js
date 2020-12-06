import TagService from '../services/TagService';
const tagService = new TagService();

class TagController {
    async create(req, res) {
        try {
            return await res
                .status(200)
                .json(
                    await tagService.createTag(
                        req.body.tags,
                        req.body.postId,
                        req.user,
                    ),
                );
        } catch (error) {
            return await res.status(404).json(error);
        }
    }
}

export default TagController;
