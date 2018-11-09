const express = require('express');
const server = express();

// bringing in the routers
const actionRouter = require('../routers/actionRouter');
const projectRouter = require('../routers/projectRouter');

// configuring the middleware
const configMiddleware = require('../config/middleware');
configMiddleware(server);

server.get('/', (req, res) => {res.send({API: "live"})});

// using the routers
// server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);


module.exports = server;