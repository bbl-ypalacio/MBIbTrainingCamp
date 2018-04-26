import * as express from 'express';
import * as _ from 'lodash';

import { InitialData } from './AtmDB/atm.data';
import { accountList, accountModel, TransactionList, TransactionModel } from './AtmDB/atm.model';

class App {
    public express;
    
	private localDB          : accountList;
    private transactionList  : TransactionList;

    constructor() {
        this.express = express();
        this.mountRoutes();		
		/*
         *  Initialize the local DB
        */
          this.localDB = new accountList();
          this.localDB.accounts = InitialData;
          this.transactionList = new TransactionList();
    }

    private mountRoutes(): void {
        
        //const router                    = express.Router();
        const routerIsAliveConnection   = express.Router();
		const routerAccountExists   	= express.Router();
        const routerSetInitialBalance   = express.Router();
        const routerWithdrawMoney       = express.Router();
        const routerDepositMoney        = express.Router();
        const routerShowBalance         = express.Router();
        const routerGetLastOperations   = express.Router();

        //routerIsAliveConnection
        routerIsAliveConnection.get('/atm/isAliveConnection', (req, res) => {
            console.log("isAliveConnection is being called");
			resp.setHeader('Access-Control-Allow-Origin', '*');
            res.json({
                status	: 0,
                message	: "Ok"
            })
        });  
		
		//routerAccountExists
        routerAccountExists.get('/atm/AccountExists/:acct', (req, res) => {
            console.log("routerAccountExists is being called by: " + req.params.acct);
            let accExist = this.accountExists(req.params.acct);
			resp.setHeader('Access-Control-Allow-Origin', '*');
            res.json({
                status: accExist
            })
        });		

        //routerSetInitialBalance//TODO:modify to alter array
        routerSetInitialBalance.get('/atm/setInitialBalance/:acct/balance/:bal', (req, res) => {	
		console.log("routerSetInitialBalance is being called by: " + req.params.acct);		
        if (this.accountExists(req.params.acct)) {

            let acc = req.params.acct;
            let amt = req.params.bal;

            let result = _.findIndex(this.localDB.accounts, {'accountNumber': acc });
            this.localDB.accounts[result].currentBalance = amt;

            //record the transaction in the transaction list
            let newTransaction              = new TransactionModel();
            newTransaction.accountNumber    = acc;
            newTransaction.amount           = amt;
            newTransaction.transactionType  = "SetBalance";

            this.transactionList.transactions.push(newTransaction);
			
			resp.setHeader('Access-Control-Allow-Origin', '*');
            res.json({
                account : this.localDB.accounts[result].accountNumber,
                newBal  : this.localDB.accounts[result].currentBalance
            })

			} else {
					   console.log('**Error, wrong account number*');
				   }
		}); 
		
		//routerWithdrawMoney
        routerWithdrawMoney.get('/atm/withdraw/:account/amount/:amount', (req, res) => {	
        console.log("routerWithdrawMoney is being called by: " + req.params.account);						
        if (this.accountExists(req.params.account)) {

            let acc = req.params.account;
            let amt = req.params.amount; 

            let result = _.findIndex(this.localDB.accounts, {'accountNumber': acc});

            this.localDB.accounts[result].currentBalance -= amt;

            //record the transaction in the transaction list
            let newTransaction              = new TransactionModel();
            newTransaction.accountNumber    = acc;
            newTransaction.amount           = amt;
            newTransaction.transactionType  = "WithDraw";

            this.transactionList.transactions.push(newTransaction);
			
			resp.setHeader('Access-Control-Allow-Origin', '*');
            res.json({
                        account : this.localDB.accounts[result].accountNumber,
                        newBal  : this.localDB.accounts[result].currentBalance
            })

			}else {
				  console.log('**Error, wrong account number*');
			 }
		});
		
		//routerDepositMoney
        routerDepositMoney.get('/atm/deposit/:account/amount/:amount', (req, res) => {			
		console.log("routerDepositMoney is being called by: " + req.params.account);			
        if (this.accountExists(req.params.account)) {

            let acc = req.params.account;
            let amt = req.params.amount;

            let result = _.findIndex(this.localDB.accounts, { 'accountNumber': acc });
            this.localDB.accounts[result].currentBalance = Number(this.localDB.accounts[result].currentBalance) + Number(amt);

            //record the transaction in the transaction list
            let newTransaction = new TransactionModel();
            newTransaction.accountNumber = acc;
            newTransaction.amount = amt;
            newTransaction.transactionType = "Deposit";

            this.transactionList.transactions.push(newTransaction);
			
			resp.setHeader('Access-Control-Allow-Origin', '*');
				res.json({
                    account : this.localDB.accounts[result].accountNumber,
                    newBal  : this.localDB.accounts[result].currentBalance
				})
			}else {
				 console.log("**Error, wrong account number*");
			 }
		});

		//routerShowBalance
        routerShowBalance.get('/atm/ShowBalance/:account', (req, res) => {
            console.log("routerShowBalance is being called by: " + req.params.account);
            if (this.accountExists(req.params.account)) {

                let result = _.findIndex(this.localDB.accounts, { 'accountNumber': req.params.account });
				
				resp.setHeader('Access-Control-Allow-Origin', '*');
				res.json({
                    account: req.params.account,
                    newBal: this.localDB.accounts[result].currentBalance				
            })
			}else {
				 console.log("**Error, wrong account number*");
			 }
        });

        //routerGetLastOperations
        routerGetLastOperations.get('/atm/GetLastOperations/:account', (req, res) => {
        console.log("routerGetLastOperations is being called by: " + req.params.account);
        if (this.accountExists(req.params.account)) {

                let result: TransactionList = new TransactionList();

                result.transactions = _.filter(
                    this.transactionList.transactions,
                    {
                        'accountNumber': req.params.account
                    }
                );
				
				resp.setHeader('Access-Control-Allow-Origin', '*');
                res.json({
                    lastOperations: result
                })
            } else {
                console.log("**Error, wrong account number*");
            }
        });
                
		this.express.use('/', routerIsAliveConnection)
		this.express.use('/', routerAccountExists)
		this.express.use('/', routerSetInitialBalance)
		this.express.use('/', routerWithdrawMoney)
		this.express.use('/', routerDepositMoney)
        this.express.use('/', routerShowBalance)
        this.express.use('/', routerGetLastOperations)
    }


    private accountExists(acct: string): boolean {
        return _.some(this.localDB.accounts, { 'accountNumber': acct });
    }

}

export default new App().express