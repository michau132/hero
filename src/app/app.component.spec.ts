import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';
import { Observable } from 'rxjs';




describe('AppComponent', () => {
  let fixture;
  let component;
  let HeroSerivceTest;
  let heroServiceSpy;
  beforeEach(async(() => {
    HeroSerivceTest = jasmine.createSpyObj('HeroService', ['getHero']);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeroComponent
      ],
      imports: [BrowserModule],
      providers: [{ provide: HeroService, useValue: HeroSerivceTest }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    heroServiceSpy = HeroSerivceTest.getHero.and.returnValue(new Observable());
  });

  it('should be defined', () => {
    console.log(component);
    expect(component).toBeDefined();
  });

  it('should call method playRound on ngOnInit', () => {
    spyOn(component, 'playRound');
    fixture.detectChanges();
    expect(component.playRound).toHaveBeenCalled();
  });

  it('should call playRound when clicked on button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    spyOn(component, 'playRound');
    button.triggerEventHandler('click', null);
    expect(component.playRound).toHaveBeenCalled();
  });

  it('should call HeroServiceTest method gethero', () => {
    component.playRound();
    expect(heroServiceSpy).toHaveBeenCalled();
  });



});
