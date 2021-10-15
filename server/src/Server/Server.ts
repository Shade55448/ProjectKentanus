import { connect, model } from 'mongoose';
import User from '../Database/Entity/User';
import UserRepository from '../Database/Repository/UserRepository';
import userSchema from '../Database/Schema/Schema';

export default async function setServer(): Promise<void> {

    await connect('mongodb://localhost:27017/kentanus');
    const a = new UserRepository(model<User>('User', userSchema()));

    const express = require('express')
    const app = express()

    app.use(express.json());

    app.get('/', function (req, res) {
        res.send('Hello World');
    });

    app.post('/register', async function (req, res) {
        a.registerUser(req.body, res);
    })

    app.listen(8080);
    console.log('Server started');
}