const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

const users = [];

function signup(email, password) {
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = scryptSync(password, salt, 64).toString("hex");

    // example of user object to be stored on database
    const user = { email, password: `${salt}:${hashedPassword}` };
    users.push(user);
    return user;
}

function login(email, password) {
    const user = users.find((u) => u.email === email);
    const [salt, key] = user.password.split(":");
    const hashedBufer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, "hex");
    const match = timingSafeEqual(keyBuffer, hashedBufer);

    console.log(
        match
            ? "Passwords match. Login Success"
            : "Passwords does not match. Login Failed"
    );
}

signup("dummyemail@email.com", "HelloWorld_123!");
login("dummyemail@email.com", "HelloWorld_123!");
