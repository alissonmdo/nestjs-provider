import { Controller, Get } from '@nestjs/common';
import { GreetingsService } from './greetings.service';

@Controller()
export class GreetingsController {
  constructor(private readonly greetingsService: GreetingsService) {}

  @Get()
  getHello(): string {
    return this.greetingsService.getHello();
  }
}
