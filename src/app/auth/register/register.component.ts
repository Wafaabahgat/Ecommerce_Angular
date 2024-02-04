import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private _AuthService: AuthService,
    private Router: Router,
    private toastr: ToastrService
  ) {}
  isLoading: boolean = false;
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
    ]),
  });

  handleRegister(registerForm: FormGroup) {
    if (registerForm.valid) {
      this._AuthService.register(registerForm.value).subscribe({
        next: (response) => {
          if (response.msg === 'User Created Successfully') {
            this.isLoading = false;
            this.toastr.success('This is a success message', 'Success!');

            this.Router.navigate(['/login']);
          }
        },
        error: (err) => {
          this.isLoading = false;
        },
      });
    }
  }
}
