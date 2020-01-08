const tagService = require('../services/tag');

let answer;
class TagController {

    async create(req, res) {

        try {
            await tagService.prototype.createTag(req.body).then(answer);  // user_id && created_at == ?
            return res.status(answer);
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    async get(req, res) {

        try {
            await tagService.prototype.getTag(req.body).then(answer);
            res.json(answer, 201, 'success');
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    async getAll(req, res) {

        try {
            await tagService.prototype.getAllTags().then(answer);
            return answer;
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    async update(req, res) {

        try {
            await tagService.prototype.updateTag(req.body);
            return res.status(201).json('User Delete Successfully', 201, 'success');
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }
}
module.exports = TagController;
