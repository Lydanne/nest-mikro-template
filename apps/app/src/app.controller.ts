import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostHelloDto } from './app.dto';
import { ApiAuth } from '@app/boot/api-auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiAuth()
  @Post('hello')
  postHello(@Body() dto: PostHelloDto): string {
    return JSON.stringify(dto);
  }
}
