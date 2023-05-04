import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { UserAttributes, UserDocument } from '../models/user';
import AppConfig from "../config/appConfig";

const SALT_ROUNDS = 10;

class AuthService {
  async signUp(user: UserAttributes): Promise<UserDocument> {
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
    const newUser = new User({ ...user, password: hashedPassword });
    return await newUser.save();
  }

  async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return jwt.sign({ userId: user._id }, AppConfig.jwtSecret);
  }
}

export default new AuthService();