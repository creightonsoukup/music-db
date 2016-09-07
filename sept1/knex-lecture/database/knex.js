var environment = 'development';
//targets develop information from the knexfile.js
var config = require('../knexfile')[environment];

module.exports = require('knex')(config);
