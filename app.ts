import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import apiController from './routes/apiController';

import { connect } from './database/index';

dotenv.config();

const app: express.Application = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect(false).then(() => console.log('데이터베이스와 성공적으로 연결되었습니다.'));

app.use('/api', apiController);

export default app;
