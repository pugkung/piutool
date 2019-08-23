import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NouisliderModule } from 'ng2-nouislider';

import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { SongBrowserComponent } from './song-browser/song-browser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomizerComponent,
    SongBrowserComponent,
    NavbarComponent,
    HomeComponent,
    SearchBarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
