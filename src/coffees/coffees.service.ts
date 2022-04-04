import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffes: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffes;
  }

  findOne(id: string) {
    const coffee = this.coffes.find((item) => item.id === +id);

    if (!coffee) {
      //   throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffes.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffes.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffes.splice(coffeeIndex, 1);
    }
  }
}
