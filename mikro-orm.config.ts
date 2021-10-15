import './src/boot/env';
import config from './src/config';

export default {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  ...config().orm,
};
