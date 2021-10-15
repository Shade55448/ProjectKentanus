import IUser from "../Entity/Interface/IUser";

export default class UserRepository {
    constructor(private userModel: any){
    }

    public async registerUser(user: IUser): Promise<boolean> {
        const existedUser = await this.findByUser(user);
        if (existedUser === undefined) {
            const newUser = new this.userModel(user);
            await newUser.save();
            return true;
        }
        return false;
    }

    public async findByUser(user: IUser): Promise<IUser | undefined> {
        const existedUser = await this.userModel.findOne({ name: user.name });
        if (existedUser) {
          return existedUser as IUser;
        }
        return undefined;
    }
}