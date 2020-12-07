import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from '../cats.controller';
import { CatsService } from '../cats.service';
import { Cat } from '../entities/cat.entity';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsService = moduleRef.get<CatsService>(CatsService);
    catsController = moduleRef.get<CatsController>(CatsController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result: Cat[] = [
        { name: 'Spooky', age: 0, breed: 'vira-lata' },
        { name: 'Mel', age: 12, breed: 'vira-lata' },
        { name: 'Garfield', age: 42, breed: 'vira-lata' },
      ];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
      expect(catsController.findAll()).toEqual(result);
    });
  });
});
