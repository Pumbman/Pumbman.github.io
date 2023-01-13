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
    "revision": "092aade08eff39310feef5a8e932f3b0"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.699101db.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.91137e2e.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.64843a3d.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.f90024b9.js",
    "revision": "03ecf82cefce3ebbbb2644c493aaa943"
  },
  {
    "url": "assets/js/13.0b336a3a.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.7410e8f6.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.493e64d8.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.3fc9d872.js",
    "revision": "22924c3aa81d9c82f861200aec5d4679"
  },
  {
    "url": "assets/js/17.2a8347cc.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.1c1c216b.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.7c166c6e.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.c83ba2a7.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.8a7b446c.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.4310cadf.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.580d8333.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.1d517a95.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.54938adf.js",
    "revision": "58bba89b216cb4535aa42e78e052c49b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "4c5fbbc1aa824f95a5f81df42d06fde6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bb9045b5c03a5a601cfc6d0e47ba97f5"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "335c38c5c92d8cffc156ff8b5905790e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c731b7b463a220ef8ff6d703d262a7e9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a5a422ed3adb4fcc36766ee68108c255"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f835c480c304f13fc0acd2e753ad04b1"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "80a2b6b2e9cb1146a0b18268a6afe4ca"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "42b7f1963bca03718e25a555b93d7f5f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4f2f5bc1d415f46df981a89e8403b3e8"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "503c179e46d620f9352107c1c847de74"
  },
  {
    "url": "tags/js/index.html",
    "revision": "cebd28638eb6e9a38919aad9e75cfb8e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f11683640e10d512652a05c4367cf891"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ff1c3274c04c55e2b680d5ac5bbe9805"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c6404636e7e18012d888b103791814e7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "64595fd5d82278b38bf166aba0615d4e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f11d4106748864c50423b1aaf5c5ae91"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "32c49aac4aa51e4966717c5589466b65"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e8649de1a25e3a1c1e9548f0d603525c"
  },
  {
    "url": "timeline/index.html",
    "revision": "26a53693a79fe16278bb31c9810a5227"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5dafcd7ac9d1e5c054b5bd9a3bd6c018"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7574aa2f4feca326b595e60f42b80db2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "26f8644826a24f5ceb5d13db30d823aa"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cea5d8da720e61b5427a29481f71b274"
  },
  {
    "url": "生活分享/life.html",
    "revision": "cee5aaed3cddde26ada6295153dd4ea9"
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
