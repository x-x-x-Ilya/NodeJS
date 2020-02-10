const Role = require('../database/models/role');
const User = require('../database/models/user');

class RoleRepository {

    async createRole(body/*, user*/) {
        let role = await Role.findOne({
            where: {
                name: body.roleName
            }
        });

        if (!role)
            role = await Role.create({
                name: body.roleName
            });
        let user = User.findOne({where: {id: body.id}});
        await user.addRole(role);
        return 'role added successfully';
    }

    async deleteRole(body) {
        const role = await Role.findOne({where: {name: body.roleName}});
        //await role.destroy({}); !!!
        return 'role deleted successfully';
    }

    async updateRole(body) {
        const role = await Role.findOne({
            where: {
                name: body.oldRoleName
            }
        });
        await role.update({
            name: body.newRoleName
        });
        return role;
    }

    /*async getRole(body, user) {
            return await Role.findOne({});
        }*/

}

module.exports = RoleRepository;
