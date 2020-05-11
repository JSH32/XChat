const socket = io.connect("http://192.168.1.4:8081")

const submitMsg = () => {
    const message = document.getElementById("messageBox").value
    socket.emit("message", message)
}

socket.on('message', (msg) => {
    const message = document.createElement('p')
    message.innerHTML = msg
    document.getElementById("messages").appendChild(message)
})