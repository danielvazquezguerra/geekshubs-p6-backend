const { User } = require('../models');

const userController = {

    userFindAll(req,res) {

        User.findAll()
        .then(data =>{
            res.statusCode = 201;
            res.json(data);
        })
        .catch(err =>{
            res.statusCode = 500;
            res.json(`error: ${err}`);
        })
    },

    userFindById(req,res) {

        let { id } = req.params;
        User.findAll( {where: { id }} )
        .then(data => {
            res.statusCode = 201;
            res.json(data);
        })
        .catch( err => {
            res.statusCode = 500;
            res.json(`error: ${err}`);
        })
    },

    userFindByName(req,res) {
        let { name } = req.params;
        User.findAll( {where: { firstname: name }})
        .then(data => {
            res.statusCode = 201;
            res.json(data);
        })
        .catch(err => {
            res.statusCode = 500;
            res.json(`error: ${err}`);
        })
    },

    userCreate(req,res) {
        let {

            firstname,
            lastname,
            email,
            password,
            tareas,
            tableros

        } = req.body;

        User.create({

            firstname,
            lastname,
            email,
            password,
            tareas,
            tableros

        })
        .then(data => {
            res.statusCode = 201;
            res.json(data);
        })
        .catch(err => {
            res.statusCode = 500;
            res.json(`error: ${err}`);
        })
    }, 

    userUpdate(req,res) {
        let { id } = req.params;
        let {
            firstname,
            lastname,
            email,
            password,
            tareas,
            tableros
        } = req.body;

        User.update({
            firstname,
            lastname,
            email,
            password,
            tareas,
            tableros
        }, 
        { where: { id }} )
        .then(data => {
            res.statusCode = 201;
            res.json(data);
        })
        .catch(err =>{
            res.statusCode = 500;
            res.json(`"error": ${err}`);
        })
    },

    userDelete(req,res) {
        let { id } = req.params;
        User.destroy( {where: { id }})
        .then(data =>{
            res.statusCode = 201;
            res.json(data);
        })
    }

    
}

module.exports = userController;