define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/docs/main.js",
    "group": "/Users/dan/Code/lyrics/public/docs/main.js",
    "groupTitle": "/Users/dan/Code/lyrics/public/docs/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "find/all/:query",
    "title": "Find lyrics on all providers",
    "name": "FindAll",
    "group": "Find",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Search Query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "lyrics",
            "description": "<p>Lyric Providers</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.genius",
            "description": "<p>Lyrics found on genius</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.genius.artist",
            "description": "<p>Song Artist</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.genius.title",
            "description": "<p>Song Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.genius.lyrics",
            "description": "<p>Song Lyrics</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.lyricsmode",
            "description": "<p>Lyrics found on lyricsmode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.lyricsmode.artist",
            "description": "<p>Song Artist</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.lyricsmode.title",
            "description": "<p>Song Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.lyricsmode.lyrics",
            "description": "<p>Song Lyrics</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.songlyrics",
            "description": "<p>Lyrics found on songlyrics</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.songlyrics.artist",
            "description": "<p>Song Artist</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.songlyrics.title",
            "description": "<p>Song Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.songlyrics.lyrics",
            "description": "<p>Song Lyrics</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://get-lyrics.herokuapp.com/find/all/akon beautiful\nHTTP/1.1 200 OK\n{\n    result: {\n         genius: {\n             artist: \"Akon\",\n             title: \"Beautiful\",\n             lyrics: \"[Verse 1: Akon] When I see you I run out of words, to say (ahh) I wouldn't leave you Cause you're that type of girl to make me stay (ahh) I see the guys tryin' to holla Girl, I don't wanna bother you Cause you're independent, and you got my attention Can I be yo' baby father? Girl, I just wanna show you That I love what you are doin' now [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 2: Colby O'Donis] Like the clouds you drift me away Far away, yeah And like the sun you, brighten my day You brighten my day, yeah I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie Said I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 3: Kardinal Offishall] Kardinal told you (you) what is it, sky blue or yellow This fellow ain't that mellow if it ain't about you (you) Hourglass shape make the place go \"oooh\" Waistline makes my soldier salute I'm a brute (brute) high from ya high heel game High heels push up ya ass last name And you livin in the fast lane, eyes like an angel Goddess, watch my girl and how she hot dress Spotless, hotness bad to the bone Make me wanna bone, put me in a triple-X zone (zone) Lames don't know how to talk to you So let me walk, with you, hold my hand I'mma spend them grands but after you undress Not like a hooker, but more like a princess Queen, empress, president pull Any way ya goin' off cause you're beautiful, okay? [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful\",\n         },\n         lyricsmode: {\n             artist: \"Akon\",\n             title: \"Beautiful\",\n             lyrics: \"When I see you I run out of words to say I wouldn't leave you 'Cause you're that type of girl to make me stay I see the guys tryna holla, girl I don't wanna bother you 'Cause you're independent and you got my attention Can I be your baby father? Girl, I just wanna show you That I love what you are doin' hun I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Like the clouds you Drift me away, far away, yeah And like the sun you Brighten the day, you brighten my day, yeah I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Kardinal told you, whether the sky blue or yellow This fella ain't that mellow if it ain't about you! Hourglass shape make a place go 'woo! ' Waistline makes my soldier salute I'm a brute, high from your high heel game High heels push up ya ass last name And you livin' in the fast lane, eyes like an angel Goddess, watch my gal and how she undress Spotless, heartless, bad to the bone Make me wanna go put me in the triple-X zone Lames don't know how to talk to you So let me walk with you, hold my hand I'ma spend them grands but after you undress Not like a hooker but more like a Princess Queen, Empress, President Pull anywhere you go on Earth 'cause you're beautiful, okay? I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Where'd you come from? You're outta this world to me You're a symbol of what every beautiful woman should be, ooh wee I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful\",\n         },\n         songlyrics: {\n             artist: \"Akon feat. Colbie O'Donis & Kardinal Offishall\",\n             title: \"Beautiful\",\n             lyrics: \"When I see you I run out of words to say (oh oh) I wouldn't leave you 'Cause you're that type of girl to make me stay (oh oh) I see the guys tryna' holla Girl I don't wanna bother you 'Cause you're independent and you got my attention Can I be your baby father Girl I just wanna show you That I love what you are doin' hun I see you in the club You gettin' down good I wanna get with you, yeah I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Like the clouds you Drift me away, far away (yeah) And like the sun you Brighten my day, you brighten my day (yeah) I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club You gettin' down good I wanna get with you, yeah I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful Kardinal told you Whether the sky blue or yellow This fella ain't that mellow If it ain't about you (you) Hourglass shape make the place go (ooohhh) Waistline makes my soldier salute I'mma brute (brute) High from your high heel game High heels push up ya ass last name And you livin' in the fast lane Eyes like an angel (goddess) Watch my yellin' as she undress Spotless (otless) bad to the bone Make me wanna go put me in the triple X zone (zone) Lames don't know how to talk to you So let me walk with you, hold my hand I'mma spend them grands, but after you undress Not like a hooker, but more like a princess Queen, empress, president Pull any way ya got my love 'Cause your beautiful (okay?) I see you in the club You gettin' down good I wanna get with you (ohh yeah) I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful (so beautiful) So damn beautiful (so beautiful) You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Where'd you come from you're outta this world To me (ohh ohh) You're a symbol of what every beautiful woman should be (oooh wee) (ohh ohh) I never wanna see you cry cry cry (don't cry) And I never wanna tell a lie lie lie (oh yeah) Said I never wanna see you cry cry cry (ohhhh) And I never wanna tell a lie lie lie (lieee) I see you in the club You gettin' down good I wanna get with you (ooh yeah) I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful\"\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Find"
  },
  {
    "type": "get",
    "url": "find/genius/:query",
    "title": "Find lyrics on Genius",
    "name": "FindGenius",
    "group": "Find",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Search Query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Lyrics found on Genius</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.artist",
            "description": "<p>Song Artist</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.title",
            "description": "<p>Song Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.lyrics",
            "description": "<p>Song Lyrics</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://get-lyrics.herokuapp.com/find/genius/akon beautiful\nHTTP/1.1 200 OK\n{\n     result: {\n         artist: \"Akon\",\n         title: \"Beautiful\",\n         lyrics: \"[Verse 1: Akon] When I see you I run out of words, to say (ahh) I wouldn't leave you Cause you're that type of girl to make me stay (ahh) I see the guys tryin' to holla Girl, I don't wanna bother you Cause you're independent, and you got my attention Can I be yo' baby father? Girl, I just wanna show you That I love what you are doin' now [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 2: Colby O'Donis] Like the clouds you drift me away Far away, yeah And like the sun you, brighten my day You brighten my day, yeah I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie Said I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 3: Kardinal Offishall] Kardinal told you (you) what is it, sky blue or yellow This fellow ain't that mellow if it ain't about you (you) Hourglass shape make the place go \"oooh\" Waistline makes my soldier salute I'm a brute (brute) high from ya high heel game High heels push up ya ass last name And you livin in the fast lane, eyes like an angel Goddess, watch my girl and how she hot dress Spotless, hotness bad to the bone Make me wanna bone, put me in a triple-X zone (zone) Lames don't know how to talk to you So let me walk, with you, hold my hand I'mma spend them grands but after you undress Not like a hooker, but more like a princess Queen, empress, president pull Any way ya goin' off cause you're beautiful, okay? [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful\",\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Find"
  },
  {
    "type": "get",
    "url": "find/lyricsmode/:query",
    "title": "Find lyrics on Lyricsmode",
    "name": "FindLyricsmode",
    "group": "Find",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Search Query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Lyrics found on Lyricsmode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.artist",
            "description": "<p>Song Artist</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.title",
            "description": "<p>Song Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.lyrics",
            "description": "<p>Song Lyrics</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://get-lyrics.herokuapp.com/find/lyricsmode/akon beautiful\nHTTP/1.1 200 OK\n{\n     result: {\n         artist: \"Akon\",\n         title: \"Beautiful\",\n         lyrics: \"When I see you I run out of words to say I wouldn't leave you 'Cause you're that type of girl to make me stay I see the guys tryna holla, girl I don't wanna bother you 'Cause you're independent and you got my attention Can I be your baby father? Girl, I just wanna show you That I love what you are doin' hun I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Like the clouds you Drift me away, far away, yeah And like the sun you Brighten the day, you brighten my day, yeah I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Kardinal told you, whether the sky blue or yellow This fella ain't that mellow if it ain't about you! Hourglass shape make a place go 'woo! ' Waistline makes my soldier salute I'm a brute, high from your high heel game High heels push up ya ass last name And you livin' in the fast lane, eyes like an angel Goddess, watch my gal and how she undress Spotless, heartless, bad to the bone Make me wanna go put me in the triple-X zone Lames don't know how to talk to you So let me walk with you, hold my hand I'ma spend them grands but after you undress Not like a hooker but more like a Princess Queen, Empress, President Pull anywhere you go on Earth 'cause you're beautiful, okay? I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful, beautiful Beautiful, beautiful You're so beautiful Where'd you come from? You're outta this world to me You're a symbol of what every beautiful woman should be, ooh wee I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club, you gettin' down girl I wanna get with you, yeah I see you in the club, you showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful\",\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Find"
  },
  {
    "type": "get",
    "url": "find/songlyrics/:query",
    "title": "Find lyrics on Songlyrics",
    "name": "FindSonglyrics",
    "group": "Find",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Search Query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Lyrics found on Songlyrics</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.artist",
            "description": "<p>Song Artist</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.title",
            "description": "<p>Song Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.lyrics",
            "description": "<p>Song Lyrics</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://get-lyrics.herokuapp.com/find/songlyrics/akon beautiful\nHTTP/1.1 200 OK\n{\n     result: {\n         artist: \"Akon\",\n         title: \"Beautiful\",\n         lyrics: \"When I see you I run out of words to say (oh oh) I wouldn't leave you 'Cause you're that type of girl to make me stay (oh oh) I see the guys tryna' holla Girl I don't wanna bother you 'Cause you're independent and you got my attention Can I be your baby father Girl I just wanna show you That I love what you are doin' hun I see you in the club You gettin' down good I wanna get with you, yeah I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Like the clouds you Drift me away, far away (yeah) And like the sun you Brighten my day, you brighten my day (yeah) I never wanna see you cry cry cry And I never wanna tell a lie lie lie Said I never wanna see you cry cry cry And I never wanna tell a lie lie lie I see you in the club You gettin' down good I wanna get with you, yeah I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful Kardinal told you Whether the sky blue or yellow This fella ain't that mellow If it ain't about you (you) Hourglass shape make the place go (ooohhh) Waistline makes my soldier salute I'mma brute (brute) High from your high heel game High heels push up ya ass last name And you livin' in the fast lane Eyes like an angel (goddess) Watch my yellin' as she undress Spotless (otless) bad to the bone Make me wanna go put me in the triple X zone (zone) Lames don't know how to talk to you So let me walk with you, hold my hand I'mma spend them grands, but after you undress Not like a hooker, but more like a princess Queen, empress, president Pull any way ya got my love 'Cause your beautiful (okay?) I see you in the club You gettin' down good I wanna get with you (ohh yeah) I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful (so beautiful) So damn beautiful (so beautiful) You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Beautiful Beautiful Beautiful You're so beautiful Where'd you come from you're outta this world To me (ohh ohh) You're a symbol of what every beautiful woman should be (oooh wee) (ohh ohh) I never wanna see you cry cry cry (don't cry) And I never wanna tell a lie lie lie (oh yeah) Said I never wanna see you cry cry cry (ohhhh) And I never wanna tell a lie lie lie (lieee) I see you in the club You gettin' down good I wanna get with you (ooh yeah) I see you in the club You showin' thugs love I wanna get with you You're so beautiful So damn beautiful Said you're so beautiful So damn beautiful You're so beautiful\",\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Find"
  },
  {
    "type": "get",
    "url": "lyrics/:slug",
    "title": "Get lyrics",
    "name": "GetLyrics",
    "group": "Lyrics",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Unique identifier</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Lyrics found</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.artist",
            "description": "<p>Song Artist</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.title",
            "description": "<p>Song Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.lyrics",
            "description": "<p>Song Lyrics</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://get-lyrics.herokuapp.com/lyrics/ge-akon-beautiful\nHTTP/1.1 200 OK\n{\n     result: {\n         artist: \"Akon\",\n         title: \"Beautiful\",\n         lyrics: \"[Verse 1: Akon] When I see you I run out of words, to say (ahh) I wouldn't leave you Cause you're that type of girl to make me stay (ahh) I see the guys tryin' to holla Girl, I don't wanna bother you Cause you're independent, and you got my attention Can I be yo' baby father? Girl, I just wanna show you That I love what you are doin' now [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 2: Colby O'Donis] Like the clouds you drift me away Far away, yeah And like the sun you, brighten my day You brighten my day, yeah I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie Said I never wanna see you cry, cry, cry And I never wanna tell a lie, lie, lie [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful [Verse 3: Kardinal Offishall] Kardinal told you (you) what is it, sky blue or yellow This fellow ain't that mellow if it ain't about you (you) Hourglass shape make the place go \"oooh\" Waistline makes my soldier salute I'm a brute (brute) high from ya high heel game High heels push up ya ass last name And you livin in the fast lane, eyes like an angel Goddess, watch my girl and how she hot dress Spotless, hotness bad to the bone Make me wanna bone, put me in a triple-X zone (zone) Lames don't know how to talk to you So let me walk, with you, hold my hand I'mma spend them grands but after you undress Not like a hooker, but more like a princess Queen, empress, president pull Any way ya goin' off cause you're beautiful, okay? [Hook: Akon] I see you in the club, you gettin down, girl I wanna get with you, yeah I see you in the club, you showin thugs love I wanna get with you You're so beautiful, so damn beautiful Said you're so beautiful, so damn beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful, beautiful, beautiful, beautiful You're so beautiful\",\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Lyrics"
  },
  {
    "type": "get",
    "url": "search/all/:query",
    "title": "Search all providers",
    "name": "SearchAll",
    "group": "Search",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Search Query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>Results found</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of song</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.artist",
            "description": "<p>Primary artist of song</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of lyrics page</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.slug",
            "description": "<p>Unique identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.provider",
            "description": "<p>Lyrics provider used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://get-lyrics.herokuapp.com/search/all/akon beautiful\nHTTP/1.1 200 OK\n{\n     results: [\n         {\n             title: \"Beautiful\",\n             artist: \"Akon\",\n             url: \"https://genius.com/Akon-beautiful-lyrics\",\n             slug: \"ge-akon-beautiful\",\n             provider: \"genius\"\n         },\n         {\n             title: \"Beautiful (Reggae Remix)\",\n             artist: \"Akon\",\n             url: \"http://www.songlyrics.com/akon/beautiful-reggae-remix-lyrics/\",\n             slug: \"sl-akon:beautiful-reggae-remix\",\n             provider: \"songlyrics\"\n         },\n         {\n             title: \"Beautiful\",\n             artist: \"Akon\",\n             url: \"https://www.lyricsmode.com/lyrics/a/akon/beautiful.html\",\n             slug: \"lm-akon:beautiful\",\n             provider: \"lyricsmode\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/genius/:query",
    "title": "Search on Genius",
    "name": "SearchGenius",
    "group": "Search",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Search Query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>Results found</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of song</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.artist",
            "description": "<p>Primary artist of song</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of lyrics page</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.slug",
            "description": "<p>Unique identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.provider",
            "description": "<p>Lyrics provider used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://get-lyrics.herokuapp.com/search/genius/akon beautiful\nHTTP/1.1 200 OK\n{\n     results: [\n         {\n             title: \"Beautiful\",\n             artist: \"Akon\",\n             url: \"https://genius.com/Akon-beautiful-lyrics\",\n             slug: \"ge-akon-beautiful\",\n             provider: \"genius\"\n         },\n         {\n             title: \"Beautiful - Radio Edit [w/ Rap]\",\n             artist: \"Akon\",\n             url: \"https://genius.com/Akon-beautiful-radio-edit-w-rap-lyrics\",\n             slug: \"ge-akon-beautiful-radio-edit-w-rap\",\n             provider: \"genius\"\n         },\n         {\n             title: \"Beautiful (feat. Dulce María)\",\n             artist: \"Akon\",\n             url: \"https://genius.com/Akon-beautiful-feat-dulce-maria-lyrics\",\n             slug: \"ge-akon-beautiful-feat-dulce-maria\",\n             provider: \"genius\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/lyricsmode/:query",
    "title": "Search on Lyricsmode",
    "name": "SearchLyricsmode",
    "group": "Search",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Search Query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>Results found</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of song</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.artist",
            "description": "<p>Primary artist of song</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of lyrics page</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.slug",
            "description": "<p>Unique identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.provider",
            "description": "<p>Lyrics provider used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://get-lyrics.herokuapp.com/search/lyricsmode/akon beautiful\nHTTP/1.1 200 OK\n{\n     results: [\n         {\n             title: \"Beautiful\",\n             artist: \"Akon\",\n             url: \"https://www.lyricsmode.com/lyrics/a/akon/beautiful.html\",\n             slug: \"lm-akon:beautiful\",\n             provider: \"lyricsmode\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/songlyrics/:query",
    "title": "Search on Songlyrics",
    "name": "SearchSonglyrics",
    "group": "Search",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Search Query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>Results found</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of song</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.artist",
            "description": "<p>Primary artist of song</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of lyrics page</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.slug",
            "description": "<p>Unique identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.provider",
            "description": "<p>Lyrics provider used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://get-lyrics.herokuapp.com/search/songlyrics/akon beautiful\nHTTP/1.1 200 OK\n{\n     results: [\n         {\n             title: \"Beautiful\",\n             artist: \"Akon feat. Colbie O'Donis & Kardinal Offishall\",\n             url: \"http://www.songlyrics.com/akon-feat-colbie-o-donis-kardinal-offishall/beautiful-lyrics/\",\n             slug: \"sl-akon-feat-colbie-o-donis-kardinal-offishall:beautiful\",\n             provider: \"songlyrics\"\n         },\n         {\n             title: \"Beautiful (Reggae Remix)\",\n             artist: \"Akon\",\n             url: \"http://www.songlyrics.com/akon/beautiful-reggae-remix-lyrics/\",\n             slug: \"sl-akon:beautiful-reggae-remix\",\n             provider: \"songlyrics\"\n         },\n         {\n             title: \"Beautiful (radio edit)\",\n             artist: \"Akon feat. Kardinal Offishall & Colby O'Donis\",\n             url: \"http://www.songlyrics.com/akon-feat-kardinal-offishall-colby-o-donis/beautiful-radio-edit-lyrics/\",\n             slug: \"sl-akon-feat-kardinal-offishall-colby-o-donis:beautiful-radio-edit\",\n             provider: \"songlyrics\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Search"
  }
] });
