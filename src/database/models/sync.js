import sequelize from '../sequelize';
import User from './user';
import Post from './post';
import PostTag from './post_tag';
import Like from './like';
import Role from './role';
import UserRole from './user_role';
import Tag from './tag';

export default function sync() {
    try {
        sequelize.sync();
        User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
        User.hasMany(Like, { foreignKey: 'userId', as: 'likes' });
        User.belongsToMany(Role, { through: UserRole });

        Post.belongsToMany(Tag, { through: PostTag });
        Post.hasMany(Like, { foreignKey: 'postId', as: 'likes' });
        Post.belongsTo(User, { foreignKey: 'userId' });

        Like.belongsTo(Post, { foreignKey: 'postId' });
        Like.belongsTo(User, { foreignKey: 'userId' });

        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.log(error);
    }
}
