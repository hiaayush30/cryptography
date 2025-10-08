import crypto, { createDecipheriv, randomBytes } from "crypto"

const message = "very important stuff"
const key = randomBytes(32)
const iv = randomBytes(16)
// iv => initialization vector
// will randomize the output when encrypted so identical sequence of text will not give same ciphertext


const cipher = crypto.createCipheriv("aes256", key, iv)

//encrypt
const encryptedMessgae = cipher.update(message, "utf-8", "hex") + cipher.final("hex")
// after calling cipher.final() the cipher can no longer be used to encrypt data

//decrypt
const decipher = createDecipheriv("aes256", key, iv)
const decryptedMessage = decipher.update(encryptedMessgae, "hex", "utf-8") + decipher.final("utf-8")
console.log(decryptedMessage)