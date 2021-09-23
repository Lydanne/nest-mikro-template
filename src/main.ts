import './boot/env';
import hmr from './boot/hmr';
import swagger from './boot/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: false }));

  swagger(app);
  hmr(app);

  const port = config().port;
  await app.listen(port, () => {
    console.log(`runtime: listen ${port}, env ${env()}`);
  });
}
bootstrap();
