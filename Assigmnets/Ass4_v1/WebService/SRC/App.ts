import * as express from 'express';

class App {
    public express;
    //public accFunds = 200;

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        
        const router                    = express.Router();
        //const routerSetInitialBalance   = express.Router();
        const routerWithdrawMoney       = express.Router();
        const routerDepositMoney        = express.Router();
        const routerShowBalance         = express.Router();

		//ensuring we have connectivity to webservice
        router.get('/atm', (req, res) => {
            res.json({
                status: 0,
                message: "ok"
            })
        });   
		
		//routerWithdrawMoney
		router.get('/atm/withdraw/:account/amount/:amount', (req, res) => {
            console.log("routerWithdrawMoney is being called by: " + req.params.account);

            //this.accFunds = this.accFunds - (req.params.amount); 
            
            res.json({
                acctNum: req.params.account
            })
        });
		
		//routerDepositMoney
        router.get('/atm/deposit/:account/amount/:amount', (req, res) => {
            console.log("routerDepositMoney is being called by: " + req.params.account);

            //this.accFunds = this.accFunds + amt;

            res.json({
                account: req.params.account,
                amount: req.params.amount
            })
        });

		/*
		router.get('/atm', (req, res) => {
            res.json({
                status: 0,
                message: "ok"
            })
        }); */
		
		//routerShowBalance
        router.get('/atm/:citNum', (req, res) => {
            console.log("routerShowBalance is being called by: " + req.params.citNum);
            res.json({
                acctNum: req.params.citNum		
            })
        });

        this.express.use('/', router)
		//this.express.use('/', routerSetInitialBalance)
		this.express.use('/', routerWithdrawMoney)
		this.express.use('/', routerDepositMoney)
        this.express.use('/', routerShowBalance)
    }
}

export default new App().express