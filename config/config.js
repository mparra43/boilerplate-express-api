require('dotenv').config();

module.exports = {
	'development': {
		'username': process.env.POSTGRESQL_USER,
		'password': process.env.POSTGRESQL_PASSWORD,
		'database': process.env.POSTGRESQL_DB,
		'host': process.env.POSTGRESQL_HOST,
		'port':5432,
		'dialect': 'postgres',
		'migrationStorage': 'sequelize',
		'migrationStorageTableName': 'sequelize_migrations',
		'seederStorage': 'sequelize',
		'seederStorageTableName': 'sequelize_seeders'
	},
	'test': {
		'username': process.env.POSTGRESQL_USER,
		'password': process.env.POSTGRESQL_PASSWORD,
		'database': process.env.POSTGRESQL_DB,
		'host': process.env.POSTGRESQL_HOST,
		'dialect': 'postgres',
		'migrationStorage': 'sequelize',
		'migrationStorageTableName': 'sequelize_migrations',
		'seederStorage': 'sequelize',
		'seederStorageTableName': 'sequelize_seeders'
	},
	'production': {
		'username': process.env.POSTGRESQL_USER,
		'password': process.env.POSTGRESQL_PASSWORD,
		'database': process.env.POSTGRESQL_DB,
		'host': process.env.POSTGRESQL_HOST,
		'dialect': 'postgres',
		'migrationStorage': 'sequelize',
		'migrationStorageTableName': 'sequelize_migrations',
		'seederStorage': 'sequelize',
		'seederStorageTableName': 'sequelize_seeders'
	}
};
