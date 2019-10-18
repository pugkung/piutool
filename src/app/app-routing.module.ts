import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SongBrowserComponent } from './components/song-browser/song-browser.component';
import { RandomizerComponent } from './components/randomizer/randomizer.component';

export const routes: Routes = [
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
