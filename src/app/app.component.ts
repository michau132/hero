import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userScore = 0;
  computerScore = 0;
  endOfMatch = true;
  constructor(private appService: AppService) {}

  userHero: any;
  computerHero: any;

  ngOnInit() {
    this.appService.getHero().subscribe(hero => this.userHero = hero);
    this.appService.getHero().subscribe(hero => this.computerHero = hero);
  }
  a(adr) {
    console.log(adr);
  }
}
