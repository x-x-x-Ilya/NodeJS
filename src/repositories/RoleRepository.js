const Role = require('../database/models/role');
const User = require('../database/models/user');

class RoleRepository {

    async createRole(body) {
        let role = await Role.findOne({
            where: {
                name: body.roleName
            }
        });

        if (!role)
            role = await Role.create({
                name: body.roleName
            });
        const user = await User.findOne({where: {id: body.id}});
        await user.addRole(role);
        return 'role added successfully';
    }

    async deleteRole(body, user) {

        if(body.id === user.id && body.roleName === "Admin")
            return 'you cant delete your admin role';

        const deleteRoleUser = await User.findOne({where: {id: body.id}});
        const role = await Role.findOne({where: {name: body.roleName}});
        await deleteRoleUser.removeRole(role);
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
        }
*/
}

module.exports = RoleRepository;
