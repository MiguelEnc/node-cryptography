const { createCipheriv, createDecipheriv, randomBytes } = require("crypto");

const message = "Never Stop Exploring!";
const key = randomBytes(32);

/**
 * Initialization Vector:
 * Prevents identical sequences of cipher text
 */
const iv = randomBytes(16);

// Encrypt
const cipher = createCipheriv("aes256", key, iv);
const encryptedMessage =
    cipher.update(message, "utf8", "hex") + cipher.final("hex");

// Decrypt
const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage =
    decipher.update(encryptedMessage, "hex", "utf8") + decipher.final("utf8");


console.log(`Encrypted message: ${encryptedMessage.toString('utf8')}`);
console.log(`Dencrypted message: ${decryptedMessage.toString('utf8')}`);