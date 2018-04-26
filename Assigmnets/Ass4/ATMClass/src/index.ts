import { Atm } from './AtmClass';

var atm: Atm = new Atm();

atm.isAliveConnection();
atm.setInitialBalance("23232-3", 500);
atm.withdrawMoney("23232-3", 100);
atm.depositMoney("23232-3", 50);
atm.showBalance("23232-3");//not working
atm.accountExists("23232-3");//not working
//atm.getLastOperations("23232-3");
atm.closeOperation();