import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  public httpOption = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };

  public mainUrl =  'https://localhost:44335/';

}
