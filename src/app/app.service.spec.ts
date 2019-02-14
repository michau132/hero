import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeroService', () => {
  let injector;
  let service: HeroService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });
    injector = getTestBed();
    service = injector.get(HeroService);
    httpMock = injector.get(HttpTestingController);

  });

  // afterEach(() => {
  //   httpMock.verify();
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // it('should retirve hero from the api', () => {
  //   const hero = {
  //     powerstats: {
  //       durability: 99,
  //       strength: 0,
  //       speed: 12,
  //       power: 45,
  //       intelligence: 32,
  //       combat: 78
  //     },
  //     name: 'Goku',
  //     image: {}
  //   };
  //   service.getHero('1').subscribe((heroFromApi: any) => {
  //     console.log('aaa');
  //     expect(heroFromApi.name).toBe('asdasda');
  //     expect(heroFromApi).toBe(hero);
  //   });
  //   // const request = httpMock.expectOne(`${service.url}/1`);

  //   // expect(request.request.method).toBe('GET');
  //   // request.flush(hero);
  // });

});
