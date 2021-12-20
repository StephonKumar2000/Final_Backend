/*
[ ] Write a `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] address - not empty or null
  - [ ] description - extremely large text
*/
const Sequelize = require("sequelize");

const db = require("../db");

const Campus = db.define("campus", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue: "https://sdmny.hunter.cuny.edu/wp-content/uploads/2019/01/hunter-college-logo.png",
	},
	address: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true,
		},
	},
	description: {
        type: Sequelize.TEXT,
        defaultValue : ``
	},
});

module.exports = Campus;
