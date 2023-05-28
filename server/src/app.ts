import express from 'express';
import appConfig from './config/AppConfig';
import routes from './router/routes'


const app : express.Application = express();

app.use(express.json());
app.use('/api', routes);

app.listen(appConfig.port, () => {
   console.log(`Server listening at http://${appConfig.host}:${appConfig.port}`)
});