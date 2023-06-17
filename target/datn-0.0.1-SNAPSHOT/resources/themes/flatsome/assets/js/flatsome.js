!function(t) {
    var e = {};
    function i(n) {
        if (e[n])
            return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    i.m = t,
    i.c = e,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                i.d(n, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "",
    i(i.s = 26)
}([function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}
, function(t, e) {
    t.exports = window.jQuery
}
, function(t, e, i) {
    "use strict";
    /*! npm.im/object-fit-images 3.2.4 */
    var n = "bfred-it:object-fit-images"
      , o = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g
      , r = "undefined" == typeof Image ? {
        style: {
            "object-position": 1
        }
    } : new Image
      , s = "object-fit"in r.style
      , a = "object-position"in r.style
      , l = "background-size"in r.style
      , c = "string" == typeof r.currentSrc
      , h = r.getAttribute
      , u = r.setAttribute
      , d = !1;
    function p(t, e, i) {
        var n = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E";
        h.call(t, "src") !== n && u.call(t, "src", n)
    }
    function f(t, e) {
        t.naturalWidth ? e(t) : setTimeout(f, 100, t, e)
    }
    function m(t) {
        var e = function(t) {
            for (var e, i = getComputedStyle(t).fontFamily, n = {}; null !== (e = o.exec(i)); )
                n[e[1]] = e[2];
            return n
        }(t)
          , i = t[n];
        if (e["object-fit"] = e["object-fit"] || "fill",
        !i.img) {
            if ("fill" === e["object-fit"])
                return;
            if (!i.skipTest && s && !e["object-position"])
                return
        }
        if (!i.img) {
            i.img = new Image(t.width,t.height),
            i.img.srcset = h.call(t, "data-ofi-srcset") || t.srcset,
            i.img.src = h.call(t, "data-ofi-src") || t.src,
            u.call(t, "data-ofi-src", t.src),
            t.srcset && u.call(t, "data-ofi-srcset", t.srcset),
            p(t, t.naturalWidth || t.width, t.naturalHeight || t.height),
            t.srcset && (t.srcset = "");
            try {
                !function(t) {
                    var e = {
                        get: function(e) {
                            return t[n].img[e || "src"]
                        },
                        set: function(e, i) {
                            return t[n].img[i || "src"] = e,
                            u.call(t, "data-ofi-" + i, e),
                            m(t),
                            e
                        }
                    };
                    Object.defineProperty(t, "src", e),
                    Object.defineProperty(t, "currentSrc", {
                        get: function() {
                            return e.get("currentSrc")
                        }
                    }),
                    Object.defineProperty(t, "srcset", {
                        get: function() {
                            return e.get("srcset")
                        },
                        set: function(t) {
                            return e.set(t, "srcset")
                        }
                    })
                }(t)
            } catch (t) {
                window.console && console.warn("https://bit.ly/ofi-old-browser")
            }
        }
        !function(t) {
            if (t.srcset && !c && window.picturefill) {
                var e = window.picturefill._;
                t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                    reselect: !0
                }),
                t[e.ns].curSrc || (t[e.ns].supported = !1,
                e.fillImg(t, {
                    reselect: !0
                })),
                t.currentSrc = t[e.ns].curSrc || t.src
            }
        }(i.img),
        t.style.backgroundImage = 'url("' + (i.img.currentSrc || i.img.src).replace(/"/g, '\\"') + '")',
        t.style.backgroundPosition = e["object-position"] || "center",
        t.style.backgroundRepeat = "no-repeat",
        t.style.backgroundOrigin = "content-box",
        /scale-down/.test(e["object-fit"]) ? f(i.img, (function() {
            i.img.naturalWidth > t.width || i.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
        }
        )) : t.style.backgroundSize = e["object-fit"].replace("none", "auto").replace("fill", "100% 100%"),
        f(i.img, (function(e) {
            p(t, e.naturalWidth, e.naturalHeight)
        }
        ))
    }
    function g(t, e) {
        var i = !d && !t;
        if (e = e || {},
        t = t || "img",
        a && !e.skipTest || !l)
            return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length"in t || (t = [t]);
        for (var o = 0; o < t.length; o++)
            t[o][n] = t[o][n] || {
                skipTest: e.skipTest
            },
            m(t[o]);
        i && (document.body.addEventListener("load", (function(t) {
            "IMG" === t.target.tagName && g(t.target, {
                skipTest: e.skipTest
            })
        }
        ), !0),
        d = !0,
        t = "img"),
        e.watchMQ && window.addEventListener("resize", g.bind(null, t, {
            skipTest: e.skipTest
        }))
    }
    g.supportsObjectFit = s,
    g.supportsObjectPosition = a,
    function() {
        function t(t, e) {
            return t[n] && t[n].img && ("src" === e || "srcset" === e) ? t[n].img : t
        }
        a || (HTMLImageElement.prototype.getAttribute = function(e) {
            return h.call(t(this, e), e)
        }
        ,
        HTMLImageElement.prototype.setAttribute = function(e, i) {
            return u.call(t(this, e), e, String(i))
        }
        )
    }(),
    t.exports = g
}
, function(t, e, i) {
    (function(e) {
        /*! cookie function. get, set, or forget a cookie. [c]2014 @scottjehl, Filament Group, Inc. Licensed MIT */
        var i;
        i = void 0 !== e ? e : this,
        t.exports = function(t, e, n) {
            if (void 0 === e) {
                var o = ("; " + i.document.cookie).split("; " + t + "=");
                return 2 === o.length ? o.pop().split(";").shift() : null
            }
            !1 === e && (n = -1);
            var r = "";
            if (n) {
                var s = new Date;
                s.setTime(s.getTime() + 24 * n * 60 * 60 * 1e3),
                r = "; expires=" + s.toGMTString()
            }
            i.document.cookie = t + "=" + e + r + "; path=/"
        }
    }
    ).call(this, i(0))
}
, function(t, e) {
    function i(e) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = i = function(t) {
            return typeof t
        }
        : t.exports = i = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        i(e)
    }
    t.exports = i
}
, function(t, e, i) {
    void 0 !== t.exports && (t.exports = function(t) {
        "use strict";
        var e = navigator.userAgent.indexOf("Edge/") >= 0
          , i = new Image
          , n = "object-fit"in i.style && !e
          , o = "object-position"in i.style && !e
          , r = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;
        function s(t) {
            for (var e = getComputedStyle(t).fontFamily, i = null, n = {}; null !== (i = r.exec(e)); )
                n[i[1]] = i[2];
            return n["object-position"] ? function(t) {
                ~t["object-position"].indexOf("left") ? t["object-position-x"] = "left" : ~t["object-position"].indexOf("right") ? t["object-position-x"] = "right" : t["object-position-x"] = "center";
                ~t["object-position"].indexOf("top") ? t["object-position-y"] = "top" : ~t["object-position"].indexOf("bottom") ? t["object-position-y"] = "bottom" : t["object-position-y"] = "center";
                return t
            }(n) : n
        }
        function a(t, e) {
            if ("fill" !== e["object-fit"]) {
                var i = t.style
                  , n = window.getComputedStyle(t)
                  , o = document.createElement("object-fit");
                o.appendChild(t.parentNode.replaceChild(o, t));
                var r = {
                    height: "100%",
                    width: "100%",
                    boxSizing: "content-box",
                    display: "inline-block",
                    overflow: "hidden"
                };
                for (var s in "backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g, (function(t) {
                    r[t] = n[t]
                }
                )),
                r)
                    o.style[s] = r[s];
                i.border = i.margin = i.padding = 0,
                i.display = "block",
                i.opacity = 1,
                t.addEventListener("loadedmetadata", a),
                window.addEventListener("optimizedResize", a),
                t.readyState >= 1 && (t.removeEventListener("loadedmetadata", a),
                a())
            }
            function a() {
                var n = t.videoWidth / t.videoHeight
                  , r = o.clientWidth
                  , s = o.clientHeight
                  , a = r / s
                  , l = 0
                  , c = 0;
                i.marginLeft = i.marginTop = 0,
                (n < a ? "contain" === e["object-fit"] : "cover" === e["object-fit"]) ? (l = s * n,
                c = r / n,
                i.width = Math.round(l) + "px",
                i.height = s + "px",
                "left" === e["object-position-x"] ? i.marginLeft = 0 : "right" === e["object-position-x"] ? i.marginLeft = Math.round(r - l) + "px" : i.marginLeft = Math.round((r - l) / 2) + "px") : (c = r / n,
                i.width = r + "px",
                i.height = Math.round(c) + "px",
                "top" === e["object-position-y"] ? i.marginTop = 0 : "bottom" === e["object-position-y"] ? i.marginTop = Math.round(s - c) + "px" : i.marginTop = Math.round((s - c) / 2) + "px"),
                t.autoplay && t.play()
            }
        }
        n && o || (function(t) {
            var e = -1;
            t ? "length"in t || (t = [t]) : t = document.querySelectorAll("video");
            for (; t[++e]; ) {
                var i = s(t[e]);
                (i["object-fit"] || i["object-position"]) && (i["object-fit"] = i["object-fit"] || "fill",
                a(t[e], i))
            }
        }(t),
        function(t, e, i) {
            i = i || window;
            var n = !1
              , o = null;
            try {
                o = new CustomEvent(e)
            } catch (t) {
                (o = document.createEvent("Event")).initEvent(e, !0, !0)
            }
            i.addEventListener(t, (function() {
                n || (n = !0,
                requestAnimationFrame((function() {
                    i.dispatchEvent(o),
                    n = !1
                }
                )))
            }
            ))
        }("resize", "optimizedResize"))
    }
    )
}
, function(t, e, i) {
    var n, o;
    void 0 === (o = "function" == typeof (n = function(t, e, i) {
        return function(t, e, i, n, o, r) {
            function s(t) {
                return "number" == typeof t && !isNaN(t)
            }
            var a = this;
            if (a.version = function() {
                return "1.9.3"
            }
            ,
            a.options = {
                useEasing: !0,
                useGrouping: !0,
                separator: ",",
                decimal: ".",
                easingFn: function(t, e, i, n) {
                    return i * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
                },
                formattingFn: function(t) {
                    var e, i, n, o, r, s, l = t < 0;
                    if (t = Math.abs(t).toFixed(a.decimals),
                    i = (e = (t += "").split("."))[0],
                    n = e.length > 1 ? a.options.decimal + e[1] : "",
                    a.options.useGrouping) {
                        for (o = "",
                        r = 0,
                        s = i.length; r < s; ++r)
                            0 !== r && r % 3 == 0 && (o = a.options.separator + o),
                            o = i[s - r - 1] + o;
                        i = o
                    }
                    return a.options.numerals.length && (i = i.replace(/[0-9]/g, (function(t) {
                        return a.options.numerals[+t]
                    }
                    )),
                    n = n.replace(/[0-9]/g, (function(t) {
                        return a.options.numerals[+t]
                    }
                    ))),
                    (l ? "-" : "") + a.options.prefix + i + n + a.options.suffix
                },
                prefix: "",
                suffix: "",
                numerals: []
            },
            r && "object" == typeof r)
                for (var l in a.options)
                    r.hasOwnProperty(l) && null !== r[l] && (a.options[l] = r[l]);
            "" === a.options.separator ? a.options.useGrouping = !1 : a.options.separator = "" + a.options.separator;
            for (var c = 0, h = ["webkit", "moz", "ms", "o"], u = 0; u < h.length && !window.requestAnimationFrame; ++u)
                window.requestAnimationFrame = window[h[u] + "RequestAnimationFrame"],
                window.cancelAnimationFrame = window[h[u] + "CancelAnimationFrame"] || window[h[u] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
                var i = (new Date).getTime()
                  , n = Math.max(0, 16 - (i - c))
                  , o = window.setTimeout((function() {
                    t(i + n)
                }
                ), n);
                return c = i + n,
                o
            }
            ),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }
            ),
            a.initialize = function() {
                return !(!a.initialized && (a.error = "",
                a.d = "string" == typeof t ? document.getElementById(t) : t,
                a.d ? (a.startVal = Number(e),
                a.endVal = Number(i),
                s(a.startVal) && s(a.endVal) ? (a.decimals = Math.max(0, n || 0),
                a.dec = Math.pow(10, a.decimals),
                a.duration = 1e3 * Number(o) || 2e3,
                a.countDown = a.startVal > a.endVal,
                a.frameVal = a.startVal,
                a.initialized = !0,
                0) : (a.error = "[CountUp] startVal (" + e + ") or endVal (" + i + ") is not a number",
                1)) : (a.error = "[CountUp] target is null or undefined",
                1)))
            }
            ,
            a.printValue = function(t) {
                var e = a.options.formattingFn(t);
                "INPUT" === a.d.tagName ? this.d.value = e : "text" === a.d.tagName || "tspan" === a.d.tagName ? this.d.textContent = e : this.d.innerHTML = e
            }
            ,
            a.count = function(t) {
                a.startTime || (a.startTime = t),
                a.timestamp = t;
                var e = t - a.startTime;
                a.remaining = a.duration - e,
                a.options.useEasing ? a.countDown ? a.frameVal = a.startVal - a.options.easingFn(e, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.options.easingFn(e, a.startVal, a.endVal - a.startVal, a.duration) : a.countDown ? a.frameVal = a.startVal - (a.startVal - a.endVal) * (e / a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (e / a.duration),
                a.countDown ? a.frameVal = a.frameVal < a.endVal ? a.endVal : a.frameVal : a.frameVal = a.frameVal > a.endVal ? a.endVal : a.frameVal,
                a.frameVal = Math.round(a.frameVal * a.dec) / a.dec,
                a.printValue(a.frameVal),
                e < a.duration ? a.rAF = requestAnimationFrame(a.count) : a.callback && a.callback()
            }
            ,
            a.start = function(t) {
                a.initialize() && (a.callback = t,
                a.rAF = requestAnimationFrame(a.count))
            }
            ,
            a.pauseResume = function() {
                a.paused ? (a.paused = !1,
                delete a.startTime,
                a.duration = a.remaining,
                a.startVal = a.frameVal,
                requestAnimationFrame(a.count)) : (a.paused = !0,
                cancelAnimationFrame(a.rAF))
            }
            ,
            a.reset = function() {
                a.paused = !1,
                delete a.startTime,
                a.initialized = !1,
                a.initialize() && (cancelAnimationFrame(a.rAF),
                a.printValue(a.startVal))
            }
            ,
            a.update = function(t) {
                if (a.initialize()) {
                    if (!s(t = Number(t)))
                        return void (a.error = "[CountUp] update() - new endVal is not a number: " + t);
                    a.error = "",
                    t !== a.frameVal && (cancelAnimationFrame(a.rAF),
                    a.paused = !1,
                    delete a.startTime,
                    a.startVal = a.frameVal,
                    a.endVal = t,
                    a.countDown = a.startVal > a.endVal,
                    a.rAF = requestAnimationFrame(a.count))
                }
            }
            ,
            a.initialize() && a.printValue(a.startVal)
        }
    }
    ) ? n.call(e, i, e, t) : n) || (t.exports = o)
}
, function(t, e) {
    t.exports = function(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i,
        t
    }
}
, , , , , , , , , , , , , , , , , , , function(t, e, i) {
    t.exports = i(27)
}
, function(t, e, i) {
    "use strict";
    i.r(e),
    function(t) {
        var e = i(3)
          , n = i.n(e);
        i(28),
        i(29),
        i(30),
        i(31),
        i(32),
        i(33),
        i(34),
        i(35),
        i(36),
        i(37),
        i(39),
        i(40),
        i(41),
        i(42),
        i(43),
        i(44),
        i(45),
        i(46),
        i(47),
        i(48),
        i(49),
        i(50),
        i(51),
        i(52),
        i(53),
        i(54),
        i(55),
        i(56),
        i(57),
        i(58),
        i(59),
        i(70),
        i(60),
        i(61),
        i(62);
        jQuery((function() {
            return t.Flatsome.attach(document)
        }
        )),
        t.cookie = n.a
    }
    .call(this, i(0))
}
, function(t, e, i) {
    var n, o, r, s, a, l, c, h, u, d, p, f, m, g, v, y, b, w, x, C, k, S, E, T, _, j, I, P, A;
    /*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */
    !function(n, o) {
        P = [i(1)],
        void 0 === (A = function(t) {
            return function(t, e) {
                "use strict";
                var i = Array.prototype.slice
                  , n = t.console
                  , o = void 0 === n ? function() {}
                : function(t) {
                    n.error(t)
                }
                ;
                function r(n, r, a) {
                    function l(t, e, i) {
                        var r, s = "$()." + n + '("' + e + '")';
                        return t.each((function(t, l) {
                            var c = a.data(l, n);
                            if (c) {
                                var h = c[e];
                                if (h && "_" != e.charAt(0)) {
                                    var u = h.apply(c, i);
                                    r = void 0 === r ? u : r
                                } else
                                    o(s + " is not a valid method")
                            } else
                                o(n + " not initialized. Cannot call methods, i.e. " + s)
                        }
                        )),
                        void 0 !== r ? r : t
                    }
                    function c(t, e) {
                        t.each((function(t, i) {
                            var o = a.data(i, n);
                            o ? (o.option(e),
                            o._init()) : (o = new r(i,e),
                            a.data(i, n, o))
                        }
                        ))
                    }
                    (a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
                        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
                    }
                    ),
                    a.fn[n] = function(t) {
                        if ("string" == typeof t) {
                            var e = i.call(arguments, 1);
                            return l(this, t, e)
                        }
                        return c(this, t),
                        this
                    }
                    ,
                    s(a))
                }
                function s(t) {
                    !t || t && t.bridget || (t.bridget = r)
                }
                return s(e || t.jQuery),
                r
            }(n, t)
        }
        .apply(e, P)) || (t.exports = A)
    }(window),
    "undefined" != typeof window && window,
    r = {
        id: "ev-emitter/ev-emitter",
        exports: {},
        loaded: !1
    },
    n = "function" == typeof (o = function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {}
                  , n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e),
                this
            }
        }
        ,
        e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0,
                this
            }
        }
        ,
        e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1),
                this
            }
        }
        ,
        e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0),
                e = e || [];
                for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                    var r = i[o];
                    n && n[r] && (this.off(t, r),
                    delete n[r]),
                    r.apply(this, e)
                }
                return this
            }
        }
        ,
        e.allOff = function() {
            delete this._events,
            delete this._onceEvents
        }
        ,
        t
    }
    ) ? o.call(r.exports, i, r.exports, r) : o,
    r.loaded = !0,
    void 0 !== n || (n = r.exports),
    window,
    l = {
        id: "get-size/get-size",
        exports: {},
        loaded: !1
    },
    s = "function" == typeof (a = function() {
        "use strict";
        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }
        var e = "undefined" == typeof console ? function() {}
        : function(t) {
            console.error(t)
        }
          , i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]
          , n = i.length;
        function o(t) {
            var i = getComputedStyle(t);
            return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
            i
        }
        var r, s = !1;
        function a(e) {
            if (function() {
                if (!s) {
                    s = !0;
                    var e = document.createElement("div");
                    e.style.width = "200px",
                    e.style.padding = "1px 2px 3px 4px",
                    e.style.borderStyle = "solid",
                    e.style.borderWidth = "1px 2px 3px 4px",
                    e.style.boxSizing = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(e);
                    var n = o(e);
                    r = 200 == Math.round(t(n.width)),
                    a.isBoxSizeOuter = r,
                    i.removeChild(e)
                }
            }(),
            "string" == typeof e && (e = document.querySelector(e)),
            e && "object" == typeof e && e.nodeType) {
                var l = o(e);
                if ("none" == l.display)
                    return function() {
                        for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < n; e++)
                            t[i[e]] = 0;
                        return t
                    }();
                var c = {};
                c.width = e.offsetWidth,
                c.height = e.offsetHeight;
                for (var h = c.isBorderBox = "border-box" == l.boxSizing, u = 0; u < n; u++) {
                    var d = i[u]
                      , p = l[d]
                      , f = parseFloat(p);
                    c[d] = isNaN(f) ? 0 : f
                }
                var m = c.paddingLeft + c.paddingRight
                  , g = c.paddingTop + c.paddingBottom
                  , v = c.marginLeft + c.marginRight
                  , y = c.marginTop + c.marginBottom
                  , b = c.borderLeftWidth + c.borderRightWidth
                  , w = c.borderTopWidth + c.borderBottomWidth
                  , x = h && r
                  , C = t(l.width);
                !1 !== C && (c.width = C + (x ? 0 : m + b));
                var k = t(l.height);
                return !1 !== k && (c.height = k + (x ? 0 : g + w)),
                c.innerWidth = c.width - (m + b),
                c.innerHeight = c.height - (g + w),
                c.outerWidth = c.width + v,
                c.outerHeight = c.height + y,
                c
            }
        }
        return a
    }
    ) ? a.call(l.exports, i, l.exports, l) : a,
    l.loaded = !0,
    void 0 !== s || (s = l.exports),
    function(t, e) {
        "use strict";
        u = {
            id: "desandro-matches-selector/matches-selector",
            exports: {},
            loaded: !1
        },
        c = "function" == typeof (h = e) ? h.call(u.exports, i, u.exports, u) : h,
        u.loaded = !0,
        void 0 !== c || (c = u.exports)
    }(window, (function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches)
                return "matches";
            if (t.matchesSelector)
                return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n])
                    return n
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }
    )),
    function(t, i) {
        d = function(e) {
            return function(t, e) {
                var i = {
                    extend: function(t, e) {
                        for (var i in e)
                            t[i] = e[i];
                        return t
                    },
                    modulo: function(t, e) {
                        return (t % e + e) % e
                    }
                }
                  , n = Array.prototype.slice;
                i.makeArray = function(t) {
                    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
                }
                ,
                i.removeFrom = function(t, e) {
                    var i = t.indexOf(e);
                    -1 != i && t.splice(i, 1)
                }
                ,
                i.getParent = function(t, i) {
                    for (; t.parentNode && t != document.body; )
                        if (t = t.parentNode,
                        e(t, i))
                            return t
                }
                ,
                i.getQueryElement = function(t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                }
                ,
                i.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }
                ,
                i.filterFindElements = function(t, n) {
                    t = i.makeArray(t);
                    var o = [];
                    return t.forEach((function(t) {
                        if (t instanceof HTMLElement)
                            if (n) {
                                e(t, n) && o.push(t);
                                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                                    o.push(i[r])
                            } else
                                o.push(t)
                    }
                    )),
                    o
                }
                ,
                i.debounceMethod = function(t, e, i) {
                    i = i || 100;
                    var n = t.prototype[e]
                      , o = e + "Timeout";
                    t.prototype[e] = function() {
                        var t = this[o];
                        clearTimeout(t);
                        var e = arguments
                          , r = this;
                        this[o] = setTimeout((function() {
                            n.apply(r, e),
                            delete r[o]
                        }
                        ), i)
                    }
                }
                ,
                i.docReady = function(t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                }
                ,
                i.toDashed = function(t) {
                    return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                        return e + "-" + i
                    }
                    )).toLowerCase()
                }
                ;
                var o = t.console;
                return i.htmlInit = function(e, n) {
                    i.docReady((function() {
                        var r = i.toDashed(n)
                          , s = "data-" + r
                          , a = document.querySelectorAll("[" + s + "]")
                          , l = document.querySelectorAll(".js-" + r)
                          , c = i.makeArray(a).concat(i.makeArray(l))
                          , h = s + "-options"
                          , u = t.jQuery;
                        c.forEach((function(t) {
                            var i, r = t.getAttribute(s) || t.getAttribute(h);
                            try {
                                i = r && JSON.parse(r)
                            } catch (e) {
                                return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + e))
                            }
                            var a = new e(t,i);
                            u && u.data(t, n, a)
                        }
                        ))
                    }
                    ))
                }
                ,
                i
            }(t, e)
        }
        .apply(e, P = [c])
    }(window),
    window,
    p = function(t) {
        return function(t, e) {
            function i(t, e) {
                this.element = t,
                this.parent = e,
                this.create()
            }
            var n = i.prototype;
            return n.create = function() {
                this.element.style.position = "absolute",
                this.element.setAttribute("aria-hidden", "true"),
                this.x = 0,
                this.shift = 0
            }
            ,
            n.destroy = function() {
                this.unselect(),
                this.element.style.position = "";
                var t = this.parent.originSide;
                this.element.style[t] = ""
            }
            ,
            n.getSize = function() {
                this.size = e(this.element)
            }
            ,
            n.setPosition = function(t) {
                this.x = t,
                this.updateTarget(),
                this.renderPosition(t)
            }
            ,
            n.updateTarget = n.setDefaultTarget = function() {
                var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
            }
            ,
            n.renderPosition = function(t) {
                var e = this.parent.originSide;
                this.element.style[e] = this.parent.getPositionValue(t)
            }
            ,
            n.select = function() {
                this.element.classList.add("is-selected"),
                this.element.removeAttribute("aria-hidden")
            }
            ,
            n.unselect = function() {
                this.element.classList.remove("is-selected"),
                this.element.setAttribute("aria-hidden", "true")
            }
            ,
            n.wrapShift = function(t) {
                this.shift = t,
                this.renderPosition(this.x + this.parent.slideableWidth * t)
            }
            ,
            n.remove = function() {
                this.element.parentNode.removeChild(this.element)
            }
            ,
            i
        }(0, t)
    }
    .apply(e, P = [s]),
    window,
    g = {
        id: "flickity/js/slide",
        exports: {},
        loaded: !1
    },
    f = "function" == typeof (m = function() {
        "use strict";
        function t(t) {
            this.parent = t,
            this.isOriginLeft = "left" == t.originSide,
            this.cells = [],
            this.outerWidth = 0,
            this.height = 0
        }
        var e = t.prototype;
        return e.addCell = function(t) {
            if (this.cells.push(t),
            this.outerWidth += t.size.outerWidth,
            this.height = Math.max(t.size.outerHeight, this.height),
            1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }
        ,
        e.updateTarget = function() {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft"
              , e = this.getLastCell()
              , i = e ? e.size[t] : 0
              , n = this.outerWidth - (this.firstMargin + i);
            this.target = this.x + this.firstMargin + n * this.parent.cellAlign
        }
        ,
        e.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }
        ,
        e.select = function() {
            this.cells.forEach((function(t) {
                t.select()
            }
            ))
        }
        ,
        e.unselect = function() {
            this.cells.forEach((function(t) {
                t.unselect()
            }
            ))
        }
        ,
        e.getCellElements = function() {
            return this.cells.map((function(t) {
                return t.element
            }
            ))
        }
        ,
        t
    }
    ) ? m.call(g.exports, i, g.exports, g) : m,
    g.loaded = !0,
    void 0 !== f || (f = g.exports),
    window,
    v = function(t) {
        return function(t, e) {
            var i = {
                startAnimation: function() {
                    this.isAnimating || (this.isAnimating = !0,
                    this.restingFrames = 0,
                    this.animate())
                },
                animate: function() {
                    this.applyDragForce(),
                    this.applySelectedAttraction();
                    var t = this.x;
                    if (this.integratePhysics(),
                    this.positionSlider(),
                    this.settle(t),
                    this.isAnimating) {
                        var e = this;
                        requestAnimationFrame((function() {
                            e.animate()
                        }
                        ))
                    }
                },
                positionSlider: function() {
                    var t = this.x;
                    this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth),
                    t -= this.slideableWidth,
                    this.shiftWrapCells(t)),
                    this.setTranslateX(t, this.isAnimating),
                    this.dispatchScrollEvent()
                },
                setTranslateX: function(t, e) {
                    t += this.cursorPosition,
                    t = this.options.rightToLeft ? -t : t;
                    var i = this.getPositionValue(t);
                    this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
                },
                dispatchScrollEvent: function() {
                    var t = this.slides[0];
                    if (t) {
                        var e = -this.x - t.target
                          , i = e / this.slidesWidth;
                        this.dispatchEvent("scroll", null, [i, e])
                    }
                },
                positionSliderAtSelected: function() {
                    this.cells.length && (this.x = -this.selectedSlide.target,
                    this.velocity = 0,
                    this.positionSlider())
                },
                getPositionValue: function(t) {
                    return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
                },
                settle: function(t) {
                    this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
                    this.restingFrames > 2 && (this.isAnimating = !1,
                    delete this.isFreeScrolling,
                    this.positionSlider(),
                    this.dispatchEvent("settle", null, [this.selectedIndex]))
                },
                shiftWrapCells: function(t) {
                    var e = this.cursorPosition + t;
                    this._shiftCells(this.beforeShiftCells, e, -1);
                    var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                    this._shiftCells(this.afterShiftCells, i, 1)
                },
                _shiftCells: function(t, e, i) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n]
                          , r = e > 0 ? i : 0;
                        o.wrapShift(r),
                        e -= o.size.outerWidth
                    }
                },
                _unshiftCells: function(t) {
                    if (t && t.length)
                        for (var e = 0; e < t.length; e++)
                            t[e].wrapShift(0)
                },
                integratePhysics: function() {
                    this.x += this.velocity,
                    this.velocity *= this.getFrictionFactor()
                },
                applyForce: function(t) {
                    this.velocity += t
                },
                getFrictionFactor: function() {
                    return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
                },
                getRestingPosition: function() {
                    return this.x + this.velocity / (1 - this.getFrictionFactor())
                },
                applyDragForce: function() {
                    if (this.isDraggable && this.isPointerDown) {
                        var t = this.dragX - this.x - this.velocity;
                        this.applyForce(t)
                    }
                },
                applySelectedAttraction: function() {
                    if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                        var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                        this.applyForce(t)
                    }
                }
            };
            return i
        }(0, t)
    }
    .apply(e, P = [d]),
    function(t, i) {
        y = function(e, i, n, o, r, s) {
            return function(t, e, i, n, o, r, s) {
                var a = t.jQuery
                  , l = t.getComputedStyle
                  , c = t.console;
                function h(t, e) {
                    for (t = n.makeArray(t); t.length; )
                        e.appendChild(t.shift())
                }
                var u = 0
                  , d = {};
                function p(t, e) {
                    var i = n.getQueryElement(t);
                    if (i) {
                        if (this.element = i,
                        this.element.flickityGUID) {
                            var o = d[this.element.flickityGUID];
                            return o.option(e),
                            o
                        }
                        a && (this.$element = a(this.element)),
                        this.options = n.extend({}, this.constructor.defaults),
                        this.option(e),
                        this._create()
                    } else
                        c && c.error("Bad element for Flickity: " + (i || t))
                }
                p.defaults = {
                    accessibility: !0,
                    cellAlign: "center",
                    freeScrollFriction: .075,
                    friction: .28,
                    namespaceJQueryEvents: !0,
                    percentPosition: !0,
                    resize: !0,
                    selectedAttraction: .025,
                    setGallerySize: !0
                },
                p.createMethods = [];
                var f = p.prototype;
                n.extend(f, e.prototype),
                f._create = function() {
                    var e = this.guid = ++u;
                    for (var i in this.element.flickityGUID = e,
                    d[e] = this,
                    this.selectedIndex = 0,
                    this.restingFrames = 0,
                    this.x = 0,
                    this.velocity = 0,
                    this.originSide = this.options.rightToLeft ? "right" : "left",
                    this.viewport = document.createElement("div"),
                    this.viewport.className = "flickity-viewport",
                    this._createSlider(),
                    (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this),
                    this.options.on) {
                        var n = this.options.on[i];
                        this.on(i, n)
                    }
                    p.createMethods.forEach((function(t) {
                        this[t]()
                    }
                    ), this),
                    this.options.watchCSS ? this.watchCSS() : this.activate()
                }
                ,
                f.option = function(t) {
                    n.extend(this.options, t)
                }
                ,
                f.activate = function() {
                    this.isActive || (this.isActive = !0,
                    this.element.classList.add("flickity-enabled"),
                    this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
                    this.getSize(),
                    h(this._filterFindCellElements(this.element.children), this.slider),
                    this.viewport.appendChild(this.slider),
                    this.element.appendChild(this.viewport),
                    this.reloadCells(),
                    this.options.accessibility && (this.element.tabIndex = 0,
                    this.element.addEventListener("keydown", this)),
                    this.emitEvent("activate"),
                    this.selectInitialIndex(),
                    this.isInitActivated = !0,
                    this.dispatchEvent("ready"))
                }
                ,
                f._createSlider = function() {
                    var t = document.createElement("div");
                    t.className = "flickity-slider",
                    t.style[this.originSide] = 0,
                    this.slider = t
                }
                ,
                f._filterFindCellElements = function(t) {
                    return n.filterFindElements(t, this.options.cellSelector)
                }
                ,
                f.reloadCells = function() {
                    this.cells = this._makeCells(this.slider.children),
                    this.positionCells(),
                    this._getWrapShiftCells(),
                    this.setGallerySize()
                }
                ,
                f._makeCells = function(t) {
                    return this._filterFindCellElements(t).map((function(t) {
                        return new o(t,this)
                    }
                    ), this)
                }
                ,
                f.getLastCell = function() {
                    return this.cells[this.cells.length - 1]
                }
                ,
                f.getLastSlide = function() {
                    return this.slides[this.slides.length - 1]
                }
                ,
                f.positionCells = function() {
                    this._sizeCells(this.cells),
                    this._positionCells(0)
                }
                ,
                f._positionCells = function(t) {
                    t = t || 0,
                    this.maxCellHeight = t && this.maxCellHeight || 0;
                    var e = 0;
                    if (t > 0) {
                        var i = this.cells[t - 1];
                        e = i.x + i.size.outerWidth
                    }
                    for (var n = this.cells.length, o = t; o < n; o++) {
                        var r = this.cells[o];
                        r.setPosition(e),
                        e += r.size.outerWidth,
                        this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
                    }
                    this.slideableWidth = e,
                    this.updateSlides(),
                    this._containSlides(),
                    this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
                }
                ,
                f._sizeCells = function(t) {
                    t.forEach((function(t) {
                        t.getSize()
                    }
                    ))
                }
                ,
                f.updateSlides = function() {
                    if (this.slides = [],
                    this.cells.length) {
                        var t = new r(this);
                        this.slides.push(t);
                        var e = "left" == this.originSide ? "marginRight" : "marginLeft"
                          , i = this._getCanCellFit();
                        this.cells.forEach((function(n, o) {
                            if (t.cells.length) {
                                var s = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                                i.call(this, o, s) || (t.updateTarget(),
                                t = new r(this),
                                this.slides.push(t)),
                                t.addCell(n)
                            } else
                                t.addCell(n)
                        }
                        ), this),
                        t.updateTarget(),
                        this.updateSelectedSlide()
                    }
                }
                ,
                f._getCanCellFit = function() {
                    var t = this.options.groupCells;
                    if (!t)
                        return function() {
                            return !1
                        }
                        ;
                    if ("number" == typeof t) {
                        var e = parseInt(t, 10);
                        return function(t) {
                            return t % e != 0
                        }
                    }
                    var i = "string" == typeof t && t.match(/^(\d+)%$/)
                      , n = i ? parseInt(i[1], 10) / 100 : 1;
                    return function(t, e) {
                        return e <= (this.size.innerWidth + 1) * n
                    }
                }
                ,
                f._init = f.reposition = function() {
                    this.positionCells(),
                    this.positionSliderAtSelected()
                }
                ,
                f.getSize = function() {
                    this.size = i(this.element),
                    this.setCellAlign(),
                    this.cursorPosition = this.size.innerWidth * this.cellAlign
                }
                ;
                var m = {
                    center: {
                        left: .5,
                        right: .5
                    },
                    left: {
                        left: 0,
                        right: 1
                    },
                    right: {
                        right: 0,
                        left: 1
                    }
                };
                f.setCellAlign = function() {
                    var t = m[this.options.cellAlign];
                    this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
                }
                ,
                f.setGallerySize = function() {
                    if (this.options.setGallerySize) {
                        var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                        this.viewport.style.height = t + "px"
                    }
                }
                ,
                f._getWrapShiftCells = function() {
                    if (this.options.wrapAround) {
                        this._unshiftCells(this.beforeShiftCells),
                        this._unshiftCells(this.afterShiftCells);
                        var t = this.cursorPosition
                          , e = this.cells.length - 1;
                        this.beforeShiftCells = this._getGapCells(t, e, -1),
                        t = this.size.innerWidth - this.cursorPosition,
                        this.afterShiftCells = this._getGapCells(t, 0, 1)
                    }
                }
                ,
                f._getGapCells = function(t, e, i) {
                    for (var n = []; t > 0; ) {
                        var o = this.cells[e];
                        if (!o)
                            break;
                        n.push(o),
                        e += i,
                        t -= o.size.outerWidth
                    }
                    return n
                }
                ,
                f._containSlides = function() {
                    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                        var t = this.options.rightToLeft
                          , e = t ? "marginRight" : "marginLeft"
                          , i = t ? "marginLeft" : "marginRight"
                          , n = this.slideableWidth - this.getLastCell().size[i]
                          , o = n < this.size.innerWidth
                          , r = this.cursorPosition + this.cells[0].size[e]
                          , s = n - this.size.innerWidth * (1 - this.cellAlign);
                        this.slides.forEach((function(t) {
                            o ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, r),
                            t.target = Math.min(t.target, s))
                        }
                        ), this)
                    }
                }
                ,
                f.dispatchEvent = function(t, e, i) {
                    var n = e ? [e].concat(i) : i;
                    if (this.emitEvent(t, n),
                    a && this.$element) {
                        var o = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                        if (e) {
                            var r = a.Event(e);
                            r.type = t,
                            o = r
                        }
                        this.$element.trigger(o, i)
                    }
                }
                ,
                f.select = function(t, e, i) {
                    if (this.isActive && (t = parseInt(t, 10),
                    this._wrapSelect(t),
                    (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)),
                    this.slides[t])) {
                        var o = this.selectedIndex;
                        this.selectedIndex = t,
                        this.updateSelectedSlide(),
                        i ? this.positionSliderAtSelected() : this.startAnimation(),
                        this.options.adaptiveHeight && this.setGallerySize(),
                        this.dispatchEvent("select", null, [t]),
                        t != o && this.dispatchEvent("change", null, [t]),
                        this.dispatchEvent("cellSelect")
                    }
                }
                ,
                f._wrapSelect = function(t) {
                    var e = this.slides.length;
                    if (!(this.options.wrapAround && e > 1))
                        return t;
                    var i = n.modulo(t, e)
                      , o = Math.abs(i - this.selectedIndex)
                      , r = Math.abs(i + e - this.selectedIndex)
                      , s = Math.abs(i - e - this.selectedIndex);
                    !this.isDragSelect && r < o ? t += e : !this.isDragSelect && s < o && (t -= e),
                    t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
                }
                ,
                f.previous = function(t, e) {
                    this.select(this.selectedIndex - 1, t, e)
                }
                ,
                f.next = function(t, e) {
                    this.select(this.selectedIndex + 1, t, e)
                }
                ,
                f.updateSelectedSlide = function() {
                    var t = this.slides[this.selectedIndex];
                    t && (this.unselectSelectedSlide(),
                    this.selectedSlide = t,
                    t.select(),
                    this.selectedCells = t.cells,
                    this.selectedElements = t.getCellElements(),
                    this.selectedCell = t.cells[0],
                    this.selectedElement = this.selectedElements[0])
                }
                ,
                f.unselectSelectedSlide = function() {
                    this.selectedSlide && this.selectedSlide.unselect()
                }
                ,
                f.selectInitialIndex = function() {
                    var t = this.options.initialIndex;
                    if (this.isInitActivated)
                        this.select(this.selectedIndex, !1, !0);
                    else {
                        if (t && "string" == typeof t)
                            if (this.queryCell(t))
                                return void this.selectCell(t, !1, !0);
                        var e = 0;
                        t && this.slides[t] && (e = t),
                        this.select(e, !1, !0)
                    }
                }
                ,
                f.selectCell = function(t, e, i) {
                    var n = this.queryCell(t);
                    if (n) {
                        var o = this.getCellSlideIndex(n);
                        this.select(o, e, i)
                    }
                }
                ,
                f.getCellSlideIndex = function(t) {
                    for (var e = 0; e < this.slides.length; e++) {
                        if (-1 != this.slides[e].cells.indexOf(t))
                            return e
                    }
                }
                ,
                f.getCell = function(t) {
                    for (var e = 0; e < this.cells.length; e++) {
                        var i = this.cells[e];
                        if (i.element == t)
                            return i
                    }
                }
                ,
                f.getCells = function(t) {
                    t = n.makeArray(t);
                    var e = [];
                    return t.forEach((function(t) {
                        var i = this.getCell(t);
                        i && e.push(i)
                    }
                    ), this),
                    e
                }
                ,
                f.getCellElements = function() {
                    return this.cells.map((function(t) {
                        return t.element
                    }
                    ))
                }
                ,
                f.getParentCell = function(t) {
                    var e = this.getCell(t);
                    return e || (t = n.getParent(t, ".flickity-slider > *"),
                    this.getCell(t))
                }
                ,
                f.getAdjacentCellElements = function(t, e) {
                    if (!t)
                        return this.selectedSlide.getCellElements();
                    e = void 0 === e ? this.selectedIndex : e;
                    var i = this.slides.length;
                    if (1 + 2 * t >= i)
                        return this.getCellElements();
                    for (var o = [], r = e - t; r <= e + t; r++) {
                        var s = this.options.wrapAround ? n.modulo(r, i) : r
                          , a = this.slides[s];
                        a && (o = o.concat(a.getCellElements()))
                    }
                    return o
                }
                ,
                f.queryCell = function(t) {
                    if ("number" == typeof t)
                        return this.cells[t];
                    if ("string" == typeof t) {
                        if (t.match(/^[#\.]?[\d\/]/))
                            return;
                        t = this.element.querySelector(t)
                    }
                    return this.getCell(t)
                }
                ,
                f.uiChange = function() {
                    this.emitEvent("uiChange")
                }
                ,
                f.childUIPointerDown = function(t) {
                    "touchstart" != t.type && t.preventDefault(),
                    this.focus()
                }
                ,
                f.onresize = function() {
                    this.watchCSS(),
                    this.resize()
                }
                ,
                n.debounceMethod(p, "onresize", 150),
                f.resize = function() {
                    if (this.isActive) {
                        this.getSize(),
                        this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)),
                        this.positionCells(),
                        this._getWrapShiftCells(),
                        this.setGallerySize(),
                        this.emitEvent("resize");
                        var t = this.selectedElements && this.selectedElements[0];
                        this.selectCell(t, !1, !0)
                    }
                }
                ,
                f.watchCSS = function() {
                    this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
                }
                ,
                f.onkeydown = function(t) {
                    var e = document.activeElement && document.activeElement != this.element;
                    if (this.options.accessibility && !e) {
                        var i = p.keyboardHandlers[t.keyCode];
                        i && i.call(this)
                    }
                }
                ,
                p.keyboardHandlers = {
                    37: function() {
                        var t = this.options.rightToLeft ? "next" : "previous";
                        this.uiChange(),
                        this[t]()
                    },
                    39: function() {
                        var t = this.options.rightToLeft ? "previous" : "next";
                        this.uiChange(),
                        this[t]()
                    }
                },
                f.focus = function() {
                    var e = t.pageYOffset;
                    this.element.focus({
                        preventScroll: !0
                    }),
                    t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
                }
                ,
                f.deactivate = function() {
                    this.isActive && (this.element.classList.remove("flickity-enabled"),
                    this.element.classList.remove("flickity-rtl"),
                    this.unselectSelectedSlide(),
                    this.cells.forEach((function(t) {
                        t.destroy()
                    }
                    )),
                    this.element.removeChild(this.viewport),
                    h(this.slider.children, this.element),
                    this.options.accessibility && (this.element.removeAttribute("tabIndex"),
                    this.element.removeEventListener("keydown", this)),
                    this.isActive = !1,
                    this.emitEvent("deactivate"))
                }
                ,
                f.destroy = function() {
                    this.deactivate(),
                    t.removeEventListener("resize", this),
                    this.allOff(),
                    this.emitEvent("destroy"),
                    a && this.$element && a.removeData(this.element, "flickity"),
                    delete this.element.flickityGUID,
                    delete d[this.guid]
                }
                ,
                n.extend(f, s),
                p.data = function(t) {
                    var e = (t = n.getQueryElement(t)) && t.flickityGUID;
                    return e && d[e]
                }
                ,
                n.htmlInit(p, "flickity"),
                a && a.bridget && a.bridget("flickity", p);
                return p.setJQuery = function(t) {
                    a = t
                }
                ,
                p.Cell = o,
                p.Slide = r,
                p
            }(t, e, i, n, o, r, s)
        }
        .apply(e, P = [n, s, d, p, f, v])
    }(window),
    /*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
    function(t, i) {
        b = function(e) {
            return function(t, e) {
                function i() {}
                var n = i.prototype = Object.create(e.prototype);
                n.bindStartEvent = function(t) {
                    this._bindStartEvent(t, !0)
                }
                ,
                n.unbindStartEvent = function(t) {
                    this._bindStartEvent(t, !1)
                }
                ,
                n._bindStartEvent = function(e, i) {
                    var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener"
                      , o = "mousedown";
                    t.PointerEvent ? o = "pointerdown" : "ontouchstart"in t && (o = "touchstart"),
                    e[n](o, this)
                }
                ,
                n.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }
                ,
                n.getTouch = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if (i.identifier == this.pointerIdentifier)
                            return i
                    }
                }
                ,
                n.onmousedown = function(t) {
                    var e = t.button;
                    e && 0 !== e && 1 !== e || this._pointerDown(t, t)
                }
                ,
                n.ontouchstart = function(t) {
                    this._pointerDown(t, t.changedTouches[0])
                }
                ,
                n.onpointerdown = function(t) {
                    this._pointerDown(t, t)
                }
                ,
                n._pointerDown = function(t, e) {
                    t.button || this.isPointerDown || (this.isPointerDown = !0,
                    this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier,
                    this.pointerDown(t, e))
                }
                ,
                n.pointerDown = function(t, e) {
                    this._bindPostStartEvents(t),
                    this.emitEvent("pointerDown", [t, e])
                }
                ;
                var o = {
                    mousedown: ["mousemove", "mouseup"],
                    touchstart: ["touchmove", "touchend", "touchcancel"],
                    pointerdown: ["pointermove", "pointerup", "pointercancel"]
                };
                return n._bindPostStartEvents = function(e) {
                    if (e) {
                        var i = o[e.type];
                        i.forEach((function(e) {
                            t.addEventListener(e, this)
                        }
                        ), this),
                        this._boundPointerEvents = i
                    }
                }
                ,
                n._unbindPostStartEvents = function() {
                    this._boundPointerEvents && (this._boundPointerEvents.forEach((function(e) {
                        t.removeEventListener(e, this)
                    }
                    ), this),
                    delete this._boundPointerEvents)
                }
                ,
                n.onmousemove = function(t) {
                    this._pointerMove(t, t)
                }
                ,
                n.onpointermove = function(t) {
                    t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
                }
                ,
                n.ontouchmove = function(t) {
                    var e = this.getTouch(t.changedTouches);
                    e && this._pointerMove(t, e)
                }
                ,
                n._pointerMove = function(t, e) {
                    this.pointerMove(t, e)
                }
                ,
                n.pointerMove = function(t, e) {
                    this.emitEvent("pointerMove", [t, e])
                }
                ,
                n.onmouseup = function(t) {
                    this._pointerUp(t, t)
                }
                ,
                n.onpointerup = function(t) {
                    t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
                }
                ,
                n.ontouchend = function(t) {
                    var e = this.getTouch(t.changedTouches);
                    e && this._pointerUp(t, e)
                }
                ,
                n._pointerUp = function(t, e) {
                    this._pointerDone(),
                    this.pointerUp(t, e)
                }
                ,
                n.pointerUp = function(t, e) {
                    this.emitEvent("pointerUp", [t, e])
                }
                ,
                n._pointerDone = function() {
                    this._pointerReset(),
                    this._unbindPostStartEvents(),
                    this.pointerDone()
                }
                ,
                n._pointerReset = function() {
                    this.isPointerDown = !1,
                    delete this.pointerIdentifier
                }
                ,
                n.pointerDone = function() {}
                ,
                n.onpointercancel = function(t) {
                    t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
                }
                ,
                n.ontouchcancel = function(t) {
                    var e = this.getTouch(t.changedTouches);
                    e && this._pointerCancel(t, e)
                }
                ,
                n._pointerCancel = function(t, e) {
                    this._pointerDone(),
                    this.pointerCancel(t, e)
                }
                ,
                n.pointerCancel = function(t, e) {
                    this.emitEvent("pointerCancel", [t, e])
                }
                ,
                i.getPointerPoint = function(t) {
                    return {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
                ,
                i
            }(t, e)
        }
        .apply(e, P = [n])
    }(window),
    /*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */
    function(t, i) {
        w = function(e) {
            return function(t, e) {
                function i() {}
                var n = i.prototype = Object.create(e.prototype);
                n.bindHandles = function() {
                    this._bindHandles(!0)
                }
                ,
                n.unbindHandles = function() {
                    this._bindHandles(!1)
                }
                ,
                n._bindHandles = function(e) {
                    for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
                        var r = this.handles[o];
                        this._bindStartEvent(r, e),
                        r[i]("click", this),
                        t.PointerEvent && (r.style.touchAction = n)
                    }
                }
                ,
                n._touchActionValue = "none",
                n.pointerDown = function(t, e) {
                    this.okayPointerDown(t) && (this.pointerDownPointer = e,
                    t.preventDefault(),
                    this.pointerDownBlur(),
                    this._bindPostStartEvents(t),
                    this.emitEvent("pointerDown", [t, e]))
                }
                ;
                var o = {
                    TEXTAREA: !0,
                    INPUT: !0,
                    SELECT: !0,
                    OPTION: !0
                }
                  , r = {
                    radio: !0,
                    checkbox: !0,
                    button: !0,
                    submit: !0,
                    image: !0,
                    file: !0
                };
                return n.okayPointerDown = function(t) {
                    var e = o[t.target.nodeName]
                      , i = r[t.target.type]
                      , n = !e || i;
                    return n || this._pointerReset(),
                    n
                }
                ,
                n.pointerDownBlur = function() {
                    var t = document.activeElement;
                    t && t.blur && t != document.body && t.blur()
                }
                ,
                n.pointerMove = function(t, e) {
                    var i = this._dragPointerMove(t, e);
                    this.emitEvent("pointerMove", [t, e, i]),
                    this._dragMove(t, e, i)
                }
                ,
                n._dragPointerMove = function(t, e) {
                    var i = {
                        x: e.pageX - this.pointerDownPointer.pageX,
                        y: e.pageY - this.pointerDownPointer.pageY
                    };
                    return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e),
                    i
                }
                ,
                n.hasDragStarted = function(t) {
                    return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
                }
                ,
                n.pointerUp = function(t, e) {
                    this.emitEvent("pointerUp", [t, e]),
                    this._dragPointerUp(t, e)
                }
                ,
                n._dragPointerUp = function(t, e) {
                    this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
                }
                ,
                n._dragStart = function(t, e) {
                    this.isDragging = !0,
                    this.isPreventingClicks = !0,
                    this.dragStart(t, e)
                }
                ,
                n.dragStart = function(t, e) {
                    this.emitEvent("dragStart", [t, e])
                }
                ,
                n._dragMove = function(t, e, i) {
                    this.isDragging && this.dragMove(t, e, i)
                }
                ,
                n.dragMove = function(t, e, i) {
                    t.preventDefault(),
                    this.emitEvent("dragMove", [t, e, i])
                }
                ,
                n._dragEnd = function(t, e) {
                    this.isDragging = !1,
                    setTimeout(function() {
                        delete this.isPreventingClicks
                    }
                    .bind(this)),
                    this.dragEnd(t, e)
                }
                ,
                n.dragEnd = function(t, e) {
                    this.emitEvent("dragEnd", [t, e])
                }
                ,
                n.onclick = function(t) {
                    this.isPreventingClicks && t.preventDefault()
                }
                ,
                n._staticClick = function(t, e) {
                    this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e),
                    "mouseup" != t.type && (this.isIgnoringMouseUp = !0,
                    setTimeout(function() {
                        delete this.isIgnoringMouseUp
                    }
                    .bind(this), 400)))
                }
                ,
                n.staticClick = function(t, e) {
                    this.emitEvent("staticClick", [t, e])
                }
                ,
                i.getPointerPoint = e.getPointerPoint,
                i
            }(t, e)
        }
        .apply(e, P = [b])
    }(window),
    function(t, i) {
        x = function(e, i, n) {
            return function(t, e, i, n) {
                n.extend(e.defaults, {
                    draggable: ">1",
                    dragThreshold: 3
                }),
                e.createMethods.push("_createDrag");
                var o = e.prototype;
                n.extend(o, i.prototype),
                o._touchActionValue = "pan-y";
                var r = "createTouch"in document
                  , s = !1;
                o._createDrag = function() {
                    this.on("activate", this.onActivateDrag),
                    this.on("uiChange", this._uiChangeDrag),
                    this.on("deactivate", this.onDeactivateDrag),
                    this.on("cellChange", this.updateDraggable),
                    r && !s && (t.addEventListener("touchmove", (function() {}
                    )),
                    s = !0)
                }
                ,
                o.onActivateDrag = function() {
                    this.handles = [this.viewport],
                    this.bindHandles(),
                    this.updateDraggable()
                }
                ,
                o.onDeactivateDrag = function() {
                    this.unbindHandles(),
                    this.element.classList.remove("is-draggable")
                }
                ,
                o.updateDraggable = function() {
                    ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable,
                    this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
                }
                ,
                o.bindDrag = function() {
                    this.options.draggable = !0,
                    this.updateDraggable()
                }
                ,
                o.unbindDrag = function() {
                    this.options.draggable = !1,
                    this.updateDraggable()
                }
                ,
                o._uiChangeDrag = function() {
                    delete this.isFreeScrolling
                }
                ,
                o.pointerDown = function(e, i) {
                    this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e),
                    this.pointerDownFocus(e),
                    document.activeElement != this.element && this.pointerDownBlur(),
                    this.dragX = this.x,
                    this.viewport.classList.add("is-pointer-down"),
                    this.pointerDownScroll = l(),
                    t.addEventListener("scroll", this),
                    this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
                }
                ,
                o._pointerDownDefault = function(t, e) {
                    this.pointerDownPointer = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    },
                    this._bindPostStartEvents(t),
                    this.dispatchEvent("pointerDown", t, [e])
                }
                ;
                var a = {
                    INPUT: !0,
                    TEXTAREA: !0,
                    SELECT: !0
                };
                function l() {
                    return {
                        x: t.pageXOffset,
                        y: t.pageYOffset
                    }
                }
                return o.pointerDownFocus = function(t) {
                    a[t.target.nodeName] || this.focus()
                }
                ,
                o._pointerDownPreventDefault = function(t) {
                    var e = "touchstart" == t.type
                      , i = "touch" == t.pointerType
                      , n = a[t.target.nodeName];
                    e || i || n || t.preventDefault()
                }
                ,
                o.hasDragStarted = function(t) {
                    return Math.abs(t.x) > this.options.dragThreshold
                }
                ,
                o.pointerUp = function(t, e) {
                    delete this.isTouchScrolling,
                    this.viewport.classList.remove("is-pointer-down"),
                    this.dispatchEvent("pointerUp", t, [e]),
                    this._dragPointerUp(t, e)
                }
                ,
                o.pointerDone = function() {
                    t.removeEventListener("scroll", this),
                    delete this.pointerDownScroll
                }
                ,
                o.dragStart = function(e, i) {
                    this.isDraggable && (this.dragStartPosition = this.x,
                    this.startAnimation(),
                    t.removeEventListener("scroll", this),
                    this.dispatchEvent("dragStart", e, [i]))
                }
                ,
                o.pointerMove = function(t, e) {
                    var i = this._dragPointerMove(t, e);
                    this.dispatchEvent("pointerMove", t, [e, i]),
                    this._dragMove(t, e, i)
                }
                ,
                o.dragMove = function(t, e, i) {
                    if (this.isDraggable) {
                        t.preventDefault(),
                        this.previousDragX = this.dragX;
                        var n = this.options.rightToLeft ? -1 : 1;
                        this.options.wrapAround && (i.x = i.x % this.slideableWidth);
                        var o = this.dragStartPosition + i.x * n;
                        if (!this.options.wrapAround && this.slides.length) {
                            var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                            o = o > r ? .5 * (o + r) : o;
                            var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                            o = o < s ? .5 * (o + s) : o
                        }
                        this.dragX = o,
                        this.dragMoveTime = new Date,
                        this.dispatchEvent("dragMove", t, [e, i])
                    }
                }
                ,
                o.dragEnd = function(t, e) {
                    if (this.isDraggable) {
                        this.options.freeScroll && (this.isFreeScrolling = !0);
                        var i = this.dragEndRestingSelect();
                        if (this.options.freeScroll && !this.options.wrapAround) {
                            var n = this.getRestingPosition();
                            this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
                        } else
                            this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                        delete this.previousDragX,
                        this.isDragSelect = this.options.wrapAround,
                        this.select(i),
                        delete this.isDragSelect,
                        this.dispatchEvent("dragEnd", t, [e])
                    }
                }
                ,
                o.dragEndRestingSelect = function() {
                    var t = this.getRestingPosition()
                      , e = Math.abs(this.getSlideDistance(-t, this.selectedIndex))
                      , i = this._getClosestResting(t, e, 1)
                      , n = this._getClosestResting(t, e, -1);
                    return i.distance < n.distance ? i.index : n.index
                }
                ,
                o._getClosestResting = function(t, e, i) {
                    for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(t, e) {
                        return t <= e
                    }
                    : function(t, e) {
                        return t < e
                    }
                    ; r(e, o) && (n += i,
                    o = e,
                    null !== (e = this.getSlideDistance(-t, n))); )
                        e = Math.abs(e);
                    return {
                        distance: o,
                        index: n - i
                    }
                }
                ,
                o.getSlideDistance = function(t, e) {
                    var i = this.slides.length
                      , o = this.options.wrapAround && i > 1
                      , r = o ? n.modulo(e, i) : e
                      , s = this.slides[r];
                    if (!s)
                        return null;
                    var a = o ? this.slideableWidth * Math.floor(e / i) : 0;
                    return t - (s.target + a)
                }
                ,
                o.dragEndBoostSelect = function() {
                    if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100)
                        return 0;
                    var t = this.getSlideDistance(-this.dragX, this.selectedIndex)
                      , e = this.previousDragX - this.dragX;
                    return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
                }
                ,
                o.staticClick = function(t, e) {
                    var i = this.getParentCell(t.target)
                      , n = i && i.element
                      , o = i && this.cells.indexOf(i);
                    this.dispatchEvent("staticClick", t, [e, n, o])
                }
                ,
                o.onscroll = function() {
                    var t = l()
                      , e = this.pointerDownScroll.x - t.x
                      , i = this.pointerDownScroll.y - t.y;
                    (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
                }
                ,
                e
            }(t, e, i, n)
        }
        .apply(e, P = [y, w, d])
    }(window),
    window,
    C = function(t, e, i) {
        return function(t, e, i, n) {
            "use strict";
            var o = "http://www.w3.org/2000/svg";
            function r(t, e) {
                this.direction = t,
                this.parent = e,
                this._create()
            }
            r.prototype = Object.create(i.prototype),
            r.prototype._create = function() {
                this.isEnabled = !0,
                this.isPrevious = -1 == this.direction;
                var t = this.parent.options.rightToLeft ? 1 : -1;
                this.isLeft = this.direction == t;
                var e = this.element = document.createElement("button");
                e.className = "flickity-button flickity-prev-next-button",
                e.className += this.isPrevious ? " previous" : " next",
                e.setAttribute("type", "button"),
                this.disable(),
                e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                var i = this.createSVG();
                e.appendChild(i),
                this.parent.on("select", this.update.bind(this)),
                this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
            }
            ,
            r.prototype.activate = function() {
                this.bindStartEvent(this.element),
                this.element.addEventListener("click", this),
                this.parent.element.appendChild(this.element)
            }
            ,
            r.prototype.deactivate = function() {
                this.parent.element.removeChild(this.element),
                this.unbindStartEvent(this.element),
                this.element.removeEventListener("click", this)
            }
            ,
            r.prototype.createSVG = function() {
                var t = document.createElementNS(o, "svg");
                t.setAttribute("class", "flickity-button-icon"),
                t.setAttribute("viewBox", "0 0 100 100");
                var e, i = document.createElementNS(o, "path"), n = "string" == typeof (e = this.parent.options.arrowShape) ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
                return i.setAttribute("d", n),
                i.setAttribute("class", "arrow"),
                this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "),
                t.appendChild(i),
                t
            }
            ,
            r.prototype.handleEvent = n.handleEvent,
            r.prototype.onclick = function() {
                if (this.isEnabled) {
                    this.parent.uiChange();
                    var t = this.isPrevious ? "previous" : "next";
                    this.parent[t]()
                }
            }
            ,
            r.prototype.enable = function() {
                this.isEnabled || (this.element.disabled = !1,
                this.isEnabled = !0)
            }
            ,
            r.prototype.disable = function() {
                this.isEnabled && (this.element.disabled = !0,
                this.isEnabled = !1)
            }
            ,
            r.prototype.update = function() {
                var t = this.parent.slides;
                if (this.parent.options.wrapAround && t.length > 1)
                    this.enable();
                else {
                    var e = t.length ? t.length - 1 : 0
                      , i = this.isPrevious ? 0 : e;
                    this[this.parent.selectedIndex == i ? "disable" : "enable"]()
                }
            }
            ,
            r.prototype.destroy = function() {
                this.deactivate(),
                this.allOff()
            }
            ,
            n.extend(e.defaults, {
                prevNextButtons: !0,
                arrowShape: {
                    x0: 10,
                    x1: 60,
                    y1: 50,
                    x2: 70,
                    y2: 40,
                    x3: 30
                }
            }),
            e.createMethods.push("_createPrevNextButtons");
            var s = e.prototype;
            return s._createPrevNextButtons = function() {
                this.options.prevNextButtons && (this.prevButton = new r(-1,this),
                this.nextButton = new r(1,this),
                this.on("activate", this.activatePrevNextButtons))
            }
            ,
            s.activatePrevNextButtons = function() {
                this.prevButton.activate(),
                this.nextButton.activate(),
                this.on("deactivate", this.deactivatePrevNextButtons)
            }
            ,
            s.deactivatePrevNextButtons = function() {
                this.prevButton.deactivate(),
                this.nextButton.deactivate(),
                this.off("deactivate", this.deactivatePrevNextButtons)
            }
            ,
            e.PrevNextButton = r,
            e
        }(0, t, e, i)
    }
    .apply(e, P = [y, b, d]),
    window,
    k = function(t, e, i) {
        return function(t, e, i, n) {
            function o(t) {
                this.parent = t,
                this._create()
            }
            o.prototype = Object.create(i.prototype),
            o.prototype._create = function() {
                this.holder = document.createElement("ol"),
                this.holder.className = "flickity-page-dots",
                this.dots = [],
                this.handleClick = this.onClick.bind(this),
                this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
            }
            ,
            o.prototype.activate = function() {
                this.setDots(),
                this.holder.addEventListener("click", this.handleClick),
                this.bindStartEvent(this.holder),
                this.parent.element.appendChild(this.holder)
            }
            ,
            o.prototype.deactivate = function() {
                this.holder.removeEventListener("click", this.handleClick),
                this.unbindStartEvent(this.holder),
                this.parent.element.removeChild(this.holder)
            }
            ,
            o.prototype.setDots = function() {
                var t = this.parent.slides.length - this.dots.length;
                t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
            }
            ,
            o.prototype.addDots = function(t) {
                for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, o = n + t, r = n; r < o; r++) {
                    var s = document.createElement("li");
                    s.className = "dot",
                    s.setAttribute("aria-label", "Page dot " + (r + 1)),
                    e.appendChild(s),
                    i.push(s)
                }
                this.holder.appendChild(e),
                this.dots = this.dots.concat(i)
            }
            ,
            o.prototype.removeDots = function(t) {
                this.dots.splice(this.dots.length - t, t).forEach((function(t) {
                    this.holder.removeChild(t)
                }
                ), this)
            }
            ,
            o.prototype.updateSelected = function() {
                this.selectedDot && (this.selectedDot.className = "dot",
                this.selectedDot.removeAttribute("aria-current")),
                this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex],
                this.selectedDot.className = "dot is-selected",
                this.selectedDot.setAttribute("aria-current", "step"))
            }
            ,
            o.prototype.onTap = o.prototype.onClick = function(t) {
                var e = t.target;
                if ("LI" == e.nodeName) {
                    this.parent.uiChange();
                    var i = this.dots.indexOf(e);
                    this.parent.select(i)
                }
            }
            ,
            o.prototype.destroy = function() {
                this.deactivate(),
                this.allOff()
            }
            ,
            e.PageDots = o,
            n.extend(e.defaults, {
                pageDots: !0
            }),
            e.createMethods.push("_createPageDots");
            var r = e.prototype;
            return r._createPageDots = function() {
                this.options.pageDots && (this.pageDots = new o(this),
                this.on("activate", this.activatePageDots),
                this.on("select", this.updateSelectedPageDots),
                this.on("cellChange", this.updatePageDots),
                this.on("resize", this.updatePageDots),
                this.on("deactivate", this.deactivatePageDots))
            }
            ,
            r.activatePageDots = function() {
                this.pageDots.activate()
            }
            ,
            r.updateSelectedPageDots = function() {
                this.pageDots.updateSelected()
            }
            ,
            r.updatePageDots = function() {
                this.pageDots.setDots()
            }
            ,
            r.deactivatePageDots = function() {
                this.pageDots.deactivate()
            }
            ,
            e.PageDots = o,
            e
        }(0, t, e, i)
    }
    .apply(e, P = [y, b, d]),
    window,
    S = function(t, e, i) {
        return function(t, e, i) {
            function n(t) {
                this.parent = t,
                this.state = "stopped",
                this.onVisibilityChange = this.visibilityChange.bind(this),
                this.onVisibilityPlay = this.visibilityPlay.bind(this)
            }
            n.prototype = Object.create(t.prototype),
            n.prototype.play = function() {
                "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing",
                document.addEventListener("visibilitychange", this.onVisibilityChange),
                this.tick()))
            }
            ,
            n.prototype.tick = function() {
                if ("playing" == this.state) {
                    var t = this.parent.options.autoPlay;
                    t = "number" == typeof t ? t : 3e3;
                    var e = this;
                    this.clear(),
                    this.timeout = setTimeout((function() {
                        e.parent.next(!0),
                        e.tick()
                    }
                    ), t)
                }
            }
            ,
            n.prototype.stop = function() {
                this.state = "stopped",
                this.clear(),
                document.removeEventListener("visibilitychange", this.onVisibilityChange)
            }
            ,
            n.prototype.clear = function() {
                clearTimeout(this.timeout)
            }
            ,
            n.prototype.pause = function() {
                "playing" == this.state && (this.state = "paused",
                this.clear())
            }
            ,
            n.prototype.unpause = function() {
                "paused" == this.state && this.play()
            }
            ,
            n.prototype.visibilityChange = function() {
                this[document.hidden ? "pause" : "unpause"]()
            }
            ,
            n.prototype.visibilityPlay = function() {
                this.play(),
                document.removeEventListener("visibilitychange", this.onVisibilityPlay)
            }
            ,
            e.extend(i.defaults, {
                pauseAutoPlayOnHover: !0
            }),
            i.createMethods.push("_createPlayer");
            var o = i.prototype;
            return o._createPlayer = function() {
                this.player = new n(this),
                this.on("activate", this.activatePlayer),
                this.on("uiChange", this.stopPlayer),
                this.on("pointerDown", this.stopPlayer),
                this.on("deactivate", this.deactivatePlayer)
            }
            ,
            o.activatePlayer = function() {
                this.options.autoPlay && (this.player.play(),
                this.element.addEventListener("mouseenter", this))
            }
            ,
            o.playPlayer = function() {
                this.player.play()
            }
            ,
            o.stopPlayer = function() {
                this.player.stop()
            }
            ,
            o.pausePlayer = function() {
                this.player.pause()
            }
            ,
            o.unpausePlayer = function() {
                this.player.unpause()
            }
            ,
            o.deactivatePlayer = function() {
                this.player.stop(),
                this.element.removeEventListener("mouseenter", this)
            }
            ,
            o.onmouseenter = function() {
                this.options.pauseAutoPlayOnHover && (this.player.pause(),
                this.element.addEventListener("mouseleave", this))
            }
            ,
            o.onmouseleave = function() {
                this.player.unpause(),
                this.element.removeEventListener("mouseleave", this)
            }
            ,
            i.Player = n,
            i
        }(t, e, i)
    }
    .apply(e, P = [n, d, y]),
    window,
    E = function(t, e) {
        return function(t, e, i) {
            var n = e.prototype;
            return n.insert = function(t, e) {
                var i = this._makeCells(t);
                if (i && i.length) {
                    var n = this.cells.length;
                    e = void 0 === e ? n : e;
                    var o = function(t) {
                        var e = document.createDocumentFragment();
                        return t.forEach((function(t) {
                            e.appendChild(t.element)
                        }
                        )),
                        e
                    }(i)
                      , r = e == n;
                    if (r)
                        this.slider.appendChild(o);
                    else {
                        var s = this.cells[e].element;
                        this.slider.insertBefore(o, s)
                    }
                    if (0 === e)
                        this.cells = i.concat(this.cells);
                    else if (r)
                        this.cells = this.cells.concat(i);
                    else {
                        var a = this.cells.splice(e, n - e);
                        this.cells = this.cells.concat(i).concat(a)
                    }
                    this._sizeCells(i),
                    this.cellChange(e, !0)
                }
            }
            ,
            n.append = function(t) {
                this.insert(t, this.cells.length)
            }
            ,
            n.prepend = function(t) {
                this.insert(t, 0)
            }
            ,
            n.remove = function(t) {
                var e = this.getCells(t);
                if (e && e.length) {
                    var n = this.cells.length - 1;
                    e.forEach((function(t) {
                        t.remove();
                        var e = this.cells.indexOf(t);
                        n = Math.min(e, n),
                        i.removeFrom(this.cells, t)
                    }
                    ), this),
                    this.cellChange(n, !0)
                }
            }
            ,
            n.cellSizeChange = function(t) {
                var e = this.getCell(t);
                if (e) {
                    e.getSize();
                    var i = this.cells.indexOf(e);
                    this.cellChange(i)
                }
            }
            ,
            n.cellChange = function(t, e) {
                var i = this.selectedElement;
                this._positionCells(t),
                this._getWrapShiftCells(),
                this.setGallerySize();
                var n = this.getCell(i);
                n && (this.selectedIndex = this.getCellSlideIndex(n)),
                this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex),
                this.emitEvent("cellChange", [t]),
                this.select(this.selectedIndex),
                e && this.positionSliderAtSelected()
            }
            ,
            e
        }(0, t, e)
    }
    .apply(e, P = [y, d]),
    window,
    T = function(t, e) {
        return function(t, e, i) {
            "use strict";
            e.createMethods.push("_createLazyload");
            var n = e.prototype;
            function o(t, e) {
                this.img = t,
                this.flickity = e,
                this.load()
            }
            return n._createLazyload = function() {
                this.on("select", this.lazyLoad)
            }
            ,
            n.lazyLoad = function() {
                var t = this.options.lazyLoad;
                if (t) {
                    var e = "number" == typeof t ? t : 0
                      , n = this.getAdjacentCellElements(e)
                      , r = [];
                    n.forEach((function(t) {
                        var e = function(t) {
                            if ("IMG" == t.nodeName) {
                                var e = t.getAttribute("data-flickity-lazyload")
                                  , n = t.getAttribute("data-flickity-lazyload-src")
                                  , o = t.getAttribute("data-flickity-lazyload-srcset");
                                if (e || n || o)
                                    return [t]
                            }
                            var r = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                            return i.makeArray(r)
                        }(t);
                        r = r.concat(e)
                    }
                    )),
                    r.forEach((function(t) {
                        new o(t,this)
                    }
                    ), this)
                }
            }
            ,
            o.prototype.handleEvent = i.handleEvent,
            o.prototype.load = function() {
                this.img.addEventListener("load", this),
                this.img.addEventListener("error", this);
                var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src")
                  , e = this.img.getAttribute("data-flickity-lazyload-srcset");
                this.img.src = t,
                e && this.img.setAttribute("srcset", e),
                this.img.removeAttribute("data-flickity-lazyload"),
                this.img.removeAttribute("data-flickity-lazyload-src"),
                this.img.removeAttribute("data-flickity-lazyload-srcset")
            }
            ,
            o.prototype.onload = function(t) {
                this.complete(t, "flickity-lazyloaded")
            }
            ,
            o.prototype.onerror = function(t) {
                this.complete(t, "flickity-lazyerror")
            }
            ,
            o.prototype.complete = function(t, e) {
                this.img.removeEventListener("load", this),
                this.img.removeEventListener("error", this);
                var i = this.flickity.getParentCell(this.img)
                  , n = i && i.element;
                this.flickity.cellSizeChange(n),
                this.img.classList.add(e),
                this.flickity.dispatchEvent("lazyLoad", t, n)
            }
            ,
            e.LazyLoader = o,
            e
        }(0, t, e)
    }
    .apply(e, P = [y, d]),
    window,
    P = [y, x, C, k, S, E, T],
    _ = "function" == typeof (j = function(t) {
        return t
    }
    ) ? j.apply(e, P) : j,
    window,
    P = [_, d],
    void 0 === (A = "function" == typeof (j = function(t, e) {
        t.createMethods.push("_createAsNavFor");
        var i = t.prototype;
        return i._createAsNavFor = function() {
            this.on("activate", this.activateAsNavFor),
            this.on("deactivate", this.deactivateAsNavFor),
            this.on("destroy", this.destroyAsNavFor);
            var t = this.options.asNavFor;
            if (t) {
                var e = this;
                setTimeout((function() {
                    e.setNavCompanion(t)
                }
                ))
            }
        }
        ,
        i.setNavCompanion = function(i) {
            i = e.getQueryElement(i);
            var n = t.data(i);
            if (n && n != this) {
                this.navCompanion = n;
                var o = this;
                this.onNavCompanionSelect = function() {
                    o.navCompanionSelect()
                }
                ,
                n.on("select", this.onNavCompanionSelect),
                this.on("staticClick", this.onNavStaticClick),
                this.navCompanionSelect(!0)
            }
        }
        ,
        i.navCompanionSelect = function(t) {
            var e = this.navCompanion && this.navCompanion.selectedCells;
            if (e) {
                var i, n, o, r = e[0], s = this.navCompanion.cells.indexOf(r), a = s + e.length - 1, l = Math.floor((i = s,
                n = a,
                o = this.navCompanion.cellAlign,
                (n - i) * o + i));
                if (this.selectCell(l, !1, t),
                this.removeNavSelectedElements(),
                !(l >= this.cells.length)) {
                    var c = this.cells.slice(s, a + 1);
                    this.navSelectedElements = c.map((function(t) {
                        return t.element
                    }
                    )),
                    this.changeNavSelectedClass("add")
                }
            }
        }
        ,
        i.changeNavSelectedClass = function(t) {
            this.navSelectedElements.forEach((function(e) {
                e.classList[t]("is-nav-selected")
            }
            ))
        }
        ,
        i.activateAsNavFor = function() {
            this.navCompanionSelect(!0)
        }
        ,
        i.removeNavSelectedElements = function() {
            this.navSelectedElements && (this.changeNavSelectedClass("remove"),
            delete this.navSelectedElements)
        }
        ,
        i.onNavStaticClick = function(t, e, i, n) {
            "number" == typeof n && this.navCompanion.selectCell(n)
        }
        ,
        i.deactivateAsNavFor = function() {
            this.removeNavSelectedElements()
        }
        ,
        i.destroyAsNavFor = function() {
            this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect),
            this.off("staticClick", this.onNavStaticClick),
            delete this.navCompanion)
        }
        ,
        t
    }
    ) ? j.apply(e, P) : j) || (t.exports = A),
    /*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
    function(t, i) {
        "use strict";
        I = function(e) {
            return function(t, e) {
                var i = t.jQuery
                  , n = t.console;
                function o(t, e) {
                    for (var i in e)
                        t[i] = e[i];
                    return t
                }
                var r = Array.prototype.slice;
                function s(t, e, a) {
                    if (!(this instanceof s))
                        return new s(t,e,a);
                    var l, c = t;
                    ("string" == typeof t && (c = document.querySelectorAll(t)),
                    c) ? (this.elements = (l = c,
                    Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? r.call(l) : [l]),
                    this.options = o({}, this.options),
                    "function" == typeof e ? a = e : o(this.options, e),
                    a && this.on("always", a),
                    this.getImages(),
                    i && (this.jqDeferred = new i.Deferred),
                    setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (c || t))
                }
                s.prototype = Object.create(e.prototype),
                s.prototype.options = {},
                s.prototype.getImages = function() {
                    this.images = [],
                    this.elements.forEach(this.addElementImages, this)
                }
                ,
                s.prototype.addElementImages = function(t) {
                    "IMG" == t.nodeName && this.addImage(t),
                    !0 === this.options.background && this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && a[e]) {
                        for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                            var o = i[n];
                            this.addImage(o)
                        }
                        if ("string" == typeof this.options.background) {
                            var r = t.querySelectorAll(this.options.background);
                            for (n = 0; n < r.length; n++) {
                                var s = r[n];
                                this.addElementBackgroundImages(s)
                            }
                        }
                    }
                }
                ;
                var a = {
                    1: !0,
                    9: !0,
                    11: !0
                };
                function l(t) {
                    this.img = t
                }
                function c(t, e) {
                    this.url = t,
                    this.element = e,
                    this.img = new Image
                }
                return s.prototype.addElementBackgroundImages = function(t) {
                    var e = getComputedStyle(t);
                    if (e)
                        for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                            var o = n && n[2];
                            o && this.addBackground(o, t),
                            n = i.exec(e.backgroundImage)
                        }
                }
                ,
                s.prototype.addImage = function(t) {
                    var e = new l(t);
                    this.images.push(e)
                }
                ,
                s.prototype.addBackground = function(t, e) {
                    var i = new c(t,e);
                    this.images.push(i)
                }
                ,
                s.prototype.check = function() {
                    var t = this;
                    function e(e, i, n) {
                        setTimeout((function() {
                            t.progress(e, i, n)
                        }
                        ))
                    }
                    this.progressedCount = 0,
                    this.hasAnyBroken = !1,
                    this.images.length ? this.images.forEach((function(t) {
                        t.once("progress", e),
                        t.check()
                    }
                    )) : this.complete()
                }
                ,
                s.prototype.progress = function(t, e, i) {
                    this.progressedCount++,
                    this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
                    this.emitEvent("progress", [this, t, e]),
                    this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && n && n.log("progress: " + i, t, e)
                }
                ,
                s.prototype.complete = function() {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (this.isComplete = !0,
                    this.emitEvent(t, [this]),
                    this.emitEvent("always", [this]),
                    this.jqDeferred) {
                        var e = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[e](this)
                    }
                }
                ,
                l.prototype = Object.create(e.prototype),
                l.prototype.check = function() {
                    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
                    this.proxyImage.addEventListener("load", this),
                    this.proxyImage.addEventListener("error", this),
                    this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    this.proxyImage.src = this.img.src)
                }
                ,
                l.prototype.getIsImageComplete = function() {
                    return this.img.complete && this.img.naturalWidth
                }
                ,
                l.prototype.confirm = function(t, e) {
                    this.isLoaded = t,
                    this.emitEvent("progress", [this, this.img, e])
                }
                ,
                l.prototype.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }
                ,
                l.prototype.onload = function() {
                    this.confirm(!0, "onload"),
                    this.unbindEvents()
                }
                ,
                l.prototype.onerror = function() {
                    this.confirm(!1, "onerror"),
                    this.unbindEvents()
                }
                ,
                l.prototype.unbindEvents = function() {
                    this.proxyImage.removeEventListener("load", this),
                    this.proxyImage.removeEventListener("error", this),
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this)
                }
                ,
                c.prototype = Object.create(l.prototype),
                c.prototype.check = function() {
                    this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    this.img.src = this.url,
                    this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                    this.unbindEvents())
                }
                ,
                c.prototype.unbindEvents = function() {
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this)
                }
                ,
                c.prototype.confirm = function(t, e) {
                    this.isLoaded = t,
                    this.emitEvent("progress", [this, this.element, e])
                }
                ,
                s.makeJQueryPlugin = function(e) {
                    (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                        return new s(this,t,e).jqDeferred.promise(i(this))
                    }
                    )
                }
                ,
                s.makeJQueryPlugin(),
                s
            }(t, e)
        }
        .apply(e, P = [n])
    }("undefined" != typeof window ? window : this),
    window,
    void 0 === (A = function(t, e) {
        return function(t, e, i) {
            "use strict";
            e.createMethods.push("_createImagesLoaded");
            var n = e.prototype;
            return n._createImagesLoaded = function() {
                this.on("activate", this.imagesLoaded)
            }
            ,
            n.imagesLoaded = function() {
                if (this.options.imagesLoaded) {
                    var t = this;
                    i(this.slider).on("progress", (function(e, i) {
                        var n = t.getParentCell(i.img);
                        t.cellSizeChange(n && n.element),
                        t.options.freeScroll || t.positionSliderAtSelected()
                    }
                    ))
                }
            }
            ,
            e
        }(0, t, e)
    }
    .apply(e, P = [_, I])) || (t.exports = A)
}
, function(t, e) {
    !function() {
        var t = window.MutationObserver || window.WebKitMutationObserver
          , e = "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch;
        if (!(void 0 !== document.documentElement.style["touch-action"] || document.documentElement.style["-ms-touch-action"]) && e && t) {
            window.Hammer = window.Hammer || {};
            var i = /touch-action[:][\s]*(none)[^;'"]*/
              , n = /touch-action[:][\s]*(manipulation)[^;'"]*/
              , o = /touch-action/
              , r = /(iP(ad|hone|od))/.test(navigator.userAgent) && ("indexedDB"in window || !!window.performance);
            window.Hammer.time = {
                getTouchAction: function(t) {
                    return this.checkStyleString(t.getAttribute("style"))
                },
                checkStyleString: function(t) {
                    if (o.test(t))
                        return i.test(t) ? "none" : !n.test(t) || "manipulation"
                },
                shouldHammer: function(t) {
                    var e = t.target.hasParent;
                    return !(!e || r && !(Date.now() - t.target.lastStart < 125)) && e
                },
                touchHandler: function(t) {
                    var e = this.shouldHammer(t);
                    if ("none" === e)
                        this.dropHammer(t);
                    else if ("manipulation" === e) {
                        var i = t.target.getBoundingClientRect();
                        !(i.top !== this.pos.top || i.left !== this.pos.left) && this.dropHammer(t)
                    }
                    this.scrolled = !1,
                    delete t.target.lastStart,
                    delete t.target.hasParent
                },
                dropHammer: function(t) {
                    "touchend" === t.type && (t.target.focus(),
                    setTimeout((function() {
                        t.target.click()
                    }
                    ), 0)),
                    t.preventDefault()
                },
                touchStart: function(t) {
                    this.pos = t.target.getBoundingClientRect(),
                    t.target.hasParent = this.hasParent(t.target),
                    r && t.target.hasParent && (t.target.lastStart = Date.now())
                },
                styleWatcher: function(t) {
                    t.forEach(this.styleUpdater, this)
                },
                styleUpdater: function(t) {
                    if (t.target.updateNext)
                        t.target.updateNext = !1;
                    else {
                        var e = this.getTouchAction(t.target);
                        e ? "none" !== e && (t.target.hadTouchNone = !1) : !e && (t.oldValue && this.checkStyleString(t.oldValue) || t.target.hadTouchNone) && (t.target.hadTouchNone = !0,
                        t.target.updateNext = !1,
                        t.target.setAttribute("style", t.target.getAttribute("style") + " touch-action: none;"))
                    }
                },
                hasParent: function(t) {
                    for (var e, i = t; i && i.parentNode; i = i.parentNode)
                        if (e = this.getTouchAction(i))
                            return e;
                    return !1
                },
                installStartEvents: function() {
                    document.addEventListener("touchstart", this.touchStart.bind(this)),
                    document.addEventListener("mousedown", this.touchStart.bind(this))
                },
                installEndEvents: function() {
                    document.addEventListener("touchend", this.touchHandler.bind(this), !0),
                    document.addEventListener("mouseup", this.touchHandler.bind(this), !0)
                },
                installObserver: function() {
                    this.observer = new t(this.styleWatcher.bind(this)).observe(document, {
                        subtree: !0,
                        attributes: !0,
                        attributeOldValue: !0,
                        attributeFilter: ["style"]
                    })
                },
                install: function() {
                    this.installEndEvents(),
                    this.installStartEvents(),
                    this.installObserver()
                }
            },
            window.Hammer.time.install()
        }
    }()
}
, function(t, e, i) {
    /**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/
    !function() {
        "use strict";
        function t(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var e = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , i = function() {
            var i = ".stickySidebar"
              , n = {
                topSpacing: 0,
                bottomSpacing: 0,
                containerSelector: !1,
                innerWrapperSelector: ".inner-wrapper-sticky",
                stickyClass: "is-affixed",
                resizeSensor: !0,
                minWidth: !1
            };
            return function() {
                function o(e) {
                    var i = this
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (t(this, o),
                    this.options = o.extend(n, r),
                    this.sidebar = "string" == typeof e ? document.querySelector(e) : e,
                    void 0 === this.sidebar)
                        throw new Error("There is no specific sidebar element.");
                    this.sidebarInner = !1,
                    this.container = this.sidebar.parentElement,
                    this.affixedType = "STATIC",
                    this.direction = "down",
                    this.support = {
                        transform: !1,
                        transform3d: !1
                    },
                    this._initialized = !1,
                    this._reStyle = !1,
                    this._breakpoint = !1,
                    this._resizeListeners = [],
                    this.dimensions = {
                        translateY: 0,
                        topSpacing: 0,
                        lastTopSpacing: 0,
                        bottomSpacing: 0,
                        lastBottomSpacing: 0,
                        sidebarHeight: 0,
                        sidebarWidth: 0,
                        containerTop: 0,
                        containerHeight: 0,
                        viewportHeight: 0,
                        viewportTop: 0,
                        lastViewportTop: 0
                    },
                    ["handleEvent"].forEach((function(t) {
                        i[t] = i[t].bind(i)
                    }
                    )),
                    this.initialize()
                }
                return e(o, [{
                    key: "initialize",
                    value: function() {
                        var t = this;
                        if (this._setSupportFeatures(),
                        this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector),
                        null === this.sidebarInner && (this.sidebarInner = !1)),
                        !this.sidebarInner) {
                            var e = document.createElement("div");
                            for (e.setAttribute("class", "inner-wrapper-sticky"),
                            this.sidebar.appendChild(e); this.sidebar.firstChild != e; )
                                e.appendChild(this.sidebar.firstChild);
                            this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
                        }
                        if (this.options.containerSelector) {
                            var i = document.querySelectorAll(this.options.containerSelector);
                            if ((i = Array.prototype.slice.call(i)).forEach((function(e, i) {
                                e.contains(t.sidebar) && (t.container = e)
                            }
                            )),
                            !i.length)
                                throw new Error("The container does not contains on the sidebar.")
                        }
                        "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0),
                        "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0),
                        this._widthBreakpoint(),
                        this.calcDimensions(),
                        this.stickyPosition(),
                        this.bindEvents(),
                        this._initialized = !0
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        window.addEventListener("resize", this, {
                            passive: !0,
                            capture: !1
                        }),
                        window.addEventListener("scroll", this, {
                            passive: !0,
                            capture: !1
                        }),
                        this.sidebar.addEventListener("update" + i, this),
                        this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner,this.handleEvent),
                        new ResizeSensor(this.container,this.handleEvent))
                    }
                }, {
                    key: "handleEvent",
                    value: function(t) {
                        this.updateSticky(t)
                    }
                }, {
                    key: "calcDimensions",
                    value: function() {
                        if (!this._breakpoint) {
                            var t = this.dimensions;
                            t.containerTop = o.offsetRelative(this.container).top,
                            t.containerHeight = this.container.clientHeight,
                            t.containerBottom = t.containerTop + t.containerHeight,
                            t.sidebarHeight = this.sidebarInner.offsetHeight,
                            t.sidebarWidth = this.sidebar.offsetWidth,
                            t.viewportHeight = window.innerHeight,
                            this._calcDimensionsWithScroll()
                        }
                    }
                }, {
                    key: "_calcDimensionsWithScroll",
                    value: function() {
                        var t = this.dimensions;
                        t.sidebarLeft = o.offsetRelative(this.sidebar).left,
                        t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop,
                        t.viewportBottom = t.viewportTop + t.viewportHeight,
                        t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
                        t.topSpacing = this.options.topSpacing,
                        t.bottomSpacing = this.options.bottomSpacing,
                        "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0),
                        "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0),
                        "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing,
                        this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing,
                        this._reStyle = !0),
                        t.lastTopSpacing = t.topSpacing,
                        t.lastBottomSpacing = t.bottomSpacing
                    }
                }, {
                    key: "isSidebarFitsViewport",
                    value: function() {
                        return this.dimensions.sidebarHeight < this.dimensions.viewportHeight
                    }
                }, {
                    key: "observeScrollDir",
                    value: function() {
                        var t = this.dimensions;
                        if (t.lastViewportTop !== t.viewportTop) {
                            var e = "down" === this.direction ? Math.min : Math.max;
                            t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
                        }
                    }
                }, {
                    key: "getAffixType",
                    value: function() {
                        var t = this.dimensions
                          , e = !1;
                        this._calcDimensionsWithScroll();
                        var i = t.sidebarHeight + t.containerTop
                          , n = t.viewportTop + t.topSpacing
                          , o = t.viewportBottom - t.bottomSpacing;
                        return "up" === this.direction ? n <= t.containerTop ? (t.translateY = 0,
                        e = "STATIC") : n <= t.translateY + t.containerTop ? (t.translateY = n - t.containerTop,
                        e = "VIEWPORT-TOP") : !this.isSidebarFitsViewport() && t.containerTop <= n && (e = "VIEWPORT-UNBOTTOM") : this.isSidebarFitsViewport() ? t.sidebarHeight + n >= t.containerBottom ? (t.translateY = t.containerBottom - i,
                        e = "CONTAINER-BOTTOM") : n >= t.containerTop && (t.translateY = n - t.containerTop,
                        e = "VIEWPORT-TOP") : t.containerBottom <= o ? (t.translateY = t.containerBottom - i,
                        e = "CONTAINER-BOTTOM") : i + t.translateY <= o ? (t.translateY = o - i,
                        e = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= n && (e = "VIEWPORT-UNBOTTOM"),
                        t.translateY = Math.max(0, t.translateY),
                        t.translateY = Math.min(t.containerHeight, t.translateY),
                        t.lastViewportTop = t.viewportTop,
                        e
                    }
                }, {
                    key: "_getStyle",
                    value: function(t) {
                        if (void 0 !== t) {
                            var e = {
                                inner: {},
                                outer: {}
                            }
                              , i = this.dimensions;
                            switch (t) {
                            case "VIEWPORT-TOP":
                                e.inner = {
                                    position: "fixed",
                                    top: i.topSpacing,
                                    left: i.sidebarLeft - i.viewportLeft,
                                    width: i.sidebarWidth
                                };
                                break;
                            case "VIEWPORT-BOTTOM":
                                e.inner = {
                                    position: "fixed",
                                    top: "auto",
                                    left: i.sidebarLeft,
                                    bottom: i.bottomSpacing,
                                    width: i.sidebarWidth
                                };
                                break;
                            case "CONTAINER-BOTTOM":
                            case "VIEWPORT-UNBOTTOM":
                                var n = this._getTranslate(0, i.translateY + "px");
                                e.inner = n ? {
                                    transform: n
                                } : {
                                    position: "absolute",
                                    top: i.translateY,
                                    width: i.sidebarWidth
                                }
                            }
                            switch (t) {
                            case "VIEWPORT-TOP":
                            case "VIEWPORT-BOTTOM":
                            case "VIEWPORT-UNBOTTOM":
                            case "CONTAINER-BOTTOM":
                                e.outer = {
                                    height: i.sidebarHeight,
                                    position: "relative"
                                }
                            }
                            return e.outer = o.extend({
                                height: "",
                                position: ""
                            }, e.outer),
                            e.inner = o.extend({
                                position: "relative",
                                top: "",
                                left: "",
                                bottom: "",
                                width: "",
                                transform: this._getTranslate()
                            }, e.inner),
                            e
                        }
                    }
                }, {
                    key: "stickyPosition",
                    value: function(t) {
                        if (!this._breakpoint) {
                            t = this._reStyle || t || !1;
                            var e = this.getAffixType()
                              , n = this._getStyle(e);
                            if ((this.affixedType != e || t) && e) {
                                var r = "affix." + e.toLowerCase().replace("viewport-", "") + i;
                                for (var s in o.eventTrigger(this.sidebar, r),
                                "STATIC" === e ? o.removeClass(this.sidebar, this.options.stickyClass) : o.addClass(this.sidebar, this.options.stickyClass),
                                n.outer)
                                    this.sidebar.style[s] = n.outer[s];
                                for (var a in n.inner) {
                                    var l = "number" == typeof n.inner[a] ? "px" : "";
                                    this.sidebarInner.style[a] = n.inner[a] + l
                                }
                                var c = "affixed." + e.toLowerCase().replace("viewport-", "") + i;
                                o.eventTrigger(this.sidebar, c)
                            } else
                                this._initialized && (this.sidebarInner.style.left = n.inner.left);
                            this.affixedType = e
                        }
                    }
                }, {
                    key: "_widthBreakpoint",
                    value: function() {
                        window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0,
                        this.affixedType = "STATIC",
                        this.sidebar.removeAttribute("style"),
                        o.removeClass(this.sidebar, this.options.stickyClass),
                        this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
                    }
                }, {
                    key: "updateSticky",
                    value: function() {
                        var t = this
                          , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this._running || (this._running = !0,
                        function(e) {
                            requestAnimationFrame((function() {
                                switch (e) {
                                case "scroll":
                                    t._calcDimensionsWithScroll(),
                                    t.observeScrollDir(),
                                    t.stickyPosition();
                                    break;
                                case "resize":
                                default:
                                    t._widthBreakpoint(),
                                    t.calcDimensions(),
                                    t.stickyPosition(!0)
                                }
                                t._running = !1
                            }
                            ))
                        }(e.type))
                    }
                }, {
                    key: "_setSupportFeatures",
                    value: function() {
                        var t = this.support;
                        t.transform = o.supportTransform(),
                        t.transform3d = o.supportTransform(!0)
                    }
                }, {
                    key: "_getTranslate",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                          , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        window.removeEventListener("resize", this, {
                            caption: !1
                        }),
                        window.removeEventListener("scroll", this, {
                            caption: !1
                        }),
                        this.sidebar.classList.remove(this.options.stickyClass),
                        this.sidebar.style.minHeight = "",
                        this.sidebar.removeEventListener("update" + i, this);
                        var t = {
                            inner: {},
                            outer: {}
                        };
                        for (var e in t.inner = {
                            position: "",
                            top: "",
                            left: "",
                            bottom: "",
                            width: "",
                            transform: ""
                        },
                        t.outer = {
                            height: "",
                            position: ""
                        },
                        t.outer)
                            this.sidebar.style[e] = t.outer[e];
                        for (var n in t.inner)
                            this.sidebarInner.style[n] = t.inner[n];
                        this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent),
                        ResizeSensor.detach(this.container, this.handleEvent))
                    }
                }], [{
                    key: "supportTransform",
                    value: function(t) {
                        var e = !1
                          , i = t ? "perspective" : "transform"
                          , n = i.charAt(0).toUpperCase() + i.slice(1)
                          , o = document.createElement("support").style;
                        return (i + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach((function(t, i) {
                            if (void 0 !== o[t])
                                return e = t,
                                !1
                        }
                        )),
                        e
                    }
                }, {
                    key: "eventTrigger",
                    value: function(t, e, i) {
                        try {
                            var n = new CustomEvent(e,{
                                detail: i
                            })
                        } catch (t) {
                            (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
                        }
                        t.dispatchEvent(n)
                    }
                }, {
                    key: "extend",
                    value: function(t, e) {
                        var i = {};
                        for (var n in t)
                            void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
                        return i
                    }
                }, {
                    key: "offsetRelative",
                    value: function(t) {
                        var e = {
                            left: 0,
                            top: 0
                        };
                        do {
                            var i = t.offsetTop
                              , n = t.offsetLeft;
                            isNaN(i) || (e.top += i),
                            isNaN(n) || (e.left += n),
                            t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
                        } while (t);
                        return e
                    }
                }, {
                    key: "addClass",
                    value: function(t, e) {
                        o.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e)
                    }
                }, {
                    key: "removeClass",
                    value: function(t, e) {
                        o.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " "))
                    }
                }, {
                    key: "hasClass",
                    value: function(t, e) {
                        return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)","gi").test(t.className)
                    }
                }]),
                o
            }()
        }();
        window.StickySidebar = i,
        function() {
            if ("undefined" != typeof window) {
                var t = window.$ || window.jQuery || window.Zepto;
                if (t) {
                    t.fn.stickySidebar = function(e) {
                        return this.each((function() {
                            var n = t(this)
                              , o = t(this).data("stickySidebar");
                            if (o || (o = new i(this,"object" == typeof e && e),
                            n.data("stickySidebar", o)),
                            "string" == typeof e) {
                                if (void 0 === o[e] && -1 === ["destroy", "updateSticky"].indexOf(e))
                                    throw new Error('No method named "' + e + '"');
                                o[e]()
                            }
                        }
                        ))
                    }
                    ,
                    t.fn.stickySidebar.Constructor = i;
                    var e = t.fn.stickySidebar;
                    t.fn.stickySidebar.noConflict = function() {
                        return t.fn.stickySidebar = e,
                        this
                    }
                }
            }
        }()
    }()
}
, function(t, e, i) {
    var n, o, r;
    /*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
    !function(s) {
        "use strict";
        o = [i(1)],
        void 0 === (r = "function" == typeof (n = function(t) {
            var e = t.scrollTo = function(e, i, n) {
                return t(window).scrollTo(e, i, n)
            }
            ;
            function i(e) {
                return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
            }
            function n(e) {
                return t.isFunction(e) || t.isPlainObject(e) ? e : {
                    top: e,
                    left: e
                }
            }
            return e.defaults = {
                axis: "xy",
                duration: 0,
                limit: !0
            },
            t.fn.scrollTo = function(o, r, s) {
                "object" == typeof r && (s = r,
                r = 0),
                "function" == typeof s && (s = {
                    onAfter: s
                }),
                "max" === o && (o = 9e9),
                s = t.extend({}, e.defaults, s),
                r = r || s.duration;
                var a = s.queue && s.axis.length > 1;
                return a && (r /= 2),
                s.offset = n(s.offset),
                s.over = n(s.over),
                this.each((function() {
                    if (null !== o) {
                        var l, c = i(this), h = c ? this.contentWindow || window : this, u = t(h), d = o, p = {};
                        switch (typeof d) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)) {
                                d = n(d);
                                break
                            }
                            d = c ? t(d) : t(d, h);
                        case "object":
                            if (0 === d.length)
                                return;
                            (d.is || d.style) && (l = (d = t(d)).offset())
                        }
                        var f = t.isFunction(s.offset) && s.offset(h, d) || s.offset;
                        t.each(s.axis.split(""), (function(t, i) {
                            var n = "x" === i ? "Left" : "Top"
                              , o = n.toLowerCase()
                              , r = "scroll" + n
                              , g = u[r]()
                              , v = e.max(h, i);
                            if (l)
                                p[r] = l[o] + (c ? 0 : g - u.offset()[o]),
                                s.margin && (p[r] -= parseInt(d.css("margin" + n), 10) || 0,
                                p[r] -= parseInt(d.css("border" + n + "Width"), 10) || 0),
                                p[r] += f[o] || 0,
                                s.over[o] && (p[r] += d["x" === i ? "width" : "height"]() * s.over[o]);
                            else {
                                var y = d[o];
                                p[r] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y
                            }
                            s.limit && /^\d+$/.test(p[r]) && (p[r] = p[r] <= 0 ? 0 : Math.min(p[r], v)),
                            !t && s.axis.length > 1 && (g === p[r] ? p = {} : a && (m(s.onAfterFirst),
                            p = {}))
                        }
                        )),
                        m(s.onAfter)
                    }
                    function m(e) {
                        var i = t.extend({}, s, {
                            queue: !0,
                            duration: r,
                            complete: e && function() {
                                e.call(h, d, s)
                            }
                        });
                        u.animate(p, i)
                    }
                }
                ))
            }
            ,
            e.max = function(e, n) {
                var o = "x" === n ? "Width" : "Height"
                  , r = "scroll" + o;
                if (!i(e))
                    return e[r] - t(e)[o.toLowerCase()]();
                var s = "client" + o
                  , a = e.ownerDocument || e.document
                  , l = a.documentElement
                  , c = a.body;
                return Math.max(l[r], c[r]) - Math.min(l[s], c[s])
            }
            ,
            t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
                get: function(e) {
                    return t(e.elem)[e.prop]()
                },
                set: function(e) {
                    var i = this.get(e);
                    if (e.options.interrupt && e._last && e._last !== i)
                        return t(e.elem).stop();
                    var n = Math.round(e.now);
                    i !== n && (t(e.elem)[e.prop](n),
                    e._last = this.get(e))
                }
            },
            e
        }
        ) ? n.apply(e, o) : n) || (t.exports = r)
    }()
}
, function(t, e, i) {
    var n, o, r;
    /*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
    o = [i(1)],
    void 0 === (r = "function" == typeof (n = function(t) {
        var e, i, n, o, r, s, a = function() {}, l = !!window.jQuery, c = t(window), h = function(t, i) {
            e.ev.on("mfp" + t + ".mfp", i)
        }, u = function(e, i, n, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + e,
            n && (r.innerHTML = n),
            o ? i && i.appendChild(r) : (r = t(r),
            i && r.appendTo(i)),
            r
        }, d = function(i, n) {
            e.ev.triggerHandler("mfp" + i, n),
            e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1),
            e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
        }, p = function(i) {
            return i === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)),
            s = i),
            e.currTemplate.closeBtn
        }, f = function() {
            t.magnificPopup.instance || ((e = new a).init(),
            t.magnificPopup.instance = e)
        };
        a.prototype = {
            constructor: a,
            init: function() {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener,
                e.isAndroid = /android/gi.test(i),
                e.isIOS = /iphone|ipad|ipod/gi.test(i),
                e.supportsTransition = function() {
                    var t = document.createElement("p").style
                      , e = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== t.transition)
                        return !0;
                    for (; e.length; )
                        if (e.pop() + "Transition"in t)
                            return !0;
                    return !1
                }(),
                e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
                n = t(document),
                e.popupsCache = {}
            },
            open: function(i) {
                var o;
                if (!1 === i.isObj) {
                    e.items = i.items.toArray(),
                    e.index = 0;
                    var s, a = i.items;
                    for (o = 0; o < a.length; o++)
                        if ((s = a[o]).parsed && (s = s.el[0]),
                        s === i.el[0]) {
                            e.index = o;
                            break
                        }
                } else
                    e.items = t.isArray(i.items) ? i.items : [i.items],
                    e.index = i.index || 0;
                if (!e.isOpen) {
                    e.types = [],
                    r = "",
                    i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n,
                    i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
                    e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {},
                    e.st = t.extend(!0, {}, t.magnificPopup.defaults, i),
                    e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos,
                    e.st.modal && (e.st.closeOnContentClick = !1,
                    e.st.closeOnBgClick = !1,
                    e.st.showCloseBtn = !1,
                    e.st.enableEscapeKey = !1),
                    e.bgOverlay || (e.bgOverlay = u("bg").on("click.mfp", (function() {
                        e.close()
                    }
                    )),
                    e.wrap = u("wrap").attr("tabindex", -1).on("click.mfp", (function(t) {
                        e._checkIfClose(t.target) && e.close()
                    }
                    )),
                    e.container = u("container", e.wrap)),
                    e.contentContainer = u("content"),
                    e.st.preloader && (e.preloader = u("preloader", e.container, e.st.tLoading));
                    var l = t.magnificPopup.modules;
                    for (o = 0; o < l.length; o++) {
                        var f = l[o];
                        f = f.charAt(0).toUpperCase() + f.slice(1),
                        e["init" + f].call(e)
                    }
                    d("BeforeOpen"),
                    e.st.showCloseBtn && (e.st.closeBtnInside ? (h("MarkupParse", (function(t, e, i, n) {
                        i.close_replaceWith = p(n.type)
                    }
                    )),
                    r += " mfp-close-btn-in") : e.wrap.append(p())),
                    e.st.alignTop && (r += " mfp-align-top"),
                    e.fixedContentPos ? e.wrap.css({
                        overflow: e.st.overflowY,
                        overflowX: "hidden",
                        overflowY: e.st.overflowY
                    }) : e.wrap.css({
                        top: c.scrollTop(),
                        position: "absolute"
                    }),
                    (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                        height: n.height(),
                        position: "absolute"
                    }),
                    e.st.enableEscapeKey && n.on("keyup.mfp", (function(t) {
                        27 === t.keyCode && e.close()
                    }
                    )),
                    c.on("resize.mfp", (function() {
                        e.updateSize()
                    }
                    )),
                    e.st.closeOnContentClick || (r += " mfp-auto-cursor"),
                    r && e.wrap.addClass(r);
                    var m = e.wH = c.height()
                      , g = {};
                    if (e.fixedContentPos && e._hasScrollBar(m)) {
                        var v = e._getScrollbarSize();
                        v && (g.marginRight = v)
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : g.overflow = "hidden");
                    var y = e.st.mainClass;
                    return e.isIE7 && (y += " mfp-ie7"),
                    y && e._addClassToMFP(y),
                    e.updateItemHTML(),
                    d("BuildControls"),
                    t("html").css(g),
                    e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)),
                    e._lastFocusedEl = document.activeElement,
                    setTimeout((function() {
                        e.content ? (e._addClassToMFP("mfp-ready"),
                        e._setFocus()) : e.bgOverlay.addClass("mfp-ready"),
                        n.on("focusin.mfp", e._onFocusIn)
                    }
                    ), 16),
                    e.isOpen = !0,
                    e.updateSize(m),
                    d("Open"),
                    i
                }
                e.updateItemHTML()
            },
            close: function() {
                e.isOpen && (d("BeforeClose"),
                e.isOpen = !1,
                e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP("mfp-removing"),
                setTimeout((function() {
                    e._close()
                }
                ), e.st.removalDelay)) : e._close())
            },
            _close: function() {
                d("Close");
                var i = "mfp-removing mfp-ready ";
                if (e.bgOverlay.detach(),
                e.wrap.detach(),
                e.container.empty(),
                e.st.mainClass && (i += e.st.mainClass + " "),
                e._removeClassFromMFP(i),
                e.fixedContentPos) {
                    var o = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "",
                    t("html").css(o)
                }
                n.off("keyup.mfp focusin.mfp"),
                e.ev.off(".mfp"),
                e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                e.bgOverlay.attr("class", "mfp-bg"),
                e.container.attr("class", "mfp-container"),
                !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(),
                e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(),
                e.currItem = null,
                e.content = null,
                e.currTemplate = null,
                e.prevHeight = 0,
                d("AfterClose")
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth
                      , n = window.innerHeight * i;
                    e.wrap.css("height", n),
                    e.wH = n
                } else
                    e.wH = t || c.height();
                e.fixedContentPos || e.wrap.css("height", e.wH),
                d("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(),
                e.content && e.content.detach(),
                i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (d("BeforeChange", [e.currItem ? e.currItem.type : "", n]),
                e.currItem = i,
                !e.currTemplate[n]) {
                    var r = !!e.st[n] && e.st[n].markup;
                    d("FirstMarkupParse", r),
                    e.currTemplate[n] = !r || t(r)
                }
                o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
                var s = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(s, n),
                i.preloaded = !0,
                d("Change", i),
                o = i.type,
                e.container.prepend(e.contentContainer),
                d("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t,
                t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(p()) : e.content = t : e.content = "",
                d("BeforeAppend"),
                e.container.addClass("mfp-" + i + "-holder"),
                e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var n, o = e.items[i];
                if (o.tagName ? o = {
                    el: t(o)
                } : (n = o.type,
                o = {
                    data: o,
                    src: o.src
                }),
                o.el) {
                    for (var r = e.types, s = 0; s < r.length; s++)
                        if (o.el.hasClass("mfp-" + r[s])) {
                            n = r[s];
                            break
                        }
                    o.src = o.el.attr("data-mfp-src"),
                    o.src || (o.src = o.el.attr("href"))
                }
                return o.type = n || e.st.type || "inline",
                o.index = i,
                o.parsed = !0,
                e.items[i] = o,
                d("ElementParse", o),
                e.items[i]
            },
            addGroup: function(t, i) {
                var n = function(n) {
                    n.mfpEl = this,
                    e._openClick(n, t, i)
                };
                i || (i = {});
                var o = "click.magnificPopup";
                i.mainEl = t,
                i.items ? (i.isObj = !0,
                t.off(o).on(o, n)) : (i.isObj = !1,
                i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t,
                t.off(o).on(o, n)))
            },
            _openClick: function(i, n, o) {
                if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                    if (r)
                        if (t.isFunction(r)) {
                            if (!r.call(e))
                                return !0
                        } else if (c.width() < r)
                            return !0;
                    i.type && (i.preventDefault(),
                    e.isOpen && i.stopPropagation()),
                    o.el = t(i.mfpEl),
                    o.delegate && (o.items = n.find(o.delegate)),
                    e.open(o)
                }
            },
            updateStatus: function(t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i),
                    n || "loading" !== t || (n = e.st.tLoading);
                    var o = {
                        status: t,
                        text: n
                    };
                    d("UpdateStatus", o),
                    t = o.status,
                    n = o.text,
                    e.preloader.html(n),
                    e.preloader.find("a").on("click", (function(t) {
                        t.stopImmediatePropagation()
                    }
                    )),
                    e.container.addClass("mfp-s-" + t),
                    i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass("mfp-prevent-close")) {
                    var n = e.st.closeOnContentClick
                      , o = e.st.closeOnBgClick;
                    if (n && o)
                        return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0])
                        return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n)
                            return !0
                    } else if (o && t.contains(document, i))
                        return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t),
                e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t),
                e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || c.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) {
                if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target))
                    return e._setFocus(),
                    !1
            },
            _parseMarkup: function(e, i, n) {
                var o;
                n.data && (i = t.extend(n.data, i)),
                d("MarkupParse", [e, i, n]),
                t.each(i, (function(i, n) {
                    if (void 0 === n || !1 === n)
                        return !0;
                    if ((o = i.split("_")).length > 1) {
                        var r = e.find(".mfp-" + o[0]);
                        if (r.length > 0) {
                            var s = o[1];
                            "replaceWith" === s ? r[0] !== n[0] && r.replaceWith(n) : "img" === s ? r.is("img") ? r.attr("src", n) : r.replaceWith(t("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(o[1], n)
                        }
                    } else
                        e.find(".mfp-" + i).html(n)
                }
                ))
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                    document.body.appendChild(t),
                    e.scrollbarSize = t.offsetWidth - t.clientWidth,
                    document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        },
        t.magnificPopup = {
            instance: null,
            proto: a.prototype,
            modules: [],
            open: function(e, i) {
                return f(),
                (e = e ? t.extend(!0, {}, e) : {}).isObj = !0,
                e.index = i || 0,
                this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options),
                t.extend(this.proto, i.proto),
                this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        },
        t.fn.magnificPopup = function(i) {
            f();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var o, r = l ? n.data("magnificPopup") : n[0].magnificPopup, s = parseInt(arguments[1], 10) || 0;
                    r.items ? o = r.items[s] : (o = n,
                    r.delegate && (o = o.find(r.delegate)),
                    o = o.eq(s)),
                    e._openClick({
                        mfpEl: o
                    }, n, r)
                } else
                    e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else
                i = t.extend(!0, {}, i),
                l ? n.data("magnificPopup", i) : n[0].magnificPopup = i,
                e.addGroup(n, i);
            return n
        }
        ;
        var m, g, v, y = function() {
            v && (g.after(v.addClass(m)).detach(),
            v = null)
        };
        t.magnificPopup.registerModule("inline", {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push("inline"),
                    h("Close.inline", (function() {
                        y()
                    }
                    ))
                },
                getInline: function(i, n) {
                    if (y(),
                    i.src) {
                        var o = e.st.inline
                          , r = t(i.src);
                        if (r.length) {
                            var s = r[0].parentNode;
                            s && s.tagName && (g || (m = o.hiddenClass,
                            g = u(m),
                            m = "mfp-" + m),
                            v = r.after(g).detach().removeClass(m)),
                            e.updateStatus("ready")
                        } else
                            e.updateStatus("error", o.tNotFound),
                            r = t("<div>");
                        return i.inlineElement = r,
                        r
                    }
                    return e.updateStatus("ready"),
                    e._parseMarkup(n, {}, i),
                    n
                }
            }
        });
        var b, w = function() {
            b && t(document.body).removeClass(b)
        }, x = function() {
            w(),
            e.req && e.req.abort()
        };
        t.magnificPopup.registerModule("ajax", {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push("ajax"),
                    b = e.st.ajax.cursor,
                    h("Close.ajax", x),
                    h("BeforeChange.ajax", x)
                },
                getAjax: function(i) {
                    b && t(document.body).addClass(b),
                    e.updateStatus("loading");
                    var n = t.extend({
                        url: i.src,
                        success: function(n, o, r) {
                            var s = {
                                data: n,
                                xhr: r
                            };
                            d("ParseAjax", s),
                            e.appendContent(t(s.data), "ajax"),
                            i.finished = !0,
                            w(),
                            e._setFocus(),
                            setTimeout((function() {
                                e.wrap.addClass("mfp-ready")
                            }
                            ), 16),
                            e.updateStatus("ready"),
                            d("AjaxContentAdded")
                        },
                        error: function() {
                            w(),
                            i.finished = i.loadError = !0,
                            e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(n),
                    ""
                }
            }
        });
        var C, k, S = function(i) {
            if (i.data && void 0 !== i.data.title)
                return i.data.title;
            var n = e.st.image.titleSrc;
            if (n) {
                if (t.isFunction(n))
                    return n.call(e, i);
                if (i.el)
                    return i.el.attr(n) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = e.st.image
                      , n = ".image";
                    e.types.push("image"),
                    h("Open" + n, (function() {
                        "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                    }
                    )),
                    h("Close" + n, (function() {
                        i.cursor && t(document.body).removeClass(i.cursor),
                        c.off("resize.mfp")
                    }
                    )),
                    h("Resize" + n, e.resizeImage),
                    e.isLowIE && h("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)),
                        t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0,
                    C && clearInterval(C),
                    t.isCheckingImgSize = !1,
                    d("ImageHasSize", t),
                    t.imgHidden && (e.content && e.content.removeClass("mfp-loading"),
                    t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0
                      , n = t.img[0]
                      , o = function(r) {
                        C && clearInterval(C),
                        C = setInterval((function() {
                            n.naturalWidth > 0 ? e._onImageHasSize(t) : (i > 200 && clearInterval(C),
                            3 == ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500))
                        }
                        ), r)
                    };
                    o(1)
                },
                getImage: function(i, n) {
                    var o = 0
                      , r = function() {
                        i && (i.img[0].complete ? (i.img.off(".mfploader"),
                        i === e.currItem && (e._onImageHasSize(i),
                        e.updateStatus("ready")),
                        i.hasSize = !0,
                        i.loaded = !0,
                        d("ImageLoadComplete")) : ++o < 200 ? setTimeout(r, 100) : s())
                    }
                      , s = function() {
                        i && (i.img.off(".mfploader"),
                        i === e.currItem && (e._onImageHasSize(i),
                        e.updateStatus("error", a.tError.replace("%url%", i.src))),
                        i.hasSize = !0,
                        i.loaded = !0,
                        i.loadError = !0)
                    }
                      , a = e.st.image
                      , l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img",
                        i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")),
                        i.img = t(c).on("load.mfploader", r).on("error.mfploader", s),
                        c.src = i.src,
                        l.is("img") && (i.img = i.img.clone()),
                        (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(n, {
                        title: S(i),
                        img_replaceWith: i.img
                    }, i),
                    e.resizeImage(),
                    i.hasSize ? (C && clearInterval(C),
                    i.loadError ? (n.addClass("mfp-loading"),
                    e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"),
                    e.updateStatus("ready")),
                    n) : (e.updateStatus("loading"),
                    i.loading = !0,
                    i.hasSize || (i.imgHidden = !0,
                    n.addClass("mfp-loading"),
                    e.findImageSize(i)),
                    n)
                }
            }
        }),
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom, n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var o, r, s = i.duration, a = function(t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                              , n = "all " + i.duration / 1e3 + "s " + i.easing
                              , o = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }
                              , r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n,
                            e.css(o),
                            e
                        }, l = function() {
                            e.content.css("visibility", "visible")
                        };
                        h("BuildControls" + n, (function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o),
                                e.content.css("visibility", "hidden"),
                                !(t = e._getItemToZoom()))
                                    return void l();
                                (r = a(t)).css(e._getOffset()),
                                e.wrap.append(r),
                                o = setTimeout((function() {
                                    r.css(e._getOffset(!0)),
                                    o = setTimeout((function() {
                                        l(),
                                        setTimeout((function() {
                                            r.remove(),
                                            t = r = null,
                                            d("ZoomAnimationEnded")
                                        }
                                        ), 16)
                                    }
                                    ), s)
                                }
                                ), 16)
                            }
                        }
                        )),
                        h("BeforeClose" + n, (function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o),
                                e.st.removalDelay = s,
                                !t) {
                                    if (!(t = e._getItemToZoom()))
                                        return;
                                    r = a(t)
                                }
                                r.css(e._getOffset(!0)),
                                e.wrap.append(r),
                                e.content.css("visibility", "hidden"),
                                setTimeout((function() {
                                    r.css(e._getOffset())
                                }
                                ), 16)
                            }
                        }
                        )),
                        h("Close" + n, (function() {
                            e._allowZoom() && (l(),
                            r && r.remove(),
                            t = null)
                        }
                        ))
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return !!e.currItem.hasSize && e.currItem.img
                },
                _getOffset: function(i) {
                    var n, o = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(), r = parseInt(n.css("padding-top"), 10), s = parseInt(n.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - r;
                    var a = {
                        width: n.width(),
                        height: (l ? n.innerHeight() : n[0].offsetHeight) - s - r
                    };
                    return void 0 === k && (k = void 0 !== document.createElement("p").style.MozTransform),
                    k ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left,
                    a.top = o.top),
                    a
                }
            }
        });
        var E = function(t) {
            if (e.currTemplate.iframe) {
                var i = e.currTemplate.iframe.find("iframe");
                i.length && (t || (i[0].src = "//about:blank"),
                e.isIE8 && i.css("display", t ? "block" : "none"))
            }
        };
        t.magnificPopup.registerModule("iframe", {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push("iframe"),
                    h("BeforeChange", (function(t, e, i) {
                        e !== i && ("iframe" === e ? E() : "iframe" === i && E(!0))
                    }
                    )),
                    h("Close.iframe", (function() {
                        E()
                    }
                    ))
                },
                getIframe: function(i, n) {
                    var o = i.src
                      , r = e.st.iframe;
                    t.each(r.patterns, (function() {
                        if (o.indexOf(this.index) > -1)
                            return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)),
                            o = this.src.replace("%id%", o),
                            !1
                    }
                    ));
                    var s = {};
                    return r.srcAction && (s[r.srcAction] = o),
                    e._parseMarkup(n, s, i),
                    e.updateStatus("ready"),
                    n
                }
            }
        });
        var T = function(t) {
            var i = e.items.length;
            return t > i - 1 ? t - i : t < 0 ? i + t : t
        }
          , _ = function(t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
        };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery
                      , o = ".mfp-gallery";
                    if (e.direction = !0,
                    !i || !i.enabled)
                        return !1;
                    r += " mfp-gallery",
                    h("Open" + o, (function() {
                        i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", (function() {
                            if (e.items.length > 1)
                                return e.next(),
                                !1
                        }
                        )),
                        n.on("keydown" + o, (function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        }
                        ))
                    }
                    )),
                    h("UpdateStatus" + o, (function(t, i) {
                        i.text && (i.text = _(i.text, e.currItem.index, e.items.length))
                    }
                    )),
                    h("MarkupParse" + o, (function(t, n, o, r) {
                        var s = e.items.length;
                        o.counter = s > 1 ? _(i.tCounter, r.index, s) : ""
                    }
                    )),
                    h("BuildControls" + o, (function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup
                              , o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close")
                              , r = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                            o.click((function() {
                                e.prev()
                            }
                            )),
                            r.click((function() {
                                e.next()
                            }
                            )),
                            e.container.append(o.add(r))
                        }
                    }
                    )),
                    h("Change" + o, (function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout),
                        e._preloadTimeout = setTimeout((function() {
                            e.preloadNearbyImages(),
                            e._preloadTimeout = null
                        }
                        ), 16)
                    }
                    )),
                    h("Close" + o, (function() {
                        n.off(o),
                        e.wrap.off("click" + o),
                        e.arrowRight = e.arrowLeft = null
                    }
                    ))
                },
                next: function() {
                    e.direction = !0,
                    e.index = T(e.index + 1),
                    e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1,
                    e.index = T(e.index - 1),
                    e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index,
                    e.index = t,
                    e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload, n = Math.min(i[0], e.items.length), o = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? o : n); t++)
                        e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : o); t++)
                        e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = T(i),
                    !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)),
                        d("LazyLoad", n),
                        "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", (function() {
                            n.hasSize = !0
                        }
                        )).on("error.mfploader", (function() {
                            n.hasSize = !0,
                            n.loadError = !0,
                            d("LazyLoadError", n)
                        }
                        )).attr("src", n.src)),
                        n.preloaded = !0
                    }
                }
            }
        }),
        t.magnificPopup.registerModule("retina", {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, (function(t) {
                        return "@2x" + t
                    }
                    ))
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina
                          , i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (h("ImageHasSize.retina", (function(t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }
                        )),
                        h("ElementParse.retina", (function(e, n) {
                            n.src = t.replaceSrc(n, i)
                        }
                        )))
                    }
                }
            }
        }),
        f()
    }
    ) ? n.apply(e, o) : n) || (t.exports = r)
}
, function(t, e) {
    /*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
    !function() {
        "use strict";
        var t = 0
          , e = {};
        function i(n) {
            if (!n)
                throw new Error("No options passed to Waypoint constructor");
            if (!n.element)
                throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler)
                throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t,
            this.options = i.Adapter.extend({}, i.defaults, n),
            this.element = this.options.element,
            this.adapter = new i.Adapter(this.element),
            this.callback = n.handler,
            this.axis = this.options.horizontal ? "horizontal" : "vertical",
            this.enabled = this.options.enabled,
            this.triggerPoint = null,
            this.group = i.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }),
            this.context = i.Context.findOrCreateByElement(this.options.context),
            i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            e[this.key] = this,
            t += 1
        }
        i.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }
        ,
        i.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }
        ,
        i.prototype.destroy = function() {
            this.context.remove(this),
            this.group.remove(this),
            delete e[this.key]
        }
        ,
        i.prototype.disable = function() {
            return this.enabled = !1,
            this
        }
        ,
        i.prototype.enable = function() {
            return this.context.refresh(),
            this.enabled = !0,
            this
        }
        ,
        i.prototype.next = function() {
            return this.group.next(this)
        }
        ,
        i.prototype.previous = function() {
            return this.group.previous(this)
        }
        ,
        i.invokeAll = function(t) {
            var i = [];
            for (var n in e)
                i.push(e[n]);
            for (var o = 0, r = i.length; o < r; o++)
                i[o][t]()
        }
        ,
        i.destroyAll = function() {
            i.invokeAll("destroy")
        }
        ,
        i.disableAll = function() {
            i.invokeAll("disable")
        }
        ,
        i.enableAll = function() {
            for (var t in i.Context.refreshAll(),
            e)
                e[t].enabled = !0;
            return this
        }
        ,
        i.refreshAll = function() {
            i.Context.refreshAll()
        }
        ,
        i.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }
        ,
        i.viewportWidth = function() {
            return document.documentElement.clientWidth
        }
        ,
        i.adapters = [],
        i.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        },
        i.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        },
        window.Waypoint = i
    }(),
    function() {
        "use strict";
        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }
        var e = 0
          , i = {}
          , n = window.Waypoint
          , o = window.onload;
        function r(t) {
            this.element = t,
            this.Adapter = n.Adapter,
            this.adapter = new this.Adapter(t),
            this.key = "waypoint-context-" + e,
            this.didScroll = !1,
            this.didResize = !1,
            this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            },
            this.waypoints = {
                vertical: {},
                horizontal: {}
            },
            t.waypointContextKey = this.key,
            i[t.waypointContextKey] = this,
            e += 1,
            n.windowContext || (n.windowContext = !0,
            n.windowContext = new r(window)),
            this.createThrottledScrollHandler(),
            this.createThrottledResizeHandler()
        }
        r.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t,
            this.refresh()
        }
        ,
        r.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
              , e = this.Adapter.isEmptyObject(this.waypoints.vertical)
              , n = this.element == this.element.window;
            t && e && !n && (this.adapter.off(".waypoints"),
            delete i[this.key])
        }
        ,
        r.prototype.createThrottledResizeHandler = function() {
            var t = this;
            function e() {
                t.handleResize(),
                t.didResize = !1
            }
            this.adapter.on("resize.waypoints", (function() {
                t.didResize || (t.didResize = !0,
                n.requestAnimationFrame(e))
            }
            ))
        }
        ,
        r.prototype.createThrottledScrollHandler = function() {
            var t = this;
            function e() {
                t.handleScroll(),
                t.didScroll = !1
            }
            this.adapter.on("scroll.waypoints", (function() {
                t.didScroll && !n.isTouch || (t.didScroll = !0,
                n.requestAnimationFrame(e))
            }
            ))
        }
        ,
        r.prototype.handleResize = function() {
            n.Context.refreshAll()
        }
        ,
        r.prototype.handleScroll = function() {
            var t = {}
              , e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
            for (var i in e) {
                var n = e[i]
                  , o = n.newScroll > n.oldScroll ? n.forward : n.backward;
                for (var r in this.waypoints[i]) {
                    var s = this.waypoints[i][r];
                    if (null !== s.triggerPoint) {
                        var a = n.oldScroll < s.triggerPoint
                          , l = n.newScroll >= s.triggerPoint;
                        (a && l || !a && !l) && (s.queueTrigger(o),
                        t[s.group.id] = s.group)
                    }
                }
            }
            for (var c in t)
                t[c].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }
        ,
        r.prototype.innerHeight = function() {
            return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
        }
        ,
        r.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key],
            this.checkEmpty()
        }
        ,
        r.prototype.innerWidth = function() {
            return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
        }
        ,
        r.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e])
                    t.push(this.waypoints[e][i]);
            for (var n = 0, o = t.length; n < o; n++)
                t[n].destroy()
        }
        ,
        r.prototype.refresh = function() {
            var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {};
            for (var r in this.handleScroll(),
            t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
                var s = t[r];
                for (var a in this.waypoints[r]) {
                    var l, c, h, u, d = this.waypoints[r][a], p = d.options.offset, f = d.triggerPoint, m = 0, g = null == f;
                    d.element !== d.element.window && (m = d.adapter.offset()[s.offsetProp]),
                    "function" == typeof p ? p = p.apply(d) : "string" == typeof p && (p = parseFloat(p),
                    d.options.offset.indexOf("%") > -1 && (p = Math.ceil(s.contextDimension * p / 100))),
                    l = s.contextScroll - s.contextOffset,
                    d.triggerPoint = Math.floor(m + l - p),
                    c = f < s.oldScroll,
                    h = d.triggerPoint >= s.oldScroll,
                    u = !c && !h,
                    !g && (c && h) ? (d.queueTrigger(s.backward),
                    o[d.group.id] = d.group) : (!g && u || g && s.oldScroll >= d.triggerPoint) && (d.queueTrigger(s.forward),
                    o[d.group.id] = d.group)
                }
            }
            return n.requestAnimationFrame((function() {
                for (var t in o)
                    o[t].flushTriggers()
            }
            )),
            this
        }
        ,
        r.findOrCreateByElement = function(t) {
            return r.findByElement(t) || new r(t)
        }
        ,
        r.refreshAll = function() {
            for (var t in i)
                i[t].refresh()
        }
        ,
        r.findByElement = function(t) {
            return i[t.waypointContextKey]
        }
        ,
        window.onload = function() {
            o && o(),
            r.refreshAll()
        }
        ,
        n.requestAnimationFrame = function(e) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
        }
        ,
        n.Context = r
    }(),
    function() {
        "use strict";
        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }
        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }
        var i = {
            vertical: {},
            horizontal: {}
        }
          , n = window.Waypoint;
        function o(t) {
            this.name = t.name,
            this.axis = t.axis,
            this.id = this.name + "-" + this.axis,
            this.waypoints = [],
            this.clearTriggerQueues(),
            i[this.axis][this.name] = this
        }
        o.prototype.add = function(t) {
            this.waypoints.push(t)
        }
        ,
        o.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }
        ,
        o.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var n = this.triggerQueues[i]
                  , o = "up" === i || "left" === i;
                n.sort(o ? e : t);
                for (var r = 0, s = n.length; r < s; r += 1) {
                    var a = n[r];
                    (a.options.continuous || r === n.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }
        ,
        o.prototype.next = function(e) {
            this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints);
            return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
        }
        ,
        o.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }
        ,
        o.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }
        ,
        o.prototype.remove = function(t) {
            var e = n.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }
        ,
        o.prototype.first = function() {
            return this.waypoints[0]
        }
        ,
        o.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }
        ,
        o.findOrCreate = function(t) {
            return i[t.axis][t.name] || new o(t)
        }
        ,
        n.Group = o
    }(),
    function() {
        "use strict";
        var t = window.jQuery
          , e = window.Waypoint;
        function i(e) {
            this.$element = t(e)
        }
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function(t, e) {
            i.prototype[e] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[e].apply(this.$element, t)
            }
        }
        )),
        t.each(["extend", "inArray", "isEmptyObject"], (function(e, n) {
            i[n] = t[n]
        }
        )),
        e.adapters.push({
            name: "jquery",
            Adapter: i
        }),
        e.Adapter = i
    }(),
    function() {
        "use strict";
        var t = window.Waypoint;
        function e(e) {
            return function() {
                var i = []
                  , n = arguments[0];
                return e.isFunction(arguments[0]) && ((n = e.extend({}, arguments[1])).handler = arguments[0]),
                this.each((function() {
                    var o = e.extend({}, n, {
                        element: this
                    });
                    "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]),
                    i.push(new t(o))
                }
                )),
                i
            }
        }
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
        window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }()
}
, function(t, e) {
    !function(t, e, i) {
        function n(e, i) {
            this.bodyOverflowX,
            this.callbacks = {
                hide: [],
                show: []
            },
            this.checkInterval = null,
            this.Content,
            this.$el = t(e),
            this.$elProxy,
            this.elProxyPosition,
            this.enabled = !0,
            this.options = t.extend({}, a, i),
            this.mouseIsOverProxy = !1,
            this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()),
            this.Status = "hidden",
            this.timerHide = null,
            this.timerShow = null,
            this.$tooltip,
            this.options.iconTheme = this.options.iconTheme.replace(".", ""),
            this.options.theme = this.options.theme.replace(".", ""),
            this._init()
        }
        function o(e, i) {
            var n = !0;
            return t.each(e, (function(t, o) {
                if (void 0 === i[t] || e[t] !== i[t])
                    return n = !1,
                    !1
            }
            )),
            n
        }
        function r() {
            return !c && l
        }
        function s() {
            var t = (i.body || i.documentElement).style
              , e = "transition";
            if ("string" == typeof t[e])
                return !0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"],
            e = e.charAt(0).toUpperCase() + e.substr(1);
            for (var n = 0; n < v.length; n++)
                if ("string" == typeof t[v[n] + e])
                    return !0;
            return !1
        }
        var a = {
            animation: "fade",
            arrow: !0,
            arrowColor: "",
            autoClose: !0,
            content: null,
            contentAsHTML: !1,
            contentCloning: !0,
            debug: !0,
            delay: 200,
            minWidth: 0,
            maxWidth: null,
            functionInit: function(t, e) {},
            functionBefore: function(t, e) {
                e()
            },
            functionReady: function(t, e) {},
            functionAfter: function(t) {},
            hideOnClick: !1,
            icon: "(?)",
            iconCloning: !0,
            iconDesktop: !1,
            iconTouch: !1,
            iconTheme: "tooltipster-icon",
            interactive: !1,
            interactiveTolerance: 350,
            multiple: !1,
            offsetX: 0,
            offsetY: 0,
            onlyOne: !1,
            position: "top",
            positionTracker: !1,
            positionTrackerCallback: function(t) {
                "hover" == this.option("trigger") && this.option("autoClose") && this.hide()
            },
            restoration: "current",
            speed: 350,
            timer: 0,
            theme: "tooltipster-default",
            touchDevices: !0,
            trigger: "hover",
            updateAnimation: !0
        };
        n.prototype = {
            _init: function() {
                var e = this;
                if (i.querySelector) {
                    var n = null;
                    void 0 === e.$el.data("tooltipster-initialTitle") && (void 0 === (n = e.$el.attr("title")) && (n = null),
                    e.$el.data("tooltipster-initialTitle", n)),
                    null !== e.options.content ? e._content_set(e.options.content) : e._content_set(n);
                    var o = e.options.functionInit.call(e.$el, e.$el, e.Content);
                    void 0 !== o && e._content_set(o),
                    e.$el.removeAttr("title").addClass("tooltipstered"),
                    !l && e.options.iconDesktop || l && e.options.iconTouch ? ("string" == typeof e.options.icon ? (e.$elProxy = t('<span class="' + e.options.iconTheme + '"></span>'),
                    e.$elProxy.text(e.options.icon)) : e.options.iconCloning ? e.$elProxy = e.options.icon.clone(!0) : e.$elProxy = e.options.icon,
                    e.$elProxy.insertAfter(e.$el)) : e.$elProxy = e.$el,
                    "hover" == e.options.trigger ? (e.$elProxy.on("mouseenter." + e.namespace, (function() {
                        r() && !e.options.touchDevices || (e.mouseIsOverProxy = !0,
                        e._show())
                    }
                    )).on("mouseleave." + e.namespace, (function() {
                        r() && !e.options.touchDevices || (e.mouseIsOverProxy = !1)
                    }
                    )),
                    l && e.options.touchDevices && e.$elProxy.on("touchstart." + e.namespace, (function() {
                        e._showNow()
                    }
                    ))) : "click" == e.options.trigger && e.$elProxy.on("click." + e.namespace, (function() {
                        r() && !e.options.touchDevices || e._show()
                    }
                    ))
                }
            },
            _show: function() {
                var t = this;
                "shown" != t.Status && "appearing" != t.Status && (t.options.delay ? t.timerShow = setTimeout((function() {
                    ("click" == t.options.trigger || "hover" == t.options.trigger && t.mouseIsOverProxy) && t._showNow()
                }
                ), t.options.delay) : t._showNow())
            },
            _showNow: function(i) {
                var n = this;
                n.options.functionBefore.call(n.$el, n.$el, (function() {
                    if (n.enabled && null !== n.Content) {
                        i && n.callbacks.show.push(i),
                        n.callbacks.hide = [],
                        clearTimeout(n.timerShow),
                        n.timerShow = null,
                        clearTimeout(n.timerHide),
                        n.timerHide = null,
                        n.options.onlyOne && t(".tooltipstered").not(n.$el).each((function(e, i) {
                            var n = t(i)
                              , o = n.data("tooltipster-ns");
                            t.each(o, (function(t, e) {
                                var i = n.data(e)
                                  , o = i.status()
                                  , r = i.option("autoClose");
                                "hidden" !== o && "disappearing" !== o && r && i.hide()
                            }
                            ))
                        }
                        ));
                        var o = function() {
                            n.Status = "shown",
                            t.each(n.callbacks.show, (function(t, e) {
                                e.call(n.$el)
                            }
                            )),
                            n.callbacks.show = []
                        };
                        if ("hidden" !== n.Status) {
                            var r = 0;
                            "disappearing" === n.Status ? (n.Status = "appearing",
                            s() ? (n.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + n.options.animation + "-show"),
                            n.options.speed > 0 && n.$tooltip.delay(n.options.speed),
                            n.$tooltip.queue(o)) : n.$tooltip.stop().fadeIn(o)) : "shown" === n.Status && o()
                        } else {
                            n.Status = "appearing";
                            r = n.options.speed;
                            n.bodyOverflowX = t("body").css("overflow-x"),
                            t("body").css("overflow-x", "hidden");
                            var a = "tooltipster-" + n.options.animation
                              , c = "-webkit-transition-duration: " + n.options.speed + "ms; -webkit-animation-duration: " + n.options.speed + "ms; -moz-transition-duration: " + n.options.speed + "ms; -moz-animation-duration: " + n.options.speed + "ms; -o-transition-duration: " + n.options.speed + "ms; -o-animation-duration: " + n.options.speed + "ms; -ms-transition-duration: " + n.options.speed + "ms; -ms-animation-duration: " + n.options.speed + "ms; transition-duration: " + n.options.speed + "ms; animation-duration: " + n.options.speed + "ms;"
                              , h = n.options.minWidth ? "min-width:" + Math.round(n.options.minWidth) + "px;" : ""
                              , u = n.options.maxWidth ? "max-width:" + Math.round(n.options.maxWidth) + "px;" : ""
                              , d = n.options.interactive ? "pointer-events: auto;" : "";
                            if (n.$tooltip = t('<div class="tooltipster-base ' + n.options.theme + '" style="' + h + " " + u + " " + d + " " + c + '"><div class="tooltipster-content"></div></div>'),
                            s() && n.$tooltip.addClass(a),
                            n._content_insert(),
                            n.$tooltip.appendTo("body"),
                            n.reposition(),
                            n.options.functionReady.call(n.$el, n.$el, n.$tooltip),
                            s() ? (n.$tooltip.addClass(a + "-show"),
                            n.options.speed > 0 && n.$tooltip.delay(n.options.speed),
                            n.$tooltip.queue(o)) : n.$tooltip.css("display", "none").fadeIn(n.options.speed, o),
                            n._interval_set(),
                            t(e).on("scroll." + n.namespace + " resize." + n.namespace, (function() {
                                n.reposition()
                            }
                            )),
                            n.options.autoClose)
                                if (t("body").off("." + n.namespace),
                                "hover" == n.options.trigger) {
                                    if (l && setTimeout((function() {
                                        t("body").on("touchstart." + n.namespace, (function() {
                                            n.hide()
                                        }
                                        ))
                                    }
                                    ), 0),
                                    n.options.interactive) {
                                        l && n.$tooltip.on("touchstart." + n.namespace, (function(t) {
                                            t.stopPropagation()
                                        }
                                        ));
                                        var p = null;
                                        n.$elProxy.add(n.$tooltip).on("mouseleave." + n.namespace + "-autoClose", (function() {
                                            clearTimeout(p),
                                            p = setTimeout((function() {
                                                n.hide()
                                            }
                                            ), n.options.interactiveTolerance)
                                        }
                                        )).on("mouseenter." + n.namespace + "-autoClose", (function() {
                                            clearTimeout(p)
                                        }
                                        ))
                                    } else
                                        n.$elProxy.on("mouseleave." + n.namespace + "-autoClose", (function() {
                                            n.hide()
                                        }
                                        ));
                                    n.options.hideOnClick && n.$elProxy.on("click." + n.namespace + "-autoClose", (function() {
                                        n.hide()
                                    }
                                    ))
                                } else
                                    "click" == n.options.trigger && (setTimeout((function() {
                                        t("body").on("click." + n.namespace + " touchstart." + n.namespace, (function() {
                                            n.hide()
                                        }
                                        ))
                                    }
                                    ), 0),
                                    n.options.interactive && n.$tooltip.on("click." + n.namespace + " touchstart." + n.namespace, (function(t) {
                                        t.stopPropagation()
                                    }
                                    )))
                        }
                        n.options.timer > 0 && (n.timerHide = setTimeout((function() {
                            n.timerHide = null,
                            n.hide()
                        }
                        ), n.options.timer + r))
                    }
                }
                ))
            },
            _interval_set: function() {
                var e = this;
                e.checkInterval = setInterval((function() {
                    if (0 === t("body").find(e.$el).length || 0 === t("body").find(e.$elProxy).length || "hidden" == e.Status || 0 === t("body").find(e.$tooltip).length)
                        "shown" != e.Status && "appearing" != e.Status || e.hide(),
                        e._interval_cancel();
                    else if (e.options.positionTracker) {
                        var i = e._repositionInfo(e.$elProxy)
                          , n = !1;
                        o(i.dimension, e.elProxyPosition.dimension) && ("fixed" === e.$elProxy.css("position") ? o(i.position, e.elProxyPosition.position) && (n = !0) : o(i.offset, e.elProxyPosition.offset) && (n = !0)),
                        n || (e.reposition(),
                        e.options.positionTrackerCallback.call(e, e.$el))
                    }
                }
                ), 200)
            },
            _interval_cancel: function() {
                clearInterval(this.checkInterval),
                this.checkInterval = null
            },
            _content_set: function(t) {
                "object" == typeof t && null !== t && this.options.contentCloning && (t = t.clone(!0)),
                this.Content = t
            },
            _content_insert: function() {
                var t = this
                  , e = this.$tooltip.find(".tooltipster-content");
                "string" != typeof t.Content || t.options.contentAsHTML ? e.empty().append(t.Content) : e.text(t.Content)
            },
            _update: function(t) {
                var e = this;
                e._content_set(t),
                null !== e.Content ? "hidden" !== e.Status && (e._content_insert(),
                e.reposition(),
                e.options.updateAnimation && (s() ? (e.$tooltip.css({
                    width: "",
                    "-webkit-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-moz-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-o-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-ms-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    transition: "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
                }).addClass("tooltipster-content-changing"),
                setTimeout((function() {
                    "hidden" != e.Status && (e.$tooltip.removeClass("tooltipster-content-changing"),
                    setTimeout((function() {
                        "hidden" !== e.Status && e.$tooltip.css({
                            "-webkit-transition": e.options.speed + "ms",
                            "-moz-transition": e.options.speed + "ms",
                            "-o-transition": e.options.speed + "ms",
                            "-ms-transition": e.options.speed + "ms",
                            transition: e.options.speed + "ms"
                        })
                    }
                    ), e.options.speed))
                }
                ), e.options.speed)) : e.$tooltip.fadeTo(e.options.speed, .5, (function() {
                    "hidden" != e.Status && e.$tooltip.fadeTo(e.options.speed, 1)
                }
                )))) : e.hide()
            },
            _repositionInfo: function(t) {
                return {
                    dimension: {
                        height: t.outerHeight(!1),
                        width: t.outerWidth(!1)
                    },
                    offset: t.offset(),
                    position: {
                        left: parseInt(t.css("left")),
                        top: parseInt(t.css("top"))
                    }
                }
            },
            hide: function(i) {
                var n = this;
                i && n.callbacks.hide.push(i),
                n.callbacks.show = [],
                clearTimeout(n.timerShow),
                n.timerShow = null,
                clearTimeout(n.timerHide),
                n.timerHide = null;
                var o = function() {
                    t.each(n.callbacks.hide, (function(t, e) {
                        e.call(n.$el)
                    }
                    )),
                    n.callbacks.hide = []
                };
                if ("shown" == n.Status || "appearing" == n.Status) {
                    n.Status = "disappearing";
                    var r = function() {
                        n.Status = "hidden",
                        "object" == typeof n.Content && null !== n.Content && n.Content.detach(),
                        n.$tooltip.remove(),
                        n.$tooltip = null,
                        t(e).off("." + n.namespace),
                        t("body").off("." + n.namespace).css("overflow-x", n.bodyOverflowX),
                        t("body").off("." + n.namespace),
                        n.$elProxy.off("." + n.namespace + "-autoClose"),
                        n.options.functionAfter.call(n.$el, n.$el),
                        o()
                    };
                    s() ? (n.$tooltip.clearQueue().removeClass("tooltipster-" + n.options.animation + "-show").addClass("tooltipster-dying"),
                    n.options.speed > 0 && n.$tooltip.delay(n.options.speed),
                    n.$tooltip.queue(r)) : n.$tooltip.stop().fadeOut(n.options.speed, r)
                } else
                    "hidden" == n.Status && o();
                return n
            },
            show: function(t) {
                return this._showNow(t),
                this
            },
            update: function(t) {
                return this.content(t)
            },
            content: function(t) {
                return void 0 === t ? this.Content : (this._update(t),
                this)
            },
            reposition: function() {
                var i = this;
                if (0 !== t("body").find(i.$tooltip).length) {
                    i.$tooltip.css("width", ""),
                    i.elProxyPosition = i._repositionInfo(i.$elProxy);
                    var n = null
                      , o = t(e).width()
                      , r = i.elProxyPosition
                      , s = i.$tooltip.outerWidth(!1)
                      , a = (i.$tooltip.innerWidth(),
                    i.$tooltip.outerHeight(!1));
                    if (i.$elProxy.is("area")) {
                        var l = i.$elProxy.attr("shape")
                          , c = i.$elProxy.parent().attr("name")
                          , h = t('img[usemap="#' + c + '"]')
                          , u = h.offset().left
                          , d = h.offset().top
                          , p = void 0 !== i.$elProxy.attr("coords") ? i.$elProxy.attr("coords").split(",") : void 0;
                        if ("circle" == l) {
                            var f = parseInt(p[0])
                              , m = parseInt(p[1])
                              , g = parseInt(p[2]);
                            r.dimension.height = 2 * g,
                            r.dimension.width = 2 * g,
                            r.offset.top = d + m - g,
                            r.offset.left = u + f - g
                        } else if ("rect" == l) {
                            f = parseInt(p[0]),
                            m = parseInt(p[1]);
                            var v = parseInt(p[2])
                              , y = parseInt(p[3]);
                            r.dimension.height = y - m,
                            r.dimension.width = v - f,
                            r.offset.top = d + m,
                            r.offset.left = u + f
                        } else if ("poly" == l) {
                            for (var b = 0, w = 0, x = 0, C = 0, k = "even", S = 0; S < p.length; S++) {
                                var E = parseInt(p[S]);
                                "even" == k ? (E > x && (x = E,
                                0 === S && (b = x)),
                                E < b && (b = E),
                                k = "odd") : (E > C && (C = E,
                                1 == S && (w = C)),
                                E < w && (w = E),
                                k = "even")
                            }
                            r.dimension.height = C - w,
                            r.dimension.width = x - b,
                            r.offset.top = d + w,
                            r.offset.left = u + b
                        } else
                            r.dimension.height = h.outerHeight(!1),
                            r.dimension.width = h.outerWidth(!1),
                            r.offset.top = d,
                            r.offset.left = u
                    }
                    var T = 0
                      , _ = 0
                      , j = 0
                      , I = parseInt(i.options.offsetY)
                      , P = parseInt(i.options.offsetX)
                      , A = i.options.position;
                    function O() {
                        var i = t(e).scrollLeft();
                        T - i < 0 && (n = T - i,
                        T = i),
                        T + s - i > o && (n = T - (o + i - s),
                        T = o + i - s)
                    }
                    function D(i, n) {
                        r.offset.top - t(e).scrollTop() - a - I - 12 < 0 && n.indexOf("top") > -1 && (A = i),
                        r.offset.top + r.dimension.height + a + 12 + I > t(e).scrollTop() + t(e).height() && n.indexOf("bottom") > -1 && (A = i,
                        j = r.offset.top - a - I - 12)
                    }
                    if ("top" == A) {
                        var L = r.offset.left + s - (r.offset.left + r.dimension.width);
                        T = r.offset.left + P - L / 2,
                        j = r.offset.top - a - I - 12,
                        O(),
                        D("bottom", "top")
                    }
                    if ("top-left" == A && (T = r.offset.left + P,
                    j = r.offset.top - a - I - 12,
                    O(),
                    D("bottom-left", "top-left")),
                    "top-right" == A && (T = r.offset.left + r.dimension.width + P - s,
                    j = r.offset.top - a - I - 12,
                    O(),
                    D("bottom-right", "top-right")),
                    "bottom" == A) {
                        L = r.offset.left + s - (r.offset.left + r.dimension.width);
                        T = r.offset.left - L / 2 + P,
                        j = r.offset.top + r.dimension.height + I + 12,
                        O(),
                        D("top", "bottom")
                    }
                    if ("bottom-left" == A && (T = r.offset.left + P,
                    j = r.offset.top + r.dimension.height + I + 12,
                    O(),
                    D("top-left", "bottom-left")),
                    "bottom-right" == A && (T = r.offset.left + r.dimension.width + P - s,
                    j = r.offset.top + r.dimension.height + I + 12,
                    O(),
                    D("top-right", "bottom-right")),
                    "left" == A) {
                        T = r.offset.left - P - s - 12,
                        _ = r.offset.left + P + r.dimension.width + 12;
                        var Q = r.offset.top + a - (r.offset.top + r.dimension.height);
                        if (j = r.offset.top - Q / 2 - I,
                        T < 0 && _ + s > o) {
                            var M = 2 * parseFloat(i.$tooltip.css("border-width"))
                              , z = s + T - M;
                            i.$tooltip.css("width", z + "px"),
                            a = i.$tooltip.outerHeight(!1),
                            T = r.offset.left - P - z - 12 - M,
                            Q = r.offset.top + a - (r.offset.top + r.dimension.height),
                            j = r.offset.top - Q / 2 - I
                        } else
                            T < 0 && (T = r.offset.left + P + r.dimension.width + 12,
                            n = "left")
                    }
                    if ("right" == A) {
                        T = r.offset.left + P + r.dimension.width + 12,
                        _ = r.offset.left - P - s - 12;
                        Q = r.offset.top + a - (r.offset.top + r.dimension.height);
                        if (j = r.offset.top - Q / 2 - I,
                        T + s > o && _ < 0) {
                            M = 2 * parseFloat(i.$tooltip.css("border-width")),
                            z = o - T - M;
                            i.$tooltip.css("width", z + "px"),
                            a = i.$tooltip.outerHeight(!1),
                            Q = r.offset.top + a - (r.offset.top + r.dimension.height),
                            j = r.offset.top - Q / 2 - I
                        } else
                            T + s > o && (T = r.offset.left - P - s - 12,
                            n = "right")
                    }
                    if (i.options.arrow) {
                        var F = "tooltipster-arrow-" + A;
                        if (i.options.arrowColor.length < 1)
                            var B = i.$tooltip.css("background-color");
                        else
                            B = i.options.arrowColor;
                        if (n ? "left" == n ? (F = "tooltipster-arrow-right",
                        n = "") : "right" == n ? (F = "tooltipster-arrow-left",
                        n = "") : n = "left:" + Math.round(n) + "px;" : n = "",
                        "top" == A || "top-left" == A || "top-right" == A)
                            var W = parseFloat(i.$tooltip.css("border-bottom-width"))
                              , H = i.$tooltip.css("border-bottom-color");
                        else if ("bottom" == A || "bottom-left" == A || "bottom-right" == A)
                            W = parseFloat(i.$tooltip.css("border-top-width")),
                            H = i.$tooltip.css("border-top-color");
                        else if ("left" == A)
                            W = parseFloat(i.$tooltip.css("border-right-width")),
                            H = i.$tooltip.css("border-right-color");
                        else if ("right" == A)
                            W = parseFloat(i.$tooltip.css("border-left-width")),
                            H = i.$tooltip.css("border-left-color");
                        else
                            W = parseFloat(i.$tooltip.css("border-bottom-width")),
                            H = i.$tooltip.css("border-bottom-color");
                        W > 1 && W++;
                        var N = "";
                        if (0 !== W) {
                            var R = ""
                              , $ = "border-color: " + H + ";";
                            -1 !== F.indexOf("bottom") ? R = "margin-top: -" + Math.round(W) + "px;" : -1 !== F.indexOf("top") ? R = "margin-bottom: -" + Math.round(W) + "px;" : -1 !== F.indexOf("left") ? R = "margin-right: -" + Math.round(W) + "px;" : -1 !== F.indexOf("right") && (R = "margin-left: -" + Math.round(W) + "px;"),
                            N = '<span class="tooltipster-arrow-border" style="' + R + " " + $ + ';"></span>'
                        }
                        i.$tooltip.find(".tooltipster-arrow").remove();
                        var V = '<div class="' + F + ' tooltipster-arrow" style="' + n + '">' + N + '<span style="border-color:' + B + ';"></span></div>';
                        i.$tooltip.append(V)
                    }
                    i.$tooltip.css({
                        top: Math.round(j) + "px",
                        left: Math.round(T) + "px"
                    })
                }
                return i
            },
            enable: function() {
                return this.enabled = !0,
                this
            },
            disable: function() {
                return this.hide(),
                this.enabled = !1,
                this
            },
            destroy: function() {
                var e = this;
                e.hide(),
                e.$el[0] !== e.$elProxy[0] && e.$elProxy.remove(),
                e.$el.removeData(e.namespace).off("." + e.namespace);
                var i = e.$el.data("tooltipster-ns");
                if (1 === i.length) {
                    var n = null;
                    "previous" === e.options.restoration ? n = e.$el.data("tooltipster-initialTitle") : "current" === e.options.restoration && (n = "string" == typeof e.Content ? e.Content : t("<div></div>").append(e.Content).html()),
                    n && e.$el.attr("title", n),
                    e.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
                } else
                    i = t.grep(i, (function(t, i) {
                        return t !== e.namespace
                    }
                    )),
                    e.$el.data("tooltipster-ns", i);
                return e
            },
            elementIcon: function() {
                return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
            },
            elementTooltip: function() {
                return this.$tooltip ? this.$tooltip[0] : void 0
            },
            option: function(t, e) {
                return void 0 === e ? this.options[t] : (this.options[t] = e,
                this)
            },
            status: function() {
                return this.Status
            }
        },
        t.fn.tooltipster = function() {
            var e = arguments;
            if (0 === this.length) {
                if ("string" == typeof e[0]) {
                    var i = !0;
                    switch (e[0]) {
                    case "setDefaults":
                        t.extend(a, e[1]);
                        break;
                    default:
                        i = !1
                    }
                    return !!i || this
                }
                return this
            }
            if ("string" == typeof e[0]) {
                var o = "#*$~&";
                return this.each((function() {
                    var i = t(this).data("tooltipster-ns")
                      , n = i ? t(this).data(i[0]) : null;
                    if (!n)
                        throw new Error("You called Tooltipster's \"" + e[0] + '" method on an uninitialized element');
                    if ("function" != typeof n[e[0]])
                        throw new Error('Unknown method .tooltipster("' + e[0] + '")');
                    var r = n[e[0]](e[1], e[2]);
                    if (r !== n)
                        return o = r,
                        !1
                }
                )),
                "#*$~&" !== o ? o : this
            }
            var r = []
              , s = e[0] && void 0 !== e[0].multiple
              , l = s && e[0].multiple || !s && a.multiple
              , c = e[0] && void 0 !== e[0].debug
              , h = c && e[0].debug || !c && a.debug;
            return this.each((function() {
                var i = !1
                  , o = t(this).data("tooltipster-ns")
                  , s = null;
                o ? l ? i = !0 : h && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : i = !0,
                i && (s = new n(this,e[0]),
                o || (o = []),
                o.push(s.namespace),
                t(this).data("tooltipster-ns", o),
                t(this).data(s.namespace, s)),
                r.push(s)
            }
            )),
            l ? r : this
        }
        ;
        var l = !!("ontouchstart"in e)
          , c = !1;
        t("body").one("mousemove", (function() {
            c = !0
        }
        ))
    }(jQuery, window, document)
}
, function(t, e, i) {
    "use strict";
    (function(t) {
        var e = i(4)
          , n = i.n(e);
        t.Flatsome = {
            behaviors: {},
            plugin: function(t, e, i) {
                i = i || {},
                jQuery.fn[t] = function(o) {
                    if ("string" == typeof arguments[0]) {
                        var r = null
                          , s = arguments[0]
                          , a = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            if (!jQuery.data(this, "plugin_" + t) || "function" != typeof jQuery.data(this, "plugin_" + t)[s])
                                throw new Error("Method " + s + " does not exist on jQuery." + t);
                            r = jQuery.data(this, "plugin_" + t)[s].apply(this, a)
                        }
                        )),
                        "destroy" === s && this.each((function() {
                            jQuery(this).removeData("plugin_" + t)
                        }
                        )),
                        void 0 !== r ? r : this
                    }
                    if ("object" === n()(o) || !o)
                        return this.each((function() {
                            jQuery.data(this, "plugin_" + t) || (o = jQuery.extend({}, i, o),
                            jQuery.data(this, "plugin_" + t, new e(this,o)))
                        }
                        ))
                }
            },
            behavior: function(t, e) {
                this.behaviors[t] = e,
                e.arrive && jQuery(document).arrive(e.arrive.selector, e.arrive.handler || function() {
                    Flatsome.attach(t, this.parentNode)
                }
                )
            },
            attach: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                if ("string" == typeof t)
                    return this.behaviors.hasOwnProperty(t) && "function" == typeof this.behaviors[t].attach ? this.behaviors[t].attach(e || document) : null;
                for (var i in this.behaviors)
                    "function" == typeof this.behaviors[i].attach && this.behaviors[i].attach(e || document)
            },
            detach: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                if ("string" == typeof t)
                    return this.behaviors.hasOwnProperty(t) && "function" == typeof this.behaviors[t].detach ? this.behaviors[t].detach(e || document) : null;
                for (var i in this.behaviors)
                    "function" == typeof this.behaviors[i].detach && this.behaviors[i].detach(e || document)
            }
        }
    }
    ).call(this, i(0))
}
, function(t, e) {
    var i = jQuery("#wrapper")
      , n = jQuery("#header")
      , o = jQuery(".header-top", n)
      , r = jQuery("#wpadminbar")
      , s = r.length ? r.height() : 0
      , a = n.hasClass("has-sticky")
      , l = n.hasClass("sticky-hide-on-scroll")
      , c = -jQuery(".header-wrapper").height() - 100
      , h = o.hasClass("hide-for-sticky") ? -o.height() - 1 : -1;
    if (jQuery(".sticky-shrink .header-wrapper").length) {
        var u = o.hasClass("hide-for-sticky") ? o.height() : 0;
        c = -1 - u + s,
        h = -1 - u
    }
    if (a && (n.find(".header-wrapper").waypoint((function(t) {
        var e = jQuery(this.element)
          , i = n.height();
        "down" === t && (e.addClass("stuck"),
        n.height(i),
        jQuery(".has-transparent").removeClass("transparent"),
        jQuery(".toggle-nav-dark").removeClass("nav-dark"))
    }
    ), {
        offset: c
    }),
    i.waypoint((function(t) {
        "up" === t && (n.height(""),
        jQuery(".header-wrapper").removeClass("stuck"),
        jQuery(".has-transparent").addClass("transparent"),
        jQuery(".toggle-nav-dark").addClass("nav-dark"))
    }
    ), {
        offset: h + s
    }),
    l)) {
        var d, p = 0;
        jQuery(window).scroll((function() {
            clearTimeout(d);
            var t = jQuery(window).scrollTop()
              , e = jQuery(".header-wrapper");
            t >= e.outerHeight() && (t <= p ? (e.addClass("stuck"),
            n.removeClass("sticky-hide-on-scroll--active")) : (e.removeClass("stuck"),
            n.addClass("sticky-hide-on-scroll--active"))),
            d = setTimeout((function() {
                p = jQuery(window).scrollTop()
            }
            ), 100)
        }
        ))
    }
}
, function(t, e, i) {
    "use strict";
    (function(t) {
        var e = i(2)
          , n = i.n(e);
        i(38);
        n()(),
        t.objectFitImages = n.a
    }
    ).call(this, i(0))
}
, function(t, e) {
    !function(t, e) {
        "use strict";
        if ("IntersectionObserver"in t && "IntersectionObserverEntry"in t && "intersectionRatio"in t.IntersectionObserverEntry.prototype)
            "isIntersecting"in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return this.intersectionRatio > 0
                }
            });
        else {
            var i = [];
            o.prototype.THROTTLE_TIMEOUT = 100,
            o.prototype.POLL_INTERVAL = null,
            o.prototype.USE_MUTATION_OBSERVER = !0,
            o.prototype.observe = function(t) {
                if (!this._observationTargets.some((function(e) {
                    return e.element == t
                }
                ))) {
                    if (!t || 1 != t.nodeType)
                        throw new Error("target must be an Element");
                    this._registerInstance(),
                    this._observationTargets.push({
                        element: t,
                        entry: null
                    }),
                    this._monitorIntersections(),
                    this._checkForIntersections()
                }
            }
            ,
            o.prototype.unobserve = function(t) {
                this._observationTargets = this._observationTargets.filter((function(e) {
                    return e.element != t
                }
                )),
                this._observationTargets.length || (this._unmonitorIntersections(),
                this._unregisterInstance())
            }
            ,
            o.prototype.disconnect = function() {
                this._observationTargets = [],
                this._unmonitorIntersections(),
                this._unregisterInstance()
            }
            ,
            o.prototype.takeRecords = function() {
                var t = this._queuedEntries.slice();
                return this._queuedEntries = [],
                t
            }
            ,
            o.prototype._initThresholds = function(t) {
                var e = t || [0];
                return Array.isArray(e) || (e = [e]),
                e.sort().filter((function(t, e, i) {
                    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                        throw new Error("threshold must be a number between 0 and 1 inclusively");
                    return t !== i[e - 1]
                }
                ))
            }
            ,
            o.prototype._parseRootMargin = function(t) {
                var e = (t || "0px").split(/\s+/).map((function(t) {
                    var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                    if (!e)
                        throw new Error("rootMargin must be specified in pixels or percent");
                    return {
                        value: parseFloat(e[1]),
                        unit: e[2]
                    }
                }
                ));
                return e[1] = e[1] || e[0],
                e[2] = e[2] || e[0],
                e[3] = e[3] || e[1],
                e
            }
            ,
            o.prototype._monitorIntersections = function() {
                this._monitoringIntersections || (this._monitoringIntersections = !0,
                this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(t, "resize", this._checkForIntersections, !0),
                r(e, "scroll", this._checkForIntersections, !0),
                this.USE_MUTATION_OBSERVER && "MutationObserver"in t && (this._domObserver = new MutationObserver(this._checkForIntersections),
                this._domObserver.observe(e, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))))
            }
            ,
            o.prototype._unmonitorIntersections = function() {
                this._monitoringIntersections && (this._monitoringIntersections = !1,
                clearInterval(this._monitoringInterval),
                this._monitoringInterval = null,
                s(t, "resize", this._checkForIntersections, !0),
                s(e, "scroll", this._checkForIntersections, !0),
                this._domObserver && (this._domObserver.disconnect(),
                this._domObserver = null))
            }
            ,
            o.prototype._checkForIntersections = function() {
                var e = this._rootIsInDom()
                  , i = e ? this._getRootRect() : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                };
                this._observationTargets.forEach((function(o) {
                    var r = o.element
                      , s = a(r)
                      , l = this._rootContainsTarget(r)
                      , c = o.entry
                      , h = e && l && this._computeTargetAndRootIntersection(r, i)
                      , u = o.entry = new n({
                        time: t.performance && performance.now && performance.now(),
                        target: r,
                        boundingClientRect: s,
                        rootBounds: i,
                        intersectionRect: h
                    });
                    c ? e && l ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                }
                ), this),
                this._queuedEntries.length && this._callback(this.takeRecords(), this)
            }
            ,
            o.prototype._computeTargetAndRootIntersection = function(i, n) {
                if ("none" != t.getComputedStyle(i).display) {
                    for (var o, r, s, l, h, u, d, p, f = a(i), m = c(i), g = !1; !g; ) {
                        var v = null
                          , y = 1 == m.nodeType ? t.getComputedStyle(m) : {};
                        if ("none" == y.display)
                            return;
                        if (m == this.root || m == e ? (g = !0,
                        v = n) : m != e.body && m != e.documentElement && "visible" != y.overflow && (v = a(m)),
                        v && (o = v,
                        r = f,
                        s = void 0,
                        l = void 0,
                        h = void 0,
                        u = void 0,
                        d = void 0,
                        p = void 0,
                        s = Math.max(o.top, r.top),
                        l = Math.min(o.bottom, r.bottom),
                        h = Math.max(o.left, r.left),
                        u = Math.min(o.right, r.right),
                        p = l - s,
                        !(f = (d = u - h) >= 0 && p >= 0 && {
                            top: s,
                            bottom: l,
                            left: h,
                            right: u,
                            width: d,
                            height: p
                        })))
                            break;
                        m = c(m)
                    }
                    return f
                }
            }
            ,
            o.prototype._getRootRect = function() {
                var t;
                if (this.root)
                    t = a(this.root);
                else {
                    var i = e.documentElement
                      , n = e.body;
                    t = {
                        top: 0,
                        left: 0,
                        right: i.clientWidth || n.clientWidth,
                        width: i.clientWidth || n.clientWidth,
                        bottom: i.clientHeight || n.clientHeight,
                        height: i.clientHeight || n.clientHeight
                    }
                }
                return this._expandRectByRootMargin(t)
            }
            ,
            o.prototype._expandRectByRootMargin = function(t) {
                var e = this._rootMarginValues.map((function(e, i) {
                    return "px" == e.unit ? e.value : e.value * (i % 2 ? t.width : t.height) / 100
                }
                ))
                  , i = {
                    top: t.top - e[0],
                    right: t.right + e[1],
                    bottom: t.bottom + e[2],
                    left: t.left - e[3]
                };
                return i.width = i.right - i.left,
                i.height = i.bottom - i.top,
                i
            }
            ,
            o.prototype._hasCrossedThreshold = function(t, e) {
                var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
                  , n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                if (i !== n)
                    for (var o = 0; o < this.thresholds.length; o++) {
                        var r = this.thresholds[o];
                        if (r == i || r == n || r < i != r < n)
                            return !0
                    }
            }
            ,
            o.prototype._rootIsInDom = function() {
                return !this.root || l(e, this.root)
            }
            ,
            o.prototype._rootContainsTarget = function(t) {
                return l(this.root || e, t)
            }
            ,
            o.prototype._registerInstance = function() {
                i.indexOf(this) < 0 && i.push(this)
            }
            ,
            o.prototype._unregisterInstance = function() {
                var t = i.indexOf(this);
                -1 != t && i.splice(t, 1)
            }
            ,
            t.IntersectionObserver = o,
            t.IntersectionObserverEntry = n
        }
        function n(t) {
            this.time = t.time,
            this.target = t.target,
            this.rootBounds = t.rootBounds,
            this.boundingClientRect = t.boundingClientRect,
            this.intersectionRect = t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            },
            this.isIntersecting = !!t.intersectionRect;
            var e = this.boundingClientRect
              , i = e.width * e.height
              , n = this.intersectionRect
              , o = n.width * n.height;
            this.intersectionRatio = i ? Number((o / i).toFixed(4)) : this.isIntersecting ? 1 : 0
        }
        function o(t, e) {
            var i, n, o, r = e || {};
            if ("function" != typeof t)
                throw new Error("callback must be a function");
            if (r.root && 1 != r.root.nodeType)
                throw new Error("root must be an Element");
            this._checkForIntersections = (i = this._checkForIntersections.bind(this),
            n = this.THROTTLE_TIMEOUT,
            o = null,
            function() {
                o || (o = setTimeout((function() {
                    i(),
                    o = null
                }
                ), n))
            }
            ),
            this._callback = t,
            this._observationTargets = [],
            this._queuedEntries = [],
            this._rootMarginValues = this._parseRootMargin(r.rootMargin),
            this.thresholds = this._initThresholds(r.threshold),
            this.root = r.root || null,
            this.rootMargin = this._rootMarginValues.map((function(t) {
                return t.value + t.unit
            }
            )).join(" ")
        }
        function r(t, e, i, n) {
            "function" == typeof t.addEventListener ? t.addEventListener(e, i, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i)
        }
        function s(t, e, i, n) {
            "function" == typeof t.removeEventListener ? t.removeEventListener(e, i, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, i)
        }
        function a(t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (t) {}
            return e ? (e.width && e.height || (e = {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.right - e.left,
                height: e.bottom - e.top
            }),
            e) : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }
        function l(t, e) {
            for (var i = e; i; ) {
                if (i == t)
                    return !0;
                i = c(i)
            }
            return !1
        }
        function c(t) {
            var e = t.parentNode;
            return e && 11 == e.nodeType && e.host ? e.host : e
        }
    }(window, document)
}
, function(t, e, i) {
    "use strict";
    var n = [];
    function o() {
        for (var t = 0; t < n.length; t++)
            n[t].element.offsetParent ? r(n[t]) : n.splice(t, 1)
    }
    function r(t) {
        !function(t) {
            var e = t.element
              , i = t.type
              , n = h(e.dataset.parallax)
              , o = l(e)
              , r = (window.innerHeight - o.offsetHeight) * n;
            switch (i) {
            case "backgroundImage":
                e.style.backgroundSize = n ? "100% auto" : null;
                break;
            case "backgroundElement":
                e.style.height = n ? "".concat(o.offsetHeight + r, "px") : null
            }
        }(t),
        function(t) {
            var e = t.element
              , i = t.type
              , n = h(e.dataset.parallax || e.dataset.parallaxBackground)
              , o = window.innerHeight
              , r = l(e)
              , s = e.offsetHeight - r.offsetHeight
              , c = e.getBoundingClientRect()
              , u = r !== e ? r.getBoundingClientRect() : c
              , d = c.top + e.offsetHeight / 2
              , p = u.top + r.offsetHeight / 2
              , f = o / 2 - d
              , m = o / 2 - p
              , g = d + a() < o / 2 ? a() : f
              , v = (Math.abs(f),
            Math.abs(g) / (o / 2))
              , y = 0;
            if (u.top > o || u.top + r.offsetHeight < 0)
                return;
            switch (i) {
            case "backgroundImage":
                y = u.top * n,
                e.style.backgroundPosition = n ? "50% ".concat(y.toFixed(0), "px") : null,
                e.style.backgroundAttachment = n ? "fixed" : null;
                break;
            case "backgroundElement":
                y = m * n - s / 2,
                e.style.transform = n ? "translate3d(0, ".concat(y.toFixed(2), "px, 0)") : null,
                e.style.backfaceVisibility = n ? "hidden" : null;
                break;
            case "element":
                y = g * n,
                e.style.transform = n ? "translate3d(0, ".concat(y.toFixed(2), "px, 0)") : null,
                e.style.backfaceVisibility = n ? "hidden" : null,
                void 0 !== e.dataset.parallaxFade && (e.style.opacity = n ? (b = 1 - v,
                b * (2 - b)).toFixed(2) : null)
            }
            var b
        }(t)
    }
    function s(t) {
        return void 0 !== t.dataset.parallaxBackground ? "backgroundElement" : void 0 !== t.dataset.parallaxElemenet ? "element" : "" !== t.style.backgroundImage ? "backgroundImage" : "element"
    }
    function a() {
        return document.documentElement.scrollTop || document.body.scrollTop
    }
    function l(t) {
        return function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            for (; t && !c(t).call(t, e); )
                t = t.parentElement;
            return t
        }(t, t.dataset.parallaxContainer || "[data-parallax-container]") || t
    }
    function c(t) {
        return t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector
    }
    function h(t) {
        return t / 10 * -1 / (2 - Math.abs(t) / 10)
    }
    window.addEventListener("scroll", (function() {
        return window.requestAnimationFrame(o)
    }
    )),
    window.addEventListener("resize", (function() {
        return window.requestAnimationFrame(o)
    }
    )),
    window.addEventListener("DOMNodeInserted", (function() {
        return window.requestAnimationFrame(o)
    }
    )),
    window.jQuery && (window.jQuery.fn.flatsomeParallax = function(t) {
        "destroy" !== t && this.each((function(t, e) {
            return function(t) {
                t.classList.add("parallax-active"),
                !document.querySelector("body").classList.contains("parallax-mobile") && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || t.classList && t.dataset && (n.push({
                    element: t,
                    type: s(t)
                }),
                r(n[n.length - 1]))
            }(e)
        }
        ))
    }
    )
}
, function(t, e) {
    Flatsome.plugin("resizeselect", (function(t, e) {
        jQuery(t).change((function() {
            var t = jQuery(this)
              , e = t.find("option:selected").val()
              , i = t.find("option:selected").text()
              , n = jQuery('<span class="select-resize-ghost">').html(i);
            n.appendTo(t.parent());
            var o = n.width();
            n.remove(),
            t.width(o + 7),
            e && t.parent().parent().find("input.search-field").focus()
        }
        )).change()
    }
    ))
}
, function(t, e, i) {
    "use strict";
    var n = i(5)
      , o = i.n(n);
    jQuery(".section .loading-spin, .banner .loading-spin, .page-loader").fadeOut(),
    jQuery("#top-link").on("click", (function(t) {
        jQuery.scrollTo(0, 300),
        t.preventDefault()
    }
    )),
    jQuery(".scroll-for-more").on("click", (function() {
        jQuery.scrollTo(jQuery(this), {
            duration: 300
        })
    }
    )),
    jQuery(".search-dropdown button").on("click", (function(t) {
        jQuery(this).parent().find("input").trigger("focus"),
        t.preventDefault()
    }
    )),
    jQuery(".current-cat").addClass("active"),
    jQuery("html").removeClass("loading-site"),
    setTimeout((function() {
        jQuery(".page-loader").remove()
    }
    ), 1e3),
    jQuery(".resize-select").resizeselect(),
    flatsomeVars.user.can_edit_pages && jQuery(".block-edit-link").each((function() {
        var t = jQuery(this)
          , e = t.data("link")
          , i = t.data("backend")
          , n = t.data("title")
          , o = t.parents('[id^="menu-item-"]');
        if (o.length && o.hasClass("menu-item-has-block")) {
            var r = o.attr("id").match(/menu-item-(\d+)/);
            r && r[1] && (e += "&menu_id=".concat(r[1]))
        }
        jQuery(this).next().addClass("has-block").tooltipster({
            animationDuration: 100,
            distance: -15,
            delay: 0,
            repositionOnScroll: !0,
            interactive: !0,
            contentAsHTML: !0,
            content: n + ' <br/> <a class="button edit-block-button edit-block-button-builder" href="' + e + '">UX Builder</a> <a class="button edit-block-button edit-block-button edit-block-button-backend" href="' + i + '">WP Editor</a>'
        }),
        jQuery(this).remove()
    }
    )),
    document.addEventListener("uxb_app_ready", (function() {
        var t = new URLSearchParams(window.top.location.search)
          , e = parseInt(t.get("menu_id"));
        e && setTimeout((function() {
            var t = jQuery("#menu-item-".concat(e));
            t.hasClass("menu-item-has-block has-dropdown") && !t.hasClass("current-dropdown") && jQuery("#menu-item-".concat(e, " a:first")).trigger("click")
        }
        ), 1e3)
    }
    )),
    jQuery("#hotspot").on("click", (function(t) {
        t.preventDefault()
    }
    )),
    jQuery(".wpcf7-form .wpcf7-submit").on("click", (function() {
        jQuery(this).parent().parent().addClass("processing")
    }
    )),
    jQuery(document).ajaxComplete((function(t, e, i) {
        jQuery(".processing").removeClass("processing")
    }
    )),
    jQuery((function() {
        o()()
    }
    ))
}
, function(t, e) {
    Flatsome.behavior("animate", {
        attach: function(t) {
            jQuery("[data-animate]", t).each((function(t, e) {
                var i = jQuery(e);
                if (0 === i.data("animate").length)
                    return i.attr("data-animated", "true");
                i.waypoint((function(t) {
                    if ("down" === t) {
                        if ("true" == i.data("animated"))
                            return;
                        setTimeout((function() {
                            i.attr("data-animated", "true")
                        }
                        ), 300)
                    }
                }
                ), {
                    offset: "101%"
                })
            }
            ))
        },
        detach: function(t) {
            jQuery("[data-animate]", t).each((function(t, e) {
                jQuery(e).attr("data-animated", "false")
            }
            ))
        }
    })
}
, function(t, e) {
    Flatsome.behavior("commons", {
        attach: function(t) {
            jQuery("select.resizeselect").resizeselect(),
            jQuery("[data-parallax]", t).flatsomeParallax(),
            jQuery.fn.packery && (jQuery("[data-packery-options], .has-packery", t).each((function() {
                var t = jQuery(this);
                t.packery(),
                setTimeout((function() {
                    t.imagesLoaded((function() {
                        t.packery("layout")
                    }
                    ))
                }
                ), 100)
            }
            )),
            jQuery(".banner-grid-wrapper").imagesLoaded((function() {
                jQuery(this.elements).removeClass("processing")
            }
            )))
        },
        detach: function(t) {}
    })
}
, function(t, e, i) {
    "use strict";
    var n = i(6)
      , o = i.n(n);
    Flatsome.behavior("count-up", {
        attach: function(t) {
            jQuery("span.count-up", t).each((function(t, e) {
                var i = jQuery(e);
                i.waypoint({
                    handler: function(t) {
                        if (!jQuery(this.element).hasClass("active")) {
                            var e = parseInt(i.text());
                            new o.a(i.get(0),0,e,0,4).start(),
                            i.addClass("active")
                        }
                    },
                    offset: "100%"
                })
            }
            ))
        }
    })
}
, function(t, e, i) {
    "use strict";
    (function(t) {
        var e = i(7)
          , n = i.n(e);
        function o(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(i), !0).forEach((function(e) {
                    n()(t, e, i[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }
                ))
            }
            return t
        }
        function s(e) {
            e.addClass("current-dropdown"),
            function(e) {
                var i = e
                  , n = jQuery(".header-inner").width()
                  , o = i.closest("li.menu-item")
                  , s = o.hasClass("menu-item-design-full-width")
                  , a = o.hasClass("menu-item-design-container-width")
                  , l = !s && !a
                  , c = t.flatsomeVars.rtl;
                if (l) {
                    if (n < 750)
                        return !1;
                    var h = i.outerWidth()
                      , u = i.offset()
                      , d = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
                      , p = u.left - (d - n) / 2;
                    c && (p = jQuery(window).width() - (u.left + h) - (d - n) / 2);
                    var f = i.width()
                      , m = n - (p + f)
                      , g = !1;
                    p > m && p < f && (g = (p + m) / 3),
                    m < 0 && (g = -m),
                    g && c ? i.css("margin-right", -g) : g && i.css("margin-left", -g),
                    f > n && i.addClass("nav-dropdown-full")
                }
                if (a) {
                    var v = document.querySelector(".header-inner").getBoundingClientRect()
                      , y = i.get(0).getBoundingClientRect();
                    i.css(r(r({
                        width: n
                    }, c && {
                        right: -(v.right - y.right)
                    }), !c && {
                        left: v.left - y.left
                    }))
                }
                if (s) {
                    var b = document.body
                      , w = b.getBoundingClientRect()
                      , x = i.get(0).getBoundingClientRect()
                      , C = b.clientWidth;
                    i.css(r(r({
                        width: C
                    }, c && {
                        right: -(w.right - x.right) - 15
                    }), !c && {
                        left: w.left - x.left - 15
                    }))
                }
                if (a || s) {
                    var k = null;
                    if (o.closest("#top-bar").length && (k = document.querySelector("#top-bar")),
                    o.closest("#masthead").length && (k = document.querySelector("#masthead")),
                    o.closest("#wide-nav").length && (k = document.querySelector("#wide-nav")),
                    null !== k) {
                        var S = k.getBoundingClientRect()
                          , E = o.get(0).getBoundingClientRect();
                        i.css({
                            top: S.bottom - E.bottom + E.height
                        })
                    }
                }
            }(e.find(".nav-dropdown"))
        }
        function a(t) {
            t.removeClass("current-dropdown"),
            t.find(".nav-dropdown").attr("style", "")
        }
        function l(t) {
            t.each((function(t, e) {
                var i = jQuery(e);
                i.hasClass("current-dropdown") && a(i)
            }
            ))
        }
        function c(t, e) {
            t.length && t.removeClass("ux-body-overlay--".concat(e, "-active"))
        }
        Flatsome.behavior("dropdown", {
            attach: function(t) {
                var e = jQuery(".nav li.has-dropdown", t)
                  , i = "uxBuilder" === jQuery("html").attr("ng-app")
                  , n = jQuery(".ux-body-overlay")
                  , o = "ontouchstart"in window
                  , r = !1
                  , h = null;
                e.each((function(t, u) {
                    var d = jQuery(u)
                      , p = d.hasClass("nav-dropdown-toggle") && !o
                      , f = !1
                      , m = !1;
                    d.on("touchstart click", (function(t) {
                        "touchstart" === t.type && (f = !0),
                        "click" === t.type && f && (f && !m && t.preventDefault(),
                        m = !0)
                    }
                    )),
                    i || p ? (r = !0,
                    d.on("click", "a:first", (function(t) {
                        if (t.preventDefault(),
                        h = d,
                        d.hasClass("current-dropdown"))
                            return a(d),
                            void c(n, "click");
                        l(e),
                        s(d),
                        function(t, e) {
                            if (!t.length)
                                return;
                            t.addClass("ux-body-overlay--".concat(e, "-active"))
                        }(n, "click")
                    }
                    ))) : d.hoverIntent({
                        sensitivity: 3,
                        interval: 20,
                        timeout: 70,
                        over: function(t) {
                            l(e),
                            s(d),
                            c(n, "click")
                        },
                        out: function() {
                            m = !1,
                            f = !1,
                            a(d)
                        }
                    })
                }
                )),
                !i && r && jQuery(document).on("click", (function(t) {
                    null === h || h === t.target || h.has(t.target).length || (a(h),
                    c(n, "click"))
                }
                ))
            }
        })
    }
    ).call(this, i(0))
}
, function(t, e) {
    Flatsome.behavior("lightbox-gallery", {
        attach: function(t) {
            var e = {
                delegate: "a",
                type: "image",
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                closeMarkup: flatsomeVars.lightbox.close_markup,
                tLoading: '<div class="loading-spin centered dark"></div>',
                removalDelay: 300,
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0,
                    arrowMarkup: '<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>',
                    preload: [0, 1]
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    verticalFit: !1
                }
            };
            jQuery('.lightbox .gallery a[href*=".jpg"], .lightbox .gallery a[href*=".jpeg"], .lightbox a.lightbox-gallery', t).parent().magnificPopup(e),
            jQuery(".lightbox .lightbox-multi-gallery", t).length && jQuery(".lightbox-multi-gallery", t).each((function() {
                jQuery(this).magnificPopup(e)
            }
            ))
        }
    })
}
, function(t, e) {
    Flatsome.behavior("lightbox-image", {
        attach: function(t) {
            jQuery(['.lightbox *[id^="attachment"] a[href*=".jpg"]', '.lightbox *[id^="attachment"] a[href*=".jpeg"]', '.lightbox .wp-block-image a[href*=".jpg"]:not([target="_blank"])', '.lightbox .wp-block-image a[href*=".jpeg"]:not([target="_blank"])', ".lightbox a.image-lightbox", '.lightbox .entry-content a[href*=".jpg"]', '.lightbox .entry-content a[href*=".jpeg"]'].join(","), t).not([".lightbox a.lightbox-gallery", '.lightbox .gallery a[href*=".jpg"]', '.lightbox .gallery a[href*=".jpeg"]', '.lightbox .lightbox-multi-gallery a[href*=".jpg"]', '.lightbox .lightbox-multi-gallery a[href*=".jpeg"]'].join(",")).magnificPopup({
                type: "image",
                tLoading: '<div class="loading-spin centered dark"></div>',
                closeOnContentClick: !0,
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                closeMarkup: flatsomeVars.lightbox.close_markup,
                removalDelay: 300,
                image: {
                    verticalFit: !1
                }
            })
        }
    })
}
, function(t, e) {
    Flatsome.behavior("lightboxes-link", {
        attach: function(t) {
            jQuery(".lightbox-by-id", t).each((function() {
                var e = jQuery(this).attr("id");
                jQuery('a[href="#' + e + '"]', t).on("click", (function(t) {
                    var e = jQuery(t.currentTarget).attr("href").substring(1)
                      , i = jQuery("#".concat(e, ".lightbox-by-id"));
                    if (e && i.length > 0) {
                        var n = i[0]
                          , o = jQuery.magnificPopup.open ? 300 : 0;
                        o && jQuery.magnificPopup.close(),
                        setTimeout((function() {
                            jQuery.magnificPopup.open({
                                removalDelay: 300,
                                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                                closeMarkup: flatsomeVars.lightbox.close_markup,
                                items: {
                                    src: n,
                                    type: "inline",
                                    tLoading: '<div class="loading-spin dark"></div>'
                                },
                                callbacks: {
                                    open: function() {
                                        if (Flatsome.attach(this.content),
                                        jQuery.fn.flickity) {
                                            var t = jQuery("[data-flickity-options]", this.content);
                                            t && t.imagesLoaded((function() {
                                                t.flickity("resize")
                                            }
                                            ))
                                        }
                                        if (jQuery.fn.packery) {
                                            var e = jQuery("[data-packery-options]", this.content);
                                            e && e.imagesLoaded((function() {
                                                e.packery("layout")
                                            }
                                            ))
                                        }
                                    }
                                }
                            })
                        }
                        ), o),
                        t.preventDefault()
                    }
                }
                ))
            }
            ))
        }
    })
}
, function(t, e) {
    Flatsome.behavior("lightbox-video", {
        attach: function(t) {
            jQuery('a.open-video, a.button[href*="vimeo"], a.button[href*="youtube.com/watch"]', t).magnificPopup({
                type: "iframe",
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                mainClass: "my-mfp-video",
                closeMarkup: flatsomeVars.lightbox.close_markup,
                tLoading: '<div class="loading-spin centered dark"></div>',
                removalDelay: 300,
                preloader: !0,
                callbacks: {
                    open: function() {
                        jQuery(".slider .is-selected .video").trigger("pause")
                    },
                    close: function() {
                        jQuery(".slider .is-selected .video").trigger("play")
                    }
                }
            })
        }
    })
}
, function(t, e) {
    Flatsome.behavior("lightboxes", {
        attach: function(t) {
            jQuery("[data-open]", t).on("click", (function(t) {
                var e = jQuery(t.currentTarget)
                  , i = e.data("open")
                  , n = e.data("color")
                  , o = e.data("bg")
                  , r = e.data("pos")
                  , s = e.data("visible-after")
                  , a = e.data("class")
                  , l = e.attr("data-focus");
                e.offset();
                e.addClass("current-lightbox-clicked"),
                jQuery.magnificPopup.open({
                    items: {
                        src: i,
                        type: "inline",
                        tLoading: '<div class="loading-spin dark"></div>'
                    },
                    removalDelay: 300,
                    closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                    closeMarkup: flatsomeVars.lightbox.close_markup,
                    focus: l,
                    callbacks: {
                        beforeOpen: function() {
                            this.st.mainClass = "off-canvas ".concat(n, " off-canvas-").concat(r)
                        },
                        open: function() {
                            jQuery("html").addClass("has-off-canvas"),
                            jQuery("html").addClass("has-off-canvas-" + r),
                            a && jQuery(".mfp-content").addClass(a),
                            o && jQuery(".mfp-bg").addClass(o),
                            jQuery(".mfp-content .resize-select").change(),
                            jQuery.fn.packery && jQuery("[data-packery-options], .has-packery").packery("layout")
                        },
                        beforeClose: function() {
                            jQuery("html").removeClass("has-off-canvas")
                        },
                        afterClose: function() {
                            jQuery("html").removeClass("has-off-canvas-" + r),
                            jQuery(".current-lightbox-clicked").removeClass("current-lightbox-clicked"),
                            s && jQuery(i).removeClass("mfp-hide")
                        }
                    }
                }),
                t.preventDefault()
            }
            ))
        }
    })
}
, function(t, e) {
    Flatsome.behavior("slider", {
        attach: function(t) {
            (jQuery(t).data("flickityOptions") ? jQuery(t) : jQuery("[data-flickity-options]", t)).each((function(t, e) {
                var i = jQuery(e)
                  , n = i.closest(".slider-wrapper")
                  , o = i.data("flickity-options");
                if ("undefined" != typeof UxBuilder && (o.draggable = !1),
                !0 !== o.watchCSS) {
                    i.on("ready.flickity", (function() {
                        i.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"),
                        i.find(".is-selected .video-bg").trigger("play"),
                        "requestAnimationFrame"in window && (i.removeClass("flickity-enabled"),
                        window.requestAnimationFrame((function() {
                            i.addClass("flickity-enabled")
                        }
                        )))
                    }
                    ));
                    var r = i.flickity(o);
                    if (i.imagesLoaded((function() {
                        n.find(".loading-spin").fadeOut()
                    }
                    )),
                    i.on("change.flickity", (function() {
                        i.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"),
                        i.find(".is-selected .video-bg").trigger("play")
                    }
                    )),
                    i.on("dragStart.flickity", (function() {
                        document.ontouchmove = function(t) {
                            return t.preventDefault()
                        }
                        ,
                        i.addClass("is-dragging")
                    }
                    )),
                    i.on("dragEnd.flickity", (function() {
                        document.ontouchmove = function() {
                            return !0
                        }
                        ,
                        i.removeClass("is-dragging")
                    }
                    )),
                    o.parallax) {
                        var s = r.data("flickity")
                          , a = i.find(".bg, .flickity-slider > .img img");
                        i.addClass("slider-has-parallax"),
                        i.on("scroll.flickity", (function(t, e) {
                            s.slides.forEach((function(t, e) {
                                var i = a[e]
                                  , n = -1 * (t.target + s.x) / o.parallax;
                                i && (i.style.transform = "translateX( " + n + "px)")
                            }
                            ))
                        }
                        ))
                    }
                }
            }
            ))
        },
        detach: function(t) {
            jQuery(t).data("flickityOptions") ? jQuery(t).flickity("destroy") : jQuery("[data-flickity-options]", t).flickity("destroy")
        }
    })
}
, function(t, e) {
    function i(t, e, i) {
        e.each((function(e, i) {
            return jQuery(i).toggleClass("active", e === t)
        }
        )),
        i.each((function(e, i) {
            return jQuery(i).toggleClass("active", e === t)
        }
        )),
        jQuery.fn.flickity && jQuery("[data-flickity-options]", i[t]).flickity("resize"),
        jQuery.fn.packery && jQuery("[data-packery-options]", i[t]).packery("layout")
    }
    Flatsome.behavior("tabs", {
        attach: function(t) {
            var e = window.location.hash
              , n = window.location.href;
            jQuery(".tabbed-content", t).each((function(t, o) {
                var r = jQuery(o)
                  , s = r.find("> .nav > li")
                  , a = r.find("> .tab-panels > .panel")
                  , l = s.filter(".reviews_tab").first();
                a.removeAttr("style"),
                s.each((function(t, n) {
                    var o = jQuery(n).find("a");
                    o.on("click", (function(e) {
                        i(t, s, a),
                        e.preventDefault(),
                        e.stopPropagation()
                    }
                    )),
                    e.substr(1).length && e.substr(1) === o.attr("href").split("#")[1] && i(t, s, a)
                }
                )),
                l.length && (e.toLowerCase().indexOf("comment-") >= 0 || "#comments" === e || "#reviews" === e || "#tab-reviews" === e || n.indexOf("comment-page-") > 0 || n.indexOf("cpage=") > 0) && (l.find("a").trigger("click"),
                jQuery.scrollTo(".reviews_tab", {
                    duration: 300,
                    offset: -150
                }))
            }
            ))
        }
    })
}
, function(t, e) {
    Flatsome.behavior("toggle", {
        attach: function(t) {
            function e(t) {
                var e = jQuery(t.currentTarget).parent();
                e.toggleClass("active"),
                e.attr("aria-expanded", "false" === e.attr("aria-expanded") ? "true" : "false"),
                t.preventDefault()
            }
            jQuery([".widget ul.children", ".nav ul.children", ".menu .sub-menu", ".mobile-sidebar-levels-2 .nav ul.children > li > ul"].join(", "), t).each((function() {
                var t = jQuery(this).parents(".nav-slide").length ? "right" : "down";
                jQuery(this).parent().addClass("has-child").attr("aria-expanded", "false"),
                jQuery(this).before('<button class="toggle"><i class="icon-angle-'.concat(t, '"></i></button>'))
            }
            )),
            jQuery(".current-cat-parent", t).addClass("active").attr("aria-expanded", "true").removeClass("current-cat-parent"),
            jQuery(".toggle", t).on("click", e);
            var i = jQuery("body").hasClass("mobile-submenu-toggle");
            jQuery(".sidebar-menu li.menu-item.has-child", t).each((function() {
                var t = jQuery(this)
                  , n = t.find("> a:first");
                "#" === n.attr("href") ? n.on("click", (function(e) {
                    e.preventDefault(),
                    t.toggleClass("active"),
                    t.attr("aria-expanded", "false" === t.attr("aria-expanded") ? "true" : "false")
                }
                )) : i && n.next(".toggle").length && n.on("click", e)
            }
            ))
        }
    })
}
, function(t, e) {
    function i(t) {
        t.attr("aria-hidden", "true"),
        t.find("> li > a, > li > button").attr("tabindex", "-1")
    }
    Flatsome.behavior("sidebar-slider", {
        attach: function(t) {
            var e = jQuery("body").hasClass("mobile-submenu-toggle");
            jQuery(".mobile-sidebar-slide", t).each((function(t, n) {
                var o = parseInt(jQuery(n).data("levels"), 10) || 1
                  , r = jQuery(".sidebar-menu", n)
                  , s = jQuery(".nav-sidebar", n);
                jQuery(["> li > ul.children", "> li > .sub-menu", o > 1 ? "> li > ul.children > li > ul" : null].filter(Boolean).join(", "), s).each((function(t, n) {
                    var o = jQuery(n)
                      , s = o.parent()
                      , a = s.parents("ul:first")
                      , l = jQuery(["> .toggle", '> a[href="#"]', e && "> a"].filter(Boolean).join(","), s)
                      , c = s.find("> a").text().trim()
                      , h = o.parents("ul").length
                      , u = Boolean(window.flatsomeVars.rtl)
                      , d = jQuery('\n            <li class="nav-slide-header pt-half pb-half">\n              <button class="toggle">\n                <i class="icon-angle-left"></i>\n                '.concat(c || window.flatsomeVars.i18n.mainMenu, "\n              </button>\n            </li>\n          "));
                    o.prepend(d),
                    i(o);
                    var p = null;
                    l.off("click").on("click", (function(t) {
                        var e;
                        s.attr("aria-expanded", "true"),
                        a.addClass("is-current-parent"),
                        o.addClass("is-current-slide"),
                        r.css("transform", "translateX(".concat(u ? "" : "-").concat(100 * h, "%)")),
                        (e = o).attr("aria-hidden", "false"),
                        e.find("> li > a, > li > button").attr("tabindex", ""),
                        clearTimeout(p),
                        t.preventDefault()
                    }
                    )),
                    d.find(".toggle").on("click", (function() {
                        r.css("transform", "translateX(".concat(u ? "" : "-").concat(100 * (h - 1), "%)")),
                        i(o),
                        p = setTimeout((function() {
                            o.removeClass("is-current-slide"),
                            a.removeClass("is-current-parent")
                        }
                        ), 300),
                        s.removeClass("active"),
                        s.attr("aria-expanded", "false")
                    }
                    ))
                }
                ))
            }
            ))
        }
    })
}
, function(t, e) {
    Flatsome.behavior("nav-hover", {
        attach: function(t) {
            var e = jQuery(".ux-body-overlay", t);
            e.length && jQuery(".nav-prompts-overlay > li.menu-item", t).on({
                mouseenter: function() {
                    e.addClass("ux-body-overlay--hover-active")
                },
                mouseleave: function() {
                    e.removeClass("ux-body-overlay--hover-active")
                }
            })
        }
    })
}
, function(t, e) {
    Flatsome.behavior("back-to-top", {
        attach: function(t) {
            jQuery("body", t).waypoint({
                handler: function(e) {
                    jQuery(".back-to-top", t).toggleClass("active")
                },
                offset: "-100%"
            })
        }
    })
}
, function(t, e) {
    Flatsome.behavior("scroll-to", {
        attach: function() {
            var t = jQuery("span.scroll-to")
              , e = jQuery(".scroll-to-bullets")
              , i = flatsomeVars.sticky_height;
            if (e.length && (e.children().tooltipster("destroy"),
            e.remove()),
            jQuery("li.scroll-to-link").remove(),
            t.length && (e = jQuery('<div class="scroll-to-bullets hide-for-medium"/>'),
            jQuery("body").append(e),
            t.each((function(t, e) {
                var n = jQuery(e)
                  , o = n.data("link")
                  , r = n.data("title")
                  , s = n.data("bullet")
                  , a = 'a[href*="'.concat(o || "<nolink>", '"]');
                if (s) {
                    var l = jQuery('\n          <a href="'.concat(o, '" data-title="').concat(r, '" title="').concat(r, '">\n          <strong></strong>\n          </a>\n        '));
                    l.tooltipster({
                        position: "left",
                        delay: 50,
                        contentAsHTML: !0,
                        touchDevices: !1
                    }),
                    jQuery(".scroll-to-bullets").append(l)
                }
                var c = jQuery('\n          <li class="scroll-to-link"><a data-animate="fadeIn" href="'.concat(o, '" data-title="').concat(r, '" title="').concat(r, '">\n          ').concat(r, "\n          </a></li>\n        "));
                jQuery("li.nav-single-page").before(c),
                setTimeout((function() {
                    jQuery(".scroll-to-link a").attr("data-animated", "true")
                }
                ), 300),
                n.waypoint((function(t) {
                    jQuery(".scroll-to-bullets a, .scroll-to-link").removeClass("active"),
                    jQuery(".scroll-to-bullets").find(a).addClass("active"),
                    jQuery(".nav-single-page").parent().find(a).parent().addClass("active"),
                    "up" === t && jQuery(".scroll-to-bullets, .nav-single-page").find(a).removeClass("active").prev().addClass("active")
                }
                ), {
                    offset: i
                }),
                jQuery(a).off("click").on("click", (function(t) {
                    var e = jQuery(this).attr("href").split("#")[1];
                    if (e) {
                        var n = "\\#".concat(e)
                          , o = "span.scroll-to[data-link=".concat(n, "]")
                          , r = jQuery(o).offset().top - i;
                        jQuery.scrollTo(r, {
                            duration: 500,
                            axis: "y"
                        }),
                        jQuery.magnificPopup.close(),
                        t.preventDefault()
                    }
                }
                ))
            }
            )),
            location.hash)) {
                var n = location.hash.replace("#", "");
                jQuery.scrollTo("a[name=" + n + "]", {
                    duration: 500,
                    axis: "y",
                    offset: -i
                })
            }
        },
        detach: function() {
            jQuery("span.scroll-to").length && setTimeout(this.attach, 0)
        }
    })
}
, function(t, e) {
    Flatsome.behavior("accordion", {
        attach: function(t) {
            jQuery(".accordion", t).each((function() {
                var t = jQuery(this).attr("rel");
                if (t > 0) {
                    var e = jQuery(this).find(".accordion-item:nth-child(" + t + ") .accordion-inner");
                    e.show(),
                    e.prev().addClass("active"),
                    jQuery.fn.flickity && e.find("[data-flickity-options]").flickity("resize"),
                    jQuery.fn.packery && e.find("[data-packery-options]").packery("layout")
                }
            }
            ))
        }
    }),
    Flatsome.behavior("accordion-title", {
        attach: function(t) {
            jQuery(".accordion-title", t).each((function() {
                jQuery(this).off("click.flatsome").on("click.flatsome", (function(t) {
                    if (jQuery(this).next().is(":hidden")) {
                        jQuery(this).parent().parent().find(".accordion-title").removeClass("active").next().slideUp(200),
                        jQuery(this).toggleClass("active").next().slideDown(200, (function() {
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && jQuery.scrollTo(jQuery(this).prev(), {
                                duration: 300,
                                offset: -100
                            })
                        }
                        ));
                        var e = jQuery(this).parent().parent().find("[data-flickity-options]");
                        Flatsome.detach("slider", e),
                        Flatsome.attach("slider", e),
                        jQuery.fn.packery && jQuery(this).parent().parent().find("[data-packery-options]").packery("layout")
                    } else
                        jQuery(this).parent().parent().find(".accordion-title").removeClass("active").next().slideUp(200);
                    t.preventDefault()
                }
                ))
            }
            ))
        }
    })
}
, function(t, e) {
    Flatsome.behavior("tooltips", {
        attach: function(t) {
            jQuery(".tooltip, .has-tooltip, .tip-top, li.chosen a", t).tooltipster(),
            jQuery(".tooltip-as-html", t).tooltipster({
                interactive: !0,
                contentAsHTML: !0
            })
        }
    })
}
, function(t, e) {
    Flatsome.behavior("sticky-section", {
        attach: function(t) {
            jQuery(".sticky-section", t).each((function(t, e) {
                var i = jQuery(e);
                i.waypoint((function(t) {
                    "down" === t && (i.addClass("is-sticky-section"),
                    i.after('<div class="sticky-section-helper"></div>')),
                    "up" === t && (i.removeClass("is-sticky-section"),
                    i.next(".sticky-section-helper").remove())
                }
                ), {
                    offset: "0.1px"
                }),
                i.waypoint((function(t) {
                    "down" === t && (i.removeClass("is-sticky-section"),
                    i.next(".sticky-section-helper").remove()),
                    "up" === t && (i.addClass("is-sticky-section"),
                    i.after('<div class="sticky-section-helper"></div>'))
                }
                ), {
                    offset: "-100%"
                })
            }
            ))
        }
    })
}
, function(t, e) {
    Flatsome.behavior("sticky-sidebar", {
        attach: function(t) {
            var e = parseInt(flatsomeVars.sticky_height) + 15;
            jQuery(".is-sticky-column", t).each((function(t, i) {
                jQuery(i).stickySidebar({
                    topSpacing: e,
                    bottomSpacing: 15,
                    minWidth: 850,
                    innerWrapperSelector: ".is-sticky-column__inner"
                }),
                jQuery(document).on("updated_checkout", (function() {
                    jQuery(i).stickySidebar("updateSticky")
                }
                ))
            }
            ))
        }
    })
}
, function(t, e) {
    Flatsome.behavior("youtube", {
        attach: function(t) {
            var e, i, n, o, r, s = jQuery(".ux-youtube", t);
            0 !== s.length && (window.onYouTubePlayerAPIReady = function() {
                s.each((function() {
                    var t = jQuery(this)
                      , e = t.attr("id")
                      , i = t.data("videoid")
                      , n = t.data("loop")
                      , o = t.data("audio");
                    new YT.Player(e,{
                        height: "100%",
                        width: "100%",
                        playerVars: {
                            html5: 1,
                            autoplay: 1,
                            controls: 0,
                            rel: 0,
                            modestbranding: 1,
                            playsinline: 1,
                            showinfo: 0,
                            fs: 0,
                            loop: n,
                            el: 0,
                            playlist: n ? i : void 0
                        },
                        videoId: i,
                        events: {
                            onReady: function(t) {
                                0 === o && t.target.mute()
                            }
                        }
                    })
                }
                ))
            }
            ,
            e = document,
            i = "script",
            n = "youtube-jssdk",
            r = e.getElementsByTagName(i)[0],
            e.getElementById(n) || ((o = e.createElement(i)).id = n,
            o.src = "https://www.youtube.com/player_api",
            r.parentNode.insertBefore(o, r)))
        }
    })
}
, , , , , , , , function(t, e, i) {
    "use strict";
    Flatsome.behavior("lazy-load-bg", {
        attach: function(t) {
            var e, i = (e = function(t) {
                t.intersectionRatio > 0 && (i.unobserve(t.target),
                jQuery(t.target).addClass("bg-loaded"))
            }
            ,
            new IntersectionObserver((function(t) {
                for (var i = 0; i < t.length; i++)
                    e(t[i])
            }
            ),{
                rootMargin: "0px",
                threshold: .1
            }));
            jQuery(".bg", t).each((function(t, e) {
                i.observe(e)
            }
            ))
        }
    })
}
]);
