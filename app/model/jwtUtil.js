const jwt = require('jsonwebtoken');
const fs = require('fs');

module.exports = {
    signJwt: function(email) {
        var payload = { Email: email };
        var privateKey = fs.readFileSync('lib/Keys/private.key', "utf8");

        var signOptions = {
            expiresIn: "12h",
            algorithm: "RS256"
        };
        var token = jwt.sign(payload, privateKey, signOptions);
        return token;
    },

    verifyJwt: function(token) {
        var publicKey = fs.readFileSync('lib/Keys/public.key', "utf8");
        var verifyOptions = {
            expiresIn: "12h",
            algorithm: ["RS256"]
        };

        try {
            return jwt.verify(token, publicKey, verifyOptions);
        } catch (err) {
            return false
        }

    }
};