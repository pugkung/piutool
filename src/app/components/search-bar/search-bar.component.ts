import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { SearchService } from '../../services/search.service';
import { SongFilters } from '../../models/song-filter';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

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
    const songFilters =  this.prepareSearchFilter(this.searchForm);
    this.searchService.updateSearchFilter(songFilters);
  }

  prepareSearchFilter(formData: FormGroup) {
    const newSearchFilter = new SongFilters();

    newSearchFilter.songName = formData.value.songName;
    newSearchFilter.minLevel = formData.value.levels[0];
    newSearchFilter.maxLevel = formData.value.levels[1];

    newSearchFilter.single = formData.value.chartTypes.find(item => item.value === 'single') ? true : false;
    newSearchFilter.double = formData.value.chartTypes.find(item => item.value === 'double') ? true : false;
    newSearchFilter.singlePerformance = formData.value.chartTypes.find(item => item.value === 'singlePerformance') ? true : false;
    newSearchFilter.doublePerformance = formData.value.chartTypes.find(item => item.value === 'doublePerformance') ? true : false;
    newSearchFilter.coop = formData.value.chartTypes.find(item => item.value === 'coop') ? true : false;

    newSearchFilter.arcade = formData.value.songTypes.find(item => item.value === 'arcade') ? true : false;
    newSearchFilter.fullsong = formData.value.songTypes.find(item => item.value === 'fullsong') ? true : false;
    newSearchFilter.remix = formData.value.songTypes.find(item => item.value === 'remix') ? true : false;
    newSearchFilter.shortcut = formData.value.songTypes.find(item => item.value === 'shortcut') ? true : false;

    newSearchFilter.original = formData.value.songTags.find(item => item.value === 'original') ? true : false;
    newSearchFilter.kpop = formData.value.songTags.find(item => item.value === 'kpop') ? true : false;
    newSearchFilter.world = formData.value.songTags.find(item => item.value === 'world') ? true : false;
    newSearchFilter.jmusic = formData.value.songTags.find(item => item.value === 'jmusic') ? true : false;
    newSearchFilter.xross = formData.value.songTags.find(item => item.value === 'xross') ? true : false;
    newSearchFilter.unlock = formData.value.songTags.find(item => item.value === 'unlock') ? true : false;

    return newSearchFilter;
  }
}
