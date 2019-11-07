import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { FireAuthService } from './fire-auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class FireAuthInterceptor implements HttpInterceptor { 

  constructor(public auth: FireAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.auth.idToken);
    
    if (this.auth.idToken) {
      request = request.clone({ setHeaders: { 'BetApp-auth': `${this.auth.idToken}` } });
    }
    return next.handle(request);
  }
}
