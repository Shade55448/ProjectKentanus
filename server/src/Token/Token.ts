import User from "../Database/Entity/User";
const jwt = require('jsonwebtoken');

const SECRET = 'losos-key';

export default class Token {
    public getToken(user: User): string {
        return jwt.sign({ foo: 'bar' }, SECRET);
    }
}