import Role from '../database/models/role';
import User from '../database/models/user';

class RoleRepository {
    async createRole(body) {
        let role = await Role.findOne({
            where: {
                name: body.roleName,
            },
        });

        if (!role)
            role = await Role.create({
                name: body.roleName,
            });
        const user = await User.findOne({ where: { id: body.id } });
        await user.addRole(role);
        return 'role added successfully';
    }

    async getRole(body, user) {
        return await User.findOne({
            where: body,
            include: [
                {
                    model: Role,
                    attributes: ['name'],
                    as: 'roles',
                },
            ],
        });
    }
}

export default RoleRepository;
