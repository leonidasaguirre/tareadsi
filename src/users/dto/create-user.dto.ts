import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {

  @ApiProperty({ required: true, example: 'ruso_clutch' })
  name: string;
  @ApiProperty({ required: true, example: 'ruso@shein.com' })
  email: string;
  username: string;
  @ApiProperty({ required: true, example: '123' })
  password: string;
  @ApiProperty({ required: true, description: 'Tenant ID' })
  tenantId: number;
}


