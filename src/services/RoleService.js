import Repository from '../repositories/RoleRepository';
const roleRepository = new Repository();

class RoleService {
    async createRole(body) {
        return await roleRepository.createRole(body);
    }
    async getRole(body, user) {
        return await roleRepository.getRole(body, user);
    }
}

export default RoleService;
