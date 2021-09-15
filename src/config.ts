import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export default () => {
  return {
    port: readEnvVar('PORT', 3000),
    orm: {
      type: 'mongo',
      host: readEnvVar('MONGO_HOST', 'localhost'),
      port: readEnvVar('MONGO_PORT', 3306),
      user: readEnvVar('MONGO_USER', 'root'),
      password: readEnvVar('MONGO_PASSWORD', '12345678'),
      dbName: readEnvVar('MONGO_DB_NAME', 'test'),
      entities: ['dist/**/*.entity.js'],
      entitiesTs: ['src/**/*.entity.ts'],
      debug: readEnvVar('MONGO_DEBUG', false),
      highlighter: new SqlHighlighter(),
      metadataProvider: TsMorphMetadataProvider,
    } as Options,
    // more config ...
  };
};
