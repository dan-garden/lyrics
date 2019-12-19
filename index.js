require('dotenv').config();

const genius = require("./genius");
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/crawl/:url", async (req, res) => {
    const lyrics = await genius.getLyrics(req.params.url);
    res.json({lyrics: lyrics || false});
});

app.get("/songs/:query", async (req, res) => {
    const results = await genius.searchSongs(req.params.query);
    res.json({results: results || []});
});

app.get("/find/:query", async (req, res) => {
    const lyrics = await genius.searchLyrics(req.params.query);
    res.json({lyrics: lyrics || false});
});

app.get("/ping", async (req, res) => {
    res.send(true);
});

app.use('/', express.static(__dirname + '/public'))

app.listen(process.env.PORT, console.log("Server stared on port " + process.env.PORT));