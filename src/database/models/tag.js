import { INTEGER, STRING, Model } from 'sequelize';
import sequelize from '../sequelize';

class Tag extends Model {}
try {
    Tag.init(
        {
            id: {
                type: INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: { type: STRING, allowNull: false, min: 0, notEmpty: true },
        },
        {
            sequelize: sequelize, // We need to pass the connection instance
            modelName: 'tags', // We need to choose the model name
        },
    );

    Tag.associate = models => {
        Tag.belongsToMany(models.Post, {
            foreignKey: 'tagId',
            as: 'posts',
            through: 'posts_tags',
        });
    };
} catch (error) {
    console.log(error);
}
export default Tag;
