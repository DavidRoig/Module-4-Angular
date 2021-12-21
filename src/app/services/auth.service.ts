import { Injectable } from '@angular/core';
import { delay, Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  private currentUserKey = 'CurrentUser';
  private loginStatusSubject = new Subject<boolean>();

  getLoginStatusSubject = () => this.loginStatusSubject;

  login(username: string, password: string): Observable<boolean> {
    if (username !== 'master8@lemoncode.net' || password !== '12345678')
      return of(false).pipe(delay(2000));

    return of(true).pipe(delay(2000));
  }

  createUserSession(username: string) {
    localStorage.setItem(this.currentUserKey, username);
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
    this.notifyUserLoginStatus();
    this.router.navigate(['/login']);
  }

  notifyUserLoginStatus = () => {
    this.loginStatusSubject.next(this.isLogged());
  };

  isLogged(): boolean {
    return !!localStorage.getItem(this.currentUserKey);
  }

  getUsername(): string {
    return localStorage.getItem(this.currentUserKey) ?? '';
  }
}
