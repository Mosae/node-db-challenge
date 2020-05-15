const db = require('../data/dbConfig.js');

module.exports = {
	getAllProjects,
	getResources,
	getTasks,
	addProject,
	addTask,
	addResource,
};

function getAllProjects() {
	//select * from projects
	return db.select('*').from('projects');
}

function getResources() {
	return db.select('*').from('resources');
}

function getTasks() {
	//select project.name, project.description, tasks.project_id, task.description, task.notes
	//from projects, tasks
	//where project.id = tasks.projects
	return db('tasks')
		.join('projects', 'projects.id', 'tasks.project_id')
		.select(
			'project.name',
			'projects.description',
			'tasks.description',
			'tasks.notes'
		);
}

function addProject(project) {
	return db('projects').insert(project);
}

function addTask(task) {
	return db('tasks').insert(task);
}

function addResource(resource) {
	return db('resources').insert(resource);
}

// function getProjectById(id) {
// 	let query = db('projects as p');
// 	return query.where('p.id', id).first();
// }

// function getResourcesForProject(id) {
// 	return db('project_resources')
// 		.join('resources', 'resources.id', 'project_resources.resources_id')
// 		.join('projects', 'projects.id', 'projects_resources.project_id')
// 		.select('project.name', 'resource.name')
// 		.where({ 'projects_resources.project_id': id });
// }
// function findById(id) {
// 	return db('projects').where('id', id).first();
// }

// function add(project) {
// 	return db('projects')
// 		.insert(project, 'id')
// 		.then((ids) => {
// 			return findById(ids[0]);
// 		});
// }
