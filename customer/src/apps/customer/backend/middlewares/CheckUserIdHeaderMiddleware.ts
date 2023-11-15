import { HttpResponseCodes } from '../../../../Contexts/Shared/domain/HttpResponse';
import { BaseMiddleware } from '../../../../Contexts/Shared/infrastructure/api/BaseMiddleware';
import { HttpRequest } from '../../../../Contexts/Shared/domain/HttpRequest';
import { NextFunction, Response } from 'express';

export default class CheckUserIdHeaderMiddleware extends BaseMiddleware {
  async handle(request: HttpRequest, response: Response, next: NextFunction): Promise<void> {
    const userId = request.headers?.['User-Id'] || request.headers?.['user-id'];
    if (!userId) {
      return this.fail(response, {
        statusCode: HttpResponseCodes.unauthorized,
        name: 'INVALID_USERID',
      });
    }
    request.userId = userId;
    this.success(next);
  }
}
