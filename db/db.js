const Sequelize = require("sequelize");
require('dotenv').config(); // requries dotenv

const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER , process.env.DATABASE_PASS, {
    host : "localhost",
    dialect: "postgres"
})

module.exports = db;
