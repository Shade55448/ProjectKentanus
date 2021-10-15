"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserRepository_1 = require("../Database/Repository/UserRepository");
const Schema_1 = require("../Database/Schema/Schema");
function setServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)('mongodb://localhost:27017/test');
        const a = new UserRepository_1.default((0, mongoose_1.model)('User', (0, Schema_1.default)()));
        const express = require('express');
        const app = express();
        app.use(express.json());
        app.get('/', function (req, res) {
            res.send('Hello World');
        });
        app.post('/register', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield a.registerUser(req.body);
                res.setHeader('content-type', 'application/json');
                let resultMessage = 'User was created';
                res.status(200);
                if (!result) {
                    res.status(400);
                    resultMessage = 'User was not created';
                }
                res.send(JSON.stringify({ message: resultMessage }));
            });
        });
        app.listen(80);
        console.log('Server started');
    });
}
exports.default = setServer;
//# sourceMappingURL=Server.js.map