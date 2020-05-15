exports.up = function (knex) {
	return knex.schema
		.createTable('projects', (tbl) => {
			tbl.increments(); //unique id
			tbl.string('name', 70).notNullable();
			tbl.string('description');
			tbl.boolean('Completed').defaultTo(false);
		})
		.createTable('tasks', (tbl) => {
			//belongs to one projects
			tbl.increments(); //unique id
			tbl.string('name', 70).notNullable();
			tbl.string('description').notNullable();
			tbl.string('notes');
			tbl
				.boolean('completed')
				.defaultTo(false)
				//foreign key that references the id in the projects table - one to many relationship
				.unsigned() //not negative
				.notNullable()
				.references('id')
				.inTable('poject')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('resources', (tbl) => {
			//belongs to one projects
			tbl.increments(); //unique id
			tbl.string('name', 70).notNullable();
			tbl.string('description');
			tbl.boolean('in_use').defaultTo(false);
		})
		.createTable('project_resources', (tbl) => {
			//table that combines the projects and resources - many to many relationship
			tbl.increments();
			//foreign key that points to the projects
			tbl
				.integer('project_id')
				.unsigned()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			//foreign key that points to the resources table
			tbl
				.integer('resources_id')
				.unsigned()
				.references('id')
				.inTable('resources')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};
exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('project_resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects');
};
