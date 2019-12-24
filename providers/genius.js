const fetch = require("node-fetch");
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

class GeniusAPI {
    static async getLyrics(url) {
        const request = await fetch(url);
        const html = await request.text();
        const {
            document
        } = (new JSDOM(html)).window;
        let lyrics = document.querySelector(".lyrics").textContent.trim();
        return lyrics;
    }
    
    static async searchSongsData(query) {
        const request = await fetch("https://genius.com/api/search/multi?q=" + encodeURIComponent(query), {
            "credentials": "include",
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9,vi;q=0.8,sv;q=0.7",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://genius.com",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors"
        });
    
        const response = await request.json();
    
        let results = response.response.sections || [];
        results = results.filter(result => result.type === "song");
        results = results.map(result => {
            const songs = result.hits;
            return songs;
        })
    
        if(results.length > 0) {
            results = results[0].map(result => {
                return result.result;
            });
        }
    
        return results;
    }

    static async searchSongs(query) {
        let results = await this.searchSongsData(query);
        results = results.map(result => {
            return {
                title: result.title,
                artist: result.primary_artist.name,
                url: result.url
            }
        })

        return results;
    }
    
    static async findLyrics(query) {
        const songs = await this.searchSongs(query);
        let lyrics = false;
        if(songs.length > 0) {
            lyrics = await this.getLyrics(songs[0].url);
        }
    
        return lyrics;
    }
}

module.exports = GeniusAPI;