import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material-module.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpClientModule,
  MaterialModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
