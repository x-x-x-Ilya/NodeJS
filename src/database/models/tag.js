import Sequelize from 'sequelize';
import sequelize from '../sequelize';

class Tag extends Sequelize.Model {}

Tag.init(
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            min: 0,
            notEmpty: true,
        },
    },
    {
        sequelize: sequelize, // We need to pass the connection instance
        modelName: 'tags', // We need to choose the model name
    },
);

console.log('Tag =', Tag === sequelize.models.tags); // true

export default Tag;
