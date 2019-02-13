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
          (click)="chooseAbility('combat', hero.powerstats.combat)"
          [ngClass]="{'visible': endOfMatch}"
        >
          Combat: {{hero.powerstats.combat }}
        </li>
        <li
          (click)="chooseAbility('combat', hero.powerstats.durability)"
          [ngClass]="{'visible': endOfMatch}"
        >
          durability: {{hero.powerstats.durability }}
        </li>
        <li
          (click)="chooseAbility('intelligence', hero.powerstats.intelligence)"
          [ngClass]="{'visible': endOfMatch}"
        >
          intelligence: {{hero.powerstats.intelligence }}
        </li>
        <li
          (click)="chooseAbility('power', hero.powerstats.power)"
          [ngClass]="{'visible': endOfMatch}"
        >
          power: {{hero.powerstats.power }}
        </li>
        <li
          (click)="chooseAbility('speed', hero.powerstats.speed)"
          [ngClass]="{'visible': endOfMatch}"
        >
          speed: {{hero.powerstats.speed }}
        </li>
        <li
          (click)="chooseAbility('strength', hero.powerstats.strength)"
          [ngClass]="{'visible': endOfMatch}"
        >
          strength: {{hero.powerstats.strength }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
  .image {
    width: 150px;
    height: 150px;
  }
  `]
})
export class HeroComponent implements OnInit {
  @Input() hero;
  @Input() endOfMatch;
  @Output() chosenAbility = new EventEmitter();

  chooseAbility(name, val) {
    this.chosenAbility.emit('aaaa');
  }

  constructor() { }

  ngOnInit() {
  }


}
