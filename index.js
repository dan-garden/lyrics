require('dotenv').config();

const providers = require("./providers");
const express = require("express");
const cors = require('cors');
const cache = require('apicache').middleware;

const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/:slug', express.static(__dirname + '/public/index.html'));


app.use(cors());
app.use(cache('5 hours'));


app.get("/crawl/all/:url", async (req, res) => {
    const song = await providers.getLyrics(req.params.url);
    res.json({
        result: song
    });
});

app.get("/crawl/genius/:url", async (req, res) => {
    const song = await providers.getLyrics(req.params.url, ['genius']);
    res.json({
        result: song
    });
});

app.get("/crawl/lyricsmode/:url", async (req, res) => {
    const song = await providers.getLyrics(req.params.url, ['lyricsmode']);
    res.json({
        result: song
    });
});

app.get("/crawl/songlyrics/:url", async (req, res) => {
    const song = await providers.getLyrics(req.params.url, ['songlyrics']);
    res.json({
        result: song
    });
});






/**
 * @api {get} search/all/:query Search all providers
 * @apiName SearchAll
 * @apiGroup Search
 * @apiVersion 1.0.0
 * @apiParam {String} query Search Query
 * @apiSuccess {Object[]} results Results found
 * @apiSuccess {String} results.title  Title of song
 * @apiSuccess {String} results.artist Primary artist of song
 * @apiSuccess {String} results.url URL of lyrics page
 * @apiSuccess {String} results.slug Unique identifier
 * @apiSuccess {String} results.provider Lyrics provider used
 * @apiSuccessExample {json} Success-Response:
 *     https://get-lyrics.herokuapp.com/search/all/akon beautiful
 *     HTTP/1.1 200 OK
 *     {
 *          results: [
 *              {
 *                  title: "Beautiful",
 *                  artist: "Akon",
 *                  url: "https://genius.com/Akon-beautiful-lyrics",
 *                  slug: "ge-akon-beautiful",
 *                  provider: "genius"
 *              },
 *              {
 *                  title: "Beautiful (Reggae Remix)",
 *                  artist: "Akon",
 *                  url: "http://www.songlyrics.com/akon/beautiful-reggae-remix-lyrics/",
 *                  slug: "sl-akon:beautiful-reggae-remix",
 *                  provider: "songlyrics"
 *              },
 *              {
 *                  title: "Beautiful",
 *                  artist: "Akon",
 *                  url: "https://www.lyricsmode.com/lyrics/a/akon/beautiful.html",
 *                  slug: "lm-akon:beautiful",
 *                  provider: "lyricsmode"
 *              }
 *          ]
 *     }
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
 * @apiVersion 1.0.0
 * @apiParam {String} query Search Query
 * @apiSuccess {Object[]} results Results found
 * @apiSuccess {String} results.title  Title of song
 * @apiSuccess {String} results.artist Primary artist of song
 * @apiSuccess {String} results.url URL of lyrics page
 * @apiSuccess {String} results.slug Unique identifier
 * @apiSuccess {String} results.provider Lyrics provider used
 * @apiSuccessExample {json} Success-Response:
 *     https://get-lyrics.herokuapp.com/search/genius/akon beautiful
 *     HTTP/1.1 200 OK
 *     {
 *          results: [
 *              {
 *                  title: "Beautiful",
 *                  artist: "Akon",
 *                  url: "https://genius.com/Akon-beautiful-lyrics",
 *                  slug: "ge-akon-beautiful",
 *                  provider: "genius"
 *              },
 *              {
 *                  title: "Beautiful - Radio Edit [w/ Rap]",
 *                  artist: "Akon",
 *                  url: "https://genius.com/Akon-beautiful-radio-edit-w-rap-lyrics",
 *                  slug: "ge-akon-beautiful-radio-edit-w-rap",
 *                  provider: "genius"
 *              },
 *              {
 *                  title: "Beautiful (feat. Dulce María)",
 *                  artist: "Akon",
 *                  url: "https://genius.com/Akon-beautiful-feat-dulce-maria-lyrics",
 *                  slug: "ge-akon-beautiful-feat-dulce-maria",
 *                  provider: "genius"
 *              }
 *          ]
 *     }
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
 * @apiVersion 1.0.0
 * @apiParam {String} query Search Query
 * @apiSuccess {Object[]} results Results found
 * @apiSuccess {String} results.title  Title of song
 * @apiSuccess {String} results.artist Primary artist of song
 * @apiSuccess {String} results.url URL of lyrics page
 * @apiSuccess {String} results.slug Unique identifier
 * @apiSuccess {String} results.provider Lyrics provider used
 * @apiSuccessExample {json} Success-Response:
 *     https://get-lyrics.herokuapp.com/search/lyricsmode/akon beautiful
 *     HTTP/1.1 200 OK
 *     {
 *          results: [
 *              {
 *                  title: "Beautiful",
 *                  artist: "Akon",
 *                  url: "https://www.lyricsmode.com/lyrics/a/akon/beautiful.html",
 *                  slug: "lm-akon:beautiful",
 *                  provider: "lyricsmode"
 *              }
 *          ]
 *     }
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
 * @apiVersion 1.0.0
 * @apiParam {String} query Search Query
 * @apiSuccess {Object[]} results Results found
 * @apiSuccess {String} results.title  Title of song
 * @apiSuccess {String} results.artist Primary artist of song
 * @apiSuccess {String} results.url URL of lyrics page
 * @apiSuccess {String} results.slug Unique identifier
 * @apiSuccess {String} results.provider Lyrics provider used
 * @apiSuccessExample {json} Success-Response:
 *     https://get-lyrics.herokuapp.com/search/songlyrics/akon beautiful
 *     HTTP/1.1 200 OK
 *     {
 *          results: [
 *              {
 *                  title: "Beautiful",
 *                  artist: "Akon feat. Colbie O'Donis & Kardinal Offishall",
 *                  url: "http://www.songlyrics.com/akon-feat-colbie-o-donis-kardinal-offishall/beautiful-lyrics/",
 *                  slug: "sl-akon-feat-colbie-o-donis-kardinal-offishall:beautiful",
 *                  provider: "songlyrics"
 *              },
 *              {
 *                  title: "Beautiful (Reggae Remix)",
 *                  artist: "Akon",
 *                  url: "http://www.songlyrics.com/akon/beautiful-reggae-remix-lyrics/",
 *                  slug: "sl-akon:beautiful-reggae-remix",
 *                  provider: "songlyrics"
 *              },
 *              {
 *                  title: "Beautiful (radio edit)",
 *                  artist: "Akon feat. Kardinal Offishall & Colby O'Donis",
 *                  url: "http://www.songlyrics.com/akon-feat-kardinal-offishall-colby-o-donis/beautiful-radio-edit-lyrics/",
 *                  slug: "sl-akon-feat-kardinal-offishall-colby-o-donis:beautiful-radio-edit",
 *                  provider: "songlyrics"
 *              }
 *          ]
 *     }
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
 * @apiVersion 1.0.0
 * @apiParam {String} query Search Query
 * @apiSuccess {Object} lyrics Lyric Providers
 * 
 * @apiSuccess {Object} result.genius Lyrics found on genius
 * @apiSuccess {String} result.genius.artist Song Artist
 * @apiSuccess {String} result.genius.title Song Title
 * @apiSuccess {String} result.genius.lyrics Song Lyrics
 * 
 * @apiSuccess {Object} result.lyricsmode Lyrics found on lyricsmode
 * @apiSuccess {String} result.lyricsmode.artist Song Artist
 * @apiSuccess {String} result.lyricsmode.title Song Title
 * @apiSuccess {String} result.lyricsmode.lyrics Song Lyrics
 * 
 * @apiSuccess {Object} result.songlyrics Lyrics found on songlyrics
 * @apiSuccess {String} result.songlyrics.artist Song Artist
 * @apiSuccess {String} result.songlyrics.title Song Title
 * @apiSuccess {String} result.songlyrics.lyrics Song Lyrics
 * 
 * @apiSuccessExample {json} Success-Response:
 *     https://get-lyrics.herokuapp.com/find/all/akon beautiful
 *     HTTP/1.1 200 OK
 *     {
 *         result: {
 *              genius: {
 *                  artist: "Akon",
 *                  title: "Beautiful",
 *                  lyrics: "[Verse 1: Akon] When I see you I run out of words, to say (ahh) I wouldn't leave you Cause you're that type of girl to make me stay (ahh) I see the guys tryin' to holla Girl, I don't wanna bother you Cause you're independent, and you got my attention Can I be yo' baby father? Girl, I just wanna show you That I love what you are doin' now [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 2: Colby O'Donis] Like the clouds you drift me away Far away, yeah And like the sun you, brighten my day You brighten my day, yeah I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie Said I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 3: Kardinal Offishall] Kardinal told you (you) what is it, sky blue or yellow This fellow ain't that mellow if it ain't about you (you) Hourglass shape make the place go "oooh" Waistline makes my soldier salute I'm a brute (brute) high from ya high heel game High heels push up ya ass last name And you livin in the fast lane, eyes like an angel Goddess, watch my girl and how she hot dress Spotless, hotness bad to the bone Make me wanna bone, put me in a triple-X zone (zone) Lames don't know how to talk to you So let me walk, with you, hold my hand I'mma spend them grands but after you undress Not like a hooker, but more like a princess Queen, empress, president pull Any way ya goin' off cause you're beautiful, okay? [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful",
 *              },
 *              lyricsmode: {
 *                  artist: "Akon",
 *                  title: "Beautiful",
 *                  lyrics: "When I see you I run out of words to say I wouldn't leave you 'Cause you're that type of girl to make me stay I see the guys tryna holla, girl I don't wanna bother you 'Cause you're independent and you got my attention Can I be your baby father? Girl, I just wanna show you That I love what you are doin' hun I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Like the clouds you Drift me away, far away, yeah And like the sun you Brighten the day, you brighten my day, yeah I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Kardinal told you, whether the sky blue or yellow This fella ain't that mellow if it ain't about you! Hourglass shape make a place go 'woo! ' Waistline makes my soldier salute I'm a brute, high from your high heel game High heels push up ya ass last name And you livin' in the fast lane, eyes like an angel Goddess, watch my gal and how she undress Spotless, heartless, bad to the bone Make me wanna go put me in the triple-X zone Lames don't know how to talk to you So let me walk with you, hold my hand I'ma spend them grands but after you undress Not like a hooker but more like a Princess Queen, Empress, President Pull anywhere you go on Earth 'cause you're beautiful, okay? I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Where'd you come from? You're outta this world to me You're a symbol of what every beautiful woman should be, ooh wee I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful",
 *              },
 *              songlyrics: {
 *                  artist: "Akon feat. Colbie O'Donis & Kardinal Offishall",
 *                  title: "Beautiful",
 *                  lyrics: "When I see you I run out of words to say (oh oh) I wouldn't leave you 'Cause you're that type of girl to make me stay (oh oh) I see the guys tryna' holla Girl I don't wanna bother you 'Cause you're independent and you got my attention Can I be your baby father Girl I just wanna show you That I love what you are doin' hun I see you in the club You gettin' down good I wanna get with you, yeah I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Like the clouds you Drift me away, far away (yeah) And like the sun you Brighten my day, you brighten my day (yeah) I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club You gettin' down good I wanna get with you, yeah I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful Kardinal told you Whether the sky blue or yellow This fella ain't that mellow If it ain't about you (you) Hourglass shape make the place go (ooohhh) Waistline makes my soldier salute I'mma brute (brute) High from your high heel game High heels push up ya ass last name And you livin' in the fast lane Eyes like an angel (goddess) Watch my yellin' as she undress Spotless (otless) bad to the bone Make me wanna go put me in the triple X zone (zone) Lames don't know how to talk to you So let me walk with you, hold my hand I'mma spend them grands, but after you undress Not like a hooker, but more like a princess Queen, empress, president Pull any way ya got my love 'Cause your beautiful (okay?) I see you in the club You gettin' down good I wanna get with you (ohh yeah) I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful (so beautiful) So damn beautiful (so beautiful) You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Where'd you come from you're outta this world To me (ohh ohh) You're a symbol of what every beautiful woman should be (oooh wee) (ohh ohh) I never wanna see you cry cry cry (don't cry) And I never wanna tell a lie lie lie (oh yeah) Said I never wanna see you cry cry cry (ohhhh) And I never wanna tell a lie lie lie (lieee) I see you in the club You gettin' down good I wanna get with you (ooh yeah) I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful"
 *              }
 *          }
 *     }
 */

app.get("/find/all/:query", async (req, res) => {
    const song = await providers.findLyrics(req.params.query);
    res.json({
        result: song
    });
});

/**
 * @api {get} find/genius/:query Find lyrics on Genius
 * @apiName FindGenius
 * @apiGroup Find
 * @apiVersion 1.0.0
 * @apiParam {String} query Search Query
 * @apiSuccess {Object} result Lyrics found on Genius
 * @apiSuccess {String} result.artist Song Artist
 * @apiSuccess {String} result.title Song Title
 * @apiSuccess {String} result.lyrics Song Lyrics
 * @apiSuccessExample {json} Success-Response:
 *     https://get-lyrics.herokuapp.com/find/genius/akon beautiful
 *     HTTP/1.1 200 OK
 *     {
 *          result: {
 *              artist: "Akon",
 *              title: "Beautiful",
 *              lyrics: "[Verse 1: Akon] When I see you I run out of words, to say (ahh) I wouldn't leave you Cause you're that type of girl to make me stay (ahh) I see the guys tryin' to holla Girl, I don't wanna bother you Cause you're independent, and you got my attention Can I be yo' baby father? Girl, I just wanna show you That I love what you are doin' now [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 2: Colby O'Donis] Like the clouds you drift me away Far away, yeah And like the sun you, brighten my day You brighten my day, yeah I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie Said I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 3: Kardinal Offishall] Kardinal told you (you) what is it, sky blue or yellow This fellow ain't that mellow if it ain't about you (you) Hourglass shape make the place go "oooh" Waistline makes my soldier salute I'm a brute (brute) high from ya high heel game High heels push up ya ass last name And you livin in the fast lane, eyes like an angel Goddess, watch my girl and how she hot dress Spotless, hotness bad to the bone Make me wanna bone, put me in a triple-X zone (zone) Lames don't know how to talk to you So let me walk, with you, hold my hand I'mma spend them grands but after you undress Not like a hooker, but more like a princess Queen, empress, president pull Any way ya goin' off cause you're beautiful, okay? [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful",
 *          }
 *     }
 */

app.get("/find/genius/:query", async (req, res) => {
    const song = await providers.findLyrics(req.params.query, ['genius']);
    res.json({
        result: song
    });
});

/**
 * @api {get} find/lyricsmode/:query Find lyrics on Lyricsmode
 * @apiName FindLyricsmode
 * @apiGroup Find
 * @apiVersion 1.0.0
 * @apiParam {String} query Search Query
 * @apiSuccess {Object} result Lyrics found on Lyricsmode
 * @apiSuccess {String} result.artist Song Artist
 * @apiSuccess {String} result.title Song Title
 * @apiSuccess {String} result.lyrics Song Lyrics
 * @apiSuccessExample {json} Success-Response:
 *     https://get-lyrics.herokuapp.com/find/lyricsmode/akon beautiful
 *     HTTP/1.1 200 OK
 *     {
 *          result: {
 *              artist: "Akon",
 *              title: "Beautiful",
 *              lyrics: "When I see you I run out of words to say I wouldn't leave you 'Cause you're that type of girl to make me stay I see the guys tryna holla, girl I don't wanna bother you 'Cause you're independent and you got my attention Can I be your baby father? Girl, I just wanna show you That I love what you are doin' hun I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Like the clouds you Drift me away, far away, yeah And like the sun you Brighten the day, you brighten my day, yeah I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Kardinal told you, whether the sky blue or yellow This fella ain't that mellow if it ain't about you! Hourglass shape make a place go 'woo! ' Waistline makes my soldier salute I'm a brute, high from your high heel game High heels push up ya ass last name And you livin' in the fast lane, eyes like an angel Goddess, watch my gal and how she undress Spotless, heartless, bad to the bone Make me wanna go put me in the triple-X zone Lames don't know how to talk to you So let me walk with you, hold my hand I'ma spend them grands but after you undress Not like a hooker but more like a Princess Queen, Empress, President Pull anywhere you go on Earth 'cause you're beautiful, okay? I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Where'd you come from? You're outta this world to me You're a symbol of what every beautiful woman should be, ooh wee I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful",
 *          }
 *     }
 */

app.get("/find/lyricsmode/:query", async (req, res) => {
    const song = await providers.findLyrics(req.params.query, ['lyricsmode']);
    res.json({
        result: song
    });
});

/**
 * @api {get} find/songlyrics/:query Find lyrics on Songlyrics
 * @apiName FindSonglyrics
 * @apiGroup Find
 * @apiVersion 1.0.0
 * @apiParam {String} query Search Query
 * @apiSuccess {Object} result Lyrics found on Songlyrics
 * @apiSuccess {String} result.artist Song Artist
 * @apiSuccess {String} result.title Song Title
 * @apiSuccess {String} result.lyrics Song Lyrics
 * @apiSuccessExample {json} Success-Response:
 *     https://get-lyrics.herokuapp.com/find/songlyrics/akon beautiful
 *     HTTP/1.1 200 OK
 *     {
 *          result: {
 *              artist: "Akon",
 *              title: "Beautiful",
 *              lyrics: "When I see you I run out of words to say (oh oh) I wouldn't leave you 'Cause you're that type of girl to make me stay (oh oh) I see the guys tryna' holla Girl I don't wanna bother you 'Cause you're independent and you got my attention Can I be your baby father Girl I just wanna show you That I love what you are doin' hun I see you in the club You gettin' down good I wanna get with you, yeah I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Like the clouds you Drift me away, far away (yeah) And like the sun you Brighten my day, you brighten my day (yeah) I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club You gettin' down good I wanna get with you, yeah I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful Kardinal told you Whether the sky blue or yellow This fella ain't that mellow If it ain't about you (you) Hourglass shape make the place go (ooohhh) Waistline makes my soldier salute I'mma brute (brute) High from your high heel game High heels push up ya ass last name And you livin' in the fast lane Eyes like an angel (goddess) Watch my yellin' as she undress Spotless (otless) bad to the bone Make me wanna go put me in the triple X zone (zone) Lames don't know how to talk to you So let me walk with you, hold my hand I'mma spend them grands, but after you undress Not like a hooker, but more like a princess Queen, empress, president Pull any way ya got my love 'Cause your beautiful (okay?) I see you in the club You gettin' down good I wanna get with you (ohh yeah) I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful (so beautiful) So damn beautiful (so beautiful) You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Where'd you come from you're outta this world To me (ohh ohh) You're a symbol of what every beautiful woman should be (oooh wee) (ohh ohh) I never wanna see you cry cry cry (don't cry) And I never wanna tell a lie lie lie (oh yeah) Said I never wanna see you cry cry cry (ohhhh) And I never wanna tell a lie lie lie (lieee) I see you in the club You gettin' down good I wanna get with you (ooh yeah) I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful",
 *          }
 *     }
 */

app.get("/find/songlyrics/:query", async (req, res) => {
    const song = await providers.findLyrics(req.params.query, ['songlyrics']);
    res.json({
        result: song
    });
});


/**
 * @api {get} lyrics/:slug Get lyrics
 * @apiName GetLyrics
 * @apiGroup Lyrics
 * @apiVersion 1.0.0
 * @apiParam {String} slug Unique identifier
 * @apiSuccess {Object} result Lyrics found
 * @apiSuccess {String} result.artist Song Artist
 * @apiSuccess {String} result.title Song Title
 * @apiSuccess {String} result.lyrics Song Lyrics
 * @apiSuccessExample {json} Success-Response:
 *     https://get-lyrics.herokuapp.com/lyrics/ge-akon-beautiful
 *     HTTP/1.1 200 OK
 *     {
 *          result: {
 *              artist: "Akon",
 *              title: "Beautiful",
 *              lyrics: "[Verse 1: Akon] When I see you I run out of words, to say (ahh) I wouldn't leave you Cause you're that type of girl to make me stay (ahh) I see the guys tryin' to holla Girl, I don't wanna bother you Cause you're independent, and you got my attention Can I be yo' baby father? Girl, I just wanna show you That I love what you are doin' now [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 2: Colby O'Donis] Like the clouds you drift me away Far away, yeah And like the sun you, brighten my day You brighten my day, yeah I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie Said I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 3: Kardinal Offishall] Kardinal told you (you) what is it, sky blue or yellow This fellow ain't that mellow if it ain't about you (you) Hourglass shape make the place go "oooh" Waistline makes my soldier salute I'm a brute (brute) high from ya high heel game High heels push up ya ass last name And you livin in the fast lane, eyes like an angel Goddess, watch my girl and how she hot dress Spotless, hotness bad to the bone Make me wanna bone, put me in a triple-X zone (zone) Lames don't know how to talk to you So let me walk, with you, hold my hand I'mma spend them grands but after you undress Not like a hooker, but more like a princess Queen, empress, president pull Any way ya goin' off cause you're beautiful, okay? [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful",
 *          }
 *     }
 */
app.get("/lyrics/:slug", async (req, res) => {
    const song = await providers.getLyricsFromSlug(req.params.slug);
    res.json({
        result: song
    });
});


app.get("/lyrics/genius/:slug", async (req, res) => {
    const song = await providers.getLyricsFromSlug(req.params.slug, 'genius');
    res.json({
        result: song
    });
});

app.get("/lyrics/lyricsmode/:slug", async (req, res) => {
    const song = await providers.getLyricsFromSlug(req.params.slug, 'lyricsmode');
    res.json({
        result: song
    });
});

app.get("/lyrics/songlyrics/:slug", async (req, res) => {
    const song = await providers.getLyricsFromSlug(req.params.slug, 'songlyrics');
    res.json({
        result: song
    });
});



app.get("/ping", async (req, res) => {
    res.send(true);
});

app.listen(process.env.PORT, console.log("Server stared on port " + process.env.PORT));