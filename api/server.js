const express = require('express');
const server = express();

const configMiddleware = require('../config/middleware');
configMiddleware(server);

server.get('/', (req, res) => {res.send({API: "live"})});



module.exports = server;