var ecFooterConfig = {
 "config" : {
  "bundle": {
    "assets": { 
      "version": "websiteFooter001",
      "host": "cdn.static-economist.com"                          
    },
    "data": {
      "version": "websiteFooter001",
      "url[THIS-OVERWRITE-HOST-IN-JSON-JSONP-BUNDLE]": "http://YOUR-JSON-URL",
      "host": "localhost:3000",
      "host[PRODUCTION-RENAME-TO-HOST]": "cdn.static-economist.com",
      "provider": "inbundle"
    }
  }
},
 "minerva" :{
  "name": "Footer",
  "ns": {
    "js": "ecFooter",
    "css": "ec-footer",
    "folder": "ec-footer"
  },
  "description": "",
  "version": "0.1.0",
  "debugMode": true,
  "private": true,
  "engines": {
    "node": ">=0.8.0"
  },
  "devDependencies": {
    "grunt-contrib-copy": "^0.8.0",
    "grunt-browser-sync": "^1.5.3",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-jasmine": "0.5.1",
    "grunt-contrib-jshint": "0.6.4",
    "grunt-contrib-uglify": "~0.2.4",
    "grunt-contrib-watch": "^0.6.1",
    "grunt-githooks": "~0.2.0",
    "grunt-handlebars-compiler": "0.0.7",
    "grunt-sass": "0.6.0",
    "grunt-shell": "~0.5.0",
    "grunt-usemin": "~0.1.12",
    "grunt-criticalcss": "^0.5.0"
  },
  "engines": {
    "node": ">=0.8.0"
  }
}
 };