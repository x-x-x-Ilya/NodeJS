const Repository = require('../repositories/RoleRepository');
const roleRepository = new Repository();

class RoleService {

    async createRole(body/*, user*/) {
        return await roleRepository.createRole(body/*, user*/);
    }

    async deleteRole(body) {
        return await roleRepository.deleteRole(body);
    }

    async updateRole(body) {
        return await roleRepository.updateRole(body);
    }

    /*async getRole(body, user) {
        return await roleRepository.getRole(body, user);
}*/

}

module.exports = RoleService;
