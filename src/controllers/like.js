let likeService = require("../services/like");

class LikeController {

    create(req, res) {
        // res.send(req.params);     // req.body === {};
        try {
            let like = likeService.create(req.body);   // req.body == NULL;
            return  res.status(201).json(/*like,*/ "Like Create Successfully", 201, "success");
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    delete (req, res){
        try {
            let answer = likeService.delete(req.body);
            return  res.status(201).json(/*answer,*/ "Like Delete Successfully", 201, "success");
        }catch (error) {
            return res.status(error.status).json(error);
        }
    }

}

module.exports = LikeController;