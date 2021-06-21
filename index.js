const app = require ('express')()
const server = require('http').createServer(app)
const cors = require('cors')
const io = require ('socket.io')(server, {
    cors : {
        origin : '*',
        method : ['GET', 'POST']
    }
})
app.use(cors())
const port = process.env.port ||3000
app.get('/',(req, res) =>{
    res.status(200).send({message : "Working"})
})
io.on('connection',(socket) =>{
    socket.emit('me', socket.id)
    socket.on('disconnect', () =>{
        socket.broadcast.emit("callended")
    })
    socket.on("calluser", ({userToCall, signalData, from, name}) =>{
        io.to(userToCall).emit("callUser", {signal : signalData, from, name});
    })
    socket.on("answerCall", (data) =>{
        io.to(data.io).emit("callAccepted", data.signal)
    })
})
server.listen(port, ()=> {
    console.log(`Server running on ${port}`)
})