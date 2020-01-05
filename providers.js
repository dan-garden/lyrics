const genius = require("./providers/genius");
const azlyrics = require("./providers/azlyrics");
const lyricsmode = require("./providers/lyricsmode");
const songlyrics = require("./providers/songlyrics");

const types = {
    genius: require("./providers/genius"),
    // azlyrics: require("./providers/azlyrics"),
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

        let results = [];
        for(let provider of providers) {
            let providerResults = await types[provider].searchSongs(query);
            
            providerResults.forEach(result => {
                result.provider = provider;
                results.push(result);
            });
        }
        return results;
    }
    
    static async findLyrics(query, providers='all') {
        if(providers === 'all') {
            providers = Object.keys(types);
        }

        let results = {};
        for(let provider of providers) {
            if(providers.length > 1) {
                results[provider] = await types[provider].findLyrics(query);
            } else {
                results = await types[provider].findLyrics(query);
            }
        }
        
        return results;
    }

    static detectProvider(slug) {
        let provider = false;
        Object.keys(types).forEach(providerName => {
            if(slug.startsWith(types[providerName].slugPre)) {
                provider = providerName;
            }
        })
        return provider;
    }

    static async getLyricsFromSlug(slug, provider) {
        if(!provider) {
            provider = this.detectProvider(slug);
        }

        if(types[provider]) {
            let results = await types[provider].getLyricsFromSlug(slug);
            return results;
        } else {
            throw Error("Invalid Provider.")
        }
    }
}

module.exports = Providers;