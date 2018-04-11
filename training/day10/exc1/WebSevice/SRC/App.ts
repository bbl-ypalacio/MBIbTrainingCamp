import * as express from 'express';

class App {
    public express;

    constructure() {
        this.express = express();
        this.mountTheRoutes();
    }

    mountTheRoutes(): void {
        const mickey = express.Router();
        const pluto = express.Router();

        mickey.get("/", (req, resp) => {
            let x = { status: 0, message: "OK" };
            resp.json(x);
        })

        pluto.get('/api/:accountID', ( req, resp )=> {
            resp.json({
                account: req.params.accountID,
                balance: 289.23
            })
        })
        this.express.use('/', mickey);
        this.express.use('/', pluto);
    }
}

export default new App().express