"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const SECRET = 'losos-key';
class Token {
    getToken(user) {
        return jwt.sign({ foo: 'bar' }, SECRET);
    }
}
exports.default = Token;
//# sourceMappingURL=Token.js.map