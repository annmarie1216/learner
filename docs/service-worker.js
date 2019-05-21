/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","6a5ed319a54f2c6ac3fedd4da41dde8e"],["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["categories/index.html","ac2e2d311e3eab6fb5cbf0a0efe658e2"],["categories/index.xml","ebd0ad383a6b2ad6c4eea9c80b3348e8"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/gravity.css","976953b96945c31ba337bf6d06cd36ad"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/normalize.css","c00914e9ce9078c99e3959b9814a69c1"],["css/prism.css","337252639c4e213360c52a6210d34835"],["css/styles.css","2a185c59002d77271babfb83740ae337"],["images/favicon.ico","5e1a3fdfe6b24465e53bab17e6536810"],["images/favicon.png","ff553dc98126da60dc1bc929914fbc89"],["images/logo.svg","cc08ad42d312bba2f894bdde753b0d7e"],["index.html","4acecd8c686d2acd652a7e21f880cfa4"],["index.xml","b151129004235c4d73ce5dc17b8d0c73"],["js/dom-scripts.js","d1226c17a56c156113ee538031a0b6bf"],["js/prism.js","e4935f0fc1d2aa89c5a2fae0f458b987"],["js/service-worker-registration.js","a1be15ac6f2ebf3154059f31ac89bd80"],["manifest.json","084ab88de5dfc52bf757c083b65e2c34"],["patterns/coding/code-blocks/index.html","207aaa18eba526e5dbe75d3eac40d874"],["patterns/coding/color-palettes/index.html","d1723ebb6f5858859f4adf13706ec9ed"],["patterns/coding/command-line/index.html","d9c1128d670748f627bdfa5ffb28757e"],["patterns/coding/demo-embedding/index.html","c5d6ec8b2150c1c43060bcedde7d984c"],["patterns/coding/file-trees/index.html","fe7deafaac3f22743028142ec5f1598a"],["patterns/coding/index.html","906fa1b361beb7a81213ea13db14f9d0"],["patterns/coding/index.xml","98ccfb6d1fe8b6a92f5784afa32a7b83"],["patterns/coding/tested/index.html","89eb95b656670725fe99b8691c73e93b"],["patterns/coding/writing-inline-demos/index.html","9d8d52796df91d9272500fc929fdb193"],["patterns/index.html","f8cf424a229f9555291e1af962571dd9"],["patterns/index.xml","6d8999f397110953d68c7eb043063328"],["patterns/installation/index.html","938f4d2224380c805a5c3c445ab717fd"],["patterns/media/including-images/index.html","db8ebccdc8635f7e0b092ac5398a4903"],["patterns/media/including-videos/index.html","e19c95bbd220a922651f55a5ebbd8ef4"],["patterns/media/index.html","65caf266b102a672d5301b07a4e951a3"],["patterns/media/index.xml","b7c052bd74a6182379324299fda3d890"],["patterns/serving/index.html","8a1c3c4096c5bd3ff691c34fcbf99906"],["patterns/setup/index.html","6ded233e9846ae071318974025776cb6"],["patterns/updating/index.html","cb93d59a2185649a52876417401bb9c8"],["patterns/writing/expandable-sections/index.html","1090a25da9cdc957a420d0b867e254fd"],["patterns/writing/index.html","f4948b9762043bac77969c9e9435d2dd"],["patterns/writing/index.xml","b7a64ea4049bd9233ba63af80b4bae21"],["patterns/writing/markdown-and-metadata/index.html","31931c3fc3b442fafc0f861dbc1cbdec"],["patterns/writing/notes-and-warnings/index.html","670bf04dddb5c49a54c999974ad942a7"],["patterns/writing/project-structure/index.html","78f696addd8e4578b6aa2b8c30c5935a"],["patterns/writing/references/index.html","c8df75123563ca6ea8435c23a91fa8e3"],["patterns/writing/snippets/index.html","0f2ebd0ea3cfb5d068a2c1c846afbde2"],["patterns/writing/tables-of-contents/index.html","64733a196e76ba1da53eb258664ac7d9"],["print-version/index.html","b9cef400dbd5a25bd2a764b072d019f6"],["sitemap.xml","6fadc08159a400ca1ab3d68c56497ab9"],["tags/index.html","dd11977782f34aff0e6b922767710913"],["tags/index.xml","909a497bbf21f0cb1c564875320ed30e"],["tags/markdown/index.html","9e0f98d06935dce464641edb4d25a208"],["tags/markdown/index.xml","8cf23b25bdf2c8db073a0b646ad17ae2"],["tags/metadata/index.html","40e00e01af024631a413c27c148f90d1"],["tags/metadata/index.xml","bd08f6b066d9064e527b8f1a0edb4e87"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







