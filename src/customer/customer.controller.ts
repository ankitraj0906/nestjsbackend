import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  getCustomer() {
    return this.customerService.getAllCustomer();
  }

  @Post()
  addCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.addCustomer(createCustomerDto);
  }
}
