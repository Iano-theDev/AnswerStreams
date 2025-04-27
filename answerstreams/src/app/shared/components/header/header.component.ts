import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { IsAuthenticatedService } from 'src/app/core/services/is-authenticated.service';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private loginService: LoginService, private isAuthenticated: IsAuthenticatedService, private router: Router) { }

  loggedIn: boolean = false;

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
  
  ngOnInit(): void {
    this.loggedIn = this.isAuthenticated.isAuthenticated();
  }

  ngOnChanges(): void {
    this.loggedIn = this.isAuthenticated.isAuthenticated();
  }

  ngDoCheck(): void {
    this.loggedIn = this.isAuthenticated.isAuthenticated();
  }

}
