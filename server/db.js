const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //Передача назви бази данних
    process.env.DB_USER, //Передача назви користувача
    process.env.DB_PASSWORD, //Передача пароля користувача
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)