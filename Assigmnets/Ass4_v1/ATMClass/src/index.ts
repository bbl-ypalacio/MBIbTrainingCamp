import { Atm } from './AtmClass';

var atm : Atm = new Atm();

atm.setInitialBalance("009",500);
atm.withdrawMoney("009",50);
atm.depositMoney("009",50);
atm.showBalance("009");
atm.closeOperation();
