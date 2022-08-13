import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customers } from './customer.entity';

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  until: string;

  @Column({ default: false })
  done: boolean;

  @Column()
  id_customer: number;

  @ManyToOne(() => Customers, (customer) => customer.notes)
  @JoinColumn({ name: 'id_customer' })
  customer: Customers;
}
