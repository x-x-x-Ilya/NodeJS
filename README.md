# Instagram backend

# Setup && Install
* MySQL
* npm
* NodeJS

## Allowed methods
* ***get*** host/
* ***post*** host/like/create
* ***delete*** host/like/create
* ***post*** host/post/create
* ***get*** host/post/get
* ***delete*** host/post/delete
* ***put*** host/post/update
* ***get*** host/post/getAll
* ***post*** host/tag/create
* ***post*** host/role/create
* ***get*** host/role/get
* ***post*** host/passport/login
* ***post*** host/passport/register
* ***post*** host/passport/logout

## Clone or download
https://github.com/x-x-x-Ilya/NodeJS.git

## Description 
Backend for instagram using NodeJS.

## Code-structure

* [app.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/app.js)
* [server.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/server.js)
* [controllers](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/controllers)
   * [LikeController.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/controllers/LikeController.js)
   * [PassportController.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/controllers/PassportController.js)
   * [PostController.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/controllers/PostController.js)
   * [RoleController.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/controllers/RoleController.js)
   * [TagController.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/controllers/TagController.js)
   * [UserController.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/controllers/UserController.js)
* [database](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/database)
   * [database.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/database.js)
   * [sequelize.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/sequelize.js)
   * [models](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/database/models)
      * [like.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/models/like.js)
      * [post.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/models/post.js)
      * [post_tag.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/models/post_tag.js)
      * [role.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/models/role.js)
      * [sync.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/models/sync.js)
      * [tag.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/models/tag.js)
      * [user.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/models/user.js)
      * [user_role.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/models/user_role.js)
   * [sql](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/database/sql)
      * [insert.sql](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/sql/insert.sql)
      * [mysql.sql](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/sql/mysql.sql)
      * [scheme.png](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/database/sql/scheme.png)
* [loaders](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/loaders)
   * [index.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/loaders/index.js)
   * [parsers.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/loaders/parsers.js)
   * [passport.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/loaders/passport.js)
* [middleware](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/middleware)
   * [AutoDeletingPosts.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/AutoDeletingPosts.js)
   * [error-handler.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/error-handler.js)
   * [isAdmin.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/isAdmin.js)
   * [isAuthenticated.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/isAuthenticated.js)
   * [isNotAuthenticated.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/isNotAuthenticated.js)
   * [joi.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/joi.js)
   * [passport-middleware.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/passport-middleware.js)
   * [validation schemas](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/middleware/validation%20schemas)
       * [createPost.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/validation%20schemas/createPost.js)
       * [login.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/validation%20schemas/login.js)
       * [registration.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/validation%20schemas/registration.js)
       * [schemas.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/validation%20schemas/schemas.js)
       * [updatePost.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/middleware/validation%20schemas/updatePost.js)
* [repositories](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/repositories)
  * [LikeRepository.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/repositories/LikeRepository.js)
  * [PostRepository.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/repositories/PostRepository.js)
  * [RoleRepository.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/repositories/RoleRepository.js)
  * [TagRepository.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/repositories/TagRepository.js)
  * [UserRepository.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/repositories/UserRepository.js)
* [routes](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/routes)
  * [index.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/routes/index.js)
  * [like.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/routes/like.js)
  * [passport.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/routes/passport.js)
  * [post.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/routes/post.js)
  * [role.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/routes/role.js)
  * [tag.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/routes/tag.js)
  * [user.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/routes/user.js)
* [services](https://github.com/x-x-x-Ilya/NodeJS/tree/master/src/services)
  * [LikeService.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/services/LikeService.js)
  * [PostService.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/services/PostService.js)
  * [RoleService.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/services/RoleService.js)
  * [TagService.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/services/TagService.js)
  * [UserService.js](https://github.com/x-x-x-Ilya/NodeJS/blob/master/src/services/UserService.js)

## Author
* **Ilya Rypinski** - *Initial work* - [x-x-x-Ilya](https://github.com/x-x-x-Ilya)
