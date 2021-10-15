import IUser from "./Interface/IUser";

export default class User implements IUser {
    name: string;
    password: string;
    email: string;
    alias?: string;

}