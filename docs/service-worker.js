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

var precacheConfig = [["404.html","0606528d553fcbb3a0b10fd8ece29ea2"],["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["categories/index.html","de0f6052b65175d6551a6366e7883dbe"],["categories/index.xml","ebd0ad383a6b2ad6c4eea9c80b3348e8"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/gravity.css","976953b96945c31ba337bf6d06cd36ad"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/normalize.css","c00914e9ce9078c99e3959b9814a69c1"],["css/prism.css","337252639c4e213360c52a6210d34835"],["css/styles.css","43b28dc166be8af9602d170ea46838be"],["images/favicon.ico","5e1a3fdfe6b24465e53bab17e6536810"],["images/favicon.png","ff553dc98126da60dc1bc929914fbc89"],["images/logo.svg","cc08ad42d312bba2f894bdde753b0d7e"],["index.html","9c502c913c202a0a6cea25c39f1d67f0"],["index.xml","b151129004235c4d73ce5dc17b8d0c73"],["js/dom-scripts.js","d1226c17a56c156113ee538031a0b6bf"],["js/prism.js","e4935f0fc1d2aa89c5a2fae0f458b987"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["manifest.json","084ab88de5dfc52bf757c083b65e2c34"],["patterns/coding/code-blocks/index.html","9b9746d8daa6d206df3a63772b202942"],["patterns/coding/color-palettes/index.html","2a4b6ff87a7a3f591eac2d6d4889d74f"],["patterns/coding/command-line/index.html","4e5b5aa24e78f154eec8444af7dcd119"],["patterns/coding/demo-embedding/index.html","b447579e568dc3928146982b8f2f572d"],["patterns/coding/file-trees/index.html","8438f13b6f5dc39bb44253560b95e0f6"],["patterns/coding/index.html","095989a419b29d285c93b9be0b7abdeb"],["patterns/coding/index.xml","98ccfb6d1fe8b6a92f5784afa32a7b83"],["patterns/coding/tested/index.html","719b83c3cf067168e762eeba628a87cb"],["patterns/coding/writing-inline-demos/index.html","d7eba984b6e4c355abda11c69ebe2a7e"],["patterns/index.html","68f9b6587061461fcdfe3aed4d2fb240"],["patterns/index.xml","6d8999f397110953d68c7eb043063328"],["patterns/installation/index.html","a9e2c247e77166c1b087c184c2da4012"],["patterns/media/including-images/index.html","363eea3f6a167c7a70226d29a632ccb7"],["patterns/media/including-videos/index.html","3d9641bee571ea6c5750f3be9039a288"],["patterns/media/index.html","300d8431c6e170e927a1f7f0e9bb6ce3"],["patterns/media/index.xml","b7c052bd74a6182379324299fda3d890"],["patterns/serving/index.html","097bba10ea74cbb355082602f2a3669b"],["patterns/setup/index.html","6305fbf2320f3780bbd147144e816265"],["patterns/updating/index.html","83ad52d9b5b89a56487a1ec143f2cdc0"],["patterns/writing/expandable-sections/index.html","82183cef9ea0379afafc6bb18e5c316d"],["patterns/writing/index.html","582dd64d693471206437143011d63338"],["patterns/writing/index.xml","b7a64ea4049bd9233ba63af80b4bae21"],["patterns/writing/markdown-and-metadata/index.html","3e0a8491ef6774a01ecae71cfd1f97f5"],["patterns/writing/notes-and-warnings/index.html","50f5536c9d00803849688e24fa2fcc18"],["patterns/writing/project-structure/index.html","9c8766800bbd094a24c8b45e6eab5ec6"],["patterns/writing/references/index.html","0bd1b3d5f933ab5998505ea05fc52431"],["patterns/writing/snippets/index.html","e87f0a391504ef9803c447e6283dfeca"],["patterns/writing/tables-of-contents/index.html","8521747e48e10f610f154be9b167c9ec"],["print-version/index.html","0f24f24a2cdf7335b0f80a3af72bed46"],["sitemap.xml","6fadc08159a400ca1ab3d68c56497ab9"],["tags/index.html","aafc71bc77217977ccda57c1b9995d94"],["tags/index.xml","909a497bbf21f0cb1c564875320ed30e"],["tags/markdown/index.html","cf47a6878dd57135d02cf1a136cce033"],["tags/markdown/index.xml","8cf23b25bdf2c8db073a0b646ad17ae2"],["tags/metadata/index.html","8423e4d6f5bd28d9829de1870803d576"],["tags/metadata/index.xml","bd08f6b066d9064e527b8f1a0edb4e87"]];
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







