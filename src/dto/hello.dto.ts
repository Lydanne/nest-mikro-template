import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class HelloDto {
  /**
   * 传入字符串
   */
  @IsString()
  foo: string = 'hello';

  /**
   * 传入数字
   */
  @IsNumber()
  boo?: number;
}
