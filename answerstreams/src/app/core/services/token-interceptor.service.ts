import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { ActivatedRoute, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private route: ActivatedRoute) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    if (req.url.includes('forgot-password') || req.url.includes('reset-password') || req.url.includes('login') || req.url.includes('register')) {
      return next.handle(req);
    }
    else {
      if (token) {
        const cloned = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + token)
        });
        return next.handle(cloned);
      }
      else {
        return next.handle(req);
      }
    }


  }
}