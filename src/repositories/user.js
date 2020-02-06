const User = require('../database/models/user');
const Role = require('../database/models/role');
const Post = require('../database/models/post');

class UserRepository {
    //console.log(user.get({plain: true}));
    //console.log(posts.map(post => post.toJSON()));

    async createUser(body) {
        return await User.create({
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            password: body.password,
            deleteReq: false
        });
    }

    async getUser(options){
        return  User.findOne({
            where:options,
            include: [
            {
                model: Post,
                attributes: ['id', 'caption', 'img'],
                as: 'posts',
                /*include: [
                        {
                            model: Tag,
                            attributes: [ 'id', 'name' ],
                            as: 'tags',
                        }
                    ]*/
            },
            {
                model: Role,
                attributes: ['id', 'name'],
                as: 'roles'
            }
        ]});
    }

    async getAllUsers(options) {
        return User.findAll({
            attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
            where: options,
        });
    }

    async sendDeleteRequest(user) {
        await user.update({
            deleteReq: true,
        });
        return user;
    }

    async updateUser(body, user) {
        await user.update({
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            password: body.password,
            deleteReq: body.deleteReq,
        });
        return user;
    }

    async deleteUser(deleteUser) {
        deleteUser.destroy();
        return "User has been deleted successfully";
    }

    /*async getUserRoles(userId) {
        let user = await User.findOne({
            where:{userId}
        });
        let roles = [];
        await user.getRoles().map((role) => {
            roles.push(role.name);
        });
        return roles;
    }*/

}
module.exports = UserRepository;
