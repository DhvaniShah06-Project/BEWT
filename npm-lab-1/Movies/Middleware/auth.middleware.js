var jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    try {
        // Allow login route without token
        if (req.url.toString().indexOf('login') > -1) {
            return next();
        }

        const authHeader = req.headers.authorization;

        // Check if header exists
        if (!authHeader) {
            return res.status(401).send({
                error: true,
                message: "Authorization header missing"
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).send({
                error: true,
                message: "Token missing"
            });
        }

        const decoded = jwt.verify(token, 'shhhhh');

        // Optional: attach user info to request
        req.user = decoded;

        next();

    } catch (err) {
        res.status(401).send({
            error: true,
            message: "Unauthorized"
        });
    }
}

module.exports = { authMiddleware };
