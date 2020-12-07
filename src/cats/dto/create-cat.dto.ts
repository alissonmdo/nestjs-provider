import { IsInt, IsString } from 'class-validator';
import { Cat } from '../entities/cat.entity';

export class CreateCatDto {
  constructor(cat: Cat) {
    this.id = cat.id;
    this.name = cat.name;
    this.age = cat.age;
    this.breed = cat.breed;
  }

  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
