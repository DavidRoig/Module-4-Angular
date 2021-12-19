import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-navbar',
  templateUrl: './private-navbar.component.html',
  styleUrls: ['./private-navbar.component.scss'],
})
export class PrivateNavbarComponent implements OnInit {
  currentUserName: string;

  constructor(private authService: AuthService) {
    this.currentUserName = this.authService.getUsername();
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
