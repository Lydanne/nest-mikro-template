import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';

export default () => {
  return {
    port: e('PORT', 3000),
    orm: {
      type: 'mongo',
      host: e('MONGO_HOST', 'localhost'),
      port: e('MONGO_PORT', 27017),
      user: e('MONGO_USER', 'root'),
      password: e('MONGO_PASSWORD', ''),
      dbName: e('MONGO_DB_NAME', 'test'),
      entities: ['dist/**/*.entity.js'],
      entitiesTs: ['src/**/*.entity.ts'],
      debug: e('MONGO_DEBUG', false),
      highlighter: new SqlHighlighter(),
      metadataProvider: TsMorphMetadataProvider,
      autoLoadEntities: true,
    } as MikroOrmModuleSyncOptions,
    // more config ...
  };
};
