const express = require('express');
const Project = require('./projects-model.js');

const router = express.Router();

//Get all Projects
router.get('/', (req, res) => {
	Project.getAllProjects()
		.then((project) => {
			res.status(200).json(projects);
		})
		.catch((err) => {
			res.status(500).json({
				Message: 'An error has occured with retrieving projects',
			});
		});
});
//get projects by id
// router.get('/:id', (req, res) => {
// 	const { id } = req.params;
// 	Project.getProjectsById(id)
// 		.then((project) => {
// 			if (id) {
// 				res.status(200).json(project);
// 			} else {
// 				res.status(404).json({ Message: 'No project with that id' });
// 			}
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json({
// 				Message: 'No project information can be found',
// 			});
// 		});
// });

//get all resources for a project
router.get('/resources', (req, res) => {
	const id = req.params.id;
	Project.getResources()
		.then((resources) => {
			res.status(200).json(resources);
		})
		.catch((err) => {
			res.status(500).json({
				Message: 'No resources could be found',
			});
		});
});

router.get('/tasks', (req, res) => {
	Project.getTasks()
		.then((tasks) => {
			res.status(200).json(tasks);
		})
		.catch((err) => {
			res.status(500).json({
				Message: 'An error has occured with retrieving tasks',
			});
		});
});

//Add a new project
router.post('/', (req, res) => {
	const projectData = req.body;

	Project.addProject(projectData)
		.then((project) => {
			res.status(201).json({ createdNewProject: project });
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new project', err });
		});
});

router.post('/tasks', (req, res) => {
	const taskData = req.body;

	Project.addTask(taskData)
		.then((task) => {
			res.status(201).json({ createdNewTask: task });
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new task' });
		});
});

router.post('/resources', (req, res) => {
	const resourceData = req.body;

	Project.addTask(resourceData)
		.then((id) => {
			res.status(201).json({ createdNewResource: id });
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new resource' });
		});
});

module.exports = router;
