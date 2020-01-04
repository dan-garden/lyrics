require('dotenv').config();

const providers = require("./providers");
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());



app.get("/crawl/all/:url", async (req, res) => {
    const lyrics = await providers.getLyrics(req.params.url);
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/crawl/genius/:url", async (req, res) => {
    const lyrics = await providers.getLyrics(req.params.url, ['genius']);
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/crawl/lyricsmode/:url", async (req, res) => {
    const lyrics = await providers.getLyrics(req.params.url, ['lyricsmode']);
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/crawl/songlyrics/:url", async (req, res) => {
    const lyrics = await providers.getLyrics(req.params.url, ['songlyrics']);
    res.json({
        lyrics: lyrics || false
    });
});






/**
 * @api {get} search/all/:query Search all providers
 * @apiName SearchAll
 * @apiGroup Search
 * 
 * @apiVersion 1.0.0
 *
 * @apiParam {String} query Search Query
 *
 * @apiSuccess {Object[]} results Results found
 * @apiSuccess {String} results.title  Title of song
 * @apiSuccess {String} results.artist Primary artist of song
 * @apiSuccess {String} results.url URL of lyrics page
 * @apiSuccess {String} results.slug Uniquely generated slug
 * @apiSuccess {String} results.provider Lyrics provider used
 */

app.get("/search/all/:query", async (req, res) => {
    const results = await providers.searchSongs(req.params.query);
    res.json({
        results: results || []
    });
});

/**
 * @api {get} search/genius/:query Search on Genius
 * @apiName SearchGenius
 * @apiGroup Search
 * 
 * @apiVersion 1.0.0
 *
 * @apiParam {String} query Search Query
 *
 * @apiSuccess {Object[]} results Results found
 * @apiSuccess {String} results.title  Title of song
 * @apiSuccess {String} results.artist Primary artist of song
 * @apiSuccess {String} results.url URL of lyrics page
 * @apiSuccess {String} results.slug Uniquely generated slug
 * @apiSuccess {String} results.provider Lyrics provider used
 */

app.get("/search/genius/:query", async (req, res) => {
    const results = await providers.searchSongs(req.params.query, ['genius']);
    res.json({
        results: results || []
    });
});

/**
 * @api {get} search/lyricsmode/:query Search on Lyricsmode
 * @apiName SearchLyricsmode
 * @apiGroup Search
 * 
 * @apiVersion 1.0.0
 *
 * @apiParam {String} query Search Query
 *
 * @apiSuccess {Object[]} results Results found
 * @apiSuccess {String} results.title  Title of song
 * @apiSuccess {String} results.artist Primary artist of song
 * @apiSuccess {String} results.url URL of lyrics page
 * @apiSuccess {String} results.slug Uniquely generated slug
 * @apiSuccess {String} results.provider Lyrics provider used
 */

app.get("/search/lyricsmode/:query", async (req, res) => {
    const results = await providers.searchSongs(req.params.query, ['lyricsmode']);
    res.json({
        results: results || []
    });
});

/**
 * @api {get} search/songlyrics/:query Search on Songlyrics
 * @apiName SearchSonglyrics
 * @apiGroup Search
 * 
 * @apiVersion 1.0.0
 *
 * @apiParam {String} query Search Query
 *
 * @apiSuccess {Object[]} results Results found
 * @apiSuccess {String} results.title  Title of song
 * @apiSuccess {String} results.artist Primary artist of song
 * @apiSuccess {String} results.url URL of lyrics page
 * @apiSuccess {String} results.slug Uniquely generated slug
 * @apiSuccess {String} results.provider Lyrics provider used
 */

app.get("/search/songlyrics/:query", async (req, res) => {
    const results = await providers.searchSongs(req.params.query, ['songlyrics']);
    res.json({
        results: results || []
    });
});




/**
 * @api {get} find/all/:query Find lyrics on all providers
 * @apiName FindAll
 * @apiGroup Find
 * 
 * @apiVersion 1.0.0
 *
 * @apiParam {String} query Search Query
 *
 * @apiSuccess {Object} lyrics Lyric Providers
 * @apiSuccess {String} lyrics.genius Lyrics found on genius
 * @apiSuccess {String} lyrics.genius Lyrics found on lyricsmode
 * @apiSuccess {String} lyrics.genius Lyrics found on songlyrics
 */

app.get("/find/all/:query", async (req, res) => {
    const lyrics = await providers.findLyrics(req.params.query);
    res.json({
        lyrics: lyrics || false
    });
});

/**
 * @api {get} find/genius/:query Find lyrics on Genius
 * @apiName FindGenius
 * @apiGroup Find
 * 
 * @apiVersion 1.0.0
 *
 * @apiParam {String} query Search Query
 *
 * @apiSuccess {String} lyrics Lyrics found
 */

app.get("/find/genius/:query", async (req, res) => {
    const lyrics = await providers.findLyrics(req.params.query, ['genius']);
    res.json({
        lyrics: lyrics || false
    });
});

/**
 * @api {get} find/lyricsmode/:query Find lyrics on Lyricsmode
 * @apiName FindLyricsmode
 * @apiGroup Find
 * 
 * @apiVersion 1.0.0
 *
 * @apiParam {String} query Search Query
 *
 * @apiSuccess {String} lyrics Lyrics found
 */

app.get("/find/lyricsmode/:query", async (req, res) => {
    const lyrics = await providers.findLyrics(req.params.query, ['lyricsmode']);
    res.json({
        lyrics: lyrics || false
    });
});

/**
 * @api {get} find/songlyrics/:query Find lyrics on Songlyrics
 * @apiName FindSonglyrics
 * @apiGroup Find
 * 
 * @apiVersion 1.0.0
 *
 * @apiParam {String} query Search Query
 *
 * @apiSuccess {Object} lyrics Lyrics found
 */

app.get("/find/songlyrics/:query", async (req, res) => {
    const lyrics = await providers.findLyrics(req.params.query, ['songlyrics']);
    res.json({
        lyrics: lyrics || false
    });
});




app.get("/lyrics/genius/:slug", async (req, res) => {
    const lyrics = await providers.getLyricsFromSlug(req.params.slug, 'genius');
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/lyrics/lyricsmode/:slug", async (req, res) => {
    const lyrics = await providers.getLyricsFromSlug(req.params.slug, 'lyricsmode');
    res.json({
        lyrics: lyrics || false
    });
});

app.get("/lyrics/songlyrics/:slug", async (req, res) => {
    const lyrics = await providers.getLyricsFromSlug(req.params.slug, 'songlyrics');
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