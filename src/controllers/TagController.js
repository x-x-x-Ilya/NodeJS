import TagService from '../services/TagService';
const tagService = new TagService();

class TagController {
    async create(req, res) {
        try {
            return res
                .status(200)
                .json(
                    await tagService.createTag(
                        req.body.tags,
                        req.body.postId,
                        req.user,
                    ),
                );
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async get(req, res) {
        try {
            return res.status(201).json(await tagService.getTag(req.body));
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async getAll(req, res) {
        try {
            return res.status(201).json(await tagService.getAllTags());
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async update(req, res) {
        try {
            return res.status(201).json(await tagService.updateTag(req.body));
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}

export default TagController;
