const tagService = require('../services/tag');

class TagController {

    async create(req, res) {
        try {
            await tagService.prototype.createTag(req.body).then(answer);
            return res.status(200).json('Tags have been created successfully');
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async get(req, res) {
        try {
            await tagService.prototype.getTag(req.body).then(answer);
            return res.status(201).json('Tag has been tacked successfully');
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async getAll(req, res) {
        try {
            await tagService.prototype.getAllTags().then(answer);
            return res.status(201).json('Tags  have been tacked successfully');
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async update(req, res) {
        try {
            await tagService.prototype.updateTag(req.body);
            return res.status(201).json('Tags  have been deleted successfully');
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}
module.exports = TagController;
