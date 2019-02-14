import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userScore = 0;
  computerScore = 0;
  hidden: boolean;
  statement: string;
  userHeroId: number;
  computerHeroId: number;
  constructor(private heroService: HeroService) { }

  userHero: any;
  computerHero: any;

  ngOnInit() {
    this.playRound();
  }

  generateHeroId(): number {
    const randomNumber = Math.floor(Math.random() * 731) + 1;
    if (randomNumber === this.userHeroId) {
      return this.generateHeroId();
    }
    return randomNumber;
  }

  chosenAbility(userAbility) {
    console.log(userAbility);
    console.log(this.computerHero);
    if (!this.hidden) {
      return this.statement = 'Click Next Oponent Button!';
    }
    const computerValue = this.computerHero.powerstats[userAbility.name];
    const { userValue } = userAbility;
    if (computerValue > userValue) {
      this.computerScore++;
      this.hidden = false;
      this.statement = 'Computer won';
    } else if (computerValue < userValue) {
      this.userScore++;
      this.hidden = false;
      this.statement = 'You won';
    } else {
      this.hidden = false;
      this.statement = 'A tie, no one won';
    }
  }



  playRound() {
    this.hidden = true;
    this.statement = 'Choose your ability';
    this.userHeroId = this.generateHeroId();
    this.heroService.getHero(this.userHeroId).subscribe(hero => this.userHero = hero);

    this.computerHeroId = this.generateHeroId();
    this.heroService.getHero(this.computerHeroId).subscribe(hero => this.computerHero = hero);
  }

}
