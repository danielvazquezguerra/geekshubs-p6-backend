const { User } = require('../models');

const userController = {

    userFindAll(req,res) {

        User.findAll()
        .then(data =>{
            res.statusCode = 201;
            res.send()
        })
    }
}