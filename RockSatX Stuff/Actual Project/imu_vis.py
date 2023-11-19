from time import *
import serial
import socketio
import certifi
import requests
print(serial.__file__)
ad=serial.Serial('/dev/cu.usbmodem132310701', 115200, timeout=1)
sleep(1) 

""" response = requests.post('http://localhost:3000/', data = {"data" : "Hello world"})
print(response.status_code) """

while (True):
    while (ad.inWaiting()==0):
       pass
    dataPacket=ad.readline()
    dataPacket=str(dataPacket,'utf-8')
    #splitPacket=dataPacket.split(",")
    #print(splitPacket)
    response = requests.post('http://localhost:3000/', data = {"data" : dataPacket})
    print(response.status_code)

""" if response.status_code == 200:
    print('Data sent')
else:
    print('Data failed') """



""" sio = socketio.Client()

sio.connect("http://localhost:3000/")
@sio.event
def connect():
    data = {"data" : "Hello world"}
    sio.emit('postRequest', data)

sio.wait() """