import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent', () => {
  let fixture;
  let comp;
  let heroDe;
  let heroEl;
  let expectedHero;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HeroComponent);
    comp = fixture.componentInstance;

    // find the hero's DebugElement and element
    heroDe = fixture.debugElement.query(By.css('.hero'));
    heroEl = heroDe.nativeElement;

    // mock the hero supplied by the parent component
    expectedHero = { hero: { id: 42, name: 'Test Name' } };

    // simulate the parent setting the input property with that hero
    comp.hero = expectedHero;

    // trigger initial data binding
    fixture.detectChanges();
  }

  ));



  it('Setting enabled to false disabled the submit button', () => {
    console.log(comp)
  });

  // it(`should have as title 'heroApp'`, () => {
  //   const fixture = TestBed.createComponent(HeroComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('heroApp');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(HeroComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to heroApp!');
  // });
});
