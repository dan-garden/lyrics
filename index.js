require('dotenv').config();

const genius = require("./genius");
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/get-lyrics/:url", async (req, res) => {
    const lyrics = await genius.getLyrics(req.params.url);
    res.json({lyrics: lyrics || false});
});

app.get("/search-songs/:query", async (req, res) => {
    const results = await genius.searchSongs(req.params.query);
    res.json({results: results || []});
});

app.get("/api/search-lyrics/:query", async (req, res) => {
    const lyrics = await genius.searchLyrics(req.params.query);
    res.json({lyrics: lyrics || false});
});

app.get("/api/ping", async (req, res) => {
    res.send(true);
});

app.listen(process.env.PORT, console.log("Server stared on port " + process.env.PORT));