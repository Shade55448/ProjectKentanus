import { Document, Schema, model } from 'mongoose';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export interface UserAttributes {
  username: string;
  email: string;
  password: string;
  fullName: string;
  gender: Gender

}

export interface UserDocument extends UserAttributes, Document {}

const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String },
  gender: { type: String, enum: Object.values(Gender) },
}, { timestamps: true });

const User = model<UserDocument>('User', userSchema);

export default User;