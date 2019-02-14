import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userScore: number = 0;
  computerScore: number = 0;
  hidden: boolean = true;
  statement: string = 'Choose your ability';
  userHeroId: number;
  computerHeroId: number;
  constructor(private appService: AppService) { }

  userHero: any;
  computerHero: any = {
    powerstats: {
      durability: 99,
      strength: 0,
      speed: 12,
      power: 45,
      intelligence: 32,
      combat: 78
    },
    image: {}
  };

  ngOnInit() {
    this.userHeroId = this.generateHeroId();
    this.appService.getHero(this.userHeroId).subscribe(hero => this.userHero = hero);

    this.computerHeroId = this.generateHeroId();
    this.appService.getHero(this.computerHeroId).subscribe(hero => this.computerHero = hero);
  }

  generateHeroId(): number {
    const randomNumber = Math.floor(Math.random() * 731) + 1;
    if (randomNumber === this.userHeroId) {
      console.log('jestes')
      return this.generateHeroId()
    }
    return randomNumber
  }

  chosenAbility(userAbility) {
    if (!this.hidden) {
      return this.statement = 'Click Next Oponent Button!'
    }
    const computerValue = this.computerHero.powerstats[userAbility.name];
    const { userValue } = userAbility;
    if (computerValue > userValue) {
      this.computerScore++
      this.hidden = false;
      this.statement = "Computer won"
    } else if (computerValue < userValue) {
      this.userScore++
      this.hidden = false;
      this.statement = "You won"
    } else {
      this.hidden = false;
      this.statement = "A tie, no one won"
    }
  }

  playAnotherRound() {
    this.hidden = true;
    this.statement = 'Choose your ability';
    this.userHeroId = this.generateHeroId();
    this.appService.getHero(this.userHeroId).subscribe(hero => this.userHero = hero);

    this.computerHeroId = this.generateHeroId();
    this.appService.getHero(this.computerHeroId).subscribe(hero => this.computerHero = hero);
  }

}
