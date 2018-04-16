import * as express from 'express';

class App {
    public express;

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {

        const showBalanceRouter = express.Router();
        const router            = express.Router();

        router.get('/atm', (req, res) => {

            res.json({
                status: 0,
                message: "ok"
            })
        });        

        router.get('/atm/:citNum', (req, res) => {
			console.log("I am being called");
			console.log(" Acct number " + req.params.citNum);
            res.json({
                acctNum: req.params.citNum,
                balance: 100				
            })
        });

        this.express.use('/', router)
        this.express.use('/', showBalanceRouter)
    }
}

export default new App().express