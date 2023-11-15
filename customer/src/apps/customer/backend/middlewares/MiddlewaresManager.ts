import { Application } from 'express';
import { MiddlewareAdapter } from '../../../../Contexts/Shared/infrastructure/api/MiddlewareAdapter';
import container from '../config/dependency-injection';

export class MiddlewaresManager {
  static run(app: Application): void {
    app.use(MiddlewareAdapter.handle(container.get('Apps.middlewares.CheckUserIdHeaderMiddleware')));
  }
}
