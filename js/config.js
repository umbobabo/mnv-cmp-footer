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
      "provider": "json"
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
  }
}
 };