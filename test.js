/*
  "platform" : "Tradfri",
  "name" : "Tradfri",
  "debug": true,
  "coapClientPath": "/usr/local/bin/coap-client",
  "psk" : "6RnSQ41fP8RdPNan"

*/
const tradfri = require('node-tradfri').create({
  coapClientPath: '/usr/local/bin/coap-client', // use embedded coap-client
  identity: 'IDENTITY',
  preSharedKey: '6RnSQ41fP8RdPNan',
  hubIpAddress: '192.168.86.78'
});

tradfri.getDevices().then((devices) => {
    console.log(devices);
})
.catch((error) => {
    console.log(error);
})
