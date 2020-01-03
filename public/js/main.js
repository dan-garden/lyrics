
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
        typingTimer: undefined,
        doneTypingInterval: 100,
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

        startCountdown() {
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(this.queryChange, this.doneTypingInterval);
        },

        clearCountdown() {
            clearTimeout(this.typingTimer);
        },

        queryChange() {
            if(this.query && this.query.trim() !== "") {
                fetch(`/${this.curProvider().name}/songs/`+this.query)                
                .then(res => res.json())
                .then(json => {
                    this.suggestions = json.results || [];
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