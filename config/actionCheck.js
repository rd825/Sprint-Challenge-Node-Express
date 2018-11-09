module.exports = (req, res, next) => { 
    const {project_id, description, notes} = req.body;
    if (project_id && description && notes) {
        if (typeof project_id !== "number" || typeof description !== "string" || typeof notes !== "string") {
            res.send({message: 'Make sure your project_id is a number and description and notes are strings.'});
        }
        else if (description.length > 128) {
            res.send({message: 'Make sure your description is less than 128 chars.'});
            next();
        }
        else {
            next();
        }
    } else {
        next();
    }
}
