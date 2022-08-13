import { CustomerNoteDto } from "./customer-note.dto";

export class CustomerDto extends CustomerNoteDto {
  readonly customer: {
      name: string;
      email: string;
  };
}