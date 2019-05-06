function searchSongName(arr, part) {
    part = part.toLowerCase();
    return arr.filter(a=>a.songName.toLowerCase().indexOf(part) !== -1);
}

function searchChart(arr, types, level) {
    if (arr.length == 0) {
        return [];
    }

    var results = [];
    if (types.includes("coop")) {
        arr.forEach(function(song) {
            var filteredList = song.chartList.filter(a=>a.chartType=="coop");
            if (filteredList.length > 0) {
                var resultSong = Object.assign({},song);
                resultSong.chartList = filteredList;
                results.push(resultSong);
            }
        });
    }
    else {
        //search stepchart for each type
        arr.forEach(function(song) {
            var matchedChartList = [];
            types.forEach(function(type){
                var filteredList = song.chartList.filter(a=>
                                            a.chartType==type && 
                                            a.level >= level[0] && 
                                            a.level <= level[1]);
                if (filteredList.length > 0) {
                    matchedChartList.push(filteredList);
                }
            });
            
            if (matchedChartList.length > 0) {
                var resultSong = Object.assign({},song);
                // flatten into single array of array -> flat level array
                var resultchartList = [];
                matchedChartList.forEach(function(resultListForEachChartType) {
                    resultListForEachChartType.forEach(function(individualChart) {
                        resultchartList.push(individualChart);
                    });
                });
                resultSong.chartList = resultchartList;
                results.push(resultSong);
            }
        });
    }
    return results;
}