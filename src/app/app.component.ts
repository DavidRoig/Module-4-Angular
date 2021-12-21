import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mini-aplicacion';

  isUserLogged: boolean;

  constructor(private authService: AuthService) {
    this.isUserLogged = this.authService.isLogged();

    this.authService.getLoginStatusSubject().subscribe(this.setUserLoginStatus);
  }

  setUserLoginStatus = (isUserLogged: boolean) => {
    this.isUserLogged = isUserLogged;
  };
}
