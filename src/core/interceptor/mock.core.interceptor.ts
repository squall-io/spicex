import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseInterceptor } from './base.interceptor';

@Injectable()
export class CoreInterceptor extends BaseInterceptor
{
  constructor()
  {
    super();
  }

  public intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>
  {
    if ( !this.isTargetingAPI( request.url ) ) {
      return next.handle( request );
    }

    const url = request.url.replace( /^~api/, '' );

    throw new Error( `Not yet implemented external service at "~api${ url }"` );
  }
}
