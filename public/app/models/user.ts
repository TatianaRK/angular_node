import {Client} from "./client";

export class User {
    public loginuser: string;
    public password: string;
    public role: string = 'user';
    public client: Client;
    constructor () {}
}