const Sequelize = require("sequelize")

const sequelize = new Sequelize(
  {
    host: process.env.databaseHost,
    username: process.env.databaseUsername,
    password: process.env.databasePassword,
    database: process.env.databaseDB,
    dialect: 'mysql'
  })

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}