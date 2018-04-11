import * as express from 'express';
import * as got from 'got';

class App {
    public express

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {

        const router = express.Router()
        
        router.get('/', (req, res) => {
            got.get("<-Ending->").then(
                resp => {
                    res.json({
                        resp: resp.body
                    })
                });

            router.get('/hello', (req, res) => {

                res.json({
                    resp: "Yserri was here"
                })
            });
        })

        this.express.use('/', router)
    }
}

export default new App().express