const fetch = require("node-fetch");
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

class LyricsModeAPI {
    static get slugPre() {
        return 'lm-';
    }

    static get name() {
        return 'lyricsmode';
    }

    static get url() {
        return "https://www.lyricsmode.com";
    }

    static slug(url) {
        url = url.split(this.url + "/lyrics/")[1];
        let [letter, artist, title] = url.split("/");
        artist = artist.split("_").join("-");
        title = title.replace(".html", "").split("_").join("-");
        const slug = `${artist}:${title}`;
        return this.slugPre + slug;
    }

    static urlFromSlug(slug) {
        slug = slug.replace(this.slugPre, "");
        let [artist, title] = slug.split(":");
        artist = artist.split("-").join("_");
        title = title.split("-").join("_") + ".html";
        const url = this.url + `/lyrics/${artist[0]}/${artist}/${title}`;
        return url;
    }

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

    static async getLyricsFromSlug(slug) {
        const url = this.urlFromSlug(slug);
        const lyrics = await this.getLyrics(url);
        return lyrics;
    }
    
    static async searchSongs(query) {
        const request = await fetch(this.url + "/search.php?search=" + encodeURIComponent(query), {
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

        const results = Array.from(document.querySelectorAll(".lm-list .lm-list__row")).map(result => {
            const url = "https://www.lyricsmode.com" + result.querySelector(".lm-list__cell-title a").href;
            return {
                title: result.querySelector(".lm-list__cell-title").textContent.trim(),
                artist: result.querySelector(".lm-list__cell-subtitle").textContent.trim(),
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



module.exports = LyricsModeAPI;