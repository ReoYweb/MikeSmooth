$(".header__menu").on("click", function() {
  $(".header__menu__line").toggleClass("active");
  $(".gnav").fadeToggle();
});

//parallax

window.addEventListener("scroll", e => {
  let scrolled = window.pageYOffset;
  const background = document.querySelector(".parallax");
  background.style.top = -(scrolled * 0.2) + "px";
});

window.addEventListener("scroll", e => {
  let scrolled = window.pageYOffset;
  const background = document.querySelector(".parallax2");
  background.style.top = -(scrolled * 0.17) + "px";
});

window.addEventListener("scroll", e => {
  let scrolled = window.pageYOffset;
  const background = document.querySelector(".parallax3");
  background.style.top = -(scrolled * 0.1) + "px";
});

jQuery(function($) {
  var ua = navigator.userAgent.toLowerCase();

  // windowsのみ適用 macやiphone、ipadも適用させない
  var isWindows =
    ua.indexOf("windows") > -1 &&
    !(ua.indexOf("mac") > -1 && ua.indexOf("os") > -1) &&
    !(ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1);

  if (isWindows) {
    $("html").easeScroll({
      frameRate: 100, //数値が大きいほど滑らか。ただしパソコンの負担も大きくなる。
      animationTime: 1000, //動いている時間
      stepSize: 45, //動く距離
      pulseAlgorithm: 1, //ここは１で問題ない
      pulseScale: 8, //ブレーキを調整。値が大きいとブレーキが強くなる
      pulseNormalize: 1, //ここは１で問題ない
      accelerationDelta: 20, //加速度。数値を変えても変化が分からず
      accelerationMax: 1, //加速度。数値を変えても変化が分からず
      keyboardSupport: true, //キーボード矢印でも動かすか
      arrowScroll: 30, //矢印で動かす距離
      touchpadSupport: true, //スマホ、タブレットでも適用させるかどうか
      fixedBackground: false //背景に影響を与えるか。変化分からず
    });
  }
});
