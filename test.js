/*
  "platform" : "Tradfri",
  "name" : "Tradfri",
  "debug": true,
  "coapClientPath": "/usr/local/bin/coap-client",
  "psk" : "6RnSQ41fP8RdPNan"

*/

// coap-client -m post -u "Client_identity" -k "6RnSQ41fP8RdPNan" -e '{"9090":"IDENTITY"}' "coaps://192.168.86.78:5684/15011/9063"

//AKAKMySmHF1Erczp

const tradfri = require('node-tradfri').create({
  coapClientPath: '/usr/local/bin/coap-client', // use embedded coap-client
  identity: 'AKAKMySmHF1Erczp',
  preSharedKey: '6RnSQ41fP8RdPNan',
  hubIpAddress: '192.168.86.78'
});

tradfri.getDevices().then((devices) => {
    console.log(devices);
})
.catch((error) => {
    console.log(error);
})
