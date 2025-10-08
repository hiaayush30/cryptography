import crypto, { sign, verify } from "crypto"

// hashing
// output is called a hash or digest
function hash(input) {
    return crypto.createHash("sha256").update(input).digest("hex")
}

// console.log(hash("Aayush"))

// salting
function signup(email, password) {
    const salt = crypto.randomBytes(16).toString("hex")
    const hashedPass = crypto.scryptSync(password, salt, 64).toString("hex")
    // store in db as password:"hashedPass:salt"
    return hashedPass + ":" + salt
}

function login(email, password, hashedPass) { // hashedPass will come from db
    // generate a new hash with the same salt but with the password entered by the user and compare it
    // with the original
    const [key, salt] = hashedPass.split(":")
    const hashedBuffer = crypto.scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, "hex")
    const match = crypto.timingSafeEqual(hashedBuffer, keyBuffer);
    // compares two values (buffers) in a constant-time way — meaning it takes the same amount of time no matter how similar or different the inputs are.
    return match;
}

const hashedPass = signup("aayush@gmail.com", "pass123")
console.log(login("aayush@gmail.com", "pass123", hashedPass))