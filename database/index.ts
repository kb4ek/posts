import * as config from '../config/config.json';
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  host: config.host,
  dialect: 'mysql',
  database: config.database,
  username: config.username,
  password: config.password,
});

export async function connect(force: boolean) {
  try {
    await sequelize.addModels([__dirname + '/models/*.ts']);
    await sequelize.sync({ force });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export const models = sequelize.model;
