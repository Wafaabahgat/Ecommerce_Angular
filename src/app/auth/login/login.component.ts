import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private toastr: ToastrService
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
    ]),
  });

  handleLogin(loginForm: FormGroup) {
    if (loginForm.valid) {
      this._AuthService.login(loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('userToken', response.token);
          // this._AuthService.decodeUseData();
          if (response.msg === 'Login Successfully') {
            this.toastr.success('Login Successfully');

            this._Router
              .navigate(['/home'])
              .then(() => window.location.reload());
          }
        },
        error: (err) => {
          console.log(`Error ${err}`);
          this.toastr.success('Login not Successfully');
        },
      });
    }
  }
}
