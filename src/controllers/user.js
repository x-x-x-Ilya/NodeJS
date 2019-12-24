let userService = require("../services/user");

class UserController {

     create(req, res) {
        try {
            const user =  userService.createUser({
                email:     req.body.email,
                firstName: req.body.firstName,
                lastName:  req.body.lastName,
                password:  req.body.password
            });
            // не отдавать пароль назад
            return  res//.status(201)
                .json("User Create Successfully"
                    /*user, "User Create Successfully", 201, "success"*/
                );
        } catch (error) {
            return  res.status(error.status).json(error);
        }
    }
}
module.exports = UserController;

