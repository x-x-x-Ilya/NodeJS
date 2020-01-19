const Role = require('../database/models/role');

class RoleRepository {

    async createRole(data) {
        return await Role.create({});
    }

    async getRole(data) {
        return await Role.findOne({});
    }

    async deleteRole(data) {
        const role = await Role.findOne({});
        await role.destroy({});
        return role;
    }

    async updateRole(data) {
        const role = await Role.findOne({});
        await role.update({});
        return role;
    }

}
module.exports = RoleRepository;
