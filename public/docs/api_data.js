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
    "filename": "./public/docs/template/main.js",
    "group": "/Users/dan/Code/lyrics/public/docs/template/main.js",
    "groupTitle": "/Users/dan/Code/lyrics/public/docs/template/main.js",
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
            "type": "String",
            "optional": false,
            "field": "lyrics.genius",
            "description": "<p>Lyrics found on genius</p>"
          }
        ]
      }
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
            "type": "String",
            "optional": false,
            "field": "lyrics",
            "description": "<p>Lyrics found</p>"
          }
        ]
      }
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
            "type": "String",
            "optional": false,
            "field": "lyrics",
            "description": "<p>Lyrics found</p>"
          }
        ]
      }
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
            "field": "lyrics",
            "description": "<p>Lyrics found</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Find"
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
            "description": "<p>Uniquely generated slug</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.provider",
            "description": "<p>Lyrics provider used</p>"
          }
        ]
      }
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
            "description": "<p>Uniquely generated slug</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.provider",
            "description": "<p>Lyrics provider used</p>"
          }
        ]
      }
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
            "description": "<p>Uniquely generated slug</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.provider",
            "description": "<p>Lyrics provider used</p>"
          }
        ]
      }
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
            "description": "<p>Uniquely generated slug</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.provider",
            "description": "<p>Lyrics provider used</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Search"
  }
] });
