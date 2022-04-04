import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Res() response, @Query() paginationQuey) {
    // const { limit, offset } = paginationQuey;
    // response
    //   .status(200)
    //   .send(
    //     `This action return all caffees. Limit ${limit}, offset: ${offset}`,
    //   );

    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() createCoffeeDtop: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDtop);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDtop: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDtop);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
