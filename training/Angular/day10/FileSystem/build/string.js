"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
let data = '';
var readStream = fs.createReadStream('./data/file.txt', 'utf8');
readStream.on('data', (chunk) => { data += chunk; })
    .on('end', () => { console.log(data); })
    .on('error', (err) => { console.log(err); });
