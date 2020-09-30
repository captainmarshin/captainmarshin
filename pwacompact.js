parcelRequire = function(e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i)
        throw i;
    return f
}({
    "pBGv": [function(require, module, exports) {

        var t,
            e,
            n = module.exports = {};
        function r() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === r || !t) && setTimeout)
                return t = setTimeout, setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (n) {
                    return t.call(this, e, 0)
                }
            }
        }
        function u(t) {
            if (e === clearTimeout)
                return clearTimeout(t);
            if ((e === o || !e) && clearTimeout)
                return e = clearTimeout, clearTimeout(t);
            try {
                return e(t)
            } catch (n) {
                try {
                    return e.call(null, t)
                } catch (n) {
                    return e.call(this, t)
                }
            }
        }
        !function() {
            try {
                t = "function" == typeof setTimeout ? setTimeout : r
            } catch (n) {
                t = r
            }
            try {
                e = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (n) {
                e = o
            }
        }();
        var c,
            s = [],
            l = !1,
            a = -1;
        function f() {
            l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
        }
        function h() {
            if (!l) {
                var t = i(f);
                l = !0;
                for (var e = s.length; e;) {
                    for (c = s, s = []; ++a < e;)
                        c && c[a].run();
                    a = -1, e = s.length
                }
                c = null, l = !1, u(t)
            }
        }
        function m(t, e) {
            this.fun = t, this.array = e
        }
        function p() {}
        n.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            s.push(new m(t, e)), 1 !== s.length || l || i(h)
        }, m.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) {
            return []
        }, n.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, n.cwd = function() {
            return "/"
        }, n.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, n.umask = function() {
            return 0
        };
    }, {}],
    "vYBz": [function(require, module, exports) {
        var process = require("process");
        var e = require("process");
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        !function() {
            if ("fetch" in window) {
                var e = ["standalone", "fullscreen", "minimal-ui"],
                    n = "#f8f9fa",
                    r = 36,
                    o = 128,
                    i = 48,
                    a = 0,
                    l = navigator.vendor && -1 !== navigator.vendor.indexOf("Apple"),
                    c = navigator.userAgent && -1 !== navigator.userAgent.indexOf("Edge"),
                    u = "undefined" != typeof Windows;
                "complete" === document.readyState ? d() : window.addEventListener("load", d)
            }
            function d() {
                var d = document.head.querySelector('link[rel="manifest"]'),
                    p = d ? d.href : "";
                !function(e) {
                    for (var n = function(t) {
                            var n = e[t];
                            try {
                                return new URL("", n), {
                                    v: function(e) {
                                        return new URL(e, n).toString()
                                    }
                                }
                            } catch (r) {}
                        }, r = 0; r < e.length; ++r) {
                        var o = n(r);
                        if ("object" === t(o))
                            return o.v
                    }
                }([p, window.location]);
                Promise.resolve().then(function() {
                    if (!p)
                        throw 'can\'t find <link rel="manifest" href=".." />\'';
                    var e = {};
                    return "use-credentials" === p.crossOrigin && (e.credentials = "include"), window.fetch(p, e)
                }).then(function(e) {
                    return e.json()
                }).then(function(t) {
                    return function(t, d) {
                        (t.icons || []).sort(function(e, t) {
                            return parseInt(t.sizes, 10) - parseInt(e.sizes, 10)
                        });
                        var p = function() {
                                if (document.querySelectorAll && document.querySelectorAll('link[rel="apple-touch-icon"]')) {
                                    for (var e, t = document.querySelectorAll('link[rel="apple-touch-icon"]'), n = 0, r = 0; r < t.length; r++)
                                        try {
                                            var o = t[r].getAttribute("sizes").split("x")[0];
                                            o > n && (n = o), e = t[r].getAttribute("href")
                                        } catch (i) {
                                            e || (e = t[r].getAttribute("href"))
                                        }
                                    return e
                                }
                                return "/apple-touch-icon.png"
                            }(),
                            v = t.display,
                            w = -1 !== e.indexOf(v);
                        f("mobile-web-app-capable", w), function(e) {
                            if (l || u) {
                                var t = h(e);
                                if (l)
                                    f("apple-mobile-web-app-status-bar-style", t ? "black" : "default");
                                else {
                                    var n = function() {
                                        try {
                                            return Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar
                                        } catch (e) {
                                            return null
                                        }
                                    }();
                                    if (null === n)
                                        return void console.debug("UWP no titleBar");
                                    n.foregroundColor = s(t ? "black" : "white"), n.backgroundColor = s(e)
                                }
                            }
                        }(t.theme_color || "black"), c && (f("msapplication-starturl", t.start_url || "/"), f("msapplication-TileColor", t.theme_color));
                        document.head.querySelector('[name="theme-color"]') || f("theme-color", t.theme_color);
                        var g = function(e) {
                            var t = (e = String(e || "")).substr(0, 3);
                            if ("por" === t)
                                return "portrait";
                            if ("lan" === t)
                                return "landscape";
                            return ""
                        }(t.orientation);
                        f("x5-orientation", g), f("screen-orientation", g), "fullscreen" === v ? (f("x5-fullscreen", "true"), f("full-screen", "yes")) : w && (f("x5-page-mode", "app"), f("browsermode", "application"));
                        if (!l)
                            return;
                        var b = h(t.background_color || n),
                            y = t.name || t.short_name || document.title,
                            S = function(e) {
                                var t;
                                return (e || []).filter(function(e) {
                                    return "itunes" === e.platform
                                }).forEach(function(e) {
                                    if (e.id)
                                        t = e.id;
                                    else {
                                        var n = e.url.match(/id(\d+)/);
                                        n && (t = n[1])
                                    }
                                }), t
                            }(t.related_applications);
                        function A(e, l, c) {
                            var u = e.width,
                                d = e.height,
                                f = window.devicePixelRatio,
                                s = m({
                                    width: u * f,
                                    height: d * f
                                });
                            s.scale(f, f), s.fillStyle = t.background_color || n, s.fillRect(0, 0, u, d), s.translate(u / 2, (d - a) / 2), s.font = "".concat(r, "px HelveticaNeue-CondensedBold"), s.fillStyle = b ? "white" : "black";
                            var p = s.measureText(y).width;
                            if (c) {
                                var h = c.width / f,
                                    v = c.height / f;
                                v > o && (h /= v / o, v = o), h >= i && v >= i && (s.drawImage(c, h / -2, v / -2 - 24, h, v), s.translate(0, v / 2 + a))
                            }
                            s.fillText(y, p / -2, 16);
                            var w = document.createElement("link");
                            return w.setAttribute("rel", "apple-touch-startup-image"), w.setAttribute("media", "(orientation: ".concat(l, ")")), w.setAttribute("href", s.canvas.toDataURL()), w
                        }
                        S && f("apple-itunes-app", "app-id=".concat(S)), f("apple-mobile-web-app-capable", w), f("apple-mobile-web-app-title", y);
                        var k = new Set;
                        var x = new Image;
                        x.crossOrigin = "anonymous", x.onload = function() {
                            var e,
                                t,
                                n;
                            e = x, t = A(window.screen, "portrait", e), n = A({
                                width: window.screen.height,
                                height: window.screen.width
                            }, "landscape", e), k.forEach(function(e) {
                                return e.remove()
                            }), document.head.appendChild(t), document.head.appendChild(n), k.add(t), k.add(n), console.log("done")
                        }, x.src = p
                    }(t)
                }).catch(function(e) {
                    return console.warn("pwacompat.js error", e)
                })
            }
            function f(e, t) {
                t && (!0 === t && (t = "yes"), function(e, t) {
                    var n = document.createElement(e);
                    for (var r in t)
                        n.setAttribute(r, t[r]);
                    document.head.appendChild(n)
                }("meta", {
                    name: e,
                    content: t
                }))
            }
            function s(e) {
                var t = p(e);
                return {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: t[3]
                }
            }
            function p(e) {
                var t = m();
                return t.fillStyle = e, t.fillRect(0, 0, 1, 1), t.getImageData(0, 0, 1, 1).data
            }
            function h(e) {
                var t = p(e).map(function(e) {
                        var t = e / 255;
                        return t < .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                    }),
                    n = .2126 * t[0] + .7152 * t[1] + .0722 * t[2];
                return Math.abs(1.05 / (n + .05)) > 3
            }
            function m() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        width: 1,
                        height: 1
                    },
                    t = e.width,
                    n = e.height,
                    r = document.createElement("canvas");
                return r.width = t, r.height = n, r.getContext("2d")
            }
        }();
    }, {
        "process": "pBGv"
    }]
}, {}, ["vYBz"], null)

