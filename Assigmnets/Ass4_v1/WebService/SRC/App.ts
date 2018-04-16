import * as express from 'express';

class App {
    public express;

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        
        const router                    = express.Router();
        //const routerSetInitialBalance   = express.Router();
        const routerWithdrawMoney       = express.Router();
        //const routerDepositMoney        = express.Router();
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
			console.log("routerWithdrawMoney is being called by: "+ req.params.account);
			
            res.json({
                acctNum: req.params.citNum,
                balance: 99
            })
        });
		
		/*
		router.get('/atm', (req, res) => {
            res.json({
                status: 0,
                message: "ok"
            })
        });
		
		router.get('/atm', (req, res) => {
            res.json({
                status: 0,
                message: "ok"
            })
        }); */
		
		//routerShowBalance
        router.get('/atm/:citNum', (req, res) => {
			console.log("I am being called");
			console.log(" Acct number " + req.params.citNum);
            res.json({
                acctNum: req.params.citNum,
                balance: 100				
            })
        });

        this.express.use('/', router)
		//this.express.use('/', routerSetInitialBalance)
		this.express.use('/', routerWithdrawMoney)
		//this.express.use('/', routerDepositMoney)
        this.express.use('/', routerShowBalance)
    }
}

export default new App().express