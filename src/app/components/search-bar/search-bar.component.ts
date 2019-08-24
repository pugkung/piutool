import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { SongFilters } from '../../models/song-filter';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const chartTypesOptions = this.chartTypes.map(control => new FormControl({value: control.value, checked: true}));
    const songTypesOptions = this.songTypes.map(control => new FormControl({value: control.value, checked: true}));
    const songTagsOptions = this.songTags.map(control => new FormControl({value: control.value, checked: true}));

    this.searchForm = this.fb.group({
      songName: [''],
      chartTypes: new FormArray(chartTypesOptions),
      songTypes: new FormArray(songTypesOptions),
      songTags: new FormArray(songTagsOptions),
      levels: new FormControl([1, 28])
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
    console.log(this.searchForm);
  }

}
