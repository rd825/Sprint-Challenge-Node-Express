const express = require('express');
const router = express.Router();
const actionDB = require('../data/helpers/actionModel');

// custom middleware
const projectCheck = require('../config/projectCheck');

// ACTION RELATED ROUTING ----------------------------------------------------------------------------------------------

router.get('/', (req, res) => {
    actionDB.get()
             .then(actions => res.status(200).json(actions))
             .catch(err => res.status(500).json({message: "The actions could not be retrieved"}))
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    actionDB.get(id)
        .then(action => {
            if (id) {
                res.status(200).json(action);
            } else {
                res.status(404).json({message: "The action with the specified ID does not exist."});
            }
        })
        .catch(err => res.status(500).json({message: "The action could not be retrieved"}))  
})

router.post('/', (req, res) => {
    const {project_id, description, notes} = req.body;
    if (!project_id || !description || !notes) {
        res.status(400).json({message: "Please provide a project id, description, and notes for the action"});
    } else {
        actionDB.insert(req.body)
              .then(action => {
                res.status(201).json(action);
              }).catch(err => {res.status(500).json({message: "There was an error saving the action to the database"})})
    }
})

router.delete('/:id', (req, res) => {
    actionDB.remove(req.params.id)
             .then(count => {
                 if (count) {
                    res.status(200).json(count)
                 } else {
                    res.status(404).json({message: "The action with the specified ID does not exist."});
                 }
             })
             .catch(err => {
                res.status(500).json({error: "The action could not be removed"});
             })
})

router.put('/:id', (req, res) => {
    const {project_id, description, notes} = req.body;
    if (!project_id || !description || !notes) {
        res.status(400).json({message: "Please provide a project id, description, and notes for the action"});
    } else {
        actionDB.update(req.params.id, req.body)
                .then(action => {
                    if (action) {
                        res.status(200).json(action)
                    } else {
                        res.status(404).json({message: "The action with the specified ID does not exist."});
                    }
                })
                .catch(err => {
                    res.status(500).json({error: "The action could not be removed"});
                })
    }
})

module.exports = router;