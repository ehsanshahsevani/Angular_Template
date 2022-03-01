import { Injectable } from '@angular/core';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JWTService {
  jwtToken: string;
  decodedToken: { [key: string]: string };

  constructor() {}

  setToken(token: string): void {
    if (token) {
      this.jwtToken = token;
    }
  }

  getToken(): string {
    return this.jwtToken;
  }

  decodeToken(): any {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwt_decode(this.jwtToken);
  }

  getUserId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.nameid : null;
  }


  // getFullName(): string | null {
  //   this.decodeToken();
  //   let result = ``;
  //   if (this.decodeToken()) {
  //     if (this.getFirstName()) {
  //       result += this.getFirstName();
  //     }
  //     if (this.getLastName()) {
  //       result += ' ' + this.getLastName();
  //     }
  //     return result;
  //   }

  //   return this.decodedToken
  //     ? `${this?.decodedToken?.firstname} ${this?.decodedToken?.lastname}`
  //     : null;
  // }

  getFirstName(): string | null {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.firstname : null;
  }

  getLastName(): string | null {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.lastname : null;
  }

  getRoles(): string | null {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.role : null;
  }

  getExpiryTime(): string | null {
    this.decodeToken();
    const result = this.decodedToken ? this.decodedToken.exp : null;
    return result;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = Number(this.getExpiryTime());
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }

  public IsAuthenticated(): boolean {

    if (this.getToken() === null ||
     this.getToken() === undefined || this.getToken() === '') {
      return false;
    }

    return true;
  }

  public isAdmin(): boolean {
    const roles = this.getRoles();

    if (roles === null || roles === undefined) {
      return false;
    }

    if ((typeof roles).toString() === 'string') {
      if (roles.toString().trim().toLowerCase() === 'admin') {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    } else {
      // if ((typeof roles).toString().toLowerCase() === 'object') {
      for (let index = 0; index < roles.length; index++) {
        const role = roles[index];
        if (role.toString().trim().toLowerCase() === 'admin') {
          console.log(true);
          return true;
        }
      }
    }
    return true;
  }

  public clearToken(): boolean {
    if (this.isTokenExpired() === true) {
      localStorage.removeItem('token');
      return true;
    }
    return false;
  }

  public deleteToken(): void {
    this.jwtToken = '';
  }

}
