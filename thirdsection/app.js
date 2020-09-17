const fs = require('fs');
const name = require('./name.js')
const validator = require('validator');
const getnotes = require('./notes.js');

console.log(getnotes);

fs.appendFileSync('writefile.txt' , 'this is appended ');
console.log(validator.isEmail('imrj1999@gmail.com'))

