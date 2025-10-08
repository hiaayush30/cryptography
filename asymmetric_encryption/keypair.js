import crypto from "crypto"

const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048, // the length of your key in bits
    publicKeyEncoding: {
        type: "spki", // recommended by Node.js docs
        format: "pem" //privacy enhanced main
    },
    privateKeyEncoding: {
        type: "pkcs8", // recommended by Node.js docs
        format: "pem",
        // passphrase:"top secret" 
    }
});

export { publicKey, privateKey }
