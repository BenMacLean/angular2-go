import { NgModule, provide } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent }   from './app.component';
// import './shared/rxjs-extensions';
import { routing } from './app.routing';
import { CharacterService } from './character.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  declarations: [AppComponent],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
