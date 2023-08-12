# Node Cryptography

_This repo contains a brief description and basic implementation of some of the most common cryptographic concepts, built with Node's crypto module_

### Cryptography
Cryptography is the practice of techniques used to secure communication and protect information from unauthorized access or tampering. It involves transforming plaintext (original data) into ciphertext (encrypted data) using various algorithms and keys. The recipient of the ciphertext can then use a decryption process to transform it back into plaintext, as long as they possess the appropriate decryption key.

The following concepts form the foundational elements of modern cryptography and are used to ensure the confidentiality, integrity, and authenticity of data and communication in various applications.

1. **Hash**:
  A hash function is a mathematical algorithm that takes an input (message or data) and produces a fixed-size string of characters, which is typically a hexadecimal number. Hash functions are used for various purposes, including data integrity verification, password storage, and digital signatures. A key feature of hash functions is that even a small change in the input data should result in a significantly different output (hash). Common hash functions include SHA-1, and SHA-256.

2. **Salt**:
  A salt is a random value added to data before it is hashed. Salting is primarily used in password hashing to prevent attacks like rainbow tables, where precomputed hash values are compared against stolen password hashes. Salting ensures that even if two users have the same password, their hash values will be different due to the unique salts. This adds an extra layer of security to password storage.

3. **HMAC (Hash-Based Message Authentication Code)**:
  HMAC is a construction that uses a cryptographic hash function and a secret key to verify the integrity and authenticity of a message. It combines the input data with the secret key and produces a hash value. HMAC is commonly used in various protocols, such as securing network communications and ensuring data integrity in digital signatures, like with Jason Web Tokens.

4. **Symmetric Encryption**:
  Symmetric encryption is a cryptographic technique where the same secret key is used for both encryption and decryption of data. It requires securely sharing the key between the communicating parties. The encryption is typically randomized, so that each time you encrypt, you get a different output, even though the key and message are the same. AES (Advanced Encryption Standard) is a well-known symmetric encryption algorithm.

5. **Keypairs**:
  Keypairs refer to the pair of cryptographic keys used in asymmetric encryption systems. One key is the public key, which is openly shared, while the other is the private key, which is kept secret. Data encrypted with the public key can only be decrypted with the corresponding private key, and vice versa. Keypairs are used for secure communication, digital signatures, and identity verification. RSA (Rivest-Shamir-Adleman) is the most common algorithm used for keypairs.

6. **Signing**:
  In cryptography, signing refers to the process of creating a digital signature using a private key. A digital signature provides authentication and data integrity, ensuring that a message or document has not been tampered with and originates from a specific sender. The recipient can use the corresponding public key to verify the signature's authenticity.

7. **Asymmetric Encryption**:
  Asymmetric encryption, also known as public-key encryption, involves using a pair of distinct but mathematically related keys: a public key and a private key. Data encrypted with the public key can only be decrypted with the corresponding private key, and vice versa. Asymmetric encryption is widely used for secure key exchange, digital signatures, and securing communications over untrusted networks.
