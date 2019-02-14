import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomNumberService } from './randomNumber.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    public http: HttpClient,
    private randomNumberService: RandomNumberService
  ) { }
  url = 'https://superheroapi.com/api/1462274070575584/';
  getHero(id) {
    return this.http.get(this.url + id);
  }

  generatePlayers() {
    const userId = this.randomNumberService.getRandom();
    let computerId = this.randomNumberService.getRandom();
    while (userId === computerId) {
      computerId = this.randomNumberService.getRandom();
    }

    return { userId, computerId };
  }
}
