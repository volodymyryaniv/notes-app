import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Get()
  getAll() {
    return this.customerService.getList();
  }

  @Post() 
  addNewNote(@Body() data: CustomerDto) {
    return this.customerService.addNewNote(data);
  }
  
}
