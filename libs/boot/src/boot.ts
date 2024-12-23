import {
  type INestApplication,
  ConsoleLogger,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { swagger } from './swagger';

export default async function boot(app: INestApplication<any>) {
  const logger = new ConsoleLogger('Boot');
  const config = await app.get(ConfigService);
  const port = config.get('port');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  swagger(app);
  return await app.listen(port, () => {
    logger.log(`Listening on port ${port}`);
  });
}
