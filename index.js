require('dotenv').config();

const providers = require("./providers");
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

//ALL APIS
app.get("/all/crawl/:url", async (req, res) => {
    const lyrics = await providers.getLyrics(req.params.url);
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/all/songs/:query", async (req, res) => {
    const results = await providers.searchSongs(req.params.query);
    res.json({
        results: results || []
    });
});

app.get("/all/find/:query", async (req, res) => {
    const lyrics = await providers.findLyrics(req.params.query);
    res.json({
        lyrics: lyrics || false
    });
});


//genius APIS
app.get("/genius/crawl/:url", async (req, res) => {
    const lyrics = await providers.getLyrics(req.params.url, ['genius']);
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/genius/songs/:query", async (req, res) => {
    const results = await providers.searchSongs(req.params.query, ['genius']);
    res.json({
        results: results || []
    });
});

app.get("/genius/find/:query", async (req, res) => {
    const lyrics = await providers.findLyrics(req.params.query, ['genius']);
    res.json({
        lyrics: lyrics || false
    });
});

//azlyrics APIS
app.get("/azlyrics/crawl/:url", async (req, res) => {
    const lyrics = await providers.getLyrics(req.params.url, ['azlyrics']);
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/azlyrics/songs/:query", async (req, res) => {
    const results = await providers.searchSongs(req.params.query, ['azlyrics']);
    res.json({
        results: results || []
    });
});

app.get("/azlyrics/find/:query", async (req, res) => {
    const lyrics = await providers.findLyrics(req.params.query, ['azlyrics']);
    res.json({
        lyrics: lyrics || false
    });
});

//lyricsmode APIS
app.get("/lyricsmode/crawl/:url", async (req, res) => {
    const lyrics = await providers.getLyrics(req.params.url, ['lyricsmode']);
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/lyricsmode/songs/:query", async (req, res) => {
    const results = await providers.searchSongs(req.params.query, ['lyricsmode']);
    res.json({
        results: results || []
    });
});

app.get("/lyricsmode/find/:query", async (req, res) => {
    const lyrics = await providers.findLyrics(req.params.query, ['lyricsmode']);
    res.json({
        lyrics: lyrics || false
    });
});

//songlyrics APIS
app.get("/songlyrics/crawl/:url", async (req, res) => {
    const lyrics = await providers.getLyrics(req.params.url, ['songlyrics']);
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/songlyrics/songs/:query", async (req, res) => {
    const results = await providers.searchSongs(req.params.query, ['songlyrics']);
    res.json({
        results: results || []
    });
});

app.get("/songlyrics/find/:query", async (req, res) => {
    const lyrics = await providers.findLyrics(req.params.query, ['songlyrics']);
    res.json({
        lyrics: lyrics || false
    });
});



//OTHER APIS
app.get("/ping", async (req, res) => {
    res.send(true);
});

app.use('/', express.static(__dirname + '/public'))

app.listen(process.env.PORT, console.log("Server stared on port " + process.env.PORT));