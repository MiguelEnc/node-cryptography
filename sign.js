const { createSign, createVerify } = require('crypto');
const { privateKey, publicKey } = require('./keypairs')

const message = 'Data that must be signed';

// Signing
const signer = createSign('rsa-sha256');
signer.update(message);
const signature = signer.sign(privateKey, 'hex');

// Verifying
const verifyer = createVerify('rsa-sha256');
verifyer.update(message);

const isValid = verifyer.verify(publicKey, signature, 'hex');

console.log(isValid);