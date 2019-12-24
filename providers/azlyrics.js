const fetch = require("node-fetch");
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

class AZLyricsAPI {
    static async getLyrics(url) {
        const request = await fetch(url);
        const html = await request.text();
        const {
            document
        } = (new JSDOM(html)).window;
        let lyrics = document.querySelector(".ringtone").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent.trim();
        return lyrics;
    }
    
    static async searchSongs(query) {
        const request = await fetch("https://search.azlyrics.com/search.php?q=" + encodeURIComponent(query), {
            "credentials": "include",
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9,vi;q=0.8,sv;q=0.7",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://search.azlyrics.com/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors"
        });

        const html = await request.text();
        const {
            document
        } = (new JSDOM(html)).window;

        const panelSearch = Array.from(document.querySelectorAll(".panel .panel-heading b")).filter(heading=>heading.textContent.includes("Song results"));
        if(panelSearch.length < 1) {
            return [];
        } else {
            const panel = panelSearch[0].parentNode.parentNode;
            const results = Array.from(panel.querySelectorAll(".visitedlyr")).map(result => {
                return {
                    title: result.querySelector("a").textContent,
                    artist: result.querySelectorAll("b")[1].textContent || 'Unknown',
                    url: result.querySelector("a").href
                }
            });
    
            return results;
        }
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

module.exports = AZLyricsAPI;