import User, { UserAttributes, UserDocument } from '../models/user';

class UserService {
  async createUser(user: UserAttributes): Promise<UserDocument> {
    const newUser = new User(user);
    return await newUser.save();
  }

  async findUserById(id: string): Promise<UserDocument | null> {
    return await User.findById(id);
  }

  async findUserByEmail(email: string): Promise<UserDocument | null> {
    return await User.findOne({ email });
  }

  async updateUserById(id: string, user: UserAttributes): Promise<UserDocument | null> {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUserById(id: string): Promise<UserDocument | null> {
    return await User.findByIdAndDelete(id);
  }
}