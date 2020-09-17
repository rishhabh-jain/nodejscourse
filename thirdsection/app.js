const fs = require('fs');
const chalk = require('chalk');
const name = require('./name.js')
const validator = require('validator');
const getnotes = require('./notes.js');

const error = chalk.bgRedBright.black;
const success = chalk.bgGreen.black;
console.log(getnotes);

fs.appendFileSync('writefile.txt' , 'this is appended ');
console.log(validator.isEmail('imrj1999@gmail.com'))
console.log(success('success'))
