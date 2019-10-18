export class SongFilters {
    songName: string;
    levels: number[];

    chartTypes: string[];
    songTypes: string[];
    songTags: string[];

    constructor() {
        this.songName = '';
        this.levels = [1, 28];

        this.chartTypes = [];
        this.songTypes = [];
        this.songTags = [];
    }
}
