const { publicEncrypt, privateDecrypt } = require('crypto');
const { privateKey, publicKey } = require('./keypairs');

const message = 'Never Stop Exploring';

const encryptedMessage = publicEncrypt(
  publicKey,
  Buffer.from(message)
);

console.log(encryptedMessage.toString('hex'));

const decryptedMessage = privateDecrypt(
  privateKey,
  encryptedMessage
);

console.log(decryptedMessage.toString('utf-8'));