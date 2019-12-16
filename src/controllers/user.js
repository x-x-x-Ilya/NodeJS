var userService = require("../services/user");

class UserController {

    async create(req, res) {
        try {
            const user = await userService.createUser({
                login:     req.body.username,
                firstName: req.body.firstName,
                lastName:  req.body.lastName,
                password:  req.body.password
            });
            // не отдавать пароль назад
            return res.status(201)
                .json(
                    user, "User Create Successfully", 201, "success"
                );
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    async list(req, res) {
        try {
            let users = await userService.getAllUser();

            return res.status(200)
                .json(
                    ResponseFormat.build(users, "User Information Reterive successfully", 200, "success")
            );
        } catch(error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let user = userService.getUser(req.body.userId);

            return res.status(200).json(
                ResponseFormat.build(
                    user,
                    "User information reterieve successfully",
                    200,
                    "success"
                )
            )
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy (req, res) {
        try {
            await userService.deleteUser(req.params.userId);
            return res.status(200).json(
                ResponseFormat.build(
                    {},
                    "user deleted successfully",
                    200,
                    "success"
                )
            )
        } catch (error) {
            res.status(error.status).json(error)
        }
    }


}
module.exports = UserController;

