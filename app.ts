import * as express from "express"
import * as router from "./router"
import { socketHandler } from "./socket"
import * as config from "./config"

const app = express()
app.set('view engine', 'ejs')

let server = app.listen(config.port, () => {
    console.log(`Server started at ${config.port}`)
    
    app.use(express.static('public')) // Public
    router.Router(app)

    new socketHandler(server).init()
})