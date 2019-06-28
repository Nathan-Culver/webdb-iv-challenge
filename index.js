const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

const port = 9999;
server.listen(port, () => console.log("Over 9000!"));