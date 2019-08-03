import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SongBrowserComponent } from './song-browser/song-browser.component';
import { RandomizerComponent } from './randomizer/randomizer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'song-browser', component: SongBrowserComponent },
  { path: 'randomizer', component: RandomizerComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
