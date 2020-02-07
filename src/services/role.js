const Repository = require('../repositories/role');
const roleRepository = new Repository();

class roleServices {

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

module.exports = roleServices;
