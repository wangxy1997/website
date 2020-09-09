/* eslint-disable */
// Setting ico for cnblogs
var linkObject = document.createElement('link')
linkObject.rel = 'shortcut icon'
linkObject.href = 'https://files.cnblogs.com/files/wulicute-TS/icon.bmp'
document.getElementsByTagName('head')[0].appendChild(linkObject)
console.log(`く__,.ヘヽ.　　　　/　, ー､ 〉
		＼ ', !-─‐-i　/　/´
		／｀ｰ'　　　 L/／｀ヽ､
	/　 ／, /|　 ,　 ,　　　 ',
　　　ｲ / /-‐/　ｉ　L_ ﾊ ヽ!　 i
　　　 ﾚ ﾍ 7ｲ｀ﾄ　 ﾚ'ｧ-ﾄ､!ハ|　 |
　　　　 !, /7 '0'　　 ´0iソ| 　 |　　　
	|.从"　　_　　 ,,,, / |./ 　 |
　　　　 ﾚ'| i＞.､,,__　_,.イ / 　.i 　|
　　　　　 ﾚ'| | / k_７_/ﾚ'ヽ, ﾊ.　|
　　　　　　 | | /i 〈|/　 i,.ﾍ | i |
　　　　　　.| / /　ｉ： 　 ﾍ!　　＼　|
	kヽ >､ﾊ 　 _,.ﾍ､ 　 /､!
　　　　　　 !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
　　　　　　 ﾚ'ヽL__|___i,___,ンﾚ|ノ
　　　　　 　　　ﾄ -, /　|___./
　　　　　 　　　'ｰ'!_,.: `)
console.log('哎呀呀被你发现了!')
console.log('%c ', 'background:url(https://files.cnblogs.com/files/wulicute-TS/0.bmp) no-repeat center;background-size: 300px 300px;padding-left:100%;padding-bottom:20%;overflow:hidden;border-radius:10px;margin:5px 0')
// 点击爆炸花花
var $jscomp = {scope: {}}
$jscomp.defineProperty = typeof Object.defineProperties === 'function' ? Object.defineProperty : function (e, r, p) {
  if (p.get || p.set) throw new TypeError('ES3 does not support getters and setters.')
  e != Array.prototype && e != Object.prototype && (e[r] = p.value)
}
$jscomp.getGlobal = function (e) {
  return typeof window !== 'undefined' && window === e ? e : typeof global !== 'undefined' && global != null ? global : e
}
$jscomp.global = $jscomp.getGlobal(this)
$jscomp.SYMBOL_PREFIX = 'jscomp_symbol_'
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {
  }
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}
$jscomp.symbolCounter_ = 0
$jscomp.Symbol = function (e) {
  return $jscomp.SYMBOL_PREFIX + (e || '') + $jscomp.symbolCounter_++
}
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol()
  var e = $jscomp.global.Symbol.iterator
  e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol('iterator'))
  typeof Array.prototype[e] !== 'function' && $jscomp.defineProperty(Array.prototype, e, {
    configurable: !0,
    writable: !0,
    value: function () {
      return $jscomp.arrayIterator(this)
    }
  })
  $jscomp.initSymbolIterator = function () {
  }
}
$jscomp.arrayIterator = function (e) {
  var r = 0
  return $jscomp.iteratorPrototype(function () {
    return r < e.length ? {done: !1, value: e[r++]} : {done: !0}
  })
}
$jscomp.iteratorPrototype = function (e) {
  $jscomp.initSymbolIterator()
  e = {next: e}
  e[$jscomp.global.Symbol.iterator] = function () {
    return this
  }
  return e
}
$jscomp.array = $jscomp.array || {}
$jscomp.iteratorFromArray = function (e, r) {
  $jscomp.initSymbolIterator()
  e instanceof String && (e += '')
  var p = 0, m = {
    next: function () {
      if (p < e.length) {
        var u = p++
        return {value: r(u, e[u]), done: !1}
      }
      m.next = function () {
        return {done: !0, value: void 0}
      }
      return m.next()
    }
  }
  m[Symbol.iterator] = function () {
    return m
  }
  return m
}
$jscomp.polyfill = function (e, r, p, m) {
  if (r) {
    p = $jscomp.global
    e = e.split('.')
    for (m = 0; m < e.length - 1; m++) {
      var u = e[m]
      u in p || (p[u] = {})
      p = p[u]
    }
    e = e[e.length - 1]
    m = p[e]
    r = r(m)
    r != m && r != null && $jscomp.defineProperty(p, e, {configurable: !0, writable: !0, value: r})
  }
}
$jscomp.polyfill('Array.prototype.keys', function (e) {
  return e || function () {
    return $jscomp.iteratorFromArray(this, function (e) {
      return e
    })
  }
}, 'es6-impl', 'es3')
var $jscomp$this = this;
(function (e, r) {
  typeof define === 'function' && define.amd ? define([], r) : typeof module === 'object' && module.exports ? module.exports = r() : e.anime = r()
})(this, function () {
  function e (a) {
    if (!h.col(a)) {
      try {
        return document.querySelectorAll(a)
      } catch (c) {
      }
    }
  }

  function r (a, c) {
    for (var d = a.length, b = arguments.length >= 2 ? arguments[1] : void 0, f = [], n = 0; n < d; n++) {
      if (n in a) {
        var k = a[n]
        c.call(b, k, n, a) && f.push(k)
      }
    }
    return f
  }

  function p (a) {
    return a.reduce(function (a, d) {
      return a.concat(h.arr(d) ? p(d) : d)
    }, [])
  }

  function m (a) {
    if (h.arr(a)) return a
    h.str(a) && (a = e(a) || a)
    return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a]
  }

  function u (a, c) {
    return a.some(function (a) {
      return a === c
    })
  }

  function C (a) {
    var c = {}, d
    for (d in a) c[d] = a[d]
    return c
  }

  function D (a, c) {
    var d = C(a), b
    for (b in a) d[b] = c.hasOwnProperty(b) ? c[b] : a[b]
    return d
  }

  function z (a, c) {
    var d = C(a), b
    for (b in c) d[b] = h.und(a[b]) ? c[b] : a[b]
    return d
  }

  function T (a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, k) {
      return c + c + d + d + k + k
    })
    var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)
    a = parseInt(c[1], 16)
    var d = parseInt(c[2], 16), c = parseInt(c[3], 16)
    return 'rgba(' + a + ',' + d + ',' + c + ',1)'
  }

  function U (a) {
    function c (a, c, b) {
      b < 0 && (b += 1)
      b > 1 && --b
      return b < 1 / 6 ? a + 6 * (c - a) * b : b < 0.5 ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a
    }

    var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a)
    a = parseInt(d[1]) / 360
    var b = parseInt(d[2]) / 100, f = parseInt(d[3]) / 100, d = d[4] || 1
    if (b == 0) {
      f = b = a = f
    } else {
      var n = f < 0.5 ? f * (1 + b) : f + b - f * b, k = 2 * f - n, f = c(k, n, a + 1 / 3), b = c(k, n, a)
      a = c(k, n, a - 1 / 3)
    }
    return 'rgba(' +
      255 * f + ',' + 255 * b + ',' + 255 * a + ',' + d + ')'
  }

  function y (a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2]
  }

  function V (a) {
    if (a.indexOf('translate') > -1 || a === 'perspective') return 'px'
    if (a.indexOf('rotate') > -1 || a.indexOf('skew') > -1) return 'deg'
  }

  function I (a, c) {
    return h.fnc(a) ? a(c.target, c.id, c.total) : a
  }

  function E (a, c) {
    if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()) || '0'
  }

  function J (a, c) {
    if (h.dom(a) &&
      u(W, c)) {
      return 'transform'
    }
    if (h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c])) return 'attribute'
    if (h.dom(a) && c !== 'transform' && E(a, c)) return 'css'
    if (a[c] != null) return 'object'
  }

  function X (a, c) {
    var d = V(c), d = c.indexOf('scale') > -1 ? 1 : 0 + d
    a = a.style.transform
    if (!a) return d
    for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);) f.push(b[1]), n.push(b[2])
    a = r(n, function (a, b) {
      return f[b] === c
    })
    return a.length ? a[0] : d
  }

  function K (a, c) {
    switch (J(a, c)) {
      case 'transform':
        return X(a, c)
      case 'css':
        return E(a, c)
      case 'attribute':
        return a.getAttribute(c)
    }
    return a[c] ||
      0
  }

  function L (a, c) {
    var d = /^(\*=|\+=|-=)/.exec(a)
    if (!d) return a
    var b = y(a) || 0
    c = parseFloat(c)
    a = parseFloat(a.replace(d[0], ''))
    switch (d[0][0]) {
      case '+':
        return c + a + b
      case '-':
        return c - a + b
      case '*':
        return c * a + b
    }
  }

  function F (a, c) {
    return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2))
  }

  function M (a) {
    a = a.points
    for (var c = 0, d, b = 0; b < a.numberOfItems; b++) {
      var f = a.getItem(b)
      b > 0 && (c += F(d, f))
      d = f
    }
    return c
  }

  function N (a) {
    if (a.getTotalLength) return a.getTotalLength()
    switch (a.tagName.toLowerCase()) {
      case 'circle':
        return 2 *
          Math.PI * a.getAttribute('r')
      case 'rect':
        return 2 * a.getAttribute('width') + 2 * a.getAttribute('height')
      case 'line':
        return F({x: a.getAttribute('x1'), y: a.getAttribute('y1')}, {
          x: a.getAttribute('x2'),
          y: a.getAttribute('y2')
        })
      case 'polyline':
        return M(a)
      case 'polygon':
        var c = a.points
        return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0))
    }
  }

  function Y (a, c) {
    function d (b) {
      b = void 0 === b ? 0 : b
      return a.el.getPointAtLength(c + b >= 1 ? c + b : 0)
    }

    var b = d(), f = d(-1), n = d(1)
    switch (a.property) {
      case 'x':
        return b.x
      case 'y':
        return b.y
      case 'angle':
        return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI
    }
  }

  function O (a, c) {
    var d = /-?\d*\.?\d+/g, b
    b = h.pth(a) ? a.totalLength : a
    if (h.col(b)) {
      if (h.rgb(b)) {
        var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b)
        b = f ? 'rgba(' + f[1] + ',1)' : b
      } else {
        b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0
      }
    } else {
      f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f
    }
    b += ''
    return {original: b, numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: h.str(a) || c ? b.split(d) : []}
  }

  function P (a) {
    a = a ? p(h.arr(a) ? a.map(m) : m(a)) : []
    return r(a,
      function (a, d, b) {
        return b.indexOf(a) === d
      })
  }

  function Z (a) {
    var c = P(a)
    return c.map(function (a, b) {
      return {target: a, id: b, total: c.length}
    })
  }

  function aa (a, c) {
    var d = C(c)
    if (h.arr(a)) {
      var b = a.length
      b !== 2 || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = {value: a}
    }
    return m(a).map(function (a, b) {
      b = b ? 0 : c.delay
      a = h.obj(a) && !h.pth(a) ? a : {value: a}
      h.und(a.delay) && (a.delay = b)
      return a
    }).map(function (a) {
      return z(a, d)
    })
  }

  function ba (a, c) {
    var d = {}, b
    for (b in a) {
      var f = I(a[b], c)
      h.arr(f) && (f = f.map(function (a) {
        return I(a,
          c)
      }), f.length === 1 && (f = f[0]))
      d[b] = f
    }
    d.duration = parseFloat(d.duration)
    d.delay = parseFloat(d.delay)
    return d
  }

  function ca (a) {
    return h.arr(a) ? A.apply(this, a) : Q[a]
  }

  function da (a, c) {
    var d
    return a.tweens.map(function (b) {
      b = ba(b, c)
      var f = b.value, e = K(c.target, a.name), k = d ? d.to.original : e, k = h.arr(f) ? f[0] : k,
        w = L(h.arr(f) ? f[1] : f, k), e = y(w) || y(k) || y(e)
      b.from = O(k, e)
      b.to = O(w, e)
      b.start = d ? d.end : a.offset
      b.end = b.start + b.delay + b.duration
      b.easing = ca(b.easing)
      b.elasticity = (1E3 - Math.min(Math.max(b.elasticity, 1), 999)) /
        1E3
      b.isPath = h.pth(f)
      b.isColor = h.col(b.from.original)
      b.isColor && (b.round = 1)
      return d = b
    })
  }

  function ea (a, c) {
    return r(p(a.map(function (a) {
      return c.map(function (b) {
        var c = J(a.target, b.name)
        if (c) {
          var d = da(b, a)
          b = {type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay}
        } else {
          b = void 0
        }
        return b
      })
    })), function (a) {
      return !h.und(a)
    })
  }

  function R (a, c, d, b) {
    var f = a === 'delay'
    return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function (b) {
      return b[a]
    })) : f ? b.delay : d.offset + b.delay +
      b.duration
  }

  function fa (a) {
    var c = D(ga, a), d = D(S, a), b = Z(a.targets), f = [], e = z(c, d), k
    for (k in a) e.hasOwnProperty(k) || k === 'targets' || f.push({name: k, offset: e.offset, tweens: aa(a[k], d)})
    a = ea(b, f)
    return z(c, {
      children: [],
      animatables: b,
      animations: a,
      duration: R('duration', a, c, d),
      delay: R('delay', a, c, d)
    })
  }

  function q (a) {
    function c () {
      return window.Promise && new Promise(function (resolve) {
        return p = a
      })
    }

    function d (a) {
      return g.reversed ? g.duration - a : a
    }

    function b (a) {
      for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
        var e = d[b],
          k = e.animatable, h = e.tweens, n = h.length - 1, l = h[n]
        n && (l = r(h, function (b) {
          return a < b.end
        })[0] || l)
        for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) {
          var x = void 0, x = l.to.numbers[t], q = l.from.numbers[t],
            x = l.isPath ? Y(l.value, w * x) : q + w * (x - q)
          p && (l.isColor && t > 2 || (x = Math.round(x * p) / p))
          n.push(x)
        }
        if (l = h.length) {
          for (m = h[0], w = 0; w < l; w++) p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + ' '))
        } else {
          m = n[0]
        }
        ha[e.type](k.target, e.property, m, c, k.id)
        e.currentValue = m
        b++
      }
      if (b = Object.keys(c).length) for (d = 0; d < b; d++) H || (H = E(document.body, 'transform') ? 'transform' : '-webkit-transform'), g.animatables[d].target.style[H] = c[d].join(' ')
      g.currentTime = a
      g.progress = a / g.duration * 100
    }

    function f (a) {
      if (g[a]) g[a](g)
    }

    function e () {
      g.remaining && !0 !== g.remaining && g.remaining--
    }

    function k (a) {
      var k = g.duration, n = g.offset, w = n + g.delay, r = g.currentTime, x = g.reversed, q = d(a)
      if (g.children.length) {
        var u = g.children, v = u.length
        if (q >= g.currentTime) {
          for (var G = 0; G < v; G++) u[G].seek(q)
        } else {
          for (; v--;) u[v].seek(q)
        }
      }
      if (q >= w || !k) g.began || (g.began = !0, f('begin')), f('run')
      if (q > n && q < k) {
        b(q)
      } else if (q <= n && r !== 0 && (b(0), x && e()), q >= k && r !== k || !k) {
        b(k), x || e()
      }
      f('update')
      a >= k && (g.remaining ? (t = h, g.direction === 'alternate' && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f('complete'), 'Promise' in window && (p(), m = c()))), l = 0)
    }

    a = void 0 === a ? {} : a
    var h, t, l = 0, p = null, m = c(), g = fa(a)
    g.reset = function () {
      var a = g.direction, c = g.loop
      g.currentTime =
        0
      g.progress = 0
      g.paused = !0
      g.began = !1
      g.completed = !1
      g.reversed = a === 'reverse'
      g.remaining = a === 'alternate' && c === 1 ? 2 : c
      b(0)
      for (a = g.children.length; a--;) g.children[a].reset()
    }
    g.tick = function (a) {
      h = a
      t || (t = h)
      k((l + h - t) * q.speed)
    }
    g.seek = function (a) {
      k(d(a))
    }
    g.pause = function () {
      var a = v.indexOf(g)
      a > -1 && v.splice(a, 1)
      g.paused = !0
    }
    g.play = function () {
      g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia())
    }
    g.reverse = function () {
      g.reversed = !g.reversed
      t = 0
      l = d(g.currentTime)
    }
    g.restart = function () {
      g.pause()
      g.reset()
      g.play()
    }
    g.finished = m
    g.reset()
    g.autoplay && g.play()
    return g
  }

  var ga = {
      update: void 0,
      begin: void 0,
      run: void 0,
      complete: void 0,
      loop: 1,
      direction: 'normal',
      autoplay: !0,
      offset: 0
    }, S = {duration: 1E3, delay: 0, easing: 'easeOutElastic', elasticity: 500, round: 0},
    W = 'translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective'.split(' '),
    H, h = {
      arr: function (a) {
        return Array.isArray(a)
      },
      obj: function (a) {
        return Object.prototype.toString.call(a).indexOf('Object') > -1
      },
      pth: function (a) {
        return h.obj(a) && a.hasOwnProperty('totalLength')
      },
      svg: function (a) {
        return a instanceof SVGElement
      },
      dom: function (a) {
        return a.nodeType || h.svg(a)
      },
      str: function (a) {
        return typeof a === 'string'
      },
      fnc: function (a) {
        return typeof a === 'function'
      },
      und: function (a) {
        return typeof a === 'undefined'
      },
      hex: function (a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      },
      rgb: function (a) {
        return /^rgb/.test(a)
      },
      hsl: function (a) {
        return /^hsl/.test(a)
      },
      col: function (a) {
        return h.hex(a) || h.rgb(a) || h.hsl(a)
      }
    }, A = (function () {
      function a (a,
        d, b) {
        return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a
      }

      return function (c, d, b, f) {
        if (c >= 0 && c <= 1 && b >= 0 && b <= 1) {
          var e = new Float32Array(11)
          if (c !== d || b !== f) for (var k = 0; k < 11; ++k) e[k] = a(0.1 * k, c, b)
          return function (k) {
            if (c === d && b === f) return k
            if (k === 0) return 0
            if (k === 1) return 1
            for (var h = 0, l = 1; l !== 10 && e[l] <= k; ++l) h += 0.1
            --l
            var l = h + (k - e[l]) / (e[l + 1] - e[l]) * 0.1,
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c
            if (n >= 0.001) {
              for (h = 0; h < 4; ++h) {
                n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c
                if (n === 0) break
                var m = a(l, c, b) - k, l = l - m / n
              }
              k = l
            } else if (n ===
              0) {
              k = l
            } else {
              var l = h, h = h + 0.1, g = 0
              do { m = l + (h - l) / 2, n = a(m, c, b) - k, n > 0 ? h = m : l = m } while (Math.abs(n) > 1e-7 && ++g < 10)
              k = m
            }
            return a(k, d, f)
          }
        }
      }
    }()), Q = (function () {
      function a (a, b) {
        return a === 0 || a === 1 ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b)
      }

      var c = 'Quad Cubic Quart Quint Sine Expo Circ Back Elastic'.split(' '), d = {
          In: [[0.55, 0.085, 0.68, 0.53], [0.55, 0.055, 0.675, 0.19], [0.895, 0.03, 0.685, 0.22], [0.755, 0.05, 0.855, 0.06], [0.47, 0, 0.745, 0.715], [0.95, 0.05, 0.795, 0.035], [0.6, 0.04, 0.98, 0.335], [0.6, -0.28, 0.735, 0.045], a],
          Out: [[0.25,
            0.46, 0.45, 0.94], [0.215, 0.61, 0.355, 1], [0.165, 0.84, 0.44, 1], [0.23, 1, 0.32, 1], [0.39, 0.575, 0.565, 1], [0.19, 1, 0.22, 1], [0.075, 0.82, 0.165, 1], [0.175, 0.885, 0.32, 1.275], function (b, c) {
            return 1 - a(1 - b, c)
          }],
          InOut: [[0.455, 0.03, 0.515, 0.955], [0.645, 0.045, 0.355, 1], [0.77, 0, 0.175, 1], [0.86, 0, 0.07, 1], [0.445, 0.05, 0.55, 0.95], [1, 0, 0, 1], [0.785, 0.135, 0.15, 0.86], [0.68, -0.55, 0.265, 1.55], function (b, c) {
            return b < 0.5 ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2
          }]
        }, b = {linear: A(0.25, 0.25, 0.75, 0.75)}, f = {}, e
      for (e in d) {
        f.type = e, d[f.type].forEach(function (a) {
          return function (d, f) {
            b['ease' + a.type + c[f]] = h.fnc(d)
              ? d : A.apply($jscomp$this, d)
          }
        }(f)), f = {type: f.type}
      }
      return b
    }()), ha = {
      css: function (a, c, d) {
        return a.style[c] = d
      },
      attribute: function (a, c, d) {
        return a.setAttribute(c, d)
      },
      object: function (a, c, d) {
        return a[c] = d
      },
      transform: function (a, c, d, b, f) {
        b[f] || (b[f] = [])
        b[f].push(c + '(' + d + ')')
      }
    }, v = [], B = 0, ia = (function () {
      function a () {
        B = requestAnimationFrame(c)
      }

      function c (c) {
        var b = v.length
        if (b) {
          for (var d = 0; d < b;) v[d] && v[d].tick(c), d++
          a()
        } else {
          cancelAnimationFrame(B), B = 0
        }
      }

      return a
    }())
  q.version = '2.2.0'
  q.speed = 1
  q.running = v
  q.remove =
    function (a) {
      a = P(a)
      for (var c = v.length; c--;) for (var d = v[c], b = d.animations, f = b.length; f--;) u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause())
    }
  q.getValue = K
  q.path = function (a, c) {
    var d = h.str(a) ? e(a)[0] : a, b = c || 100
    return function (a) {
      return {el: d, property: a, totalLength: N(d) * (b / 100)}
    }
  }
  q.setDashoffset = function (a) {
    var c = N(a)
    a.setAttribute('stroke-dasharray', c)
    return c
  }
  q.bezier = A
  q.easings = Q
  q.timeline = function (a) {
    var c = q(a)
    c.pause()
    c.duration = 0
    c.add = function (d) {
      c.children.forEach(function (a) {
        a.began =
          !0
        a.completed = !0
      })
      m(d).forEach(function (b) {
        var d = z(b, D(S, a || {}))
        d.targets = d.targets || a.targets
        b = c.duration
        var e = d.offset
        d.autoplay = !1
        d.direction = c.direction
        d.offset = h.und(e) ? b : L(e, b)
        c.began = !0
        c.completed = !0
        c.seek(d.offset)
        d = q(d)
        d.began = !0
        d.completed = !0
        d.duration > b && (c.duration = d.duration)
        c.children.push(d)
      })
      c.seek(0)
      c.reset()
      c.autoplay && c.restart()
      return c
    }
    return c
  }
  q.random = function (a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a
  }
  return q
})
'use strict'

function updateCoords (e) {
  pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingClientRect().left, pointerY = e.clientY || e.touches[0].clientY - canvasEl.getBoundingClientRect().top
}

function setParticuleDirection (e) {
  var t = anime.random(0, 360) * Math.PI / 180, a = anime.random(50, 180), n = [-1, 1][anime.random(0, 1)] * a
  return {x: e.x + n * Math.cos(t), y: e.y + n * Math.sin(t)}
}

function createParticule (e, t) {
  var a = {}
  return a.x = e, a.y = t, a.color = colors[anime.random(0, colors.length - 1)], a.radius = anime.random(1, 4), a.endPos = setParticuleDirection(a), a.draw = function () {
    ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.fillStyle = a.color, ctx.fill()
  }, a
}

function createCircle (e, t) {
  var a = {}
  return a.x = e, a.y = t, a.color = '#F00', a.radius = 0.1, a.alpha = 0.5, a.lineWidth = 6, a.draw = function () {
    ctx.globalAlpha = a.alpha, ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.lineWidth = a.lineWidth, ctx.strokeStyle = a.color, ctx.stroke(), ctx.globalAlpha = 1
  }, a
}

function renderParticule (e) {
  for (var t = 0; t < e.animatables.length; t++) {
    e.animatables[t].target.draw()
  }
}

function animateParticules (e, t) {
  for (var a = createCircle(e, t), n = [], i = 0; i < numberOfParticules; i++) {
    n.push(createParticule(e, t))
  }
  anime.timeline().add({
    targets: n,
    x: function (e) {
      return e.endPos.x
    },
    y: function (e) {
      return e.endPos.y
    },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule
  }).add({
    targets: a,
    radius: anime.random(0, 0),
    lineWidth: 0,
    alpha: {value: 0, easing: 'linear', duration: anime.random(600, 800)},
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule,
    offset: 0
  })
}

function debounce (e, t) {
  var a
  return function () {
    var n = this, i = arguments
    clearTimeout(a), a = setTimeout(function () {
      e.apply(n, i)
    }, t)
  }
}

var canvasEl = document.querySelector('.fireworks')
if (canvasEl) {
  var ctx = canvasEl.getContext('2d'), numberOfParticules = 30, pointerX = 0, pointerY = 0, tap = 'mousedown',
    colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'], setCanvasSize = debounce(function () {
      canvasEl.width = 2 * window.innerWidth, canvasEl.height = 2 * window.innerHeight, canvasEl.style.width = window.innerWidth + 'px', canvasEl.style.height = window.innerHeight + 'px', canvasEl.getContext('2d').scale(1, 1)
    }, 500), render = anime({
      duration: 1 / 0,
      update: function () {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
      }
    })
  document.addEventListener(tap, function (e) {
    e.target.id !== 'sidebar' && e.target.id !== 'toggle-sidebar' && e.target.nodeName !== 'A' && e.target.nodeName !== 'IMG' && (render.play(), updateCoords(e), animateParticules(pointerX, pointerY))
  }, !1), setCanvasSize(), window.addEventListener('resize', setCanvasSize, !1)
}
'use strict'

function updateCoords (e) {
  pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingClientRect().left, pointerY = e.clientY || e.touches[0].clientY - canvasEl.getBoundingClientRect().top
}

function setParticuleDirection (e) {
  var t = anime.random(0, 360) * Math.PI / 180, a = anime.random(50, 180), n = [-1, 1][anime.random(0, 1)] * a
  return {x: e.x + n * Math.cos(t), y: e.y + n * Math.sin(t)}
}

function createParticule (e, t) {
  var a = {}
  return a.x = e, a.y = t, a.color = colors[anime.random(0, colors.length - 1)], a.radius = anime.random(1, 4), a.endPos = setParticuleDirection(a), a.draw = function () {
    ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.fillStyle = a.color, ctx.fill()
  }, a
}

function createCircle (e, t) {
  var a = {}
  return a.x = e, a.y = t, a.color = '#F00', a.radius = 0.1, a.alpha = 0.5, a.lineWidth = 6, a.draw = function () {
    ctx.globalAlpha = a.alpha, ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.lineWidth = a.lineWidth, ctx.strokeStyle = a.color, ctx.stroke(), ctx.globalAlpha = 1
  }, a
}

function renderParticule (e) {
  for (var t = 0; t < e.animatables.length; t++) {
    e.animatables[t].target.draw()
  }
}

function animateParticules (e, t) {
  for (var a = createCircle(e, t), n = [], i = 0; i < numberOfParticules; i++) {
    n.push(createParticule(e, t))
  }
  anime.timeline().add({
    targets: n,
    x: function (e) {
      return e.endPos.x
    },
    y: function (e) {
      return e.endPos.y
    },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule
  }).add({
    targets: a,
    radius: anime.random(0, 0),
    lineWidth: 0,
    alpha: {value: 0, easing: 'linear', duration: anime.random(600, 800)},
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule,
    offset: 0
  })
}

function debounce (e, t) {
  var a
  return function () {
    var n = this, i = arguments
    clearTimeout(a), a = setTimeout(function () {
      e.apply(n, i)
    }, t)
  }
}

var canvasEl = document.querySelector('.fireworks')
if (canvasEl) {
  var ctx = canvasEl.getContext('2d'), numberOfParticules = 30, pointerX = 0, pointerY = 0, tap = 'mousedown',
    colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'], setCanvasSize = debounce(function () {
      canvasEl.width = 2 * window.innerWidth, canvasEl.height = 2 * window.innerHeight, canvasEl.style.width = window.innerWidth + 'px', canvasEl.style.height = window.innerHeight + 'px', canvasEl.getContext('2d').scale(2, 2)
    }, 500), render = anime({
      duration: 1 / 0,
      update: function () {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
      }
    })
  document.addEventListener(tap, function (e) {
    e.target.id !== 'sidebar' && e.target.id !== 'toggle-sidebar' && e.target.nodeName !== 'A' && e.target.nodeName !== 'IMG' && (render.play(), updateCoords(e), animateParticules(pointerX, pointerY))
  }, !1), setCanvasSize(), window.addEventListener('resize', setCanvasSize, !1)
}
;
// 下雪
(function (window, document, undefined) {
  // 存储所有的雪花
  const snows = []
  // 下落的加速度
  const G = 0.01
  const fps = 60
  // 速度上限，避免速度过快
  const SPEED_LIMIT_X = 1
  const SPEED_LIMIT_Y = 1
  const W = window.innerWidth
  const H = window.innerHeight
  let tickCount = 150
  let ticker = 0
  let lastTime = Date.now()
  let deltaTime = 0
  let canvas = null
  let ctx = null
  let snowImage = null
  window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        setTimeout(callback, 1000 / fps)
      }
  })()
  init()

  function init () {
    createCanvas()
    canvas.width = W
    canvas.height = H
    canvas.style.cssText = 'position: fixed; top: 0; left: 0; pointer-events: none;'
    document.body.appendChild(canvas)
    // 小屏幕时延长添加雪花时间，避免屏幕上出现太多的雪花
    if (W < 768) {
      tickCount = 350
    }
    snowImage = new Image()
    snowImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMACq/12+wV+TyqlI/yXxGfdAZ5LN/EWyZva+bTVR0ORksiUMyXN8gYZuNif0CapNi/MrpC6bWDyYdZAVgV8AAAEExJREFUeNrcnOtyokwYhF9ARQVEEY8EFQ/RxJiYTYym7//CvpphmEETA180a9znx65VWjhtdzvDW+7Sj6OtDNPV6PqZAoBL148NACZdP1yIQddPFQBWdP00qra9+hfKTjTq0b/BuEv/Bv+MkBuPrhptRjHOkmJm19l5HbedtJDOLXS6RnTArLMH9zv2Z93ElQrRqgA3pWtxO4DqdUaL6MHnpnQtbof/QFdLbMp0c9V2KFOA67ZDmnL9dghT7vpXb0eMdZ3fuoKx7nwU4uhjujZs4E9InNWGOOEfwKZrYwvAXhDDXRNjYQPY0rVRcwFhyuNa2AG4Nbo+Rn1hij4RdvRHdJUkpujBFduRNqVvX7MdaVMub0fNcxeN00053Y5Gz/VqJ+jwAWxON+V0O1jHCgP6Lh4YD8mn4t3Qt3iyvzt9SdIwBKNO32UFhkMxDqBRPhaTaYkkfkpIaTpZUD40oE0xPTCq9F0WYDQpZpp7FN0BUFT29aEmQ0UAnZy9MOTSn8G4/37FNgD8kGImaFE26n0riSk2EjsqYDxTPm7lgabpA9Ab9H0enGbzNoxVmfm9dYGUKQYGyg7AzT/HN+O1z25LTeeBTuU5iPhfsi1hkzJga1amADVpB1OXRTQXpRTmlSchnYVZ0OSFEW1pmtlpTS+7AczT0rJwYIg3AhZE9FKI6Ew8+M1U15fAiii/KTUgUrqyWQFekskp0UjpOJ2X/kx1XQd6JMk2pQfUlR3ZdOVEsoUJjftNOiPjYll2vQ/MSJBtiuI1535aBu5k251ik85KW+6Mc8DUSJBtiuSx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'
    loop()
  }

  function loop () {
    requestAnimationFrame(loop)
    ctx.clearRect(0, 0, W, H)
    const now = Date.now()
    deltaTime = now - lastTime
    lastTime = now
    ticker += deltaTime
    if (ticker > tickCount) {
      snows.push(
        new Snow(Math.random() * W, 0, Math.random() * 5 + 5)
      )
      ticker %= tickCount
    }
    const length = snows.length
    snows.map(function (s, i) {
      s.update()
      s.draw()
      if (s.y >= H) {
        snows.splice(i, 1)
      }
    })
  }

  function Snow (x, y, radius) {
    this.x = x
    this.y = y
    this.sx = 0
    this.sy = 0
    this.deg = 0
    this.radius = radius
    this.ax = Math.random() < 0.5 ? 0.005 : -0.005
  }

  Snow.prototype.update = function () {
    const deltaDeg = Math.random() * 0.6 + 0.2
    this.sx += this.ax
    if (this.sx >= SPEED_LIMIT_X || this.sx <= -SPEED_LIMIT_X) {
      this.ax *= -1
    }
    if (this.sy < SPEED_LIMIT_Y) {
      this.sy += G
    }
    this.deg += deltaDeg
    this.x += this.sx
    this.y += this.sy
  }
  Snow.prototype.draw = function () {
    const radius = this.radius
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.deg * Math.PI / 180)
    ctx.drawImage(snowImage, -radius, -radius, radius * 2, radius * 2)
    ctx.restore()
  }

  function createCanvas () {
    canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d')
  }
})(window, document)
