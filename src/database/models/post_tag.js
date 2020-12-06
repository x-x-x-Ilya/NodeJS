import Sequelize from 'sequelize';
import sequelize from '../sequelize';

class PostTag extends Sequelize.Model {}

try {
    PostTag.init(
        {
            postId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                field: 'post_id',
            },
            tagId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                field: 'tag_id',
            },
        },
        {
            sequelize: sequelize, // We need to pass the connection instance
            modelName: 'posts_tags', // We need to choose the model name
        },
    );
} catch (error) {
    console.log(error);
}

export default PostTag;
