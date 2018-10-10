/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dd1cb743c2af09a08413ed39a8c40242"
  },
  {
    "url": "api/index.html",
    "revision": "9ffee4e6718c0db8b3053900ab83df15"
  },
  {
    "url": "assets/css/1.styles.240d2d87.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.9c4e6aae.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.615dc150.css",
    "revision": "a3c18a3d10ae71890f263e9189962e48"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.240d2d87.js",
    "revision": "c94528d61f2ece683d7bc83a04a8383c"
  },
  {
    "url": "assets/js/2.9c4e6aae.js",
    "revision": "babfb9d45ba0ffb9c206700105999234"
  },
  {
    "url": "assets/js/3.bd719920.js",
    "revision": "0e44224d070d39ff9af5679e39776f7c"
  },
  {
    "url": "assets/js/4.892698a9.js",
    "revision": "9fc1e7b1d16e878925e2c0db428cea6e"
  },
  {
    "url": "assets/js/5.b776e3b0.js",
    "revision": "43ba245eca867c8002738cc930deb1fd"
  },
  {
    "url": "assets/js/6.41c4c74a.js",
    "revision": "bda63588f812ad90d18992b9d131bc87"
  },
  {
    "url": "assets/js/app.615dc150.js",
    "revision": "18fccfa0a9c762750c8ec2908a3b0e24"
  },
  {
    "url": "examples/index.html",
    "revision": "c522ea09fd8101b289bd157a94b193d0"
  },
  {
    "url": "guide/index.html",
    "revision": "8a850626f8ac7c266b11b29f7cae083d"
  },
  {
    "url": "index.html",
    "revision": "51942bd1f929d1e0900a63d22a4d384e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
