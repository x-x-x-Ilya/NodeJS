import { findOne, create } from '../database/models/role';
import { findOne as _findOne } from '../database/models/user';

class RoleRepository {
    async createRole(body) {
        let role = await findOne({
            where: {
                name: body.roleName,
            },
        });

        if (!role)
            role = await create({
                name: body.roleName,
            });
        const user = await _findOne({ where: { id: body.id } });
        await user.addRole(role);
        return 'role added successfully';
    }

    async deleteRole(body, user) {
        if (body.id === user.id && body.roleName === 'Admin')
            return 'you cant delete your admin role';

        const deleteRoleUser = await _findOne({ where: { id: body.id } });
        const role = await findOne({ where: { name: body.roleName } });
        await deleteRoleUser.removeRole(role);
        return 'role deleted successfully';
    }

    async updateRole(body) {
        const role = await findOne({
            where: {
                name: body.oldRoleName,
            },
        });
        await role.update({
            name: body.newRoleName,
        });
        return role;
    }

    /*async getRole(body, user) {
            return await Role.findOne({});
        }
*/
}

export default RoleRepository;
