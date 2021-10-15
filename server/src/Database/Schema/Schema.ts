import { Schema } from "mongoose";
import User from "../Entity/User";

export default function userSchema(): Schema {
    return new Schema<User>({
        name: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true }
    })
}