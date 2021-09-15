import { Module } from '@nestjs/common';
import { ApiSdkService } from './api-sdk.service';

@Module({
  providers: [ApiSdkService],
  exports: [ApiSdkService],
})
export class ApiSdkModule {}
