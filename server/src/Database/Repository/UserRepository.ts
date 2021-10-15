import { Response } from "express";
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

    public async findByUser(user: User): Promise<User | undefined> {
        const existedUser = await this.userModel.findOne({ name: user.name });
        if (existedUser) {
            return existedUser as User;
        }
        return undefined;
    }
}