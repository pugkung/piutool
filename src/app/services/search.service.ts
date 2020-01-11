import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SongFilters } from '../models/song-filter';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchFilter: SongFilters = new SongFilters();
  searchSubject = new Subject();

  constructor() { }

  updateSearchFilter(newSearch: SongFilters) {
    this.searchFilter = newSearch;
    this.searchSubject.next(this.searchFilter);
  }

  searchSongName(arr, part) {
    part = part.toLowerCase();
    return arr.filter(a => a.songName.toLowerCase().indexOf(part) !== -1);
  }

  filterSongType(arr, songTypes) {
    return arr.filter(a => songTypes.indexOf(a.songType) >= 0);
  }

  filterSongTag(arr, tags) {
    // return arr.filter(a=>tags.includes(a.tags));
    return arr.filter((song) => {
      let matched = false;
      song.tags.forEach(songTag => {
        if (tags.indexOf(songTag) >= 0) {
          matched = true;
        }
      });
      return matched;
    });
  }

  searchChart(arr, types, level) {
    if (arr.length === 0) {
      return [];
    }

    const results = [];

    // search stepchart for each type
    arr.forEach((song) => {
      const matchedChartList = [];
      types.forEach((type) => {
        const filteredList = song.chartList.filter(a =>
          a.chartType === type &&
          a.level >= level[0] &&
          a.level <= level[1]);
        if (filteredList.length > 0) {
          matchedChartList.push(filteredList);
        }
      });

      if (matchedChartList.length > 0) {
        const resultSong = Object.assign({}, song);
        // flatten into single array of array -> flat level array
        const resultchartList = [];
        matchedChartList.forEach((resultListForEachChartType) => {
          resultListForEachChartType.forEach((individualChart) => {
            resultchartList.push(individualChart);
          });
        });
        resultSong.chartList = resultchartList;
        results.push(resultSong);
      }
    });

    if (types.includes('coop')) {
      arr.forEach((song) => {
        const filteredList = song.chartList.filter(a => a.chartType === 'coop');
        if (filteredList.length > 0) {
          // look for song in result list, push new one if not match
          const existingSong = results.filter(a => a.id === song.id);
          if (existingSong.length > 0) {
            existingSong[0].chartList.push(filteredList[0]);
          } else {
            const resultSong = Object.assign({}, song);
            resultSong.chartList = filteredList;
            results.push(resultSong);
          }
        }
      });
    }

    return results;
  }
}
