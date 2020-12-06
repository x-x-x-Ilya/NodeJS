# Instagram backend

## Clone or download
https://github.com/x-x-x-Ilya/NodeJS.git

## Description 
Backend for instagram using NodeJS.

## Code
|   app.js
|   server.js
|
+---controllers
|       LikeController.js
|       PassportController.js
|       PostController.js
|       RoleController.js
|       TagController.js
|       UserController.js
|
+---database
|   |   database.js
|   |   sequelize.js
|   |
|   +---models
|   |       like.js
|   |       post.js
|   |       post_tag.js
|   |       role.js
|   |       sync.js
|   |       tag.js
|   |       user.js
|   |       user_role.js
|   |
|   \---sql
|           insert.sql
|           mysql.sql
|           scheme.png
|
+---loaders
|       index.js
|       parsers.js
|       passport.js
|
+---middleware
|   |   AutoDeletingPosts.js
|   |   error-handler.js
|   |   isAdmin.js
|   |   isAuthenticated.js
|   |   isNotAuthenticated.js
|   |   joi.js
|   |   passport-middleware.js
|   |
|   \---validation schemas
|           createPost.js
|           login.js
|           registration.js
|           schemas.js
|           updatePost.js
|
+---repositories
|       LikeRepository.js
|       PostRepository.js
|       RoleRepository.js
|       TagRepository.js
|       UserRepository.js
|
+---routes
|       index.js
|       like.js
|       passport.js
|       post.js
|       role.js
|       tag.js
|       user.js
|
\---services
        LikeService.js
        PostService.js
        RoleService.js
        TagService.js
        UserService.js

## Author
* **Ilya Rypinski** - *Initial work* - [x-x-x-Ilya](https://github.com/x-x-x-Ilya)
