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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f762363da7073c07544ab2871db80dd"
  },
  {
    "url": "assets/css/0.styles.77d380c9.css",
    "revision": "247d85d7a066578191e2fa59d8e8aa73"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/UserCreating.47a59dbf.png",
    "revision": "47a59dbf3edac7b9221df052867c3338"
  },
  {
    "url": "assets/img/UserDelete.39b9fdca.png",
    "revision": "39b9fdcae61d71aba92db6783090aab9"
  },
  {
    "url": "assets/img/UserGet.fa5955ff.png",
    "revision": "fa5955ff1ff10e08e8f50fb1ff5012b6"
  },
  {
    "url": "assets/img/UserGetAfterDelete.2e17ee78.png",
    "revision": "2e17ee78b2dffca3d2ec442d3bfb9bdb"
  },
  {
    "url": "assets/js/10.98b1d7e6.js",
    "revision": "2ae075bcbfc3d9d9d9f3658deff768ee"
  },
  {
    "url": "assets/js/11.bb753238.js",
    "revision": "94c1a8e8d7722081c445a569b3133dc3"
  },
  {
    "url": "assets/js/12.022538e1.js",
    "revision": "a603ee8224338f0bd66f9a1169297313"
  },
  {
    "url": "assets/js/13.698c8118.js",
    "revision": "8d9da4ed3e33e8e34806ea43a66888a1"
  },
  {
    "url": "assets/js/14.270df476.js",
    "revision": "51e09efc5fd2d50d650b061b37711cc2"
  },
  {
    "url": "assets/js/15.29e947fa.js",
    "revision": "179a5f75ba42176ae752a5ec5db116f7"
  },
  {
    "url": "assets/js/16.3487f88a.js",
    "revision": "e1de404ab1d561c9bc2195cb007ea512"
  },
  {
    "url": "assets/js/17.fed2a163.js",
    "revision": "c090b9ec16858d51d158a8c0a9fa0154"
  },
  {
    "url": "assets/js/18.328732e1.js",
    "revision": "f4fd3d64a7cb80bae019ed423d54a907"
  },
  {
    "url": "assets/js/19.a5da7237.js",
    "revision": "49211665ccfafdfc373903fe497aa7ba"
  },
  {
    "url": "assets/js/2.86fed9d5.js",
    "revision": "387eee010feff9b8611d6af5bb53808e"
  },
  {
    "url": "assets/js/20.a5fe811b.js",
    "revision": "f3bd4d46abfa35df6605dc8dcd16eff4"
  },
  {
    "url": "assets/js/21.7cbe9dff.js",
    "revision": "1ecfd5f9ad944f1568529a51486cee66"
  },
  {
    "url": "assets/js/22.b3a4358c.js",
    "revision": "83f10d3f0a2581d364ff767aaf162549"
  },
  {
    "url": "assets/js/23.b7f8f058.js",
    "revision": "955520f33d2545a809323f4b8a2d9b49"
  },
  {
    "url": "assets/js/24.4c63abc0.js",
    "revision": "bb66195ca1fd631e01dabc99421c9ac5"
  },
  {
    "url": "assets/js/26.50db2776.js",
    "revision": "2366541b1883d3ba3aaa9fc6a045dc87"
  },
  {
    "url": "assets/js/3.7a0abf1c.js",
    "revision": "3d17207ea65a50f85ad24055a3868e63"
  },
  {
    "url": "assets/js/4.387c7237.js",
    "revision": "40c3930454fe8f75c808abbec5651595"
  },
  {
    "url": "assets/js/5.e9a692b2.js",
    "revision": "4df2ad404675fbb3db645e412652ce8b"
  },
  {
    "url": "assets/js/6.e06c244c.js",
    "revision": "b895ea23a0f1edb3394fe034b0f57492"
  },
  {
    "url": "assets/js/7.115ef3ab.js",
    "revision": "469233d70a9cfcd04a89e81e32f4fff8"
  },
  {
    "url": "assets/js/8.fdcdae34.js",
    "revision": "422e098e9d18ed44904bf0437c31e62c"
  },
  {
    "url": "assets/js/9.63d364d4.js",
    "revision": "80683277c6f12d517c9194192b7106d7"
  },
  {
    "url": "assets/js/app.e6c270ff.js",
    "revision": "03c182ae7a475fa288daa41c785b60d7"
  },
  {
    "url": "conclusion/index.html",
    "revision": "fe09b4e86e7b90c639cd6842fa31e564"
  },
  {
    "url": "design/index.html",
    "revision": "ba81569d059356e6896da7d8759aba4d"
  },
  {
    "url": "image_2023-11-27_12-34-32.png",
    "revision": "820893c679183a2ec1c77e6f83142a24"
  },
  {
    "url": "index.html",
    "revision": "941e6871fc925d03be11fd7079200419"
  },
  {
    "url": "intro/index.html",
    "revision": "ab66ca0f12ab9a328ea9df277723f44f"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1f86f85d9b153dd7bbdda936ba425ecb"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "847a58140dcd76c21e7455c18d85a002"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3d4792ffbd8356153801729499e7b82e"
  },
  {
    "url": "software/index.html",
    "revision": "9c290d526310a28d1d9cb2614ded2bd4"
  },
  {
    "url": "test/index.html",
    "revision": "e1bdb4cecd4d7992bcb773c6851d991a"
  },
  {
    "url": "use cases/index.html",
    "revision": "0b896a88a570c984de734d51b2ccfe00"
  }
].concat(self.__precacheManifest || []);
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
