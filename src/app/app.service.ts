import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  userHero;
  computerHero;
  userHeroStream$ = new Subject();
  computerHeroStream$ = new Subject();
  constructor(private http: HttpClient) {

   }

  getHero() {
    const randNumber = Math.floor(Math.random() * 731) + 1;
    return this.http.get(`https://superheroapi.com/api/1462274070575584/${randNumber}`);
  }

  fetchUserHero() {
    this.getHero().subscribe(hero => {
      this.userHero = hero;
      this.userHeroStream$.next(hero);
    });
  }

  convertNullToNumber(param) {
    let type = param;
    if (type === 'null') {
      type = 0;
    }
    return type;
  }

  fetchComputerHero() {
    this.getHero().subscribe(hero => {
      this.computerHero = hero;
      this.computerHeroStream$.next(hero);
    });
  }

  getUserHeroStream() {
    return this.userHeroStream$;
  }
  getComputerHeroStream() {
    return this.computerHeroStream$;
  }
}
