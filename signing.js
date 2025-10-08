import { createSign, createVerify } from "crypto"
import { privateKey, publicKey } from "./asymmetric_encryption/keypair.js"

const message = "This message must be signed"

// sign

const signer = createSign("rsa-sha256")
signer.update(message)

const signature = signer.sign(privateKey, "hex")
// now you can send message along with signature to anyone

// verify

const verifier = createVerify("rsa-sha256");
verifier.update(message)
const isVerified = verifier.verify(publicKey, signature, "hex")
console.log(isVerified)