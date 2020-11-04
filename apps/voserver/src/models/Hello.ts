import { ApiProperty } from '@nestjs/swagger';

export class Hello {
  @ApiProperty()
  message: string;
}
