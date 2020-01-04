const fetch = require("node-fetch");
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

class SongLyricsAPI {
    static get name() {
        return 'songlyrics';
    }

    static get url() {
        return "http://www.songlyrics.com";
    }

    static slug(url) {
        url = url.substring(0, url.length - 1);
        url = url.replace(this.url+"/", "");
        url = url.replace("-lyrics", "");
        let [artist, title] = url.split("/");
        let slug = `${artist}:${title}`;
        return slug;
    }

    static urlFromSlug(slug) {
        let [artist, title] = slug.split(":");
        const url = `${this.url}/${artist}/${title}-lyrics/`;
        return url;
    }

    static async getLyrics(url) {
        const request = await fetch(url);
        const html = await request.text();
        const {
            document
        } = (new JSDOM(html)).window;
        let lyrics = document.querySelector("#songLyricsDiv").textContent.trim();
        return lyrics;
    }

    static async getLyricsFromSlug(slug) {
        const url = this.urlFromSlug(slug);
        const lyrics = await this.getLyrics(url);
        return lyrics;
    }
    
    static async searchSongs(query) {
        const request = await fetch(this.url + "/index.php?section=search&searchW=" + encodeURIComponent(query), {
            "credentials": "include",
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9,vi;q=0.8,sv;q=0.7",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": this.url,
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors"
        });
    

        const html = await request.text();
        const {
            document
        } = (new JSDOM(html)).window;

        const results = Array.from(document.querySelectorAll(".serpresult")).map(result => {
            let titleSplit = result.querySelector("h3").textContent.split("Lyrics");
            titleSplit.pop();
            const title = titleSplit.join("").trim();
            const url = result.querySelector("a").href;
            return {
                title,
                artist: result.querySelector(".serpdesc-2 a").textContent,
                url,
                slug: this.slug(url)
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

module.exports = SongLyricsAPI;