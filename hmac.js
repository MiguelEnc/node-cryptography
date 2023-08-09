const { createHmac } = require('crypto');


function hashHmac(input, key) {
  return createHmac('sha256', key).update(input).digest('hex');
}

const message = 'HelloWorld!';

const KEY1 = 'secret-key';
const hmac1 = hashHmac(message, KEY1);
console.log(hmac1);

// Different key produces completely different result for the same message
const KEY2 = 'another-key';
const hmac2 = hashHmac(message, KEY2);
console.log(hmac2);

const match = hmac1 === hmac2;
console.log(match ? 'Messages match' : 'Messages does not match');