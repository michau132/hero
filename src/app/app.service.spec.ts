import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });
    service = TestBed.get(AppService)
    httpMock = TestBed.get(HttpTestingController)

  });

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retirve hero from the api', () => {
    const hero = {
      powerstats: {
        durability: 99,
        strength: 0,
        speed: 12,
        power: 45,
        intelligence: 32,
        combat: 78
      },
      name: 'Goku',
      image: {}
    };

    service.getHero('1').subscribe(heroFromApi => {
      console.log(heroFromApi)
      expect(heroFromApi.name).toBe('Goku')
      expect(heroFromApi).toBe(hero)
    })
    // const request = httpMock.expectOne(`${service.url}/1`);

    // expect(request.request.method).toBe('GET')
    // request.flush(hero)
  })

});
