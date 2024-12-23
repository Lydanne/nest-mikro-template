import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import boot from '@app/boot/boot';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await boot(app);
}
bootstrap();
