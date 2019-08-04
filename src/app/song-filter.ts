export class SongFilters {
    // chart types
    single: boolean;
    double: boolean;
    singlePerformance: boolean;
    doublePerformance: boolean;
    coop: boolean;

    // song types
    arcade: boolean;
    fullsong: boolean;
    remix: boolean;
    shortcut: boolean;
  
    // song tags
    original: boolean;
    kpop: boolean;
    world: boolean;
    jmusic: boolean;
    xross: boolean;
    unlock: boolean;

    constructor() {
        this.single = true;
        this.double = true;
        this.singlePerformance = true;
        this.doublePerformance = true;
        this.coop = false;

        this.arcade = true;
        this.fullsong = true;
        this.remix = true;
        this.shortcut = true;

        this.original = true;
        this.kpop = true;
        this.world = true;
        this.jmusic = true;
        this.xross = true;
        this.unlock = true;
    }
}