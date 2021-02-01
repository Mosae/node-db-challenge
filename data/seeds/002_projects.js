exports.seed = function (knex) {
	return knex('projects').insert([
		{ id: 1, name: 'Ride Bike' },
		{ id: 2, name: 'Play golf' },
		{ id: 3, name: 'Clean house' },
	]);
};
