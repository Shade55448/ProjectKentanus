import { connect, model } from 'mongoose';
import IUser from '../Database/Entity/Interface/IUser';
import UserRepository from '../Database/Repository/UserRepository';
import userSchema from '../Database/Schema/Schema';

export default async function setServer(): Promise<void> {

    await connect('mongodb://localhost:27017/test');
    const a = new UserRepository(model<IUser>('User', userSchema()));

    const express = require('express')
    const app = express()

    app.use(express.json());

    app.get('/', function (req, res) {
        res.send('Hello World');
    })

    app.post('/register', async function (req, res) {
        const result = await a.registerUser(req.body);
        res.setHeader('content-type', 'application/json');

        let resultMessage = 'User was created';
        res.status(200);

        if (!result) {
            res.status(400);
            resultMessage = 'User was not created';
        }

        res.send(JSON.stringify({ message: resultMessage }));
    })

    app.listen(80);
    console.log('Server started');
}