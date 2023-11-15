import { Response } from 'express';
import { BaseController } from '../../../../../../Contexts/Shared/infrastructure/api/BaseController';
import { CreateCustomer } from '../../../../../../Contexts/customer/customer/application/create/CreateCustomer';
import { HttpRequest } from '../../../../../../Contexts/Shared/domain/HttpRequest';
import { ApplicationError } from 'Contexts/Shared/domain/ApplicationError';

export class CreateCustomerPostController extends BaseController {
  constructor(private readonly service: CreateCustomer) {
    super();
  }
  async handle(httpRequest: HttpRequest, httpResponse: Response): Promise<void> {
    try {
      httpRequest.body.customerId = httpRequest.userId;
      await this.service.run({ ...httpRequest.body });
      this.created(httpResponse);
    } catch (error) {
      this.fail(httpResponse, error as ApplicationError);
    }
  }
}
