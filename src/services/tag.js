const TagRepository = require('../repositories/tag');

const tagRepository = new TagRepository();

class tagServices {

    async createTag(data) {
            await tagRepository.createTag(data).then(answer);
            return answer;
    }


    async getTag(data) {
            await tagRepository.getTag(data).then(answer);
            return answer;
    }

    async getAllTags() {
            await tagRepository.getAllTags().then(answer);
            return answer;
    }

    async updateTag(data) {
            await tagRepository.updateTag(data).then(answer);
            return answer;
    }


}
module.exports = tagServices;
