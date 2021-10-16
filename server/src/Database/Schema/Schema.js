"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function userSchema() {
    return new mongoose_1.Schema({
        name: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        token: { type: String, required: true }
    });
}
exports.default = userSchema;
//# sourceMappingURL=Schema.js.map