"use strict";
//Mario GitHub: https://github.com/marioestradarosa/tsbootcamp
Object.defineProperty(exports, "__esModule", { value: true });
var AtmClass_1 = require("./AtmClass");
var atm = new AtmClass_1.Atm();
atm.setInitialBalance("009", 500);
atm.withdrawMoney("009", 50);
atm.showBalance("009");
atm.closeOperation();
//# sourceMappingURL=main.js.map