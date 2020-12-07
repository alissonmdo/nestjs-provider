import { Test, TestingModule } from '@nestjs/testing';
import { GreetingsController } from './greetings.controller';
import { GreetingsService } from './greetings.service';

describe('GreetingsController', () => {
  let greetingController: GreetingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreetingsController],
      providers: [GreetingsService],
    }).compile();

    greetingController = module.get<GreetingsController>(GreetingsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(greetingController.getHello()).toBe('Hello World!');
    });
  });
});
