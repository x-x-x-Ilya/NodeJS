const TagRepository = require('../repositories/tag');

const tagRepository = new TagRepository();

class tagServices {

    async createTag(data) {
        try {
            await tagRepository.createTag(data).then(answer);
            return answer;
        } catch (e) {
            console.log('Services error', e);
            return 404;
        }
    }


    async getTag(data) {
        try {
            await tagRepository.getTag(data).then(answer);
            return answer;
        } catch (e) {
            console.log('Services error', e);
            return 404;
        }
    }

    async getAllTags() {
        try {
            await tagRepository.getAllTags().then(answer);
            return answer;
        } catch (e) {
            console.log('Services error', e);
        }
    }

    async updateTag(data) {
        try {
            await tagRepository.updateTag(data).then(answer);
            return answer;
        } catch (e) {
            throw new console.log('Services error', e);
        }
    }


}
module.exports = tagServices;
