import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    ButtonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
