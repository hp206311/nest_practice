import { User } from 'src/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSouceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'nest_practice',
  entities: ['dist/src/**/entities/*.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSouceOptions);
export default dataSource;
