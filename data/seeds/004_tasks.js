exports.seed = function (knex) {
	return knex('tasks').insert([
		{
			id: 1,
			description: 'Need to ride faster',
			notes: 'buy bike',
			project_id: 1,
		},
		{ id: 2, description: 'Swing slow', notes: 'buy clubs', project_id: 2 },
		{ id: 3, description: 'Scrub', notes: 'buy scrub', project_id: 3 },
	]);
};
