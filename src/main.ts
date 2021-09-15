import './boot/env';
import hmr from './boot/hmr';
import swagger from './boot/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');

  app.setGlobalPrefix('/api');
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  swagger(app);
  hmr(app);

  await app.listen(port, () => {
    console.log(`runtime: listen ${port}, env ${env()}`);
  });
}
bootstrap();
