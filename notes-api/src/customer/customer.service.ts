import { CustomerDto } from './dto/customer.dto';
import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Notes } from "./customer-note.entity";
import { Customers } from "./customer.entity";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customers)
    private customersRepository: Repository<Customers>,
    @InjectRepository(Notes)
    private notesRepository: Repository<Notes>,
  ){}

  getList(): Promise<Customers[]> {
    const list = this.customersRepository.find({
      relations:{
        notes: true,
      }
    });
    return list;
  }

  async addNewNote(@Body() data: CustomerDto) {
    const newCustomer = await this.customersRepository.save(data.customer);
    this.notesRepository.save({... data.note, id_customer: newCustomer.id})
  }
}
