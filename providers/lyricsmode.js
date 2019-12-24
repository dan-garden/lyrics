const fetch = require("node-fetch");
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

class LyricsModeAPI {
    static async getLyrics(url) {
        const request = await fetch(url);
        const html = await request.text();
        const {
            document
        } = (new JSDOM(html)).window;
        const lyricsDom = document.querySelector("#lyrics_text");

        lyricsDom.querySelectorAll("#lyrics_text>div").forEach(div => {
            lyricsDom.removeChild(div);
        });

        let lyrics = lyricsDom.textContent.trim();
        return lyrics;
    }
    
    static async searchSongs(query) {
        const request = await fetch("https://www.lyricsmode.com/search.php?search=" + encodeURIComponent(query), {
            "credentials": "include",
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9,vi;q=0.8,sv;q=0.7",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.lyricsmode.com/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors"
        });
    

        const html = await request.text();
        const {
            document
        } = (new JSDOM(html)).window;

        const results = Array.from(document.querySelectorAll(".lm-list .lm-list__row")).map(result => {
            return {
                title: result.querySelector(".lm-list__cell-title").textContent.trim(),
                artist: result.querySelector(".lm-list__cell-subtitle").textContent.trim(),
                url: "https://www.lyricsmode.com" + result.querySelector(".lm-list__cell-title a").href
            }
        });

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



module.exports = LyricsModeAPI;