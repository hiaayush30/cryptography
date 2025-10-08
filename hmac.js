import crypto from "crypto"


const key = "my_Secret_key"
const message = "hello there"

const hmac = crypto.createHmac("sha256", key).update(message).digest("hex")
// different key will give different hash
console.log(hmac)