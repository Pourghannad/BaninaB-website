"use strict";var precacheConfig=[["/index.html","86aa5a16b8650411ffd9477215623946"],["/static/css/main.654a1bfa.css","654a1bfaf9abe9a8903e831b41b92eb3"],["/static/js/main.6f709737.js","0ca303ac3513f6e847c6f2a34eeac001"],["/static/media/OpenSans-Bold-webfont.13560040.ttf","1356004021c35e279adc37c22f66a619"],["/static/media/OpenSans-Bold-webfont.caba68b9.eot","caba68b9c5aa72a1a9729df5e1e490d2"],["/static/media/OpenSans-Bold-webfont.f9fc9780.woff","f9fc9780feed3b7444ba6277f067c7f5"],["/static/media/OpenSans-Light-webfont.05c88e41.woff","05c88e41fc725cb1974b99534a8f8357"],["/static/media/OpenSans-Light-webfont.62860e44.ttf","62860e44f4b4d6170308bf5c4dd6bd66"],["/static/media/OpenSans-Light-webfont.ab51d558.eot","ab51d55805917a0c914268929f786d8b"],["/static/media/OpenSans-Regular-webfont.898df6ac.ttf","898df6ace02d47164941381c9be0a0bc"],["/static/media/OpenSans-Regular-webfont.c8ffdeb3.woff","c8ffdeb3144d5055756ef01ef98e8486"],["/static/media/OpenSans-Regular-webfont.ef387175.eot","ef387175ee4070780d18892de7069260"],["/static/media/Vazir-Bold-FD-WOL.4b658612.ttf","4b658612ed525843d0797880c715b11b"],["/static/media/Vazir-Bold-FD-WOL.993e2a0d.eot","993e2a0d51926457d634c35400556191"],["/static/media/Vazir-Bold-FD-WOL.a3525eda.woff","a3525edacffc5644ee49c2999f95606a"],["/static/media/Vazir-FD-WOL.115bc007.ttf","115bc0075000d64c68421093773f8182"],["/static/media/Vazir-FD-WOL.5bac2423.woff","5bac2423be09ce76beb51a0f7bf42ab8"],["/static/media/Vazir-FD-WOL.6ff91b96.eot","6ff91b9653cbb6e2ae757a0d1e56cbf0"],["/static/media/Vazir-Light-FD-WOL.587e8187.ttf","587e8187ac317608a652f7236a4dd1e9"],["/static/media/Vazir-Light-FD-WOL.d279e68d.eot","d279e68d98d604062d21ef45751c8faa"],["/static/media/Vazir-Light-FD-WOL.ecc22ef4.woff","ecc22ef4673d8b958edca23f0e64e5a9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});