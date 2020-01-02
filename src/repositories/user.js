const User = require("../database/models/user");
const Role = require("../database/models/role");

class UserRepository  {

    async createUser(email, first_name, last_name, password){
        //console.log(email);   ++
        try {
            await User.create({
                email: email,
                first_name: first_name,
                last_name: last_name,
                password: password,
                delete_req: false
            });
            console.log("User has been create successfully")
        } catch (e) {
            if (e) throw e;
            throw new console.log("undefined error Something wrong");
        }
    };

    async getUser(data) {
        if(data.field.toString() === "id") {
            return await User.findOne({
                id: data.id
            });
        }

        else if(data.field.toString() === "e-mail"){
            return await User.findOne({
                email: data.email
            });
        }


        else return "error";
    }

     getAllUsers() {
        return  User.findAll({
                model: Role,
                attributes: ["name"]
        });
    }

    async deleteUser(data) {
         if(await UserRepository.getUser(data) === User) {
             User.destroy({
                 id: data.id
             });
            return await "user have been deleted";
         }
         else return await "err";
    }

    async updateUser(data) {
        if(await UserRepository.getUser(data) === User)
        return await User.update({
            email: data.email,              // если поля нет то оставить значение которое было
            first_name: data.first_name,
            last_name: data.last_name,
            password: data.password
        });
        else return await "err";
    }

}

module.exports = UserRepository;