const express = require('express');
const server = express();

// bringing in the routers
const projectRouter = require('../routers/projectRouter');
const actionRouter = require('../routers/actionRouter');

// configuring the middleware
const configMiddleware = require('../config/middleware');
configMiddleware(server);

// added API status at root
server.get('/', (req, res) => {res.send({API: "live"})});

// using the routers
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server;