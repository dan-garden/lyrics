
const app = new Vue({
    el: '#app',
    data: {
        providers: [
            {
                name: "azlyrics",
                url: "https://www.azlyrics.com"
            },
            {
                name: "genius",
                url: "https://genius.com"
            },
            {
                name: "lyricsmode",
                url: "https://lyricsmode.com"
            },
            {
                name: "songlyrics",
                url: "https://songlyrics.com"
            }
        ],
        provider: 0,
        query: "",
        suggestions: [],
        lyrics: false,
        loadingQueries: 0,
    },

    methods: {
        curProvider() {
            return this.providers[this.provider];
        },
        cycleProvider() {
            this.provider = (this.provider + 1) % this.providers.length;
            this.queryChange();
        },
        showLyrics(song) {
            this.suggestions = [];
            this.lyrics = { loading: true, title: song.title, artist: song.artist, body: false };


            let findQuery = song.artist + " " + song.title;
            fetch(`/${this.curProvider().name}/find/`+findQuery)
            .then(res => res.json())
            .then(json => {
                this.lyrics.loading = false;
                this.lyrics.body = json.lyrics[this.curProvider().name].split("\n").join("<br />");
            })
        },

        queryChange() {
            if(this.query && this.query.trim() !== "") {
                this.loadingQueries++;
                fetch(`/${this.curProvider().name}/songs/`+this.query)                
                .then(res => res.json())
                .then(json => {
                    this.suggestions = json.results || [];
                    this.loadingQueries--;
                })
            } else {
                this.query = "";
                this.suggestions = [];
            }
        },
        submitSearch (e) {
            // document.location = "/search.html?query=" + this.query;
        }
    }
});