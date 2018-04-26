"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AtmClass_1 = require("./AtmClass");
var atm = new AtmClass_1.Atm();
atm.isAliveConnection();
atm.setInitialBalance("23232-3", 500);
atm.withdrawMoney("23232-3", 100);
atm.depositMoney("23232-3", 50);
atm.showBalance("23232-3"); //not working
atm.accountExists("23232-3"); //not working
//atm.getLastOperations("23232-3");
atm.closeOperation();
