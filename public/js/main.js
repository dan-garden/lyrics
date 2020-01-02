
const app = new Vue({
    el: '#app',
    data: {
        query: "",
        suggestions: [],
        lyrics: false,
    },

    methods: {
        showLyrics(song) {
            this.suggestions = [];
            this.lyrics = { loading: true, title: song.title, artist: song.artist, body: false };


            let findQuery = song.artist + " " + song.title;
            fetch("/genius/find/"+findQuery)
            .then(res => res.json())
            .then(json => {
                this.lyrics.loading = false;
                this.lyrics.body = json.lyrics.genius.split("\n").join("<br />");
            })
        },
        queryChange(e) {
            // console.log(e);
            if(this.query && this.query.trim() !== "") {
                fetch("/genius/songs/"+this.query)
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