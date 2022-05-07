import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { SearchService } from '../../services/search.service';
import { SongFilters } from '../../models/song-filter';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  randomMode: boolean;

  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private searchService: SearchService) {
    const chartTypesOptions = this.chartTypes.map(control => new FormControl({value: control.value, checked: true}));
    const songTypesOptions = this.songTypes.map(control => new FormControl({value: control.value, checked: true}));
    const songTagsOptions = this.songTags.map(control => new FormControl({value: control.value, checked: true}));

    this.searchForm = this.fb.group({
      songName: [''],
      chartTypes: new FormArray(chartTypesOptions),
      songTypes: new FormArray(songTypesOptions),
      songTags: new FormArray(songTagsOptions),
      levels: new FormControl([1, 28]),
      randomCount: 1
    });
  }

  filters: SongFilters;

  chartTypes = [
    { name: 'Single', value: 'single' },
    { name: 'Double', value: 'double' },
    { name: 'Single Performance', value: 'singlePerformance' },
    { name: 'Double Performance', value: 'doublePerformance' },
    { name: 'CO-OP', value: 'coop' }
  ];

  songTypes = [
    { name: 'Arcade', value: 'arcade' },
    { name: 'Full Song', value: 'fullsong' },
    { name: 'Remix', value: 'remix' },
    { name: 'Shortcut', value: 'shortcut' }
  ];

  songTags = [
    { name: 'Original', value: 'original' },
    { name: 'K-Pop', value: 'kpop' },
    { name: 'World', value: 'world' },
    { name: 'J-Music', value: 'jmusic' },
    { name: 'Xross', value: 'xross' },
    { name: 'Unlock', value: 'unlock' }
  ];

  ngOnInit() {
    this.filters = new SongFilters();
  }

  onSubmit() {
    const songFilters =  this.prepareSearchFilter(this.searchForm);
    this.searchService.updateSearchFilter(songFilters);
  }

  prepareSearchFilter(formData: FormGroup) {
    const newSearchFilter = new SongFilters();

    newSearchFilter.songName = formData.value.songName;
    newSearchFilter.levels = formData.value.levels;

    let index = 0;
    formData.value.chartTypes.forEach( (chartType) => {

      if (chartType.value) {
        newSearchFilter.chartTypes.push(chartType.value);
      } else if (chartType) {
        newSearchFilter.chartTypes.push(this.chartTypes[index].value);
      }
      index++;
    });

    index = 0;
    formData.value.songTypes.forEach( (songType) => {
      if (songType.value) {
        newSearchFilter.songTypes.push(songType.value);
      } else if (songType) {
        newSearchFilter.songTypes.push(this.songTypes[index].value);
      }
      index++;
    });

    index = 0;
    formData.value.songTags.forEach( (songTag) => {
      if (songTag.value) {
        newSearchFilter.songTags.push(songTag.value);
      } else if (songTag) {
        newSearchFilter.songTags.push(this.songTags[index].value);
      }
      index++;
    });

    newSearchFilter.randomCount = formData.value.randomCount;

    return newSearchFilter;
  }
}
