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
class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    registerUser(user, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.setHeader('content-type', 'application/json');
            res.status(400);
            let resultMessage = 'User was not created';
            const existedUser = yield this.findByUser(user);
            if (existedUser === undefined) {
                const newUser = new this.userModel(user);
                yield newUser.save();
                res.status(200);
                resultMessage = 'User was created';
            }
            res.send(JSON.stringify({ message: resultMessage }));
        });
    }
    findByUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const existedUser = yield this.userModel.findOne({ name: user.name });
            if (existedUser) {
                return existedUser;
            }
            return undefined;
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map