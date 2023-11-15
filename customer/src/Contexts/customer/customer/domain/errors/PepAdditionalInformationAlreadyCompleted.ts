import { ApplicationError } from '../../../../Shared/domain/ApplicationError';

export class PepAdditionalInformationAlreadyCompleted extends ApplicationError {
  constructor() {
    super('Requerimiento pep ya completado', 'PEP_ALREADY_COMPLETED');
  }
}
