import { Injectable } from '@angular/core';
import { BaseInterceptor } from './base.interceptor';

@Injectable()
export class CoreInterceptor extends BaseInterceptor
{
  constructor()
  {
    super();
  }
}
