import { type INestApplication, ConsoleLogger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export default async function boot(app: INestApplication<any>) {
  const logger = new ConsoleLogger('Boot');
  const config = await app.get(ConfigService);
  const port = config.get('port');
  return await app.listen(port, () => {
    logger.log(`Listening on port ${port}`);
  });
}
