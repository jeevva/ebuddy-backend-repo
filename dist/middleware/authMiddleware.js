"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    // Simplified validation for the example
    if (token !== 'valid-token') {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    next();
};
exports.authMiddleware = authMiddleware;
