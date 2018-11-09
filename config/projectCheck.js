module.exports = (req, res, next) => {
    const {name, description} = req.body;
    if (name && description) {
        if (typeof name !== "string" || typeof description !== "string") {
            res.send({message: 'Make sure your name and description are strings.'});
        }
        else if (name.length > 128) {
            res.send({message: 'Make sure your name is less than 128 chars.'});
        }
    } else {
        next();
    }
}