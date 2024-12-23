import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootModule } from '@app/boot';
import AppConfig from './config/app.config';

@Module({
  imports: [BootModule.forRoot({ loadConfig: [AppConfig] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
