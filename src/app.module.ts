import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';

@Module({
  imports: [MikroOrmModule.forRoot(config().orm)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
