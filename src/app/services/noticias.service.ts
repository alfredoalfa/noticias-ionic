import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
    'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  headLinesPage = 0;

  constructor( private http: HttpClient ) { }

  private requestQuery<T>( query: string ) {
    query = apiUrl + query;

    return this.http.get<T>( query, { headers });
  }

  getTopHeadLines() {
    this.headLinesPage++;
    return this.requestQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&page=${this.headLinesPage}`);
  }

  getTopHeadLinesCategoria( categoria: string ) {
    return this.requestQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}`);
  }
}
