import * as _ from 'lodash';

import { AtmInterface } from './atm.interface';
import { accountList,accountModel,TransactionList,TransactionModel} from './atm.model';
import { InitialData } from './atm.data';

export class Atm implements AtmInterface {

     private localDB : accountList;
     private transactionList  : TransactionList;

     constructor(){
           /*
           *  Initialize the local DB
           */
          this.localDB = new accountList();
          this.localDB.accounts = InitialData;
          this.transactionList = new TransactionList();
     }

     public accountExists(acct : string ) : boolean {
        return _.some(this.localDB.accounts,{'accountNumber' : acct});
     }


     public getCurrentBalance ( acct : string ) : number {

        if (this.accountExists (acct)) {
                let result = _.filter(this.localDB.accounts,{'accountNumber' : acct});
                return result[0].currentBalance;
        }
        else {
               return -100; // here -100 means not found 
        }
     }

     withDraw ( acct : string , amount : number) : number{

        if (this.accountExists (acct)) {

            let result = _.findIndex(this.localDB.accounts,{'accountNumber' : acct});
            this.localDB.accounts[result].currentBalance -= amount;

            //record the transaction in the transaction list
            let newTransaction = new TransactionModel();
            newTransaction.accountNumber = acct;
            newTransaction.amount  = amount;
            newTransaction.transactionType = "WithDraw";

            this.transactionList.transactions.push(newTransaction);

            return this.localDB.accounts[result].currentBalance;
        }
        else {
            return -100; 
        }

     }

     deposit ( acct : string , amount : number) : number{

        if (this.accountExists (acct)) {

            let result = _.findIndex(this.localDB.accounts,{'accountNumber' : acct});
            this.localDB.accounts[result].currentBalance += amount;

            //record the transaction in the transaction list
            let newTransaction = new TransactionModel();
            newTransaction.accountNumber = acct;
            newTransaction.amount  = amount;
            newTransaction.transactionType = "Deposit";

            this.transactionList.transactions.push(newTransaction);

            return this.localDB.accounts[result].currentBalance;
        }
        else {
            return -100; 
        }

     }


     getLastOperations ( acct : string ) : TransactionList {

        let result : TransactionList = new TransactionList();

        if (this.accountExists(acct)) {

            result.transactions = _.filter(
                this.transactionList.transactions,
                {
                    'accountNumber' : acct
                }
            );

        }

        return result;
     }

}
