import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FluentResult } from '../../../models/FluentResult';
import { SettingsService } from '../../../services/settings.service';


@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // **************************************************
  public constructor(
    private settings: SettingsService,
    private http: HttpClient
  ) {
    this.baseUrl = `${this.settings.mainUrl}News/`;
  }
  // **************************************************

  public baseUrl: string;

  // **************************************************
  // get request
  public findAllNews(): Observable<FluentResult> {
    return this.http.get<FluentResult>(this.baseUrl, this.settings.httpOption);
  }
  // **************************************************

  // **************************************************
  public findNewsById(id: number): Observable<FluentResult> {
    const url = `${this.baseUrl}${id}`;

    return this.http.get<FluentResult>(url, this.settings.httpOption);
  }
  // **************************************************

  // **************************************************
  public findAllNewsByCategoryId(categoryId: number): Observable<FluentResult> {
    const url = `${this.baseUrl}category/${categoryId}`;

    return this.http.get<FluentResult>(url, this.settings.httpOption);
  }
  // **************************************************

  // **************************************************
  public findInformationCategory(): Observable<FluentResult> {
    const url = `${this.baseUrl}category/Info`;

    return this.http.get<FluentResult>(url, this.settings.httpOption);
  }
  // **************************************************

  // **************************************************
  public getComponentModel_Latest(): Observable<FluentResult> {
    const url = `${this.baseUrl}category/sidbar/latest`;

    return this.http.get<FluentResult>(url, this.settings.httpOption);
  }
  // **************************************************

  // **************************************************
  public GetPostsByCountLike(): Observable<FluentResult> {
    const url = `${this.baseUrl}like`;

    return this.http.get<FluentResult>(url, this.settings.httpOption);
  }
  // **************************************************

  // **************************************************
  public GetPostsAvg(): Observable<FluentResult> {
    const url = `${this.baseUrl}AvgPost`;

    return this.http.get<FluentResult>(url, this.settings.httpOption);
  }
  // **************************************************

  // **************************************************
  public GetPostsHero(): Observable<FluentResult> {
    const url = `${this.baseUrl}Hero`;

    return this.http.get<FluentResult>(url, this.settings.httpOption);
  }
  // **************************************************

  // **************************************************
  public GetCommentsByPostId(postId: number): Observable<FluentResult> {
    const url = `${this.baseUrl}comment/${postId}`;

    return this.http.get<FluentResult>(url);
  }
  // **************************************************

  // **************************************************
  public UpdateViewForPost(postId: number): Observable<FluentResult> {
    const url = `${this.baseUrl}updateview/${postId}`;

    return this.http.get<FluentResult>(url);
  }
  // **************************************************


  // **************************************************
  public GetPostQuickAccessFooter(): Observable<FluentResult> {
    const url = `${this.baseUrl}footer/quick`;

    return this.http.get<FluentResult>(url);
  }
  // **************************************************


  // **************************************************
  public GetPostLastFooter(): Observable<FluentResult> {
    const url = `${this.baseUrl}footer/last`;

    return this.http.get<FluentResult>(url);
  }
  // **************************************************

}
