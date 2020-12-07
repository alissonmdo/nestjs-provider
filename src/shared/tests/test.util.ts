import { Cat } from 'src/cats/entities/cat.entity';

export default class TestUtil {
  static giveMeAvalidCat(): Cat {
    const cat = new Cat();
    cat.age = 0;
    cat.breed = 'none';
    cat.name = 'Spooky';
    return cat;
  }
}
