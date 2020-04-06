const Task = require('../models');

const TaskController = {

    //Busqueda de todas las tareas. 
    taskFindAll(req,res) {
        Task.findAll()
        .then(data => {
            res.json(data);
        })
        .catch( err => {
            res.statusCode = 500;
            res.json(`"error": ${err}`);
        })
    },

    taskFindById(req,res) {

        let id = req.params;
        Task.findAll( {where: {id} })
        .then( data => {
            res.json(data);
        })
        .catch( err => {
            res.statusCode = 500;
            res.json(`"error": ${err}`);
        })
    },

    
}

module.exports = TaskController;