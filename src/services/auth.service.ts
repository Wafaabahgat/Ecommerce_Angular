import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('userToken') !== null
    ) {
      this.decodeUseData();
    }
  }

  private url = 'https://estore.ammarelgendy.online/api/v1/';

  userData = new BehaviorSubject(null);

  decodeUseData() {
    let encodeToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodeToken: any = jwtDecode(encodeToken);
    this.userData.next(decodeToken);
  }

  register(userData: object): Observable<any> {
    return this._HttpClient.post(this.url + 'register', userData);
  }
  login(userData: object): Observable<any> {
    return this._HttpClient.post(this.url + 'login', userData);
  }
}
