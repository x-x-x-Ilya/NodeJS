import User from './user';
import Post from './post';
import Like from './like';
import Role from './role';
import Tag from './tag';
import PostTag from './post_tag';
import UserRole from './user_role';

const db = {
    User,
    Post,
    Like,
    Role,
    Tag,
    PostTag,
    UserRole,
};

export function init() {
    Object.keys(db).forEach(modelName => {
        db[modelName].associate && db[modelName].associate(db);
    });
}
