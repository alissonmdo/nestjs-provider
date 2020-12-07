import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingsService {
  getHello(): string {
    return 'Hello World!';
  }
}
