import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private currentUserKey = 'CurrentUser';
  private loginStatusChanged = new EventEmitter<boolean>();

  login(username: string, password: string): boolean {
    if (username !== 'master8@lemoncode.net' || password !== '12345678')
      return false;

    localStorage.setItem(this.currentUserKey, username);
    this.notifyUserLogginStatus();
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
    this.notifyUserLogginStatus();
  }

  private notifyUserLogginStatus() {
    this.loginStatusChanged.emit(this.isLogged());
  }

  isLogged(): boolean {
    return !!localStorage.getItem(this.currentUserKey);
  }

  getUsername(): string {
    return localStorage.getItem(this.currentUserKey) ?? '';
  }

  getUserLoginEmitter = () => this.loginStatusChanged;
}
