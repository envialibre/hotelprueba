import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HotelService } from './services/hotel.service';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './layouts/default/default.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
