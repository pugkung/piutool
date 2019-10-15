import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SongFilters } from '../models/song-filter';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchFilter: SongFilters = new SongFilters();
  searchSubject = new BehaviorSubject(this.searchFilter);

  constructor() { }

  updateSearchFilter(newSearch: SongFilters) {
    this.searchFilter = newSearch;
    this.searchSubject.next(this.searchFilter);
  }
}
