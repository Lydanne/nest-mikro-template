import { Module } from '@nestjs/common';
import { BootService } from './boot.service';
import { ConfigModule, type ConfigFactory } from '@nestjs/config';

@Module({})
export class BootModule {
  static forRoot(opts: {
    loadConfig: Array<ConfigFactory | Promise<ConfigFactory>>;
  }) {
    return {
      global: true,
      module: BootModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ['.env'],
          load: opts.loadConfig,
        }),
      ],
      providers: [BootService],
      exports: [BootService],
    };
  }
}
