import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { Customers } from './customer.entity';
import { Notes } from './customer-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customers, Notes])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}

