import { BaseUseCase } from '../../../../Shared/application/BaseUseCase';
import { CustomerRepository } from '../../domain/CustomerRepository';

interface Request {
  email: string;
  password: string;
}


export class CreateCustomer extends BaseUseCase<Request, void> {
  constructor(private readonly repository: CustomerRepository) {
    super();
  }

  async run(request: Request): Promise<void> {
    await this.repository.save(request)
  }
}
