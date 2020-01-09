
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
        init() {
            document.querySelector("#page-loader").classList.add("hidden");
            window.onpopstate = (e) => {
                if(e.state){
                    this.updatePage(e.state);
                } else {
                    this.lyrics = {};
                }
            };

            if(document.location.pathname) {
                const slug = document.location.pathname.replace("/", "");
                this.showLyrics({ slug }, false);
            }
        },

        updateUrl(song, urlPath) {
            window.history.pushState(song, "", "/" + urlPath);
            document.title = `${song.artist} - ${song.title}`;
        },

        updatePage(song) {
            document.title = `${song.artist} - ${song.title}`;
            this.showLyrics(song, false);
        },

        curProvider() {
            return this.providers[this.provider];
        },

        cycleProvider() {
            this.provider = (this.provider + 1) % this.providers.length;
            // if(this.query == "" && this.prevQuery != "") {
            //     this.query = this.prevQuery;
            // }
            this.queryChange();
        },

        showLyrics(song, updateUrl=true) {
            if(song.slug !== "") {
                this.loadingQueries = [];
                this.prevQuery = this.query;
                this.query = "";
                if(updateUrl) {
                    this.updateUrl(song, song.slug);
                }
                this.lyrics = { loading: true, body: false, title: false, artist: false };
                fetch(`/lyrics/`+song.slug)
                .then(res => res.json())
                .then(json => {
                    this.lyrics.loading = false;
                    if(json.result) {
                        this.lyrics.artist = json.result.artist;
                        this.lyrics.title = json.result.title;
                        this.lyrics.body = json.result.lyrics.split("\n").join("<br />");;
                    }
                })
            }
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
            this.queryChange();
        }
    }
});



window.addEventListener("load", () => {
    setTimeout(() => {
        app.init();
    }, 0);
})