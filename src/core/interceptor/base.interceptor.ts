import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export abstract class BaseInterceptor implements HttpInterceptor
{
  protected constructor()
  {
  }

  public intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>
  {
    if ( this.isTargetingAPI( request.url ) ) {
      request = request.clone( {
        url: request.url.replace( /^~api/, environment.endpoints?.api ),
      } );
    }
    return next.handle( request );
  }

  protected isTargetingAPI( url: string ): boolean {
    return url.startsWith( '~api' );
  }
}
