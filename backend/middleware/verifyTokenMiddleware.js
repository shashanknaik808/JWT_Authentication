const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "No token found" });
    }
    jwt.verify(token, JWT_SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.status(401).json({ message: "Invalid Token" });
        }
        req.id = decoded.id;
        next();
    });
};

module.exports = verifyToken;
