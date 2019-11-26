// const likes = require('./tables/likes');
// const users = require('./tables/users');
// const posts = require('./tables/posts');
// const roles = require('./tables/roles');
// const users_roles = require('./tables/users_roles');
// const posts_tags = require('./tables/posts_tags');
// const tags = require('./tables/tags');
//
// users.associate = (models) => {
//     users.hasMany(likes);
// }
//
//
// users.hasMany(posts);
// users.belongsToMany(roles, {through: users_roles});
// roles.belongsToMany(users,   {through: users_roles});
//
// posts.hasMany(likes);
// posts.belongsToMany(tags, {through: posts_tags});
// tags.belongsToMany(posts, {through: posts_tags});
