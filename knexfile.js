// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data.project.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations', // put migrations here
		},
		seeds: {
			directory: './data/seeds', // put seeds here
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			},
		},
	},
};
