"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//cleaning the data
exports.numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
