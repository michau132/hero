import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  url = 'https://superheroapi.com/api/1462274070575584/'
  getHero(id) {
    return this.http.get(this.url + id);
  }
}
