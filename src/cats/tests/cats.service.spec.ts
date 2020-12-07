import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from '../cats.service';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from '../entities/cat.entity';

describe('CatsService', () => {
  let service: CatsService;
  let cats: Cat[] = [];

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = moduleRef.get<CatsService>(CatsService);
    cats = [
      { id: 1, name: 'Spooky', age: 0, breed: 'vira-lata' },
      { id: 2, name: 'Mel', age: 12, breed: 'vira-lata' },
      { id: 3, name: 'Garfield', age: 42, breed: 'vira-lata' },
    ];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a cat and return it', async () => {
      expect(service.create(new CreateCatDto(cats[0]))).toMatchObject(cats[0]);
    });
  });

  describe('findOne', async () => {
    it('should return undefined', () => {
      expect(service.findOne(1)).toBeUndefined();
    });

    it('should return cat with id 1', () => {
      cats.forEach((cat) => {
        service.create(new CreateCatDto(cat));
      });
      expect(service.findOne(1)).toStrictEqual(
        cats.find((cat) => cat.id === 1),
      );
    });

    it('should return cat with id 3', () => {
      cats.forEach((cat) => {
        service.create(new CreateCatDto(cat));
      });
      expect(service.findOne(3)).toStrictEqual(
        cats.find((cat) => cat.id === 3),
      );
    });

    it('should return undefined', () => {
      cats.forEach((cat) => {
        service.create(new CreateCatDto(cat));
      });
      expect(service.findOne(7)).toBeUndefined();
    });
  });

  describe('findAll', async () => {
    it('should return empty array', () => {
      expect(service.findAll()).toStrictEqual([]); //  ?
    });

    it('should return array with three cats', () => {
      cats.forEach((cat) => {
        service.create(new CreateCatDto(cat));
      });
      expect(service.findAll());
    });
  });

  // describe('findAll', () => {
  //   it('should return an array of cats', async () => {
  //     const result: Cat[] = [
  //       { name: 'Spooky', age: 0, breed: 'vira-lata' },
  //       { name: 'Mel', age: 12, breed: 'vira-lata' },
  //       { name: 'Garfield', age: 42, breed: 'vira-lata' },
  //     ];
  //     jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
  //     expect(catsController.findAll()).toStrictEqual(result);
  //   });
  // });
});
