const app = require('./lexjson');


let obj = Object.create(app.pegaStatus('172.16.140.164'));

console.log(obj);