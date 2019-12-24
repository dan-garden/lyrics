const genius = require("./providers/genius");
const azlyrics = require("./providers/azlyrics");
const lyricsmode = require("./providers/lyricsmode");
const songlyrics = require("./providers/songlyrics");

const types = {
    genius: require("./providers/genius"),
    azlyrics: require("./providers/azlyrics"),
    lyricsmode: require("./providers/lyricsmode"),
    songlyrics: require("./providers/songlyrics")
};


class Providers {
    static async getLyrics(url) {
        
    }
    
    static async searchSongs(query, providers='all') {
        if(providers === 'all') {
            providers = Object.keys(types);
        }

        let results = {};
        for(let provider of providers) {
            results[provider] = await types[provider].searchSongs(query);
        }
        return results;
    }
    
    static async findLyrics(query, providers='all') {
        if(providers === 'all') {
            providers = Object.keys(types);
        }

        let results = {};
        for(let provider of providers) {
            results[provider] = await types[provider].findLyrics(query);
        }
        return results;
    }
}

module.exports = Providers;