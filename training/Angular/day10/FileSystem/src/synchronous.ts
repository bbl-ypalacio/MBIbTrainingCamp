import * as fs from 'fs';

var data = null;

try {
    data = fs.readdirSync('./data/file.txt', 'utf8');
    console.log(data);
}
catch (err) { console.log(err) }
