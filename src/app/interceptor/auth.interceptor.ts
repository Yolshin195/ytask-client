import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.auth.authenticated) {
      const authToken = this.auth.getAuthorizationToken();

      const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });

      return next.handle(authReq);
    }
  
    return next.handle(req);
  }
}
