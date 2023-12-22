import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private cookieService: CookieService) {
    console.log("From session service")
  }

  isLoggedIn(): void {
    // CookieService.
  }

  authenticateSession(): boolean {
    // For localhost, auto login
    // this.cookieService.set(
    //   "sdms.loginId",
    //   "dispatcher" + Math.floor(1000 + Math.random() * 9000) + "-hdb-admin"
    // ); // Replace second param with appropriate usename

    if (this.cookieService.get("sdms.loginId")) {
      localStorage.setItem("loginId", this.cookieService.get("sdms.loginId").split(';')[0]);
      localStorage.setItem(
        "sessionExpireTime",
        ((Date.now() / 1000) + 28800).toString()
      );
      return true;
    } else {
      localStorage.clear();
      this.redirectToSsoLogin();
      return false;
    }
  }

  redirectToSsoLogin(): void {
    var ssoLoginRedirectionDataObj = {
      event_type: "login"
    };
    // getSsoRedirectionUrl(ssoLoginRedirectionDataObj).then(
    //   function (rs) {
    //     var ssoRedirectionObj = rs;
    //     if (
    //       cmnSvc.isObjPresent(ssoRedirectionObj) &&
    //       cmnSvc.isObjPresent(ssoRedirectionObj.url)
    //     ) {
    //       $window.open(ssoRedirectionObj.url, "_self");
    //     }
    //   },
    //   function (err) {}
    // );
  }
}
