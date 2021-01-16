const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = 5000;

const router = require('./router');

io.on('connection', (socket) => {
    console.log('A user connected!!');

    socket.on('disconnect', () => {
        console.log('User disconnected!!!');
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));



