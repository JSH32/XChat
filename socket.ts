import * as socket from "socket.io"

export class socketHandler {
    server: any

    constructor(server) {
        this.server = server
    }

    init() {
        const io = socket(this.server)

        io.on("connection", (socket) => {

            socket.on('message', (msg) => {
                io.emit('message', msg)
            })

        })
    }
}