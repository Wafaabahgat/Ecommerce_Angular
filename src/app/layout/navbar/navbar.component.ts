import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLogin: boolean = false;
  constructor(private authService: AuthService) {
    authService.userData.subscribe({
      next: () => {
        if (authService.userData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.authService.userData.next(null);
    alert('sure you want to logout!');
  }
}
