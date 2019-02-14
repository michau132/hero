import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <main *ngIf="hero">
      <h2>{{hero.name}}</h2>
      <img class="image" [src]="hero.image.url" />
      <ul>
        <li
          class="hero"
          *ngFor="let stat of objectKeys(hero.powerstats)"
          [ngClass]="{'hidden': hidden}"
          (click)="chooseAbility({name: stat, userValue: hero.powerstats[stat]})"
        >
          {{stat}} : {{hero.powerstats[stat]}}
        </li>
      </ul>
    </main>
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



  chooseAbility(val) {
    this.chosenAbility.emit(val);
  }

  constructor() { }

  ngOnInit() {
  }


}
