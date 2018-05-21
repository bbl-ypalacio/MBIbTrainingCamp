import * as fs from 'fs';
import * as parse from 'csv-parse';

fs.readFile('./data/order.csv', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
    return data;
});