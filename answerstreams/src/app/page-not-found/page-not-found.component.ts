import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
    <h1 style="font-size: 48px; margin-bottom: 16px;">Page Not Found</h1>
    <p style="font-size: 24px; margin-bottom: 32px;">Sorry, the page you are looking for does not exist.</p>
    <button style="padding: 16px 32px; font-size: 24px; background-color: #0077ff; color: #fff; border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s ease-in-out;"
            (click)="goToHomePage()">Go to homepage</button>
  </div>
`,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  constructor(private router: Router) {}

  goToHomePage(): void {
    this.router.navigateByUrl('/');
  }

}
