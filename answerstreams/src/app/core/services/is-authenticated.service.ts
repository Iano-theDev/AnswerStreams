import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedService {

  constructor() { }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
