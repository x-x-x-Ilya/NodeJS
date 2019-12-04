var repository = require(`./src/bin`);

class PostServices {
    post_repository =  new repository();

    async create(post) {
        return await this.post_repository.create(post);
    }

}
