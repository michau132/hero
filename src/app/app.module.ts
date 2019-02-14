import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent} from './hero.component';
import { RandomNumberService } from './randomNumber.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HeroService,
    RandomNumberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
