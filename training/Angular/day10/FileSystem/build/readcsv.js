"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const csvparse = require("csv-parse");
const readcsv_mylib_1 = require("./readcsv_mylib");
var parser = csvparse;
//here we are reading the CSV file 
fs.readFile('./data/order.csv', 'utf8', (err, data) => {
    if (err)
        throw err;
    //using node custom csvparse to extrat the data from the CSV file and manipulate it line by line
    parser(data, { delimiter: ',' }, (error, output) => {
        let isHeader = true;
        output.forEach((element) => {
            if (!isHeader) {
                let orderNumber = element[0];
                let orderTotal = element[2];
                let orderSalesTax = (parseFloat(orderTotal) * 0.125).toFixed(2);
                console.log('Total Order for ' + orderNumber + ' is BZD ' + readcsv_mylib_1.numberWithCommas(orderTotal) + ', Salex Tax BZD ' + readcsv_mylib_1.numberWithCommas(orderSalesTax));
            }
            else {
                isHeader = false;
            }
        });
    });
});
