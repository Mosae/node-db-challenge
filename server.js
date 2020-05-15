const express = require('express');
const helmet = require('helmet');

//const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

//server.use('/api/projects', ProjectsRouter);

server.get('/', (req, res) => {
	res.send('Server success');
});
module.exports = server;
