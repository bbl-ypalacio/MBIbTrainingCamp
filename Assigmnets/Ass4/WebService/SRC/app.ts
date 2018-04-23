import * as express from 'express';

class App {
    public express;
    public accTxnAmt		: number;
	public initialBalance 	: number;
    public currentBalance 	: number;
    public accountNumber 	: string;

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
		
		this.accountNumber="009"; //should be replace(only here to make code work)
        
        const router                    = express.Router();
        const routerIsAliveConnection   = express.Router();
        const routerSetInitialBalance   = express.Router();
        const routerWithdrawMoney       = express.Router();
        const routerDepositMoney        = express.Router();
        const routerShowBalance 		= express.Router();

        //routerIsAliveConnection
        router.get('/atm', (req, res) => {
			console.log("isAliveConnection is being called");
            res.json({
                status	: 0,
                message	: "Ok"
            })
        });  

        //routerSetInitialBalance
        router.get('/atm/setInitialBalance/:acct/balance/:bal', (req, res) => {	
		console.log("routerSetInitialBalance is being called by: " + req.params.acct);		
			if (req.params.acct == this.accountNumber){//should check JSON array for account number
				this.accountNumber  = req.params.acct;
				this.initialBalance = req.params.bal;
				this.currentBalance = req.params.bal;
				   				
				res.json({
					account: this.accountNumber,
					amount:  this.initialBalance
				})
			} else {
					   console.log('**Error, wrong account number*');
				   }
		}); 
		
		//routerWithdrawMoney
		router.get('/atm/withdraw/:account/amount/:amount', (req, res) => {	
		console.log("routerWithdrawMoney is being called by: " + req.params.account);						
			if (req.params.account == this.accountNumber ){//should check JSON array for account number
				this.accTxnAmt 		= req.params.amount;				
				this.currentBalance = this.currentBalance - this.accTxnAmt;
				
				res.json({
					account: this.accountNumber,
					amount : this.accTxnAmt,
					newBal : this.currentBalance
				})
			}else {
				  console.log('**Error, wrong account number*');
			 }
		});
		
		//routerDepositMoney
        router.get('/atm/deposit/:account/amount/:amount', (req, res) => {			
		console.log("routerDepositMoney is being called by: " + req.params.account);			
			if (req.params.account == this.accountNumber){//should check JSON array for account number				
				this.accTxnAmt 		= req.params.amount;				
				this.currentBalance = ((+this.currentBalance) + (+this.accTxnAmt));

				res.json({
					account: req.params.account,
					amount : req.params.amount,
					newBal : this.currentBalance
				})
			}else {
				 console.log("**Error, wrong account number*");
			 }
		});

		//routerShowBalance
        router.get('/atm/:account', (req, res) => {
		console.log("routerShowBalance is being called by: " + req.params.account);
			if (req.params.account == this.accountNumber){//should check JSON array for account number				
				res.json({
					account: req.params.account,
					newBal : this.currentBalance				
            })
			}else {
				 console.log("**Error, wrong account number*");
			 }
        });

        this.express.use('/', router)
		this.express.use('/', routerSetInitialBalance)
		this.express.use('/', routerWithdrawMoney)
		this.express.use('/', routerDepositMoney)
        this.express.use('/', routerShowBalance)
    }
}

export default new App().express