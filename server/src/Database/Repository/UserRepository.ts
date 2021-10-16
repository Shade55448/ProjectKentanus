import { Response } from "express";
import Token from "../../Token/Token";
import User from "../Entity/User";

export default class UserRepository {
    constructor(private userModel: any) {
    }

    public async registerUser(user: User, res: Response): Promise<void> {
        res.setHeader('content-type', 'application/json');

        res.status(400);
        let resultMessage = 'User was not created';

        const existedUser = await this.findByUser(user);
        if (existedUser === undefined) {
            const newUser = new this.userModel(user);
            await newUser.save();
            res.status(200);
            resultMessage = 'User was created';
        }

        res.send(JSON.stringify({ message: resultMessage }));
    }

    public async login(user: User, res: Response): Promise<void> {
        res.setHeader('content-type', 'application/json');
        let resultData: object = { message: 'Wrong credentials' };
        res.status(400);

        const logUser = await this.findByUser(user);
        if (logUser.password === user.password) {
            const token = new Token().getToken(user);
            res.status(200);
            resultData = {
                message: 'Logged!',
                name: user.name,
                token
            };
            logUser.token = token;
            await this.userModel.updateOne(logUser);
        }
        res.send(JSON.stringify(resultData));
    }

    public async findByUser(user: User): Promise<User | undefined> {
        const existedUser = await this.userModel.findOne({ name: user.name });
        if (existedUser) {
            return existedUser as User;
        }
        return undefined;
    }
}