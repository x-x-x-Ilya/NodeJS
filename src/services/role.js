const Repository = require('../repositories/role');

const roleRepository = new Repository();

class roleServices {

    async createRole(data) {
            return await roleRepository.createRole(data);
    }

    async getRole(data) {
            return await roleRepository.getRole(data);
    }

    async deleteRole(data) {
        return await roleRepository.deleteRole(data);
    }

    async updateRole(data) {
        return await roleRepository.updateRole(data);
    }

}
module.exports = roleServices;
