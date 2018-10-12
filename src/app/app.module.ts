import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
// Angular GoogleMaps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3YEpy9U6VHrfsE-aUZ_HLrxJ6cBTT_zM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
