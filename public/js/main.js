
const app = new Vue({
    el: '#app',
    data: {
        providers: [
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
        lyrics: false,
        typingTimer: undefined,
        loadingQueries: [],
        prevQuery: "",
        doneTypingInterval: 100,
    },

    watch: {
        query: function(val, oldVal) {
            this.startCountdown();
        }
    },

    methods: {
        curProvider() {
            return this.providers[this.provider];
        },
        cycleProvider() {
            this.provider = (this.provider + 1) % this.providers.length;
            if(this.query == "" && this.prevQuery != "") {
                this.query = this.prevQuery;
            }
            this.queryChange();
        },
        showLyrics(song) {
            this.loadingQueries = [];
            this.prevQuery = this.query;
            this.query = "";
            this.lyrics = { loading: true, title: song.title, artist: song.artist, body: false };
            fetch(`/lyrics/${this.curProvider().name}/`+song.slug)
            .then(res => res.json())
            .then(json => {
                this.lyrics.loading = false;
                this.lyrics.body = json.lyrics.split("\n").join("<br />");
            })
        },

        startCountdown() {
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(this.queryChange, this.doneTypingInterval);
        },

        clearCountdown() {
            clearTimeout(this.typingTimer);
        },

        lastSuggestions() {
            const lastIndex = this.loadingQueries.length;
            let lastSug = {result: []};
            for(let i = 0; i < this.loadingQueries.length; i++) {
                if(this.loadingQueries[i].lastIndex === lastIndex-1) {
                    lastSug = this.loadingQueries[i];
                }
            }
            return lastSug.result;
        },

        queryChange() {
            const lastIndex = this.loadingQueries.length;
            this.loadingQueries.push({lastIndex, query: this.query, result: false});
            if(this.query && this.query.trim() !== "") {
                fetch(`/search/${this.curProvider().name}/`+this.query)
                .then(res => res.json())
                .then(json => {
                    this.loadingQueries.map(q => {
                        if(q.lastIndex === lastIndex) {
                            q.result = json.results || [];
                        }
                        return q;
                    });
                })
            } else {
                this.query = "";
                this.loadingQueries.map(q => {
                    if(q.lastIndex === lastIndex) {
                        q.result = [];
                    }
                    return q;
                })
            }
        },
        submitSearch (e) {
            // document.location = "/search.html?query=" + this.query;
        }
    }
});



window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector("#page-loader").classList.add("hidden");
    }, 1000);
})