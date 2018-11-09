const express = require('express');
const router = express.Router();
const projectDB = require('../data/helpers/projectModel');

// custom middleware 
const projectCheck = require('../config/projectCheck');

// PROJECT RELATED ROUTING ----------------------------------------------------------------------------------------------

router.get('/', (req, res) => {
    projectDB.get()
             .then(projects => res.status(200).json(projects))
             .catch(err => res.status(500).json({message: "The projects could not be retrieved"}))
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    projectDB.get(id)
        .then(project => {
            if (id) {
                res.status(200).json(project);
            } else {
                res.status(404).json({message: "The project with the specified ID does not exist."});
            }
        })
        .catch(err => res.status(500).json({message: "The project could not be retrieved"}))  
})

router.get('/:id/actions', (req, res) => {
    const {id} = req.params;
    projectDB.getProjectActions(id)
        .then(actions => {
            if (id) {
                res.status(200).json(actions);
            } else {
                res.status(404).json({message: "The project with the specified ID does not exist."});
            }
        })
        .catch(err => res.status(500).json({message: "The actions could not be retrieved"})) 
})

router.post('/', projectCheck, (req, res) => {
    const {name, description} = req.body;
    if (!name || !description) {
        res.status(400).json({message: "Please provide a name and description for the project"});
    } else {
        projectDB.insert(req.body)
              .then(project => {
                res.status(201).json(project);
              }).catch(err => {res.status(500).json({message: "There was an error saving the project to the database"})})
    }
})

router.delete('/:id', (req, res) => {
    projectDB.remove(req.params.id)
             .then(count => {
                 if (count) {
                    res.status(200).json(count)
                 } else {
                    res.status(404).json({message: "The project with the specified ID does not exist."});
                 }
             })
             .catch(err => {
                res.status(500).json({error: "The project could not be removed"});
             })
})

router.put('/:id', projectCheck, (req, res) => {
    const {name, description} = req.body;
    if (!name || !description) {
        res.status(400).json({message: "Please provide a name and description for the project"});
    } else {
        projectDB.update(req.params.id, req.body)
                .then(project => {
                    if (project) {
                        res.status(200).json(project)
                    } else {
                        res.status(404).json({message: "The project with the specified ID does not exist."});
                    }
                })
                .catch(err => {
                    res.status(500).json({error: "The project could not be removed"});
                })
    }
})

module.exports = router;