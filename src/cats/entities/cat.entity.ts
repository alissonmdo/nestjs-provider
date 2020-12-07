import { ApiProperty } from '@nestjs/swagger';

export class Cat {
  @ApiProperty({ example: 1, description: 'The id of the cat' })
  id: number;

  @ApiProperty({ example: 'Spooky', description: 'The name of the cat' })
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;
}
