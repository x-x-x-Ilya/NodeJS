const Repository = require('../repositories/RoleRepository');
const roleRepository = new Repository();

class RoleService {
    async createRole(body) {
        return await roleRepository.createRole(body);
    }

    async deleteRole(body, user) {
        return await roleRepository.deleteRole(body, user);
    }

    async updateRole(body) {
        return await roleRepository.updateRole(body);
    }

    async getRole(body, user) {
        return await roleRepository.getRole(body, user);
    }
}

module.exports = RoleService;
