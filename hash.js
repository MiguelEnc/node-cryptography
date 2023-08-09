const { createHash } = require('crypto');

// Hashing function, using the sha256 algorithm and producing Hexagecimal result format
function hash(input) {
  return createHash('sha256').update(input).digest('hex');
}

let password = 'HelloWorld!';
const hash1 = hash(password);
console.log(hash1);

// Minimal changes in input produces completely different results
password = 'HelloWorld';
const hash2 = hash(password);
console.log(hash2);

const match = hash1 === hash2;
console.log(match ? 'Passwords match' : 'Passwords does not match');