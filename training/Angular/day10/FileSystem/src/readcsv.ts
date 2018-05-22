import * as fs from 'fs';
import * as csvparse from 'csv-parse';
import {numberWithCommas } from './readcsv_mylib';

var parser = csvparse;

//here we are reading the CSV file 
fs.readFile('./data/order.csv','utf8', (err,data) => {

    if (err) throw err;

   //using node custom csvparse to extrat the data from the CSV file and manipulate it line by line
   parser(data, {delimiter : ','}, (error:any,output:any) => {
    let isHeader = true;

    output.forEach( (element :any)  => {

    if (!isHeader) {

            let orderNumber = element[0];
            let orderTotal  = element[2];
            let orderSalesTax = (parseFloat(orderTotal) * 0.125).toFixed(2);

            console.log('Total Order for ' + orderNumber + ' is BZD ' + numberWithCommas(orderTotal) + ', Salex Tax BZD ' +  numberWithCommas(orderSalesTax));
	    }
	    else { isHeader = false; }
     });
           
   });

 
 })
