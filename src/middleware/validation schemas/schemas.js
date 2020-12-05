const registration = require('./registration').default;
const login = require('./login').default;
const post = require('./createPost').default;

module.exports = {
    registration,
    login,
    post,
    //, update user
    //, get all likes
    //, create tags
    //, add role
};
