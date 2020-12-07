import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(catDto: CreateCatDto): Cat {
    const catEntity: Cat = {
      id: catDto.id,
      name: catDto.name,
      breed: catDto.breed,
      age: catDto.age,
    };
    this.cats.push(catEntity);
    const storedCat = this.cats.find((cat) => cat.id === cat.id);
    return storedCat;
  }

  findOne(id: number): Cat {
    return this.cats.find((cat) => cat.id === id);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
