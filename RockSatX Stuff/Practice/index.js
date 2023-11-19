// Socket.io
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


let value = 100;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	console.log('user connected');
	socket.on('upperBound', (upperBound) => {
		sendData(parseInt(upperBound));
	});
});

function sendData(num) {
	value = (typeof num == 'number' && !(isNaN(num)))? num : 100;
	let main = setInterval(() => {
		const multiDimArr 
		= {
			"number": [Math.round((Math.random())*value)],
			"maxNumber": num
		};
		io.emit('data', JSON.stringify(multiDimArr));
	}, 1000);
}

server.listen(3000, () => {
  console.log('listening on *:3000');
});

/* function timeoutManage(startEnd, value) {
	if (startEnd == true){
		var main = setInterval(() => {
			const multiDimArr = {
				data: [
					['sample'],
					[Math.round((Math.random())*value)]
				]};
				io.emit('data', JSON.stringify(multiDimArr));
		}, 1000);
	} else {
		clearTimeout(main);
	}
} */