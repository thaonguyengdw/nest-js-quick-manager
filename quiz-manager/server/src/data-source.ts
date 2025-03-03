import { DataSource } from 'typeorm';

export const dataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3310,
  database: 'quiz',
  username: 'mysql',
  password: 'mysql',
  migrations: [`${process.cwd()}/dist/migrations/**/*{.ts,.js}`],
  entities: [`${process.cwd()}/dist/modules/quiz/entities/*.entity{.ts,.js}`],
  //entities: [Quiz],
  synchronize: false,
};
export const dataSource = new DataSource(dataSourceOptions as any);
(async function () {
  await dataSource.initialize();
})();
