import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { Logger } from '@nestjs/common';

const logger = new Logger('MikroORM');

export default () => {
  return {
    port: e('PORT', 3000),
    orm: {
      type: 'mongo',
      clientUrl: e('MONGO_CLIENT_URL', 'mongodb://localhost/hello-nest'),
      debug: e('MONGO_DEBUG', false),
      highlighter: new SqlHighlighter(),
      metadataProvider: TsMorphMetadataProvider,
      autoLoadEntities: true,
      logger: logger.log.bind(logger),
    } as MikroOrmModuleSyncOptions,
    // more config ...
  };
};
