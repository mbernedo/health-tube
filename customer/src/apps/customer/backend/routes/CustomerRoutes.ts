import { Router } from 'express';
import container from '../config/dependency-injection';
import { BaseRouter } from '../../../../Contexts/Shared/infrastructure/api/BaseRouter';
import { ControllerAdapter } from '../../../../Contexts/Shared/infrastructure/api/ControllerAdapter';
import { MiddlewareAdapter } from '../../../../Contexts/Shared/infrastructure/api/MiddlewareAdapter';

export default class CustomerRoutes extends BaseRouter {
  protected BASE_PATH = '/customer';

  protected handler(router: Router): void {
    this.post({
      router,
      route: ControllerAdapter.handle(container.get('Apps.controllers.CreateCustomerPostController')),
      middlewares: [
        MiddlewareAdapter.handle(container.get('Apps.middlewares.CheckUserIdHeaderMiddleware'))
      ],
      url: '/:id'
    });
  }
}
