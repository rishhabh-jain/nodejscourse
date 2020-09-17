const fs = require('fs');

const data = fs.readFileSync('./notes.txt' , {encoding : 'utf-8'})

module.exports = data;