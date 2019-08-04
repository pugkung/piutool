import { Component, OnInit } from '@angular/core';
import { SongFilters } from '../song-filter';
import { SongItem, StepChart } from '../song-item';

import dataFile from '../../assets/data/songlist_xx.json';

@Component({
  selector: 'song-browser',
  templateUrl: './song-browser.component.html',
  styleUrls: ['./song-browser.component.css']
})
export class SongBrowserComponent implements OnInit {

  isLoadingData: boolean;
  formattedSonglist: SongItem[] = [];
  filters: SongFilters;
  levels = [1, 28];

  displayedColumns: string[] = [
    'songName',
    'banner',
    'artist',
    'bpm',
    'songType',
    'version',
    'tags',
    'chartList'
  ];
  dataSource = this.formattedSonglist;

  constructor() {
    
  }

  ngOnInit() {
    this.isLoadingData = true;
    this.filters = new SongFilters();
    this.loadSonglistData();
    this.isLoadingData = false;
  }

  loadSonglistData() {
    dataFile.songlist.forEach(function (songData) {
      var songItem = new SongItem();
      songItem.id = songData.songID;
      songItem.songName = songData.songName;
      songItem.artist = songData.artist;
      songItem.bpm = songData.bpm;
      songItem.songType = songData.songType;
      songItem.version = songData.version;
      songItem.tags = songData.tags;
      
      var stepCharts: StepChart[] = [];
      songData.chartList.forEach(function (chartData) {
        var chartItem = new StepChart();
        chartItem.chartType = chartData.chartType;
        if (chartItem.chartType == "coop") {
          chartItem.players = chartData.players;
        }
        else {
          chartItem.level = chartData.level;
        }
        chartItem.tags = chartData.tags;

        stepCharts.push(chartItem);
      });
      songItem.chartList = stepCharts;

      this.formattedSonglist.push(songItem);
    }, this);
  }

}
