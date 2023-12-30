export class SongItem {
    id: number;
    songName: string;
    artist: string;
    bpm: number | number[];
    songType: string;
    version: string;
    tags: string[];
    chartList: StepChart[];
}

export class StepChart {
    chartType: string;
    level: number;
    players: number;
    tags: string[];
    // TODO - Add Youtube embed for chart videos
    ytId: string;
}
