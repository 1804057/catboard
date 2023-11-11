import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { CatPageComponent } from './components/cat-page/cat-page.component';
@NgModule({
  declarations: [
    AppComponent,
    CatCardComponent,
    CatPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
