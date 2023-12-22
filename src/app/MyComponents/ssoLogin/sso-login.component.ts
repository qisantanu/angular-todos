import { Component } from '@angular/core';
import { SessionService } from '../../services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sso-login',
  standalone: true,
  imports: [],
  templateUrl: './sso-login.component.html',
  styleUrl: './sso-login.component.css'
})
export class SsoLoginComponent {
  constructor(private sessionSvc: SessionService, private router: Router) {
    if (this.sessionSvc.authenticateSession()) {
      this.router.navigate(['/dashboard']);
    }
  }
}
