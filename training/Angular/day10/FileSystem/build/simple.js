"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
//asynchronuus
//synchornos
//streaming
//will not block the execution main thread, it is asynchronus ly executed 
fs.readFile('./data/file.txt', 'utf8', (err, data) => {
    if (err)
        throw err;
    console.log(data);
    return data;
});
