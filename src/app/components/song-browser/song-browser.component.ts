import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SongItem, StepChart } from '../../models/song-item';
import { SearchService } from '../../services/search.service';

import dataFile from '../../../assets/data/songlist_xx.json';

@Component({
  selector: 'app-song-browser',
  templateUrl: './song-browser.component.html',
  styleUrls: ['./song-browser.component.css'],
})
export class SongBrowserComponent implements OnInit {

  MOBILE_WIDTH_TRESHOLD = 840;
  useMobileUI: boolean;

  isLoadingData: boolean;
  formattedSonglist: SongItem[] = [];
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
  displayedColumnsMobile: string[] = [
    'songName',
    'banner',
    'artist',
    'bpm',
    'chartList'
  ];

  length = 100;
  pageSize = 25;
  pageSizeOptions: number[] = [25, 50, 100];
  dataSource = new MatTableDataSource<SongItem>(this.formattedSonglist);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(searchService: SearchService) {
  }

  ngOnInit() {
    this.isLoadingData = true;
    this.loadSonglistData();
    this.isLoadingData = false;
    this.dataSource.paginator = this.paginator;

    this.useMobileUI = (window.innerWidth < this.MOBILE_WIDTH_TRESHOLD) ? true : false;
  }

  loadSonglistData() {
    dataFile.songlist.forEach(function(songData) {
      const songItem = new SongItem();
      songItem.id = songData.songID;
      songItem.songName = songData.songName;
      songItem.artist = songData.artist;
      songItem.bpm = songData.bpm;
      songItem.songType = songData.songType;
      songItem.version = songData.version;
      songItem.tags = songData.tags;

      const stepCharts: StepChart[] = [];
      songData.chartList.forEach((chartData) => {
        const chartItem = new StepChart();
        chartItem.chartType = chartData.chartType;
        if (chartItem.chartType === 'coop') {
          chartItem.players = chartData.players;
        } else {
          chartItem.level = chartData.level;
        }
        chartItem.tags = chartData.tags;

        stepCharts.push(chartItem);
      });
      songItem.chartList = stepCharts;

      this.formattedSonglist.push(songItem);
    }, this);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.useMobileUI = (event.target.innerWidth < this.MOBILE_WIDTH_TRESHOLD) ? true : false;
  }

}
