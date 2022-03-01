import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// import { RequestLogin } from './../../_models/RequestLogin';
// import { FluentResult } from './../../_models/FluentResult';

// import * as ResponseLogin from '../../_models/ResponseLogin';

// import * as RequestRegister from '../../_models/RequestRegister';
// import * as ResponseRegister from '../../_models/ResponseRegister';


import { SettingsService } from './settings.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { LoginViewModel } from 'src/app/_models/Authentication/LoginViewModel';
//import { RegisterViewModel } from 'src/app/_models/Authentication/RegisterViewModel';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private setting: SettingsService) { }

  public baseUrl = `${this.setting.mainUrl}Authentication/`;

  // **************************************************
  // register ...
  //public register(
  //  model: RegisterViewModel
  //): Observable<FluentResult> {
  //  const url = `${this.baseUrl}Register`;
  //  return this.http.post<FluentResult>(url, model).pipe();
  //}
  // **************************************************

  // **************************************************
  // login ...
  //public login(model: LoginViewModel): Observable<FluentResult> {
  //  const url = `${this.baseUrl}Login`;
  //  return this.http.post<FluentResult>(url, model).pipe();
  //}
  // **************************************************

  // **************************************************
  // // Log out ...
  // public logOut(userId: number): Observable<FluentResult> {
  //   const url = `${this.baseUrl}logOut/${userId}`;
  //   return this.http.get<FluentResult>(url).pipe();
  // }
  // **************************************************

  // **************************************************
  // get user by id
  //public getUserById(id: number): Observable<FluentResult> {
  //  const url = `${this.baseUrl}${id}`;
  //  return this.http.get<FluentResult>(url).pipe();
  //}
  // **************************************************
}
