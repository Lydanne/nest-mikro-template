/**
 * 该配置只在使用MikroCLI的时候生效
 */
import './src/boot/env';
import config from './src/config';

export default {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  ...config().orm,
};
