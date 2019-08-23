import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { SongFilters } from '../song-filter';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const chartTypesOptions = this.chartTypes.map(control => new FormControl());
    const songTypesOptions = this.songTypes.map(control => new FormControl());
    const songTagsOptions = this.songTags.map(control => new FormControl());

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
    { name: "Single", value: "single", checked: true },
    { name: "Double", value: "double", checked: true },
    { name: "Single Performance", value: "singlePerformance", checked: true },
    { name: "Double Performance", value: "doublePerformance", checked: true },
    { name: "CO-OP", value: "coop" }
  ];

  songTypes = [
    { name: "Arcade", value: "arcade", checked: true },
    { name: "Full Song", value: "fullsong", checked: true },
    { name: "Remix", value: "remix", checked: true },
    { name: "Shortcut", value: "shortcut", checked: true }
  ];

  songTags = [
    { name: "Original", value: "original", checked: true },
    { name: "K-Pop", value: "kpop", checked: true },
    { name: "World", value: "world", checked: true },
    { name: "J-Music", value: "jmusic", checked: true },
    { name: "Xross", value: "xross", checked: true },
    { name: "Unlock", value: "unlock", checked: true, disabled: true }
  ];

  ngOnInit() {
    this.filters = new SongFilters();
  }

  onSubmit() {
    console.log(this.searchForm);
  }

}
