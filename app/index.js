const app = require('./lexjson');

let impressoras = [
    '172.16.140.164',
    '172.16.140.31',
    '172.16.140.21',
    '172.16.140.22'
];

impressoras.forEach(x => {
    app.pegaStatus(x);
});