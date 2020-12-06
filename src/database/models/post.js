import { INTEGER, DATE, STRING, Model } from 'sequelize';
import sequelize from '../sequelize';

class Post extends Model {}

try {
    Post.init(
        {
            id: {
                type: INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                field: 'id',
            },
            userId: {
                type: INTEGER,
                allowNull: false,
                notEmpty: true,
                field: 'user_id',
            },
            createdAt: { type: DATE, allowNull: false, field: 'created_at' },
            img: {
                type: STRING,
                allowNull: true,
                defaultAssignment: null,
                field: 'img',
            },
            caption: {
                type: STRING,
                allowNull: true,
                defaultAssignment: null,
                field: 'caption',
            },
        },
        {
            sequelize: sequelize, // We need to pass the connection instance
            modelName: 'posts', // We need to choose the model name
        },
    );

    Post.associate = models => {
        Post.belongsToMany(models.Tag, {
            foreignKey: 'postId',
            as: 'tags',
            through: 'posts_tags',
        });
        Post.hasMany(models.Like, { foreignKey: 'postId', as: 'like' });
        Post.belongsTo(models.User, { foreignKey: 'userId' });
    };
} catch (error) {
    console.log(error);
}
export default Post;
