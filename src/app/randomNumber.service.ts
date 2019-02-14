import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {
  getRandom() {
    return Math.floor(Math.random() * 731) + 1;
  }
}
