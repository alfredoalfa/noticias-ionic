import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getHeadLines() {
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/everything?q=bitcoin&from=
    2019-10-06&sortBy=publishedAt&apiKey=8c0bdd7ba2fa4ae1b075792c11fa39fc`);
  }
}
