const genius = require("./providers/genius");
const azlyrics = require("./providers/azlyrics");
const lyricsmode = require("./providers/lyricsmode");
const songlyrics = require("./providers/songlyrics");


azlyrics.findLyrics("airplane mode").then(console.log);