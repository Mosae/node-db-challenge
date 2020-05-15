exports.seed = function (knex) {
	return knex('resources').insert([
		{ id: 1, name: 'Bike' },
		{ id: 2, name: 'golf clubs' },
		{ id: 3, name: 'broom' },
	]);
};
