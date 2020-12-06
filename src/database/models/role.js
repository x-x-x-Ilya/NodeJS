import Sequelize from 'sequelize';
import sequelize from '../sequelize';

class Role extends Sequelize.Model {}

Role.init(
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: { type: Sequelize.STRING, allowNull: false },
    },
    {
        sequelize: sequelize,
        modelName: 'roles',
    },
);

console.log('Role =', Role === sequelize.models.roles); // true

export default Role;
