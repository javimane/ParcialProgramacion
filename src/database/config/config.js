// Para tomar lo parametros del env
require('dotenv').config()

module.exports =

{

    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,

    seederStorage: "sequelize",
    seederStorageTableName: "seeds",

    migrationStorage: "sequelize",
    migrationStorageTableName: "migrations"

}

