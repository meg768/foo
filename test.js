/*
  "platform" : "Tradfri",
  "name" : "Tradfri",
  "debug": true,
  "coapClientPath": "/usr/local/bin/coap-client",
  "psk" : "6RnSQ41fP8RdPNan"

*/

/*
coap-client -m post -u "Client_identity" -k "6RnSQ41fP8RdPNan" -e '{"9090":"KALLE"}' "coaps://192.168.86.78:5684/15011/9063"
fS7QW04XZ7im7Lhx

coap-client -m post -u "Client_identity" -k "6RnSQ41fP8RdPNan" -e '{"9090":"IKEA"}' "coaps://192.168.86.78:5684/15011/9063"
{"9091":"bsC0X2H8vX3wLQa3","9029":"1.3.0014"}


coap-client -m post -u "Client_identity" -k "6RnSQ41fP8RdPNan" -e '{"9090":"KABEL"}' "coaps://192.168.86.78:5684/15011/9063"
{"9091":"L7UXBn5ex3xudD1m","9029":"1.3.0014"}

coap-client -m get -u "Client_identity" -k "L7UXBn5ex3xudD1m" "coaps://192.168.86.78:5684/15001"
/*

/*
get(type = 'device', id) {
  const endpoint = type === 'device' ? 15001 : 15004;
  let command = `${this.coapClientPath} -m get -u "${this.identity}" -k "${this.preSharedKey}" "coaps://${this.ip}:5684/${endpoint}`;

  if (id) {
    command += `/${id}"`;
  } else {
    command += '"';
  }

  return command;
}
*/
const tradfri = require('node-tradfri').create({
  coapClientPath: '/usr/local/bin/coap-client', // use embedded coap-client
  identity: 'Client_identity',
  preSharedKey: '6RnSQ41fP8RdPNan',
  hubIpAddress: '192.168.86.78'
});

tradfri.getDevices().then((devices) => {
    console.log(devices);
})
.catch((error) => {
    console.log(error);
})
