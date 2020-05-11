import * as socket from "socket.io"

export class socketHandler {
    server: void

    constructor(server) {
        this.server = server
    }

    init() {
        const io = socket(this.server)

        io.use((socket, next) => {
            const token = socket.handshake.query.token
            if (token != "leltoken") {
                return socket.emit("EEEE")
            }
            next()
        }).on("connection", (socket) => {
            socket.on('message', (msg) => {
                io.emit('message', { msg: msg })
            })
        })

    }
}