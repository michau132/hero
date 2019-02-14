import { TestBed, async } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

import { By } from '@angular/platform-browser';

describe('HeroComponent', () => {
  let fixture;
  let component;
  let expectedHero;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;

    // pretend that it was wired to something that supplied a hero
    expectedHero = { name: 'Goku', powerstats: { strength: 32, intelligence: 30 }, image: { url: 'https://via.placeholder.com/150' } };
    component.hero = expectedHero;
    fixture.detectChanges(); // trigger initial data binding
  });



  it('should render hero.name as Goku ', () => {
    expect(component.hero.name).toBe('Goku');
  });

  it('should render hero.image as https://via.placeholder.com/150 ', () => {
    expect(component.hero.image.url).toBe('https://via.placeholder.com/150');
  });

  it('should fire on click event', () => {
    let selectedHero;
    const heroElement = fixture.debugElement.query(By.css('.hero'));
    component.chosenAbility.subscribe(hero => selectedHero = hero);
    heroElement.triggerEventHandler('click', null);
    expect(selectedHero).toEqual({ name: 'strength', userValue: 32 });
  });

  describe('checking heroes list elements', () => {
    let allHerosElements;
    beforeEach(() => {
      allHerosElements = fixture.debugElement.query(By.all()).nativeElement.querySelectorAll('.hero');
    });

    it('should list all hero powerstats ', () => {
      expect(allHerosElements).toBeDefined();
      expect(allHerosElements.length).toBe(2);
    });

    it('should have hidden class when is computer', () => {
      component.hidden = true;
      fixture.detectChanges();
      expect(allHerosElements[0].classList.contains('hidden')).toBeTruthy();
    });

  });
});
