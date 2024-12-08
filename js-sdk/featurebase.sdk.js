!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("FeaturebaseSDK", [], t) : "object" == typeof exports ? exports.FeaturebaseSDK = t() : e.FeaturebaseSDK = t()
}(this, (()=>(()=>{
    var e, t, i = {
        702: (e,t)=>{
            var i, n, a;
            !function(s) {
                if ("undefined" != typeof window) {
                    var r, o = 0, l = !1, d = !1, c = 7, u = "[iFrameSizer]", h = u.length, f = null, p = window.requestAnimationFrame, m = Object.freeze({
                        max: 1,
                        scroll: 1,
                        bodyScroll: 1,
                        documentElementScroll: 1
                    }), g = {}, v = null, y = Object.freeze({
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
                        mouseEvents: !0,
                        resizeFrom: "parent",
                        scrolling: !1,
                        sizeHeight: !0,
                        sizeWidth: !1,
                        warningTimeout: 5e3,
                        tolerance: 0,
                        widthCalculationMethod: "scroll",
                        onClose: function() {
                            return !0
                        },
                        onClosed: function() {},
                        onInit: function() {},
                        onMessage: function() {
                            C("onMessage function not defined")
                        },
                        onMouseEnter: function() {},
                        onMouseLeave: function() {},
                        onResized: function() {},
                        onScroll: function() {
                            return !0
                        }
                    }), b = {};
                    window.jQuery !== s && ((r = window.jQuery).fn ? r.fn.iFrameResize || (r.fn.iFrameResize = function(e) {
                        return this.filter("iframe").each((function(t, i) {
                            $(i, e)
                        }
                        )).end()
                    }
                    ) : T("", "Unable to bind to jQuery, it is not fully loaded.")),
                    n = [],
                    (a = "function" == typeof (i = K) ? i.apply(t, n) : i) === s || (e.exports = a),
                    window.iFrameResize = window.iFrameResize || K()
                }
                function w() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                }
                function k(e, t, i) {
                    e.addEventListener(t, i, !1)
                }
                function x(e, t, i) {
                    e.removeEventListener(t, i, !1)
                }
                function _(e) {
                    return u + "[" + function(e) {
                        var t = "Host page: " + e;
                        return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e),
                        t
                    }(e) + "]"
                }
                function E(e) {
                    return g[e] ? g[e].log : l
                }
                function S(e, t) {
                    j("log", e, t, E(e))
                }
                function T(e, t) {
                    j("info", e, t, E(e))
                }
                function C(e, t) {
                    j("warn", e, t, !0)
                }
                function j(e, t, i, n) {
                    !0 === n && "object" == typeof window.console && console[e](_(t), i)
                }
                function I(e) {
                    function t() {
                        a("Height"),
                        a("Width"),
                        N((function() {
                            W(P),
                            z($),
                            m("onResized", P)
                        }
                        ), P, "init")
                    }
                    function i(e) {
                        return "border-box" !== e.boxSizing ? 0 : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0)
                    }
                    function n(e) {
                        return "border-box" !== e.boxSizing ? 0 : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0)
                    }
                    function a(e) {
                        var t = Number(g[$]["max" + e])
                          , i = Number(g[$]["min" + e])
                          , n = e.toLowerCase()
                          , a = Number(P[n]);
                        S($, "Checking " + n + " is in range " + i + "-" + t),
                        a < i && (a = i,
                        S($, "Set " + n + " to min value")),
                        a > t && (a = t,
                        S($, "Set " + n + " to max value")),
                        P[n] = "" + a
                    }
                    function s(e) {
                        return I.slice(I.indexOf(":") + c + e)
                    }
                    function r(e, t) {
                        var i, n, a;
                        i = function() {
                            var i, n;
                            Z("Send Page Info", "pageInfo:" + (i = document.body.getBoundingClientRect(),
                            n = P.iframe.getBoundingClientRect(),
                            JSON.stringify({
                                iframeHeight: n.height,
                                iframeWidth: n.width,
                                clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                                clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                offsetTop: parseInt(n.top - i.top, 10),
                                offsetLeft: parseInt(n.left - i.left, 10),
                                scrollTop: window.pageYOffset,
                                scrollLeft: window.pageXOffset,
                                documentHeight: document.documentElement.clientHeight,
                                documentWidth: document.documentElement.clientWidth,
                                windowHeight: window.innerHeight,
                                windowWidth: window.innerWidth
                            })), e, t)
                        }
                        ,
                        n = 32,
                        b[a = t] || (b[a] = setTimeout((function() {
                            b[a] = null,
                            i()
                        }
                        ), n))
                    }
                    function o(e) {
                        var t = e.getBoundingClientRect();
                        return O($),
                        {
                            x: Math.floor(Number(t.left) + Number(f.x)),
                            y: Math.floor(Number(t.top) + Number(f.y))
                        }
                    }
                    function l(e) {
                        var t = e ? o(P.iframe) : {
                            x: 0,
                            y: 0
                        }
                          , i = {
                            x: Number(P.width) + t.x,
                            y: Number(P.height) + t.y
                        };
                        S($, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"),
                        window.top === window.self ? (f = i,
                        d(),
                        S($, "--")) : window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](i.x, i.y) : C($, "Unable to scroll to requested position, window.parentIFrame not found")
                    }
                    function d() {
                        !1 === m("onScroll", f) ? F() : z($)
                    }
                    function p(e) {
                        var t = {};
                        if (0 === Number(P.width) && 0 === Number(P.height)) {
                            var i = s(9).split(":");
                            t = {
                                x: i[1],
                                y: i[0]
                            }
                        } else
                            t = {
                                x: P.width,
                                y: P.height
                            };
                        m(e, {
                            iframe: P.iframe,
                            screenX: Number(t.x),
                            screenY: Number(t.y),
                            type: P.type
                        })
                    }
                    function m(e, t) {
                        return A($, e, t)
                    }
                    var v, y, w, _, E, j, I = e.data, P = {}, $ = null;
                    "[iFrameResizerChild]Ready" === I ? function() {
                        for (var e in g)
                            Z("iFrame requested init", M(e), g[e].iframe, e)
                    }() : u === ("" + I).slice(0, h) && I.slice(h).split(":")[0]in g ? (w = I.slice(h).split(":"),
                    _ = w[1] ? parseInt(w[1], 10) : 0,
                    E = g[w[0]] && g[w[0]].iframe,
                    j = getComputedStyle(E),
                    P = {
                        iframe: E,
                        id: w[0],
                        height: _ + i(j) + n(j),
                        width: w[2],
                        type: w[3]
                    },
                    $ = P.id,
                    g[$] && (g[$].loaded = !0),
                    (y = P.type in {
                        true: 1,
                        false: 1,
                        undefined: 1
                    }) && S($, "Ignoring init message from meta parent page"),
                    !y && function(e) {
                        var t = !0;
                        return g[e] || (t = !1,
                        C(P.type + " No settings for " + e + ". Message was: " + I)),
                        t
                    }($) && (S($, "Received: " + I),
                    v = !0,
                    null === P.iframe && (C($, "IFrame (" + P.id + ") not found"),
                    v = !1),
                    v && function() {
                        var t, i = e.origin, n = g[$] && g[$].checkOrigin;
                        if (n && "" + i != "null" && !(n.constructor === Array ? function() {
                            var e = 0
                              , t = !1;
                            for (S($, "Checking connection is from allowed list of origins: " + n); e < n.length; e++)
                                if (n[e] === i) {
                                    t = !0;
                                    break
                                }
                            return t
                        }() : (t = g[$] && g[$].remoteHost,
                        S($, "Checking connection is from: " + t),
                        i === t)))
                            throw new Error("Unexpected message received from: " + i + " for " + P.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                        return !0
                    }() && function() {
                        switch (g[$] && g[$].firstRun && g[$] && (g[$].firstRun = !1),
                        P.type) {
                        case "close":
                            L(P.iframe);
                            break;
                        case "message":
                            c = s(6),
                            S($, "onMessage passed: {iframe: " + P.iframe.id + ", message: " + c + "}"),
                            m("onMessage", {
                                iframe: P.iframe,
                                message: JSON.parse(c)
                            }),
                            S($, "--");
                            break;
                        case "mouseenter":
                            p("onMouseEnter");
                            break;
                        case "mouseleave":
                            p("onMouseLeave");
                            break;
                        case "autoResize":
                            g[$].autoResize = JSON.parse(s(9));
                            break;
                        case "scrollTo":
                            l(!1);
                            break;
                        case "scrollToOffset":
                            l(!0);
                            break;
                        case "pageInfo":
                            r(g[$] && g[$].iframe, $),
                            function() {
                                function e(e, n) {
                                    function a() {
                                        g[i] ? r(g[i].iframe, i) : t()
                                    }
                                    ["scroll", "resize"].forEach((function(t) {
                                        S(i, e + t + " listener for sendPageInfo"),
                                        n(window, t, a)
                                    }
                                    ))
                                }
                                function t() {
                                    e("Remove ", x)
                                }
                                var i = $;
                                e("Add ", k),
                                g[i] && (g[i].stopPageInfo = t)
                            }();
                            break;
                        case "pageInfoStop":
                            g[$] && g[$].stopPageInfo && (g[$].stopPageInfo(),
                            delete g[$].stopPageInfo);
                            break;
                        case "inPageLink":
                            i = s(9).split("#")[1] || "",
                            n = decodeURIComponent(i),
                            (a = document.getElementById(n) || document.getElementsByName(n)[0]) ? (e = o(a),
                            S($, "Moving to in page link (#" + i + ") at x: " + e.x + " y: " + e.y),
                            f = {
                                x: e.x,
                                y: e.y
                            },
                            d(),
                            S($, "--")) : window.top === window.self ? S($, "In page link #" + i + " not found") : window.parentIFrame ? window.parentIFrame.moveToAnchor(i) : S($, "In page link #" + i + " not found and window.parentIFrame not found");
                            break;
                        case "reset":
                            R(P);
                            break;
                        case "init":
                            t(),
                            m("onInit", P.iframe);
                            break;
                        default:
                            0 === Number(P.width) && 0 === Number(P.height) ? C("Unsupported message received (" + P.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page") : t()
                        }
                        var e, i, n, a, c
                    }())) : T($, "Ignored: " + I)
                }
                function A(e, t, i) {
                    var n = null
                      , a = null;
                    if (g[e]) {
                        if ("function" != typeof (n = g[e][t]))
                            throw new TypeError(t + " on iFrame[" + e + "] is not a function");
                        a = n(i)
                    }
                    return a
                }
                function P(e) {
                    var t = e.id;
                    delete g[t]
                }
                function L(e) {
                    var t = e.id;
                    if (!1 !== A(t, "onClose", t)) {
                        S(t, "Removing iFrame: " + t);
                        try {
                            e.parentNode && e.parentNode.removeChild(e)
                        } catch (e) {
                            C(e)
                        }
                        A(t, "onClosed", t),
                        S(t, "--"),
                        P(e)
                    } else
                        S(t, "Close iframe cancelled by onClose event")
                }
                function O(e) {
                    null === f && S(e, "Get page position: " + (f = {
                        x: window.pageXOffset === s ? document.documentElement.scrollLeft : window.pageXOffset,
                        y: window.pageYOffset === s ? document.documentElement.scrollTop : window.pageYOffset
                    }).x + "," + f.y)
                }
                function z(e) {
                    null !== f && (window.scrollTo(f.x, f.y),
                    S(e, "Set page position: " + f.x + "," + f.y),
                    F())
                }
                function F() {
                    f = null
                }
                function R(e) {
                    S(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")),
                    O(e.id),
                    N((function() {
                        W(e),
                        Z("reset", "reset", e.iframe, e.id)
                    }
                    ), e, "reset")
                }
                function W(e) {
                    function t(t) {
                        d || "0" !== e[t] || (d = !0,
                        S(n, "Hidden iFrame detected, creating visibility listener"),
                        function() {
                            function e() {
                                function e(e) {
                                    function t(t) {
                                        return "0px" === (g[e] && g[e].iframe.style[t])
                                    }
                                    function i(e) {
                                        return null !== e.offsetParent
                                    }
                                    g[e] && i(g[e].iframe) && (t("height") || t("width")) && Z("Visibility change", "resize", g[e].iframe, e)
                                }
                                Object.keys(g).forEach((function(t) {
                                    e(t)
                                }
                                ))
                            }
                            function t(t) {
                                S("window", "Mutation observed: " + t[0].target + " " + t[0].type),
                                B(e, 16)
                            }
                            function i() {
                                var e = document.querySelector("body")
                                  , i = {
                                    attributes: !0,
                                    attributeOldValue: !1,
                                    characterData: !0,
                                    characterDataOldValue: !1,
                                    childList: !0,
                                    subtree: !0
                                };
                                new n(t).observe(e, i)
                            }
                            var n = w();
                            n && i()
                        }())
                    }
                    function i(i) {
                        !function(t) {
                            e.id ? (e.iframe.style[t] = e[t] + "px",
                            S(e.id, "IFrame (" + n + ") " + t + " set to " + e[t] + "px")) : S("undefined", "messageData id not set")
                        }(i),
                        t(i)
                    }
                    var n = e.iframe.id;
                    g[n] && (g[n].sizeHeight && i("height"),
                    g[n].sizeWidth && i("width"))
                }
                function N(e, t, i) {
                    i !== t.type && p && !window.jasmine ? (S(t.id, "Requesting animation frame"),
                    p(e)) : e()
                }
                function Z(e, t, i, n, a) {
                    var s, r = !1;
                    n = n || i.id,
                    g[n] && (i && "contentWindow"in i && null !== i.contentWindow ? (s = g[n] && g[n].targetOrigin,
                    S(n, "[" + e + "] Sending msg to iframe[" + n + "] (" + t + ") targetOrigin: " + s),
                    i.contentWindow.postMessage(u + t, s)) : C(n, "[" + e + "] IFrame(" + n + ") not found"),
                    a && g[n] && g[n].warningTimeout && (g[n].msgTimeout = setTimeout((function() {
                        !g[n] || g[n].loaded || r || (r = !0,
                        C(n, "IFrame has not responded within " + g[n].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
                    }
                    ), g[n].warningTimeout)))
                }
                function M(e) {
                    return e + ":" + g[e].bodyMarginV1 + ":" + g[e].sizeWidth + ":" + g[e].log + ":" + g[e].interval + ":" + g[e].enablePublicMethods + ":" + g[e].autoResize + ":" + g[e].bodyMargin + ":" + g[e].heightCalculationMethod + ":" + g[e].bodyBackground + ":" + g[e].bodyPadding + ":" + g[e].tolerance + ":" + g[e].inPageLinks + ":" + g[e].resizeFrom + ":" + g[e].widthCalculationMethod + ":" + g[e].mouseEvents
                }
                function $(e, t) {
                    function i(e) {
                        var t = e.split("Callback");
                        if (2 === t.length) {
                            var i = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
                            this[i] = this[e],
                            delete this[e],
                            C(r, "Deprecated: '" + e + "' has been renamed '" + i + "'. The old method will be removed in the next major version.")
                        }
                    }
                    var n, a, r = function(i) {
                        if ("string" != typeof i)
                            throw new TypeError("Invaild id for iFrame. Expected String");
                        var n;
                        return "" === i && (e.id = (n = t && t.id || y.id + o++,
                        null !== document.getElementById(n) && (n += o++),
                        i = n),
                        l = (t || {}).log,
                        S(i, "Added missing iframe ID: " + i + " (" + e.src + ")")),
                        i
                    }(e.id);
                    r in g && "iFrameResizer"in e ? C(r, "Ignored iFrame, already setup.") : (!function(t) {
                        var n;
                        t = t || {},
                        g[r] = Object.create(null),
                        g[r].iframe = e,
                        g[r].firstRun = !0,
                        g[r].remoteHost = e.src && e.src.split("/").slice(0, 3).join("/"),
                        function(e) {
                            if ("object" != typeof e)
                                throw new TypeError("Options is not an object")
                        }(t),
                        Object.keys(t).forEach(i, t),
                        function(e) {
                            for (var t in y)
                                Object.prototype.hasOwnProperty.call(y, t) && (g[r][t] = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : y[t])
                        }(t),
                        g[r] && (g[r].targetOrigin = !0 === g[r].checkOrigin ? "" === (n = g[r].remoteHost) || null !== n.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : n : "*")
                    }(t),
                    function() {
                        switch (S(r, "IFrame scrolling " + (g[r] && g[r].scrolling ? "enabled" : "disabled") + " for " + r),
                        e.style.overflow = !1 === (g[r] && g[r].scrolling) ? "hidden" : "auto",
                        g[r] && g[r].scrolling) {
                        case "omit":
                            break;
                        case !0:
                            e.scrolling = "yes";
                            break;
                        case !1:
                            e.scrolling = "no";
                            break;
                        default:
                            e.scrolling = g[r] ? g[r].scrolling : "no"
                        }
                    }(),
                    function() {
                        function t(t) {
                            var i = g[r][t];
                            1 / 0 !== i && 0 !== i && (e.style[t] = "number" == typeof i ? i + "px" : i,
                            S(r, "Set " + t + " = " + e.style[t]))
                        }
                        function i(e) {
                            if (g[r]["min" + e] > g[r]["max" + e])
                                throw new Error("Value for min" + e + " can not be greater than max" + e)
                        }
                        i("Height"),
                        i("Width"),
                        t("maxHeight"),
                        t("minHeight"),
                        t("maxWidth"),
                        t("minWidth")
                    }(),
                    "number" != typeof (g[r] && g[r].bodyMargin) && "0" !== (g[r] && g[r].bodyMargin) || (g[r].bodyMarginV1 = g[r].bodyMargin,
                    g[r].bodyMargin = g[r].bodyMargin + "px"),
                    n = M(r),
                    (a = w()) && function(t) {
                        e.parentNode && new t((function(t) {
                            t.forEach((function(t) {
                                Array.prototype.slice.call(t.removedNodes).forEach((function(t) {
                                    t === e && L(e)
                                }
                                ))
                            }
                            ))
                        }
                        )).observe(e.parentNode, {
                            childList: !0
                        })
                    }(a),
                    k(e, "load", (function() {
                        var t, i;
                        Z("iFrame.onload", n, e, s, !0),
                        t = g[r] && g[r].firstRun,
                        i = g[r] && g[r].heightCalculationMethod in m,
                        !t && i && R({
                            iframe: e,
                            height: 0,
                            width: 0,
                            type: "init"
                        })
                    }
                    )),
                    Z("init", n, e, s, !0),
                    g[r] && (g[r].iframe.iFrameResizer = {
                        close: L.bind(null, g[r].iframe),
                        removeListeners: P.bind(null, g[r].iframe),
                        resize: Z.bind(null, "Window resize", "resize", g[r].iframe),
                        moveToAnchor: function(e) {
                            Z("Move to anchor", "moveToAnchor:" + e, g[r].iframe, r)
                        },
                        sendMessage: function(e) {
                            Z("Send Message", "message:" + (e = JSON.stringify(e)), g[r].iframe, r)
                        }
                    }))
                }
                function B(e, t) {
                    null === v && (v = setTimeout((function() {
                        v = null,
                        e()
                    }
                    ), t))
                }
                function D() {
                    "hidden" !== document.visibilityState && (S("document", "Trigger event: Visibility change"),
                    B((function() {
                        U("Tab Visible", "resize")
                    }
                    ), 16))
                }
                function U(e, t) {
                    Object.keys(g).forEach((function(i) {
                        (function(e) {
                            return g[e] && "parent" === g[e].resizeFrom && g[e].autoResize && !g[e].firstRun
                        }
                        )(i) && Z(e, t, g[i].iframe, i)
                    }
                    ))
                }
                function V() {
                    k(window, "message", I),
                    k(window, "resize", (function() {
                        var e;
                        S("window", "Trigger event: " + (e = "resize")),
                        B((function() {
                            U("Window " + e, "resize")
                        }
                        ), 16)
                    }
                    )),
                    k(document, "visibilitychange", D),
                    k(document, "-webkit-visibilitychange", D)
                }
                function K() {
                    function e(e, i) {
                        i && (!function() {
                            if (!i.tagName)
                                throw new TypeError("Object is not a valid DOM element");
                            if ("IFRAME" !== i.tagName.toUpperCase())
                                throw new TypeError("Expected <IFRAME> tag, found <" + i.tagName + ">")
                        }(),
                        $(i, e),
                        t.push(i))
                    }
                    var t;
                    return function() {
                        var e, t = ["moz", "webkit", "o", "ms"];
                        for (e = 0; e < t.length && !p; e += 1)
                            p = window[t[e] + "RequestAnimationFrame"];
                        p ? p = p.bind(window) : S("setup", "RequestAnimationFrame not supported")
                    }(),
                    V(),
                    function(i, n) {
                        switch (t = [],
                        function(e) {
                            e && e.enablePublicMethods && C("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
                        }(i),
                        typeof n) {
                        case "undefined":
                        case "string":
                            Array.prototype.forEach.call(document.querySelectorAll(n || "iframe"), e.bind(s, i));
                            break;
                        case "object":
                            e(i, n);
                            break;
                        default:
                            throw new TypeError("Unexpected data type (" + typeof n + ")")
                        }
                        return t
                    }
                }
            }()
        }
        ,
        981: (e,t,i)=>{
            "use strict";
            i.d(t, {
                I: ()=>a
            });
            const n = {
                en: {
                    feedback: "Feedback",
                    highlight: "Highlight",
                    comment: "Comment",
                    draw: "Draw",
                    hide: "Hide",
                    done: "Done",
                    "type-your-text-here": "Type your text here..."
                },
                de: {
                    feedback: "Feedback",
                    highlight: "Markieren",
                    comment: "Kommentar",
                    draw: "Zeichnen",
                    hide: "Verstecken",
                    done: "Fertig",
                    "type-your-text-here": "Geben Sie hier Ihren Text ein..."
                },
                es: {
                    feedback: "Comentarios",
                    highlight: "Resaltar",
                    comment: "Comentario",
                    draw: "Dibujar",
                    hide: "Ocultar",
                    done: "Listo",
                    "type-your-text-here": "Escriba su texto aquí..."
                },
                et: {
                    feedback: "Tagasiside",
                    highlight: "Esiletõstmine",
                    comment: "Kommentaar",
                    draw: "Joonista",
                    hide: "Peida",
                    done: "Valmis",
                    "type-your-text-here": "Kirjutage oma tekst siia..."
                },
                fr: {
                    feedback: "Avis",
                    highlight: "Surligner",
                    comment: "Commentaire",
                    draw: "Dessiner",
                    hide: "Cacher",
                    done: "Terminé",
                    "type-your-text-here": "Tapez votre texte ici..."
                },
                kr: {
                    feedback: "피드백",
                    highlight: "강조",
                    comment: "댓글",
                    draw: "그리기",
                    hide: "숨기기",
                    done: "완료",
                    "type-your-text-here": "여기에 텍스트를 입력하세요..."
                },
                nl: {
                    feedback: "Feedback",
                    highlight: "Markeren",
                    comment: "Opmerking",
                    draw: "Tekenen",
                    hide: "Verbergen",
                    done: "Gereed",
                    "type-your-text-here": "Typ hier uw tekst..."
                },
                pt: {
                    feedback: "Comentários",
                    highlight: "Destacar",
                    comment: "Comentário",
                    draw: "Desenhar",
                    hide: "Ocultar",
                    done: "Concluído",
                    "type-your-text-here": "Digite seu texto aqui..."
                },
                ru: {
                    feedback: "Отзыв",
                    highlight: "Выделить",
                    comment: "Комментарий",
                    draw: "Рисовать",
                    hide: "Скрыть",
                    done: "Готово",
                    "type-your-text-here": "Введите ваш текст здесь..."
                }
            };
            function a(e, t) {
                return n[t] && n[t][e] ? n[t][e] : n.en[e] ? n.en[e] : e
            }
        }
    }, n = {};
    function a(e) {
        var t = n[e];
        if (void 0 !== t)
            return t.exports;
        var s = n[e] = {
            exports: {}
        };
        return i[e](s, s.exports, a),
        s.exports
    }
    a.m = i,
    a.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    a.d = (e,t)=>{
        for (var i in t)
            a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    a.f = {},
    a.e = e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e, t),
    t)), [])),
    a.u = e=>({
        92: "snapsvg",
        154: "screenshot",
        682: "pako",
        737: "html-to-canvas"
    }[e] + "." + a.h() + ".chunk.js"),
    a.miniCssF = e=>"screenshot-" + e + "." + a.h() + ".css",
    a.h = ()=>"f5841762e01e1f1a18d5",
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    e = {},
    t = "FeaturebaseSDK:",
    a.l = (i,n,s,r)=>{
        if (e[i])
            e[i].push(n);
        else {
            var o, l;
            if (void 0 !== s)
                for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
                    var u = d[c];
                    if (u.getAttribute("src") == i || u.getAttribute("data-webpack") == t + s) {
                        o = u;
                        break
                    }
                }
            o || (l = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            a.nc && o.setAttribute("nonce", a.nc),
            o.setAttribute("data-webpack", t + s),
            o.src = i),
            e[i] = [n];
            var h = (t,n)=>{
                o.onerror = o.onload = null,
                clearTimeout(f);
                var a = e[i];
                if (delete e[i],
                o.parentNode && o.parentNode.removeChild(o),
                a && a.forEach((e=>e(n))),
                t)
                    return t(n)
            }
              , f = setTimeout(h.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = h.bind(null, o.onerror),
            o.onload = h.bind(null, o.onload),
            l && document.head.appendChild(o)
        }
    }
    ,
    a.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e;
        a.g.importScripts && (e = a.g.location + "");
        var t = a.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var i = t.getElementsByTagName("script");
            if (i.length)
                for (var n = i.length - 1; n > -1 && !e; )
                    e = i[n--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        a.p = e
    }
    )(),
    (()=>{
        if ("undefined" != typeof document) {
            var e = e=>new Promise(((t,i)=>{
                var n = a.miniCssF(e)
                  , s = a.p + n;
                if (((e,t)=>{
                    for (var i = document.getElementsByTagName("link"), n = 0; n < i.length; n++) {
                        var a = (r = i[n]).getAttribute("data-href") || r.getAttribute("href");
                        if ("stylesheet" === r.rel && (a === e || a === t))
                            return r
                    }
                    var s = document.getElementsByTagName("style");
                    for (n = 0; n < s.length; n++) {
                        var r;
                        if ((a = (r = s[n]).getAttribute("data-href")) === e || a === t)
                            return r
                    }
                }
                )(n, s))
                    return t();
                ((e,t,i,n,s)=>{
                    var r = document.createElement("link");
                    r.rel = "stylesheet",
                    r.type = "text/css",
                    a.nc && (r.nonce = a.nc),
                    r.onerror = r.onload = i=>{
                        if (r.onerror = r.onload = null,
                        "load" === i.type)
                            n();
                        else {
                            var a = i && i.type
                              , o = i && i.target && i.target.href || t
                              , l = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + o + ")");
                            l.name = "ChunkLoadError",
                            l.code = "CSS_CHUNK_LOAD_FAILED",
                            l.type = a,
                            l.request = o,
                            r.parentNode && r.parentNode.removeChild(r),
                            s(l)
                        }
                    }
                    ,
                    r.href = t,
                    i ? i.parentNode.insertBefore(r, i.nextSibling) : document.head.appendChild(r)
                }
                )(e, s, null, t, i)
            }
            ))
              , t = {
                630: 0
            };
            a.f.miniCss = (i,n)=>{
                t[i] ? n.push(t[i]) : 0 !== t[i] && {
                    154: 1
                }[i] && n.push(t[i] = e(i).then((()=>{
                    t[i] = 0
                }
                ), (e=>{
                    throw delete t[i],
                    e
                }
                )))
            }
        }
    }
    )(),
    (()=>{
        var e = {
            630: 0
        };
        a.f.j = (t,i)=>{
            var n = a.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    i.push(n[2]);
                else {
                    var s = new Promise(((i,a)=>n = e[t] = [i, a]));
                    i.push(n[2] = s);
                    var r = a.p + a.u(t)
                      , o = new Error;
                    a.l(r, (i=>{
                        if (a.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                        n)) {
                            var s = i && ("load" === i.type ? "missing" : i.type)
                              , r = i && i.target && i.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + s + ": " + r + ")",
                            o.name = "ChunkLoadError",
                            o.type = s,
                            o.request = r,
                            n[1](o)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = (t,i)=>{
            var n, s, [r,o,l] = i, d = 0;
            if (r.some((t=>0 !== e[t]))) {
                for (n in o)
                    a.o(o, n) && (a.m[n] = o[n]);
                if (l)
                    l(a)
            }
            for (t && t(i); d < r.length; d++)
                s = r[d],
                a.o(e, s) && e[s] && e[s][0](),
                e[s] = 0
        }
          , i = this.webpackChunkFeaturebaseSDK = this.webpackChunkFeaturebaseSDK || [];
        i.forEach(t.bind(null, 0)),
        i.push = t.bind(null, i.push.bind(i))
    }
    )();
    var s = {};
    return (()=>{
        "use strict";
        var e, t;
        a.r(s),
        function(e) {
            e.assertEqual = e=>e,
            e.assertIs = function(e) {}
            ,
            e.assertNever = function(e) {
                throw new Error
            }
            ,
            e.arrayToEnum = e=>{
                const t = {};
                for (const i of e)
                    t[i] = i;
                return t
            }
            ,
            e.getValidEnumValues = t=>{
                const i = e.objectKeys(t).filter((e=>"number" != typeof t[t[e]]))
                  , n = {};
                for (const e of i)
                    n[e] = t[e];
                return e.objectValues(n)
            }
            ,
            e.objectValues = t=>e.objectKeys(t).map((function(e) {
                return t[e]
            }
            )),
            e.objectKeys = "function" == typeof Object.keys ? e=>Object.keys(e) : e=>{
                const t = [];
                for (const i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && t.push(i);
                return t
            }
            ,
            e.find = (e,t)=>{
                for (const i of e)
                    if (t(i))
                        return i
            }
            ,
            e.isInteger = "function" == typeof Number.isInteger ? e=>Number.isInteger(e) : e=>"number" == typeof e && isFinite(e) && Math.floor(e) === e,
            e.joinValues = function(e, t=" | ") {
                return e.map((e=>"string" == typeof e ? `'${e}'` : e)).join(t)
            }
            ,
            e.jsonStringifyReplacer = (e,t)=>"bigint" == typeof t ? t.toString() : t
        }(e || (e = {})),
        function(e) {
            e.mergeShapes = (e,t)=>({
                ...e,
                ...t
            })
        }(t || (t = {}));
        const i = e.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
          , n = e=>{
            switch (typeof e) {
            case "undefined":
                return i.undefined;
            case "string":
                return i.string;
            case "number":
                return isNaN(e) ? i.nan : i.number;
            case "boolean":
                return i.boolean;
            case "function":
                return i.function;
            case "bigint":
                return i.bigint;
            case "symbol":
                return i.symbol;
            case "object":
                return Array.isArray(e) ? i.array : null === e ? i.null : e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch ? i.promise : "undefined" != typeof Map && e instanceof Map ? i.map : "undefined" != typeof Set && e instanceof Set ? i.set : "undefined" != typeof Date && e instanceof Date ? i.date : i.object;
            default:
                return i.unknown
            }
        }
          , r = e.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
        class o extends Error {
            constructor(e) {
                super(),
                this.issues = [],
                this.addIssue = e=>{
                    this.issues = [...this.issues, e]
                }
                ,
                this.addIssues = (e=[])=>{
                    this.issues = [...this.issues, ...e]
                }
                ;
                const t = new.target.prototype;
                Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t,
                this.name = "ZodError",
                this.issues = e
            }
            get errors() {
                return this.issues
            }
            format(e) {
                const t = e || function(e) {
                    return e.message
                }
                  , i = {
                    _errors: []
                }
                  , n = e=>{
                    for (const a of e.issues)
                        if ("invalid_union" === a.code)
                            a.unionErrors.map(n);
                        else if ("invalid_return_type" === a.code)
                            n(a.returnTypeError);
                        else if ("invalid_arguments" === a.code)
                            n(a.argumentsError);
                        else if (0 === a.path.length)
                            i._errors.push(t(a));
                        else {
                            let e = i
                              , n = 0;
                            for (; n < a.path.length; ) {
                                const i = a.path[n];
                                n === a.path.length - 1 ? (e[i] = e[i] || {
                                    _errors: []
                                },
                                e[i]._errors.push(t(a))) : e[i] = e[i] || {
                                    _errors: []
                                },
                                e = e[i],
                                n++
                            }
                        }
                }
                ;
                return n(this),
                i
            }
            toString() {
                return this.message
            }
            get message() {
                return JSON.stringify(this.issues, e.jsonStringifyReplacer, 2)
            }
            get isEmpty() {
                return 0 === this.issues.length
            }
            flatten(e=(e=>e.message)) {
                const t = {}
                  , i = [];
                for (const n of this.issues)
                    n.path.length > 0 ? (t[n.path[0]] = t[n.path[0]] || [],
                    t[n.path[0]].push(e(n))) : i.push(e(n));
                return {
                    formErrors: i,
                    fieldErrors: t
                }
            }
            get formErrors() {
                return this.flatten()
            }
        }
        o.create = e=>new o(e);
        const l = (t,n)=>{
            let a;
            switch (t.code) {
            case r.invalid_type:
                a = t.received === i.undefined ? "Required" : `Expected ${t.expected}, received ${t.received}`;
                break;
            case r.invalid_literal:
                a = `Invalid literal value, expected ${JSON.stringify(t.expected, e.jsonStringifyReplacer)}`;
                break;
            case r.unrecognized_keys:
                a = `Unrecognized key(s) in object: ${e.joinValues(t.keys, ", ")}`;
                break;
            case r.invalid_union:
                a = "Invalid input";
                break;
            case r.invalid_union_discriminator:
                a = `Invalid discriminator value. Expected ${e.joinValues(t.options)}`;
                break;
            case r.invalid_enum_value:
                a = `Invalid enum value. Expected ${e.joinValues(t.options)}, received '${t.received}'`;
                break;
            case r.invalid_arguments:
                a = "Invalid function arguments";
                break;
            case r.invalid_return_type:
                a = "Invalid function return type";
                break;
            case r.invalid_date:
                a = "Invalid date";
                break;
            case r.invalid_string:
                "object" == typeof t.validation ? "includes"in t.validation ? (a = `Invalid input: must include "${t.validation.includes}"`,
                "number" == typeof t.validation.position && (a = `${a} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith"in t.validation ? a = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith"in t.validation ? a = `Invalid input: must end with "${t.validation.endsWith}"` : e.assertNever(t.validation) : a = "regex" !== t.validation ? `Invalid ${t.validation}` : "Invalid";
                break;
            case r.too_small:
                a = "array" === t.type ? `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : "string" === t.type ? `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : "number" === t.type ? `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : "date" === t.type ? `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : "Invalid input";
                break;
            case r.too_big:
                a = "array" === t.type ? `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : "string" === t.type ? `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : "number" === t.type ? `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : "bigint" === t.type ? `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : "date" === t.type ? `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : "Invalid input";
                break;
            case r.custom:
                a = "Invalid input";
                break;
            case r.invalid_intersection_types:
                a = "Intersection results could not be merged";
                break;
            case r.not_multiple_of:
                a = `Number must be a multiple of ${t.multipleOf}`;
                break;
            case r.not_finite:
                a = "Number must be finite";
                break;
            default:
                a = n.defaultError,
                e.assertNever(t)
            }
            return {
                message: a
            }
        }
        ;
        let d = l;
        function c() {
            return d
        }
        const u = e=>{
            const {data: t, path: i, errorMaps: n, issueData: a} = e
              , s = [...i, ...a.path || []]
              , r = {
                ...a,
                path: s
            };
            let o = "";
            const l = n.filter((e=>!!e)).slice().reverse();
            for (const e of l)
                o = e(r, {
                    data: t,
                    defaultError: o
                }).message;
            return {
                ...a,
                path: s,
                message: a.message || o
            }
        }
        ;
        function h(e, t) {
            const i = u({
                issueData: t,
                data: e.data,
                path: e.path,
                errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, c(), l].filter((e=>!!e))
            });
            e.common.issues.push(i)
        }
        class f {
            constructor() {
                this.value = "valid"
            }
            dirty() {
                "valid" === this.value && (this.value = "dirty")
            }
            abort() {
                "aborted" !== this.value && (this.value = "aborted")
            }
            static mergeArray(e, t) {
                const i = [];
                for (const n of t) {
                    if ("aborted" === n.status)
                        return p;
                    "dirty" === n.status && e.dirty(),
                    i.push(n.value)
                }
                return {
                    status: e.value,
                    value: i
                }
            }
            static async mergeObjectAsync(e, t) {
                const i = [];
                for (const e of t)
                    i.push({
                        key: await e.key,
                        value: await e.value
                    });
                return f.mergeObjectSync(e, i)
            }
            static mergeObjectSync(e, t) {
                const i = {};
                for (const n of t) {
                    const {key: t, value: a} = n;
                    if ("aborted" === t.status)
                        return p;
                    if ("aborted" === a.status)
                        return p;
                    "dirty" === t.status && e.dirty(),
                    "dirty" === a.status && e.dirty(),
                    (void 0 !== a.value || n.alwaysSet) && (i[t.value] = a.value)
                }
                return {
                    status: e.value,
                    value: i
                }
            }
        }
        const p = Object.freeze({
            status: "aborted"
        })
          , m = e=>({
            status: "dirty",
            value: e
        })
          , g = e=>({
            status: "valid",
            value: e
        })
          , v = e=>"aborted" === e.status
          , y = e=>"dirty" === e.status
          , b = e=>"valid" === e.status
          , w = e=>"undefined" != typeof Promise && e instanceof Promise;
        var k;
        !function(e) {
            e.errToObj = e=>"string" == typeof e ? {
                message: e
            } : e || {},
            e.toString = e=>"string" == typeof e ? e : null == e ? void 0 : e.message
        }(k || (k = {}));
        class x {
            constructor(e, t, i, n) {
                this._cachedPath = [],
                this.parent = e,
                this.data = t,
                this._path = i,
                this._key = n
            }
            get path() {
                return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
                this._cachedPath
            }
        }
        const _ = (e,t)=>{
            if (b(t))
                return {
                    success: !0,
                    data: t.value
                };
            if (!e.common.issues.length)
                throw new Error("Validation failed but no issues detected.");
            return {
                success: !1,
                get error() {
                    if (this._error)
                        return this._error;
                    const t = new o(e.common.issues);
                    return this._error = t,
                    this._error
                }
            }
        }
        ;
        function E(e) {
            if (!e)
                return {};
            const {errorMap: t, invalid_type_error: i, required_error: n, description: a} = e;
            if (t && (i || n))
                throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
            if (t)
                return {
                    errorMap: t,
                    description: a
                };
            return {
                errorMap: (e,t)=>"invalid_type" !== e.code ? {
                    message: t.defaultError
                } : void 0 === t.data ? {
                    message: null != n ? n : t.defaultError
                } : {
                    message: null != i ? i : t.defaultError
                },
                description: a
            }
        }
        class S {
            constructor(e) {
                this.spa = this.safeParseAsync,
                this._def = e,
                this.parse = this.parse.bind(this),
                this.safeParse = this.safeParse.bind(this),
                this.parseAsync = this.parseAsync.bind(this),
                this.safeParseAsync = this.safeParseAsync.bind(this),
                this.spa = this.spa.bind(this),
                this.refine = this.refine.bind(this),
                this.refinement = this.refinement.bind(this),
                this.superRefine = this.superRefine.bind(this),
                this.optional = this.optional.bind(this),
                this.nullable = this.nullable.bind(this),
                this.nullish = this.nullish.bind(this),
                this.array = this.array.bind(this),
                this.promise = this.promise.bind(this),
                this.or = this.or.bind(this),
                this.and = this.and.bind(this),
                this.transform = this.transform.bind(this),
                this.brand = this.brand.bind(this),
                this.default = this.default.bind(this),
                this.catch = this.catch.bind(this),
                this.describe = this.describe.bind(this),
                this.pipe = this.pipe.bind(this),
                this.isNullable = this.isNullable.bind(this),
                this.isOptional = this.isOptional.bind(this)
            }
            get description() {
                return this._def.description
            }
            _getType(e) {
                return n(e.data)
            }
            _getOrReturnCtx(e, t) {
                return t || {
                    common: e.parent.common,
                    data: e.data,
                    parsedType: n(e.data),
                    schemaErrorMap: this._def.errorMap,
                    path: e.path,
                    parent: e.parent
                }
            }
            _processInputParams(e) {
                return {
                    status: new f,
                    ctx: {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: n(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    }
                }
            }
            _parseSync(e) {
                const t = this._parse(e);
                if (w(t))
                    throw new Error("Synchronous parse encountered promise.");
                return t
            }
            _parseAsync(e) {
                const t = this._parse(e);
                return Promise.resolve(t)
            }
            parse(e, t) {
                const i = this.safeParse(e, t);
                if (i.success)
                    return i.data;
                throw i.error
            }
            safeParse(e, t) {
                var i;
                const a = {
                    common: {
                        issues: [],
                        async: null !== (i = null == t ? void 0 : t.async) && void 0 !== i && i,
                        contextualErrorMap: null == t ? void 0 : t.errorMap
                    },
                    path: (null == t ? void 0 : t.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: e,
                    parsedType: n(e)
                }
                  , s = this._parseSync({
                    data: e,
                    path: a.path,
                    parent: a
                });
                return _(a, s)
            }
            async parseAsync(e, t) {
                const i = await this.safeParseAsync(e, t);
                if (i.success)
                    return i.data;
                throw i.error
            }
            async safeParseAsync(e, t) {
                const i = {
                    common: {
                        issues: [],
                        contextualErrorMap: null == t ? void 0 : t.errorMap,
                        async: !0
                    },
                    path: (null == t ? void 0 : t.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: e,
                    parsedType: n(e)
                }
                  , a = this._parse({
                    data: e,
                    path: i.path,
                    parent: i
                })
                  , s = await (w(a) ? a : Promise.resolve(a));
                return _(i, s)
            }
            refine(e, t) {
                const i = e=>"string" == typeof t || void 0 === t ? {
                    message: t
                } : "function" == typeof t ? t(e) : t;
                return this._refinement(((t,n)=>{
                    const a = e(t)
                      , s = ()=>n.addIssue({
                        code: r.custom,
                        ...i(t)
                    });
                    return "undefined" != typeof Promise && a instanceof Promise ? a.then((e=>!!e || (s(),
                    !1))) : !!a || (s(),
                    !1)
                }
                ))
            }
            refinement(e, t) {
                return this._refinement(((i,n)=>!!e(i) || (n.addIssue("function" == typeof t ? t(i, n) : t),
                !1)))
            }
            _refinement(e) {
                return new fe({
                    schema: this,
                    typeName: Ee.ZodEffects,
                    effect: {
                        type: "refinement",
                        refinement: e
                    }
                })
            }
            superRefine(e) {
                return this._refinement(e)
            }
            optional() {
                return pe.create(this, this._def)
            }
            nullable() {
                return me.create(this, this._def)
            }
            nullish() {
                return this.nullable().optional()
            }
            array() {
                return q.create(this, this._def)
            }
            promise() {
                return he.create(this, this._def)
            }
            or(e) {
                return G.create([this, e], this._def)
            }
            and(e) {
                return te.create(this, e, this._def)
            }
            transform(e) {
                return new fe({
                    ...E(this._def),
                    schema: this,
                    typeName: Ee.ZodEffects,
                    effect: {
                        type: "transform",
                        transform: e
                    }
                })
            }
            default(e) {
                const t = "function" == typeof e ? e : ()=>e;
                return new ge({
                    ...E(this._def),
                    innerType: this,
                    defaultValue: t,
                    typeName: Ee.ZodDefault
                })
            }
            brand() {
                return new we({
                    typeName: Ee.ZodBranded,
                    type: this,
                    ...E(this._def)
                })
            }
            catch(e) {
                const t = "function" == typeof e ? e : ()=>e;
                return new ve({
                    ...E(this._def),
                    innerType: this,
                    catchValue: t,
                    typeName: Ee.ZodCatch
                })
            }
            describe(e) {
                return new (0,
                this.constructor)({
                    ...this._def,
                    description: e
                })
            }
            pipe(e) {
                return ke.create(this, e)
            }
            isOptional() {
                return this.safeParse(void 0).success
            }
            isNullable() {
                return this.safeParse(null).success
            }
        }
        const T = /^c[^\s-]{8,}$/i
          , C = /^[a-z][a-z0-9]*$/
          , j = /[0-9A-HJKMNP-TV-Z]{26}/
          , I = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i
          , A = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/
          , P = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u
          , L = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/
          , O = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
        function z(e, t) {
            return !("v4" !== t && t || !L.test(e)) || !("v6" !== t && t || !O.test(e))
        }
        class F extends S {
            constructor() {
                super(...arguments),
                this._regex = (e,t,i)=>this.refinement((t=>e.test(t)), {
                    validation: t,
                    code: r.invalid_string,
                    ...k.errToObj(i)
                }),
                this.nonempty = e=>this.min(1, k.errToObj(e)),
                this.trim = ()=>new F({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: "trim"
                    }]
                }),
                this.toLowerCase = ()=>new F({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: "toLowerCase"
                    }]
                }),
                this.toUpperCase = ()=>new F({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: "toUpperCase"
                    }]
                })
            }
            _parse(t) {
                this._def.coerce && (t.data = String(t.data));
                if (this._getType(t) !== i.string) {
                    const e = this._getOrReturnCtx(t);
                    return h(e, {
                        code: r.invalid_type,
                        expected: i.string,
                        received: e.parsedType
                    }),
                    p
                }
                const n = new f;
                let a;
                for (const i of this._def.checks)
                    if ("min" === i.kind)
                        t.data.length < i.value && (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            code: r.too_small,
                            minimum: i.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: i.message
                        }),
                        n.dirty());
                    else if ("max" === i.kind)
                        t.data.length > i.value && (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            code: r.too_big,
                            maximum: i.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: i.message
                        }),
                        n.dirty());
                    else if ("length" === i.kind) {
                        const e = t.data.length > i.value
                          , s = t.data.length < i.value;
                        (e || s) && (a = this._getOrReturnCtx(t, a),
                        e ? h(a, {
                            code: r.too_big,
                            maximum: i.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: i.message
                        }) : s && h(a, {
                            code: r.too_small,
                            minimum: i.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: i.message
                        }),
                        n.dirty())
                    } else if ("email" === i.kind)
                        A.test(t.data) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            validation: "email",
                            code: r.invalid_string,
                            message: i.message
                        }),
                        n.dirty());
                    else if ("emoji" === i.kind)
                        P.test(t.data) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            validation: "emoji",
                            code: r.invalid_string,
                            message: i.message
                        }),
                        n.dirty());
                    else if ("uuid" === i.kind)
                        I.test(t.data) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            validation: "uuid",
                            code: r.invalid_string,
                            message: i.message
                        }),
                        n.dirty());
                    else if ("cuid" === i.kind)
                        T.test(t.data) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            validation: "cuid",
                            code: r.invalid_string,
                            message: i.message
                        }),
                        n.dirty());
                    else if ("cuid2" === i.kind)
                        C.test(t.data) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            validation: "cuid2",
                            code: r.invalid_string,
                            message: i.message
                        }),
                        n.dirty());
                    else if ("ulid" === i.kind)
                        j.test(t.data) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            validation: "ulid",
                            code: r.invalid_string,
                            message: i.message
                        }),
                        n.dirty());
                    else if ("url" === i.kind)
                        try {
                            new URL(t.data)
                        } catch (e) {
                            a = this._getOrReturnCtx(t, a),
                            h(a, {
                                validation: "url",
                                code: r.invalid_string,
                                message: i.message
                            }),
                            n.dirty()
                        }
                    else if ("regex" === i.kind) {
                        i.regex.lastIndex = 0;
                        i.regex.test(t.data) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            validation: "regex",
                            code: r.invalid_string,
                            message: i.message
                        }),
                        n.dirty())
                    } else if ("trim" === i.kind)
                        t.data = t.data.trim();
                    else if ("includes" === i.kind)
                        t.data.includes(i.value, i.position) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            code: r.invalid_string,
                            validation: {
                                includes: i.value,
                                position: i.position
                            },
                            message: i.message
                        }),
                        n.dirty());
                    else if ("toLowerCase" === i.kind)
                        t.data = t.data.toLowerCase();
                    else if ("toUpperCase" === i.kind)
                        t.data = t.data.toUpperCase();
                    else if ("startsWith" === i.kind)
                        t.data.startsWith(i.value) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            code: r.invalid_string,
                            validation: {
                                startsWith: i.value
                            },
                            message: i.message
                        }),
                        n.dirty());
                    else if ("endsWith" === i.kind)
                        t.data.endsWith(i.value) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            code: r.invalid_string,
                            validation: {
                                endsWith: i.value
                            },
                            message: i.message
                        }),
                        n.dirty());
                    else if ("datetime" === i.kind) {
                        ((s = i).precision ? s.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${s.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${s.precision}}Z$`) : 0 === s.precision ? s.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : s.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(t.data) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            code: r.invalid_string,
                            validation: "datetime",
                            message: i.message
                        }),
                        n.dirty())
                    } else
                        "ip" === i.kind ? z(t.data, i.version) || (a = this._getOrReturnCtx(t, a),
                        h(a, {
                            validation: "ip",
                            code: r.invalid_string,
                            message: i.message
                        }),
                        n.dirty()) : e.assertNever(i);
                var s;
                return {
                    status: n.value,
                    value: t.data
                }
            }
            _addCheck(e) {
                return new F({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            email(e) {
                return this._addCheck({
                    kind: "email",
                    ...k.errToObj(e)
                })
            }
            url(e) {
                return this._addCheck({
                    kind: "url",
                    ...k.errToObj(e)
                })
            }
            emoji(e) {
                return this._addCheck({
                    kind: "emoji",
                    ...k.errToObj(e)
                })
            }
            uuid(e) {
                return this._addCheck({
                    kind: "uuid",
                    ...k.errToObj(e)
                })
            }
            cuid(e) {
                return this._addCheck({
                    kind: "cuid",
                    ...k.errToObj(e)
                })
            }
            cuid2(e) {
                return this._addCheck({
                    kind: "cuid2",
                    ...k.errToObj(e)
                })
            }
            ulid(e) {
                return this._addCheck({
                    kind: "ulid",
                    ...k.errToObj(e)
                })
            }
            ip(e) {
                return this._addCheck({
                    kind: "ip",
                    ...k.errToObj(e)
                })
            }
            datetime(e) {
                var t;
                return "string" == typeof e ? this._addCheck({
                    kind: "datetime",
                    precision: null,
                    offset: !1,
                    message: e
                }) : this._addCheck({
                    kind: "datetime",
                    precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                    offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
                    ...k.errToObj(null == e ? void 0 : e.message)
                })
            }
            regex(e, t) {
                return this._addCheck({
                    kind: "regex",
                    regex: e,
                    ...k.errToObj(t)
                })
            }
            includes(e, t) {
                return this._addCheck({
                    kind: "includes",
                    value: e,
                    position: null == t ? void 0 : t.position,
                    ...k.errToObj(null == t ? void 0 : t.message)
                })
            }
            startsWith(e, t) {
                return this._addCheck({
                    kind: "startsWith",
                    value: e,
                    ...k.errToObj(t)
                })
            }
            endsWith(e, t) {
                return this._addCheck({
                    kind: "endsWith",
                    value: e,
                    ...k.errToObj(t)
                })
            }
            min(e, t) {
                return this._addCheck({
                    kind: "min",
                    value: e,
                    ...k.errToObj(t)
                })
            }
            max(e, t) {
                return this._addCheck({
                    kind: "max",
                    value: e,
                    ...k.errToObj(t)
                })
            }
            length(e, t) {
                return this._addCheck({
                    kind: "length",
                    value: e,
                    ...k.errToObj(t)
                })
            }
            get isDatetime() {
                return !!this._def.checks.find((e=>"datetime" === e.kind))
            }
            get isEmail() {
                return !!this._def.checks.find((e=>"email" === e.kind))
            }
            get isURL() {
                return !!this._def.checks.find((e=>"url" === e.kind))
            }
            get isEmoji() {
                return !!this._def.checks.find((e=>"emoji" === e.kind))
            }
            get isUUID() {
                return !!this._def.checks.find((e=>"uuid" === e.kind))
            }
            get isCUID() {
                return !!this._def.checks.find((e=>"cuid" === e.kind))
            }
            get isCUID2() {
                return !!this._def.checks.find((e=>"cuid2" === e.kind))
            }
            get isULID() {
                return !!this._def.checks.find((e=>"ulid" === e.kind))
            }
            get isIP() {
                return !!this._def.checks.find((e=>"ip" === e.kind))
            }
            get minLength() {
                let e = null;
                for (const t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return e
            }
            get maxLength() {
                let e = null;
                for (const t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return e
            }
        }
        function R(e, t) {
            const i = (e.toString().split(".")[1] || "").length
              , n = (t.toString().split(".")[1] || "").length
              , a = i > n ? i : n;
            return parseInt(e.toFixed(a).replace(".", "")) % parseInt(t.toFixed(a).replace(".", "")) / Math.pow(10, a)
        }
        F.create = e=>{
            var t;
            return new F({
                checks: [],
                typeName: Ee.ZodString,
                coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                ...E(e)
            })
        }
        ;
        class W extends S {
            constructor() {
                super(...arguments),
                this.min = this.gte,
                this.max = this.lte,
                this.step = this.multipleOf
            }
            _parse(t) {
                this._def.coerce && (t.data = Number(t.data));
                if (this._getType(t) !== i.number) {
                    const e = this._getOrReturnCtx(t);
                    return h(e, {
                        code: r.invalid_type,
                        expected: i.number,
                        received: e.parsedType
                    }),
                    p
                }
                let n;
                const a = new f;
                for (const i of this._def.checks)
                    if ("int" === i.kind)
                        e.isInteger(t.data) || (n = this._getOrReturnCtx(t, n),
                        h(n, {
                            code: r.invalid_type,
                            expected: "integer",
                            received: "float",
                            message: i.message
                        }),
                        a.dirty());
                    else if ("min" === i.kind) {
                        (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n),
                        h(n, {
                            code: r.too_small,
                            minimum: i.value,
                            type: "number",
                            inclusive: i.inclusive,
                            exact: !1,
                            message: i.message
                        }),
                        a.dirty())
                    } else if ("max" === i.kind) {
                        (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n),
                        h(n, {
                            code: r.too_big,
                            maximum: i.value,
                            type: "number",
                            inclusive: i.inclusive,
                            exact: !1,
                            message: i.message
                        }),
                        a.dirty())
                    } else
                        "multipleOf" === i.kind ? 0 !== R(t.data, i.value) && (n = this._getOrReturnCtx(t, n),
                        h(n, {
                            code: r.not_multiple_of,
                            multipleOf: i.value,
                            message: i.message
                        }),
                        a.dirty()) : "finite" === i.kind ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n),
                        h(n, {
                            code: r.not_finite,
                            message: i.message
                        }),
                        a.dirty()) : e.assertNever(i);
                return {
                    status: a.value,
                    value: t.data
                }
            }
            gte(e, t) {
                return this.setLimit("min", e, !0, k.toString(t))
            }
            gt(e, t) {
                return this.setLimit("min", e, !1, k.toString(t))
            }
            lte(e, t) {
                return this.setLimit("max", e, !0, k.toString(t))
            }
            lt(e, t) {
                return this.setLimit("max", e, !1, k.toString(t))
            }
            setLimit(e, t, i, n) {
                return new W({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: e,
                        value: t,
                        inclusive: i,
                        message: k.toString(n)
                    }]
                })
            }
            _addCheck(e) {
                return new W({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            int(e) {
                return this._addCheck({
                    kind: "int",
                    message: k.toString(e)
                })
            }
            positive(e) {
                return this._addCheck({
                    kind: "min",
                    value: 0,
                    inclusive: !1,
                    message: k.toString(e)
                })
            }
            negative(e) {
                return this._addCheck({
                    kind: "max",
                    value: 0,
                    inclusive: !1,
                    message: k.toString(e)
                })
            }
            nonpositive(e) {
                return this._addCheck({
                    kind: "max",
                    value: 0,
                    inclusive: !0,
                    message: k.toString(e)
                })
            }
            nonnegative(e) {
                return this._addCheck({
                    kind: "min",
                    value: 0,
                    inclusive: !0,
                    message: k.toString(e)
                })
            }
            multipleOf(e, t) {
                return this._addCheck({
                    kind: "multipleOf",
                    value: e,
                    message: k.toString(t)
                })
            }
            finite(e) {
                return this._addCheck({
                    kind: "finite",
                    message: k.toString(e)
                })
            }
            safe(e) {
                return this._addCheck({
                    kind: "min",
                    inclusive: !0,
                    value: Number.MIN_SAFE_INTEGER,
                    message: k.toString(e)
                })._addCheck({
                    kind: "max",
                    inclusive: !0,
                    value: Number.MAX_SAFE_INTEGER,
                    message: k.toString(e)
                })
            }
            get minValue() {
                let e = null;
                for (const t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return e
            }
            get maxValue() {
                let e = null;
                for (const t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return e
            }
            get isInt() {
                return !!this._def.checks.find((t=>"int" === t.kind || "multipleOf" === t.kind && e.isInteger(t.value)))
            }
            get isFinite() {
                let e = null
                  , t = null;
                for (const i of this._def.checks) {
                    if ("finite" === i.kind || "int" === i.kind || "multipleOf" === i.kind)
                        return !0;
                    "min" === i.kind ? (null === t || i.value > t) && (t = i.value) : "max" === i.kind && (null === e || i.value < e) && (e = i.value)
                }
                return Number.isFinite(t) && Number.isFinite(e)
            }
        }
        W.create = e=>new W({
            checks: [],
            typeName: Ee.ZodNumber,
            coerce: (null == e ? void 0 : e.coerce) || !1,
            ...E(e)
        });
        class N extends S {
            constructor() {
                super(...arguments),
                this.min = this.gte,
                this.max = this.lte
            }
            _parse(t) {
                this._def.coerce && (t.data = BigInt(t.data));
                if (this._getType(t) !== i.bigint) {
                    const e = this._getOrReturnCtx(t);
                    return h(e, {
                        code: r.invalid_type,
                        expected: i.bigint,
                        received: e.parsedType
                    }),
                    p
                }
                let n;
                const a = new f;
                for (const i of this._def.checks)
                    if ("min" === i.kind) {
                        (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n),
                        h(n, {
                            code: r.too_small,
                            type: "bigint",
                            minimum: i.value,
                            inclusive: i.inclusive,
                            message: i.message
                        }),
                        a.dirty())
                    } else if ("max" === i.kind) {
                        (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n),
                        h(n, {
                            code: r.too_big,
                            type: "bigint",
                            maximum: i.value,
                            inclusive: i.inclusive,
                            message: i.message
                        }),
                        a.dirty())
                    } else
                        "multipleOf" === i.kind ? t.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n),
                        h(n, {
                            code: r.not_multiple_of,
                            multipleOf: i.value,
                            message: i.message
                        }),
                        a.dirty()) : e.assertNever(i);
                return {
                    status: a.value,
                    value: t.data
                }
            }
            gte(e, t) {
                return this.setLimit("min", e, !0, k.toString(t))
            }
            gt(e, t) {
                return this.setLimit("min", e, !1, k.toString(t))
            }
            lte(e, t) {
                return this.setLimit("max", e, !0, k.toString(t))
            }
            lt(e, t) {
                return this.setLimit("max", e, !1, k.toString(t))
            }
            setLimit(e, t, i, n) {
                return new N({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: e,
                        value: t,
                        inclusive: i,
                        message: k.toString(n)
                    }]
                })
            }
            _addCheck(e) {
                return new N({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            positive(e) {
                return this._addCheck({
                    kind: "min",
                    value: BigInt(0),
                    inclusive: !1,
                    message: k.toString(e)
                })
            }
            negative(e) {
                return this._addCheck({
                    kind: "max",
                    value: BigInt(0),
                    inclusive: !1,
                    message: k.toString(e)
                })
            }
            nonpositive(e) {
                return this._addCheck({
                    kind: "max",
                    value: BigInt(0),
                    inclusive: !0,
                    message: k.toString(e)
                })
            }
            nonnegative(e) {
                return this._addCheck({
                    kind: "min",
                    value: BigInt(0),
                    inclusive: !0,
                    message: k.toString(e)
                })
            }
            multipleOf(e, t) {
                return this._addCheck({
                    kind: "multipleOf",
                    value: e,
                    message: k.toString(t)
                })
            }
            get minValue() {
                let e = null;
                for (const t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return e
            }
            get maxValue() {
                let e = null;
                for (const t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return e
            }
        }
        N.create = e=>{
            var t;
            return new N({
                checks: [],
                typeName: Ee.ZodBigInt,
                coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                ...E(e)
            })
        }
        ;
        class Z extends S {
            _parse(e) {
                this._def.coerce && (e.data = Boolean(e.data));
                if (this._getType(e) !== i.boolean) {
                    const t = this._getOrReturnCtx(e);
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.boolean,
                        received: t.parsedType
                    }),
                    p
                }
                return g(e.data)
            }
        }
        Z.create = e=>new Z({
            typeName: Ee.ZodBoolean,
            coerce: (null == e ? void 0 : e.coerce) || !1,
            ...E(e)
        });
        class M extends S {
            _parse(t) {
                this._def.coerce && (t.data = new Date(t.data));
                if (this._getType(t) !== i.date) {
                    const e = this._getOrReturnCtx(t);
                    return h(e, {
                        code: r.invalid_type,
                        expected: i.date,
                        received: e.parsedType
                    }),
                    p
                }
                if (isNaN(t.data.getTime())) {
                    return h(this._getOrReturnCtx(t), {
                        code: r.invalid_date
                    }),
                    p
                }
                const n = new f;
                let a;
                for (const i of this._def.checks)
                    "min" === i.kind ? t.data.getTime() < i.value && (a = this._getOrReturnCtx(t, a),
                    h(a, {
                        code: r.too_small,
                        message: i.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: i.value,
                        type: "date"
                    }),
                    n.dirty()) : "max" === i.kind ? t.data.getTime() > i.value && (a = this._getOrReturnCtx(t, a),
                    h(a, {
                        code: r.too_big,
                        message: i.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: i.value,
                        type: "date"
                    }),
                    n.dirty()) : e.assertNever(i);
                return {
                    status: n.value,
                    value: new Date(t.data.getTime())
                }
            }
            _addCheck(e) {
                return new M({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            min(e, t) {
                return this._addCheck({
                    kind: "min",
                    value: e.getTime(),
                    message: k.toString(t)
                })
            }
            max(e, t) {
                return this._addCheck({
                    kind: "max",
                    value: e.getTime(),
                    message: k.toString(t)
                })
            }
            get minDate() {
                let e = null;
                for (const t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return null != e ? new Date(e) : null
            }
            get maxDate() {
                let e = null;
                for (const t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return null != e ? new Date(e) : null
            }
        }
        M.create = e=>new M({
            checks: [],
            coerce: (null == e ? void 0 : e.coerce) || !1,
            typeName: Ee.ZodDate,
            ...E(e)
        });
        class $ extends S {
            _parse(e) {
                if (this._getType(e) !== i.symbol) {
                    const t = this._getOrReturnCtx(e);
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.symbol,
                        received: t.parsedType
                    }),
                    p
                }
                return g(e.data)
            }
        }
        $.create = e=>new $({
            typeName: Ee.ZodSymbol,
            ...E(e)
        });
        class B extends S {
            _parse(e) {
                if (this._getType(e) !== i.undefined) {
                    const t = this._getOrReturnCtx(e);
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.undefined,
                        received: t.parsedType
                    }),
                    p
                }
                return g(e.data)
            }
        }
        B.create = e=>new B({
            typeName: Ee.ZodUndefined,
            ...E(e)
        });
        class D extends S {
            _parse(e) {
                if (this._getType(e) !== i.null) {
                    const t = this._getOrReturnCtx(e);
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.null,
                        received: t.parsedType
                    }),
                    p
                }
                return g(e.data)
            }
        }
        D.create = e=>new D({
            typeName: Ee.ZodNull,
            ...E(e)
        });
        class U extends S {
            constructor() {
                super(...arguments),
                this._any = !0
            }
            _parse(e) {
                return g(e.data)
            }
        }
        U.create = e=>new U({
            typeName: Ee.ZodAny,
            ...E(e)
        });
        class V extends S {
            constructor() {
                super(...arguments),
                this._unknown = !0
            }
            _parse(e) {
                return g(e.data)
            }
        }
        V.create = e=>new V({
            typeName: Ee.ZodUnknown,
            ...E(e)
        });
        class K extends S {
            _parse(e) {
                const t = this._getOrReturnCtx(e);
                return h(t, {
                    code: r.invalid_type,
                    expected: i.never,
                    received: t.parsedType
                }),
                p
            }
        }
        K.create = e=>new K({
            typeName: Ee.ZodNever,
            ...E(e)
        });
        class H extends S {
            _parse(e) {
                if (this._getType(e) !== i.undefined) {
                    const t = this._getOrReturnCtx(e);
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.void,
                        received: t.parsedType
                    }),
                    p
                }
                return g(e.data)
            }
        }
        H.create = e=>new H({
            typeName: Ee.ZodVoid,
            ...E(e)
        });
        class q extends S {
            _parse(e) {
                const {ctx: t, status: n} = this._processInputParams(e)
                  , a = this._def;
                if (t.parsedType !== i.array)
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.array,
                        received: t.parsedType
                    }),
                    p;
                if (null !== a.exactLength) {
                    const e = t.data.length > a.exactLength.value
                      , i = t.data.length < a.exactLength.value;
                    (e || i) && (h(t, {
                        code: e ? r.too_big : r.too_small,
                        minimum: i ? a.exactLength.value : void 0,
                        maximum: e ? a.exactLength.value : void 0,
                        type: "array",
                        inclusive: !0,
                        exact: !0,
                        message: a.exactLength.message
                    }),
                    n.dirty())
                }
                if (null !== a.minLength && t.data.length < a.minLength.value && (h(t, {
                    code: r.too_small,
                    minimum: a.minLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: a.minLength.message
                }),
                n.dirty()),
                null !== a.maxLength && t.data.length > a.maxLength.value && (h(t, {
                    code: r.too_big,
                    maximum: a.maxLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: a.maxLength.message
                }),
                n.dirty()),
                t.common.async)
                    return Promise.all([...t.data].map(((e,i)=>a.type._parseAsync(new x(t,e,t.path,i))))).then((e=>f.mergeArray(n, e)));
                const s = [...t.data].map(((e,i)=>a.type._parseSync(new x(t,e,t.path,i))));
                return f.mergeArray(n, s)
            }
            get element() {
                return this._def.type
            }
            min(e, t) {
                return new q({
                    ...this._def,
                    minLength: {
                        value: e,
                        message: k.toString(t)
                    }
                })
            }
            max(e, t) {
                return new q({
                    ...this._def,
                    maxLength: {
                        value: e,
                        message: k.toString(t)
                    }
                })
            }
            length(e, t) {
                return new q({
                    ...this._def,
                    exactLength: {
                        value: e,
                        message: k.toString(t)
                    }
                })
            }
            nonempty(e) {
                return this.min(1, e)
            }
        }
        function J(e) {
            if (e instanceof X) {
                const t = {};
                for (const i in e.shape) {
                    const n = e.shape[i];
                    t[i] = pe.create(J(n))
                }
                return new X({
                    ...e._def,
                    shape: ()=>t
                })
            }
            return e instanceof q ? new q({
                ...e._def,
                type: J(e.element)
            }) : e instanceof pe ? pe.create(J(e.unwrap())) : e instanceof me ? me.create(J(e.unwrap())) : e instanceof ie ? ie.create(e.items.map((e=>J(e)))) : e
        }
        q.create = (e,t)=>new q({
            type: e,
            minLength: null,
            maxLength: null,
            exactLength: null,
            typeName: Ee.ZodArray,
            ...E(t)
        });
        class X extends S {
            constructor() {
                super(...arguments),
                this._cached = null,
                this.nonstrict = this.passthrough,
                this.augment = this.extend
            }
            _getCached() {
                if (null !== this._cached)
                    return this._cached;
                const t = this._def.shape()
                  , i = e.objectKeys(t);
                return this._cached = {
                    shape: t,
                    keys: i
                }
            }
            _parse(e) {
                if (this._getType(e) !== i.object) {
                    const t = this._getOrReturnCtx(e);
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.object,
                        received: t.parsedType
                    }),
                    p
                }
                const {status: t, ctx: n} = this._processInputParams(e)
                  , {shape: a, keys: s} = this._getCached()
                  , o = [];
                if (!(this._def.catchall instanceof K && "strip" === this._def.unknownKeys))
                    for (const e in n.data)
                        s.includes(e) || o.push(e);
                const l = [];
                for (const e of s) {
                    const t = a[e]
                      , i = n.data[e];
                    l.push({
                        key: {
                            status: "valid",
                            value: e
                        },
                        value: t._parse(new x(n,i,n.path,e)),
                        alwaysSet: e in n.data
                    })
                }
                if (this._def.catchall instanceof K) {
                    const e = this._def.unknownKeys;
                    if ("passthrough" === e)
                        for (const e of o)
                            l.push({
                                key: {
                                    status: "valid",
                                    value: e
                                },
                                value: {
                                    status: "valid",
                                    value: n.data[e]
                                }
                            });
                    else if ("strict" === e)
                        o.length > 0 && (h(n, {
                            code: r.unrecognized_keys,
                            keys: o
                        }),
                        t.dirty());
                    else if ("strip" !== e)
                        throw new Error("Internal ZodObject error: invalid unknownKeys value.")
                } else {
                    const e = this._def.catchall;
                    for (const t of o) {
                        const i = n.data[t];
                        l.push({
                            key: {
                                status: "valid",
                                value: t
                            },
                            value: e._parse(new x(n,i,n.path,t)),
                            alwaysSet: t in n.data
                        })
                    }
                }
                return n.common.async ? Promise.resolve().then((async()=>{
                    const e = [];
                    for (const t of l) {
                        const i = await t.key;
                        e.push({
                            key: i,
                            value: await t.value,
                            alwaysSet: t.alwaysSet
                        })
                    }
                    return e
                }
                )).then((e=>f.mergeObjectSync(t, e))) : f.mergeObjectSync(t, l)
            }
            get shape() {
                return this._def.shape()
            }
            strict(e) {
                return k.errToObj,
                new X({
                    ...this._def,
                    unknownKeys: "strict",
                    ...void 0 !== e ? {
                        errorMap: (t,i)=>{
                            var n, a, s, r;
                            const o = null !== (s = null === (a = (n = this._def).errorMap) || void 0 === a ? void 0 : a.call(n, t, i).message) && void 0 !== s ? s : i.defaultError;
                            return "unrecognized_keys" === t.code ? {
                                message: null !== (r = k.errToObj(e).message) && void 0 !== r ? r : o
                            } : {
                                message: o
                            }
                        }
                    } : {}
                })
            }
            strip() {
                return new X({
                    ...this._def,
                    unknownKeys: "strip"
                })
            }
            passthrough() {
                return new X({
                    ...this._def,
                    unknownKeys: "passthrough"
                })
            }
            extend(e) {
                return new X({
                    ...this._def,
                    shape: ()=>({
                        ...this._def.shape(),
                        ...e
                    })
                })
            }
            merge(e) {
                return new X({
                    unknownKeys: e._def.unknownKeys,
                    catchall: e._def.catchall,
                    shape: ()=>({
                        ...this._def.shape(),
                        ...e._def.shape()
                    }),
                    typeName: Ee.ZodObject
                })
            }
            setKey(e, t) {
                return this.augment({
                    [e]: t
                })
            }
            catchall(e) {
                return new X({
                    ...this._def,
                    catchall: e
                })
            }
            pick(t) {
                const i = {};
                return e.objectKeys(t).forEach((e=>{
                    t[e] && this.shape[e] && (i[e] = this.shape[e])
                }
                )),
                new X({
                    ...this._def,
                    shape: ()=>i
                })
            }
            omit(t) {
                const i = {};
                return e.objectKeys(this.shape).forEach((e=>{
                    t[e] || (i[e] = this.shape[e])
                }
                )),
                new X({
                    ...this._def,
                    shape: ()=>i
                })
            }
            deepPartial() {
                return J(this)
            }
            partial(t) {
                const i = {};
                return e.objectKeys(this.shape).forEach((e=>{
                    const n = this.shape[e];
                    t && !t[e] ? i[e] = n : i[e] = n.optional()
                }
                )),
                new X({
                    ...this._def,
                    shape: ()=>i
                })
            }
            required(t) {
                const i = {};
                return e.objectKeys(this.shape).forEach((e=>{
                    if (t && !t[e])
                        i[e] = this.shape[e];
                    else {
                        let t = this.shape[e];
                        for (; t instanceof pe; )
                            t = t._def.innerType;
                        i[e] = t
                    }
                }
                )),
                new X({
                    ...this._def,
                    shape: ()=>i
                })
            }
            keyof() {
                return de(e.objectKeys(this.shape))
            }
        }
        X.create = (e,t)=>new X({
            shape: ()=>e,
            unknownKeys: "strip",
            catchall: K.create(),
            typeName: Ee.ZodObject,
            ...E(t)
        }),
        X.strictCreate = (e,t)=>new X({
            shape: ()=>e,
            unknownKeys: "strict",
            catchall: K.create(),
            typeName: Ee.ZodObject,
            ...E(t)
        }),
        X.lazycreate = (e,t)=>new X({
            shape: e,
            unknownKeys: "strip",
            catchall: K.create(),
            typeName: Ee.ZodObject,
            ...E(t)
        });
        class G extends S {
            _parse(e) {
                const {ctx: t} = this._processInputParams(e)
                  , i = this._def.options;
                if (t.common.async)
                    return Promise.all(i.map((async e=>{
                        const i = {
                            ...t,
                            common: {
                                ...t.common,
                                issues: []
                            },
                            parent: null
                        };
                        return {
                            result: await e._parseAsync({
                                data: t.data,
                                path: t.path,
                                parent: i
                            }),
                            ctx: i
                        }
                    }
                    ))).then((function(e) {
                        for (const t of e)
                            if ("valid" === t.result.status)
                                return t.result;
                        for (const i of e)
                            if ("dirty" === i.result.status)
                                return t.common.issues.push(...i.ctx.common.issues),
                                i.result;
                        const i = e.map((e=>new o(e.ctx.common.issues)));
                        return h(t, {
                            code: r.invalid_union,
                            unionErrors: i
                        }),
                        p
                    }
                    ));
                {
                    let e;
                    const n = [];
                    for (const a of i) {
                        const i = {
                            ...t,
                            common: {
                                ...t.common,
                                issues: []
                            },
                            parent: null
                        }
                          , s = a._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: i
                        });
                        if ("valid" === s.status)
                            return s;
                        "dirty" !== s.status || e || (e = {
                            result: s,
                            ctx: i
                        }),
                        i.common.issues.length && n.push(i.common.issues)
                    }
                    if (e)
                        return t.common.issues.push(...e.ctx.common.issues),
                        e.result;
                    const a = n.map((e=>new o(e)));
                    return h(t, {
                        code: r.invalid_union,
                        unionErrors: a
                    }),
                    p
                }
            }
            get options() {
                return this._def.options
            }
        }
        G.create = (e,t)=>new G({
            options: e,
            typeName: Ee.ZodUnion,
            ...E(t)
        });
        const Y = e=>e instanceof oe ? Y(e.schema) : e instanceof fe ? Y(e.innerType()) : e instanceof le ? [e.value] : e instanceof ce ? e.options : e instanceof ue ? Object.keys(e.enum) : e instanceof ge ? Y(e._def.innerType) : e instanceof B ? [void 0] : e instanceof D ? [null] : null;
        class Q extends S {
            _parse(e) {
                const {ctx: t} = this._processInputParams(e);
                if (t.parsedType !== i.object)
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.object,
                        received: t.parsedType
                    }),
                    p;
                const n = this.discriminator
                  , a = t.data[n]
                  , s = this.optionsMap.get(a);
                return s ? t.common.async ? s._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: t
                }) : s._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: t
                }) : (h(t, {
                    code: r.invalid_union_discriminator,
                    options: Array.from(this.optionsMap.keys()),
                    path: [n]
                }),
                p)
            }
            get discriminator() {
                return this._def.discriminator
            }
            get options() {
                return this._def.options
            }
            get optionsMap() {
                return this._def.optionsMap
            }
            static create(e, t, i) {
                const n = new Map;
                for (const i of t) {
                    const t = Y(i.shape[e]);
                    if (!t)
                        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                    for (const a of t) {
                        if (n.has(a))
                            throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                        n.set(a, i)
                    }
                }
                return new Q({
                    typeName: Ee.ZodDiscriminatedUnion,
                    discriminator: e,
                    options: t,
                    optionsMap: n,
                    ...E(i)
                })
            }
        }
        function ee(t, a) {
            const s = n(t)
              , r = n(a);
            if (t === a)
                return {
                    valid: !0,
                    data: t
                };
            if (s === i.object && r === i.object) {
                const i = e.objectKeys(a)
                  , n = e.objectKeys(t).filter((e=>-1 !== i.indexOf(e)))
                  , s = {
                    ...t,
                    ...a
                };
                for (const e of n) {
                    const i = ee(t[e], a[e]);
                    if (!i.valid)
                        return {
                            valid: !1
                        };
                    s[e] = i.data
                }
                return {
                    valid: !0,
                    data: s
                }
            }
            if (s === i.array && r === i.array) {
                if (t.length !== a.length)
                    return {
                        valid: !1
                    };
                const e = [];
                for (let i = 0; i < t.length; i++) {
                    const n = ee(t[i], a[i]);
                    if (!n.valid)
                        return {
                            valid: !1
                        };
                    e.push(n.data)
                }
                return {
                    valid: !0,
                    data: e
                }
            }
            return s === i.date && r === i.date && +t == +a ? {
                valid: !0,
                data: t
            } : {
                valid: !1
            }
        }
        class te extends S {
            _parse(e) {
                const {status: t, ctx: i} = this._processInputParams(e)
                  , n = (e,n)=>{
                    if (v(e) || v(n))
                        return p;
                    const a = ee(e.value, n.value);
                    return a.valid ? ((y(e) || y(n)) && t.dirty(),
                    {
                        status: t.value,
                        value: a.data
                    }) : (h(i, {
                        code: r.invalid_intersection_types
                    }),
                    p)
                }
                ;
                return i.common.async ? Promise.all([this._def.left._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                }), this._def.right._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                })]).then((([e,t])=>n(e, t))) : n(this._def.left._parseSync({
                    data: i.data,
                    path: i.path,
                    parent: i
                }), this._def.right._parseSync({
                    data: i.data,
                    path: i.path,
                    parent: i
                }))
            }
        }
        te.create = (e,t,i)=>new te({
            left: e,
            right: t,
            typeName: Ee.ZodIntersection,
            ...E(i)
        });
        class ie extends S {
            _parse(e) {
                const {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== i.array)
                    return h(n, {
                        code: r.invalid_type,
                        expected: i.array,
                        received: n.parsedType
                    }),
                    p;
                if (n.data.length < this._def.items.length)
                    return h(n, {
                        code: r.too_small,
                        minimum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }),
                    p;
                !this._def.rest && n.data.length > this._def.items.length && (h(n, {
                    code: r.too_big,
                    maximum: this._def.items.length,
                    inclusive: !0,
                    exact: !1,
                    type: "array"
                }),
                t.dirty());
                const a = [...n.data].map(((e,t)=>{
                    const i = this._def.items[t] || this._def.rest;
                    return i ? i._parse(new x(n,e,n.path,t)) : null
                }
                )).filter((e=>!!e));
                return n.common.async ? Promise.all(a).then((e=>f.mergeArray(t, e))) : f.mergeArray(t, a)
            }
            get items() {
                return this._def.items
            }
            rest(e) {
                return new ie({
                    ...this._def,
                    rest: e
                })
            }
        }
        ie.create = (e,t)=>{
            if (!Array.isArray(e))
                throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
            return new ie({
                items: e,
                typeName: Ee.ZodTuple,
                rest: null,
                ...E(t)
            })
        }
        ;
        class ne extends S {
            get keySchema() {
                return this._def.keyType
            }
            get valueSchema() {
                return this._def.valueType
            }
            _parse(e) {
                const {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== i.object)
                    return h(n, {
                        code: r.invalid_type,
                        expected: i.object,
                        received: n.parsedType
                    }),
                    p;
                const a = []
                  , s = this._def.keyType
                  , o = this._def.valueType;
                for (const e in n.data)
                    a.push({
                        key: s._parse(new x(n,e,n.path,e)),
                        value: o._parse(new x(n,n.data[e],n.path,e))
                    });
                return n.common.async ? f.mergeObjectAsync(t, a) : f.mergeObjectSync(t, a)
            }
            get element() {
                return this._def.valueType
            }
            static create(e, t, i) {
                return new ne(t instanceof S ? {
                    keyType: e,
                    valueType: t,
                    typeName: Ee.ZodRecord,
                    ...E(i)
                } : {
                    keyType: F.create(),
                    valueType: e,
                    typeName: Ee.ZodRecord,
                    ...E(t)
                })
            }
        }
        class ae extends S {
            _parse(e) {
                const {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== i.map)
                    return h(n, {
                        code: r.invalid_type,
                        expected: i.map,
                        received: n.parsedType
                    }),
                    p;
                const a = this._def.keyType
                  , s = this._def.valueType
                  , o = [...n.data.entries()].map((([e,t],i)=>({
                    key: a._parse(new x(n,e,n.path,[i, "key"])),
                    value: s._parse(new x(n,t,n.path,[i, "value"]))
                })));
                if (n.common.async) {
                    const e = new Map;
                    return Promise.resolve().then((async()=>{
                        for (const i of o) {
                            const n = await i.key
                              , a = await i.value;
                            if ("aborted" === n.status || "aborted" === a.status)
                                return p;
                            "dirty" !== n.status && "dirty" !== a.status || t.dirty(),
                            e.set(n.value, a.value)
                        }
                        return {
                            status: t.value,
                            value: e
                        }
                    }
                    ))
                }
                {
                    const e = new Map;
                    for (const i of o) {
                        const n = i.key
                          , a = i.value;
                        if ("aborted" === n.status || "aborted" === a.status)
                            return p;
                        "dirty" !== n.status && "dirty" !== a.status || t.dirty(),
                        e.set(n.value, a.value)
                    }
                    return {
                        status: t.value,
                        value: e
                    }
                }
            }
        }
        ae.create = (e,t,i)=>new ae({
            valueType: t,
            keyType: e,
            typeName: Ee.ZodMap,
            ...E(i)
        });
        class se extends S {
            _parse(e) {
                const {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== i.set)
                    return h(n, {
                        code: r.invalid_type,
                        expected: i.set,
                        received: n.parsedType
                    }),
                    p;
                const a = this._def;
                null !== a.minSize && n.data.size < a.minSize.value && (h(n, {
                    code: r.too_small,
                    minimum: a.minSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: a.minSize.message
                }),
                t.dirty()),
                null !== a.maxSize && n.data.size > a.maxSize.value && (h(n, {
                    code: r.too_big,
                    maximum: a.maxSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: a.maxSize.message
                }),
                t.dirty());
                const s = this._def.valueType;
                function o(e) {
                    const i = new Set;
                    for (const n of e) {
                        if ("aborted" === n.status)
                            return p;
                        "dirty" === n.status && t.dirty(),
                        i.add(n.value)
                    }
                    return {
                        status: t.value,
                        value: i
                    }
                }
                const l = [...n.data.values()].map(((e,t)=>s._parse(new x(n,e,n.path,t))));
                return n.common.async ? Promise.all(l).then((e=>o(e))) : o(l)
            }
            min(e, t) {
                return new se({
                    ...this._def,
                    minSize: {
                        value: e,
                        message: k.toString(t)
                    }
                })
            }
            max(e, t) {
                return new se({
                    ...this._def,
                    maxSize: {
                        value: e,
                        message: k.toString(t)
                    }
                })
            }
            size(e, t) {
                return this.min(e, t).max(e, t)
            }
            nonempty(e) {
                return this.min(1, e)
            }
        }
        se.create = (e,t)=>new se({
            valueType: e,
            minSize: null,
            maxSize: null,
            typeName: Ee.ZodSet,
            ...E(t)
        });
        class re extends S {
            constructor() {
                super(...arguments),
                this.validate = this.implement
            }
            _parse(e) {
                const {ctx: t} = this._processInputParams(e);
                if (t.parsedType !== i.function)
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.function,
                        received: t.parsedType
                    }),
                    p;
                function n(e, i) {
                    return u({
                        data: e,
                        path: t.path,
                        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, c(), l].filter((e=>!!e)),
                        issueData: {
                            code: r.invalid_arguments,
                            argumentsError: i
                        }
                    })
                }
                function a(e, i) {
                    return u({
                        data: e,
                        path: t.path,
                        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, c(), l].filter((e=>!!e)),
                        issueData: {
                            code: r.invalid_return_type,
                            returnTypeError: i
                        }
                    })
                }
                const s = {
                    errorMap: t.common.contextualErrorMap
                }
                  , d = t.data;
                return this._def.returns instanceof he ? g((async(...e)=>{
                    const t = new o([])
                      , i = await this._def.args.parseAsync(e, s).catch((i=>{
                        throw t.addIssue(n(e, i)),
                        t
                    }
                    ))
                      , r = await d(...i)
                      , l = await this._def.returns._def.type.parseAsync(r, s).catch((e=>{
                        throw t.addIssue(a(r, e)),
                        t
                    }
                    ));
                    return l
                }
                )) : g(((...e)=>{
                    const t = this._def.args.safeParse(e, s);
                    if (!t.success)
                        throw new o([n(e, t.error)]);
                    const i = d(...t.data)
                      , r = this._def.returns.safeParse(i, s);
                    if (!r.success)
                        throw new o([a(i, r.error)]);
                    return r.data
                }
                ))
            }
            parameters() {
                return this._def.args
            }
            returnType() {
                return this._def.returns
            }
            args(...e) {
                return new re({
                    ...this._def,
                    args: ie.create(e).rest(V.create())
                })
            }
            returns(e) {
                return new re({
                    ...this._def,
                    returns: e
                })
            }
            implement(e) {
                return this.parse(e)
            }
            strictImplement(e) {
                return this.parse(e)
            }
            static create(e, t, i) {
                return new re({
                    args: e || ie.create([]).rest(V.create()),
                    returns: t || V.create(),
                    typeName: Ee.ZodFunction,
                    ...E(i)
                })
            }
        }
        class oe extends S {
            get schema() {
                return this._def.getter()
            }
            _parse(e) {
                const {ctx: t} = this._processInputParams(e);
                return this._def.getter()._parse({
                    data: t.data,
                    path: t.path,
                    parent: t
                })
            }
        }
        oe.create = (e,t)=>new oe({
            getter: e,
            typeName: Ee.ZodLazy,
            ...E(t)
        });
        class le extends S {
            _parse(e) {
                if (e.data !== this._def.value) {
                    const t = this._getOrReturnCtx(e);
                    return h(t, {
                        received: t.data,
                        code: r.invalid_literal,
                        expected: this._def.value
                    }),
                    p
                }
                return {
                    status: "valid",
                    value: e.data
                }
            }
            get value() {
                return this._def.value
            }
        }
        function de(e, t) {
            return new ce({
                values: e,
                typeName: Ee.ZodEnum,
                ...E(t)
            })
        }
        le.create = (e,t)=>new le({
            value: e,
            typeName: Ee.ZodLiteral,
            ...E(t)
        });
        class ce extends S {
            _parse(t) {
                if ("string" != typeof t.data) {
                    const i = this._getOrReturnCtx(t)
                      , n = this._def.values;
                    return h(i, {
                        expected: e.joinValues(n),
                        received: i.parsedType,
                        code: r.invalid_type
                    }),
                    p
                }
                if (-1 === this._def.values.indexOf(t.data)) {
                    const e = this._getOrReturnCtx(t)
                      , i = this._def.values;
                    return h(e, {
                        received: e.data,
                        code: r.invalid_enum_value,
                        options: i
                    }),
                    p
                }
                return g(t.data)
            }
            get options() {
                return this._def.values
            }
            get enum() {
                const e = {};
                for (const t of this._def.values)
                    e[t] = t;
                return e
            }
            get Values() {
                const e = {};
                for (const t of this._def.values)
                    e[t] = t;
                return e
            }
            get Enum() {
                const e = {};
                for (const t of this._def.values)
                    e[t] = t;
                return e
            }
            extract(e) {
                return ce.create(e)
            }
            exclude(e) {
                return ce.create(this.options.filter((t=>!e.includes(t))))
            }
        }
        ce.create = de;
        class ue extends S {
            _parse(t) {
                const n = e.getValidEnumValues(this._def.values)
                  , a = this._getOrReturnCtx(t);
                if (a.parsedType !== i.string && a.parsedType !== i.number) {
                    const t = e.objectValues(n);
                    return h(a, {
                        expected: e.joinValues(t),
                        received: a.parsedType,
                        code: r.invalid_type
                    }),
                    p
                }
                if (-1 === n.indexOf(t.data)) {
                    const t = e.objectValues(n);
                    return h(a, {
                        received: a.data,
                        code: r.invalid_enum_value,
                        options: t
                    }),
                    p
                }
                return g(t.data)
            }
            get enum() {
                return this._def.values
            }
        }
        ue.create = (e,t)=>new ue({
            values: e,
            typeName: Ee.ZodNativeEnum,
            ...E(t)
        });
        class he extends S {
            unwrap() {
                return this._def.type
            }
            _parse(e) {
                const {ctx: t} = this._processInputParams(e);
                if (t.parsedType !== i.promise && !1 === t.common.async)
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.promise,
                        received: t.parsedType
                    }),
                    p;
                const n = t.parsedType === i.promise ? t.data : Promise.resolve(t.data);
                return g(n.then((e=>this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap
                }))))
            }
        }
        he.create = (e,t)=>new he({
            type: e,
            typeName: Ee.ZodPromise,
            ...E(t)
        });
        class fe extends S {
            innerType() {
                return this._def.schema
            }
            sourceType() {
                return this._def.schema._def.typeName === Ee.ZodEffects ? this._def.schema.sourceType() : this._def.schema
            }
            _parse(t) {
                const {status: i, ctx: n} = this._processInputParams(t)
                  , a = this._def.effect || null;
                if ("preprocess" === a.type) {
                    const e = a.transform(n.data);
                    return n.common.async ? Promise.resolve(e).then((e=>this._def.schema._parseAsync({
                        data: e,
                        path: n.path,
                        parent: n
                    }))) : this._def.schema._parseSync({
                        data: e,
                        path: n.path,
                        parent: n
                    })
                }
                const s = {
                    addIssue: e=>{
                        h(n, e),
                        e.fatal ? i.abort() : i.dirty()
                    }
                    ,
                    get path() {
                        return n.path
                    }
                };
                if (s.addIssue = s.addIssue.bind(s),
                "refinement" === a.type) {
                    const e = e=>{
                        const t = a.refinement(e, s);
                        if (n.common.async)
                            return Promise.resolve(t);
                        if (t instanceof Promise)
                            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                        return e
                    }
                    ;
                    if (!1 === n.common.async) {
                        const t = this._def.schema._parseSync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        return "aborted" === t.status ? p : ("dirty" === t.status && i.dirty(),
                        e(t.value),
                        {
                            status: i.value,
                            value: t.value
                        })
                    }
                    return this._def.schema._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: n
                    }).then((t=>"aborted" === t.status ? p : ("dirty" === t.status && i.dirty(),
                    e(t.value).then((()=>({
                        status: i.value,
                        value: t.value
                    }))))))
                }
                if ("transform" === a.type) {
                    if (!1 === n.common.async) {
                        const e = this._def.schema._parseSync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        if (!b(e))
                            return e;
                        const t = a.transform(e.value, s);
                        if (t instanceof Promise)
                            throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                        return {
                            status: i.value,
                            value: t
                        }
                    }
                    return this._def.schema._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: n
                    }).then((e=>b(e) ? Promise.resolve(a.transform(e.value, s)).then((e=>({
                        status: i.value,
                        value: e
                    }))) : e))
                }
                e.assertNever(a)
            }
        }
        fe.create = (e,t,i)=>new fe({
            schema: e,
            typeName: Ee.ZodEffects,
            effect: t,
            ...E(i)
        }),
        fe.createWithPreprocess = (e,t,i)=>new fe({
            schema: t,
            effect: {
                type: "preprocess",
                transform: e
            },
            typeName: Ee.ZodEffects,
            ...E(i)
        });
        class pe extends S {
            _parse(e) {
                return this._getType(e) === i.undefined ? g(void 0) : this._def.innerType._parse(e)
            }
            unwrap() {
                return this._def.innerType
            }
        }
        pe.create = (e,t)=>new pe({
            innerType: e,
            typeName: Ee.ZodOptional,
            ...E(t)
        });
        class me extends S {
            _parse(e) {
                return this._getType(e) === i.null ? g(null) : this._def.innerType._parse(e)
            }
            unwrap() {
                return this._def.innerType
            }
        }
        me.create = (e,t)=>new me({
            innerType: e,
            typeName: Ee.ZodNullable,
            ...E(t)
        });
        class ge extends S {
            _parse(e) {
                const {ctx: t} = this._processInputParams(e);
                let n = t.data;
                return t.parsedType === i.undefined && (n = this._def.defaultValue()),
                this._def.innerType._parse({
                    data: n,
                    path: t.path,
                    parent: t
                })
            }
            removeDefault() {
                return this._def.innerType
            }
        }
        ge.create = (e,t)=>new ge({
            innerType: e,
            typeName: Ee.ZodDefault,
            defaultValue: "function" == typeof t.default ? t.default : ()=>t.default,
            ...E(t)
        });
        class ve extends S {
            _parse(e) {
                const {ctx: t} = this._processInputParams(e)
                  , i = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    }
                }
                  , n = this._def.innerType._parse({
                    data: i.data,
                    path: i.path,
                    parent: {
                        ...i
                    }
                });
                return w(n) ? n.then((e=>({
                    status: "valid",
                    value: "valid" === e.status ? e.value : this._def.catchValue({
                        get error() {
                            return new o(i.common.issues)
                        },
                        input: i.data
                    })
                }))) : {
                    status: "valid",
                    value: "valid" === n.status ? n.value : this._def.catchValue({
                        get error() {
                            return new o(i.common.issues)
                        },
                        input: i.data
                    })
                }
            }
            removeCatch() {
                return this._def.innerType
            }
        }
        ve.create = (e,t)=>new ve({
            innerType: e,
            typeName: Ee.ZodCatch,
            catchValue: "function" == typeof t.catch ? t.catch : ()=>t.catch,
            ...E(t)
        });
        class ye extends S {
            _parse(e) {
                if (this._getType(e) !== i.nan) {
                    const t = this._getOrReturnCtx(e);
                    return h(t, {
                        code: r.invalid_type,
                        expected: i.nan,
                        received: t.parsedType
                    }),
                    p
                }
                return {
                    status: "valid",
                    value: e.data
                }
            }
        }
        ye.create = e=>new ye({
            typeName: Ee.ZodNaN,
            ...E(e)
        });
        const be = Symbol("zod_brand");
        class we extends S {
            _parse(e) {
                const {ctx: t} = this._processInputParams(e)
                  , i = t.data;
                return this._def.type._parse({
                    data: i,
                    path: t.path,
                    parent: t
                })
            }
            unwrap() {
                return this._def.type
            }
        }
        class ke extends S {
            _parse(e) {
                const {status: t, ctx: i} = this._processInputParams(e);
                if (i.common.async) {
                    return (async()=>{
                        const e = await this._def.in._parseAsync({
                            data: i.data,
                            path: i.path,
                            parent: i
                        });
                        return "aborted" === e.status ? p : "dirty" === e.status ? (t.dirty(),
                        m(e.value)) : this._def.out._parseAsync({
                            data: e.value,
                            path: i.path,
                            parent: i
                        })
                    }
                    )()
                }
                {
                    const e = this._def.in._parseSync({
                        data: i.data,
                        path: i.path,
                        parent: i
                    });
                    return "aborted" === e.status ? p : "dirty" === e.status ? (t.dirty(),
                    {
                        status: "dirty",
                        value: e.value
                    }) : this._def.out._parseSync({
                        data: e.value,
                        path: i.path,
                        parent: i
                    })
                }
            }
            static create(e, t) {
                return new ke({
                    in: e,
                    out: t,
                    typeName: Ee.ZodPipeline
                })
            }
        }
        const xe = (e,t={},i)=>e ? U.create().superRefine(((n,a)=>{
            var s, r;
            if (!e(n)) {
                const e = "function" == typeof t ? t(n) : "string" == typeof t ? {
                    message: t
                } : t
                  , o = null === (r = null !== (s = e.fatal) && void 0 !== s ? s : i) || void 0 === r || r
                  , l = "string" == typeof e ? {
                    message: e
                } : e;
                a.addIssue({
                    code: "custom",
                    ...l,
                    fatal: o
                })
            }
        }
        )) : U.create()
          , _e = {
            object: X.lazycreate
        };
        var Ee;
        !function(e) {
            e.ZodString = "ZodString",
            e.ZodNumber = "ZodNumber",
            e.ZodNaN = "ZodNaN",
            e.ZodBigInt = "ZodBigInt",
            e.ZodBoolean = "ZodBoolean",
            e.ZodDate = "ZodDate",
            e.ZodSymbol = "ZodSymbol",
            e.ZodUndefined = "ZodUndefined",
            e.ZodNull = "ZodNull",
            e.ZodAny = "ZodAny",
            e.ZodUnknown = "ZodUnknown",
            e.ZodNever = "ZodNever",
            e.ZodVoid = "ZodVoid",
            e.ZodArray = "ZodArray",
            e.ZodObject = "ZodObject",
            e.ZodUnion = "ZodUnion",
            e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
            e.ZodIntersection = "ZodIntersection",
            e.ZodTuple = "ZodTuple",
            e.ZodRecord = "ZodRecord",
            e.ZodMap = "ZodMap",
            e.ZodSet = "ZodSet",
            e.ZodFunction = "ZodFunction",
            e.ZodLazy = "ZodLazy",
            e.ZodLiteral = "ZodLiteral",
            e.ZodEnum = "ZodEnum",
            e.ZodEffects = "ZodEffects",
            e.ZodNativeEnum = "ZodNativeEnum",
            e.ZodOptional = "ZodOptional",
            e.ZodNullable = "ZodNullable",
            e.ZodDefault = "ZodDefault",
            e.ZodCatch = "ZodCatch",
            e.ZodPromise = "ZodPromise",
            e.ZodBranded = "ZodBranded",
            e.ZodPipeline = "ZodPipeline"
        }(Ee || (Ee = {}));
        const Se = F.create
          , Te = W.create
          , Ce = ye.create
          , je = N.create
          , Ie = Z.create
          , Ae = M.create
          , Pe = $.create
          , Le = B.create
          , Oe = D.create
          , ze = U.create
          , Fe = V.create
          , Re = K.create
          , We = H.create
          , Ne = q.create
          , Ze = X.create
          , Me = X.strictCreate
          , $e = G.create
          , Be = Q.create
          , De = te.create
          , Ue = ie.create
          , Ve = ne.create
          , Ke = ae.create
          , He = se.create
          , qe = re.create
          , Je = oe.create
          , Xe = le.create
          , Ge = ce.create
          , Ye = ue.create
          , Qe = he.create
          , et = fe.create
          , tt = pe.create
          , it = me.create
          , nt = fe.createWithPreprocess
          , at = ke.create
          , st = {
            string: e=>F.create({
                ...e,
                coerce: !0
            }),
            number: e=>W.create({
                ...e,
                coerce: !0
            }),
            boolean: e=>Z.create({
                ...e,
                coerce: !0
            }),
            bigint: e=>N.create({
                ...e,
                coerce: !0
            }),
            date: e=>M.create({
                ...e,
                coerce: !0
            })
        }
          , rt = p;
        var ot = Object.freeze({
            __proto__: null,
            defaultErrorMap: l,
            setErrorMap: function(e) {
                d = e
            },
            getErrorMap: c,
            makeIssue: u,
            EMPTY_PATH: [],
            addIssueToContext: h,
            ParseStatus: f,
            INVALID: p,
            DIRTY: m,
            OK: g,
            isAborted: v,
            isDirty: y,
            isValid: b,
            isAsync: w,
            get util() {
                return e
            },
            get objectUtil() {
                return t
            },
            ZodParsedType: i,
            getParsedType: n,
            ZodType: S,
            ZodString: F,
            ZodNumber: W,
            ZodBigInt: N,
            ZodBoolean: Z,
            ZodDate: M,
            ZodSymbol: $,
            ZodUndefined: B,
            ZodNull: D,
            ZodAny: U,
            ZodUnknown: V,
            ZodNever: K,
            ZodVoid: H,
            ZodArray: q,
            ZodObject: X,
            ZodUnion: G,
            ZodDiscriminatedUnion: Q,
            ZodIntersection: te,
            ZodTuple: ie,
            ZodRecord: ne,
            ZodMap: ae,
            ZodSet: se,
            ZodFunction: re,
            ZodLazy: oe,
            ZodLiteral: le,
            ZodEnum: ce,
            ZodNativeEnum: ue,
            ZodPromise: he,
            ZodEffects: fe,
            ZodTransformer: fe,
            ZodOptional: pe,
            ZodNullable: me,
            ZodDefault: ge,
            ZodCatch: ve,
            ZodNaN: ye,
            BRAND: be,
            ZodBranded: we,
            ZodPipeline: ke,
            custom: xe,
            Schema: S,
            ZodSchema: S,
            late: _e,
            get ZodFirstPartyTypeKind() {
                return Ee
            },
            coerce: st,
            any: ze,
            array: Ne,
            bigint: je,
            boolean: Ie,
            date: Ae,
            discriminatedUnion: Be,
            effect: et,
            enum: Ge,
            function: qe,
            instanceof: (e,t={
                message: `Input not instance of ${e.name}`
            })=>xe((t=>t instanceof e), t),
            intersection: De,
            lazy: Je,
            literal: Xe,
            map: Ke,
            nan: Ce,
            nativeEnum: Ye,
            never: Re,
            null: Oe,
            nullable: it,
            number: Te,
            object: Ze,
            oboolean: ()=>Ie().optional(),
            onumber: ()=>Te().optional(),
            optional: tt,
            ostring: ()=>Se().optional(),
            pipeline: at,
            preprocess: nt,
            promise: Qe,
            record: Ve,
            set: He,
            strictObject: Me,
            string: Se,
            symbol: Pe,
            transformer: et,
            tuple: Ue,
            undefined: Le,
            union: $e,
            unknown: Fe,
            void: We,
            NEVER: rt,
            ZodIssueCode: r,
            quotelessJson: e=>JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
            ZodError: o
        });
        const lt = ot.record(ot.string()).nullable()
          , dt = ot.object({
            id: ot.string().nonempty(),
            name: ot.string().nonempty(),
            monthlySpend: ot.number().min(0).optional(),
            createdAt: ot.string().optional(),
            customFields: lt.optional()
        })
          , ct = ot.object({
            organization: ot.string().nonempty(),
            email: ot.string().email().nonempty(),
            name: ot.string().nonempty(),
            id: ot.string().nonempty(),
            profilePicture: ot.string().url().nullable().optional(),
            createdAt: ot.string().optional(),
            customFields: lt.optional(),
            companies: ot.array(dt).optional()
        });
        class ut {
            constructor(e) {
                this.organization = e.organization,
                this.iframe = null,
                this.overlay = null,
                this.popper = null,
                this.activeSubmissionId = e.submissionId || null
            }
            initialize() {
                this.setupIframeEmbed(),
                this.setupListeners()
            }
            setupIframeEmbed() {
                const e = this.setupOverlay();
                this.popper = document.createElement("div"),
                this.popper.setAttribute("id", "featurebase-popup-iframe"),
                this.iframe = document.createElement("iframe"),
                this.iframe.setAttribute("src", `https://${this.organization}.featurebase.app/popup`),
                this.iframe.setAttribute("class", "featurebase-popup-iframe"),
                this.iframe.setAttribute("referrerPolicy", "origin"),
                this.iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals"),
                this.popper.appendChild(this.iframe),
                this.popper.appendChild(e),
                document.body.appendChild(this.popper)
            }
            setupOverlay() {
                const e = this;
                return this.overlay = document.createElement("div"),
                this.overlay.setAttribute("id", "featurebase-popup-overlay"),
                this.overlay.setAttribute("class", "featurebase-popup-overlay fb-fade-in"),
                this.overlay.addEventListener("click", (function() {
                    e.togglePopup()
                }
                )),
                this.overlay
            }
            setupListeners() {
                window.addEventListener("message", this.handlePostMessage.bind(this))
            }
            togglePopup() {
                this.iframe && (this.iframe.classList.contains("featurebase-popup-iframe-show") ? this.closePopup() : this.openPopup())
            }
            openPopup() {
                var e, t, i, n, a;
                this.popper && (null === (e = this.iframe) || void 0 === e || e.classList.add("featurebase-popup-iframe-show"),
                null === (t = this.overlay) || void 0 === t || t.style.setProperty("display", "block"),
                null === (i = this.iframe) || void 0 === i || i.setAttribute("src", `https://${this.organization}.featurebase.app/popup/${this.activeSubmissionId}`),
                null === (a = null === (n = this.iframe) || void 0 === n ? void 0 : n.contentWindow) || void 0 === a || a.postMessage({
                    target: "FeaturebaseWidget",
                    data: {
                        action: "widgetOpened"
                    }
                }, "*"))
            }
            closePopup() {
                var e, t;
                this.popper && (null === (e = this.iframe) || void 0 === e || e.classList.remove("featurebase-popup-iframe-show"),
                null === (t = this.overlay) || void 0 === t || t.style.setProperty("display", "none"))
            }
            handlePostMessage(e) {
                if (e.preventDefault(),
                e.data && "FeaturebasePopup" === e.data.target)
                    switch (e.data.data.action) {
                    case "openPopup":
                        const t = e.data.data.submissionId;
                        e.data.data.organization;
                        if (!t)
                            return void console.error("[Featurebase Popup] Missing submissionId in postMessage.");
                        this.activeSubmissionId = t,
                        this.openPopup();
                        break;
                    case "closePopup":
                        this.closePopup();
                        break;
                    default:
                        return
                    }
            }
        }
        const ht = ()=>window && window.FEATUREBASE_ENV && "development" === window.FEATUREBASE_ENV ? "development" : "production"
          , ft = (e,t,i)=>{
            (null == e ? void 0 : e.jwtToken) && i && (null == t ? void 0 : t.jwtToken) !== e.jwtToken && (t.jwtToken = e.jwtToken,
            i.forEach((t=>{
                const i = new URL(t.src);
                i.searchParams.set("jwt", e.jwtToken || ""),
                t.src = i.toString()
            }
            )))
        }
        ;
        class pt {
            constructor(e) {
                this.openIcon = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 14.4241 4.31039 12.8637 4.91345 11.4078C5.5165 9.95189 6.40042 8.62902 7.51472 7.51472C8.62902 6.40042 9.95189 5.5165 11.4078 4.91345C12.8637 4.31039 14.4241 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16C28 19.1826 26.7357 22.2348 24.4853 24.4853C22.2348 26.7357 19.1826 28 16 28Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.333 13.3334C12.6663 12 9.99967 12 9.33301 13.3334" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> <path d="M22.667 13.3334C22.0003 12 19.3337 12 18.667 13.3334" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.3337 20C18.8992 20.4435 18.3805 20.7958 17.8082 21.0363C17.2358 21.2768 16.6212 21.4007 16.0003 21.4007C15.3795 21.4007 14.7649 21.2768 14.1925 21.0363C13.6201 20.7958 13.1015 20.4435 12.667 20" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
                this.closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256"><line x1="200" y1="56" x2="56" y2="200" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="200" y1="200" x2="56" y2="56" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>',
                this.setInnerIframeStyles = (e,t)=>{
                    e.style.margin = "0",
                    e.style.padding = "0",
                    e.style.width = "50px",
                    e.style.height = "50px",
                    e.style.border = "none",
                    e.style.outline = "none",
                    e.style.display = "flex",
                    e.style.cursor = "pointer",
                    e.style.appearance = "none",
                    e.style.overflow = "hidden",
                    e.style.alignItems = "center",
                    e.style.justifyContent = "center",
                    e.style.background = t || "#4a90e2"
                }
                ,
                this.config = e,
                this.iframe = null,
                this.overlay = null,
                this.popper = null,
                this.buttonIFrame = null,
                this.openButton = null,
                this.fullscreenXButton = null,
                this.config.placement || (this.config.placement = "right"),
                this.config.initialPage || (this.config.initialPage = "MainView"),
                this.config.fullScreen || (this.config.fullScreen = !1),
                this.config.disableCloseBtn || (this.config.disableCloseBtn = !1)
            }
            initialize() {
                this.setupIframeEmbed(),
                this.setupListeners()
            }
            setupIframeEmbed() {
                var e, t;
                if (this.iframe)
                    return;
                const i = this.setupOverlay();
                this.setCSSVariables(),
                this.popper = document.createElement("div"),
                this.iframe = document.createElement("iframe"),
                this.iframe.setAttribute("class", "featurebase-widget-iframe"),
                this.iframe.setAttribute("referrerPolicy", "origin"),
                this.iframe.setAttribute("allow", "fullscreen; clipboard-write"),
                this.iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-storage-access-by-user-activation allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals");
                const n = "production" === ht() ? new URL(`https://${this.config.organization}.featurebase.app/${this.config.locale}/widget`) : new URL(`http://${this.config.organization}.localhost:3000/${this.config.locale}/widget`);
                this.config.initialPage && n.searchParams.append("page", this.config.initialPage),
                this.config.jwtToken && n.searchParams.append("jwt", this.config.jwtToken),
                (null === (e = this.config) || void 0 === e ? void 0 : e.metadata) && n.searchParams.append("metaData", JSON.stringify(this.config.metadata)),
                (null === (t = this.config) || void 0 === t ? void 0 : t.theme) && n.searchParams.append("theme", this.config.theme),
                this.iframe.setAttribute("src", n.toString()),
                this.setupFullscreenButton(),
                this.popper.appendChild(i),
                this.popper.appendChild(this.iframe),
                !this.config.disableCloseBtn && this.fullscreenXButton && this.popper.appendChild(this.fullscreenXButton),
                document.body.appendChild(this.popper)
            }
            setCSSVariables() {
                const e = document.documentElement;
                e && (e.classList.add("featurebase-widget"),
                this.config.fullScreen ? e.classList.add("featurebase-fullscreen") : e.classList.remove("featurebase-fullscreen"),
                "left" === this.config.placement ? (e.classList.add("featurebase-left"),
                e.classList.remove("featurebase-right")) : (e.classList.add("featurebase-right"),
                e.classList.remove("featurebase-left")))
            }
            setupFloatingOpenButton(e) {
                const t = this;
                this.buttonIFrame = document.createElement("iframe"),
                this.buttonIFrame.setAttribute("class", "featurebase-widget-button-iframe"),
                this.openButton = document.createElement("button"),
                this.openButton.innerHTML = this.openIcon,
                this.setInnerIframeStyles(this.openButton, e),
                this.openButton.setAttribute("class", "featurebase-floaterbtn-iframe-button"),
                this.openButton.addEventListener("click", (function() {
                    t.toggleWidget()
                }
                )),
                this.iframe && (this.iframe.classList.remove("featurebase-floaterbtn-fullscreen-right", "featurebase-floaterbtn-fullscreen-left", "featurebase-floaterbtn-not-fullscreen", "featurebase-floaterbtn-not-fullscreen-right", "featurebase-floaterbtn-not-fullscreen-left"),
                this.config.fullScreen ? "right" === this.config.placement ? this.iframe.classList.add("featurebase-floaterbtn-fullscreen-right") : this.iframe.classList.add("featurebase-floaterbtn-fullscreen-left") : (this.iframe.classList.add("featurebase-floaterbtn-not-fullscreen"),
                "right" === this.config.placement ? this.iframe.classList.add("featurebase-floaterbtn-not-fullscreen-right") : this.iframe.classList.add("featurebase-floaterbtn-not-fullscreen-left"))),
                this.buttonIFrame.onload = function() {
                    var i, n, a, s, r;
                    if (null !== t.buttonIFrame && (null === (r = t.buttonIFrame) || void 0 === r ? void 0 : r.contentDocument)) {
                        const r = null === (i = t.buttonIFrame.contentDocument) || void 0 === i ? void 0 : i.body
                          , o = null === (n = t.buttonIFrame.contentDocument) || void 0 === n ? void 0 : n.documentElement;
                        r && t.setInnerIframeStyles(r, e),
                        o && t.setInnerIframeStyles(o, e),
                        t.openButton && (null === (s = null === (a = t.buttonIFrame) || void 0 === a ? void 0 : a.contentDocument) || void 0 === s || s.body.appendChild(t.openButton))
                    }
                }
                ,
                (null == this ? void 0 : this.popper) && (this.buttonIFrame && (null == this || this.popper.appendChild(this.buttonIFrame)),
                (this.config.selector || document.querySelector("button[data-featurebase-feedback-portal]")) && this.buttonIFrame && (this.buttonIFrame.style.display = "none"))
            }
            setupFullscreenButton() {
                const e = this;
                this.fullscreenXButton = document.createElement("button"),
                this.fullscreenXButton.setAttribute("class", "fb-widget-fullscreen-x fb-button-x-fade-in");
                const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                t.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                t.setAttribute("fill", "none"),
                t.setAttribute("viewBox", "0 0 24 24"),
                t.setAttribute("stroke-width", "1.8"),
                t.setAttribute("stroke", "#fff"),
                t.setAttribute("class", "featurebase-x-svg-icon");
                const i = document.createElementNS("http://www.w3.org/2000/svg", "path");
                i.setAttribute("stroke-linecap", "round"),
                i.setAttribute("stroke-linejoin", "round"),
                i.setAttribute("d", "M6 18L18 6M6 6l12 12"),
                t.appendChild(i),
                this.fullscreenXButton.appendChild(t),
                this.fullscreenXButton.addEventListener("click", (function() {
                    e.toggleWidget()
                }
                )),
                this.iframe && ("right" === this.config.placement ? (this.iframe.classList.add("featurebase-widget-iframe-right"),
                this.fullscreenXButton.classList.add("fb-widget-fullscreen-x-right")) : (this.iframe.classList.add("featurebase-widget-iframe-left"),
                this.fullscreenXButton.classList.add("fb-widget-fullscreen-x-left")))
            }
            updateWidgetSize(e, t, i, n) {
                const a = document.documentElement;
                this.config.fullScreen || (a.style.setProperty("--featurebase-widget-max-height", e),
                a.style.setProperty("--featurebase-widget-height", t),
                a.style.setProperty("--featurebase-widget-width", i)),
                this.iframe && (this.iframe.style.transformOrigin = "right" === this.config.placement ? "bottom right" : "bottom left",
                this.iframe.style.transition = "transform cubic-bezier(0, 0.3, 0.6, 1) 0.3s, opacity 0.1s ease-in-out, visibility 0.3s linear, width 0.3s, height 0.3s",
                n ? (this.iframe.style.transform = "scale(1)",
                this.iframe.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px") : (this.iframe.style.transform = "scale(0.1)",
                this.iframe.style.boxShadow = "none"))
            }
            setupOverlay() {
                const e = this;
                return this.overlay = document.createElement("div"),
                this.overlay.setAttribute("id", "featurebase-widget-overlay"),
                this.overlay.setAttribute("class", "featurebase-widget-overlay fb-widget-fade-in"),
                this.overlay.addEventListener("click", (function() {
                    e.toggleWidget()
                }
                )),
                this.overlay
            }
            setupListeners() {
                const e = this;
                document.addEventListener("click", (function(t) {
                    e.handleGlobalClickEvent(t)
                }
                )),
                window.addEventListener("message", this.handlePostMessage.bind(this)),
                document.addEventListener("identifyAuthChange", (e=>{
                    const t = e;
                    t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail)
                }
                ))
            }
            handleGlobalAuthChange(e) {
                this.iframe && ft(e, this.config, [this.iframe])
            }
            handleGlobalClickEvent(e) {
                if (e && e.target) {
                    var t = [];
                    this.config.selector && t.push(...document.querySelectorAll(this.config.selector)),
                    t.push(...document.querySelectorAll("button[data-featurebase-feedback-portal]"));
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (e.target === t[i] || n.contains(e.target))
                            return this.toggleWidget()
                    }
                }
            }
            toggleWidget() {
                var e, t, i, n;
                this.iframe && (this.iframe.classList.contains("featurebase-widget-iframe-show") ? (this.closeWidget(),
                null === (e = this.buttonIFrame) || void 0 === e || e.classList.remove("fb-widget-opened-toggle-button"),
                this.config.fullScreen ? (null === (t = this.buttonIFrame) || void 0 === t || t.classList.remove("fb-widget-hide-toggle-button"),
                "right" === this.config.placement ? this.iframe.style.transform = "translateX(500px)" : this.iframe.style.transform = "translateX(-500px)") : this.iframe.style.transform = "scale(0.1)") : (this.openWidget(),
                this.config.fullScreen ? (null === (i = this.buttonIFrame) || void 0 === i || i.classList.add("fb-widget-hide-toggle-button"),
                this.iframe.style.transform = "translateX(0px)") : (null === (n = this.buttonIFrame) || void 0 === n || n.classList.add("fb-widget-opened-toggle-button"),
                this.iframe.style.transform = "scale(1)")))
            }
            openWidget() {
                var e, t, i, n;
                this.popper && this.iframe && (this.iframe.classList.add("featurebase-widget-iframe-show"),
                this.config.fullScreen && this.overlay && (this.overlay.classList.remove("featurebase-display-none"),
                this.overlay.classList.add("featurebase-display-block")),
                this.openButton && (this.openButton.innerHTML = this.closeIcon),
                null === (t = null === (e = this.iframe) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t || t.postMessage({
                    target: "FeaturebaseWidget",
                    data: {
                        action: "widgetOpened"
                    }
                }, "*"),
                this.config.fullScreen && this.fullscreenXButton && (this.fullscreenXButton.classList.remove("featurebase-display-none"),
                this.fullscreenXButton.classList.add("featurebase-display-block")),
                (this.config.selector || document.querySelector("button[data-featurebase-feedback-portal]")) && (null === (i = this.buttonIFrame) || void 0 === i || i.classList.remove("featurebase-display-none"),
                null === (n = this.buttonIFrame) || void 0 === n || n.classList.add("featurebase-display-block")))
            }
            closeWidget() {
                var e, t, i, n;
                this.popper && this.iframe && (this.iframe.classList.remove("featurebase-widget-iframe-show"),
                this.config.fullScreen && (null === (e = this.overlay) || void 0 === e || e.classList.remove("featurebase-display-block"),
                null === (t = this.overlay) || void 0 === t || t.classList.add("featurebase-display-none")),
                this.openButton && (this.openButton.innerHTML = this.openIcon),
                this.config.fullScreen && this.fullscreenXButton && (this.fullscreenXButton.classList.remove("featurebase-display-block"),
                this.fullscreenXButton.classList.add("featurebase-display-none")),
                (this.config.selector || document.querySelector("button[data-featurebase-feedback-portal]")) && (null === (i = this.buttonIFrame) || void 0 === i || i.classList.remove("featurebase-display-block"),
                null === (n = this.buttonIFrame) || void 0 === n || n.classList.add("featurebase-display-none")))
            }
            handlePostMessage(e) {
                var t, i, n, a, s, r, o, l;
                if (e.preventDefault(),
                e.data && "FeaturebaseWidget" === e.data.target)
                    switch (e.data.data.action) {
                    case "changePage":
                        null === (i = null === (t = this.iframe) || void 0 === t ? void 0 : t.contentWindow) || void 0 === i || i.postMessage({
                            target: "FeaturebaseWidget",
                            data: e.data.data
                        }, "*"),
                        e.data.data.openWidget && (this.openWidget(),
                        null === (a = null === (n = this.iframe) || void 0 === n ? void 0 : n.contentWindow) || void 0 === a || a.postMessage({
                            target: "FeaturebaseWidget",
                            data: {
                                action: "widgetOpened"
                            }
                        }, "*"));
                        break;
                    case "openWidget":
                        this.openWidget(),
                        null === (r = null === (s = this.iframe) || void 0 === s ? void 0 : s.contentWindow) || void 0 === r || r.postMessage({
                            target: "FeaturebaseWidget",
                            data: {
                                action: "widgetOpened"
                            }
                        }, "*");
                        break;
                    case "closeWidget":
                        this.closeWidget();
                        break;
                    case "toggleWidget":
                        this.toggleWidget();
                        break;
                    case "toggleWideView":
                        this.updateWidgetSize("90vh", "90vh", "720px", !0);
                        break;
                    case "closeWideView":
                        this.updateWidgetSize("700px", "75vh", "420px", !1);
                        break;
                    case "initializePortalOrg":
                        !(null == this ? void 0 : this.popper) || this.buttonIFrame || this.config.fullScreen || this.setupFloatingOpenButton(e.data.data.data.color);
                        break;
                    case "requestJwt":
                        this.config.jwtToken && (null === (l = null === (o = this.iframe) || void 0 === o ? void 0 : o.contentWindow) || void 0 === l || l.postMessage({
                            target: "FeaturebaseWidget",
                            data: {
                                action: "jwtAuth",
                                payload: this.config.jwtToken
                            }
                        }, "*"));
                        break;
                    default:
                        return
                    }
            }
        }
        function mt(e) {
            const t = new pt(e);
            return t.initialize(),
            t
        }
        const gt = ot.enum(["en", "de", "es", "et", "fr", "kr", "nl", "pt", "ru"])
          , vt = ot.record(ot.string()).nullable()
          , yt = ot.object({
            organization: ot.string().nonempty(),
            placement: ot.enum(["bottom-right", "bottom-left", "left", "right"]).optional(),
            theme: ot.string().nonempty(),
            email: ot.string().optional(),
            defaultBoard: ot.string().optional(),
            jwtToken: ot.string().default("").optional(),
            metadata: vt.optional(),
            locale: gt.default("en")
        })
          , bt = ot.object({
            organization: ot.string().nonempty(),
            placement: ot.enum(["left", "right"]).optional(),
            initialPage: ot.enum(["MainView", "RoadmapView", "CreatePost", "PostsView", "ChangelogView", "HelpView"]).default("MainView"),
            fullScreen: ot.boolean().default(!1),
            jwtToken: ot.string().default("").optional(),
            selector: ot.string().optional(),
            disableCloseBtn: ot.boolean().default(!1).optional(),
            metadata: vt.optional(),
            theme: ot.string().nonempty().optional(),
            locale: gt.default("en")
        })
          , wt = ot.object({
            organization: ot.string().nonempty(),
            placement: ot.enum(["bottom", "top", "left", "right", "auto"]).optional(),
            theme: ot.string().nonempty(),
            fullscreenPopup: ot.boolean().optional(),
            usersName: ot.string().optional(),
            alwaysShow: ot.boolean().optional(),
            jwtToken: ot.string().default("").optional(),
            locale: gt.default("en")
        });
        function kt(e) {
            return e.split("-")[1]
        }
        function xt(e) {
            return "y" === e ? "height" : "width"
        }
        function _t(e) {
            return e.split("-")[0]
        }
        function Et(e) {
            return ["top", "bottom"].includes(_t(e)) ? "x" : "y"
        }
        function St(e, t, i) {
            let {reference: n, floating: a} = e;
            const s = n.x + n.width / 2 - a.width / 2
              , r = n.y + n.height / 2 - a.height / 2
              , o = Et(t)
              , l = xt(o)
              , d = n[l] / 2 - a[l] / 2
              , c = "x" === o;
            let u;
            switch (_t(t)) {
            case "top":
                u = {
                    x: s,
                    y: n.y - a.height
                };
                break;
            case "bottom":
                u = {
                    x: s,
                    y: n.y + n.height
                };
                break;
            case "right":
                u = {
                    x: n.x + n.width,
                    y: r
                };
                break;
            case "left":
                u = {
                    x: n.x - a.width,
                    y: r
                };
                break;
            default:
                u = {
                    x: n.x,
                    y: n.y
                }
            }
            switch (kt(t)) {
            case "start":
                u[o] -= d * (i && c ? -1 : 1);
                break;
            case "end":
                u[o] += d * (i && c ? -1 : 1)
            }
            return u
        }
        const Tt = async(e,t,i)=>{
            const {placement: n="bottom", strategy: a="absolute", middleware: s=[], platform: r} = i
              , o = s.filter(Boolean)
              , l = await (null == r.isRTL ? void 0 : r.isRTL(t));
            let d = await r.getElementRects({
                reference: e,
                floating: t,
                strategy: a
            })
              , {x: c, y: u} = St(d, n, l)
              , h = n
              , f = {}
              , p = 0;
            for (let i = 0; i < o.length; i++) {
                const {name: s, fn: m} = o[i]
                  , {x: g, y: v, data: y, reset: b} = await m({
                    x: c,
                    y: u,
                    initialPlacement: n,
                    placement: h,
                    strategy: a,
                    middlewareData: f,
                    rects: d,
                    platform: r,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                c = null != g ? g : c,
                u = null != v ? v : u,
                f = {
                    ...f,
                    [s]: {
                        ...f[s],
                        ...y
                    }
                },
                b && p <= 50 && (p++,
                "object" == typeof b && (b.placement && (h = b.placement),
                b.rects && (d = !0 === b.rects ? await r.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: a
                }) : b.rects),
                ({x: c, y: u} = St(d, h, l))),
                i = -1)
            }
            return {
                x: c,
                y: u,
                placement: h,
                strategy: a,
                middlewareData: f
            }
        }
        ;
        function Ct(e) {
            return "number" != typeof e ? function(e) {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                }
            }(e) : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function jt(e) {
            return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height
            }
        }
        async function It(e, t) {
            var i;
            void 0 === t && (t = {});
            const {x: n, y: a, platform: s, rects: r, elements: o, strategy: l} = e
              , {boundary: d="clippingAncestors", rootBoundary: c="viewport", elementContext: u="floating", altBoundary: h=!1, padding: f=0} = t
              , p = Ct(f)
              , m = o[h ? "floating" === u ? "reference" : "floating" : u]
              , g = jt(await s.getClippingRect({
                element: null == (i = await (null == s.isElement ? void 0 : s.isElement(m))) || i ? m : m.contextElement || await (null == s.getDocumentElement ? void 0 : s.getDocumentElement(o.floating)),
                boundary: d,
                rootBoundary: c,
                strategy: l
            }))
              , v = "floating" === u ? {
                ...r.floating,
                x: n,
                y: a
            } : r.reference
              , y = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(o.floating))
              , b = await (null == s.isElement ? void 0 : s.isElement(y)) && await (null == s.getScale ? void 0 : s.getScale(y)) || {
                x: 1,
                y: 1
            }
              , w = jt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                rect: v,
                offsetParent: y,
                strategy: l
            }) : v);
            return {
                top: (g.top - w.top + p.top) / b.y,
                bottom: (w.bottom - g.bottom + p.bottom) / b.y,
                left: (g.left - w.left + p.left) / b.x,
                right: (w.right - g.right + p.right) / b.x
            }
        }
        const At = Math.min
          , Pt = Math.max;
        function Lt(e, t, i) {
            return Pt(e, At(t, i))
        }
        const Ot = ["top", "right", "bottom", "left"]
          , zt = Ot.reduce(((e,t)=>e.concat(t, t + "-start", t + "-end")), [])
          , Ft = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function Rt(e) {
            return e.replace(/left|right|bottom|top/g, (e=>Ft[e]))
        }
        function Wt(e, t, i) {
            void 0 === i && (i = !1);
            const n = kt(e)
              , a = Et(e)
              , s = xt(a);
            let r = "x" === a ? n === (i ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
            return t.reference[s] > t.floating[s] && (r = Rt(r)),
            {
                main: r,
                cross: Rt(r)
            }
        }
        const Nt = {
            start: "end",
            end: "start"
        };
        function Zt(e) {
            return e.replace(/start|end/g, (e=>Nt[e]))
        }
        const Mt = function(e) {
            return void 0 === e && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var i;
                    const {placement: n, middlewareData: a, rects: s, initialPlacement: r, platform: o, elements: l} = t
                      , {mainAxis: d=!0, crossAxis: c=!0, fallbackPlacements: u, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: f="none", flipAlignment: p=!0, ...m} = e
                      , g = _t(n)
                      , v = _t(r) === r
                      , y = await (null == o.isRTL ? void 0 : o.isRTL(l.floating))
                      , b = u || (v || !p ? [Rt(r)] : function(e) {
                        const t = Rt(e);
                        return [Zt(e), t, Zt(t)]
                    }(r));
                    u || "none" === f || b.push(...function(e, t, i, n) {
                        const a = kt(e);
                        let s = function(e, t, i) {
                            const n = ["left", "right"]
                              , a = ["right", "left"]
                              , s = ["top", "bottom"]
                              , r = ["bottom", "top"];
                            switch (e) {
                            case "top":
                            case "bottom":
                                return i ? t ? a : n : t ? n : a;
                            case "left":
                            case "right":
                                return t ? s : r;
                            default:
                                return []
                            }
                        }(_t(e), "start" === i, n);
                        return a && (s = s.map((e=>e + "-" + a)),
                        t && (s = s.concat(s.map(Zt)))),
                        s
                    }(r, p, f, y));
                    const w = [r, ...b]
                      , k = await It(t, m)
                      , x = [];
                    let _ = (null == (i = a.flip) ? void 0 : i.overflows) || [];
                    if (d && x.push(k[g]),
                    c) {
                        const {main: e, cross: t} = Wt(n, s, y);
                        x.push(k[e], k[t])
                    }
                    if (_ = [..._, {
                        placement: n,
                        overflows: x
                    }],
                    !x.every((e=>e <= 0))) {
                        var E, S;
                        const e = ((null == (E = a.flip) ? void 0 : E.index) || 0) + 1
                          , t = w[e];
                        if (t)
                            return {
                                data: {
                                    index: e,
                                    overflows: _
                                },
                                reset: {
                                    placement: t
                                }
                            };
                        let i = null == (S = _.filter((e=>e.overflows[0] <= 0)).sort(((e,t)=>e.overflows[1] - t.overflows[1]))[0]) ? void 0 : S.placement;
                        if (!i)
                            switch (h) {
                            case "bestFit":
                                {
                                    var T;
                                    const e = null == (T = _.map((e=>[e.placement, e.overflows.filter((e=>e > 0)).reduce(((e,t)=>e + t), 0)])).sort(((e,t)=>e[1] - t[1]))[0]) ? void 0 : T[0];
                                    e && (i = e);
                                    break
                                }
                            case "initialPlacement":
                                i = r
                            }
                        if (n !== i)
                            return {
                                reset: {
                                    placement: i
                                }
                            }
                    }
                    return {}
                }
            }
        };
        const $t = function(e) {
            return void 0 === e && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    const {x: i, y: n} = t
                      , a = await async function(e, t) {
                        const {placement: i, platform: n, elements: a} = e
                          , s = await (null == n.isRTL ? void 0 : n.isRTL(a.floating))
                          , r = _t(i)
                          , o = kt(i)
                          , l = "x" === Et(i)
                          , d = ["left", "top"].includes(r) ? -1 : 1
                          , c = s && l ? -1 : 1
                          , u = "function" == typeof t ? t(e) : t;
                        let {mainAxis: h, crossAxis: f, alignmentAxis: p} = "number" == typeof u ? {
                            mainAxis: u,
                            crossAxis: 0,
                            alignmentAxis: null
                        } : {
                            mainAxis: 0,
                            crossAxis: 0,
                            alignmentAxis: null,
                            ...u
                        };
                        return o && "number" == typeof p && (f = "end" === o ? -1 * p : p),
                        l ? {
                            x: f * c,
                            y: h * d
                        } : {
                            x: h * d,
                            y: f * c
                        }
                    }(t, e);
                    return {
                        x: i + a.x,
                        y: n + a.y,
                        data: a
                    }
                }
            }
        };
        function Bt(e) {
            return "x" === e ? "y" : "x"
        }
        const Dt = function(e) {
            return void 0 === e && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    const {x: i, y: n, placement: a} = t
                      , {mainAxis: s=!0, crossAxis: r=!1, limiter: o={
                        fn: e=>{
                            let {x: t, y: i} = e;
                            return {
                                x: t,
                                y: i
                            }
                        }
                    }, ...l} = e
                      , d = {
                        x: i,
                        y: n
                    }
                      , c = await It(t, l)
                      , u = Et(_t(a))
                      , h = Bt(u);
                    let f = d[u]
                      , p = d[h];
                    if (s) {
                        const e = "y" === u ? "bottom" : "right";
                        f = Lt(f + c["y" === u ? "top" : "left"], f, f - c[e])
                    }
                    if (r) {
                        const e = "y" === h ? "bottom" : "right";
                        p = Lt(p + c["y" === h ? "top" : "left"], p, p - c[e])
                    }
                    const m = o.fn({
                        ...t,
                        [u]: f,
                        [h]: p
                    });
                    return {
                        ...m,
                        data: {
                            x: m.x - i,
                            y: m.y - n
                        }
                    }
                }
            }
        }
          , Ut = function(e) {
            return void 0 === e && (e = {}),
            {
                options: e,
                fn(t) {
                    const {x: i, y: n, placement: a, rects: s, middlewareData: r} = t
                      , {offset: o=0, mainAxis: l=!0, crossAxis: d=!0} = e
                      , c = {
                        x: i,
                        y: n
                    }
                      , u = Et(a)
                      , h = Bt(u);
                    let f = c[u]
                      , p = c[h];
                    const m = "function" == typeof o ? o(t) : o
                      , g = "number" == typeof m ? {
                        mainAxis: m,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...m
                    };
                    if (l) {
                        const e = "y" === u ? "height" : "width"
                          , t = s.reference[u] - s.floating[e] + g.mainAxis
                          , i = s.reference[u] + s.reference[e] - g.mainAxis;
                        f < t ? f = t : f > i && (f = i)
                    }
                    if (d) {
                        var v, y;
                        const e = "y" === u ? "width" : "height"
                          , t = ["top", "left"].includes(_t(a))
                          , i = s.reference[h] - s.floating[e] + (t && (null == (v = r.offset) ? void 0 : v[h]) || 0) + (t ? 0 : g.crossAxis)
                          , n = s.reference[h] + s.reference[e] + (t ? 0 : (null == (y = r.offset) ? void 0 : y[h]) || 0) - (t ? g.crossAxis : 0);
                        p < i ? p = i : p > n && (p = n)
                    }
                    return {
                        [u]: f,
                        [h]: p
                    }
                }
            }
        };
        function Vt(e) {
            var t;
            return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function Kt(e) {
            return Vt(e).getComputedStyle(e)
        }
        function Ht(e) {
            return e instanceof Vt(e).Node
        }
        function qt(e) {
            return Ht(e) ? (e.nodeName || "").toLowerCase() : ""
        }
        let Jt;
        function Xt() {
            if (Jt)
                return Jt;
            const e = navigator.userAgentData;
            return e && Array.isArray(e.brands) ? (Jt = e.brands.map((e=>e.brand + "/" + e.version)).join(" "),
            Jt) : navigator.userAgent
        }
        function Gt(e) {
            return e instanceof Vt(e).HTMLElement
        }
        function Yt(e) {
            return e instanceof Vt(e).Element
        }
        function Qt(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof Vt(e).ShadowRoot || e instanceof ShadowRoot)
        }
        function ei(e) {
            const {overflow: t, overflowX: i, overflowY: n, display: a} = Kt(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a)
        }
        function ti(e) {
            return ["table", "td", "th"].includes(qt(e))
        }
        function ii(e) {
            const t = /firefox/i.test(Xt())
              , i = Kt(e)
              , n = i.backdropFilter || i.WebkitBackdropFilter;
            return "none" !== i.transform || "none" !== i.perspective || !!n && "none" !== n || t && "filter" === i.willChange || t && !!i.filter && "none" !== i.filter || ["transform", "perspective"].some((e=>i.willChange.includes(e))) || ["paint", "layout", "strict", "content"].some((e=>{
                const t = i.contain;
                return null != t && t.includes(e)
            }
            ))
        }
        function ni() {
            return /^((?!chrome|android).)*safari/i.test(Xt())
        }
        function ai(e) {
            return ["html", "body", "#document"].includes(qt(e))
        }
        const si = Math.min
          , ri = Math.max
          , oi = Math.round;
        function li(e) {
            const t = Kt(e);
            let i = parseFloat(t.width) || 0
              , n = parseFloat(t.height) || 0;
            const a = Gt(e)
              , s = a ? e.offsetWidth : i
              , r = a ? e.offsetHeight : n
              , o = oi(i) !== s || oi(n) !== r;
            return o && (i = s,
            n = r),
            {
                width: i,
                height: n,
                fallback: o
            }
        }
        function di(e) {
            return Yt(e) ? e : e.contextElement
        }
        const ci = {
            x: 1,
            y: 1
        };
        function ui(e) {
            const t = di(e);
            if (!Gt(t))
                return ci;
            const i = t.getBoundingClientRect()
              , {width: n, height: a, fallback: s} = li(t);
            let r = (s ? oi(i.width) : i.width) / n
              , o = (s ? oi(i.height) : i.height) / a;
            return r && Number.isFinite(r) || (r = 1),
            o && Number.isFinite(o) || (o = 1),
            {
                x: r,
                y: o
            }
        }
        function hi(e, t, i, n) {
            var a, s;
            void 0 === t && (t = !1),
            void 0 === i && (i = !1);
            const r = e.getBoundingClientRect()
              , o = di(e);
            let l = ci;
            t && (n ? Yt(n) && (l = ui(n)) : l = ui(e));
            const d = o ? Vt(o) : window
              , c = ni() && i;
            let u = (r.left + (c && (null == (a = d.visualViewport) ? void 0 : a.offsetLeft) || 0)) / l.x
              , h = (r.top + (c && (null == (s = d.visualViewport) ? void 0 : s.offsetTop) || 0)) / l.y
              , f = r.width / l.x
              , p = r.height / l.y;
            if (o) {
                const e = Vt(o)
                  , t = n && Yt(n) ? Vt(n) : n;
                let i = e.frameElement;
                for (; i && n && t !== e; ) {
                    const e = ui(i)
                      , t = i.getBoundingClientRect()
                      , n = getComputedStyle(i);
                    t.x += (i.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                    t.y += (i.clientTop + parseFloat(n.paddingTop)) * e.y,
                    u *= e.x,
                    h *= e.y,
                    f *= e.x,
                    p *= e.y,
                    u += t.x,
                    h += t.y,
                    i = Vt(i).frameElement
                }
            }
            return jt({
                width: f,
                height: p,
                x: u,
                y: h
            })
        }
        function fi(e) {
            return ((Ht(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }
        function pi(e) {
            return Yt(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            }
        }
        function mi(e) {
            return hi(fi(e)).left + pi(e).scrollLeft
        }
        function gi(e) {
            if ("html" === qt(e))
                return e;
            const t = e.assignedSlot || e.parentNode || Qt(e) && e.host || fi(e);
            return Qt(t) ? t.host : t
        }
        function vi(e) {
            const t = gi(e);
            return ai(t) ? t.ownerDocument.body : Gt(t) && ei(t) ? t : vi(t)
        }
        function yi(e, t) {
            var i;
            void 0 === t && (t = []);
            const n = vi(e)
              , a = n === (null == (i = e.ownerDocument) ? void 0 : i.body)
              , s = Vt(n);
            return a ? t.concat(s, s.visualViewport || [], ei(n) ? n : []) : t.concat(n, yi(n))
        }
        function bi(e, t, i) {
            let n;
            if ("viewport" === t)
                n = function(e, t) {
                    const i = Vt(e)
                      , n = fi(e)
                      , a = i.visualViewport;
                    let s = n.clientWidth
                      , r = n.clientHeight
                      , o = 0
                      , l = 0;
                    if (a) {
                        s = a.width,
                        r = a.height;
                        const e = ni();
                        (!e || e && "fixed" === t) && (o = a.offsetLeft,
                        l = a.offsetTop)
                    }
                    return {
                        width: s,
                        height: r,
                        x: o,
                        y: l
                    }
                }(e, i);
            else if ("document" === t)
                n = function(e) {
                    const t = fi(e)
                      , i = pi(e)
                      , n = e.ownerDocument.body
                      , a = ri(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
                      , s = ri(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
                    let r = -i.scrollLeft + mi(e);
                    const o = -i.scrollTop;
                    return "rtl" === Kt(n).direction && (r += ri(t.clientWidth, n.clientWidth) - a),
                    {
                        width: a,
                        height: s,
                        x: r,
                        y: o
                    }
                }(fi(e));
            else if (Yt(t))
                n = function(e, t) {
                    const i = hi(e, !0, "fixed" === t)
                      , n = i.top + e.clientTop
                      , a = i.left + e.clientLeft
                      , s = Gt(e) ? ui(e) : {
                        x: 1,
                        y: 1
                    };
                    return {
                        width: e.clientWidth * s.x,
                        height: e.clientHeight * s.y,
                        x: a * s.x,
                        y: n * s.y
                    }
                }(t, i);
            else {
                const i = {
                    ...t
                };
                if (ni()) {
                    var a, s;
                    const t = Vt(e);
                    i.x -= (null == (a = t.visualViewport) ? void 0 : a.offsetLeft) || 0,
                    i.y -= (null == (s = t.visualViewport) ? void 0 : s.offsetTop) || 0
                }
                n = i
            }
            return jt(n)
        }
        function wi(e, t) {
            const i = gi(e);
            return !(i === t || !Yt(i) || ai(i)) && ("fixed" === Kt(i).position || wi(i, t))
        }
        function ki(e, t) {
            return Gt(e) && "fixed" !== Kt(e).position ? t ? t(e) : e.offsetParent : null
        }
        function xi(e, t) {
            const i = Vt(e);
            if (!Gt(e))
                return i;
            let n = ki(e, t);
            for (; n && ti(n) && "static" === Kt(n).position; )
                n = ki(n, t);
            return n && ("html" === qt(n) || "body" === qt(n) && "static" === Kt(n).position && !ii(n)) ? i : n || function(e) {
                let t = gi(e);
                for (; Gt(t) && !ai(t); ) {
                    if (ii(t))
                        return t;
                    t = gi(t)
                }
                return null
            }(e) || i
        }
        function _i(e, t, i) {
            const n = Gt(t)
              , a = fi(t)
              , s = hi(e, !0, "fixed" === i, t);
            let r = {
                scrollLeft: 0,
                scrollTop: 0
            };
            const o = {
                x: 0,
                y: 0
            };
            if (n || !n && "fixed" !== i)
                if (("body" !== qt(t) || ei(a)) && (r = pi(t)),
                Gt(t)) {
                    const e = hi(t, !0);
                    o.x = e.x + t.clientLeft,
                    o.y = e.y + t.clientTop
                } else
                    a && (o.x = mi(a));
            return {
                x: s.left + r.scrollLeft - o.x,
                y: s.top + r.scrollTop - o.y,
                width: s.width,
                height: s.height
            }
        }
        const Ei = {
            getClippingRect: function(e) {
                let {element: t, boundary: i, rootBoundary: n, strategy: a} = e;
                const s = "clippingAncestors" === i ? function(e, t) {
                    const i = t.get(e);
                    if (i)
                        return i;
                    let n = yi(e).filter((e=>Yt(e) && "body" !== qt(e)))
                      , a = null;
                    const s = "fixed" === Kt(e).position;
                    let r = s ? gi(e) : e;
                    for (; Yt(r) && !ai(r); ) {
                        const t = Kt(r)
                          , i = ii(r);
                        i || "fixed" !== t.position || (a = null),
                        (s ? !i && !a : !i && "static" === t.position && a && ["absolute", "fixed"].includes(a.position) || ei(r) && !i && wi(e, r)) ? n = n.filter((e=>e !== r)) : a = t,
                        r = gi(r)
                    }
                    return t.set(e, n),
                    n
                }(t, this._c) : [].concat(i)
                  , r = [...s, n]
                  , o = r[0]
                  , l = r.reduce(((e,i)=>{
                    const n = bi(t, i, a);
                    return e.top = ri(n.top, e.top),
                    e.right = si(n.right, e.right),
                    e.bottom = si(n.bottom, e.bottom),
                    e.left = ri(n.left, e.left),
                    e
                }
                ), bi(t, o, a));
                return {
                    width: l.right - l.left,
                    height: l.bottom - l.top,
                    x: l.left,
                    y: l.top
                }
            },
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {rect: t, offsetParent: i, strategy: n} = e;
                const a = Gt(i)
                  , s = fi(i);
                if (i === s)
                    return t;
                let r = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , o = {
                    x: 1,
                    y: 1
                };
                const l = {
                    x: 0,
                    y: 0
                };
                if ((a || !a && "fixed" !== n) && (("body" !== qt(i) || ei(s)) && (r = pi(i)),
                Gt(i))) {
                    const e = hi(i);
                    o = ui(i),
                    l.x = e.x + i.clientLeft,
                    l.y = e.y + i.clientTop
                }
                return {
                    width: t.width * o.x,
                    height: t.height * o.y,
                    x: t.x * o.x - r.scrollLeft * o.x + l.x,
                    y: t.y * o.y - r.scrollTop * o.y + l.y
                }
            },
            isElement: Yt,
            getDimensions: function(e) {
                return li(e)
            },
            getOffsetParent: xi,
            getDocumentElement: fi,
            getScale: ui,
            async getElementRects(e) {
                let {reference: t, floating: i, strategy: n} = e;
                const a = this.getOffsetParent || xi
                  , s = this.getDimensions;
                return {
                    reference: _i(t, await a(i), n),
                    floating: {
                        x: 0,
                        y: 0,
                        ...await s(i)
                    }
                }
            },
            getClientRects: e=>Array.from(e.getClientRects()),
            isRTL: e=>"rtl" === Kt(e).direction
        };
        class Si {
            constructor(e) {
                this.config = e,
                this.iframeElement = null,
                this.floatingElement = null,
                this.referenceElement = null,
                this.cleanupUpdate = null,
                this.unviewedChangelogCount = null,
                this.fullscreenOverlay = null,
                this.fullscreenIframeElement = null,
                this.updatePosition = this.updatePosition.bind(this)
            }
            initialize() {
                this.setupWidget(),
                this.setupListeners(),
                this.startBadgeCheckInterval()
            }
            setupWidget() {
                if (this.floatingElement)
                    return;
                this.floatingElement = document.createElement("div"),
                this.floatingElement.classList.add("fb-changelog-popup-hidden", "fb-changelog-popup-wrapper"),
                this.floatingElement.style.background = "dark" === this.config.theme ? "#242837" : "#fff",
                this.floatingElement.style.filter = "dark" === this.config.theme ? "drop-shadow(0 25px 25px rgb(0 0 0 / 0.45))" : "drop-shadow(0 20px 13px rgb(0 0 0 / 0.1))",
                this.iframeElement = document.createElement("iframe");
                const e = "production" === ht()
                  , t = e ? `https://${this.config.organization}.featurebase.app/${this.config.locale}/widget/changelogWidgetSSR` : `http://${this.config.organization}.localhost:3000/${this.config.locale}/widget/changelogWidgetSSR`
                  , i = new URL(t);
                if (i.searchParams.set("theme", this.config.theme),
                this.config.jwtToken && i.searchParams.set("jwtToken", this.config.jwtToken),
                this.iframeElement.src = i.toString(),
                this.iframeElement.setAttribute("allow", "fullscreen; clipboard-write"),
                this.iframeElement.classList.add("fb-changelog-popup-iframe"),
                this.iframeElement.style.background = "dark" === this.config.theme ? "#242837" : "#fff",
                this.floatingElement.tabIndex = -1,
                this.floatingElement.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals"),
                this.floatingElement.style.top = "0px",
                this.floatingElement.style.left = "0px",
                this.floatingElement.append(this.iframeElement),
                this.config.fullscreenPopup) {
                    this.fullscreenOverlay = document.createElement("div"),
                    this.fullscreenOverlay.classList.add("fb-changelog-popup-overlay"),
                    this.fullscreenOverlay.style.background = "dark" === this.config.theme ? "rgba(16 , 18, 25, 0.8)" : "rgba(255, 255, 255, 0.1)",
                    this.fullscreenOverlay.tabIndex = -1,
                    this.fullscreenOverlay.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals"),
                    this.fullscreenIframeElement = document.createElement("iframe");
                    const t = e ? `https://${this.config.organization}.featurebase.app/${this.config.locale}/widget/changelogPopupSSR` : `http://${this.config.organization}.localhost:3000/${this.config.locale}/widget/changelogPopupSSR`
                      , i = new URL(t);
                    i.searchParams.set("theme", this.config.theme),
                    this.config.usersName && i.searchParams.set("name", this.config.usersName),
                    this.config.alwaysShow && i.searchParams.set("alwaysShow", this.config.alwaysShow.toString()),
                    this.config.jwtToken && i.searchParams.set("jwtToken", this.config.jwtToken),
                    this.fullscreenIframeElement.src = i.toString(),
                    this.fullscreenIframeElement.setAttribute("allow", "fullscreen; clipboard-write"),
                    this.fullscreenIframeElement.classList.add("fb-changelog-popup-overlay-iframe"),
                    this.fullscreenIframeElement.style.background = "dark" === this.config.theme ? "#242837" : "#f5f6f9",
                    this.fullscreenIframeElement.style.boxShadow = "dark" === this.config.theme ? " 0 25px 25px rgba(0, 0, 0, 0.25)" : "0 15px 25px rgb(0 0 0 / 0.1)",
                    this.fullscreenIframeElement.style.border = "dark" === this.config.theme ? "1px solid #32384D" : "1px solid #DEE1EA",
                    this.fullscreenOverlay.append(this.fullscreenIframeElement),
                    this.fullscreenOverlay.classList.add("fb-changelog-popup-overlay-hidden"),
                    this.fullscreenOverlay.classList.add("fb-changelog-popup-display-none"),
                    document.body.appendChild(this.fullscreenOverlay)
                }
                this.referenceElement = document.querySelector("button[data-featurebase-changelog]"),
                document.body.appendChild(this.floatingElement)
            }
            handleClickEvent(e) {
                var t, i, n;
                if (!e || !e.target)
                    return;
                var a = e.target;
                if (this.config.fullscreenPopup && (null == this ? void 0 : this.fullscreenOverlay) && !(null === (i = null === (t = null == this ? void 0 : this.fullscreenOverlay) || void 0 === t ? void 0 : t.classList) || void 0 === i ? void 0 : i.contains("fb-changelog-popup-overlay-hidden")) && (e.target === this.fullscreenIframeElement || (null === (n = this.fullscreenIframeElement) || void 0 === n ? void 0 : n.contains(e.target)) || (this.togglePopupWidget(!1),
                this.setAllAsViewed())),
                "handled" === this.handleOutsideClickEvent(a))
                    return;
                const s = document.querySelectorAll("button[data-featurebase-changelog]");
                for (var r = 0; r < s.length; r++) {
                    var o = s[r];
                    if (e.target === s[r] || o.contains(e.target))
                        return this.handleClickInsideButton(o)
                }
            }
            togglePopupWidget(e=!1) {
                var t, i, n;
                e ? (null === (i = this.fullscreenOverlay) || void 0 === i || i.classList.remove("fb-changelog-popup-overlay-hidden"),
                null === (n = this.fullscreenOverlay) || void 0 === n || n.classList.remove("fb-changelog-popup-display-none")) : (null === (t = this.fullscreenOverlay) || void 0 === t || t.classList.add("fb-changelog-popup-overlay-hidden"),
                setTimeout((()=>{
                    var e;
                    null === (e = this.fullscreenOverlay) || void 0 === e || e.classList.add("fb-changelog-popup-display-none")
                }
                ), 300))
            }
            handleOutsideClickEvent(e) {
                return e && this.floatingElement && this.floatingElement.classList.contains("fb-changelog-popup") && !this.floatingElement.contains(e) && this.referenceElement && !this.referenceElement.contains(e) && (this.floatingElement.classList.remove("fb-changelog-popup"),
                this.floatingElement.classList.add("fb-changelog-popup-hidden"),
                this.cleanupUpdate) ? (this.cleanupUpdate(),
                this.cleanupUpdate = null,
                "handled") : "not-handled"
            }
            handleClickInsideButton(e) {
                e && (this.referenceElement = e,
                this.referenceElement && this.floatingElement && this.updatePosition && (this.updatePosition(),
                this.floatingElement && (this.floatingElement.classList.contains("fb-changelog-popup-hidden") ? (this.cleanupUpdate = function(e, t, i, n) {
                    void 0 === n && (n = {});
                    const {ancestorScroll: a=!0, ancestorResize: s=!0, elementResize: r=!0, animationFrame: o=!1} = n
                      , l = a || s ? [...Yt(e) ? yi(e) : e.contextElement ? yi(e.contextElement) : [], ...yi(t)] : [];
                    l.forEach((e=>{
                        const t = !Yt(e) && e.toString().includes("V");
                        !a || o && !t || e.addEventListener("scroll", i, {
                            passive: !0
                        }),
                        s && e.addEventListener("resize", i)
                    }
                    ));
                    let d, c = null;
                    r && (c = new ResizeObserver((()=>{
                        i()
                    }
                    )),
                    Yt(e) && !o && c.observe(e),
                    Yt(e) || !e.contextElement || o || c.observe(e.contextElement),
                    c.observe(t));
                    let u = o ? hi(e) : null;
                    return o && function t() {
                        const n = hi(e);
                        !u || n.x === u.x && n.y === u.y && n.width === u.width && n.height === u.height || i(),
                        u = n,
                        d = requestAnimationFrame(t)
                    }(),
                    i(),
                    ()=>{
                        var e;
                        l.forEach((e=>{
                            a && e.removeEventListener("scroll", i),
                            s && e.removeEventListener("resize", i)
                        }
                        )),
                        null == (e = c) || e.disconnect(),
                        c = null,
                        o && cancelAnimationFrame(d)
                    }
                }(this.referenceElement, this.floatingElement, this.updatePosition),
                this.floatingElement.classList.remove("fb-changelog-popup-hidden"),
                this.floatingElement.classList.add("fb-changelog-popup")) : (this.floatingElement.classList.remove("fb-changelog-popup"),
                this.floatingElement.classList.add("fb-changelog-popup-hidden"),
                this.cleanupUpdate && (this.cleanupUpdate(),
                this.cleanupUpdate = null)))))
            }
            setupListeners() {
                const e = this;
                document.addEventListener("click", (function(t) {
                    e.handleClickEvent(t)
                }
                ), !0),
                window.addEventListener("message", this.handleIframeMessage.bind(this), !1),
                this.config.fullscreenPopup && (window.addEventListener("keydown", (function(t) {
                    e.handleKeyPressEvent(t)
                }
                ), !0),
                window.addEventListener("resize", this.handleResizeEvent.bind(this))),
                document.addEventListener("identifyAuthChange", (e=>{
                    const t = e;
                    t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail)
                }
                ))
            }
            handleGlobalAuthChange(e) {
                this.fullscreenIframeElement && this.iframeElement && ft(e, this.config, [this.fullscreenIframeElement, this.iframeElement])
            }
            handleKeyPressEvent(e) {
                var t, i;
                ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && this.fullscreenOverlay && !this.fullscreenOverlay.classList.contains("fb-feedback-widget-overlay-hidden") && (null === (i = null === (t = this.iframeElement) || void 0 === t ? void 0 : t.contentWindow) || void 0 === i || i.postMessage({
                    target: "FeaturebaseWidget",
                    data: {
                        action: "numberKeyPress",
                        key: e.key
                    }
                }, "*")),
                "Escape" === e.key && this.fullscreenOverlay && !this.fullscreenOverlay.classList.contains("fb-feedback-widget-overlay-hidden") && (this.togglePopupWidget(!1),
                this.setAllAsViewed())
            }
            handleResizeEvent() {
                var e, t, i;
                if (null === (e = this.fullscreenIframeElement) || void 0 === e ? void 0 : e.contentWindow) {
                    const e = document.body.offsetWidth;
                    null === (i = null === (t = null == this ? void 0 : this.fullscreenIframeElement) || void 0 === t ? void 0 : t.contentWindow) || void 0 === i || i.postMessage({
                        target: "FeaturebaseWidget",
                        data: {
                            action: "viewportResized",
                            width: e
                        }
                    }, "*")
                }
            }
            setAllAsViewed() {
                var e, t;
                null === (t = null === (e = null == this ? void 0 : this.fullscreenIframeElement) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t || t.postMessage({
                    target: "FeaturebaseWidget",
                    data: {
                        action: "setAsViewed"
                    }
                }, "*")
            }
            manuallyOpenChangelogPopup() {
                this.fullscreenOverlay && this.togglePopupWidget(!0)
            }
            getUnviewedChangelogCount() {
                return this.unviewedChangelogCount || 0
            }
            handleIframeMessage(e) {
                var t, i;
                if (e.preventDefault(),
                e.data && "FeaturebaseWidget" === e.data.target)
                    switch (e.data.data.action) {
                    case "menuHeightChanged":
                        this.floatingElement && (this.floatingElement.style.height = `${e.data.data.data}px`,
                        this.floatingElement.style.maxHeight = e.data.data.data >= 350 ? "350px" : `${e.data.data.data}px`);
                        break;
                    case "popupHeightChanged":
                        this.fullscreenIframeElement && (this.fullscreenIframeElement.style.height = `${e.data.data.data}px`);
                        break;
                    case "closeWidget":
                        this.fullscreenOverlay && this.togglePopupWidget(!1);
                        break;
                    case "updateHasUpdates":
                        if (!this.config.organization)
                            return;
                        localStorage.setItem("FBVisitedChangelogsTracker-" + this.config.organization, e.data.data.data);
                        const n = document.getElementById("fb-update-badge");
                        localStorage.getItem("FBVisitedChangelogsTracker") && localStorage.removeItem("FBVisitedChangelogsTracker");
                        const a = JSON.parse(localStorage.getItem("FBVisitedChangelogsTracker-" + this.config.organization) || localStorage.getItem("FBVisitedChangelogsTracker") || "{}");
                        if (this.config.fullscreenPopup) {
                            (null === (t = null == a ? void 0 : a.unviewedChangelogs) || void 0 === t ? void 0 : t.length) >= 1 && (this.handleResizeEvent(),
                            this.config.alwaysShow || this.togglePopupWidget(!0))
                        }
                        if (this.unviewedChangelogCount = (null === (i = null == a ? void 0 : a.unviewedChangelogs) || void 0 === i ? void 0 : i.length) || 0,
                        n) {
                            let e = "";
                            n && (e = this.unviewedChangelogCount >= 1 ? this.unviewedChangelogCount : ""),
                            n.innerHTML = e
                        }
                        break;
                    default:
                        return
                    }
            }
            updatePosition() {
                if (this.referenceElement && this.floatingElement) {
                    let e = [Mt(), Dt({
                        limiter: Ut()
                    }), $t(8), Dt({
                        padding: 8
                    })];
                    "auto" === this.config.placement && e.push(function(e) {
                        return void 0 === e && (e = {}),
                        {
                            name: "autoPlacement",
                            options: e,
                            async fn(t) {
                                var i, n, a;
                                const {rects: s, middlewareData: r, placement: o, platform: l, elements: d} = t
                                  , {crossAxis: c=!1, alignment: u, allowedPlacements: h=zt, autoAlignment: f=!0, ...p} = e
                                  , m = void 0 !== u || h === zt ? function(e, t, i) {
                                    return (e ? [...i.filter((t=>kt(t) === e)), ...i.filter((t=>kt(t) !== e))] : i.filter((e=>_t(e) === e))).filter((i=>!e || kt(i) === e || !!t && Zt(i) !== i))
                                }(u || null, f, h) : h
                                  , g = await It(t, p)
                                  , v = (null == (i = r.autoPlacement) ? void 0 : i.index) || 0
                                  , y = m[v];
                                if (null == y)
                                    return {};
                                const {main: b, cross: w} = Wt(y, s, await (null == l.isRTL ? void 0 : l.isRTL(d.floating)));
                                if (o !== y)
                                    return {
                                        reset: {
                                            placement: m[0]
                                        }
                                    };
                                const k = [g[_t(y)], g[b], g[w]]
                                  , x = [...(null == (n = r.autoPlacement) ? void 0 : n.overflows) || [], {
                                    placement: y,
                                    overflows: k
                                }]
                                  , _ = m[v + 1];
                                if (_)
                                    return {
                                        data: {
                                            index: v + 1,
                                            overflows: x
                                        },
                                        reset: {
                                            placement: _
                                        }
                                    };
                                const E = x.map((e=>{
                                    const t = kt(e.placement);
                                    return [e.placement, t && c ? e.overflows.slice(0, 2).reduce(((e,t)=>e + t), 0) : e.overflows[0], e.overflows]
                                }
                                )).sort(((e,t)=>e[1] - t[1]))
                                  , S = (null == (a = E.filter((e=>e[2].slice(0, kt(e[0]) ? 2 : 3).every((e=>e <= 0))))[0]) ? void 0 : a[0]) || E[0][0];
                                return S !== o ? {
                                    data: {
                                        index: v + 1,
                                        overflows: x
                                    },
                                    reset: {
                                        placement: S
                                    }
                                } : {}
                            }
                        }
                    }()),
                    ((e,t,i)=>{
                        const n = new Map
                          , a = {
                            platform: Ei,
                            ...i
                        }
                          , s = {
                            ...a.platform,
                            _c: n
                        };
                        return Tt(e, t, {
                            ...a,
                            platform: s
                        })
                    }
                    )(this.referenceElement, this.floatingElement, {
                        placement: "auto" !== this.config.placement ? this.config.placement : void 0,
                        middleware: e
                    }).then((({x: e, y: t})=>{
                        this.floatingElement && Object.assign(this.floatingElement.style, {
                            left: `${e}px`,
                            top: `${t}px`
                        })
                    }
                    ))
                }
            }
            startBadgeCheckInterval() {
                setInterval((()=>{
                    this.updateBadgeSpan()
                }
                ), 2500)
            }
            updateBadgeSpan() {
                var e;
                if (0 === this.unviewedChangelogCount)
                    return;
                let t = document.getElementById("fb-update-badge");
                t && "" === t.textContent && (t.textContent = (null === (e = null == this ? void 0 : this.unviewedChangelogCount) || void 0 === e ? void 0 : e.toString()) || "")
            }
        }
        var Ti = a(981);
        class Ci {
            constructor(e, t) {
                this.screenshot = null,
                this.feedbackButtonElement = null,
                this.getWidgetTheme = ()=>this.config.theme,
                this.updateWidgetTheme = e=>{
                    this.config.theme = e,
                    this.overlayElement && this.overlayElement.remove(),
                    this.setupWidget()
                }
                ,
                this.config = e,
                this.overlayElement = null,
                this.iframeElement = null,
                this.feedbackButtonElement = null,
                this.callbackFunction = t
            }
            initialize() {
                this.setupListeners(),
                this.setupWidget()
            }
            setupWidget() {
                var e;
                this.overlayElement = document.createElement("div"),
                this.overlayElement.classList.add("fb-feedback-widget-overlay"),
                this.overlayElement.style.background = "dark" === this.config.theme ? "rgba(var(--fb-feedback-iframe-bg-color), 0.5)" : "rgba(255, 255, 255, 0.05)",
                this.iframeElement = document.createElement("iframe");
                const t = "production" === ht() ? new URL(`https://${this.config.organization}.featurebase.app/${this.config.locale}/widget/feedbackWidgetSSR`) : new URL(`http://${this.config.organization}.localhost:3000/${this.config.locale}/widget/feedbackWidgetSSR`);
                t.searchParams.append("theme", this.config.theme),
                this.config.defaultBoard && t.searchParams.append("defaultBoard", this.config.defaultBoard),
                this.config.jwtToken && t.searchParams.append("jwtToken", this.config.jwtToken),
                (null === (e = this.config) || void 0 === e ? void 0 : e.metadata) && t.searchParams.append("metaData", JSON.stringify(this.config.metadata)),
                this.iframeElement.src = t.toString(),
                this.iframeElement.classList.add("fb-feedback-widget-iframe"),
                this.iframeElement.style.background = "dark" === this.config.theme ? "rgba(var(--fb-feedback-iframe-bg-color), 1)" : "rgba(245, 246, 249, 0.8)",
                this.iframeElement.style.boxShadow = "dark" === this.config.theme ? " 0 25px 25px rgba(0, 0, 0, 0.3)" : "0px 17px 17px rgba(0, 0, 0, 0.1)",
                this.iframeElement.style.border = "dark" === this.config.theme ? "1px solid rgba(var(--fb-feedback-iframe-border-color), 1)" : "1px solid #DEE1EA",
                this.overlayElement.tabIndex = -1,
                this.overlayElement.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals"),
                this.overlayElement.append(this.iframeElement),
                this.overlayElement.classList.add("fb-feedback-widget-overlay-hidden"),
                document.body.appendChild(this.overlayElement),
                this.iframeElement.focus()
            }
            toggleWidgetFeedbackButton(e) {
                if (this.config.placement) {
                    const t = document.querySelector(".fb-feedback-widget-feedback-button-container");
                    if (t)
                        e && t.remove();
                    else {
                        this.feedbackButtonElement = document.createElement("fbdiv"),
                        this.feedbackButtonElement.classList.add("fb-feedback-widget-feedback-button-container");
                        const e = document.createElement("fbdiv");
                        e.classList.add("fb-feedback-widget-feedback-button"),
                        "bottom-left" === this.config.placement ? e.classList.add("fb-feedback-widget-feedback-button-bl") : "bottom-right" === this.config.placement ? e.classList.add("fb-feedback-widget-feedback-button-br") : "right" === this.config.placement ? e.classList.add("fb-feedback-widget-feedback-button-right") : "left" === this.config.placement && e.classList.add("fb-feedback-widget-feedback-button-left"),
                        e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />\n      </svg>\n       ${(0,
                        Ti.I)("feedback", this.config.locale)}`,
                        e.classList.add("fb-opacity-07"),
                        this.feedbackButtonElement.append(e),
                        document.body.appendChild(this.feedbackButtonElement)
                    }
                }
            }
            toggleWidget(e=null) {
                var t, i;
                this.overlayElement && (this.overlayElement.classList.contains("fb-feedback-widget-overlay-hidden") ? (this.overlayElement.classList.remove("fb-feedback-widget-overlay-hidden"),
                null === (i = null === (t = this.iframeElement) || void 0 === t ? void 0 : t.contentWindow) || void 0 === i || i.postMessage({
                    target: "FeaturebaseWidget",
                    data: {
                        action: "openFeedbackWidget",
                        setBoard: e || null
                    }
                }, "*"),
                this.callbackFunction && this.callbackFunction(null, {
                    action: "widgetOpened"
                })) : this.overlayElement.classList.add("fb-feedback-widget-overlay-hidden"),
                this.iframeElement && (null == this || this.iframeElement.focus()))
            }
            screenshotCallback(e) {
                var t, i, n;
                0 === e.length ? (null === (t = this.screenshot) || void 0 === t || t.toggleVisibility(!1),
                this.overlayElement && this.overlayElement.classList.remove("fb-feedback-widget-overlay-hidden")) : (null === (i = this.screenshot) || void 0 === i || i.toggleVisibility(!1),
                this.overlayElement && this.overlayElement.classList.remove("fb-feedback-widget-overlay-hidden"),
                this.iframeElement && (null === (n = this.iframeElement.contentWindow) || void 0 === n || n.postMessage({
                    target: "FeaturebaseWidget",
                    data: {
                        action: "screenshotCallback",
                        snapshot: e
                    }
                }, "*"))),
                this.toggleWidgetFeedbackButton()
            }
            handleIframeMessage(e) {
                var t, i, n, s, r, o, l, d;
                if (e.preventDefault(),
                e.data && "FeaturebaseWidget" === e.data.target)
                    switch (e.data.data.action) {
                    case "menuHeightChangedFeedback":
                        this.iframeElement && (this.iframeElement.style.transition = "height 0.95s ease, min-height 0.95s ease, opacity 0.2s ease",
                        this.iframeElement.style.height = `${e.data.data.data}px`,
                        this.iframeElement.style.minHeight = `${e.data.data.data}px`);
                        break;
                    case "menuHeightChangedFeedbackContent":
                        this.iframeElement && (this.iframeElement.style.height = `${e.data.data.data}px`,
                        this.iframeElement.style.minHeight = `${e.data.data.data}px`,
                        this.iframeElement.style.transition = "height 0s ease-in, min-height 0.2s ease, opacity 0.2s ease");
                        break;
                    case "closeWidget":
                        this.overlayElement && this.overlayElement.classList.add("fb-feedback-widget-overlay-hidden");
                        break;
                    case "initializeOrg":
                        this.overlayElement && (document.documentElement.style.setProperty("--fb-feedback-button-bg-color", e.data.data.data.color),
                        document.documentElement.style.setProperty("--fb-feedback-iframe-bg-color", null === (t = e.data.data.data) || void 0 === t ? void 0 : t.background),
                        document.documentElement.style.setProperty("--fb-feedback-iframe-border-color", null === (i = e.data.data.data) || void 0 === i ? void 0 : i.borderColor),
                        document.documentElement.style.setProperty("--fb-feedback-button-text-color", null === (n = e.data.data.data) || void 0 === n ? void 0 : n.primaryForeground),
                        this.toggleWidgetFeedbackButton());
                        break;
                    case "openFeedbackWidget":
                        const c = null === (r = null === (s = null == e ? void 0 : e.data) || void 0 === s ? void 0 : s.data) || void 0 === r ? void 0 : r.setBoard;
                        this.toggleWidget(c);
                        break;
                    case "feedbackSubmitted":
                        this.callbackFunction && this.callbackFunction(null, {
                            action: "feedbackSubmitted",
                            post: null === (l = null === (o = null == e ? void 0 : e.data) || void 0 === o ? void 0 : o.data) || void 0 === l ? void 0 : l.post
                        });
                        break;
                    case "startScreenshot":
                        this.screenshot ? (this.screenshot.resetEverything(),
                        null === (d = this.screenshot) || void 0 === d || d.activate(),
                        null == this || this.toggleWidget(),
                        this.toggleWidgetFeedbackButton(!0)) : Promise.all([a.e(682), a.e(92), a.e(154)]).then(a.bind(a, 925)).then((e=>{
                            var t;
                            this.screenshot = new e.default(this.config.locale,this.screenshotCallback.bind(this)),
                            null === (t = this.screenshot) || void 0 === t || t.activate(),
                            null == this || this.toggleWidget(),
                            this.toggleWidgetFeedbackButton(!0)
                        }
                        )).catch((e=>console.error("Error loading screenshot module:", e)));
                    default:
                        return
                    }
            }
            handleClickEvent(e) {
                if (!e || !e.target)
                    return;
                if (e.target.matches(".fb-feedback-widget-feedback-button"))
                    return this.toggleWidget();
                const t = document.querySelectorAll("button[data-featurebase-feedback]");
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (e.target === t[i] || n.contains(e.target))
                        return this.toggleWidget()
                }
            }
            handleKeyPressEvent(e) {
                var t, i;
                ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && this.overlayElement && !this.overlayElement.classList.contains("fb-feedback-widget-overlay-hidden") && (null === (i = null === (t = this.iframeElement) || void 0 === t ? void 0 : t.contentWindow) || void 0 === i || i.postMessage({
                    target: "FeaturebaseWidget",
                    data: {
                        action: "numberKeyPress",
                        key: e.key
                    }
                }, "*")),
                "Escape" === e.key && this.overlayElement && !this.overlayElement.classList.contains("fb-feedback-widget-overlay-hidden") && this.toggleWidget()
            }
            setupListeners() {
                const e = this;
                document.addEventListener("click", (function(t) {
                    e.handleClickEvent(t)
                }
                )),
                window.addEventListener("message", this.handleIframeMessage.bind(this), !1),
                window.addEventListener("keydown", (function(t) {
                    e.handleKeyPressEvent(t)
                }
                )),
                document.addEventListener("identifyAuthChange", (e=>{
                    const t = e;
                    t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail)
                }
                ))
            }
            handleGlobalAuthChange(e) {
                this.iframeElement && ft(e, this.config, [this.iframeElement])
            }
        }
        var ji = a(702)
          , Ii = a.n(ji);
        class Ai extends EventTarget {
            constructor(e) {
                super(),
                this.initialPath = "",
                this.generateConfigQueryParams = ()=>{
                    var e;
                    const t = new URLSearchParams;
                    return this.config.hideLogo && t.append("hideLogo", "true"),
                    this.config.hideMenu && t.append("hideMenu", "true"),
                    this.config.theme && t.append("theme", this.config.theme),
                    this.config.jwtToken && t.append("jwt", this.config.jwtToken),
                    (null === (e = this.config) || void 0 === e ? void 0 : e.metadata) && t.append("metaData", JSON.stringify(this.config.metadata)),
                    t.append("embed", "true"),
                    t
                }
                ,
                this.mergeQueryParams = (e,t)=>{
                    if (!t)
                        return e;
                    if ("string" == typeof t)
                        try {
                            t = new URLSearchParams(t)
                        } catch (t) {
                            return console.error('[Featurebase SDK] Error with action: "embed". The filters you provided are not in a valid format. Skipping applying the filters. Error:', t.message),
                            e
                        }
                    const i = new URL(e,"https://featurebase.app");
                    for (let[e,n] of t)
                        i.searchParams.has(e) || i.searchParams.append(e, n);
                    return `${i.pathname}${i.search}${i.hash}`
                }
                ,
                this.config = e,
                this.config.basePath && !this.config.basePath.startsWith("/") && (this.config.basePath = "/" + this.config.basePath),
                this.config.basePath && this.config.basePath.endsWith("/") && (this.config.basePath = this.config.basePath.substring(0, this.config.basePath.length - 1)),
                this.config.filters && this.config.filters.startsWith("/") && (this.config.filters = this.config.filters.substring(1)),
                this.config.filters && this.config.filters.startsWith("?") && (this.config.filters = this.config.filters.substring(1));
                const t = window.location.pathname + window.location.search + window.location.hash;
                t && this.config.basePath && t.startsWith(this.config.basePath) && (this.initialPath = t.substring(this.config.basePath.length)),
                this.iframe = null
            }
            initialize() {
                var e;
                const t = document.querySelector("[data-featurebase-embed]");
                ((null === (e = null == t ? void 0 : t.childNodes) || void 0 === e ? void 0 : e.length) || 0) > 0 || (t ? (this.setupIframeEmbed(),
                this.setupListeners()) : console.warn("No element with data-featurebase-embed found in the DOM. Please add the data-featurebase-embed attribute to the element you want to embed the widget into."))
            }
            setupIframeEmbed() {
                if (this.iframe)
                    return;
                var e = this;
                this.iframe = document.createElement("iframe"),
                this.iframe.setAttribute("id", "featurebase-embed-iframe"),
                this.iframe.setAttribute("class", "featurebase-embed-iframe"),
                this.iframe.setAttribute("referrerPolicy", "origin"),
                this.iframe.setAttribute("width", "100%"),
                this.iframe.setAttribute("height", "1px"),
                this.iframe.classList.add("featurebase-display-none"),
                this.iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-storage-access-by-user-activation allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals"),
                this.iframe.setAttribute("allow", "fullscreen; clipboard-write"),
                this.iframe.setAttribute("frameborder", "0"),
                this.iframe.setAttribute("allow", "clipboard-write"),
                this.iframe.onload = function() {
                    e.iframe && e.iframe.contentWindow && e.config.jwtToken && e.iframe.contentWindow.postMessage({
                        type: "auth",
                        jwt: e.config.jwtToken
                    }, "*")
                }
                ;
                const t = this.generateConfigQueryParams()
                  , i = this.mergeQueryParams(this.initialPath || "", t);
                if (this.initialPath && "/" !== this.initialPath)
                    this.iframe.setAttribute("src", "production" === ht() ? `https://${this.config.organization}.featurebase.app/${this.config.locale}${i}` : `http://${this.config.organization}.localhost:3000/${this.config.locale}${i}`);
                else if (this.config.initialPage) {
                    const e = this.mergeQueryParams(i, this.config.filters);
                    switch (this.config.initialPage) {
                    case "Board":
                        this.iframe.setAttribute("src", "production" === ht() ? `https://${this.config.organization}.featurebase.app/${this.config.locale}${e}` : `http://${this.config.organization}.localhost:3000/${this.config.locale}${e}`);
                        break;
                    case "Roadmap":
                        this.iframe.setAttribute("src", "production" === ht() ? `https://${this.config.organization}.featurebase.app/${this.config.locale}/roadmap${e}` : `http://${this.config.organization}.localhost:3000/${this.config.locale}/roadmap${e}`);
                        break;
                    case "Changelog":
                        this.iframe.setAttribute("src", "production" === ht() ? `https://${this.config.organization}.featurebase.app/${this.config.locale}/changelog${i}` : `http://${this.config.organization}.localhost:3000/${this.config.locale}/changelog${i}`);
                        break;
                    default:
                        this.iframe.setAttribute("src", "production" === ht() ? `https://${this.config.organization}.featurebase.app/${this.config.locale}${i}` : `http://${this.config.organization}.localhost:3000/${this.config.locale}${i}`)
                    }
                } else
                    this.iframe.setAttribute("src", "production" === ht() ? `https://${this.config.organization}.featurebase.app/${this.config.locale}${i}` : `http://${this.config.organization}.localhost:3000/${this.config.locale}${i}`);
                const n = document.querySelector("[data-featurebase-embed]");
                n ? (n.appendChild(this.iframe),
                this.adjustIframeHeight()) : (document.body.appendChild(this.iframe),
                Ii()({
                    log: !1,
                    onInit: ()=>{
                        e.iframe && (e.iframe.classList.remove("featurebase-display-none"),
                        e.iframe.classList.add("featurebase-display-block"))
                    }
                    ,
                    heightCalculationMethod: "lowestElement",
                    checkOrigin: !1
                }, this.iframe))
            }
            adjustIframeHeight() {
                const e = document.querySelector("[data-featurebase-embed]");
                if (e) {
                    var t = null == e ? void 0 : e.getBoundingClientRect().top;
                    this.iframe && (this.iframe.style.display = "block",
                    this.iframe.style.height = "calc(100dvh - " + t + "px)",
                    this.iframe.style.minHeight = "800px")
                }
            }
            setupListeners() {
                var e;
                window.addEventListener("message", this.handlePostMessage.bind(this)),
                window.addEventListener("resize", this.adjustIframeHeight.bind(this));
                const t = this;
                null === (e = null == this ? void 0 : this.iframe) || void 0 === e || e.addEventListener("load", (()=>{
                    t.dispatchEvent(new Event("finishedLoading"))
                }
                )),
                document.addEventListener("identifyAuthChange", (e=>{
                    const t = e;
                    t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail)
                }
                ))
            }
            handleGlobalAuthChange(e) {
                this.iframe && ft(e, this.config, [this.iframe])
            }
            handlePostMessage(e) {
                e.preventDefault();
                const t = e.data;
                if (t && "FeaturebaseEmbed" === t.target && "routeChange" === t.action) {
                    if (!this.config.basePath)
                        return;
                    const e = (this.config.basePath || "") + t.url;
                    window.history.pushState({}, "", e)
                }
            }
        }
        const Pi = ot.object({
            organization: ot.string().nonempty(),
            basePath: ot.string().nullable().default("").optional(),
            jwtToken: ot.string().nullable().default("").optional(),
            hideMenu: ot.boolean().default(!1).optional(),
            hideLogo: ot.boolean().default(!1).optional(),
            initialPage: ot.enum(["Board", "Roadmap", "Changelog"]).default("Board"),
            filters: ot.string().nullable().default("").optional(),
            theme: ot.enum(["light", "dark", ""]).nullable().default("").optional(),
            metadata: vt.optional(),
            locale: gt.default("en")
        })
          , Li = (ot.union([ot.literal("text"), ot.literal("link"), ot.literal("rating"), ot.literal("multiple-choice")]),
        ot.string())
          , Oi = ot.object({
            _id: Li,
            type: ot.string(),
            title: ot.string(),
            description: ot.string().optional()
        })
          , zi = Oi.extend({
            type: ot.literal("text"),
            placeholder: ot.string()
        })
          , Fi = Oi.extend({
            type: ot.literal("link"),
            linkButtonText: ot.string(),
            linkRedirectUrl: ot.string(),
            linkTarget: ot.enum(["_blank", "_self"])
        })
          , Ri = Oi.extend({
            type: ot.literal("rating"),
            subType: ot.enum(["number", "emoji"]),
            scale: ot.number(),
            lowLabel: ot.string(),
            highLabel: ot.string()
        })
          , Wi = ot.object({
            _id: Li,
            choice: ot.string()
        })
          , Ni = Oi.extend({
            type: ot.literal("multiple-choice"),
            subType: ot.enum(["generic", "featurebase-posts"]),
            allowSelectMultiple: ot.boolean(),
            choices: ot.array(Wi)
        })
          , Zi = ot.union([zi, Fi, Ri, Ni])
          , Mi = ot.object({
            isActive: ot.boolean(),
            organization: Li,
            title: ot.string(),
            description: ot.string().optional(),
            targeting: ot.object({
                segmentIds: ot.array(Li).default([]),
                url: ot.array(ot.object({
                    value: ot.string(),
                    matchType: ot.enum(["exact", "contains", "regex"])
                })).default([]),
                css: ot.array(ot.object({
                    value: ot.string()
                })).default([]),
                loginRequired: ot.boolean().default(!1)
            }).nullish(),
            pages: ot.array(Zi),
            _id: Li
        })
          , $i = ot.object({
            success: ot.boolean(),
            surveys: ot.array(Mi).default([]),
            message: ot.string().optional()
        }).passthrough()
          , Bi = ot.enum(["bottom-left", "bottom-right"]).default("bottom-right").nullish()
          , Di = ot.object({
            organization: ot.string(),
            email: ot.string().nullish(),
            jwtToken: ot.string().nullish(),
            placement: Bi,
            theme: ot.string().optional(),
            locale: gt.default("en")
        })
          , Ui = ot.object({
            context: Di,
            survey: Mi
        })
          , Vi = "3.7.7"
          , Ki = Vi
          , Hi = "function" == typeof Buffer
          , qi = "function" == typeof TextDecoder ? new TextDecoder : void 0
          , Ji = "function" == typeof TextEncoder ? new TextEncoder : void 0
          , Xi = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
          , Gi = (e=>{
            let t = {};
            return e.forEach(((e,i)=>t[e] = i)),
            t
        }
        )(Xi)
          , Yi = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
          , Qi = String.fromCharCode.bind(String)
          , en = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : e=>new Uint8Array(Array.prototype.slice.call(e, 0))
          , tn = e=>e.replace(/=/g, "").replace(/[+\/]/g, (e=>"+" == e ? "-" : "_"))
          , nn = e=>e.replace(/[^A-Za-z0-9\+\/]/g, "")
          , an = e=>{
            let t, i, n, a, s = "";
            const r = e.length % 3;
            for (let r = 0; r < e.length; ) {
                if ((i = e.charCodeAt(r++)) > 255 || (n = e.charCodeAt(r++)) > 255 || (a = e.charCodeAt(r++)) > 255)
                    throw new TypeError("invalid character found");
                t = i << 16 | n << 8 | a,
                s += Xi[t >> 18 & 63] + Xi[t >> 12 & 63] + Xi[t >> 6 & 63] + Xi[63 & t]
            }
            return r ? s.slice(0, r - 3) + "===".substring(r) : s
        }
          , sn = "function" == typeof btoa ? e=>btoa(e) : Hi ? e=>Buffer.from(e, "binary").toString("base64") : an
          , rn = Hi ? e=>Buffer.from(e).toString("base64") : e=>{
            let t = [];
            for (let i = 0, n = e.length; i < n; i += 4096)
                t.push(Qi.apply(null, e.subarray(i, i + 4096)));
            return sn(t.join(""))
        }
          , on = (e,t=!1)=>t ? tn(rn(e)) : rn(e)
          , ln = e=>{
            if (e.length < 2)
                return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? Qi(192 | t >>> 6) + Qi(128 | 63 & t) : Qi(224 | t >>> 12 & 15) + Qi(128 | t >>> 6 & 63) + Qi(128 | 63 & t);
            var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
            return Qi(240 | t >>> 18 & 7) + Qi(128 | t >>> 12 & 63) + Qi(128 | t >>> 6 & 63) + Qi(128 | 63 & t)
        }
          , dn = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
          , cn = e=>e.replace(dn, ln)
          , un = Hi ? e=>Buffer.from(e, "utf8").toString("base64") : Ji ? e=>rn(Ji.encode(e)) : e=>sn(cn(e))
          , hn = (e,t=!1)=>t ? tn(un(e)) : un(e)
          , fn = e=>hn(e, !0)
          , pn = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g
          , mn = e=>{
            switch (e.length) {
            case 4:
                var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                return Qi(55296 + (t >>> 10)) + Qi(56320 + (1023 & t));
            case 3:
                return Qi((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
            default:
                return Qi((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
            }
        }
          , gn = e=>e.replace(pn, mn)
          , vn = e=>{
            if (e = e.replace(/\s+/g, ""),
            !Yi.test(e))
                throw new TypeError("malformed base64.");
            e += "==".slice(2 - (3 & e.length));
            let t, i, n, a = "";
            for (let s = 0; s < e.length; )
                t = Gi[e.charAt(s++)] << 18 | Gi[e.charAt(s++)] << 12 | (i = Gi[e.charAt(s++)]) << 6 | (n = Gi[e.charAt(s++)]),
                a += 64 === i ? Qi(t >> 16 & 255) : 64 === n ? Qi(t >> 16 & 255, t >> 8 & 255) : Qi(t >> 16 & 255, t >> 8 & 255, 255 & t);
            return a
        }
          , yn = "function" == typeof atob ? e=>atob(nn(e)) : Hi ? e=>Buffer.from(e, "base64").toString("binary") : vn
          , bn = Hi ? e=>en(Buffer.from(e, "base64")) : e=>en(yn(e).split("").map((e=>e.charCodeAt(0))))
          , wn = e=>bn(xn(e))
          , kn = Hi ? e=>Buffer.from(e, "base64").toString("utf8") : qi ? e=>qi.decode(bn(e)) : e=>gn(yn(e))
          , xn = e=>nn(e.replace(/[-_]/g, (e=>"-" == e ? "+" : "/")))
          , _n = e=>kn(xn(e))
          , En = e=>({
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        })
          , Sn = function() {
            const e = (e,t)=>Object.defineProperty(String.prototype, e, En(t));
            e("fromBase64", (function() {
                return _n(this)
            }
            )),
            e("toBase64", (function(e) {
                return hn(this, e)
            }
            )),
            e("toBase64URI", (function() {
                return hn(this, !0)
            }
            )),
            e("toBase64URL", (function() {
                return hn(this, !0)
            }
            )),
            e("toUint8Array", (function() {
                return wn(this)
            }
            ))
        }
          , Tn = function() {
            const e = (e,t)=>Object.defineProperty(Uint8Array.prototype, e, En(t));
            e("toBase64", (function(e) {
                return on(this, e)
            }
            )),
            e("toBase64URI", (function() {
                return on(this, !0)
            }
            )),
            e("toBase64URL", (function() {
                return on(this, !0)
            }
            ))
        }
          , Cn = {
            version: Vi,
            VERSION: Ki,
            atob: yn,
            atobPolyfill: vn,
            btoa: sn,
            btoaPolyfill: an,
            fromBase64: _n,
            toBase64: hn,
            encode: hn,
            encodeURI: fn,
            encodeURL: fn,
            utob: cn,
            btou: gn,
            decode: _n,
            isValid: e=>{
                if ("string" != typeof e)
                    return !1;
                const t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
                return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t)
            }
            ,
            fromUint8Array: on,
            toUint8Array: wn,
            extendString: Sn,
            extendUint8Array: Tn,
            extendBuiltins: ()=>{
                Sn(),
                Tn()
            }
        };
        class jn {
            constructor(e) {
                this.heightReceivedForTheFirstTime = !0,
                this.previousHeight = 0,
                this.linkToOpenOnClose = null,
                this.surveyCloseCallback = ()=>{}
                ,
                this.config = e,
                this.iframeElement = null,
                this.widgetWrapper = null,
                this.iframeWrapper = null,
                this.closeButton = null
            }
            initialize() {
                try {
                    if (JSON.parse(localStorage.getItem("featurebaseRespondedSurveys") || "[]").includes(this.config.survey._id))
                        return
                } catch (e) {}
                this.setupListeners(),
                this.setupWidget()
            }
            closeWidget(e="dismiss") {
                if (this.widgetWrapper) {
                    if ("dismiss" === e) {
                        const e = "production" === ht() ? `https://${this.config.context.organization}.featurebase.app/api/v1/organization/advancedSurvey/s` : `http://${this.config.context.organization}.localhost:3000/api/v1/organization/advancedSurvey/s`;
                        fetch(e, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                surveyId: this.config.survey._id,
                                type: "dismiss",
                                jwt: this.config.context.jwtToken
                            })
                        })
                    }
                    try {
                        const e = JSON.parse(localStorage.getItem("featurebaseRespondedSurveys") || "[]");
                        e.push(this.config.survey._id),
                        localStorage.setItem("featurebaseRespondedSurveys", JSON.stringify(e))
                    } catch (e) {}
                    this.linkToOpenOnClose && window.open(this.linkToOpenOnClose, "_self"),
                    this.widgetWrapper.style.opacity = "0",
                    setTimeout((()=>{
                        var e;
                        return null === (e = this.widgetWrapper) || void 0 === e ? void 0 : e.remove()
                    }
                    ), 1e3),
                    this.surveyCloseCallback && this.surveyCloseCallback()
                }
            }
            setupWidget() {
                if (document.getElementById("fb-survey-widget-iframe"))
                    return void console.warn("[Featurebase SDK] An instance of survey widget already exists.");
                this.widgetWrapper = document.createElement("fbdiv"),
                this.widgetWrapper.id = "fb-survey-widget-wrapper",
                this.widgetWrapper.classList.add("fb-survey-widget-wrapper"),
                this.widgetWrapper.style.visibility = "hidden",
                this.iframeWrapper = document.createElement("fbdiv"),
                this.iframeWrapper.id = "fb-survey-widget-iframe-wrapper",
                this.iframeWrapper.classList.add("fb-survey-widget-iframe-wrapper"),
                this.closeButton = document.createElement("fbdiv"),
                this.closeButton.id = "fb-survey-widget-close",
                this.closeButton.classList.add("fb-survey-widget-close"),
                this.closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>',
                this.closeButton.addEventListener("click", (()=>this.closeWidget())),
                this.iframeElement = document.createElement("iframe"),
                this.iframeElement.frameBorder = "0";
                const e = "production" === ht() ? new URL(`https://${this.config.context.organization}.featurebase.app/${this.config.context.locale}/widget/surveySSR`) : new URL(`http://${this.config.context.organization}.localhost:3000/${this.config.context.locale}/widget/surveySSR`);
                this.config.context.jwtToken && e.searchParams.append("jwt", this.config.context.jwtToken),
                this.config.context.theme && (e.searchParams.append("theme", this.config.context.theme),
                document.documentElement.style.setProperty("--featurebase-survey-widget-close-btn-color", "light" === this.config.context.theme ? "black" : "white")),
                "bottom-left" === this.config.context.placement && (document.documentElement.style.setProperty("--featurebase-survey-widget-wrapper-right", "auto"),
                document.documentElement.style.setProperty("--featurebase-survey-widget-wrapper-left", "var(--featurebase-survey-widget-horizontal-padding)"));
                const t = Cn.encode(JSON.stringify(this.config.survey));
                e.searchParams.append("surveyData", t),
                this.iframeElement.src = e.toString(),
                this.iframeElement.id = "fb-survey-widget-iframe",
                this.iframeElement.classList.add("fb-survey-widget-iframe"),
                this.iframeWrapper.appendChild(this.iframeElement),
                this.iframeWrapper.appendChild(this.closeButton),
                this.widgetWrapper.appendChild(this.iframeWrapper),
                document.body.appendChild(this.widgetWrapper)
            }
            handleIframeMessage(e) {
                var t, i, n;
                if (e.preventDefault(),
                e.data && "FeaturebaseWidget" === e.data.target)
                    switch (e.data.data.action) {
                    case "menuHeightChangedSurvey":
                        if (this.iframeElement) {
                            if (this.heightReceivedForTheFirstTime && this.widgetWrapper && e.data.data.data > 0) {
                                this.widgetWrapper.style.visibility = "visible",
                                this.widgetWrapper.style.opacity = "1",
                                this.heightReceivedForTheFirstTime = !1,
                                document.documentElement.style.setProperty("--fb-survey-iframe-primary-color", null === (t = e.data.data) || void 0 === t ? void 0 : t.primary),
                                document.documentElement.style.setProperty("--fb-survey-iframe-foreground-color", null === (i = e.data.data) || void 0 === i ? void 0 : i.foreground),
                                document.documentElement.style.setProperty("--fb-survey-iframe-border-color", null === (n = e.data.data) || void 0 === n ? void 0 : n.border);
                                let a = this.config.context.theme;
                                a || (a = "custom" === e.data.data.theme ? "dark" : "client" === e.data.data.theme ? "light" : e.data.data.theme),
                                this.iframeElement.style.boxShadow = "dark" === a ? " 0 25px 25px rgba(0, 0, 0, 0.3)" : "0px 17px 17px rgba(0, 0, 0, 0.1)",
                                this.iframeElement.style.border = "dark" === a ? "1px solid rgba(var(--fb-survey-iframe-primary-color), 0.5)" : "1px solid #DEE1EA"
                            }
                            0 !== this.previousHeight && this.previousHeight !== e.data.data.data && (this.iframeElement.style.transition = "height 0.95s ease, min-height 0.95s ease, opacity 0.2s ease"),
                            this.iframeElement.style.height = `${e.data.data.data}px`,
                            this.iframeElement.style.minHeight = `${e.data.data.data}px`,
                            this.previousHeight = e.data.data.data
                        }
                        break;
                    case "closeSurveyWidget":
                        this.closeWidget(e.data.data.data);
                        break;
                    case "openLinkOnClose":
                        if (e.data.data.data)
                            try {
                                const t = new URL(e.data.data.data);
                                if ("http:" !== t.protocol && "https:" !== t.protocol)
                                    throw new Error("Invalid URL");
                                this.linkToOpenOnClose = t.toString()
                            } catch (t) {
                                console.error("[Featurebase SDK] Invalid URL in link open.", e.data.data.data)
                            }
                        break;
                    default:
                        return
                    }
            }
            setupListeners() {
                window.addEventListener("message", this.handleIframeMessage.bind(this), !1),
                document.addEventListener("identifyAuthChange", (e=>{
                    const t = e;
                    t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail)
                }
                ))
            }
            handleGlobalAuthChange(e) {
                var t, i;
                if ((null == e ? void 0 : e.jwtToken) && this.iframeElement && (null === (i = null === (t = this.config) || void 0 === t ? void 0 : t.context) || void 0 === i ? void 0 : i.jwtToken) !== e.jwtToken) {
                    this.config.context.jwtToken = e.jwtToken;
                    const t = new URL(this.iframeElement.src);
                    t.searchParams.set("jwt", e.jwtToken),
                    this.iframeElement.src = t.toString()
                }
            }
        }
        var In, An = function(e, t, i, n) {
            return new (i || (i = Promise))((function(a, s) {
                function r(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function o(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, o)
                }
                l((n = n.apply(e, t || [])).next())
            }
            ))
        };
        console.log("[Featurebase SDK] Initializing SDK!");
        let Pn = null
          , Ln = null
          , On = null
          , zn = null
          , Fn = null;
        const Rn = {
            state: "inactive",
            hasCssTargetedSurveys: !1,
            hasUrlTargetedSurveys: !1,
            surveys: []
        };
        let Wn = Object.assign({}, Rn);
        document.addEventListener("identifyAuthChange", (e=>An(void 0, void 0, void 0, (function*() {
            var t;
            const i = e;
            !Wn.config || "initializing" !== Wn.state && "initialized" !== Wn.state || Wn.config && i.detail && i.detail.jwtToken && (null === (t = Wn.config) || void 0 === t ? void 0 : t.jwtToken) !== i.detail.jwtToken && (Wn.config.jwtToken = i.detail.jwtToken,
            clearInterval(Hn),
            Wn.state = "initializing",
            yield Dn(Vn))
        }
        ))));
        let Nn = null;
        function Zn(e) {
            Nn || (Nn = {}),
            e.organization && (Nn.organization = e.organization),
            e.fromWidget && (null == e ? void 0 : e.jwt) && (Nn.fromWidget = !0),
            e.jwt && (Nn.jwt && (null == Nn ? void 0 : Nn.fromWidget) ? Nn.jwt && (null == e ? void 0 : e.fromWidget) && (Nn.jwt = e.jwt) : Nn.jwt = e.jwt);
            try {
                localStorage.setItem("featurebaseGlobalAuth", JSON.stringify(Nn)),
                document.dispatchEvent(new CustomEvent("identifyAuthChange",{
                    detail: Nn.jwt ? {
                        jwtToken: Nn.jwt
                    } : {}
                }))
            } catch (e) {
                console.warn("[Featurebase SDK] Error storing global auth to localStorage:", e.message)
            }
        }
        const Mn = {};
        function $n(e) {
            const t = "production" === ht() ? "https://do.featurebase.app/js/sdk.css" : "http://csphost.providerlmao.com:5500/dist/sdk.css";
            return t in Mn || (Mn[t] = new Promise((e=>{
                const i = document.querySelector(`link[href="${t}"]`);
                if (i)
                    i.sheet ? e() : i.onload = ()=>e();
                else {
                    const i = document.createElement("link");
                    i.href = t,
                    i.rel = "stylesheet",
                    i.type = "text/css",
                    i.onload = ()=>e(),
                    document.head.appendChild(i)
                }
            }
            ))),
            Mn[t].then((()=>{
                e && e()
            }
            ))
        }
        function Bn(e, t, i) {
            switch (e) {
            case "identify":
                !function(e, t) {
                    let i;
                    try {
                        i = ct.parse(e)
                    } catch (e) {
                        if (e instanceof ot.ZodError)
                            return console.error("[Featurebase SDK] Error with action: 'identify'. The Data you provided has validation errors:", e.errors),
                            void (t && t(e, null));
                        throw e
                    }
                    const n = {
                        alg: "HS256",
                        typ: "JWT"
                    }
                      , a = Cn.encodeURI(JSON.stringify(n))
                      , s = Cn.encodeURI(JSON.stringify(i))
                      , r = `${a}.${s}.sdk-identify`;
                    Zn({
                        organization: null == i ? void 0 : i.organization,
                        jwt: r
                    });
                    const o = function(e) {
                        const t = JSON.stringify(e);
                        let i = 0;
                        if (0 === t.length)
                            return i.toString();
                        for (let e = 0; e < t.length; e++) {
                            i = (i << 5) - i + t.charCodeAt(e),
                            i |= 0
                        }
                        return i.toString()
                    }(i)
                      , l = function() {
                        try {
                            const e = localStorage.getItem("featurebaseIdentifyData");
                            if (e)
                                return JSON.parse(e)
                        } catch (e) {}
                        return null
                    }();
                    if (l && l.hash === o && Date.now() - l.timestamp <= qn)
                        return console.warn(`[Featurebase SDK] Skipping 'identify' action because the same data was sent in the last ${qn / 1e3}s.`),
                        t && t(null, null);
                    Jn("https://do.featurebase.app/v1/user/identify", i).then((e=>(function(e, t) {
                        try {
                            localStorage.setItem("featurebaseIdentifyData", JSON.stringify({
                                hash: e,
                                timestamp: t
                            }))
                        } catch (e) {}
                    }(o, Date.now()),
                    e.customDomain ? Jn(`https://${e.customDomain}/api/v1/user/identify`, i) : e))).then((e=>{
                        t && t(null, e)
                    }
                    )).catch((e=>{
                        console.warn(`[Featurebase SDK] Error in 'identify' action: ${e.message}`),
                        t && t(e, null)
                    }
                    ))
                }(t, i);
                break;
            case "initialize_changelog_widget":
                $n((()=>{
                    !function(e) {
                        try {
                            if (null === On) {
                                const t = wt.parse(e);
                                !t.jwtToken && (null == Nn ? void 0 : Nn.jwt) && (t.jwtToken = Nn.jwt),
                                On = function(e) {
                                    const t = new Si(e);
                                    return t.initialize(),
                                    t
                                }(t),
                                Zn({
                                    organization: null == t ? void 0 : t.organization,
                                    fromWidget: !0,
                                    jwt: (null == t ? void 0 : t.jwtToken) ? t.jwtToken : void 0
                                })
                            }
                        } catch (e) {
                            if (!(e instanceof ot.ZodError))
                                throw e;
                            console.error("[Featurebase SDK] Error with action: 'initialize_changelog_widget'. The Data you provided has validation errors:", e.errors)
                        }
                    }(t)
                }
                ));
                break;
            case "manually_open_changelog_popup":
                On ? On.manuallyOpenChangelogPopup() : console.warn("[Featurebase SDK] Changelog not initialized. Please call 'initialize_changelog_widget' first.");
                break;
            case "unviewed_changelog_count":
                if (On)
                    return On.getUnviewedChangelogCount();
                break;
            case "initialize_feedback_widget":
                $n((()=>{
                    !function(e, t) {
                        try {
                            if (null === zn) {
                                const i = yt.parse(e);
                                if (i.email && !i.jwtToken) {
                                    const e = {
                                        alg: "HS256",
                                        typ: "JWT"
                                    }
                                      , t = Cn.encodeURI(JSON.stringify(e))
                                      , n = Cn.encodeURI(JSON.stringify({
                                        email: i.email
                                    }))
                                      , a = "sdk-feedback";
                                    i.jwtToken = `${t}.${n}.${a}`
                                } else
                                    !i.jwtToken && (null == Nn ? void 0 : Nn.jwt) && (i.jwtToken = Nn.jwt);
                                zn = function(e, t) {
                                    const i = new Ci(e,t);
                                    return i.initialize(),
                                    i
                                }(i, t),
                                Zn({
                                    organization: null == i ? void 0 : i.organization,
                                    fromWidget: !0,
                                    jwt: (null == i ? void 0 : i.jwtToken) ? i.jwtToken : void 0
                                })
                            } else
                                (null == e ? void 0 : e.theme) !== zn.getWidgetTheme() && zn.updateWidgetTheme(e.theme)
                        } catch (e) {
                            if (!(e instanceof ot.ZodError))
                                throw e;
                            console.error("[Featurebase SDK] Error with action: 'initialize_feedback_widget'. The Data you provided has validation errors:", e.errors)
                        }
                    }(t, i)
                }
                ));
                break;
            case "initialize_portal_widget":
                $n((()=>{
                    !function(e) {
                        try {
                            if (null === Ln) {
                                const t = bt.parse(e);
                                !t.jwtToken && (null == Nn ? void 0 : Nn.jwt) && (t.jwtToken = Nn.jwt),
                                Ln = mt(t),
                                Zn({
                                    jwt: null == t ? void 0 : t.jwtToken,
                                    organization: null == t ? void 0 : t.organization,
                                    fromWidget: !0
                                })
                            }
                        } catch (e) {
                            if (!(e instanceof ot.ZodError))
                                throw e;
                            console.error("[Featurebase SDK] Error with action: 'initialize_portal_widget'. The Data you provided has validation errors:", e.errors)
                        }
                    }(t)
                }
                ));
                break;
            case "initialize_widget":
                $n((()=>{
                    !function(e) {
                        try {
                            const t = bt.parse(e);
                            !t.jwtToken && (null == Nn ? void 0 : Nn.jwt) && (t.jwtToken = Nn.jwt),
                            Ln = mt(t)
                        } catch (e) {
                            if (!(e instanceof ot.ZodError))
                                throw e;
                            console.error("[Featurebase SDK] Error with action: 'initialize_widget'. The Data you provided has validation errors:", e.errors)
                        }
                    }(t)
                }
                ));
                break;
            case "initialize_survey_widget":
                $n((()=>{
                    !function(e) {
                        An(this, void 0, void 0, (function*() {
                            try {
                                if ("error" === Wn.state && (Wn = Object.assign({}, Rn)),
                                "inactive" !== Wn.state)
                                    return void console.warn("[Featurebase SDK] Survey widget is already initialized or initializing.");
                                Wn.state = "initializing";
                                const t = Di.parse(e);
                                if (t.email && !t.jwtToken) {
                                    const e = {
                                        alg: "HS256",
                                        typ: "JWT"
                                    }
                                      , i = Cn.encodeURI(JSON.stringify(e))
                                      , n = Cn.encodeURI(JSON.stringify({
                                        email: t.email
                                    }))
                                      , a = "sdk-feedback";
                                    t.jwtToken = `${i}.${n}.${a}`
                                } else
                                    !t.jwtToken && (null == Nn ? void 0 : Nn.jwt) && (t.jwtToken = Nn.jwt);
                                Wn.config = t,
                                Dn(Vn)
                            } catch (e) {
                                if (Wn.state = "error",
                                !(e instanceof ot.ZodError))
                                    throw e;
                                console.error("[Featurebase SDK] Error with action: 'initialize_survey_widget'. The Data you provided has validation errors:", e.errors)
                            }
                        }
                        ))
                    }(t)
                }
                ));
                break;
            case "open_widget":
                if (!Ln)
                    return void console.warn("[Featurebase SDK] Widget is not initialized. Please call 'initialize_widget' first.");
                Ln.openWidget();
                break;
            case "close_widget":
                null == Ln || Ln.closeWidget();
                break;
            case "toggle_widget":
                null == Ln || Ln.toggleWidget();
                break;
            case "initialize_popup":
                Pn = function(e) {
                    const t = new ut(e);
                    return t.initialize(),
                    t
                }(t);
                break;
            case "open_popup":
                !function(e) {
                    if (!e || !e.submissionId)
                        return void console.warn("[Featurebase SDK] You need to provide a submissionId to open the popup.");
                    if (!Pn)
                        return void console.warn("[Featurebase SDK] You need to initialize the popup before opening it. Use the `initialize_popup` action.");
                    Pn.activeSubmissionId = e.submissionId,
                    null == Pn || Pn.openPopup()
                }(t);
                break;
            case "close_popup":
                null == Pn || Pn.closePopup();
                break;
            case "toggle_popup":
                null == Pn || Pn.togglePopup();
                break;
            case "open_screenshot":
            case "take_screenshot":
            case "close_screenshot":
                break;
            case "embed":
                $n((()=>{
                    !function(e) {
                        try {
                            if (!document.querySelector("#featurebase-embed-board")) {
                                const t = Pi.parse(e);
                                !t.jwtToken && (null == Nn ? void 0 : Nn.jwt) && (t.jwtToken = Nn.jwt),
                                function(e) {
                                    Fn = new Ai(e),
                                    Fn.initialize()
                                }(t),
                                Zn({
                                    jwt: null == t ? void 0 : t.jwtToken,
                                    organization: null == t ? void 0 : t.organization,
                                    fromWidget: !0
                                })
                            }
                        } catch (e) {
                            if (!(e instanceof ot.ZodError))
                                throw e;
                            console.error("[Featurebase SDK] Error with action: 'embed'. The Data you provided has validation errors:", e.errors)
                        }
                    }(t)
                }
                ));
                break;
            default:
                if (!e)
                    return void console.warn("[Featurebase SDK] Action is missing.");
                console.warn(`[Featurebase SDK] Action ${e} is not supported.`)
            }
        }
        function Dn(e) {
            var t, i, n;
            return An(this, void 0, void 0, (function*() {
                try {
                    Wn.state = "initializing";
                    let a = null === (t = Wn.config) || void 0 === t ? void 0 : t.organization;
                    if (!a)
                        return void console.warn("[Featurebase SDK] Tried to check for surveys, but organization not provided.");
                    a = a.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "");
                    const s = "production" === ht() ? new URL(`https://${a}.featurebase.app/api/v1/organization/advancedSurvey/available`) : new URL(`http://${a}.localhost:3000/api/v1/organization/advancedSurvey/available`);
                    (null === (i = Wn.config) || void 0 === i ? void 0 : i.jwtToken) && s.searchParams.append("jwt", null === (n = Wn.config) || void 0 === n ? void 0 : n.jwtToken);
                    const r = yield fetch(s.toString())
                      , o = yield r.json()
                      , l = $i.safeParse(o);
                    if (!l.success)
                        return void console.warn("[Featurebase SDK] Error parsing survey response. Error:", l.error);
                    if (!l.data.success)
                        return void console.warn(`[Featurebase SDK] Error fetching surveys: ${l.data.message}`);
                    const d = l.data.surveys;
                    let c = [];
                    try {
                        c = JSON.parse(localStorage.getItem("featurebaseRespondedSurveys") || "[]")
                    } catch (e) {}
                    Wn.surveys = [],
                    Wn.hasCssTargetedSurveys = !1,
                    Wn.hasUrlTargetedSurveys = !1;
                    for (const e of d)
                        c.includes(e._id) || Wn.surveys.push(e);
                    if (e)
                        return e(null, !0)
                } catch (t) {
                    if (console.error("[Featurebase SDK] Error fetching surveys:", t.message),
                    e)
                        return e(t, null)
                }
            }
            ))
        }
        function Un(e, t) {
            return An(this, void 0, void 0, (function*() {
                !t.jwtToken && (null == Nn ? void 0 : Nn.jwt) && (t.jwtToken = Nn.jwt),
                !t.organization && (null == Nn ? void 0 : Nn.organization) && (t.organization = Nn.organization),
                "initialized" === Wn.state ? (Wn.state = "displaying",
                function(e, t) {
                    var i;
                    const n = Ui.safeParse(e);
                    if (!n.success)
                        throw new Error("[Featurebase SDK] Invalid survey widget config. Error: " + (null === (i = n.error) || void 0 === i ? void 0 : i.message));
                    const a = new jn(e);
                    a.initialize(),
                    t && (a.surveyCloseCallback = t)
                }({
                    context: t,
                    survey: e
                }, (()=>{
                    Wn.surveys = Wn.surveys.filter((t=>t._id !== e._id)),
                    Wn.state = "initialized"
                }
                ))) : console.warn("[Featurebase SDK] Survey widget is not initialized yet.")
            }
            ))
        }
        function Vn(e, t) {
            return An(this, void 0, void 0, (function*() {
                if (e)
                    return console.error("[Featurebase SDK] Error fetching surveys:", e.message),
                    void (Wn.state = "error");
                Wn.surveys && Wn.surveys.length > 0 && Wn.surveys.some((e=>e.targeting && e.targeting.url && e.targeting.url.length > 0)) && (Wn.hasUrlTargetedSurveys = !0),
                Wn.surveys && Wn.surveys.length > 0 && Wn.surveys.some((e=>e.targeting && e.targeting.css && e.targeting.css.length > 0)) && (Wn.hasCssTargetedSurveys = !0),
                Wn.state = "initialized",
                function() {
                    Hn && clearInterval(Hn);
                    Hn = setInterval((()=>{
                        var e;
                        if (!(null === (e = Wn.config) || void 0 === e ? void 0 : e.organization))
                            return;
                        if (document.querySelector(".fb-survey-widget-wrapper"))
                            return;
                        if ("initialized" !== Wn.state || Wn.surveys && 0 === Wn.surveys.length)
                            return;
                        if (Wn.hasUrlTargetedSurveys) {
                            const e = Wn.surveys.filter((e=>e.targeting && e.targeting.url && e.targeting.url.length > 0)).sort(((e,t)=>{
                                var i, n, a, s;
                                return (null === (i = e.targeting) || void 0 === i ? void 0 : i.segmentIds) && (null === (n = e.targeting) || void 0 === n ? void 0 : n.segmentIds.length) > 0 ? -1 : (null === (a = t.targeting) || void 0 === a ? void 0 : a.segmentIds) && (null === (s = t.targeting) || void 0 === s ? void 0 : s.segmentIds.length) > 0 ? 1 : 0
                            }
                            ))
                              , t = window.location.href;
                            for (const i of e)
                                if (i.targeting && i.targeting.url)
                                    for (const e of i.targeting.url) {
                                        const {value: n, matchType: a} = e
                                          , s = Kn(i).success;
                                        if ("exact" === a) {
                                            if (n.trim().toLowerCase().replace(/\/$/, "") === t.trim().toLowerCase().replace(/\/$/, "") && s)
                                                return void Un(i, Wn.config)
                                        } else if ("contains" === a && s) {
                                            if (t.includes(n))
                                                return void Un(i, Wn.config)
                                        } else if ("regex" === a && s)
                                            try {
                                                if (new RegExp(n).test(t))
                                                    return void Un(i, Wn.config)
                                            } catch (e) {
                                                console.error(`[Featurebase SDK] Could not show survey "${i.title}". Invalid survey targeting regex provided:`, e),
                                                Wn.surveys = Wn.surveys.filter((e=>e._id !== i._id))
                                            }
                                    }
                        }
                        if (Wn.hasCssTargetedSurveys) {
                            const e = Wn.surveys.filter((e=>e.targeting && e.targeting.css && e.targeting.css.length > 0)).sort(((e,t)=>{
                                var i, n, a, s;
                                return (null === (i = e.targeting) || void 0 === i ? void 0 : i.segmentIds) && (null === (n = e.targeting) || void 0 === n ? void 0 : n.segmentIds.length) > 0 ? -1 : (null === (a = t.targeting) || void 0 === a ? void 0 : a.segmentIds) && (null === (s = t.targeting) || void 0 === s ? void 0 : s.segmentIds.length) > 0 ? 1 : 0
                            }
                            ));
                            if (e && e.length > 0)
                                for (const t of e) {
                                    if (!t.targeting || !t.targeting.css || 0 === t.targeting.css.length)
                                        continue;
                                    if (!Kn(t).success)
                                        continue;
                                    const e = t.targeting.css.map((e=>e.value));
                                    for (const i of e)
                                        try {
                                            if (document.querySelectorAll(i).length > 0)
                                                return void Un(t, Wn.config)
                                        } catch (e) {
                                            console.error(`[Featurebase SDK] Could not show survey "${t.title}". Invalid survey targeting CSS selector provided:`, e),
                                            Wn.surveys = Wn.surveys.filter((e=>e._id !== t._id))
                                        }
                                }
                        }
                        const t = Wn.surveys.filter((e=>!(e.targeting && e.targeting.css && e.targeting.css.length > 0) && !(e.targeting && e.targeting.url && e.targeting.url.length > 0))).sort(((e,t)=>{
                            var i, n, a, s;
                            return (null === (i = e.targeting) || void 0 === i ? void 0 : i.segmentIds) && (null === (n = e.targeting) || void 0 === n ? void 0 : n.segmentIds.length) > 0 ? -1 : (null === (a = t.targeting) || void 0 === a ? void 0 : a.segmentIds) && (null === (s = t.targeting) || void 0 === s ? void 0 : s.segmentIds.length) > 0 ? 1 : 0
                        }
                        ));
                        for (const e of t) {
                            if (Kn(e).success)
                                return void Un(e, Wn.config)
                        }
                    }
                    ), 5e3)
                }()
            }
            ))
        }
        const Kn = e=>{
            var t, i, n;
            if (!(null === (t = null == Wn ? void 0 : Wn.config) || void 0 === t ? void 0 : t.organization))
                return {
                    success: !1,
                    error: "Organization not provided"
                };
            if (!e.isActive)
                return {
                    success: !1,
                    error: "Survey is not active"
                };
            if ((null === (i = e.targeting) || void 0 === i ? void 0 : i.loginRequired) && !(null === (n = null == Wn ? void 0 : Wn.config) || void 0 === n ? void 0 : n.jwtToken) && (null == Nn ? void 0 : Nn.jwt))
                return {
                    success: !1,
                    error: "Login required"
                };
            let a = [];
            try {
                a = JSON.parse(localStorage.getItem("featurebaseRespondedSurveys") || "[]")
            } catch (e) {}
            return a.includes(e._id) ? {
                success: !1,
                error: "Survey already responded"
            } : {
                success: !0
            }
        }
        ;
        let Hn = null;
        const qn = 3e4;
        function Jn(e, t) {
            return fetch(e, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t),
                credentials: "include"
            }).then((e=>{
                if (!e.ok)
                    throw new Error(`HTTP error! status: ${e.status}`);
                return e.json()
            }
            )).then((e=>{
                if (!e.success) {
                    const t = e.message || "Unknown error";
                    throw new Error(t)
                }
                return e.loggedInAsAdmin ? console.warn("[Featurebase SDK] Authentication skipped: User is currently logged in with admin privileges. Please log out of the admin account to authenticate as a regular user.") : e.adminOfOtherOrg && console.warn("[Featurebase SDK] Authentication skipped: For security, we don't auto-login users with admin roles in any org. You can test the auto-login feature by using the data of a normal user."),
                e
            }
            ))
        }
        const Xn = (null === (In = window.Featurebase) || void 0 === In ? void 0 : In.q) || [];
        for (let e = 0; e < Xn.length; e++) {
            const t = Xn[e];
            Bn.apply(null, t)
        }
        const Gn = window;
        Gn.Featurebase || (Gn.Featurebase = {}),
        Gn.Featurebase.q = [],
        Gn.Featurebase = Bn,
        function() {
            try {
                const e = localStorage.getItem("featurebaseGlobalAuth");
                if (e) {
                    const t = JSON.parse(e);
                    delete t.fromWidget,
                    Nn = t,
                    Nn && document.dispatchEvent(new CustomEvent("identifyAuthChange",{
                        detail: Nn.jwt ? {
                            jwtToken: Nn.jwt
                        } : {}
                    }))
                }
            } catch (e) {
                console.warn("[Featurebase SDK] Error accessing localStorage for global auth:", e.message)
            }
        }(),
        document.addEventListener("click", (function(e) {
            if (!e || !e.target)
                return;
            const t = document.querySelectorAll("[data-featurebase-link]");
            if (t && 0 !== t.length)
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (e.target === t[i] || n.contains(e.target)) {
                        e.preventDefault();
                        const t = n.getAttribute("href");
                        if (!t)
                            return;
                        const i = new URL(t.startsWith("http") ? t : `https://${t}`)
                          , a = new URLSearchParams(i.search);
                        return (null == Nn ? void 0 : Nn.jwt) && a.append("jwt", Nn.jwt),
                        i.search = a.toString(),
                        "_blank" === n.getAttribute("target") ? void window.open(i.toString(), "_blank") : void (window.location.href = i.toString())
                    }
                }
        }
        ), !0)
    }
    )(),
    s
}
)()));
