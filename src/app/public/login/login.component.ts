import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  userControl: FormControl;
  passwordControl: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.initLoginForm();
  }

  initLoginForm() {
    this.userControl = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]);
    this.passwordControl = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);

    this.loginForm = this.formBuilder.group({
      user: this.userControl,
      password: this.passwordControl,
    });
  }

  ngOnInit(): void {}

  login() {
    if (!this.loginForm.valid) return;

    const loginResult = this.authService.login(
      this.userControl.value,
      this.passwordControl.value
    );
    if (loginResult) {
      this.router.navigate(['/dashboard']);
    }
  }
}
