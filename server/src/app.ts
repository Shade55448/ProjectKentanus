import express from 'express';
import appConfig from './config/AppConfig';


const app : express.Application = express();

app.use(express.json());

app.listen(appConfig.port, appConfig.host, () => {
   console.log('Server listening at http://${appConfig.host}:${appConfig.port}')
});