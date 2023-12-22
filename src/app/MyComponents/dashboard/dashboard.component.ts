import { Component } from '@angular/core';
import { SessionService } from '../../services/session/session.service';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Check user is logged in or not
  constructor(private sessionSvc: SessionService, private cookieService: CookieService, private router: Router) {
    const cookieValue = this.cookieService.get('sdms.loginId');

    if (cookieValue) {
      console.log("cookie present");
      this.router.navigate(['/dashboard']);
    } else {
      console.log("cookie present");
      this.router.navigate(['/sso-login']);
    }
  }
}
