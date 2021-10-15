import { Schema } from "mongoose";
import IUser from "../Entity/Interface/IUser";

export default function userSchema(): Schema {
    return new Schema<IUser>({
        name: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true }
    })
}