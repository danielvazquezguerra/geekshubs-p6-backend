const { Task } = require('../models');


const TaskController = {

    //Busqueda de todas las tareas. 
    taskFindAll(req, res) {
        Task.findAll()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.statusCode = 500;
                res.json(`"error": ${err}`);
            })
    },

    taskFindById(req, res) {

        let id = req.params;
        Task.findAll({ where: { id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.statusCode = 500;
                res.json(`"error": ${err}`);
            })
    },

    taskCreate(req, res) {

        let { nombre, descripcion, checklist } = req.body;
        Task.create({

                nombre,
                descripcion,
                checklist

            })
            .then(data => {
                res.statusCode = 201;
                res.json(data);
            })
            .catch(err => {
                res.statusCode = 500;
                res.json(`"error": ${err}`);
            })

    },

    taskUpdate(req, res) {
        let { id } = req.params;
        let { nombre, descripcion, checklist } = req.body;

        Task.update({ nombre, descripcion, checklist }, { where: { id } })
            .then(data => {
                res.body(data);
                res.statusCode = 201;
            })
            .catch(err => {
                res.statusCode = 500;
                res.json(`"error": ${err}`);
            })
    },

    taskDelete(req, res) {
        let { id } = req.params;
        Task.destroy({ where: { id } })
            .then(data => {
                res.body(data);
            })
            .catch(err => {
                res.statusCode = 500;
                res.json(`"error":${err}`);
            })
            
    }


}

module.exports = TaskController;