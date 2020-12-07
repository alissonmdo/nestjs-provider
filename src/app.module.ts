import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { GreetingsModule } from './greetings/greetings.module';

@Module({
  imports: [CatsModule, GreetingsModule],
})
export class AppModule {}
