export function editInfo(arr){
  info(arr)
}
function info(arr) {
    function o(w, v, i) { return w.getAttribute(v) || i } function j(i) { return document.getElementsByTagName(i) } function l() { var i = j("script"), w = i.length, v = i[w - 1]; return { l: w, z: o(v, "zIndex", -1), o: o(v, "opacity", 0), c: o(v, "color", "255,0,0"), n: o(v, "count", 99) } } function k() { r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight } function b() { e.clearRect(0, 0, r, n); var w = [f].concat(t); var x, v, A, B, z, y; t.forEach(function (i) { i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1); for (v = 0; v < w.length; v++) { x = w[v]; if (i !== x && null !== x.x && null !== x.y) { B = i.x - x.x, z = i.y - x.y, y = B * B + z * z; y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 1, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke()) } } w.splice(w.indexOf(i), 1) }), m(b) } var u = document.createElement("canvas"), s = l(), c = "c_n" + s.l, e = u.getContext("2d"), r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) { window.setTimeout(i, 1000 / 45) }, a = Math.random, f = { x: null, y: null, max: 20000 }; u.id = c; u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o; j("body")[0].appendChild(u); k(), window.onresize = k; window.onmousemove = function (i) { i = i || window.event, f.x = i.clientX, f.y = i.clientY }, window.onmouseout = function () { f.x = null, f.y = null }; for (var t = [], p = 0; s.n > p; p++) { var h = a() * r, g = a() * n, q = 2 * a() - 1, d = 2 * a() - 1; t.push({ x: h, y: g, xa: q, ya: d, max: 6000 }) } setTimeout(function () { b() }, 100); var a_idx = 0;
    jQuery(document).ready(function ($) {
        $("body").click(function (e) {
            var a;
            if(arr != null && arr != '' && arr.length > 0){
              a = arr
            } else {
              a = new Array("❤加油！❤", "❤干巴爹❤", "❤wink！❤", "❤努力❤", "I ❤ YOU", "❤你好呀！❤");
            }
            var $i = $("<span></span>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            },
                1500,
                function () {
                    $i.remove();
                });
        });
    });
    var hidden, state, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
        state = "visibilityState";
    } else if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
        state = "mozVisibilityState";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
        state = "msVisibilityState";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
        state = "webkitVisibilityState";
    }

    // 添加监听器，在title里显示状态变化
    document.addEventListener(visibilityChange, function () {
        //document.title = document[state];
        if (document.hidden) {
            //用户没有在看本页面，
            document.title = '⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄我已经藏好了哦';
        } else {
            document.title = '(*^▽^*)被你找到了';
            var T = setInterval(() => {
                document.title = '骑上我心爱的小摩托';
                clearInterval(T);
            }, 1000);
        }
    }, false);
};
