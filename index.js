const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const db = require("./db");
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());



//API Routes
app.use("/api", require("./api"));

//Start Up Function with node server.js
const startUp = () => {
	const server = app.listen(8080, () => {
		console.log("I am listening for database");
	});
};


const syncDb = () => db.sync({alter:true});

//Run server and sync DB
startUp();
syncDb();
