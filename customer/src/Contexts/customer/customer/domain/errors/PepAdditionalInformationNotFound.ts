import { ApplicationError } from '../../../../Shared/domain/ApplicationError';

export class PepAdditionalInformationNotFound extends ApplicationError {
  constructor() {
    super('No existe información pep', 'NOT_FOUND');
  }
}
