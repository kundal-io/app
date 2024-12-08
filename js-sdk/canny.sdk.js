(()=>{
    var e = {
        67285: ()=>{
            "function" != typeof String.prototype.trimStart && (String.prototype.trimStart = function() {
                return this.replace(/^\s+/, "")
            }
            ),
            "function" != typeof String.prototype.trimEnd && (String.prototype.trimEnd = function() {
                return this.replace(/\s+$/, "")
            }
            ),
            "undefined" == typeof document || "scrollingElement"in document || function() {
                function e(e) {
                    return window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle
                }
                var t;
                function n(e) {
                    return "none" !== e.display && !("collapse" === e.visibility && /^table-(.+-group|row|column)$/.test(e.display))
                }
                var o = function() {
                    if (function() {
                        if (!/^CSS1/.test(document.compatMode))
                            return !1;
                        if (void 0 === t) {
                            var e = document.createElement("iframe");
                            e.style.height = "1px",
                            (document.body || document.documentElement || document).appendChild(e);
                            var n = e.contentWindow.document;
                            n.write('<!DOCTYPE html><div style="height:9999em">x</div>'),
                            n.close(),
                            t = n.documentElement.scrollHeight > n.body.scrollHeight,
                            e.parentNode.removeChild(e)
                        }
                        return t
                    }())
                        return document.documentElement;
                    var o = document.body;
                    return (o = o && !/body/i.test(o.tagName) ? function(e) {
                        for (var t, n = e; n; ) {
                            if (1 === n.nodeType && (t = n,
                            window.HTMLBodyElement ? t instanceof HTMLBodyElement : /body/i.test(t.tagName)))
                                return n;
                            n = n.nextSibling
                        }
                        return null
                    }(o) : o) && function(t) {
                        var o = e(t)
                          , r = e(document.documentElement);
                        return "visible" !== o.overflow && "visible" !== r.overflow && n(o) && n(r)
                    }(o) ? null : o
                };
                Object.defineProperty ? Object.defineProperty(document, "scrollingElement", {
                    get: o
                }) : document.__defineGetter__ ? document.__defineGetter__("scrollingElement", o) : (document.scrollingElement = o(),
                document.attachEvent && document.attachEvent("onpropertychange", (function() {
                    "activeElement" === window.event.propertyName && (document.scrollingElement = o())
                }
                )))
            }()
        }
        ,
        93283: ()=>{
            const e = "sessionStorage";
            try {
                window[e] ? window.sessionStorageWrapper = window[e] : t()
            } catch (e) {
                t()
            }
            function t() {
                window.sessionStorageWrapper = {
                    clear() {},
                    getItem() {},
                    remoteItem() {},
                    setItem() {}
                }
            }
        }
        ,
        39305: function(e, t, n) {
            var o;
            e.exports = (o = o || function(e, t) {
                var o;
                if ("undefined" != typeof window && window.crypto && (o = window.crypto),
                "undefined" != typeof self && self.crypto && (o = self.crypto),
                "undefined" != typeof globalThis && globalThis.crypto && (o = globalThis.crypto),
                !o && "undefined" != typeof window && window.msCrypto && (o = window.msCrypto),
                !o && void 0 !== n.g && n.g.crypto && (o = n.g.crypto),
                !o)
                    try {
                        o = n(36305)
                    } catch (e) {}
                var r = function() {
                    if (o) {
                        if ("function" == typeof o.getRandomValues)
                            try {
                                return o.getRandomValues(new Uint32Array(1))[0]
                            } catch (e) {}
                        if ("function" == typeof o.randomBytes)
                            try {
                                return o.randomBytes(4).readInt32LE()
                            } catch (e) {}
                    }
                    throw new Error("Native crypto module could not be used to get secure random number.")
                }
                  , i = Object.create || function() {
                    function e() {}
                    return function(t) {
                        var n;
                        return e.prototype = t,
                        n = new e,
                        e.prototype = null,
                        n
                    }
                }()
                  , a = {}
                  , s = a.lib = {}
                  , c = s.Base = {
                    extend: function(e) {
                        var t = i(this);
                        return e && t.mixIn(e),
                        t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                            t.$super.init.apply(this, arguments)
                        }
                        ),
                        t.init.prototype = t,
                        t.$super = this,
                        t
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments),
                        e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e)
                            e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                }
                  , l = s.WordArray = c.extend({
                    init: function(e, t) {
                        e = this.words = e || [],
                        this.sigBytes = null != t ? t : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || d).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words
                          , n = e.words
                          , o = this.sigBytes
                          , r = e.sigBytes;
                        if (this.clamp(),
                        o % 4)
                            for (var i = 0; i < r; i++) {
                                var a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                t[o + i >>> 2] |= a << 24 - (o + i) % 4 * 8
                            }
                        else
                            for (var s = 0; s < r; s += 4)
                                t[o + s >>> 2] = n[s >>> 2];
                        return this.sigBytes += r,
                        this
                    },
                    clamp: function() {
                        var t = this.words
                          , n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                        t.length = e.ceil(n / 4)
                    },
                    clone: function() {
                        var e = c.clone.call(this);
                        return e.words = this.words.slice(0),
                        e
                    },
                    random: function(e) {
                        for (var t = [], n = 0; n < e; n += 4)
                            t.push(r());
                        return new l.init(t,e)
                    }
                })
                  , u = a.enc = {}
                  , d = u.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) {
                            var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            o.push((i >>> 4).toString(16)),
                            o.push((15 & i).toString(16))
                        }
                        return o.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], o = 0; o < t; o += 2)
                            n[o >>> 3] |= parseInt(e.substr(o, 2), 16) << 24 - o % 8 * 4;
                        return new l.init(n,t / 2)
                    }
                }
                  , f = u.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) {
                            var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            o.push(String.fromCharCode(i))
                        }
                        return o.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], o = 0; o < t; o++)
                            n[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8;
                        return new l.init(n,t)
                    }
                }
                  , p = u.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(f.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return f.parse(unescape(encodeURIComponent(e)))
                    }
                }
                  , m = s.BufferedBlockAlgorithm = c.extend({
                    reset: function() {
                        this._data = new l.init,
                        this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = p.parse(e)),
                        this._data.concat(e),
                        this._nDataBytes += e.sigBytes
                    },
                    _process: function(t) {
                        var n, o = this._data, r = o.words, i = o.sigBytes, a = this.blockSize, s = i / (4 * a), c = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * a, u = e.min(4 * c, i);
                        if (c) {
                            for (var d = 0; d < c; d += a)
                                this._doProcessBlock(r, d);
                            n = r.splice(0, c),
                            o.sigBytes -= u
                        }
                        return new l.init(n,u)
                    },
                    clone: function() {
                        var e = c.clone.call(this);
                        return e._data = this._data.clone(),
                        e
                    },
                    _minBufferSize: 0
                })
                  , g = (s.Hasher = m.extend({
                    cfg: c.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e),
                        this.reset()
                    },
                    reset: function() {
                        m.reset.call(this),
                        this._doReset()
                    },
                    update: function(e) {
                        return this._append(e),
                        this._process(),
                        this
                    },
                    finalize: function(e) {
                        return e && this._append(e),
                        this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, n) {
                            return new e.init(n).finalize(t)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new g.HMAC.init(e,n).finalize(t)
                        }
                    }
                }),
                a.algo = {});
                return a
            }(Math),
            o)
        },
        82141: function(e, t, n) {
            var o;
            e.exports = (o = n(39305),
            function(e) {
                var t = o
                  , n = t.lib
                  , r = n.WordArray
                  , i = n.Hasher
                  , a = t.algo
                  , s = []
                  , c = [];
                !function() {
                    function t(t) {
                        for (var n = e.sqrt(t), o = 2; o <= n; o++)
                            if (!(t % o))
                                return !1;
                        return !0
                    }
                    function n(e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }
                    for (var o = 2, r = 0; r < 64; )
                        t(o) && (r < 8 && (s[r] = n(e.pow(o, .5))),
                        c[r] = n(e.pow(o, 1 / 3)),
                        r++),
                        o++
                }();
                var l = []
                  , u = a.SHA256 = i.extend({
                    _doReset: function() {
                        this._hash = new r.init(s.slice(0))
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, o = n[0], r = n[1], i = n[2], a = n[3], s = n[4], u = n[5], d = n[6], f = n[7], p = 0; p < 64; p++) {
                            if (p < 16)
                                l[p] = 0 | e[t + p];
                            else {
                                var m = l[p - 15]
                                  , g = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3
                                  , h = l[p - 2]
                                  , y = (h << 15 | h >>> 17) ^ (h << 13 | h >>> 19) ^ h >>> 10;
                                l[p] = g + l[p - 7] + y + l[p - 16]
                            }
                            var v = o & r ^ o & i ^ r & i
                              , b = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22)
                              , w = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & u ^ ~s & d) + c[p] + l[p];
                            f = d,
                            d = u,
                            u = s,
                            s = a + w | 0,
                            a = i,
                            i = r,
                            r = o,
                            o = w + (b + v) | 0
                        }
                        n[0] = n[0] + o | 0,
                        n[1] = n[1] + r | 0,
                        n[2] = n[2] + i | 0,
                        n[3] = n[3] + a | 0,
                        n[4] = n[4] + s | 0,
                        n[5] = n[5] + u | 0,
                        n[6] = n[6] + d | 0,
                        n[7] = n[7] + f | 0
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , n = t.words
                          , o = 8 * this._nDataBytes
                          , r = 8 * t.sigBytes;
                        return n[r >>> 5] |= 128 << 24 - r % 32,
                        n[14 + (r + 64 >>> 9 << 4)] = e.floor(o / 4294967296),
                        n[15 + (r + 64 >>> 9 << 4)] = o,
                        t.sigBytes = 4 * n.length,
                        this._process(),
                        this._hash
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(),
                        e
                    }
                });
                t.SHA256 = i._createHelper(u),
                t.HmacSHA256 = i._createHmacHelper(u)
            }(Math),
            o.SHA256)
        },
        40314: (e,t,n)=>{
            e.exports = n(69304)
        }
        ,
        82269: ()=>{
            !function(e) {
                var t = !0
                  , n = 10
                  , o = ""
                  , r = 0
                  , i = ""
                  , a = null
                  , s = ""
                  , c = !1
                  , l = {
                    resize: 1,
                    click: 1
                }
                  , u = 128
                  , d = !0
                  , f = 1
                  , p = "bodyOffset"
                  , m = p
                  , g = !0
                  , h = ""
                  , y = {}
                  , v = 32
                  , b = null
                  , w = !1
                  , E = "[iFrameSizer]"
                  , S = E.length
                  , x = ""
                  , C = {
                    max: 1,
                    min: 1,
                    bodyScroll: 1,
                    documentElementScroll: 1
                }
                  , I = "child"
                  , O = !0
                  , T = e.parent
                  , _ = "*"
                  , k = 0
                  , R = !1
                  , N = null
                  , M = 16
                  , A = 1
                  , D = "scroll"
                  , F = D
                  , z = e
                  , P = function() {
                    J("MessageCallback function not defined")
                }
                  , L = function() {}
                  , H = function() {};
                function j(t, n, o) {
                    "addEventListener"in e ? t.addEventListener(n, o, !1) : "attachEvent"in e && t.attachEvent("on" + n, o)
                }
                function W(t, n, o) {
                    "removeEventListener"in e ? t.removeEventListener(n, o, !1) : "detachEvent"in e && t.detachEvent("on" + n, o)
                }
                function B(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }
                var U = Date.now || function() {
                    return (new Date).getTime()
                }
                ;
                function q(e) {
                    return E + "[" + x + "] " + e
                }
                function $(t) {
                    w && "object" == typeof e.console && console.log(q(t))
                }
                function J(t) {
                    "object" == typeof e.console && console.warn(q(t))
                }
                function V() {
                    var n, a, l;
                    !function() {
                        function e(e) {
                            return "true" === e
                        }
                        var n = h.substr(S).split(":");
                        x = n[0],
                        r = void 0 !== n[1] ? Number(n[1]) : r,
                        c = void 0 !== n[2] ? e(n[2]) : c,
                        w = void 0 !== n[3] ? e(n[3]) : w,
                        v = void 0 !== n[4] ? Number(n[4]) : v,
                        t = void 0 !== n[6] ? e(n[6]) : t,
                        i = n[7],
                        m = void 0 !== n[8] ? n[8] : m,
                        o = n[9],
                        s = n[10],
                        k = void 0 !== n[11] ? Number(n[11]) : k,
                        y.enable = void 0 !== n[12] && e(n[12]),
                        I = void 0 !== n[13] ? n[13] : I,
                        F = void 0 !== n[14] ? n[14] : F
                    }(),
                    $("Initialising iFrame (" + location.href + ")"),
                    "iFrameResizer"in e && Object === e.iFrameResizer.constructor && (l = e.iFrameResizer,
                    $("Reading data from page: " + JSON.stringify(l)),
                    P = "messageCallback"in l ? l.messageCallback : P,
                    L = "readyCallback"in l ? l.readyCallback : L,
                    _ = "targetOrigin"in l ? l.targetOrigin : _,
                    m = "heightCalculationMethod"in l ? l.heightCalculationMethod : m,
                    F = "widthCalculationMethod"in l ? l.widthCalculationMethod : F),
                    $("TargetOrigin for parent set to: " + _),
                    void 0 === i && (i = r + "px"),
                    Y("margin", (-1 !== (a = i).indexOf("-") && (J("Negative CSS value ignored for margin"),
                    a = ""),
                    a)),
                    Y("background", o),
                    Y("padding", s),
                    (n = document.createElement("div")).style.clear = "both",
                    n.style.display = "block",
                    document.body.appendChild(n),
                    K(),
                    Z(),
                    document.documentElement.style.height = "",
                    document.body.style.height = "",
                    $('HTML & body height set to "auto"'),
                    $("Enable public methods"),
                    z.parentIFrame = {
                        autoResize: function(e) {
                            return !0 === e && !1 === t ? (t = !0,
                            ee()) : !1 === e && !0 === t && (t = !1,
                            te()),
                            t
                        },
                        close: function() {
                            Ce(0, 0, "close"),
                            $("Disable outgoing messages"),
                            O = !1,
                            $("Remove event listener: Message"),
                            W(e, "message", Ie),
                            !0 === t && te()
                        },
                        getId: function() {
                            return x
                        },
                        getPageInfo: function(e) {
                            "function" == typeof e ? (H = e,
                            Ce(0, 0, "pageInfo")) : (H = function() {}
                            ,
                            Ce(0, 0, "pageInfoStop"))
                        },
                        moveToAnchor: function(e) {
                            y.findTarget(e)
                        },
                        reset: function() {
                            xe("parentIFrame.reset")
                        },
                        scrollTo: function(e, t) {
                            Ce(t, e, "scrollTo")
                        },
                        scrollToOffset: function(e, t) {
                            Ce(t, e, "scrollToOffset")
                        },
                        sendMessage: function(e, t) {
                            Ce(0, 0, "message", JSON.stringify(e), t)
                        },
                        setHeightCalculationMethod: function(e) {
                            m = e,
                            K()
                        },
                        setWidthCalculationMethod: function(e) {
                            F = e,
                            Z()
                        },
                        setTargetOrigin: function(e) {
                            $("Set targetOrigin: " + e),
                            _ = e
                        },
                        size: function(e, t) {
                            we("size", "parentIFrame.size(" + (e || "") + (t ? "," + t : "") + ")", e, t)
                        }
                    },
                    ee(),
                    y = function() {
                        function t(t) {
                            var n = t.split("#")[1] || t
                              , o = decodeURIComponent(n)
                              , r = document.getElementById(o) || document.getElementsByName(o)[0];
                            void 0 !== r ? function(t) {
                                var o, r, i = (o = t.getBoundingClientRect(),
                                r = {
                                    x: void 0 !== e.pageXOffset ? e.pageXOffset : document.documentElement.scrollLeft,
                                    y: void 0 !== e.pageYOffset ? e.pageYOffset : document.documentElement.scrollTop
                                },
                                {
                                    x: parseInt(o.left, 10) + parseInt(r.x, 10),
                                    y: parseInt(o.top, 10) + parseInt(r.y, 10)
                                });
                                $("Moving to in page link (#" + n + ") at x: " + i.x + " y: " + i.y),
                                Ce(i.y, i.x, "scrollToOffset")
                            }(r) : ($("In page link (#" + n + ") not found in iFrame, so sending to parent"),
                            Ce(0, 0, "inPageLink", "#" + n))
                        }
                        function n() {
                            "" !== location.hash && "#" !== location.hash && t(location.href)
                        }
                        return y.enable ? Array.prototype.forEach && document.querySelectorAll ? ($("Setting up location.hash handlers"),
                        Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), (function(e) {
                            "#" !== e.getAttribute("href") && j(e, "click", (function(e) {
                                e.preventDefault(),
                                t(this.getAttribute("href"))
                            }
                            ))
                        }
                        )),
                        j(e, "hashchange", n),
                        setTimeout(n, u)) : J("In page linking not fully supported in this browser! (See README.md for IE8 workaround)") : $("In page linking not enabled"),
                        {
                            findTarget: t
                        }
                    }(),
                    we("init", "Init message from host page"),
                    L()
                }
                function Y(e, t) {
                    void 0 !== t && "" !== t && "null" !== t && (document.body.style[e] = t,
                    $("Body " + e + ' set to "' + t + '"'))
                }
                function X(t) {
                    function n() {
                        we(t.eventName, t.eventType)
                    }
                    var o = {
                        add: function(t) {
                            j(e, t, n)
                        },
                        remove: function(t) {
                            W(e, t, n)
                        }
                    };
                    t.eventNames && Array.prototype.map ? (t.eventName = t.eventNames[0],
                    t.eventNames.map(o[t.method])) : o[t.method](t.eventName),
                    $(B(t.method) + " event listener: " + t.eventType)
                }
                function G(e) {
                    X({
                        method: e,
                        eventType: "Animation Start",
                        eventNames: ["animationstart", "webkitAnimationStart"]
                    }),
                    X({
                        method: e,
                        eventType: "Animation Iteration",
                        eventNames: ["animationiteration", "webkitAnimationIteration"]
                    }),
                    X({
                        method: e,
                        eventType: "Animation End",
                        eventNames: ["animationend", "webkitAnimationEnd"]
                    }),
                    X({
                        method: e,
                        eventType: "Input",
                        eventName: "input"
                    }),
                    X({
                        method: e,
                        eventType: "Mouse Up",
                        eventName: "mouseup"
                    }),
                    X({
                        method: e,
                        eventType: "Mouse Down",
                        eventName: "mousedown"
                    }),
                    X({
                        method: e,
                        eventType: "Orientation Change",
                        eventName: "orientationchange"
                    }),
                    X({
                        method: e,
                        eventType: "Print",
                        eventName: ["afterprint", "beforeprint"]
                    }),
                    X({
                        method: e,
                        eventType: "Ready State Change",
                        eventName: "readystatechange"
                    }),
                    X({
                        method: e,
                        eventType: "Touch Start",
                        eventName: "touchstart"
                    }),
                    X({
                        method: e,
                        eventType: "Touch End",
                        eventName: "touchend"
                    }),
                    X({
                        method: e,
                        eventType: "Touch Cancel",
                        eventName: "touchcancel"
                    }),
                    X({
                        method: e,
                        eventType: "Transition Start",
                        eventNames: ["transitionstart", "webkitTransitionStart", "MSTransitionStart", "oTransitionStart", "otransitionstart"]
                    }),
                    X({
                        method: e,
                        eventType: "Transition Iteration",
                        eventNames: ["transitioniteration", "webkitTransitionIteration", "MSTransitionIteration", "oTransitionIteration", "otransitioniteration"]
                    }),
                    X({
                        method: e,
                        eventType: "Transition End",
                        eventNames: ["transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd", "otransitionend"]
                    }),
                    "child" === I && X({
                        method: e,
                        eventType: "IFrame Resized",
                        eventName: "resize"
                    })
                }
                function Q(e, t, n, o) {
                    return t !== e && (e in n || (J(e + " is not a valid option for " + o + "CalculationMethod."),
                    e = t),
                    $(o + ' calculation method set to "' + e + '"')),
                    e
                }
                function K() {
                    m = Q(m, p, ye, "height")
                }
                function Z() {
                    F = Q(F, D, ve, "width")
                }
                function ee() {
                    var n;
                    !0 === t ? (G("add"),
                    n = 0 > v,
                    e.MutationObserver || e.WebKitMutationObserver ? n ? ne() : a = function() {
                        function t(e) {
                            function t(e) {
                                !1 === e.complete && ($("Attach listeners to " + e.src),
                                e.addEventListener("load", r, !1),
                                e.addEventListener("error", i, !1),
                                s.push(e))
                            }
                            "attributes" === e.type && "src" === e.attributeName ? t(e.target) : "childList" === e.type && Array.prototype.forEach.call(e.target.querySelectorAll("img"), t)
                        }
                        function n(e) {
                            $("Remove listeners from " + e.src),
                            e.removeEventListener("load", r, !1),
                            e.removeEventListener("error", i, !1),
                            function(e) {
                                s.splice(s.indexOf(e), 1)
                            }(e)
                        }
                        function o(e, t, o) {
                            n(e.target),
                            we(t, o + ": " + e.target.src, void 0, void 0)
                        }
                        function r(e) {
                            o(e, "imageLoad", "Image loaded")
                        }
                        function i(e) {
                            o(e, "imageLoadFailed", "Image load failed")
                        }
                        function a(e) {
                            we("mutationObserver", "mutationObserver: " + e[0].target + " " + e[0].type),
                            e.forEach(t)
                        }
                        var s = []
                          , c = e.MutationObserver || e.WebKitMutationObserver
                          , l = function() {
                            var e = document.querySelector("body");
                            return l = new c(a),
                            $("Create body MutationObserver"),
                            l.observe(e, {
                                attributes: !0,
                                attributeOldValue: !1,
                                characterData: !0,
                                characterDataOldValue: !1,
                                childList: !0,
                                subtree: !0
                            }),
                            l
                        }();
                        return {
                            disconnect: function() {
                                "disconnect"in l && ($("Disconnect body MutationObserver"),
                                l.disconnect(),
                                s.forEach(n))
                            }
                        }
                    }() : ($("MutationObserver not supported in this browser!"),
                    ne())) : $("Auto Resize disabled")
                }
                function te() {
                    G("remove"),
                    null !== a && a.disconnect(),
                    clearInterval(b)
                }
                function ne() {
                    0 !== v && ($("setInterval: " + v + "ms"),
                    b = setInterval((function() {
                        we("interval", "setInterval: " + v)
                    }
                    ), Math.abs(v)))
                }
                function oe(e, t) {
                    var o = 0;
                    return t = t || document.body,
                    o = "defaultView"in document && "getComputedStyle"in document.defaultView ? null !== (o = document.defaultView.getComputedStyle(t, null)) ? o[e] : 0 : function(e) {
                        if (/^\d+(px)?$/i.test(e))
                            return parseInt(e, n);
                        var o = t.style.left
                          , r = t.runtimeStyle.left;
                        return t.runtimeStyle.left = t.currentStyle.left,
                        t.style.left = e || 0,
                        e = t.style.pixelLeft,
                        t.style.left = o,
                        t.runtimeStyle.left = r,
                        e
                    }(t.currentStyle[e]),
                    parseInt(o, n)
                }
                function re(e) {
                    e > M / 2 && $("Event throttle increased to " + (M = 2 * e) + "ms")
                }
                function ie(e, t) {
                    for (var n = t.length, o = 0, r = 0, i = B(e), a = U(), s = 0; s < n; s++)
                        (o = t[s].getBoundingClientRect()[e] + oe("margin" + i, t[s])) > r && (r = o);
                    return a = U() - a,
                    $("Parsed " + n + " HTML elements"),
                    $("Element position calculated in " + a + "ms"),
                    re(a),
                    r
                }
                function ae(e) {
                    return [e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e.documentElementScroll()]
                }
                function se(e, t) {
                    var n = document.querySelectorAll("[" + t + "]");
                    return 0 === n.length ? (J("No tagged elements (" + t + ") found on page"),
                    f) : ie(e, n)
                }
                function ce(e, t) {
                    var n = document.querySelectorAll("[" + t + "]");
                    return 0 === n.length ? (J("No tagged elements (" + t + ") found on page"),
                    f) : function(e, t) {
                        for (var n = t.length, o = 0, r = 0, i = U(), a = 0; a < n; a++)
                            (o = t[a].getBoundingClientRect()[e]) > r && (r = o);
                        return i = U() - i,
                        $("Parsed " + n + " HTML elements"),
                        $("Element position calculated in " + i + "ms"),
                        re(i),
                        r
                    }(e, n)
                }
                function le() {
                    return document.querySelectorAll("body *")
                }
                var ue, de, fe, pe, me, ge, he, ye = {
                    bodyOffset: function() {
                        return document.body.offsetHeight + oe("marginTop") + oe("marginBottom")
                    },
                    offset: function() {
                        return ye.bodyOffset()
                    },
                    bodyScroll: function() {
                        return document.body.scrollHeight
                    },
                    documentElementOffset: function() {
                        return document.documentElement.offsetHeight
                    },
                    documentElementScroll: function() {
                        return document.documentElement.scrollHeight
                    },
                    max: function() {
                        return Math.max.apply(null, ae(ye))
                    },
                    min: function() {
                        return Math.min.apply(null, ae(ye))
                    },
                    grow: function() {
                        return ye.max()
                    },
                    lowestElement: function() {
                        return Math.max(ye.bodyOffset(), ie("bottom", le()))
                    },
                    taggedElement: function() {
                        return se("bottom", "data-iframe-height")
                    },
                    taggedElementHeight: function() {
                        return ce("height", "data-iframe-height")
                    }
                }, ve = {
                    bodyScroll: function() {
                        return document.body.scrollWidth
                    },
                    bodyOffset: function() {
                        return document.body.offsetWidth
                    },
                    documentElementScroll: function() {
                        return document.documentElement.scrollWidth
                    },
                    documentElementOffset: function() {
                        return document.documentElement.offsetWidth
                    },
                    scroll: function() {
                        return Math.max(ve.bodyScroll(), ve.documentElementScroll())
                    },
                    max: function() {
                        return Math.max.apply(null, ae(ve))
                    },
                    min: function() {
                        return Math.min.apply(null, ae(ve))
                    },
                    rightMostElement: function() {
                        return ie("right", le())
                    },
                    taggedElement: function() {
                        return se("right", "data-iframe-width")
                    },
                    taggedElementWidth: function() {
                        return ce("width", "data-iframe-width")
                    }
                }, be = (ue = function(e, t, n, o) {
                    var r, i;
                    !function() {
                        function e(e, t) {
                            return !(Math.abs(e - t) <= k)
                        }
                        return r = void 0 !== n ? n : ye[m](),
                        i = void 0 !== o ? o : ve[F](),
                        e(f, r) || c && e(A, i)
                    }() && "init" !== e ? !(e in {
                        init: 1,
                        interval: 1,
                        size: 1
                    }) && (m in C || c && F in C) ? xe(t) : e in {
                        interval: 1
                    } || $("No change in size detected") : (Ee(),
                    Ce(f = r, A = i, e))
                }
                ,
                me = null,
                ge = 0,
                he = function() {
                    ge = U(),
                    me = null,
                    pe = ue.apply(de, fe),
                    me || (de = fe = null)
                }
                ,
                function() {
                    var e = U();
                    ge || (ge = e);
                    var t = M - (e - ge);
                    return de = this,
                    fe = arguments,
                    t <= 0 || t > M ? (me && (clearTimeout(me),
                    me = null),
                    ge = e,
                    pe = ue.apply(de, fe),
                    me || (de = fe = null)) : me || (me = setTimeout(he, t)),
                    pe
                }
                );
                function we(e, t, n, o) {
                    R && e in l ? $("Trigger event cancelled: " + e) : (e in {
                        reset: 1,
                        resetPage: 1,
                        init: 1
                    } || $("Trigger event: " + t),
                    be(e, t, n, o))
                }
                function Ee() {
                    R || (R = !0,
                    $("Trigger event lock on")),
                    clearTimeout(N),
                    N = setTimeout((function() {
                        R = !1,
                        $("Trigger event lock off"),
                        $("--")
                    }
                    ), u)
                }
                function Se(e) {
                    f = ye[m](),
                    A = ve[F](),
                    Ce(f, A, e)
                }
                function xe(e) {
                    var t = m;
                    m = p,
                    $("Reset trigger event: " + e),
                    Ee(),
                    Se("reset"),
                    m = t
                }
                function Ce(e, t, n, o, r) {
                    var i;
                    !0 === O && (void 0 === r ? r = _ : $("Message targetOrigin: " + r),
                    $("Sending message to host page (" + (i = x + ":" + e + ":" + t + ":" + n + (void 0 !== o ? ":" + o : "")) + ")"),
                    T.postMessage(E + i, r))
                }
                function Ie(t) {
                    function n() {
                        return t.data.split("]")[1].split(":")[0]
                    }
                    function o() {
                        return t.data.substr(t.data.indexOf(":") + 1)
                    }
                    function r() {
                        return t.data.split(":")[2]in {
                            true: 1,
                            false: 1
                        }
                    }
                    E === ("" + t.data).substr(0, S) && (!1 === d ? function() {
                        switch (n()) {
                        case "reset":
                            g ? $("Page reset ignored by init") : ($("Page size reset by host page"),
                            Se("resetPage"));
                            break;
                        case "resize":
                            we("resizeParent", "Parent window requested size check");
                            break;
                        case "moveToAnchor":
                            a = o(),
                            y.findTarget(a);
                            break;
                        case "message":
                            $("MessageCallback called from parent: " + (i = o())),
                            P(JSON.parse(i)),
                            $(" --");
                            break;
                        case "pageInfo":
                            !function() {
                                var e = o();
                                $("PageInfoFromParent called from parent: " + e),
                                H(JSON.parse(e)),
                                $(" --")
                            }();
                            break;
                        default:
                            "iFrameResize"in e || r() || J("Unexpected message (" + t.data + ")")
                        }
                        var i, a
                    }() : r() ? (h = t.data,
                    T = t.source,
                    V(),
                    d = !1,
                    setTimeout((function() {
                        g = !1
                    }
                    ), u)) : $('Ignored message of type "' + n() + '". Received before initialization.'))
                }
                j(e, "message", Ie),
                "loading" !== document.readyState && e.parent.postMessage("[iFrameResizerChild]Ready", "*")
            }(window || {})
        }
        ,
        90774: (e,t)=>{
            var n, o, r;
            !function(i) {
                var a = 0
                  , s = !1
                  , c = !1
                  , l = "[iFrameSizer]"
                  , u = l.length
                  , d = null
                  , f = i.requestAnimationFrame
                  , p = {
                    max: 1,
                    scroll: 1,
                    bodyScroll: 1,
                    documentElementScroll: 1
                }
                  , m = {}
                  , g = null
                  , h = {
                    autoResize: !0,
                    bodyBackground: null,
                    bodyMargin: null,
                    bodyMarginV1: 8,
                    bodyPadding: null,
                    checkOrigin: !0,
                    inPageLinks: !1,
                    enablePublicMethods: !0,
                    heightCalculationMethod: "bodyOffset",
                    id: "iFrameResizer",
                    interval: 32,
                    log: !1,
                    maxHeight: 1 / 0,
                    maxWidth: 1 / 0,
                    minHeight: 0,
                    minWidth: 0,
                    resizeFrom: "parent",
                    scrolling: !1,
                    sizeHeight: !0,
                    sizeWidth: !1,
                    tolerance: 0,
                    widthCalculationMethod: "scroll",
                    closedCallback: function() {},
                    initCallback: function() {},
                    messageCallback: function() {
                        S("MessageCallback function not defined")
                    },
                    resizedCallback: function() {},
                    scrollCallback: function() {
                        return !0
                    }
                };
                function y(e, t, n) {
                    "addEventListener"in i ? e.addEventListener(t, n, !1) : "attachEvent"in i && e.attachEvent("on" + t, n)
                }
                function v(e, t, n) {
                    "removeEventListener"in i ? e.removeEventListener(t, n, !1) : "detachEvent"in i && e.detachEvent("on" + t, n)
                }
                function b(e) {
                    return m[e] ? m[e].log : s
                }
                function w(e, t) {
                    x("log", e, t, b(e))
                }
                function E(e, t) {
                    x("info", e, t, b(e))
                }
                function S(e, t) {
                    x("warn", e, t, !0)
                }
                function x(e, t, n, o) {
                    !0 === o && "object" == typeof i.console && console[e](function(e) {
                        return l + "[" + function(e) {
                            var t = "Host page: " + e;
                            return i.top !== i.self && (t = i.parentIFrame && i.parentIFrame.getId ? i.parentIFrame.getId() + ": " + e : "Nested host page: " + e),
                            t
                        }(e) + "]"
                    }(t), n)
                }
                function C(e) {
                    function t() {
                        n("Height"),
                        n("Width"),
                        M((function() {
                            N(x),
                            _(C)
                        }
                        ), x, "init")
                    }
                    function n(e) {
                        var t = Number(m[C]["max" + e])
                          , n = Number(m[C]["min" + e])
                          , o = e.toLowerCase()
                          , r = Number(x[o]);
                        w(C, "Checking " + o + " is in range " + n + "-" + t),
                        r < n && (r = n,
                        w(C, "Set " + o + " to min value")),
                        r > t && (r = t,
                        w(C, "Set " + o + " to max value")),
                        x[o] = "" + r
                    }
                    function o(e) {
                        return b.substr(b.indexOf(":") + 7 + e)
                    }
                    function r(e, t) {
                        z((function() {
                            var n, o;
                            A("Send Page Info", "pageInfo:" + (n = document.body.getBoundingClientRect(),
                            o = x.iframe.getBoundingClientRect(),
                            JSON.stringify({
                                iframeHeight: o.height,
                                iframeWidth: o.width,
                                clientHeight: Math.max(document.documentElement.clientHeight, i.innerHeight || 0),
                                clientWidth: Math.max(document.documentElement.clientWidth, i.innerWidth || 0),
                                offsetTop: parseInt(o.top - n.top, 10),
                                offsetLeft: parseInt(o.left - n.left, 10),
                                scrollTop: i.pageYOffset,
                                scrollLeft: i.pageXOffset
                            })), e, t)
                        }
                        ), 32)
                    }
                    function a(e) {
                        var t = e.getBoundingClientRect();
                        return T(C),
                        {
                            x: Math.floor(Number(t.left) + Number(d.x)),
                            y: Math.floor(Number(t.top) + Number(d.y))
                        }
                    }
                    function s(e) {
                        var t = e ? a(x.iframe) : {
                            x: 0,
                            y: 0
                        }
                          , n = {
                            x: Number(x.width) + t.x,
                            y: Number(x.height) + t.y
                        };
                        w(C, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"),
                        i.top !== i.self ? i.parentIFrame ? i.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y) : S(C, "Unable to scroll to requested position, window.parentIFrame not found") : (d = n,
                        c(),
                        w(C, "--"))
                    }
                    function c() {
                        !1 !== f("scrollCallback", d) ? _(C) : k()
                    }
                    function f(e, t) {
                        return I(C, e, t)
                    }
                    var p, g, h, b = e.data, x = {}, C = null;
                    "[iFrameResizerChild]Ready" === b ? function() {
                        for (var e in m)
                            A("iFrame requested init", D(e), document.getElementById(e), e)
                    }() : l === ("" + b).substr(0, u) && b.substr(u).split(":")[0]in m ? (h = b.substr(u).split(":"),
                    x = {
                        iframe: m[h[0]].iframe,
                        id: h[0],
                        height: h[1],
                        width: h[2],
                        type: h[3]
                    },
                    C = x.id,
                    (g = x.type in {
                        true: 1,
                        false: 1,
                        undefined: 1
                    }) && w(C, "Ignoring init message from meta parent page"),
                    !g && function(e) {
                        var t = !0;
                        return m[e] || (t = !1,
                        S(x.type + " No settings for " + e + ". Message was: " + b)),
                        t
                    }(C) && (w(C, "Received: " + b),
                    p = !0,
                    null === x.iframe && (S(C, "IFrame (" + x.id + ") not found"),
                    p = !1),
                    p && function() {
                        var t, n = e.origin, o = m[C].checkOrigin;
                        if (o && "" + n != "null" && !(o.constructor === Array ? function() {
                            var e = 0
                              , t = !1;
                            for (w(C, "Checking connection is from allowed list of origins: " + o); e < o.length; e++)
                                if (o[e] === n) {
                                    t = !0;
                                    break
                                }
                            return t
                        }() : (t = m[C].remoteHost,
                        w(C, "Checking connection is from: " + t),
                        n === t)))
                            throw new Error("Unexpected message received from: " + n + " for " + x.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                        return !0
                    }() && function() {
                        switch (m[C].firstRun && (m[C].firstRun = !1),
                        x.type) {
                        case "close":
                            O(x.iframe);
                            break;
                        case "message":
                            e = o(6),
                            w(C, "MessageCallback passed: {iframe: " + x.iframe.id + ", message: " + e + "}"),
                            f("messageCallback", {
                                iframe: x.iframe,
                                message: JSON.parse(e)
                            }),
                            w(C, "--");
                            break;
                        case "scrollTo":
                            s(!1);
                            break;
                        case "scrollToOffset":
                            s(!0);
                            break;
                        case "pageInfo":
                            r(m[C].iframe, C),
                            function() {
                                function e(e, o) {
                                    function a() {
                                        m[n] ? r(m[n].iframe, n) : t()
                                    }
                                    ["scroll", "resize"].forEach((function(t) {
                                        w(n, e + t + " listener for sendPageInfo"),
                                        o(i, t, a)
                                    }
                                    ))
                                }
                                function t() {
                                    e("Remove ", v)
                                }
                                var n = C;
                                e("Add ", y),
                                m[n].stopPageInfo = t
                            }();
                            break;
                        case "pageInfoStop":
                            m[C] && m[C].stopPageInfo && (m[C].stopPageInfo(),
                            delete m[C].stopPageInfo);
                            break;
                        case "inPageLink":
                            !function(e) {
                                var t, n = e.split("#")[1] || "", o = decodeURIComponent(n), r = document.getElementById(o) || document.getElementsByName(o)[0];
                                r ? (t = a(r),
                                w(C, "Moving to in page link (#" + n + ") at x: " + t.x + " y: " + t.y),
                                d = {
                                    x: t.x,
                                    y: t.y
                                },
                                c(),
                                w(C, "--")) : i.top !== i.self ? i.parentIFrame ? i.parentIFrame.moveToAnchor(n) : w(C, "In page link #" + n + " not found and window.parentIFrame not found") : w(C, "In page link #" + n + " not found")
                            }(o(9));
                            break;
                        case "reset":
                            R(x);
                            break;
                        case "init":
                            t(),
                            f("initCallback", x.iframe),
                            f("resizedCallback", x);
                            break;
                        default:
                            t(),
                            f("resizedCallback", x)
                        }
                        var e
                    }())) : E(C, "Ignored: " + b)
                }
                function I(e, t, n) {
                    var o = null
                      , r = null;
                    if (m[e]) {
                        if ("function" != typeof (o = m[e][t]))
                            throw new TypeError(t + " on iFrame[" + e + "] is not a function");
                        r = o(n)
                    }
                    return r
                }
                function O(e) {
                    var t = e.id;
                    w(t, "Removing iFrame: " + t),
                    e.parentNode.removeChild(e),
                    I(t, "closedCallback", t),
                    w(t, "--"),
                    delete m[t]
                }
                function T(e) {
                    null === d && w(e, "Get page position: " + (d = {
                        x: void 0 !== i.pageXOffset ? i.pageXOffset : document.documentElement.scrollLeft,
                        y: void 0 !== i.pageYOffset ? i.pageYOffset : document.documentElement.scrollTop
                    }).x + "," + d.y)
                }
                function _(e) {
                    null !== d && (i.scrollTo(d.x, d.y),
                    w(e, "Set page position: " + d.x + "," + d.y),
                    k())
                }
                function k() {
                    d = null
                }
                function R(e) {
                    w(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")),
                    T(e.id),
                    M((function() {
                        N(e),
                        A("reset", "reset", e.iframe, e.id)
                    }
                    ), e, "reset")
                }
                function N(e) {
                    function t(t) {
                        !function(t) {
                            e.iframe.style[t] = e[t] + "px",
                            w(e.id, "IFrame (" + n + ") " + t + " set to " + e[t] + "px")
                        }(t),
                        function(t) {
                            c || "0" !== e[t] || (c = !0,
                            w(n, "Hidden iFrame detected, creating visibility listener"),
                            function() {
                                function e() {
                                    function e(e) {
                                        function t(t) {
                                            return "0px" === m[e].iframe.style[t]
                                        }
                                        null !== m[e].iframe.offsetParent && (t("height") || t("width")) && A("Visibility change", "resize", m[e].iframe, e)
                                    }
                                    for (var t in m)
                                        e(t)
                                }
                                var t, n = i.MutationObserver || i.WebKitMutationObserver;
                                n && (t = document.querySelector("body"),
                                new n((function(t) {
                                    w("window", "Mutation observed: " + t[0].target + " " + t[0].type),
                                    z(e, 16)
                                }
                                )).observe(t, {
                                    attributes: !0,
                                    attributeOldValue: !1,
                                    characterData: !0,
                                    characterDataOldValue: !1,
                                    childList: !0,
                                    subtree: !0
                                }))
                            }())
                        }(t)
                    }
                    var n = e.iframe.id;
                    m[n] && (m[n].sizeHeight && t("height"),
                    m[n].sizeWidth && t("width"))
                }
                function M(e, t, n) {
                    n !== t.type && f ? (w(t.id, "Requesting animation frame"),
                    f(e)) : e()
                }
                function A(e, t, n, o) {
                    var r;
                    o = o || n.id,
                    m[o] && (n && "contentWindow"in n && null !== n.contentWindow ? (w(o, "[" + e + "] Sending msg to iframe[" + o + "] (" + t + ") targetOrigin: " + (r = m[o].targetOrigin)),
                    n.contentWindow.postMessage(l + t, r)) : (E(o, "[" + e + "] IFrame(" + o + ") not found"),
                    m[o] && delete m[o]))
                }
                function D(e) {
                    return e + ":" + m[e].bodyMarginV1 + ":" + m[e].sizeWidth + ":" + m[e].log + ":" + m[e].interval + ":" + m[e].enablePublicMethods + ":" + m[e].autoResize + ":" + m[e].bodyMargin + ":" + m[e].heightCalculationMethod + ":" + m[e].bodyBackground + ":" + m[e].bodyPadding + ":" + m[e].tolerance + ":" + m[e].inPageLinks + ":" + m[e].resizeFrom + ":" + m[e].widthCalculationMethod
                }
                function F(e, t) {
                    var n, o = function(n) {
                        var o;
                        return "" === n && (e.id = (o = t && t.id || h.id + a++,
                        null !== document.getElementById(o) && (o += a++),
                        n = o),
                        s = (t || {}).log,
                        w(n, "Added missing iframe ID: " + n + " (" + e.src + ")")),
                        n
                    }(e.id);
                    o in m && "iFrameResizer"in e ? S(o, "Ignored iFrame, already setup.") : (function(t) {
                        var n;
                        t = t || {},
                        m[o] = {
                            firstRun: !0,
                            iframe: e,
                            remoteHost: e.src.split("/").slice(0, 3).join("/")
                        },
                        function(e) {
                            if ("object" != typeof e)
                                throw new TypeError("Options is not an object")
                        }(t),
                        function(e) {
                            for (var t in h)
                                h.hasOwnProperty(t) && (m[o][t] = e.hasOwnProperty(t) ? e[t] : h[t])
                        }(t),
                        m[o].targetOrigin = !0 === m[o].checkOrigin ? "" === (n = m[o].remoteHost) || "file://" === n ? "*" : n : "*"
                    }(t),
                    w(o, "IFrame scrolling " + (m[o].scrolling ? "enabled" : "disabled") + " for " + o),
                    e.style.overflow = !1 === m[o].scrolling ? "hidden" : "auto",
                    e.scrolling = !1 === m[o].scrolling ? "no" : "yes",
                    function() {
                        function t(t) {
                            1 / 0 !== m[o][t] && 0 !== m[o][t] && (e.style[t] = m[o][t] + "px",
                            w(o, "Set " + t + " = " + m[o][t] + "px"))
                        }
                        function n(e) {
                            if (m[o]["min" + e] > m[o]["max" + e])
                                throw new Error("Value for min" + e + " can not be greater than max" + e)
                        }
                        n("Height"),
                        n("Width"),
                        t("maxHeight"),
                        t("minHeight"),
                        t("maxWidth"),
                        t("minWidth")
                    }(),
                    "number" != typeof m[o].bodyMargin && "0" !== m[o].bodyMargin || (m[o].bodyMarginV1 = m[o].bodyMargin,
                    m[o].bodyMargin = m[o].bodyMargin + "px"),
                    n = D(o),
                    y(e, "load", (function() {
                        var t, r;
                        A("iFrame.onload", n, e),
                        t = m[o].firstRun,
                        r = m[o].heightCalculationMethod in p,
                        !t && r && R({
                            iframe: e,
                            height: 0,
                            width: 0,
                            type: "init"
                        })
                    }
                    )),
                    A("init", n, e),
                    Function.prototype.bind && (m[o].iframe.iFrameResizer = {
                        close: O.bind(null, m[o].iframe),
                        resize: A.bind(null, "Window resize", "resize", m[o].iframe),
                        moveToAnchor: function(e) {
                            A("Move to anchor", "inPageLink:" + e, m[o].iframe, o)
                        },
                        sendMessage: function(e) {
                            A("Send Message", "message:" + (e = JSON.stringify(e)), m[o].iframe, o)
                        }
                    }))
                }
                function z(e, t) {
                    null === g && (g = setTimeout((function() {
                        g = null,
                        e()
                    }
                    ), t))
                }
                function P(e) {
                    w("window", "Trigger event: " + e),
                    z((function() {
                        H("Window " + e, "resize")
                    }
                    ), 16)
                }
                function L() {
                    "hidden" !== document.visibilityState && (w("document", "Trigger event: Visiblity change"),
                    z((function() {
                        H("Tab Visable", "resize")
                    }
                    ), 16))
                }
                function H(e, t) {
                    function n(e) {
                        return "parent" === m[e].resizeFrom && m[e].autoResize && !m[e].firstRun
                    }
                    for (var o in m)
                        n(o) && A(e, t, document.getElementById(o), o)
                }
                i.jQuery && (jQuery.fn.iFrameResize = function(e) {
                    return this.filter("iframe").each((function(t, n) {
                        F(n, e)
                    }
                    )).end()
                }
                ),
                o = [],
                void 0 === (r = "function" == typeof (n = function() {
                    function e(e, n) {
                        n && (function() {
                            if (!n.tagName)
                                throw new TypeError("Object is not a valid DOM element");
                            if ("IFRAME" !== n.tagName.toUpperCase())
                                throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">")
                        }(),
                        F(n, e),
                        t.push(n))
                    }
                    var t;
                    return function() {
                        var e, t = ["moz", "webkit", "o", "ms"];
                        for (e = 0; e < t.length && !f; e += 1)
                            f = i[t[e] + "RequestAnimationFrame"];
                        f || w("setup", "RequestAnimationFrame not supported")
                    }(),
                    y(i, "message", C),
                    y(i, "resize", (function() {
                        P("resize")
                    }
                    )),
                    y(document, "visibilitychange", L),
                    y(document, "-webkit-visibilitychange", L),
                    y(i, "focusin", (function() {
                        P("focus")
                    }
                    )),
                    y(i, "focus", (function() {
                        P("focus")
                    }
                    )),
                    function(n, o) {
                        switch (t = [],
                        typeof o) {
                        case "undefined":
                        case "string":
                            Array.prototype.forEach.call(document.querySelectorAll(o || "iframe"), e.bind(void 0, n));
                            break;
                        case "object":
                            e(n, o);
                            break;
                        default:
                            throw new TypeError("Unexpected data type (" + typeof o + ")")
                        }
                        return t
                    }
                }
                ) ? n.apply(t, o) : n) || (e.exports = r)
            }(window || {})
        }
        ,
        69304: (e,t,n)=>{
            t.iframeResizer = n(90774),
            n(82269)
        }
        ,
        36305: ()=>{}
        ,
        68120: (e,t,n)=>{
            var o = n(1483)
              , r = n(18761)
              , i = TypeError;
            e.exports = function(e) {
                if (o(e))
                    return e;
                throw new i(r(e) + " is not a function")
            }
        }
        ,
        63852: (e,t,n)=>{
            var o = n(40735)
              , r = String
              , i = TypeError;
            e.exports = function(e) {
                if (o(e))
                    return e;
                throw new i("Can't set " + r(e) + " as a prototype")
            }
        }
        ,
        96021: (e,t,n)=>{
            var o = n(4815)
              , r = TypeError;
            e.exports = function(e, t) {
                if (o(t, e))
                    return e;
                throw new r("Incorrect invocation")
            }
        }
        ,
        2293: (e,t,n)=>{
            var o = n(71704)
              , r = String
              , i = TypeError;
            e.exports = function(e) {
                if (o(e))
                    return e;
                throw new i(r(e) + " is not an object")
            }
        }
        ,
        86651: (e,t,n)=>{
            var o = n(35599)
              , r = n(33392)
              , i = n(66960)
              , a = function(e) {
                return function(t, n, a) {
                    var s = o(t)
                      , c = i(s);
                    if (0 === c)
                        return !e && -1;
                    var l, u = r(a, c);
                    if (e && n != n) {
                        for (; c > u; )
                            if ((l = s[u++]) != l)
                                return !0
                    } else
                        for (; c > u; u++)
                            if ((e || u in s) && s[u] === n)
                                return e || u || 0;
                    return !e && -1
                }
            };
            e.exports = {
                includes: a(!0),
                indexOf: a(!1)
            }
        }
        ,
        39273: (e,t,n)=>{
            var o = n(20382)
              , r = n(14914)
              , i = TypeError
              , a = Object.getOwnPropertyDescriptor
              , s = o && !function() {
                if (void 0 !== this)
                    return !0;
                try {
                    Object.defineProperty([], "length", {
                        writable: !1
                    }).length = 1
                } catch (e) {
                    return e instanceof TypeError
                }
            }();
            e.exports = s ? function(e, t) {
                if (r(e) && !a(e, "length").writable)
                    throw new i("Cannot set read only .length");
                return e.length = t
            }
            : function(e, t) {
                return e.length = t
            }
        }
        ,
        91278: (e,t,n)=>{
            var o = n(14762)
              , r = o({}.toString)
              , i = o("".slice);
            e.exports = function(e) {
                return i(r(e), 8, -1)
            }
        }
        ,
        26145: (e,t,n)=>{
            var o = n(34338)
              , r = n(1483)
              , i = n(91278)
              , a = n(70001)("toStringTag")
              , s = Object
              , c = "Arguments" === i(function() {
                return arguments
            }());
            e.exports = o ? i : function(e) {
                var t, n, o;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = s(e), a)) ? n : c ? i(t) : "Object" === (o = i(t)) && r(t.callee) ? "Arguments" : o
            }
        }
        ,
        16726: (e,t,n)=>{
            var o = n(55755)
              , r = n(89497)
              , i = n(4961)
              , a = n(25835);
            e.exports = function(e, t, n) {
                for (var s = r(t), c = a.f, l = i.f, u = 0; u < s.length; u++) {
                    var d = s[u];
                    o(e, d) || n && o(n, d) || c(e, d, l(t, d))
                }
            }
        }
        ,
        69037: (e,t,n)=>{
            var o = n(20382)
              , r = n(25835)
              , i = n(57738);
            e.exports = o ? function(e, t, n) {
                return r.f(e, t, i(1, n))
            }
            : function(e, t, n) {
                return e[t] = n,
                e
            }
        }
        ,
        57738: e=>{
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }
        ,
        83864: (e,t,n)=>{
            var o = n(90169)
              , r = n(25835);
            e.exports = function(e, t, n) {
                return n.get && o(n.get, t, {
                    getter: !0
                }),
                n.set && o(n.set, t, {
                    setter: !0
                }),
                r.f(e, t, n)
            }
        }
        ,
        77914: (e,t,n)=>{
            var o = n(1483)
              , r = n(25835)
              , i = n(90169)
              , a = n(82095);
            e.exports = function(e, t, n, s) {
                s || (s = {});
                var c = s.enumerable
                  , l = void 0 !== s.name ? s.name : t;
                if (o(n) && i(n, l, s),
                s.global)
                    c ? e[t] = n : a(t, n);
                else {
                    try {
                        s.unsafe ? e[t] && (c = !0) : delete e[t]
                    } catch (e) {}
                    c ? e[t] = n : r.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !s.nonConfigurable,
                        writable: !s.nonWritable
                    })
                }
                return e
            }
        }
        ,
        82095: (e,t,n)=>{
            var o = n(58389)
              , r = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    r(o, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    o[e] = t
                }
                return t
            }
        }
        ,
        20382: (e,t,n)=>{
            var o = n(28473);
            e.exports = !o((function() {
                return 7 !== Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }
            ))
        }
        ,
        3145: (e,t,n)=>{
            var o = n(58389)
              , r = n(71704)
              , i = o.document
              , a = r(i) && r(i.createElement);
            e.exports = function(e) {
                return a ? i.createElement(e) : {}
            }
        }
        ,
        31091: e=>{
            var t = TypeError;
            e.exports = function(e) {
                if (e > 9007199254740991)
                    throw t("Maximum allowed index exceeded");
                return e
            }
        }
        ,
        11780: e=>{
            e.exports = {
                IndexSizeError: {
                    s: "INDEX_SIZE_ERR",
                    c: 1,
                    m: 1
                },
                DOMStringSizeError: {
                    s: "DOMSTRING_SIZE_ERR",
                    c: 2,
                    m: 0
                },
                HierarchyRequestError: {
                    s: "HIERARCHY_REQUEST_ERR",
                    c: 3,
                    m: 1
                },
                WrongDocumentError: {
                    s: "WRONG_DOCUMENT_ERR",
                    c: 4,
                    m: 1
                },
                InvalidCharacterError: {
                    s: "INVALID_CHARACTER_ERR",
                    c: 5,
                    m: 1
                },
                NoDataAllowedError: {
                    s: "NO_DATA_ALLOWED_ERR",
                    c: 6,
                    m: 0
                },
                NoModificationAllowedError: {
                    s: "NO_MODIFICATION_ALLOWED_ERR",
                    c: 7,
                    m: 1
                },
                NotFoundError: {
                    s: "NOT_FOUND_ERR",
                    c: 8,
                    m: 1
                },
                NotSupportedError: {
                    s: "NOT_SUPPORTED_ERR",
                    c: 9,
                    m: 1
                },
                InUseAttributeError: {
                    s: "INUSE_ATTRIBUTE_ERR",
                    c: 10,
                    m: 1
                },
                InvalidStateError: {
                    s: "INVALID_STATE_ERR",
                    c: 11,
                    m: 1
                },
                SyntaxError: {
                    s: "SYNTAX_ERR",
                    c: 12,
                    m: 1
                },
                InvalidModificationError: {
                    s: "INVALID_MODIFICATION_ERR",
                    c: 13,
                    m: 1
                },
                NamespaceError: {
                    s: "NAMESPACE_ERR",
                    c: 14,
                    m: 1
                },
                InvalidAccessError: {
                    s: "INVALID_ACCESS_ERR",
                    c: 15,
                    m: 1
                },
                ValidationError: {
                    s: "VALIDATION_ERR",
                    c: 16,
                    m: 0
                },
                TypeMismatchError: {
                    s: "TYPE_MISMATCH_ERR",
                    c: 17,
                    m: 1
                },
                SecurityError: {
                    s: "SECURITY_ERR",
                    c: 18,
                    m: 1
                },
                NetworkError: {
                    s: "NETWORK_ERR",
                    c: 19,
                    m: 1
                },
                AbortError: {
                    s: "ABORT_ERR",
                    c: 20,
                    m: 1
                },
                URLMismatchError: {
                    s: "URL_MISMATCH_ERR",
                    c: 21,
                    m: 1
                },
                QuotaExceededError: {
                    s: "QUOTA_EXCEEDED_ERR",
                    c: 22,
                    m: 1
                },
                TimeoutError: {
                    s: "TIMEOUT_ERR",
                    c: 23,
                    m: 1
                },
                InvalidNodeTypeError: {
                    s: "INVALID_NODE_TYPE_ERR",
                    c: 24,
                    m: 1
                },
                DataCloneError: {
                    s: "DATA_CLONE_ERR",
                    c: 25,
                    m: 1
                }
            }
        }
        ,
        89966: e=>{
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        }
        ,
        76170: (e,t,n)=>{
            var o, r, i = n(58389), a = n(89966), s = i.process, c = i.Deno, l = s && s.versions || c && c.version, u = l && l.v8;
            u && (r = (o = u.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])),
            !r && a && (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = a.match(/Chrome\/(\d+)/)) && (r = +o[1]),
            e.exports = r
        }
        ,
        44741: e=>{
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }
        ,
        58223: (e,t,n)=>{
            var o = n(14762)
              , r = Error
              , i = o("".replace)
              , a = String(new r("zxcasd").stack)
              , s = /\n\s*at [^:]*:[^\n]*/
              , c = s.test(a);
            e.exports = function(e, t) {
                if (c && "string" == typeof e && !r.prepareStackTrace)
                    for (; t--; )
                        e = i(e, s, "");
                return e
            }
        }
        ,
        28612: (e,t,n)=>{
            var o = n(58389)
              , r = n(4961).f
              , i = n(69037)
              , a = n(77914)
              , s = n(82095)
              , c = n(16726)
              , l = n(98730);
            e.exports = function(e, t) {
                var n, u, d, f, p, m = e.target, g = e.global, h = e.stat;
                if (n = g ? o : h ? o[m] || s(m, {}) : o[m] && o[m].prototype)
                    for (u in t) {
                        if (f = t[u],
                        d = e.dontCallGetSet ? (p = r(n, u)) && p.value : n[u],
                        !l(g ? u : m + (h ? "." : "#") + u, e.forced) && void 0 !== d) {
                            if (typeof f == typeof d)
                                continue;
                            c(f, d)
                        }
                        (e.sham || d && d.sham) && i(f, "sham", !0),
                        a(n, u, f, e)
                    }
            }
        }
        ,
        28473: e=>{
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }
        ,
        274: (e,t,n)=>{
            var o = n(28473);
            e.exports = !o((function() {
                var e = function() {}
                .bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }
            ))
        }
        ,
        21807: (e,t,n)=>{
            var o = n(274)
              , r = Function.prototype.call;
            e.exports = o ? r.bind(r) : function() {
                return r.apply(r, arguments)
            }
        }
        ,
        42048: (e,t,n)=>{
            var o = n(20382)
              , r = n(55755)
              , i = Function.prototype
              , a = o && Object.getOwnPropertyDescriptor
              , s = r(i, "name")
              , c = s && "something" === function() {}
            .name
              , l = s && (!o || o && a(i, "name").configurable);
            e.exports = {
                EXISTS: s,
                PROPER: c,
                CONFIGURABLE: l
            }
        }
        ,
        680: (e,t,n)=>{
            var o = n(14762)
              , r = n(68120);
            e.exports = function(e, t, n) {
                try {
                    return o(r(Object.getOwnPropertyDescriptor(e, t)[n]))
                } catch (e) {}
            }
        }
        ,
        14762: (e,t,n)=>{
            var o = n(274)
              , r = Function.prototype
              , i = r.call
              , a = o && r.bind.bind(i, i);
            e.exports = o ? a : function(e) {
                return function() {
                    return i.apply(e, arguments)
                }
            }
        }
        ,
        11409: (e,t,n)=>{
            var o = n(58389)
              , r = n(1483);
            e.exports = function(e, t) {
                return arguments.length < 2 ? (n = o[e],
                r(n) ? n : void 0) : o[e] && o[e][t];
                var n
            }
        }
        ,
        92564: (e,t,n)=>{
            var o = n(68120)
              , r = n(15983);
            e.exports = function(e, t) {
                var n = e[t];
                return r(n) ? void 0 : o(n)
            }
        }
        ,
        58389: function(e, t, n) {
            var o = function(e) {
                return e && e.Math === Math && e
            };
            e.exports = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof n.g && n.g) || o("object" == typeof this && this) || function() {
                return this
            }() || Function("return this")()
        },
        55755: (e,t,n)=>{
            var o = n(14762)
              , r = n(22347)
              , i = o({}.hasOwnProperty);
            e.exports = Object.hasOwn || function(e, t) {
                return i(r(e), t)
            }
        }
        ,
        11507: e=>{
            e.exports = {}
        }
        ,
        1799: (e,t,n)=>{
            var o = n(20382)
              , r = n(28473)
              , i = n(3145);
            e.exports = !o && !r((function() {
                return 7 !== Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        }
        ,
        32121: (e,t,n)=>{
            var o = n(14762)
              , r = n(28473)
              , i = n(91278)
              , a = Object
              , s = o("".split);
            e.exports = r((function() {
                return !a("z").propertyIsEnumerable(0)
            }
            )) ? function(e) {
                return "String" === i(e) ? s(e, "") : a(e)
            }
            : a
        }
        ,
        32429: (e,t,n)=>{
            var o = n(1483)
              , r = n(71704)
              , i = n(51953);
            e.exports = function(e, t, n) {
                var a, s;
                return i && o(a = t.constructor) && a !== n && r(s = a.prototype) && s !== n.prototype && i(e, s),
                e
            }
        }
        ,
        17268: (e,t,n)=>{
            var o = n(14762)
              , r = n(1483)
              , i = n(91831)
              , a = o(Function.toString);
            r(i.inspectSource) || (i.inspectSource = function(e) {
                return a(e)
            }
            ),
            e.exports = i.inspectSource
        }
        ,
        64483: (e,t,n)=>{
            var o, r, i, a = n(74644), s = n(58389), c = n(71704), l = n(69037), u = n(55755), d = n(91831), f = n(65409), p = n(11507), m = "Object already initialized", g = s.TypeError, h = s.WeakMap;
            if (a || d.state) {
                var y = d.state || (d.state = new h);
                y.get = y.get,
                y.has = y.has,
                y.set = y.set,
                o = function(e, t) {
                    if (y.has(e))
                        throw new g(m);
                    return t.facade = e,
                    y.set(e, t),
                    t
                }
                ,
                r = function(e) {
                    return y.get(e) || {}
                }
                ,
                i = function(e) {
                    return y.has(e)
                }
            } else {
                var v = f("state");
                p[v] = !0,
                o = function(e, t) {
                    if (u(e, v))
                        throw new g(m);
                    return t.facade = e,
                    l(e, v, t),
                    t
                }
                ,
                r = function(e) {
                    return u(e, v) ? e[v] : {}
                }
                ,
                i = function(e) {
                    return u(e, v)
                }
            }
            e.exports = {
                set: o,
                get: r,
                has: i,
                enforce: function(e) {
                    return i(e) ? r(e) : o(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var n;
                        if (!c(t) || (n = r(t)).type !== e)
                            throw new g("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        }
        ,
        14914: (e,t,n)=>{
            var o = n(91278);
            e.exports = Array.isArray || function(e) {
                return "Array" === o(e)
            }
        }
        ,
        1483: e=>{
            var t = "object" == typeof document && document.all;
            e.exports = void 0 === t && void 0 !== t ? function(e) {
                return "function" == typeof e || e === t
            }
            : function(e) {
                return "function" == typeof e
            }
        }
        ,
        98730: (e,t,n)=>{
            var o = n(28473)
              , r = n(1483)
              , i = /#|\.prototype\./
              , a = function(e, t) {
                var n = c[s(e)];
                return n === u || n !== l && (r(t) ? o(t) : !!t)
            }
              , s = a.normalize = function(e) {
                return String(e).replace(i, ".").toLowerCase()
            }
              , c = a.data = {}
              , l = a.NATIVE = "N"
              , u = a.POLYFILL = "P";
            e.exports = a
        }
        ,
        15983: e=>{
            e.exports = function(e) {
                return null == e
            }
        }
        ,
        71704: (e,t,n)=>{
            var o = n(1483);
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : o(e)
            }
        }
        ,
        40735: (e,t,n)=>{
            var o = n(71704);
            e.exports = function(e) {
                return o(e) || null === e
            }
        }
        ,
        19557: e=>{
            e.exports = !1
        }
        ,
        31423: (e,t,n)=>{
            var o = n(11409)
              , r = n(1483)
              , i = n(4815)
              , a = n(45022)
              , s = Object;
            e.exports = a ? function(e) {
                return "symbol" == typeof e
            }
            : function(e) {
                var t = o("Symbol");
                return r(t) && i(t.prototype, s(e))
            }
        }
        ,
        66960: (e,t,n)=>{
            var o = n(58324);
            e.exports = function(e) {
                return o(e.length)
            }
        }
        ,
        90169: (e,t,n)=>{
            var o = n(14762)
              , r = n(28473)
              , i = n(1483)
              , a = n(55755)
              , s = n(20382)
              , c = n(42048).CONFIGURABLE
              , l = n(17268)
              , u = n(64483)
              , d = u.enforce
              , f = u.get
              , p = String
              , m = Object.defineProperty
              , g = o("".slice)
              , h = o("".replace)
              , y = o([].join)
              , v = s && !r((function() {
                return 8 !== m((function() {}
                ), "length", {
                    value: 8
                }).length
            }
            ))
              , b = String(String).split("String")
              , w = e.exports = function(e, t, n) {
                "Symbol(" === g(p(t), 0, 7) && (t = "[" + h(p(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
                n && n.getter && (t = "get " + t),
                n && n.setter && (t = "set " + t),
                (!a(e, "name") || c && e.name !== t) && (s ? m(e, "name", {
                    value: t,
                    configurable: !0
                }) : e.name = t),
                v && n && a(n, "arity") && e.length !== n.arity && m(e, "length", {
                    value: n.arity
                });
                try {
                    n && a(n, "constructor") && n.constructor ? s && m(e, "prototype", {
                        writable: !1
                    }) : e.prototype && (e.prototype = void 0)
                } catch (e) {}
                var o = d(e);
                return a(o, "source") || (o.source = y(b, "string" == typeof t ? t : "")),
                e
            }
            ;
            Function.prototype.toString = w((function() {
                return i(this) && f(this).source || l(this)
            }
            ), "toString")
        }
        ,
        61703: e=>{
            var t = Math.ceil
              , n = Math.floor;
            e.exports = Math.trunc || function(e) {
                var o = +e;
                return (o > 0 ? n : t)(o)
            }
        }
        ,
        17969: (e,t,n)=>{
            var o = n(26261);
            e.exports = function(e, t) {
                return void 0 === e ? arguments.length < 2 ? "" : t : o(e)
            }
        }
        ,
        25835: (e,t,n)=>{
            var o = n(20382)
              , r = n(1799)
              , i = n(3896)
              , a = n(2293)
              , s = n(83815)
              , c = TypeError
              , l = Object.defineProperty
              , u = Object.getOwnPropertyDescriptor
              , d = "enumerable"
              , f = "configurable"
              , p = "writable";
            t.f = o ? i ? function(e, t, n) {
                if (a(e),
                t = s(t),
                a(n),
                "function" == typeof e && "prototype" === t && "value"in n && p in n && !n[p]) {
                    var o = u(e, t);
                    o && o[p] && (e[t] = n.value,
                    n = {
                        configurable: f in n ? n[f] : o[f],
                        enumerable: d in n ? n[d] : o[d],
                        writable: !1
                    })
                }
                return l(e, t, n)
            }
            : l : function(e, t, n) {
                if (a(e),
                t = s(t),
                a(n),
                r)
                    try {
                        return l(e, t, n)
                    } catch (e) {}
                if ("get"in n || "set"in n)
                    throw new c("Accessors not supported");
                return "value"in n && (e[t] = n.value),
                e
            }
        }
        ,
        4961: (e,t,n)=>{
            var o = n(20382)
              , r = n(21807)
              , i = n(37611)
              , a = n(57738)
              , s = n(35599)
              , c = n(83815)
              , l = n(55755)
              , u = n(1799)
              , d = Object.getOwnPropertyDescriptor;
            t.f = o ? d : function(e, t) {
                if (e = s(e),
                t = c(t),
                u)
                    try {
                        return d(e, t)
                    } catch (e) {}
                if (l(e, t))
                    return a(!r(i.f, e, t), e[t])
            }
        }
        ,
        12278: (e,t,n)=>{
            var o = n(56742)
              , r = n(44741).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return o(e, r)
            }
        }
        ,
        74347: (e,t)=>{
            t.f = Object.getOwnPropertySymbols
        }
        ,
        4815: (e,t,n)=>{
            var o = n(14762);
            e.exports = o({}.isPrototypeOf)
        }
        ,
        56742: (e,t,n)=>{
            var o = n(14762)
              , r = n(55755)
              , i = n(35599)
              , a = n(86651).indexOf
              , s = n(11507)
              , c = o([].push);
            e.exports = function(e, t) {
                var n, o = i(e), l = 0, u = [];
                for (n in o)
                    !r(s, n) && r(o, n) && c(u, n);
                for (; t.length > l; )
                    r(o, n = t[l++]) && (~a(u, n) || c(u, n));
                return u
            }
        }
        ,
        37611: (e,t)=>{
            var n = {}.propertyIsEnumerable
              , o = Object.getOwnPropertyDescriptor
              , r = o && !n.call({
                1: 2
            }, 1);
            t.f = r ? function(e) {
                var t = o(this, e);
                return !!t && t.enumerable
            }
            : n
        }
        ,
        51953: (e,t,n)=>{
            var o = n(680)
              , r = n(2293)
              , i = n(63852);
            e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
                var e, t = !1, n = {};
                try {
                    (e = o(Object.prototype, "__proto__", "set"))(n, []),
                    t = n instanceof Array
                } catch (e) {}
                return function(n, o) {
                    return r(n),
                    i(o),
                    t ? e(n, o) : n.__proto__ = o,
                    n
                }
            }() : void 0)
        }
        ,
        348: (e,t,n)=>{
            var o = n(21807)
              , r = n(1483)
              , i = n(71704)
              , a = TypeError;
            e.exports = function(e, t) {
                var n, s;
                if ("string" === t && r(n = e.toString) && !i(s = o(n, e)))
                    return s;
                if (r(n = e.valueOf) && !i(s = o(n, e)))
                    return s;
                if ("string" !== t && r(n = e.toString) && !i(s = o(n, e)))
                    return s;
                throw new a("Can't convert object to primitive value")
            }
        }
        ,
        89497: (e,t,n)=>{
            var o = n(11409)
              , r = n(14762)
              , i = n(12278)
              , a = n(74347)
              , s = n(2293)
              , c = r([].concat);
            e.exports = o("Reflect", "ownKeys") || function(e) {
                var t = i.f(s(e))
                  , n = a.f;
                return n ? c(t, n(e)) : t
            }
        }
        ,
        53312: (e,t,n)=>{
            var o = n(15983)
              , r = TypeError;
            e.exports = function(e) {
                if (o(e))
                    throw new r("Can't call method on " + e);
                return e
            }
        }
        ,
        65409: (e,t,n)=>{
            var o = n(47255)
              , r = n(81866)
              , i = o("keys");
            e.exports = function(e) {
                return i[e] || (i[e] = r(e))
            }
        }
        ,
        91831: (e,t,n)=>{
            var o = n(19557)
              , r = n(58389)
              , i = n(82095)
              , a = "__core-js_shared__"
              , s = e.exports = r[a] || i(a, {});
            (s.versions || (s.versions = [])).push({
                version: "3.36.0",
                mode: o ? "pure" : "global",
                copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }
        ,
        47255: (e,t,n)=>{
            var o = n(91831);
            e.exports = function(e, t) {
                return o[e] || (o[e] = t || {})
            }
        }
        ,
        86029: (e,t,n)=>{
            var o = n(76170)
              , r = n(28473)
              , i = n(58389).String;
            e.exports = !!Object.getOwnPropertySymbols && !r((function() {
                var e = Symbol("symbol detection");
                return !i(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && o && o < 41
            }
            ))
        }
        ,
        33392: (e,t,n)=>{
            var o = n(73005)
              , r = Math.max
              , i = Math.min;
            e.exports = function(e, t) {
                var n = o(e);
                return n < 0 ? r(n + t, 0) : i(n, t)
            }
        }
        ,
        35599: (e,t,n)=>{
            var o = n(32121)
              , r = n(53312);
            e.exports = function(e) {
                return o(r(e))
            }
        }
        ,
        73005: (e,t,n)=>{
            var o = n(61703);
            e.exports = function(e) {
                var t = +e;
                return t != t || 0 === t ? 0 : o(t)
            }
        }
        ,
        58324: (e,t,n)=>{
            var o = n(73005)
              , r = Math.min;
            e.exports = function(e) {
                var t = o(e);
                return t > 0 ? r(t, 9007199254740991) : 0
            }
        }
        ,
        22347: (e,t,n)=>{
            var o = n(53312)
              , r = Object;
            e.exports = function(e) {
                return r(o(e))
            }
        }
        ,
        22355: (e,t,n)=>{
            var o = n(21807)
              , r = n(71704)
              , i = n(31423)
              , a = n(92564)
              , s = n(348)
              , c = n(70001)
              , l = TypeError
              , u = c("toPrimitive");
            e.exports = function(e, t) {
                if (!r(e) || i(e))
                    return e;
                var n, c = a(e, u);
                if (c) {
                    if (void 0 === t && (t = "default"),
                    n = o(c, e, t),
                    !r(n) || i(n))
                        return n;
                    throw new l("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"),
                s(e, t)
            }
        }
        ,
        83815: (e,t,n)=>{
            var o = n(22355)
              , r = n(31423);
            e.exports = function(e) {
                var t = o(e, "string");
                return r(t) ? t : t + ""
            }
        }
        ,
        34338: (e,t,n)=>{
            var o = {};
            o[n(70001)("toStringTag")] = "z",
            e.exports = "[object z]" === String(o)
        }
        ,
        26261: (e,t,n)=>{
            var o = n(26145)
              , r = String;
            e.exports = function(e) {
                if ("Symbol" === o(e))
                    throw new TypeError("Cannot convert a Symbol value to a string");
                return r(e)
            }
        }
        ,
        18761: e=>{
            var t = String;
            e.exports = function(e) {
                try {
                    return t(e)
                } catch (e) {
                    return "Object"
                }
            }
        }
        ,
        81866: (e,t,n)=>{
            var o = n(14762)
              , r = 0
              , i = Math.random()
              , a = o(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++r + i, 36)
            }
        }
        ,
        45022: (e,t,n)=>{
            var o = n(86029);
            e.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }
        ,
        3896: (e,t,n)=>{
            var o = n(20382)
              , r = n(28473);
            e.exports = o && r((function() {
                return 42 !== Object.defineProperty((function() {}
                ), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }
            ))
        }
        ,
        4066: e=>{
            var t = TypeError;
            e.exports = function(e, n) {
                if (e < n)
                    throw new t("Not enough arguments");
                return e
            }
        }
        ,
        74644: (e,t,n)=>{
            var o = n(58389)
              , r = n(1483)
              , i = o.WeakMap;
            e.exports = r(i) && /native code/.test(String(i))
        }
        ,
        70001: (e,t,n)=>{
            var o = n(58389)
              , r = n(47255)
              , i = n(55755)
              , a = n(81866)
              , s = n(86029)
              , c = n(45022)
              , l = o.Symbol
              , u = r("wks")
              , d = c ? l.for || l : l && l.withoutSetter || a;
            e.exports = function(e) {
                return i(u, e) || (u[e] = s && i(l, e) ? l[e] : d("Symbol." + e)),
                u[e]
            }
        }
        ,
        15724: (e,t,n)=>{
            var o = n(28612)
              , r = n(22347)
              , i = n(66960)
              , a = n(39273)
              , s = n(31091);
            o({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: n(28473)((function() {
                    return 4294967297 !== [].push.call({
                        length: 4294967296
                    }, 1)
                }
                )) || !function() {
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).push()
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }()
            }, {
                push: function(e) {
                    var t = r(this)
                      , n = i(t)
                      , o = arguments.length;
                    s(n + o);
                    for (var c = 0; c < o; c++)
                        t[n] = arguments[c],
                        n++;
                    return a(t, n),
                    n
                }
            })
        }
        ,
        86409: (e,t,n)=>{
            var o = n(28612)
              , r = n(58389)
              , i = n(11409)
              , a = n(57738)
              , s = n(25835).f
              , c = n(55755)
              , l = n(96021)
              , u = n(32429)
              , d = n(17969)
              , f = n(11780)
              , p = n(58223)
              , m = n(20382)
              , g = n(19557)
              , h = "DOMException"
              , y = i("Error")
              , v = i(h)
              , b = function() {
                l(this, w);
                var e = arguments.length
                  , t = d(e < 1 ? void 0 : arguments[0])
                  , n = d(e < 2 ? void 0 : arguments[1], "Error")
                  , o = new v(t,n)
                  , r = new y(t);
                return r.name = h,
                s(o, "stack", a(1, p(r.stack, 1))),
                u(o, this, b),
                o
            }
              , w = b.prototype = v.prototype
              , E = "stack"in new y(h)
              , S = "stack"in new v(1,2)
              , x = v && m && Object.getOwnPropertyDescriptor(r, h)
              , C = !(!x || x.writable && x.configurable)
              , I = E && !C && !S;
            o({
                global: !0,
                constructor: !0,
                forced: g || I
            }, {
                DOMException: I ? b : v
            });
            var O = i(h)
              , T = O.prototype;
            if (T.constructor !== O)
                for (var _ in g || s(T, "constructor", a(1, O)),
                f)
                    if (c(f, _)) {
                        var k = f[_]
                          , R = k.s;
                        c(O, R) || s(O, R, a(6, k.c))
                    }
        }
        ,
        5673: (e,t,n)=>{
            var o = n(77914)
              , r = n(14762)
              , i = n(26261)
              , a = n(4066)
              , s = URLSearchParams
              , c = s.prototype
              , l = r(c.append)
              , u = r(c.delete)
              , d = r(c.forEach)
              , f = r([].push)
              , p = new s("a=1&a=2&b=3");
            p.delete("a", 1),
            p.delete("b", void 0),
            p + "" != "a=2" && o(c, "delete", (function(e) {
                var t = arguments.length
                  , n = t < 2 ? void 0 : arguments[1];
                if (t && void 0 === n)
                    return u(this, e);
                var o = [];
                d(this, (function(e, t) {
                    f(o, {
                        key: t,
                        value: e
                    })
                }
                )),
                a(t, 1);
                for (var r, s = i(e), c = i(n), p = 0, m = 0, g = !1, h = o.length; p < h; )
                    r = o[p++],
                    g || r.key === s ? (g = !0,
                    u(this, r.key)) : m++;
                for (; m < h; )
                    (r = o[m++]).key === s && r.value === c || l(this, r.key, r.value)
            }
            ), {
                enumerable: !0,
                unsafe: !0
            })
        }
        ,
        30164: (e,t,n)=>{
            var o = n(77914)
              , r = n(14762)
              , i = n(26261)
              , a = n(4066)
              , s = URLSearchParams
              , c = s.prototype
              , l = r(c.getAll)
              , u = r(c.has)
              , d = new s("a=1");
            !d.has("a", 2) && d.has("a", void 0) || o(c, "has", (function(e) {
                var t = arguments.length
                  , n = t < 2 ? void 0 : arguments[1];
                if (t && void 0 === n)
                    return u(this, e);
                var o = l(this, e);
                a(t, 1);
                for (var r = i(n), s = 0; s < o.length; )
                    if (o[s++] === r)
                        return !0;
                return !1
            }
            ), {
                enumerable: !0,
                unsafe: !0
            })
        }
        ,
        21279: (e,t,n)=>{
            var o = n(20382)
              , r = n(14762)
              , i = n(83864)
              , a = URLSearchParams.prototype
              , s = r(a.forEach);
            o && !("size"in a) && i(a, "size", {
                get: function() {
                    var e = 0;
                    return s(this, (function() {
                        e++
                    }
                    )),
                    e
                },
                configurable: !0,
                enumerable: !0
            })
        }
    }
      , t = {};
    function n(o) {
        var r = t[o];
        if (void 0 !== r)
            return r.exports;
        var i = t[o] = {
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n),
        i.exports
    }
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e,t)=>{
        for (var o in t)
            n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        n(86409),
        n(67285),
        n(93283);
        var e = n(82141)
          , t = n.n(e)
          , o = n(40314);
        n(15724);
        const r = "[canny]";
        var i = {};
        "undefined" != typeof window && window.addEventListener("message", (function(e) {
            let t, n = e.data;
            if ("string" != typeof n || 0 !== n.indexOf(r))
                return;
            n = n.replace(r, "");
            try {
                t = JSON.parse(n)
            } catch (e) {
                return void console.warn("Canny: Invalid message received: " + n)
            }
            if (!t.hasOwnProperty("type") || !t.hasOwnProperty("data"))
                return void console.warn("Canny: Malformed message sent: " + n);
            const o = i[t.type];
            o && o.forEach((function(n) {
                if (!n.sourceWindow || e.source === n.sourceWindow) {
                    if (n.origin)
                        if (n.origin instanceof RegExp) {
                            if (!n.origin.test(e.origin))
                                return
                        } else {
                            if ("string" != typeof n.origin)
                                return void console.warn("Canny: Invalid subscriber origin: " + JSON.stringify(n.origin));
                            if (n.origin !== e.origin)
                                return
                        }
                    n.callback(t.data, e.origin)
                }
            }
            ))
        }
        ), !1);
        const a = {
            postMessage(e, t, n, o={}) {
                if (!e)
                    return;
                const i = r + JSON.stringify({
                    data: o,
                    type: n
                });
                e.postMessage(i, t)
            },
            subscribe: (e,t,n,o)=>(i[n] || (i[n] = []),
            i[n].push({
                callback: o,
                origin: t,
                sourceWindow: e
            }),
            function() {
                setTimeout((()=>{
                    for (let e = 0; e < i[n].length; e++)
                        if (i[n][e].callback === o)
                            return void i[n].splice(e, 1)
                }
                ), 0)
            }
            )
        };
        function s() {
            try {
                var e = window.localStorage
                  , t = "__storage_test__";
                return e.setItem(t, t),
                e.removeItem(t),
                !0
            } catch (t) {
                return t instanceof DOMException && (22 === t.code || 1014 === t.code || "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && 0 !== e.length
            }
        }
        const c = {
            get: function(e) {
                return s() && window.localStorage.getItem(e) || null
            },
            remove: function(e) {
                if (!s())
                    return null;
                window.localStorage.removeItem(e)
            },
            set: function(e, t) {
                s() && window.localStorage.setItem(e, t)
            },
            setWithExpiry(e, t, n) {
                if (!s())
                    return;
                const o = {
                    value: t,
                    expiry: (new Date).getTime() + n
                };
                window.localStorage.setItem(e, JSON.stringify(o))
            },
            getWithExpiry(e) {
                if (!s())
                    return null;
                const t = window.localStorage.getItem(e);
                if (!t)
                    return null;
                const n = JSON.parse(t);
                return (new Date).getTime() > n.expiry ? (window.localStorage.removeItem(e),
                null) : n.value
            }
        };
        function l(e, t, n, o=!0) {
            const r = o ? encodeURIComponent(t) : t
              , i = o ? encodeURIComponent(n) : n
              , [a,s] = e.split("#")
              , [c,l] = a.split("?")
              , u = l && l.length > 1
              , d = new URLSearchParams(u ? l : "");
            d.set(r, i);
            const f = c + "?" + d.toString();
            return s ? `${f}#${s}` : f
        }
        n(5673),
        n(30164),
        n(21279);
        function u(e) {
            let t = 0;
            for (; e && "body" !== e.tagName.toLowerCase(); )
                t += e.offsetTop,
                e = e.offsetParent;
            return t
        }
        const d = {
            parse(e) {
                const t = e.slice(1).split("&")
                  , n = []
                  , o = [];
                t.forEach((e=>{
                    if (!e)
                        return;
                    const t = e.split("=");
                    n.push(t[0]),
                    o.push(t[1])
                }
                ));
                const r = {};
                return n.forEach(((e,t)=>{
                    if (!e)
                        return;
                    const n = o[t];
                    r[decodeURIComponent(e)] = n ? decodeURIComponent(o[t]) : ""
                }
                )),
                r
            },
            stringify(e) {
                const t = [];
                for (const n in e) {
                    const o = e[n];
                    o || 0 === o || !1 === o ? t.push(encodeURIComponent(n) + "=" + encodeURIComponent(o)) : t.push(encodeURIComponent(n))
                }
                return 0 === t.length ? "" : "?" + t.join("&")
            }
        };
        function f(e) {
            return +(Math.round(Number.parseFloat(e.toString() + "e+2")) + "e-2")
        }
        var p = function(e) {
            return e.dark = "dark",
            e.light = "light",
            e.auto = "auto",
            e
        }(p || {});
        const m = p
          , g = {
            _send: function(e, t, n, o) {
                var r = new XMLHttpRequest;
                e = "http://localhost:8000/api" + e,
                r.open(n, e, !0),
                r.onload = function() {
                    200 === r.status || 304 === r.status ? t && t(r.responseText) : t && t("server error")
                }
                ,
                r.onerror = function(e) {
                    e.preventDefault(),
                    t && t("server error")
                }
                ,
                "POST" === n && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                r.withCredentials = !0,
                r.send(o)
            },
            get: function(e, t, n) {
                var o = [];
                for (var r in t)
                    o.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                g._send(`${e}?${o.join("&")}`, n, "GET")
            },
            post: function(e, t, n) {
                var o = [];
                for (var r in t)
                    o.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                g._send(e, n, "POST", o.join("&"))
            }
        }
          , h = g;
        function y(e) {
            return "object" == typeof e && !!e && !Array.isArray(e)
        }
        function v(e) {
            let t;
            try {
                t = JSON.parse(JSON.stringify(e))
            } catch (e) {
                return null
            }
            return t
        }
        const b = {
            boardToken: null,
            ssoToken: null,
            basePath: null,
            display: null,
            initialPath: "/",
            initialQuery: {},
            origin: null
        };
        function w(e) {
            for (var t in this._config = v(b),
            e) {
                var n = e[t];
                if (y(n))
                    for (var o in n) {
                        var r = n[o];
                        this._config[t][o] = r
                    }
                else
                    this._config[t] = n
            }
        }
        w.prototype.get = function() {
            return v(this._config)
        }
        ;
        const E = e=>"string" == typeof e && 24 === e.length && !!e.match(/^[a-fA-F0-9]{24}$/)
          , S = e=>"top" === e || "right" === e || "bottom" === e || "left" === e
          , x = e=>"top" === e || "right" === e || "bottom" === e || "left" === e
          , C = e=>{
            if ("string" != typeof e && "number" != typeof e)
                return !1;
            const t = String(e);
            return !(0 === t.length || t.length > 200)
        }
          , I = function(e) {
            let t;
            if ("string" == typeof e) {
                if (t = Math.round(100 * Number(e)),
                Number.isNaN(t) || 0 === e.trim().length)
                    return !1
            } else {
                if ("number" != typeof e)
                    return !1;
                t = Math.round(100 * e)
            }
            return Number.isInteger(t) && t >= 0
        }
          , O = e=>"string" == typeof e && !(0 === e.length || e.length > 50)
          , T = e=>{
            const t = Date.parse(e);
            return !Number.isNaN(t)
        }
          , _ = e=>"string" == typeof e && !(0 === e.length || e.length > 50)
          , k = e=>"string" == typeof e
          , R = e=>!("string" != typeof e || e.length < 5 || e.length > 200 || !e.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z]+)|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i))
          , N = e=>{
            if ("string" != typeof e && "number" != typeof e)
                return !1;
            const t = String(e);
            return !(0 === t.length || t.length > 200)
        }
          , M = e=>"string" == typeof e && !(0 === e.length || e.length > 50)
          , A = "Canny widget"
          , D = "#1c1c1f"
          , F = "white"
          , z = "canny-changelog-read"
          , P = "canny-changelog-seen"
          , L = "canny-changelog-iframe"
          , H = "http://localhost:8000"
          , j = "canny-changeloge-style"
          , W = 36e5
          , B = "canny-scroll-element"
          , U = "canny-identify-hash"
          , q = "http://localhost:8000"
          , $ = "canny-sso-token";
        a.subscribe(null, q, "path", (function(e) {
            if (!J._config.get().basePath)
                return;
            let t = J._config.get().basePath;
            "/" === t[t.length - 1] && (t = t.substr(0, t.length - 1));
            const n = t + e;
            window.history.replaceState(window.history.state, null, n)
        }
        )),
        a.subscribe(null, q, "redirect", (function(e) {
            window.location.assign(e)
        }
        )),
        a.subscribe(null, q, "refresh", (function() {
            window.location.reload()
        }
        ));
        const J = {
            _appID: null,
            _cache: {},
            _clientToken: null,
            _config: null,
            _domainHashes: {},
            _entryIDs: [],
            _isClickListenerSet: !1,
            _changelogOpenCallback: null,
            authenticateCannyLink: e=>l(e, "clientToken", J._clientToken, !1),
            hasUnseenEntries() {
                const e = c.get(P)
                  , t = e ? e.split(",") : [];
                return J._entryIDs.some((e=>!t.includes(e)))
            },
            registerOnChangelogOpenCallback(e) {
                J._changelogOpenCallback = e
            },
            closeChangelog() {
                const e = document.getElementById(L);
                e && (e.buttonElement = null,
                e.style.visibility = "hidden",
                setTimeout((()=>{
                    a.postMessage(e.contentWindow, H, "changelog-hidden")
                }
                ), 0))
            },
            initChangelog(e, t) {
                if (!E(e.appID))
                    return void console.warn("Canny: Failed to initialize changelog widget because appID is missing or invalid.");
                if (!S(e.align))
                    return void console.warn('Canny: Failed to initialize changelog widget because align is missing or invalid (must be "top", "bottom", "left", or "right").');
                if (!x(e.position))
                    return void console.warn('Canny: Failed to initialize changelog widget because position is missing or invalid (must be "top", "bottom", "left", or "right").');
                if (["top", "bottom"].includes(e.align) && ["top", "bottom"].includes(e.position) || ["left", "right"].includes(e.align) && ["left", "right"].includes(e.position))
                    return void console.warn("Canny: Failed to initialize changelog widget because position and align cannot both be [top, bottom] or [left, right].");
                const n = e.ssoToken || c.get($)
                  , o = n && "string" == typeof n
                  , r = Z(n, "changelog widget");
                if (o && !r)
                    return;
                const i = t ? [t] : Array.from(document.querySelectorAll("[data-canny-changelog]"))
                  , s = i.reduce(((e,t)=>!!(e && t && t instanceof Element)), !0);
                if (!s)
                    return void console.warn("Canny: Failed to initialize Canny changelog widget because no valid buttonElement was passed in or found with data-canny-changelog attribute.");
                h.post("/api/changelog/getNewEntryIDs", {
                    companyID: e.appID,
                    ...e.omitNonEssentialCookies ? {
                        omitNonEssentialCookies: e.omitNonEssentialCookies
                    } : {},
                    ...e.labelIDs ? {
                        labelIDs: JSON.stringify(e.labelIDs)
                    } : {}
                }, (e=>{
                    if ("server error" === e)
                        return void console.warn("Canny: Something went wrong fetching changelog entries: ", e);
                    try {
                        const t = JSON.parse(e).result;
                        J._entryIDs = t.entryIDs ?? []
                    } catch (t) {
                        return void console.warn("Canny: Something went wrong fetching changelog entries: ", e)
                    }
                    const t = c.get(P)
                      , n = t ? t.split(",") : []
                      , o = J._entryIDs.some((e=>!n.includes(e)));
                    i.forEach((e=>{
                        o && Y(e)
                    }
                    ))
                }
                ));
                const l = ()=>{
                    const t = document.getElementById(L);
                    if (t)
                        return t.config = e,
                        K(t, t.buttonElement, e),
                        void (t.loaded && (a.postMessage(t.contentWindow, H, "calculateHeight", {}),
                        a.postMessage(t.contentWindow, H, "changelog-opened", {})));
                    const o = document.createElement("iframe");
                    o.width = 350,
                    o.height = 0,
                    o.config = e,
                    o.id = L,
                    o.setAttribute("allow", "accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture"),
                    o.style.animation = "canny-widget-slide-up 0.2s ease",
                    o.style.background = G(e.theme),
                    o.style.border = "0",
                    o.style.borderRadius = "8px",
                    o.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.15)",
                    o.style.display = "none",
                    o.style.overflow = "hidden",
                    o.style.position = "absolute",
                    o.style.width = "350px",
                    o.style.zIndex = "999999999";
                    const r = e=>{
                        e.heightAnimationID && (window.cancelAnimationFrame(e.heightAnimationID),
                        e.heightAnimationID = null)
                    }
                    ;
                    a.subscribe(null, H, "changelog-height", (t=>{
                        Q() ? (o.height = window.innerHeight,
                        o.style.height = window.innerHeight + "px",
                        r(o)) : t.resize || 0 === Number(o.height) ? (o.height = t.height,
                        o.style.height = t.height + "px",
                        r(o)) : function(e, t) {
                            if (e.heightAnimationID) {
                                if (t === e.desiredHeight)
                                    return;
                                window.cancelAnimationFrame(e.heightAnimationID)
                            }
                            const n = new Date
                              , o = Number(e.height);
                            e.desiredHeight = t;
                            const r = ()=>{
                                if (new Date - n > 250)
                                    return e.height = t,
                                    e.style.height = t + "px",
                                    e.heightAnimationID = null,
                                    e.desiredHeight = null,
                                    void K(e, e.buttonElement, e.config);
                                const i = Math.round(function(e, t, n, o) {
                                    let r = new Date - e;
                                    const i = n - t;
                                    return (r /= 125) < 1 ? i / 2 * r * r + t : -i / 2 * (--r * (r - 2) - 1) + t
                                }(n, o, t));
                                e.height = i,
                                e.style.height = i + "px",
                                K(e, e.buttonElement, e.config),
                                e.heightAnimationID = window.requestAnimationFrame(r)
                            }
                            ;
                            e.heightAnimationID = window.requestAnimationFrame(r)
                        }(o, t.height),
                        K(o, o.buttonElement, e)
                    }
                    )),
                    a.subscribe(null, H, "changelog-loaded", (e=>{
                        const {entryIDs: t} = e;
                        o.entryIDs = t,
                        o.loaded = !0;
                        const n = c.get(z)
                          , r = n ? n.split(",") : [];
                        a.postMessage(o.contentWindow, H, "entry-readIDs", {
                            readIDs: r
                        }),
                        o.fullscreenMode = Q(),
                        a.postMessage(o.contentWindow, H, "set-fullscreen-mode", {
                            fullscreenMode: Q()
                        })
                    }
                    )),
                    a.subscribe(null, H, "entry-opened", (e=>{
                        const {entryID: t} = e
                          , n = c.get(z)
                          , o = n ? n.split(",") : [];
                        o.includes(t) || c.set(z, o.concat(t).join(","))
                    }
                    )),
                    a.subscribe(null, H, "close-changelog", J.closeChangelog, !0),
                    a.subscribe(null, H, "close-changelog-cleanup", (()=>{
                        o.style.display = "none",
                        o.style.visibility = "visible"
                    }
                    )),
                    ee(e);
                    const i = d.stringify({
                        ...n ? {
                            ssoToken: n
                        } : {},
                        ...e.labelIDs ? {
                            labelIDs: JSON.stringify(e.labelIDs)
                        } : {},
                        ...e.omitNonEssentialCookies ? {
                            omitNonEssentialCookies: e.omitNonEssentialCookies
                        } : {},
                        theme: e.theme
                    });
                    o.src = `${H}/${e.appID}${i}`,
                    document.body.appendChild(o),
                    window.addEventListener("resize", (()=>{
                        const e = document.getElementById("canny-changelog-iframe");
                        e ? K(e, e.buttonElement, e.config, {
                            resize: !0
                        }) : console.warn("Canny: Our iframe was removed, unable to open changelog widget.")
                    }
                    ), !1),
                    document.body.addEventListener("click", (e=>{
                        X(e.target) || o.contains(e.target) || J.closeChangelog()
                    }
                    ), !0)
                }
                ;
                if (i.forEach((e=>{
                    if (e.hasCannyClickListener)
                        return;
                    e.hasCannyClickListener = !0,
                    e.dataset.cannyChangelog = !0,
                    e.addEventListener("mouseover", (function(e) {
                        l()
                    }
                    )),
                    e.addEventListener("click", function(e) {
                        l();
                        const t = document.getElementById(L);
                        if (!t)
                            return void console.warn("Canny: Our iframe was removed, unable to open/close changelog widget.");
                        if ("block" === t.style.display)
                            return void (t.buttonElement && t.buttonElement !== e ? (t.buttonElement = e,
                            K(t, e, t.config)) : J.closeChangelog());
                        t.style.visibility = "hidden",
                        t.style.display = "block",
                        setTimeout((()=>{
                            t.style.visibility = "visible"
                        }
                        ), 10),
                        t.buttonElement = e,
                        t.hasUnseenEntries = !1,
                        K(t, e, t.config, {
                            resize: !0
                        }),
                        Array.from(document.querySelectorAll(".Canny_BadgeContainer")).forEach((e=>{
                            e && e.parentElement && e.parentElement.removeChild(e)
                        }
                        )),
                        J._changelogOpenCallback && J._changelogOpenCallback();
                        const n = c.get(P)
                          , o = n ? n.split(",") : []
                          , r = J._entryIDs.reduce(((e,t)=>e.includes(t) ? e : e.concat(t)), o);
                        c.set(P, r)
                    }
                    .bind(null, e), !1);
                    const t = document.getElementById(L);
                    t && t.loaded && t.hasUnseenEntries && Y(e)
                }
                )),
                document.getElementById(j))
                    return;
                const u = document.createElement("style");
                u.id = j,
                u.setAttribute("type", "text/css"),
                u.innerHTML = ".Canny_BadgeContainer { position: absolute; top: 0; bottom: 0; left: 0; right: 0; visibility: hidden } .Canny_Badge { position: absolute; top: -1px; right: -1px; border-radius: 10px; background-color: red; padding: 5px; border: 1px solid white; visibility: visible } @keyframes canny-widget-slide-up { from { opacity:0.6; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }",
                (document.head || document.getElementsByTagName("head")[0]).appendChild(u)
            },
            async identify(e, n) {
                "function" != typeof n && (n = function() {}
                );
                const o = function(e) {
                    return e ? E(e.appID) ? e.user ? R(e.user.email) ? N(e.user.id) ? M(e.user.name) ? e.user.created && !T(e.user.created) ? (console.warn("Canny: Failed to identify because user.created is invalid.", e.user.created),
                    !1) : e.user.avatarURL && !k(e.user.avatarURL) ? (console.warn("Canny: Failed to identify because user.avatarURL is invalid. Expected a string but got: ", e.user.avatarURL),
                    !1) : !(e.user.alias && !_(e.user.alias) && (console.warn("Canny: Failed to identify because user.alias is invalid. Expected a string but got: ", e.user.alias),
                    1)) : (console.warn("Canny: Failed to identify because user.name is missing or invalid.", e.user.name),
                    !1) : (console.warn("Canny: Failed to identify because user.id is missing or invalid.", e.user.id),
                    !1) : (console.warn("Canny: Failed to identify because user.email is missing or invalid.", e.user.email),
                    !1) : (console.warn("Canny: Failed to identify because user is missing."),
                    !1) : (console.warn("Canny: Failed to identify because appID is missing or invalid.", e.appID),
                    !1) : (console.warn("Canny: Failed to identify because data parameter is missing."),
                    !1)
                }(e);
                if (!o)
                    return void n();
                (e.user.companies || []).forEach((e=>{
                    e.hasOwnProperty("monthlySpend") && (e.monthlySpend = f(e.monthlySpend),
                    Number.isNaN(e.monthlySpend) && delete e.monthlySpend)
                }
                )),
                J._appID = e.appID,
                J._domainHashes[e.appID] || await new Promise(((t,n)=>{
                    const o = e.appID;
                    h.post(`/api/company/getDomainHashes/${o}`, {}, (e=>{
                        try {
                            const t = JSON.parse(e).domainHashes;
                            J._domainHashes[o] = t
                        } catch (e) {} finally {
                            t()
                        }
                    }
                    ))
                }
                ));
                const r = (i = e,
                encodeURIComponent(function(e) {
                    const t = encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, t) {
                        return String.fromCharCode(Number("0x" + t))
                    }
                    ));
                    return btoa(t)
                }(JSON.stringify(i))));
                var i;
                if (J._clientToken = r,
                J._isClickListenerSet)
                    return void n();
                J._isClickListenerSet = !0;
                const a = e=>{
                    const n = function(e) {
                        if (window.location.host.match(/canny\.io/))
                            return null;
                        for (let t = 0; t < 10; t++) {
                            if (!e)
                                return null;
                            if ("A" === e.tagName)
                                break;
                            e = e.parentElement
                        }
                        if (!e)
                            return null;
                        if ("A" !== e.tagName || !e.href || !e.hostname)
                            return null;
                        const n = e;
                        if (n?.dataset?.hasOwnProperty?.("cannyLink"))
                            return n;
                        if (J._appID) {
                            const e = J._domainHashes[J._appID];
                            if (e) {
                                const o = t()(`${J._appID}:${n.hostname}`).toString();
                                if (e.includes(o))
                                    return n
                            }
                        }
                        if (!n.hostname?.endsWith?.(".canny.io"))
                            return null;
                        const o = n.hostname?.split?.(".");
                        return o && 3 === o.length ? n : null
                    }(e.target);
                    n && (n.href = l(n.href, "clientToken", J._clientToken, !1))
                }
                ;
                document.body.addEventListener("click", a, !0),
                document.body.addEventListener("contextmenu", a, !0),
                document.body.addEventListener("focusin", a, !0),
                document.body.addEventListener("mousedown", a, !0),
                await async function(e) {
                    const t = function(e) {
                        if (0 === e.length)
                            return "0";
                        let t = 0;
                        for (let n = 0; n < e.length; n++)
                            t = (t << 5) - t + e.charCodeAt(n),
                            t |= 0;
                        return t < 0 && (t *= -1),
                        t.toString()
                    }(JSON.stringify(e))
                      , n = J._cache[t];
                    if (n) {
                        const {timestamp: e} = n
                          , o = new Date - e;
                        if (o > 0 && o < W)
                            return void console.warn("Canny: Skipping identify request because an identical request was made in the past hour");
                        delete J._cache[t]
                    }
                    const o = c.get(U);
                    if (o) {
                        let e = null;
                        try {
                            e = JSON.parse(o)
                        } catch (e) {
                            console.warn(e)
                        }
                        if (e && e.dataHash && e.timestamp) {
                            const n = new Date - new Date(e.timestamp)
                              , o = n > 0 && n < W
                              , r = e.dataHash === t;
                            if (o && r)
                                return void console.warn("Canny: Skipping identify request because an identical request was made in the past hour")
                        }
                        c.remove(U)
                    }
                    return J._cache[t] = {
                        timestamp: new Date
                    },
                    c.set(U, JSON.stringify({
                        dataHash: t,
                        timestamp: new Date
                    })),
                    new Promise((n=>{
                        h.post("/api/users/identify", {
                            companyID: e.appID,
                            hash: e.hash,
                            user: JSON.stringify({
                                ...e.user.avatarURL && {
                                    avatarURL: e.user.avatarURL
                                },
                                ...e.user.companies && {
                                    companies: e.user.companies.filter((e=>function(e) {
                                        return C(e.id) ? O(e.name) ? e.created && !T(e.created) ? (console.warn("Canny: Invalid company, company.created is invalid:", e.created),
                                        !1) : !(e.hasOwnProperty("monthlySpend") && !I(e.monthlySpend) && (console.warn("Canny: Invalid company, company.monthlySpend is missing or invalid:", e.monthlySpend),
                                        1)) : (console.warn("Canny: Invalid company, company.name is missing or invalid:", e.name),
                                        !1) : (console.warn("Canny: Invalid company, company.id is missing or invalid:", e.id),
                                        !1)
                                    }(e))).map((e=>({
                                        id: String(e.id),
                                        name: e.name,
                                        ...e.created && {
                                            created: e.created
                                        },
                                        ...e.customFields && {
                                            customFields: e.customFields
                                        },
                                        ...e.hasOwnProperty("monthlySpend") && {
                                            monthlySpend: f(e.monthlySpend)
                                        }
                                    })))
                                },
                                ...e.user.created && {
                                    created: e.user.created
                                },
                                ...e.user.customFields && {
                                    customFields: e.user.customFields
                                },
                                email: e.user.email,
                                id: String(e.user.id),
                                name: e.user.name
                            })
                        }, (e=>{
                            if ("success" === e) {
                                const e = {
                                    dataHash: t,
                                    timestamp: new Date
                                }
                                  , n = JSON.stringify(e);
                                c.set(U, n)
                            } else
                                console.warn("Canny: Something went wrong identifying user: ", e);
                            n()
                        }
                        ))
                    }
                    ))
                }(e),
                n()
            },
            render(e, t) {
                if (!t && !(t = document.querySelectorAll("[data-canny]")[0]))
                    return void console.warn("Canny: Failed to render Canny widget because no containerElement was passed in or found with data-canny attribute.");
                if (document.getElementById("canny-iframe"))
                    return void console.warn("Canny: Failed to render Canny widget because there is already an iframe with id canny-iframe.");
                if (!e.boardToken)
                    return void console.warn("Canny: Failed to render Canny widget because no boardToken was set in config. You can find your board token here: https://developers.canny.io/install/widget/web.");
                if ("string" != typeof (n = e.boardToken) || 36 !== n.length || !n.match(/^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/))
                    return void console.warn("Canny: Failed to render Canny widget because the boardToken supplied was invalid. You can find your board token here: https://developers.canny.io/install/widget/web.");
                var n;
                const r = e.ssoToken || c.get($)
                  , i = r && "string" == typeof r
                  , s = Z(r, A);
                if (i && !s)
                    return;
                const l = document.createElement("iframe");
                l.width = "100%",
                l.height = "800px",
                l.id = "canny-iframe",
                l.scrolling = "no",
                l.style.border = "0";
                let f = "/"
                  , p = {
                    boardToken: e.boardToken,
                    ...e.display && {
                        display: e.display
                    },
                    ...r && {
                        ssoToken: r
                    }
                };
                if (e.basePath) {
                    const t = -1 !== e.basePath.indexOf("#")
                      , n = t ? window.location.pathname + window.location.hash.split("?")[0] : window.location.pathname
                      , o = e.basePath.endsWith("/") ? e.basePath.slice(0, -1) : e.basePath
                      , r = window.location.origin;
                    if (0 !== n.indexOf(o))
                        console.warn("Canny: Failed to set up URL syncing because basePath (" + o + ") not found in pathname (" + n + ")."),
                        delete e.origin;
                    else {
                        f = n.substr(o.length, n.length - o.length);
                        const i = t ? "?" + (window.location.hash.split("?")[1] || "") : window.location.search;
                        p = Object.assign(d.parse(i), p),
                        e.initialPath = f,
                        e.initialQuery = d.parse(i),
                        e.origin = r
                    }
                }
                l.src = q + f + d.stringify(p),
                t.appendChild(l),
                ee(e),
                J._config = new w(e),
                l._unsubscribeReady = a.subscribe(null, q, "ready", (function() {
                    if (!l.contentWindow)
                        return l._unsubscribeReady(),
                        void window.removeEventListener("scroll", g);
                    a.postMessage(l.contentWindow, q, "config", J._config.get())
                }
                )),
                l._unsubscribeToken = a.subscribe(null, q, "set-auth-token", (e=>{
                    l.contentWindow || l._unsubscribeToken(),
                    c.set($, e),
                    a.postMessage(l.contentWindow, q, "token-set")
                }
                )),
                l._unsubscribeLoaded = a.subscribe(null, q, "loaded", (function() {
                    l.contentWindow || l._unsubscribeLoaded(),
                    "function" == typeof e.onLoadCallback && e.onLoadCallback()
                }
                )),
                (0,
                o.iframeResizer)({
                    checkOrigin: [q],
                    heightCalculationMethod: "taggedElementHeight",
                    log: !1
                }, l);
                const m = document.createElement("div");
                m.id = B,
                m.style.position = "relative",
                m.style.top = "-100px",
                m.style.border = "0",
                m.style.margin = "0",
                m.style.padding = "0",
                t.appendChild(m);
                const g = function() {
                    if (!l || !l.contentWindow)
                        return;
                    const e = document.getElementById(B);
                    if (e) {
                        try {
                            const e = u(l)
                              , {clientHeight: t, scrollTop: n} = document.scrollingElement;
                            a.postMessage(l.contentWindow, q, "scroll", {
                                clientHeight: t,
                                scrollTop: n > e ? n - e : 0
                            })
                        } finally {}
                        (function(e, t) {
                            if (!e)
                                return !1;
                            const n = function(e) {
                                const t = document.scrollingElement;
                                return t.scrollTop + t.offsetTop
                            }()
                              , o = u(e)
                              , r = function(e, t) {
                                const {offsetHeight: n} = e;
                                return t + n
                            }(e, o)
                              , i = n + function(e) {
                                const {documentElement: t} = document
                                  , {innerHeight: n} = window;
                                if (n)
                                    return n;
                                if (!t)
                                    return 0;
                                const {clientHeight: o} = t;
                                return Number.isNaN(o) ? 0 : o
                            }(t);
                            return o < i && o > n || r < i && r > n || o < n && r > i
                        }
                        )(e) && a.postMessage(l.contentWindow, q, "scrollBottomDetected", {})
                    }
                };
                window.addEventListener("scroll", g, !1)
            }
        };
        function V() {
            const e = arguments[0]
              , t = Array.prototype.slice.call(arguments, 1);
            if (!e)
                return void console.warn("Canny: No methodName supplied to SDK");
            const n = J[e];
            if (n)
                return n.apply(null, t);
            console.warn("Canny: Invalid methodName supplied to SDK: " + e)
        }
        function Y(e) {
            if (Array.from(e.children).some((e=>"Canny_BadgeContainer" === e.className)))
                return;
            e.style.position = "relative";
            const t = document.createElement("div");
            t.className = "Canny_BadgeContainer";
            const n = document.createElement("div");
            n.className = "Canny_Badge",
            t.appendChild(n),
            e.appendChild(t)
        }
        function X(e) {
            return !!e.dataset.cannyChangelog || !!e.parentElement && X(e.parentElement)
        }
        function G(e) {
            return e === m.light ? F : e === m.dark || e === m.auto && window.matchMedia("(prefers-color-scheme: dark)").matches ? D : F
        }
        function Q() {
            return window.innerWidth <= 500
        }
        function K(e, t, n, o={
            resize: !1
        }) {
            if (!t || !n || !e.loaded || "none" === e.style.display)
                return;
            const r = Q();
            if (e.fullscreenMode !== r && (e.fullscreenMode = r,
            a.postMessage(e.contentWindow, H, "set-fullscreen-mode", {
                fullscreenMode: r
            }),
            a.postMessage(e.contentWindow, H, "calculateHeight", {
                resize: o.resize
            })),
            r)
                return e.style.position = "fixed",
                e.style.top = 0,
                e.style.bottom = 0,
                e.style.left = 0,
                e.style.right = 0,
                e.width = window.innerWidth,
                e.height = window.innerHeight,
                e.style.width = window.innerWidth + "px",
                e.style.height = window.innerHeight + "px",
                e.style.borderRadius = "0",
                void (e.style.boxShadow = "none");
            e.style.position = "absolute",
            e.width = 350,
            e.style.background = G(n.theme),
            e.style.width = "350px",
            e.style.borderRadius = "8px",
            e.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.15)";
            const i = function(e) {
                const t = e.getBoundingClientRect();
                return {
                    top: t.top + window.pageYOffset,
                    bottom: t.top + window.pageYOffset + e.offsetHeight,
                    left: t.left + window.pageXOffset,
                    right: t.left + window.pageXOffset + e.offsetWidth
                }
            }(t);
            "left" === n.align ? e.style.left = i.left + "px" : "right" === n.align ? e.style.left = i.right - 350 + "px" : "top" === n.align ? e.style.top = i.top + "px" : "bottom" === n.align && (e.style.top = i.bottom - e.height + "px"),
            "left" === n.position ? e.style.left = i.left - 10 - e.width + "px" : "top" === n.position ? e.style.top = i.top - 10 - e.height + "px" : "bottom" === n.position ? e.style.top = i.bottom + 10 + "px" : "right" === n.position && (e.style.left = i.right + 10 + "px")
        }
        function Z(e, t=A) {
            if (!e || "string" != typeof e)
                return !0;
            if (e.match(/^[a-f0-9]+$/i))
                return !0;
            if (!(e=>{
                if ("string" == typeof e)
                    return e.match(/^[a-z0-9-_=]+\.[a-z0-9-_=]+\.[a-z0-9-_.+/=]+$/i)
            }
            )(e))
                return console.warn(`Canny: Failed to render ${t} because the provided ssoToken is invalid. See ssoToken documentation here: https://developers.canny.io/install/widget/sso.`),
                !1;
            const n = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
              , o = decodeURIComponent(escape(window.atob(n)));
            let r;
            try {
                r = JSON.parse(o)
            } catch (e) {
                return console.warn(`Canny: Failed to render ${t} because ssoToken payload was not valid JSON.`),
                !1
            }
            return r.id ? r.email ? r.name ? N(r.id) ? R(r.email) ? !!M(r.name) || (console.warn(`Canny: Failed to render ${t} because 'name' field in ssoToken payload was present, but invalid.`),
            !1) : (console.warn(`Canny: Failed to render ${t} because 'email' field in ssoToken payload was present, but invalid.`),
            !1) : (console.warn(`Canny: Failed to render ${t} because 'id' field in ssoToken payload was present, but invalid.`),
            !1) : (console.warn(`Canny: Failed to render ${t} because required 'name' field was missing from ssoToken payload.`),
            !1) : (console.warn(`Canny: Failed to render ${t} because required 'email' field was missing from ssoToken payload.`),
            !1) : (console.warn(`Canny: Failed to render ${t} because required 'id' field was missing from ssoToken payload.`),
            !1)
        }
        function ee(e) {
            e.theme && (e.theme === m.dark || e.theme === m.light || e.theme === m.auto || (console.warn(`Canny: Failed to render Canny widget with theme: ${e.theme}, widget will be rendered with light theme. Please check the theme you provided in your config. We only support 'auto', 'light' and 'dark' theme at the moment.`),
            e.theme = m.light))
        }
        window?.Canny?.initialized || ((window.Canny && window.Canny.q || []).forEach((e=>{
            V.apply(null, e)
        }
        )),
        window.Canny = V,
        window.Canny.initialized = !0)
    }
    )()
}
)();
//# sourceMappingURL=sdk.js.map
