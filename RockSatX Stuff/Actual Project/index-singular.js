// SERVER SETUP
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const bodyParser = require('body-parser');
//const db = require('./queries')

function JSONNode(data){
    console.log(JSON.parse(data));
    return JSON.parse(data);
}
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index-singular.html');
});

app.post('/', (req, res) => {
    res.send('It works.');
    io.emit('pythonData', req.body.data)
});

app.use(express.static('public'));


let connections = false;
io.on('connection', async (socket) => {
    socket.on('postRequest', (data) => {
        console.log('Recieved Data:', data);
    });
	console.log('user connected');
    connections = true
    runs++;
    if (connections){
        sendData();
        updateNode1();
        updateNode2();
    }//sendData(runs);}
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

/* app.get('/users', db.getUsers)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,})); */

let runs = 0

function randomBoolean() {
    return ((Math.random() >= 0.5)? true : ((Math.random() >= 0.5)? false : null));
}

function randomFromArray(array) {
    return array[(Math.floor((Math.random()*array.length)))];
}

function randomNum(num){
   if(Math.random() <= 0.95){
        return ((Math.round(Math.random()*num)));
    } else {
        return null;
    }
}

function JSONNode(number, time) {
        return {
            "time": time,
            "runs": runs,
            "temp1": randomNum(100),
            "alt1": randomNum(10000),
            "speed1": randomNum(200),
            "TBD1": randomNum(500),

            "temp2": randomNum(100),
            "alt2": randomNum(10000),
            "speed2": randomNum(200),
            "TBD2": randomNum(500),

            "temp3": randomNum(100),
            "alt3": randomNum(10000),
            "speed3": randomNum(200),
            "TBD3": randomNum(500),

            "temp4": randomNum(100),
            "alt4": randomNum(10000),
            "speed4": randomNum(200),
            "TBD4": randomNum(500),

            "comms": {
                "relay": {
                    "toEC1": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toEC2": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toBase": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toPD": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    } 
                },
                "PD": {
                    "toEC1": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toEC2": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                },
                "base":{
                    "toEC1": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toEC2": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    }
                }
            },
        "nodeNumber": number,
        "sub_head": {
            "0": randomFromArray(['2.4GHz', '915MHz', null]), 
            "1": randomFromArray(['EC1', 'EC2', 'Payload', 'Base', 'Relay', null]),
            "2": randomFromArray(['TBD', null])
        },

        "quat": {
            "x": randomNum(500),
            "y": randomNum(500),
            "z": randomNum(500),
            "w": randomNum(500)
        },
        "alarm": {
            "trx": {"title": 'TRX', "color": randomFromArray(['green', 'red', null])},
            "cocom": {"title": 'COCOM', "color": randomFromArray(['green', 'red', null])},
            "gps": {"title": 'GPS', "color": randomFromArray(['green', 'red', null])},
            "temp": {"title": 'TEMP', "color": randomFromArray(['green', 'red', null])}
        },
        "con_stat": {
            "node1": {"title": 'N1', "color": randomFromArray(['green', 'red', null])},
            "node2": {"title": 'N2', "color": randomFromArray(['green', 'red', null])},
            "node3": {"title": 'N3', "color": randomFromArray(['green', 'red', null])},
            "node4": {"title": 'N4', "color": randomFromArray(['green', 'red', null])},
            "node5": {"title": 'N5', "color": randomFromArray(['green', 'red', null])}
        },
        "master_conn": {
            "2.4GHz": {
                "SNR": {
                    "num": randomNum(100),
                    "color": randomFromArray(['green', 'red', 'blue', 'pink', null])
                },
                "RSSI": {
                    "num": randomNum(100),
                    "color": randomFromArray(['green', 'red', 'blue', 'pink', null])
                }
            },
            "915MHz": {
                "SNR": {
                    "num": randomNum(100),
                    "color": randomFromArray(['green', 'red', 'blue', 'pink', null])
                },
                "RSSI": {
                    "num": randomNum(100),
                    "color": randomFromArray(['green', 'red', 'blue', 'pink', null])
                }
            }
        }
    };

}


// SOCKET IO

function sendData(runs) {
	setInterval(() => {
		let nodesObject = {
            "time": 1,
            "runs": runs,
            "temp1": randomNum(100),
            "alt1": randomNum(10000),
            "speed1": randomNum(200),
            "TBD1": randomNum(500),

            "temp2": randomNum(100),
            "alt2": randomNum(10000),
            "speed2": randomNum(200),
            "TBD2": randomNum(500),

            "temp3": randomNum(100),
            "alt3": randomNum(10000),
            "speed3": randomNum(200),
            "TBD3": randomNum(500),

            "temp4": randomNum(100),
            "alt4": randomNum(10000),
            "speed4": randomNum(200),
            "TBD4": randomNum(500),

            "comms": {
                "relay": {
                    "toEC1": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toEC2": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toBase": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toPD": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    } 
                },
                "PD": {
                    "toEC1": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toEC2": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                },
                "base":{
                    "toEC1": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    },
                    "toEC2": {
                        "2.4GHz": randomBoolean(),
                        "915MHz": randomBoolean()
                    }
                }
            },
        }
		io.emit('render', JSON.stringify(nodesObject));
	}, 1000);
} 

function updateNode1(){
    setInterval(() => {
        let nodesObject = JSONNode(1, 1);
        //console.log('Node 1');
        //console.log(JSON.stringify(nodesObject));
        //console.log(`Node 1 ---- x: ${nodesObject.quat.x} y: ${nodesObject.quat.y} z: ${nodesObject.quat.z} w: ${nodesObject.quat.w}`);
        io.emit('Node1Data', JSON.stringify(nodesObject));
        //console.log(JSONNode(num));
    }, 1000);
}

function updateNode2(){
    setInterval(() => {
        let nodesObject = JSONNode(2, 1.5);
        //console.log('Node 2');
        //console.log(JSON.stringify(nodesObject));
        //console.log(`Node 2 ---- x: ${nodesObject.quat.x} y: ${nodesObject.quat.y} z: ${nodesObject.quat.z} w: ${nodesObject.quat.w}`);
        io.emit('Node2Data', JSON.stringify(nodesObject));
        //console.log(JSONNode(num));
    }, 1500);
}

function updateNode3(){
    setInterval(() => {
        let nodesObject = JSONNode(3);
        io.emit('Node3Data', JSON.stringify(nodesObject));
        //console.log(JSONNode(num));
    }, 1000);
}

function updateNode4(){
    setInterval(() => {
        let nodesObject = JSONNode(4);
        io.emit('Node4Data', JSON.stringify(nodesObject));
        //console.log(JSONNode(num));
    }, 1000);
}

function updateNode5(){
    setInterval(() => {
        let nodesObject = JSONNode(5);
        io.emit('Node5Data', JSON.stringify(nodesObject));
        //console.log(JSONNode(num));
    }, 1000);
}