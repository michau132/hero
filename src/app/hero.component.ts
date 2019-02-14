import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-hero',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}}</h2>
      <img class="image" [src]="hero.image.url" />
      <ul>
        <li
          *ngFor="let stat of objectKeys(hero.powerstats)"
          [ngClass]="{'hidden': hidden}"
          (click)="chooseAbility({name: stat, userValue: hero.powerstats[stat]})"
        >
          {{stat}} : {{hero.powerstats[stat]}}
        </li>
      </ul>
    </div>
  `,
  styles: [`
  .image {
    width: 150px;
    height: 150px;
  }
  li {
    cursor: pointer;
  }
  li:hover {
    background: coral;
  }
  .hidden {
    display: none;
  }
  `]
})
export class HeroComponent implements OnInit {
  objectKeys = Object.keys;
  @Input() hero: any;
  @Input() hidden;
  @Output() chosenAbility = new EventEmitter();
  @Input() statement;



  chooseAbility(val) {
    this.chosenAbility.emit(val);
  }

  constructor() { }

  ngOnInit() {
  }


}
