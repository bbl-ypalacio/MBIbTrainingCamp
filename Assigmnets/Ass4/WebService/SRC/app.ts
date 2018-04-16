import * as express from 'express';

class App {
    public express;

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {

        const router = express.Router();

        router.get('/atm', (req, res) => {

            res.json({
                status: 0,
                message: "ok"
            })
        });        

        this.express.use('/', router)
    }
}

export default new App().express