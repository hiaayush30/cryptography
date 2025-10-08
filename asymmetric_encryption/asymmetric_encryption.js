import { publicEncrypt, privateDecrypt } from "crypto";
import { privateKey, publicKey } from "./keypair.js"

const message = "more important stuff"

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
)

console.log(encryptedData.toString("hex"))

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
)
console.log(decryptedData.toString("utf-8"))
