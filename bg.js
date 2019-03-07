var needShowWarming = !1;
!function() {
    chrome.proxy.settings.set({
        value: {
            mode: "system"
        },
        scope: "regular"
    },
    function() {
        console.info("- proxy system! - ")
    })
} ();
var Zepto = function() {
    function t(t) {
        return null == t ? String(t) : V[J.call(t)] || "object"
    }
    function e(e) {
        return "function" == t(e)
    }
    function n(t) {
        return null != t && t == t.window
    }
    function r(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function o(e) {
        return "object" == t(e)
    }
    function i(t) {
        return o(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function a(t) {
        return "number" == typeof t.length
    }
    function u(t) {
        return C.call(t,
        function(t) {
            return null != t
        })
    }
    function c(t) {
        return t.length > 0 ? E.fn.concat.apply([], t) : t
    }
    function s(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function l(t) {
        return t in k ? k[t] : k[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function f(t, e) {
        return "number" != typeof e || R[s(t)] ? e: e + "px"
    }
    function p(t) {
        var e, n;
        return D[t] || (e = _.createElement(t), _.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), D[t] = n),
        D[t]
    }
    function h(t) {
        return "children" in t ? A.call(t.children) : E.map(t.childNodes,
        function(t) {
            return 1 == t.nodeType ? t: void 0
        })
    }
    function d(t, e, n) {
        for (S in e) n && (i(e[S]) || Y(e[S])) ? (i(e[S]) && !i(t[S]) && (t[S] = {}), Y(e[S]) && !Y(t[S]) && (t[S] = []), d(t[S], e[S], n)) : e[S] !== x && (t[S] = e[S])
    }
    function g(t, e) {
        return null == e ? E(t) : E(t).filter(e)
    }
    function v(t, n, r, o) {
        return e(n) ? n.call(t, r, o) : n
    }
    function m(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function y(t, e) {
        var n = t.className || "",
        r = n && n.baseVal !== x;
        return e === x ? r ? n.baseVal: n: void(r ? n.baseVal = e: t.className = e)
    }
    function w(t) {
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null: +t + "" == t ? +t: /^[\[\{]/.test(t) ? E.parseJSON(t) : t) : t
        } catch(e) {
            return t
        }
    }
    function b(t, e) {
        e(t);
        for (var n = 0,
        r = t.childNodes.length; r > n; n++) b(t.childNodes[n], e)
    }
    var x, S, E, T, O, j, N = [],
    A = N.slice,
    C = N.filter,
    _ = window.document,
    D = {},
    k = {},
    R = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    P = /^\s*<(\w+|!)[^>]*>/,
    I = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    L = /^(?:body|html)$/i,
    B = /([A-Z])/g,
    U = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    M = ["after", "prepend", "before", "append"],
    G = _.createElement("table"),
    q = _.createElement("tr"),
    Z = {
        tr: _.createElement("tbody"),
        tbody: G,
        thead: G,
        tfoot: G,
        td: q,
        th: q,
        "*": _.createElement("div")
    },
    $ = /complete|loaded|interactive/,
    z = /^[\w-]*$/,
    V = {},
    J = V.toString,
    W = {},
    X = _.createElement("div"),
    H = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    Y = Array.isArray ||
    function(t) {
        return t instanceof Array
    };
    return W.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return ! 1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var r, o = t.parentNode,
        i = !o;
        return i && (o = X).appendChild(t),
        r = ~W.qsa(o, e).indexOf(t),
        i && X.removeChild(t),
        r
    },
    O = function(t) {
        return t.replace(/-+(.)?/g,
        function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    },
    j = function(t) {
        return C.call(t,
        function(e, n) {
            return t.indexOf(e) == n
        })
    },
    W.fragment = function(t, e, n) {
        var r, o, a;
        return I.test(t) && (r = E(_.createElement(RegExp.$1))),
        r || (t.replace && (t = t.replace(F, "<$1></$2>")), e === x && (e = P.test(t) && RegExp.$1), e in Z || (e = "*"), a = Z[e], a.innerHTML = "" + t, r = E.each(A.call(a.childNodes),
        function() {
            a.removeChild(this)
        })),
        i(n) && (o = E(r), E.each(n,
        function(t, e) {
            U.indexOf(t) > -1 ? o[t](e) : o.attr(t, e)
        })),
        r
    },
    W.Z = function(t, e) {
        return t = t || [],
        t.__proto__ = E.fn,
        t.selector = e || "",
        t
    },
    W.isZ = function(t) {
        return t instanceof W.Z
    },
    W.init = function(t, n) {
        var r;
        if (!t) return W.Z();
        if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && P.test(t)) r = W.fragment(t, RegExp.$1, n),
        t = null;
        else {
            if (n !== x) return E(n).find(t);
            r = W.qsa(_, t)
        } else {
            if (e(t)) return E(_).ready(t);
            if (W.isZ(t)) return t;
            if (Y(t)) r = u(t);
            else if (o(t)) r = [t],
            t = null;
            else if (P.test(t)) r = W.fragment(t.trim(), RegExp.$1, n),
            t = null;
            else {
                if (n !== x) return E(n).find(t);
                r = W.qsa(_, t)
            }
        }
        return W.Z(r, t)
    },
    E = function(t, e) {
        return W.init(t, e)
    },
    E.extend = function(t) {
        var e, n = A.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()),
        n.forEach(function(n) {
            d(t, n, e)
        }),
        t
    },
    W.qsa = function(t, e) {
        var n, o = "#" == e[0],
        i = !o && "." == e[0],
        a = o || i ? e.slice(1) : e,
        u = z.test(a);
        return r(t) && u && o ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : A.call(u && !o ? i ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    },
    E.contains = _.documentElement.contains ?
    function(t, e) {
        return t !== e && t.contains(e)
    }: function(t, e) {
        for (; e && (e = e.parentNode);) if (e === t) return ! 0;
        return ! 1
    },
    E.type = t,
    E.isFunction = e,
    E.isWindow = n,
    E.isArray = Y,
    E.isPlainObject = i,
    E.isEmptyObject = function(t) {
        var e;
        for (e in t) return ! 1;
        return ! 0
    },
    E.inArray = function(t, e, n) {
        return N.indexOf.call(e, t, n)
    },
    E.camelCase = O,
    E.trim = function(t) {
        return null == t ? "": String.prototype.trim.call(t)
    },
    E.uuid = 0,
    E.support = {},
    E.expr = {},
    E.map = function(t, e) {
        var n, r, o, i = [];
        if (a(t)) for (r = 0; r < t.length; r++) n = e(t[r], r),
        null != n && i.push(n);
        else for (o in t) n = e(t[o], o),
        null != n && i.push(n);
        return c(i)
    },
    E.each = function(t, e) {
        var n, r;
        if (a(t)) {
            for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
        } else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t;
        return t
    },
    E.grep = function(t, e) {
        return C.call(t, e)
    },
    window.JSON && (E.parseJSON = JSON.parse),
    E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        V["[object " + e + "]"] = e.toLowerCase()
    }),
    E.fn = {
        forEach: N.forEach,
        reduce: N.reduce,
        push: N.push,
        sort: N.sort,
        indexOf: N.indexOf,
        concat: N.concat,
        map: function(t) {
            return E(E.map(this,
            function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return E(A.apply(this, arguments))
        },
        ready: function(t) {
            return $.test(_.readyState) && _.body ? t(E) : _.addEventListener("DOMContentLoaded",
            function() {
                t(E)
            },
            !1),
            this
        },
        get: function(t) {
            return t === x ? A.call(this) : this[t >= 0 ? t: t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return N.every.call(this,
            function(e, n) {
                return t.call(e, n, e) !== !1
            }),
            this
        },
        filter: function(t) {
            return e(t) ? this.not(this.not(t)) : E(C.call(this,
            function(e) {
                return W.matches(e, t)
            }))
        },
        add: function(t, e) {
            return E(j(this.concat(E(t, e))))
        },
        is: function(t) {
            return this.length > 0 && W.matches(this[0], t)
        },
        not: function(t) {
            var n = [];
            if (e(t) && t.call !== x) this.each(function(e) {
                t.call(this, e) || n.push(this)
            });
            else {
                var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? A.call(t) : E(t);
                this.forEach(function(t) {
                    r.indexOf(t) < 0 && n.push(t)
                })
            }
            return E(n)
        },
        has: function(t) {
            return this.filter(function() {
                return o(t) ? E.contains(this, t) : E(this).find(t).size()
            })
        },
        eq: function(t) {
            return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !o(t) ? t: E(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !o(t) ? t: E(t)
        },
        find: function(t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? E(t).filter(function() {
                var t = this;
                return N.some.call(n,
                function(e) {
                    return E.contains(e, t)
                })
            }) : 1 == this.length ? E(W.qsa(this[0], t)) : this.map(function() {
                return W.qsa(this, t)
            }) : E()
        },
        closest: function(t, e) {
            var n = this[0],
            o = !1;
            for ("object" == typeof t && (o = E(t)); n && !(o ? o.indexOf(n) >= 0 : W.matches(n, t));) n = n !== e && !r(n) && n.parentNode;
            return E(n)
        },
        parents: function(t) {
            for (var e = [], n = this; n.length > 0;) n = E.map(n,
            function(t) {
                return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return g(e, t)
        },
        parent: function(t) {
            return g(j(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return g(this.map(function() {
                return h(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return A.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return g(this.map(function(t, e) {
                return C.call(h(e.parentNode),
                function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return E.map(this,
            function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var n = e(t);
            if (this[0] && !n) var r = E(t).get(0),
            o = r.parentNode || this.length > 1;
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : o ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                E(this[0]).before(t = E(t));
                for (var e; (e = t.children()).length;) t = e.first();
                E(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var n = e(t);
            return this.each(function(e) {
                var r = E(this),
                o = r.contents(),
                i = n ? t.call(this, e) : t;
                o.length ? o.wrapAll(i) : r.append(i)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                E(this).replaceWith(E(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var e = E(this); (t === x ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function(t) {
            return E(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return E(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = this.innerHTML;
                E(this).empty().append(v(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML: null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = v(this, t, e, this.textContent);
                this.textContent = null == n ? "": "" + n
            }) : 0 in this ? this[0].textContent: null
        },
        attr: function(t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                if (1 === this.nodeType) if (o(t)) for (S in t) m(this, S, t[S]);
                else m(this, t, v(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n: x
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    m(this, t)
                },
                this)
            })
        },
        prop: function(t, e) {
            return t = H[t] || t,
            1 in arguments ? this.each(function(n) {
                this[t] = v(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(t, e) {
            var n = "data-" + t.replace(B, "-$1").toLowerCase(),
            r = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== r ? w(r) : x
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = v(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? E(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t) return this.each(function(e) {
                var n = E(this),
                r = v(this, t, e, n.offset()),
                o = n.offsetParent().offset(),
                i = {
                    top: r.top - o.top,
                    left: r.left - o.left
                };
                "static" == n.css("position") && (i.position = "relative"),
                n.css(i)
            });
            if (!this.length) return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(e, n) {
            if (arguments.length < 2) {
                var r, o = this[0];
                if (!o) return;
                if (r = getComputedStyle(o, ""), "string" == typeof e) return o.style[O(e)] || r.getPropertyValue(e);
                if (Y(e)) {
                    var i = {};
                    return E.each(e,
                    function(t, e) {
                        i[e] = o.style[O(e)] || r.getPropertyValue(e)
                    }),
                    i
                }
            }
            var a = "";
            if ("string" == t(e)) n || 0 === n ? a = s(e) + ":" + f(e, n) : this.each(function() {
                this.style.removeProperty(s(e))
            });
            else for (S in e) e[S] || 0 === e[S] ? a += s(S) + ":" + f(S, e[S]) + ";": this.each(function() {
                this.style.removeProperty(s(S))
            });
            return this.each(function() {
                this.style.cssText += ";" + a
            })
        },
        index: function(t) {
            return t ? this.indexOf(E(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return t ? N.some.call(this,
            function(t) {
                return this.test(y(t))
            },
            l(t)) : !1
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className" in this) {
                    T = [];
                    var n = y(this),
                    r = v(this, t, e, n);
                    r.split(/\s+/g).forEach(function(t) {
                        E(this).hasClass(t) || T.push(t)
                    },
                    this),
                    T.length && y(this, n + (n ? " ": "") + T.join(" "))
                }
            }) : this
        },
        removeClass: function(t) {
            return this.each(function(e) {
                if ("className" in this) {
                    if (t === x) return y(this, "");
                    T = y(this),
                    v(this, t, e, T).split(/\s+/g).forEach(function(t) {
                        T = T.replace(l(t), " ")
                    }),
                    y(this, T.trim())
                }
            })
        },
        toggleClass: function(t, e) {
            return t ? this.each(function(n) {
                var r = E(this),
                o = v(this, t, n, y(this));
                o.split(/\s+/g).forEach(function(t) { (e === x ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
                })
            }) : this
        },
        scrollTop: function(t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === x ? e ? this[0].scrollTop: this[0].pageYOffset: this.each(e ?
                function() {
                    this.scrollTop = t
                }: function() {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function(t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === x ? e ? this[0].scrollLeft: this[0].pageXOffset: this.each(e ?
                function() {
                    this.scrollLeft = t
                }: function() {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                e = this.offsetParent(),
                n = this.offset(),
                r = L.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: e.offset();
                return n.top -= parseFloat(E(t).css("margin-top")) || 0,
                n.left -= parseFloat(E(t).css("margin-left")) || 0,
                r.top += parseFloat(E(e[0]).css("border-top-width")) || 0,
                r.left += parseFloat(E(e[0]).css("border-left-width")) || 0,
                {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || _.body; t && !L.test(t.nodeName) && "static" == E(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    },
    E.fn.detach = E.fn.remove,
    ["width", "height"].forEach(function(t) {
        var e = t.replace(/./,
        function(t) {
            return t[0].toUpperCase()
        });
        E.fn[t] = function(o) {
            var i, a = this[0];
            return o === x ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (i = this.offset()) && i[t] : this.each(function(e) {
                a = E(this),
                a.css(t, v(this, o, e, a[t]()))
            })
        }
    }),
    M.forEach(function(e, n) {
        var r = n % 2;
        E.fn[e] = function() {
            var e, o, i = E.map(arguments,
            function(n) {
                return e = t(n),
                "object" == e || "array" == e || null == n ? n: W.fragment(n)
            }),
            a = this.length > 1;
            return i.length < 1 ? this: this.each(function(t, e) {
                o = r ? e: e.parentNode,
                e = 0 == n ? e.nextSibling: 1 == n ? e.firstChild: 2 == n ? e: null;
                var u = E.contains(_.documentElement, o);
                i.forEach(function(t) {
                    if (a) t = t.cloneNode(!0);
                    else if (!o) return E(t).remove();
                    o.insertBefore(t, e),
                    u && b(t,
                    function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        },
        E.fn[r ? e + "To": "insert" + (n ? "Before": "After")] = function(t) {
            return E(t)[e](this),
            this
        }
    }),
    W.Z.prototype = E.fn,
    W.uniq = j,
    W.deserializeValue = w,
    E.zepto = W,
    E
} ();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(t) {
    function e(t) {
        return t._zid || (t._zid = p++)
    }
    function n(t, n, i, a) {
        if (n = r(n), n.ns) var u = o(n.ns);
        return (v[e(t)] || []).filter(function(t) {
            return t && (!n.e || t.e == n.e) && (!n.ns || u.test(t.ns)) && (!i || e(t.fn) === e(i)) && (!a || t.sel == a)
        })
    }
    function r(t) {
        var e = ("" + t).split(".");
        return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
        }
    }
    function o(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function i(t, e) {
        return t.del && !y && t.e in w || !!e
    }
    function a(t) {
        return b[t] || y && w[t] || t
    }
    function u(n, o, u, c, l, p, h) {
        var d = e(n),
        g = v[d] || (v[d] = []);
        o.split(/\s/).forEach(function(e) {
            if ("ready" == e) return t(document).ready(u);
            var o = r(e);
            o.fn = u,
            o.sel = l,
            o.e in b && (u = function(e) {
                var n = e.relatedTarget;
                return ! n || n !== this && !t.contains(this, n) ? o.fn.apply(this, arguments) : void 0
            }),
            o.del = p;
            var d = p || u;
            o.proxy = function(t) {
                if (t = s(t), !t.isImmediatePropagationStopped()) {
                    t.data = c;
                    var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                    return e === !1 && (t.preventDefault(), t.stopPropagation()),
                    e
                }
            },
            o.i = g.length,
            g.push(o),
            "addEventListener" in n && n.addEventListener(a(o.e), o.proxy, i(o, h))
        })
    }
    function c(t, r, o, u, c) {
        var s = e(t); (r || "").split(/\s/).forEach(function(e) {
            n(t, e, o, u).forEach(function(e) {
                delete v[s][e.i],
                "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, i(e, c))
            })
        })
    }
    function s(e, n) {
        return ! n && e.isDefaultPrevented || (n || (n = e), t.each(T,
        function(t, r) {
            var o = n[t];
            e[t] = function() {
                return this[r] = x,
                o && o.apply(n, arguments)
            },
            e[r] = S
        }), (n.defaultPrevented !== f ? n.defaultPrevented: "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)),
        e
    }
    function l(t) {
        var e, n = {
            originalEvent: t
        };
        for (e in t) E.test(e) || t[e] === f || (n[e] = t[e]);
        return s(n, t)
    }
    var f, p = 1,
    h = Array.prototype.slice,
    d = t.isFunction,
    g = function(t) {
        return "string" == typeof t
    },
    v = {},
    m = {},
    y = "onfocusin" in window,
    w = {
        focus: "focusin",
        blur: "focusout"
    },
    b = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    m.click = m.mousedown = m.mouseup = m.mousemove = "MouseEvents",
    t.event = {
        add: u,
        remove: c
    },
    t.proxy = function(n, r) {
        var o = 2 in arguments && h.call(arguments, 2);
        if (d(n)) {
            var i = function() {
                return n.apply(r, o ? o.concat(h.call(arguments)) : arguments)
            };
            return i._zid = e(n),
            i
        }
        if (g(r)) return o ? (o.unshift(n[r], n), t.proxy.apply(null, o)) : t.proxy(n[r], n);
        throw new TypeError("expected function")
    },
    t.fn.bind = function(t, e, n) {
        return this.on(t, e, n)
    },
    t.fn.unbind = function(t, e) {
        return this.off(t, e)
    },
    t.fn.one = function(t, e, n, r) {
        return this.on(t, e, n, r, 1)
    };
    var x = function() {
        return ! 0
    },
    S = function() {
        return ! 1
    },
    E = /^([A-Z]|returnValue$|layer[XY]$)/,
    T = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function(t, e, n) {
        return this.on(e, t, n)
    },
    t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n)
    },
    t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n),
        this
    },
    t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n),
        this
    },
    t.fn.on = function(e, n, r, o, i) {
        var a, s, p = this;
        return e && !g(e) ? (t.each(e,
        function(t, e) {
            p.on(t, n, r, e, i)
        }), p) : (g(n) || d(o) || o === !1 || (o = r, r = n, n = f), (d(r) || r === !1) && (o = r, r = f), o === !1 && (o = S), p.each(function(f, p) {
            i && (a = function(t) {
                return c(p, t.type, o),
                o.apply(this, arguments)
            }),
            n && (s = function(e) {
                var r, i = t(e.target).closest(n, p).get(0);
                return i && i !== p ? (r = t.extend(l(e), {
                    currentTarget: i,
                    liveFired: p
                }), (a || o).apply(i, [r].concat(h.call(arguments, 1)))) : void 0
            }),
            u(p, e, o, r, n, s || a)
        }))
    },
    t.fn.off = function(e, n, r) {
        var o = this;
        return e && !g(e) ? (t.each(e,
        function(t, e) {
            o.off(t, n, e)
        }), o) : (g(n) || d(r) || r === !1 || (r = n, n = f), r === !1 && (r = S), o.each(function() {
            c(this, e, r, n)
        }))
    },
    t.fn.trigger = function(e, n) {
        return e = g(e) || t.isPlainObject(e) ? t.Event(e) : s(e),
        e._args = n,
        this.each(function() {
            e.type in w && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    },
    t.fn.triggerHandler = function(e, r) {
        var o, i;
        return this.each(function(a, u) {
            o = l(g(e) ? t.Event(e) : e),
            o._args = r,
            o.target = u,
            t.each(n(u, e.type || e),
            function(t, e) {
                return i = e.proxy(o),
                o.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        i
    },
    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
        t.fn[e] = function(t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
        }
    }),
    t.Event = function(t, e) {
        g(t) || (e = t, t = e.type);
        var n = document.createEvent(m[t] || "Events"),
        r = !0;
        if (e) for (var o in e)"bubbles" == o ? r = !!e[o] : n[o] = e[o];
        return n.initEvent(t, r, !0),
        s(n)
    }
} (Zepto),
function(t) {
    function e(e, n, r) {
        var o = t.Event(n);
        return t(e).trigger(o, r),
        !o.isDefaultPrevented()
    }
    function n(t, n, r, o) {
        return t.global ? e(n || y, r, o) : void 0
    }
    function r(e) {
        e.global && 0 === t.active++&&n(e, null, "ajaxStart")
    }
    function o(e) {
        e.global && !--t.active && n(e, null, "ajaxStop")
    }
    function i(t, e) {
        var r = e.context;
        return e.beforeSend.call(r, t, e) === !1 || n(e, r, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void n(e, r, "ajaxSend", [t, e])
    }
    function a(t, e, r, o) {
        var i = r.context,
        a = "success";
        r.success.call(i, t, a, e),
        o && o.resolveWith(i, [t, a, e]),
        n(r, i, "ajaxSuccess", [e, r, t]),
        c(a, e, r)
    }
    function u(t, e, r, o, i) {
        var a = o.context;
        o.error.call(a, r, e, t),
        i && i.rejectWith(a, [r, e, t]),
        n(o, a, "ajaxError", [r, o, t || e]),
        c(e, r, o)
    }
    function c(t, e, r) {
        var i = r.context;
        r.complete.call(i, e, t),
        n(r, i, "ajaxComplete", [e, r]),
        o(r)
    }
    function s() {}
    function l(t) {
        return t && (t = t.split(";", 2)[0]),
        t && (t == E ? "html": t == S ? "json": b.test(t) ? "script": x.test(t) && "xml") || "text"
    }
    function f(t, e) {
        return "" == e ? t: (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }
    function p(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
        !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
    }
    function h(e, n, r, o) {
        return t.isFunction(n) && (o = r, r = n, n = void 0),
        t.isFunction(r) || (o = r, r = void 0),
        {
            url: e,
            data: n,
            success: r,
            dataType: o
        }
    }
    function d(e, n, r, o) {
        var i, a = t.isArray(n),
        u = t.isPlainObject(n);
        t.each(n,
        function(n, c) {
            i = t.type(c),
            o && (n = r ? o: o + "[" + (u || "object" == i || "array" == i ? n: "") + "]"),
            !o && a ? e.add(c.name, c.value) : "array" == i || !r && "object" == i ? d(e, c, r, n) : e.add(n, c)
        })
    }
    var g, v, m = 0,
    y = window.document,
    w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    b = /^(?:text|application)\/javascript/i,
    x = /^(?:text|application)\/xml/i,
    S = "application/json",
    E = "text/html",
    T = /^\s*$/,
    O = y.createElement("a");
    O.href = window.location.href,
    t.active = 0,
    t.ajaxJSONP = function(e, n) {
        if (! ("type" in e)) return t.ajax(e);
        var r, o, c = e.jsonpCallback,
        s = (t.isFunction(c) ? c() : c) || "jsonp" + ++m,
        l = y.createElement("script"),
        f = window[s],
        p = function(e) {
            t(l).triggerHandler("error", e || "abort")
        },
        h = {
            abort: p
        };
        return n && n.promise(h),
        t(l).on("load error",
        function(i, c) {
            clearTimeout(o),
            t(l).off().remove(),
            "error" != i.type && r ? a(r[0], h, e, n) : u(null, c || "error", h, e, n),
            window[s] = f,
            r && t.isFunction(f) && f(r[0]),
            f = r = void 0
        }),
        i(h, e) === !1 ? (p("abort"), h) : (window[s] = function() {
            r = arguments
        },
        l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + s), y.head.appendChild(l), e.timeout > 0 && (o = setTimeout(function() {
            p("timeout")
        },
        e.timeout)), h)
    },
    t.ajaxSettings = {
        type: "GET",
        beforeSend: s,
        success: s,
        error: s,
        complete: s,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: S,
            xml: "application/xml, text/xml",
            html: E,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    t.ajax = function(e) {
        var n, o = t.extend({},
        e || {}),
        c = t.Deferred && t.Deferred();
        for (g in t.ajaxSettings) void 0 === o[g] && (o[g] = t.ajaxSettings[g]);
        r(o),
        o.crossDomain || (n = y.createElement("a"), n.href = o.url, n.href = n.href, o.crossDomain = O.protocol + "//" + O.host != n.protocol + "//" + n.host),
        o.url || (o.url = window.location.toString()),
        p(o);
        var h = o.dataType,
        d = /\?.+=\?/.test(o.url);
        if (d && (h = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != h && "jsonp" != h) || (o.url = f(o.url, "_=" + Date.now())), "jsonp" == h) return d || (o.url = f(o.url, o.jsonp ? o.jsonp + "=?": o.jsonp === !1 ? "": "callback=?")),
        t.ajaxJSONP(o, c);
        var m, w = o.accepts[h],
        b = {},
        x = function(t, e) {
            b[t.toLowerCase()] = [t, e]
        },
        S = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1: window.location.protocol,
        E = o.xhr(),
        j = E.setRequestHeader;
        if (c && c.promise(E), o.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", w || "*/*"), (w = o.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]), E.overrideMimeType && E.overrideMimeType(w)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && x("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers) for (v in o.headers) x(v, o.headers[v]);
        if (E.setRequestHeader = x, E.onreadystatechange = function() {
            if (4 == E.readyState) {
                E.onreadystatechange = s,
                clearTimeout(m);
                var e, n = !1;
                if (E.status >= 200 && E.status < 300 || 304 == E.status || 0 == E.status && "file:" == S) {
                    h = h || l(o.mimeType || E.getResponseHeader("content-type")),
                    e = E.responseText;
                    try {
                        "script" == h ? (0, eval)(e) : "xml" == h ? e = E.responseXML: "json" == h && (e = T.test(e) ? null: t.parseJSON(e))
                    } catch(r) {
                        n = r
                    }
                    n ? u(n, "parsererror", E, o, c) : a(e, E, o, c)
                } else u(E.statusText || null, E.status ? "error": "abort", E, o, c)
            }
        },
        i(E, o) === !1) return E.abort(),
        u(null, "abort", E, o, c),
        E;
        if (o.xhrFields) for (v in o.xhrFields) E[v] = o.xhrFields[v];
        var N = "async" in o ? o.async: !0;
        E.open(o.type, o.url, N, o.username, o.password);
        for (v in b) j.apply(E, b[v]);
        return o.timeout > 0 && (m = setTimeout(function() {
            E.onreadystatechange = s,
            E.abort(),
            u(null, "timeout", E, o, c)
        },
        o.timeout)),
        E.send(o.data ? o.data: null),
        E
    },
    t.get = function() {
        return t.ajax(h.apply(null, arguments))
    },
    t.post = function() {
        var e = h.apply(null, arguments);
        return e.type = "POST",
        t.ajax(e)
    },
    t.getJSON = function() {
        var e = h.apply(null, arguments);
        return e.dataType = "json",
        t.ajax(e)
    },
    t.fn.load = function(e, n, r) {
        if (!this.length) return this;
        var o, i = this,
        a = e.split(/\s/),
        u = h(e, n, r),
        c = u.success;
        return a.length > 1 && (u.url = a[0], o = a[1]),
        u.success = function(e) {
            i.html(o ? t("<div>").html(e.replace(w, "")).find(o) : e),
            c && c.apply(i, arguments)
        },
        t.ajax(u),
        this
    };
    var j = encodeURIComponent;
    t.param = function(e, n) {
        var r = [];
        return r.add = function(e, n) {
            t.isFunction(n) && (n = n()),
            null == n && (n = ""),
            this.push(j(e) + "=" + j(n))
        },
        d(r, e, n),
        r.join("&").replace(/%20/g, "+")
    }
} (Zepto),
function(t) {
    t.fn.serializeArray = function() {
        var e, n, r = [],
        o = function(t) {
            return t.forEach ? t.forEach(o) : void r.push({
                name: e,
                value: t
            })
        };
        return this[0] && t.each(this[0].elements,
        function(r, i) {
            n = i.type,
            e = i.name,
            e && "fieldset" != i.nodeName.toLowerCase() && !i.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || i.checked) && o(t(i).val())
        }),
        r
    },
    t.fn.serialize = function() {
        var t = [];
        return this.serializeArray().forEach(function(e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }),
        t.join("&")
    },
    t.fn.submit = function(e) {
        if (0 in arguments) this.bind("submit", e);
        else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n),
            n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
} (Zepto),
function(t) {
    "__proto__" in {} || t.extend(t.zepto, {
        Z: function(e, n) {
            return e = e || [],
            t.extend(e, t.fn),
            e.selector = n || "",
            e.__Z = !0,
            e
        },
        isZ: function(e) {
            return "array" === t.type(e) && "__Z" in e
        }
    });
    try {
        getComputedStyle(void 0)
    } catch(e) {
        var n = getComputedStyle;
        window.getComputedStyle = function(t) {
            try {
                return n(t)
            } catch(e) {
                return null
            }
        }
    }
} (Zepto),
define("lib/z", [],
function(t, e, n) {
    n.exports = window.Zepto
}),
function() {
    var t = this,
    e = t._,
    n = Array.prototype,
    r = Object.prototype,
    o = Function.prototype,
    i = n.push,
    a = n.slice,
    u = n.concat,
    c = r.toString,
    s = r.hasOwnProperty,
    l = Array.isArray,
    f = Object.keys,
    p = o.bind,
    h = function(t) {
        return t instanceof h ? t: this instanceof h ? void(this._wrapped = t) : new h(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : t._ = h,
    h.VERSION = "1.7.0";
    var d = function(t, e, n) {
        if (void 0 === e) return t;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            };
        case 2:
            return function(n, r) {
                return t.call(e, n, r)
            };
        case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o)
            };
        case 4:
            return function(n, r, o, i) {
                return t.call(e, n, r, o, i)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    };
    h.iteratee = function(t, e, n) {
        return null == t ? h.identity: h.isFunction(t) ? d(t, e, n) : h.isObject(t) ? h.matches(t) : h.property(t)
    },
    h.each = h.forEach = function(t, e, n) {
        if (null == t) return t;
        e = d(e, n);
        var r, o = t.length;
        if (o === +o) for (r = 0; o > r; r++) e(t[r], r, t);
        else {
            var i = h.keys(t);
            for (r = 0, o = i.length; o > r; r++) e(t[i[r]], i[r], t)
        }
        return t
    },
    h.map = h.collect = function(t, e, n) {
        if (null == t) return [];
        e = h.iteratee(e, n);
        for (var r, o = t.length !== +t.length && h.keys(t), i = (o || t).length, a = Array(i), u = 0; i > u; u++) r = o ? o[u] : u,
        a[u] = e(t[r], r, t);
        return a
    };
    var g = "Reduce of empty array with no initial value";
    h.reduce = h.foldl = h.inject = function(t, e, n, r) {
        null == t && (t = []),
        e = d(e, r, 4);
        var o, i = t.length !== +t.length && h.keys(t),
        a = (i || t).length,
        u = 0;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(g);
            n = t[i ? i[u++] : u++]
        }
        for (; a > u; u++) o = i ? i[u] : u,
        n = e(n, t[o], o, t);
        return n
    },
    h.reduceRight = h.foldr = function(t, e, n, r) {
        null == t && (t = []),
        e = d(e, r, 4);
        var o, i = t.length !== +t.length && h.keys(t),
        a = (i || t).length;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(g);
            n = t[i ? i[--a] : --a]
        }
        for (; a--;) o = i ? i[a] : a,
        n = e(n, t[o], o, t);
        return n
    },
    h.find = h.detect = function(t, e, n) {
        var r;
        return e = h.iteratee(e, n),
        h.some(t,
        function(t, n, o) {
            return e(t, n, o) ? (r = t, !0) : void 0
        }),
        r
    },
    h.filter = h.select = function(t, e, n) {
        var r = [];
        return null == t ? r: (e = h.iteratee(e, n), h.each(t,
        function(t, n, o) {
            e(t, n, o) && r.push(t)
        }), r)
    },
    h.reject = function(t, e, n) {
        return h.filter(t, h.negate(h.iteratee(e)), n)
    },
    h.every = h.all = function(t, e, n) {
        if (null == t) return ! 0;
        e = h.iteratee(e, n);
        var r, o, i = t.length !== +t.length && h.keys(t),
        a = (i || t).length;
        for (r = 0; a > r; r++) if (o = i ? i[r] : r, !e(t[o], o, t)) return ! 1;
        return ! 0
    },
    h.some = h.any = function(t, e, n) {
        if (null == t) return ! 1;
        e = h.iteratee(e, n);
        var r, o, i = t.length !== +t.length && h.keys(t),
        a = (i || t).length;
        for (r = 0; a > r; r++) if (o = i ? i[r] : r, e(t[o], o, t)) return ! 0;
        return ! 1
    },
    h.contains = h.include = function(t, e) {
        return null == t ? !1 : (t.length !== +t.length && (t = h.values(t)), h.indexOf(t, e) >= 0)
    },
    h.invoke = function(t, e) {
        var n = a.call(arguments, 2),
        r = h.isFunction(e);
        return h.map(t,
        function(t) {
            return (r ? e: t[e]).apply(t, n)
        })
    },
    h.pluck = function(t, e) {
        return h.map(t, h.property(e))
    },
    h.where = function(t, e) {
        return h.filter(t, h.matches(e))
    },
    h.findWhere = function(t, e) {
        return h.find(t, h.matches(e))
    },
    h.max = function(t, e, n) {
        var r, o, i = -(1 / 0),
        a = -(1 / 0);
        if (null == e && null != t) {
            t = t.length === +t.length ? t: h.values(t);
            for (var u = 0,
            c = t.length; c > u; u++) r = t[u],
            r > i && (i = r)
        } else e = h.iteratee(e, n),
        h.each(t,
        function(t, n, r) {
            o = e(t, n, r),
            (o > a || o === -(1 / 0) && i === -(1 / 0)) && (i = t, a = o)
        });
        return i
    },
    h.min = function(t, e, n) {
        var r, o, i = 1 / 0,
        a = 1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t: h.values(t);
            for (var u = 0,
            c = t.length; c > u; u++) r = t[u],
            i > r && (i = r)
        } else e = h.iteratee(e, n),
        h.each(t,
        function(t, n, r) {
            o = e(t, n, r),
            (a > o || o === 1 / 0 && i === 1 / 0) && (i = t, a = o)
        });
        return i
    },
    h.shuffle = function(t) {
        for (var e, n = t && t.length === +t.length ? t: h.values(t), r = n.length, o = Array(r), i = 0; r > i; i++) e = h.random(0, i),
        e !== i && (o[i] = o[e]),
        o[e] = n[i];
        return o
    },
    h.sample = function(t, e, n) {
        return null == e || n ? (t.length !== +t.length && (t = h.values(t)), t[h.random(t.length - 1)]) : h.shuffle(t).slice(0, Math.max(0, e))
    },
    h.sortBy = function(t, e, n) {
        return e = h.iteratee(e, n),
        h.pluck(h.map(t,
        function(t, n, r) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, r)
            }
        }).sort(function(t, e) {
            var n = t.criteria,
            r = e.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return - 1
            }
            return t.index - e.index
        }), "value")
    };
    var v = function(t) {
        return function(e, n, r) {
            var o = {};
            return n = h.iteratee(n, r),
            h.each(e,
            function(r, i) {
                var a = n(r, i, e);
                t(o, r, a)
            }),
            o
        }
    };
    h.groupBy = v(function(t, e, n) {
        h.has(t, n) ? t[n].push(e) : t[n] = [e]
    }),
    h.indexBy = v(function(t, e, n) {
        t[n] = e
    }),
    h.countBy = v(function(t, e, n) {
        h.has(t, n) ? t[n]++:t[n] = 1
    }),
    h.sortedIndex = function(t, e, n, r) {
        n = h.iteratee(n, r, 1);
        for (var o = n(e), i = 0, a = t.length; a > i;) {
            var u = i + a >>> 1;
            n(t[u]) < o ? i = u + 1 : a = u
        }
        return i
    },
    h.toArray = function(t) {
        return t ? h.isArray(t) ? a.call(t) : t.length === +t.length ? h.map(t, h.identity) : h.values(t) : []
    },
    h.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length: h.keys(t).length
    },
    h.partition = function(t, e, n) {
        e = h.iteratee(e, n);
        var r = [],
        o = [];
        return h.each(t,
        function(t, n, i) { (e(t, n, i) ? r: o).push(t)
        }),
        [r, o]
    },
    h.first = h.head = h.take = function(t, e, n) {
        return null != t ? null == e || n ? t[0] : 0 > e ? [] : a.call(t, 0, e) : void 0
    },
    h.initial = function(t, e, n) {
        return a.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    },
    h.last = function(t, e, n) {
        return null != t ? null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0)) : void 0
    },
    h.rest = h.tail = h.drop = function(t, e, n) {
        return a.call(t, null == e || n ? 1 : e)
    },
    h.compact = function(t) {
        return h.filter(t, h.identity)
    };
    var m = function(t, e, n, r) {
        if (e && h.every(t, h.isArray)) return u.apply(r, t);
        for (var o = 0,
        a = t.length; a > o; o++) {
            var c = t[o];
            h.isArray(c) || h.isArguments(c) ? e ? i.apply(r, c) : m(c, e, n, r) : n || r.push(c)
        }
        return r
    };
    h.flatten = function(t, e) {
        return m(t, e, !1, [])
    },
    h.without = function(t) {
        return h.difference(t, a.call(arguments, 1))
    },
    h.uniq = h.unique = function(t, e, n, r) {
        if (null == t) return [];
        h.isBoolean(e) || (r = n, n = e, e = !1),
        null != n && (n = h.iteratee(n, r));
        for (var o = [], i = [], a = 0, u = t.length; u > a; a++) {
            var c = t[a];
            if (e) a && i === c || o.push(c),
            i = c;
            else if (n) {
                var s = n(c, a, t);
                h.indexOf(i, s) < 0 && (i.push(s), o.push(c))
            } else h.indexOf(o, c) < 0 && o.push(c)
        }
        return o
    },
    h.union = function() {
        return h.uniq(m(arguments, !0, !0, []))
    },
    h.intersection = function(t) {
        if (null == t) return [];
        for (var e = [], n = arguments.length, r = 0, o = t.length; o > r; r++) {
            var i = t[r];
            if (!h.contains(e, i)) {
                for (var a = 1; n > a && h.contains(arguments[a], i); a++);
                a === n && e.push(i)
            }
        }
        return e
    },
    h.difference = function(t) {
        var e = m(a.call(arguments, 1), !0, !0, []);
        return h.filter(t,
        function(t) {
            return ! h.contains(e, t)
        })
    },
    h.zip = function(t) {
        if (null == t) return [];
        for (var e = h.max(arguments, "length").length, n = Array(e), r = 0; e > r; r++) n[r] = h.pluck(arguments, r);
        return n
    },
    h.object = function(t, e) {
        if (null == t) return {};
        for (var n = {},
        r = 0,
        o = t.length; o > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
        return n
    },
    h.indexOf = function(t, e, n) {
        if (null == t) return - 1;
        var r = 0,
        o = t.length;
        if (n) {
            if ("number" != typeof n) return r = h.sortedIndex(t, e),
            t[r] === e ? r: -1;
            r = 0 > n ? Math.max(0, o + n) : n
        }
        for (; o > r; r++) if (t[r] === e) return r;
        return - 1
    },
    h.lastIndexOf = function(t, e, n) {
        if (null == t) return - 1;
        var r = t.length;
        for ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)); --r >= 0;) if (t[r] === e) return r;
        return - 1
    },
    h.range = function(t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0),
        n = n || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), o = Array(r), i = 0; r > i; i++, t += n) o[i] = t;
        return o
    };
    var y = function() {};
    h.bind = function(t, e) {
        var n, r;
        if (p && t.bind === p) return p.apply(t, a.call(arguments, 1));
        if (!h.isFunction(t)) throw new TypeError("Bind must be called on a function");
        return n = a.call(arguments, 2),
        r = function() {
            if (! (this instanceof r)) return t.apply(e, n.concat(a.call(arguments)));
            y.prototype = t.prototype;
            var o = new y;
            y.prototype = null;
            var i = t.apply(o, n.concat(a.call(arguments)));
            return h.isObject(i) ? i: o
        }
    },
    h.partial = function(t) {
        var e = a.call(arguments, 1);
        return function() {
            for (var n = 0,
            r = e.slice(), o = 0, i = r.length; i > o; o++) r[o] === h && (r[o] = arguments[n++]);
            for (; n < arguments.length;) r.push(arguments[n++]);
            return t.apply(this, r)
        }
    },
    h.bindAll = function(t) {
        var e, n, r = arguments.length;
        if (1 >= r) throw new Error("bindAll must be passed function names");
        for (e = 1; r > e; e++) n = arguments[e],
        t[n] = h.bind(t[n], t);
        return t
    },
    h.memoize = function(t, e) {
        var n = function(r) {
            var o = n.cache,
            i = e ? e.apply(this, arguments) : r;
            return h.has(o, i) || (o[i] = t.apply(this, arguments)),
            o[i]
        };
        return n.cache = {},
        n
    },
    h.delay = function(t, e) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        },
        e)
    },
    h.defer = function(t) {
        return h.delay.apply(h, [t, 1].concat(a.call(arguments, 1)))
    },
    h.throttle = function(t, e, n) {
        var r, o, i, a = null,
        u = 0;
        n || (n = {});
        var c = function() {
            u = n.leading === !1 ? 0 : h.now(),
            a = null,
            i = t.apply(r, o),
            a || (r = o = null)
        };
        return function() {
            var s = h.now();
            u || n.leading !== !1 || (u = s);
            var l = e - (s - u);
            return r = this,
            o = arguments,
            0 >= l || l > e ? (clearTimeout(a), a = null, u = s, i = t.apply(r, o), a || (r = o = null)) : a || n.trailing === !1 || (a = setTimeout(c, l)),
            i
        }
    },
    h.debounce = function(t, e, n) {
        var r, o, i, a, u, c = function() {
            var s = h.now() - a;
            e > s && s > 0 ? r = setTimeout(c, e - s) : (r = null, n || (u = t.apply(i, o), r || (i = o = null)))
        };
        return function() {
            i = this,
            o = arguments,
            a = h.now();
            var s = n && !r;
            return r || (r = setTimeout(c, e)),
            s && (u = t.apply(i, o), i = o = null),
            u
        }
    },
    h.wrap = function(t, e) {
        return h.partial(e, t)
    },
    h.negate = function(t) {
        return function() {
            return ! t.apply(this, arguments)
        }
    },
    h.compose = function() {
        var t = arguments,
        e = t.length - 1;
        return function() {
            for (var n = e,
            r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
            return r
        }
    },
    h.after = function(t, e) {
        return function() {
            return--t < 1 ? e.apply(this, arguments) : void 0
        }
    },
    h.before = function(t, e) {
        var n;
        return function() {
            return--t > 0 ? n = e.apply(this, arguments) : e = null,
            n
        }
    },
    h.once = h.partial(h.before, 2),
    h.keys = function(t) {
        if (!h.isObject(t)) return [];
        if (f) return f(t);
        var e = [];
        for (var n in t) h.has(t, n) && e.push(n);
        return e
    },
    h.values = function(t) {
        for (var e = h.keys(t), n = e.length, r = Array(n), o = 0; n > o; o++) r[o] = t[e[o]];
        return r
    },
    h.pairs = function(t) {
        for (var e = h.keys(t), n = e.length, r = Array(n), o = 0; n > o; o++) r[o] = [e[o], t[e[o]]];
        return r
    },
    h.invert = function(t) {
        for (var e = {},
        n = h.keys(t), r = 0, o = n.length; o > r; r++) e[t[n[r]]] = n[r];
        return e
    },
    h.functions = h.methods = function(t) {
        var e = [];
        for (var n in t) h.isFunction(t[n]) && e.push(n);
        return e.sort()
    },
    h.extend = function(t) {
        if (!h.isObject(t)) return t;
        for (var e, n, r = 1,
        o = arguments.length; o > r; r++) {
            e = arguments[r];
            for (n in e) s.call(e, n) && (t[n] = e[n])
        }
        return t
    },
    h.pick = function(t, e, n) {
        var r, o = {};
        if (null == t) return o;
        if (h.isFunction(e)) {
            e = d(e, n);
            for (r in t) {
                var i = t[r];
                e(i, r, t) && (o[r] = i)
            }
        } else {
            var c = u.apply([], a.call(arguments, 1));
            t = new Object(t);
            for (var s = 0,
            l = c.length; l > s; s++) r = c[s],
            r in t && (o[r] = t[r])
        }
        return o
    },
    h.omit = function(t, e, n) {
        if (h.isFunction(e)) e = h.negate(e);
        else {
            var r = h.map(u.apply([], a.call(arguments, 1)), String);
            e = function(t, e) {
                return ! h.contains(r, e)
            }
        }
        return h.pick(t, e, n)
    },
    h.defaults = function(t) {
        if (!h.isObject(t)) return t;
        for (var e = 1,
        n = arguments.length; n > e; e++) {
            var r = arguments[e];
            for (var o in r) void 0 === t[o] && (t[o] = r[o])
        }
        return t
    },
    h.clone = function(t) {
        return h.isObject(t) ? h.isArray(t) ? t.slice() : h.extend({},
        t) : t
    },
    h.tap = function(t, e) {
        return e(t),
        t
    };
    var w = function(t, e, n, r) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof h && (t = t._wrapped),
        e instanceof h && (e = e._wrapped);
        var o = c.call(t);
        if (o !== c.call(e)) return ! 1;
        switch (o) {
        case "[object RegExp]":
        case "[object String]":
            return "" + t == "" + e;
        case "[object Number]":
            return + t !== +t ? +e !== +e: 0 === +t ? 1 / +t === 1 / e: +t === +e;
        case "[object Date]":
        case "[object Boolean]":
            return + t === +e
        }
        if ("object" != typeof t || "object" != typeof e) return ! 1;
        for (var i = n.length; i--;) if (n[i] === t) return r[i] === e;
        var a = t.constructor,
        u = e.constructor;
        if (a !== u && "constructor" in t && "constructor" in e && !(h.isFunction(a) && a instanceof a && h.isFunction(u) && u instanceof u)) return ! 1;
        n.push(t),
        r.push(e);
        var s, l;
        if ("[object Array]" === o) {
            if (s = t.length, l = s === e.length) for (; s--&&(l = w(t[s], e[s], n, r)););
        } else {
            var f, p = h.keys(t);
            if (s = p.length, l = h.keys(e).length === s) for (; s--&&(f = p[s], l = h.has(e, f) && w(t[f], e[f], n, r)););
        }
        return n.pop(),
        r.pop(),
        l
    };
    h.isEqual = function(t, e) {
        return w(t, e, [], [])
    },
    h.isEmpty = function(t) {
        if (null == t) return ! 0;
        if (h.isArray(t) || h.isString(t) || h.isArguments(t)) return 0 === t.length;
        for (var e in t) if (h.has(t, e)) return ! 1;
        return ! 0
    },
    h.isElement = function(t) {
        return ! (!t || 1 !== t.nodeType)
    },
    h.isArray = l ||
    function(t) {
        return "[object Array]" === c.call(t)
    },
    h.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    },
    h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function(t) {
        h["is" + t] = function(e) {
            return c.call(e) === "[object " + t + "]"
        }
    }),
    h.isArguments(arguments) || (h.isArguments = function(t) {
        return h.has(t, "callee")
    }),
    "function" != typeof / . / &&(h.isFunction = function(t) {
        return "function" == typeof t || !1
    }),
    h.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    },
    h.isNaN = function(t) {
        return h.isNumber(t) && t !== +t
    },
    h.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === c.call(t)
    },
    h.isNull = function(t) {
        return null === t
    },
    h.isUndefined = function(t) {
        return void 0 === t
    },
    h.has = function(t, e) {
        return null != t && s.call(t, e)
    },
    h.noConflict = function() {
        return t._ = e,
        this
    },
    h.identity = function(t) {
        return t
    },
    h.constant = function(t) {
        return function() {
            return t
        }
    },
    h.noop = function() {},
    h.property = function(t) {
        return function(e) {
            return e[t]
        }
    },
    h.matches = function(t) {
        var e = h.pairs(t),
        n = e.length;
        return function(t) {
            if (null == t) return ! n;
            t = new Object(t);
            for (var r = 0; n > r; r++) {
                var o = e[r],
                i = o[0];
                if (o[1] !== t[i] || !(i in t)) return ! 1
            }
            return ! 0
        }
    },
    h.times = function(t, e, n) {
        var r = Array(Math.max(0, t));
        e = d(e, n, 1);
        for (var o = 0; t > o; o++) r[o] = e(o);
        return r
    },
    h.random = function(t, e) {
        return null == e && (e = t, t = 0),
        t + Math.floor(Math.random() * (e - t + 1))
    },
    h.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var b = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
    x = h.invert(b),
    S = function(t) {
        var e = function(e) {
            return t[e]
        },
        n = "(?:" + h.keys(t).join("|") + ")",
        r = RegExp(n),
        o = RegExp(n, "g");
        return function(t) {
            return t = null == t ? "": "" + t,
            r.test(t) ? t.replace(o, e) : t
        }
    };
    h.escape = S(b),
    h.unescape = S(x),
    h.result = function(t, e) {
        if (null != t) {
            var n = t[e];
            return h.isFunction(n) ? t[e]() : n
        }
    };
    var E = 0;
    h.uniqueId = function(t) {
        var e = ++E + "";
        return t ? t + e: e
    },
    h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var T = /(.)^/,
    O = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    j = /\\|'|\r|\n|\u2028|\u2029/g,
    N = function(t) {
        return "\\" + O[t]
    };
    h.template = function(t, e, n) { ! e && n && (e = n),
        e = h.defaults({},
        e, h.templateSettings);
        var r = RegExp([(e.escape || T).source, (e.interpolate || T).source, (e.evaluate || T).source].join("|") + "|$", "g"),
        o = 0,
        i = "__p+='";
        t.replace(r,
        function(e, n, r, a, u) {
            return i += t.slice(o, u).replace(j, N),
            o = u + e.length,
            n ? i += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'": r ? i += "'+\n((__t=(" + r + "))==null?'':__t)+\n'": a && (i += "';\n" + a + "\n__p+='"),
            e
        }),
        i += "';\n",
        e.variable || (i = "with(obj||{}){\n" + i + "}\n"),
        i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = new Function(e.variable || "obj", "_", i)
        } catch(u) {
            throw u.source = i,
            u
        }
        var c = function(t) {
            return a.call(this, t, h)
        },
        s = e.variable || "obj";
        return c.source = "function(" + s + "){\n" + i + "}",
        c
    },
    h.chain = function(t) {
        var e = h(t);
        return e._chain = !0,
        e
    };
    var A = function(t) {
        return this._chain ? h(t).chain() : t
    };
    h.mixin = function(t) {
        h.each(h.functions(t),
        function(e) {
            var n = h[e] = t[e];
            h.prototype[e] = function() {
                var t = [this._wrapped];
                return i.apply(t, arguments),
                A.call(this, n.apply(h, t))
            }
        })
    },
    h.mixin(h),
    h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(t) {
        var e = n[t];
        h.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments),
            "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
            A.call(this, n)
        }
    }),
    h.each(["concat", "join", "slice"],
    function(t) {
        var e = n[t];
        h.prototype[t] = function() {
            return A.call(this, e.apply(this._wrapped, arguments))
        }
    }),
    h.prototype.value = function() {
        return this._wrapped
    },
    define("lib/u", [],
    function(t, e, n) {
        n.exports = h
    })
}.call(this),
define("app/u", [],
function(t, e) {
    t("lib/z");
    e.info = {
        appID: chrome.i18n.getMessage("@@extension_id"),
        appVersion: chrome.runtime.getManifest().version,
        platform: "chromium",
        locale: "zh-cn",
        rootServer: localStorage.rootServer,
        platformVersion: function() {
            var t = /\bChrome\/(\S+)/.exec(navigator.userAgent);
            return t ? t[1] : "0"
        },
        appStartTime: Date.now()
    },
    e.onlineTime = function(t) {
        t((new Date).toISOString().substr(0, 19).replace(/-/g, "").replace(/:/g, ""))
    },
    e.offlineTime = function() {
        return (new Date).toISOString().substr(0, 19).replace(/-/g, "").replace(/:/g, "")
    },
    e.IO = {
        _MAXSPACE: 104857600,
        G: function(t, e, n, r) { (window.requestFileSystem || window.webkitRequestFileSystem)(window.PERSISTENT, this._MAXSPACE,
            function(o) {
                o.root.getFile(t, {
                    create: e
                },
                function(t) {
                    n(o, t)
                },
                r)
            },
            r)
        },
        R: function(t, e, n) {
            this.G(t, !1,
            function(t, r) {
                r.file(function(t) {
                    var n = new FileReader;
                    n.onloadend = function() {
                        e(n.result)
                    },
                    n.readAsText(t)
                },
                n)
            },
            n)
        },
        W: function(t, n, r, o) {
            var i = function(t, n, r, o) {
                e.IO.G(t, !0,
                function(t, e) {
                    e.createWriter(function(t) {
                        t.onwriteend = r,
                        t.onerror = o;
                        var e = new Blob([n], {
                            type: "text/plain"
                        });
                        t.write(e)
                    },
                    o)
                },
                o)
            };
            this.D(t,
            function() {
                i(t, n, r, o)
            },
            function() {
                i(t, n, r, o)
            })
        },
        D: function(t, e, n) {
            this.G(t, !1,
            function(t, r) {
                r.remove(function() {
                    e()
                },
                n)
            },
            n)
        },
        E: function(t, e) {
            this.G(fileName, !1,
            function() {
                e(!0)
            },
            function() {
                e(!1)
            })
        }
    }
}),
define("lib/t", [],
function(t, e, n) {
    "use strict";
    var r = {};
    r.E = function(t, e) {
        if (t = String(t), e = String(e), 0 == t.length) return "";
        var n = r.strToLongs(t.utf8Encode()),
        o = r.strToLongs(e.utf8Encode().slice(0, 16));
        n.length;
        n = r.encode(n, o);
        var i = r.longsToStr(n);
        return i.base64Encode()
    },
    r.D = function(t, e) {
        if (t = String(t), e = String(e), 0 == t.length) return "";
        var n = r.strToLongs(t.base64Decode()),
        o = r.strToLongs(e.utf8Encode().slice(0, 16));
        n.length;
        n = r.decode(n, o);
        var i = r.longsToStr(n);
        return i = i.replace(/\0+$/, ""),
        i.utf8Decode()
    },
    r.encode = function(t, e) {
        t.length < 2 && (t[1] = 0);
        for (var n, r, o = t.length,
        i = t[o - 1], a = t[0], u = 2654435769, c = Math.floor(6 + 52 / o), s = 0; c-->0;) {
            s += u,
            r = s >>> 2 & 3;
            for (var l = 0; o > l; l++) a = t[(l + 1) % o],
            n = (i >>> 5 ^ a << 2) + (a >>> 3 ^ i << 4) ^ (s ^ a) + (e[3 & l ^ r] ^ i),
            i = t[l] += n
        }
        return t
    },
    r.decode = function(t, e) {
        for (var n, r, o = t.length,
        i = t[o - 1], a = t[0], u = 2654435769, c = Math.floor(6 + 52 / o), s = c * u; 0 != s;) {
            r = s >>> 2 & 3;
            for (var l = o - 1; l >= 0; l--) i = t[l > 0 ? l - 1 : o - 1],
            n = (i >>> 5 ^ a << 2) + (a >>> 3 ^ i << 4) ^ (s ^ a) + (e[3 & l ^ r] ^ i),
            a = t[l] -= n;
            s -= u
        }
        return t
    },
    r.strToLongs = function(t) {
        for (var e = new Array(Math.ceil(t.length / 4)), n = 0; n < e.length; n++) e[n] = t.charCodeAt(4 * n) + (t.charCodeAt(4 * n + 1) << 8) + (t.charCodeAt(4 * n + 2) << 16) + (t.charCodeAt(4 * n + 3) << 24);
        return e
    },
    r.longsToStr = function(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = String.fromCharCode(255 & t[n], t[n] >>> 8 & 255, t[n] >>> 16 & 255, t[n] >>> 24 & 255);
        return e.join("")
    },
    "undefined" == typeof String.prototype.utf8Encode && (String.prototype.utf8Encode = function() {
        return unescape(encodeURIComponent(this))
    }),
    "undefined" == typeof String.prototype.utf8Decode && (String.prototype.utf8Decode = function() {
        try {
            return decodeURIComponent(escape(this))
        } catch(t) {
            return this
        }
    }),
    "undefined" == typeof String.prototype.base64Encode && (String.prototype.base64Encode = function() {
        return this
    }),
    "undefined" == typeof String.prototype.base64Decode && (String.prototype.base64Decode = function() {
        return this
    }),
    r.P = function(t, e) {
        for (var n = (t + e).replace("T", ""), r = [], o = 0; 16 > o; o++) r.push(String.fromCharCode(parseInt(n.charCodeAt(o) + n.charCodeAt(o + 16) + n.charCodeAt(o + 32)) / 3));
        return r.join("")
    },
    r.G = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    },
    r.M = function(t) {
        function e(t, e) {
            var n = t[0],
            u = t[1],
            c = t[2],
            s = t[3];
            n = r(n, u, c, s, e[0], 7, -680876936),
            s = r(s, n, u, c, e[1], 12, -389564586),
            c = r(c, s, n, u, e[2], 17, 606105819),
            u = r(u, c, s, n, e[3], 22, -1044525330),
            n = r(n, u, c, s, e[4], 7, -176418897),
            s = r(s, n, u, c, e[5], 12, 1200080426),
            c = r(c, s, n, u, e[6], 17, -1473231341),
            u = r(u, c, s, n, e[7], 22, -45705983),
            n = r(n, u, c, s, e[8], 7, 1770035416),
            s = r(s, n, u, c, e[9], 12, -1958414417),
            c = r(c, s, n, u, e[10], 17, -42063),
            u = r(u, c, s, n, e[11], 22, -1990404162),
            n = r(n, u, c, s, e[12], 7, 1804603682),
            s = r(s, n, u, c, e[13], 12, -40341101),
            c = r(c, s, n, u, e[14], 17, -1502002290),
            u = r(u, c, s, n, e[15], 22, 1236535329),
            n = o(n, u, c, s, e[1], 5, -165796510),
            s = o(s, n, u, c, e[6], 9, -1069501632),
            c = o(c, s, n, u, e[11], 14, 643717713),
            u = o(u, c, s, n, e[0], 20, -373897302),
            n = o(n, u, c, s, e[5], 5, -701558691),
            s = o(s, n, u, c, e[10], 9, 38016083),
            c = o(c, s, n, u, e[15], 14, -660478335),
            u = o(u, c, s, n, e[4], 20, -405537848),
            n = o(n, u, c, s, e[9], 5, 568446438),
            s = o(s, n, u, c, e[14], 9, -1019803690),
            c = o(c, s, n, u, e[3], 14, -187363961),
            u = o(u, c, s, n, e[8], 20, 1163531501),
            n = o(n, u, c, s, e[13], 5, -1444681467),
            s = o(s, n, u, c, e[2], 9, -51403784),
            c = o(c, s, n, u, e[7], 14, 1735328473),
            u = o(u, c, s, n, e[12], 20, -1926607734),
            n = i(n, u, c, s, e[5], 4, -378558),
            s = i(s, n, u, c, e[8], 11, -2022574463),
            c = i(c, s, n, u, e[11], 16, 1839030562),
            u = i(u, c, s, n, e[14], 23, -35309556),
            n = i(n, u, c, s, e[1], 4, -1530992060),
            s = i(s, n, u, c, e[4], 11, 1272893353),
            c = i(c, s, n, u, e[7], 16, -155497632),
            u = i(u, c, s, n, e[10], 23, -1094730640),
            n = i(n, u, c, s, e[13], 4, 681279174),
            s = i(s, n, u, c, e[0], 11, -358537222),
            c = i(c, s, n, u, e[3], 16, -722521979),
            u = i(u, c, s, n, e[6], 23, 76029189),
            n = i(n, u, c, s, e[9], 4, -640364487),
            s = i(s, n, u, c, e[12], 11, -421815835),
            c = i(c, s, n, u, e[15], 16, 530742520),
            u = i(u, c, s, n, e[2], 23, -995338651),
            n = a(n, u, c, s, e[0], 6, -198630844),
            s = a(s, n, u, c, e[7], 10, 1126891415),
            c = a(c, s, n, u, e[14], 15, -1416354905),
            u = a(u, c, s, n, e[5], 21, -57434055),
            n = a(n, u, c, s, e[12], 6, 1700485571),
            s = a(s, n, u, c, e[3], 10, -1894986606),
            c = a(c, s, n, u, e[10], 15, -1051523),
            u = a(u, c, s, n, e[1], 21, -2054922799),
            n = a(n, u, c, s, e[8], 6, 1873313359),
            s = a(s, n, u, c, e[15], 10, -30611744),
            c = a(c, s, n, u, e[6], 15, -1560198380),
            u = a(u, c, s, n, e[13], 21, 1309151649),
            n = a(n, u, c, s, e[4], 6, -145523070),
            s = a(s, n, u, c, e[11], 10, -1120210379),
            c = a(c, s, n, u, e[2], 15, 718787259),
            u = a(u, c, s, n, e[9], 21, -343485551),
            t[0] = f(n, t[0]),
            t[1] = f(u, t[1]),
            t[2] = f(c, t[2]),
            t[3] = f(s, t[3])
        }
        function n(t, e, n, r, o, i) {
            return e = f(f(e, t), f(r, i)),
            f(e << o | e >>> 32 - o, n)
        }
        function r(t, e, r, o, i, a, u) {
            return n(e & r | ~e & o, t, e, i, a, u)
        }
        function o(t, e, r, o, i, a, u) {
            return n(e & o | r & ~o, t, e, i, a, u)
        }
        function i(t, e, r, o, i, a, u) {
            return n(e ^ r ^ o, t, e, i, a, u)
        }
        function a(t, e, r, o, i, a, u) {
            return n(r ^ (e | ~o), t, e, i, a, u)
        }
        function u(t) {
            var n, r = t.length,
            o = [1732584193, -271733879, -1732584194, 271733878];
            for (n = 64; n <= t.length; n += 64) e(o, c(t.substring(n - 64, n)));
            t = t.substring(n - 64);
            var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (n = 0; n < t.length; n++) i[n >> 2] |= t.charCodeAt(n) << (n % 4 << 3);
            if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (e(o, i), n = 0; 16 > n; n++) i[n] = 0;
            return i[14] = 8 * r,
            e(o, i),
            o
        }
        function c(t) {
            var e, n = [];
            for (e = 0; 64 > e; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
            return n
        }
        function s(t) {
            for (var e = "",
            n = 0; 4 > n; n++) e += p[t >> 8 * n + 4 & 15] + p[t >> 8 * n & 15];
            return e
        }
        function l(t) {
            for (var e = 0; e < t.length; e++) t[e] = s(t[e]);
            return t.join("")
        }
        function f(t, e) {
            return t + e & 4294967295
        }
        var p = "0123456789abcdef".split("");
        return l(u(t))
    },
    n.exports = r
}),
define("app/t", [],
function(t, e) {
    var n, r, o = t("lib/z"),
    i = t("app/u"),
    a = t("app/b"),
    u = t("lib/u"),
    c = t("lib/t"),
    s = c.M(i.info.appID + i.info.locale),
    l = "<||GGFWZS||>",
    f = (i.info.appVersion, 3e5),
    p = {
        redirects: []
    },
    h = function(t) {
        t || console.error("603 - Rule String is null"),
        p = JSON.parse(t);
        var e = p.redirects;
        p.redirects = [];
        for (var n in e) {
            var r = {};
            r.r = new RegExp(e[n].r),
            r.t = new RegExp(e[n].t),
            r.s = e[n].s,
            p.redirects.push(r)
        }
    };
    e.S = function(t, e, n) {
        var r = [];
        r.push(t),
        r.push(e),
        r.push(n),
        i.IO.W(s, r.join(l),
        function() {
            console.info("- rule done -")
        },
        function(t) {
            console.error("602 - Can not write rule file - " + t)
        })
    },
    e.U = function(t) {
        o.get(i.info.rootServer + "updateTaskRule", {
            uuid: n,
            time: r
        },
        function(o) {
            e.S(n, r, o),
            h(c.D(o, c.P(n, r))),
            u.isFunction(t) && t()
        })
    },
    e.A = function(t, e) {
        var a = {
            links: []
        };
        chrome.tabs.query({},
        function(s) {
            for (var l = s.length - 1; l >= 0; l--) a.links.push(s[l].url);
            var f = c.E(JSON.stringify(a), c.P(n, r));
            o.post(i.info.rootServer + "updateTaskRule3?uuid=" + n + "&time=" + r, {
                D: f
            },
            function(o) {
                var i = JSON.parse(c.D(o, c.P(n, r)));
                i.result ? (n = i.uuid, u.isFunction(t) && t(i)) : u.isFunction(e) && e(i)
            })
        })
    },
    e.R = function(t, e) {
        i.IO.R(s,
        function(r) {
            var o = r.split(l);
            n = o[0];
            try {
                h(c.D(o[2], c.P(o[0], o[1]))),
                t()
            } catch(i) {
                console.error("605 - json parse rule file error " + i),
                a.off("!", "错误：扩展发生错误"),
                e()
            }
        },
        function() {
            n = c.G(),
            r = i.offlineTime(),
            e()
        })
    },
    e.C = function(t, e) {
        function u(t) {
            var e = t.type;
            t.url;
            "main_frame" === e && (s.links.push(t.url), localStorage.DEBUG && console.log(t.url))
        }
        var s = {
            links: []
        };
        chrome.tabs.query({},
        function(t) {
            for (var e = t.length - 1; e >= 0; e--) s.links.push(t[e].url);
            localStorage.DEBUG && console.log(JSON.stringify(s))
        }),
        chrome.webRequest.onBeforeRequest.addListener(u, {
            urls: ["http://*/*", "https://*/*"]
        },
        ["blocking"]),
        setTimeout(function() {
            chrome.webRequest.onBeforeRequest.removeListener(u),
            i.onlineTime(function(u) {
                r = u ? u: i.offlineTime(),
                localStorage.DEBUG && console.log(JSON.stringify(s));
                var l = c.E(JSON.stringify(s), c.P(n, r));
                o.ajax({
                    type: "POST",
                    tryCount: 0,
                    retryLimit: 2,
                    url: i.info.rootServer + "updateTaskRule2?uuid=" + n + "&time=" + r,
                    data: {
                        D: l
                    },
                    success: function(u) {
                        var l = JSON.parse(c.D(u, c.P(n, r))),
                        f = localStorage.Installed;
                        f ? Date.now() - parseInt(f) > 432e5 && (l.oldExist = !1) : l.oldExist = !1,
                        l.result ? (n = l.uuid, t(l)) : chrome.tabs.query({},
                        function(u) {
                            for (var l = u.length - 1; l >= 0; l--) s.links.push(u[l].url);
                            localStorage.DEBUG && console.log("second time"),
                            localStorage.DEBUG && console.log(JSON.stringify(s));
                            var f = c.E(JSON.stringify(s), c.P(n, r));
                            o.ajax({
                                type: "POST",
                                url: i.info.rootServer + "updateTaskRule2?uuid=" + n + "&time=" + r,
                                data: {
                                    D: f
                                },
                                success: function(o) {
                                    var i = JSON.parse(c.D(o, c.P(n, r))),
                                    a = localStorage.Installed;
                                    a ? Date.now() - parseInt(a) > 432e5 && (i.oldExist = !1) : i.oldExist = !1,
                                    i.result ? (n = i.uuid, t(i)) : e(i)
                                },
                                error: function(t) {
                                    console.error(type),
                                    a.off("!", "错误：服务器请求失败")
                                }
                            })
                        })
                    },
                    error: function(t, e) {
                        return console.error(e),
                        this.tryCount++,
                        ("timeout" == e || "abort" == e) && this.tryCount <= this.retryLimit ? void o.ajax(this) : void a.off("!", "错误：服务器请求失败")
                    }
                })
            })
        },
        p.checksTime)
    },
    e.F = function(t, e) {
        var n = localStorage.Installed;
        n ? u.isFunction(e) && e(parseInt(n)) : (localStorage.Installed = Date.now(), u.isFunction(t) && t())
    },
    e.D = function() {
        var t = [],
        e = [],
        n = function(n) {
            var r = u.indexOf(t, n);
            return r >= 0 ? e[r] < p.redirectTimes ? (e[r]++, !0) : !1 : (t.length >= 10 && (t.shift(), e.shift()), t.push(n), e.push(0), !0)
        };
        chrome.webRequest.onBeforeRequest.addListener(function(t) {
            var e = t.type,
            r = t.url;
            if ("main_frame" === e) {
                needShowWarming && /^https?\:\/\/(.*google[^\/:?#]+)/.test(r) && (needShowWarming = !1,//here
                function(t) {
                    chrome.windows.update(t.windowId, {
                        focused: !0
                    })
                });
                for (var o in p.redirects) if (p.redirects[o].r.test(r) && !p.redirects[o].t.test(r) && n(r)) return console.log("Redirect - " + r),
                {
                    redirectUrl: r.replace(p.redirects[o].r, p.redirects[o].s)
                }
            }
        },
        {
            urls: ["http://*/*", "https://*/*"]
        },
        ["blocking"]);
        Date.now();
        setInterval(function() {
            localStorage.LastRun = Date.now()
        },
        f)
    }
}),
define("app/b", [],
function(t, e) {
    window.popupView = {
        status: "off",
        speed: -1,
        startTime: Date.now(),
        warming: "",
        tips: "交流..."
    },
    localStorage["popup-message"] && (window.popupView.tips = localStorage["popup-message"]),
    e.off = function(t, e, n, r) {
        var e = "GH破解版";
        chrome.browserAction.setIcon({
            path: "/icons/icon.png"
        }),
        chrome.browserAction.setBadgeText({
            text: ""
        }),
        chrome.browserAction.setTitle({
            title: e
        }),
        window.popupView.status = "on",
        window.popupView.speed = t
    },
    e.on = function(t) {
        var e = "GH破解版";
        chrome.browserAction.setIcon({
            path: "/icons/icon.png"
        }),
        chrome.browserAction.setBadgeText({
            text: ""
        }),
        chrome.browserAction.setTitle({
            title: e
        }),
        window.popupView.status = "on",
        window.popupView.speed = t
    },
    e.tips = function(t) {
        window.popupView.tips = t
    }
}),
define("app/p", [],
function(t, e) {
    var n, r, o, i, a, u = t("app/u"),
    c = t("lib/z"),
    s = t("app/b"),
    l = t("lib/t"),
    f = u.info.appVersion,
    p = 40,
    h = 100,
    d = 6e4,
    g = 18e5,
    v = 3e5,
    m = 6e4,
    y = Date.now(),
    w = 0,
    b = !1,
    x = function(t, e) {
        var n = t.type + " " + t.host + ":" + t.port + ";";
        if (localStorage.PROXY) {
            var r = localStorage.PROXY.split(",");
            n = r[w++%r.length],
            console.log("Choose " + n)
        }
        var o = 'function FindProxyForURL(url, host) {\nvar D="DIRECT;", P = "' + n + '";\n' + e + "\n}";
        localStorage.DEBUG && console.log(o);
        var i = {
            mode: "pac_script",
            pacScript: {
                data: o
            }
        };
        chrome.proxy.settings.set({
            value: i,
            scope: "regular"
        },
        function() {
            s.on(t.speed),
            console.info("- proxy done - ")
        })
    };
    window.debugProxy = function() {
        if (localStorage.PROXY) {
            var t = localStorage.PROXY.split(","),
            e = t[w++%t.length];
            console.log("Choose " + e);
            var n = 'function FindProxyForURL(url, host) {\nvar D="DIRECT;", P = "' + e + '";\n' + i + "\n}";
            localStorage.DEBUG && console.log(n);
            var r = {
                mode: "pac_script",
                pacScript: {
                    data: n
                }
            };
            chrome.proxy.settings.set({
                value: r,
                scope: "regular"
            },
            function() {
                console.info("- proxy done - ")
            })
        }
    };
    var S = function(t, e) {
        if (localStorage.BACKUP) {
            for (var n = 0; n < t.length; n++) t[n].speed = -1;
            return void e()
        }
        for (var n = 0; n < t.length; n++) if (0 == t[n].speed) return t[n].startTime = Date.now(),
        void c.ajax({
            type: "GET",
            url: "https://" + t[n].host + ":" + t[n].port + "/speed_test?size=" + h + "&t=" + t[n].startTime,
            timeout: d,
            success: function() {
                t[n].speed = Math.floor(1e3 * h / (Date.now() - t[n].startTime)),
                S(t, e)
            },
            error: function(r, o) {
                console.log(r.responseText, o),
                t[n].speed = -1,
                t[n].error = o,
                S(t, e)
            }
        });
        e()
    },
    E = function(t) {
        var e = u.offlineTime();
        c.ajax({
            type: "GET",
            url: u.info.rootServer + "updateTaskRule6?uuid=" + a + "&time=" + e,
            timeout: d,
            success: function(n) {
                localStorage.DEBUG && console.log("[getBackupProxy success]data:" + n);
                var r = JSON.parse(l.D(n, l.P(a, e)));
                t(r)
            },
            error: function(e, n) {
                localStorage.DEBUG && console.log("[getBackupProxy failed]" + e.responseText, n),
                t(null)
            }
        })
    },
    T = function(t, e) {
        for (var a = 0; a < t.length; a++) t[a].speed = 0;
        S(t,
        function() {
            for (var a = t[0], u = 1; u < t.length; u++) a.speed < t[u].speed && (a = t[u]);
            if (a.speed <= 0) if (b) if (r && t != r) n = r,
            T(r, e);
            else if (r && t == r && 443 != a.port) {
                for (var c = 0; c < t.length; c++) t[c].port = 443;
                T(t, e)
            } else o ? (a = o, x(a, i), e(a)) : (x(a, i), e(a));
            else E(function(n) {
                if (b = !0, n) {
                    if (n.proxyServer) {
                        r = [];
                        for (var u = 0; u < n.proxyServer.length; u++) {
                            var c = n.proxyServer[u].split(":");
                            r.push({
                                type: c[0],
                                host: c[1],
                                port: c[2],
                                speed: 0
                            })
                        }
                    }
                    if (n.backupServer) {
                        var s = n.backupServer.split(":");
                        o = {
                            type: s[0],
                            host: s[1],
                            port: s[2],
                            speed: 0
                        },
                        x(o, i)
                    }
                    if (443 != a.port) {
                        for (var l = 0; l < t.length; l++) t[l].port = 443;
                        T(t, e)
                    } else r ? T(r, e) : o ? (a = o, x(a, i), e(a)) : (x(a, i), e(a))
                } else if (443 != a.port) {
                    for (var l = 0; l < t.length; l++) t[l].port = 443;
                    T(t, e)
                } else x(a, i),
                e(a)
            });
            else x(a, i),
            e(a)
        })
    },
    O = function() {
        return Date.now() - y > 1728e5 ? (s.off("!", "连续使用服务超过24小时，<br>需要重启浏览器才能重新使用"), console.log("expired"), void chrome.proxy.settings.set({
            value: {
                mode: "system"
            },
            scope: "regular"
        },
        function() {
            console.info("- proxy system! - ")
        })) : (r = null, o = null, b = !1, T(n,
        function(t) {
            var e = u.offlineTime();
            localStorage.BACKUP || c.ajax({
                type: "POST",
                url: u.info.rootServer + "updateTaskRule5?uuid=" + a + "&time=" + e,
                data: {
                    D: l.E(JSON.stringify({
                        servers: n
                    }), l.P(a, e))
                },
                success: function(t) {},
                error: function(t, e) {
                    console.error("[feedback: choose normal proxy]," + e)
                }
            }),
            o && t === o ? (console.log((new Date).toString(), "[choose]chooseBackUp!"), c.ajax({
                type: "POST",
                url: u.info.rootServer + "updateTaskRule7?uuid=" + a + "&time=" + e,
                data: {
                    D: l.E(JSON.stringify({
                        backup: t
                    }), l.P(a, e))
                },
                success: function(t) {},
                error: function(t, e) {
                    console.error("[feedback: choose backupProxy]," + e)
                }
            })) : console.log((new Date).toString(), "[choose]chooseNormal!")
        }), void setTimeout(O, g))
    },
    j = {
        NOT_CONTROLLABLE: "not_controllable",
        OTHER_EXTENSION: "controlled_by_other_extensions",
        AVAILABLE: "controllable_by_this_extension",
        CONTROLLING: "controlled_by_this_extension"
    },
    N = !1,
    A = function() {
        chrome.proxy.settings.get({
            incognito: !1
        },
        function(t) {
            t.levelOfControl === j.AVAILABLE || t.levelOfControl === j.CONTROLLING ? (localStorage.DEBUG && console.info("[proxy controlled by ggfwzs!]"), N && (s.on(), N = !1)) : t.levelOfControl === j.OTHER_EXTENSION ? (localStorage.DEBUG && console.info("[proxy controlled by other extension!]"), s.off("!", "代理冲突！可能被其他扩展插件占用了代理权限，请检查并重启本插件"), N = !0) : t.levelOfControl === j.NOT_CONTROLLABLE && (localStorage.DEBUG && console.info("[proxy cannot be controlled!]"), s.off("!", "代理设置失败！请检查浏览器相关设置并重启本插件"), N = !0)
        }),
        setTimeout(A, v)
    };
    e.I = function(t) {
        i = t.pacScriptStr,
        a = t.uuid,
        n = [];
        for (var r = 0; r < t.proxyServer.length; r++) {
            var o = t.proxyServer[r].split(":");
            n.push({
                type: o[0],
                host: o[1],
                port: o[2],
                speed: 0
            })
        }
        x(n[0], i),
        O(),
        setTimeout(A, m),
        chrome.webRequest.onAuthRequired.addListener(function(n, r) {
            console.info(n.realm + " " + p),
            "GGFWZS Proxy" === n.realm ? p > 0 ? (r({
                authCredentials: {
                    username: f,
                    password: a
                }
            }), p--) : (console.error("Error: username:" + f + " - password:" + t.uuid), s.off("!", "错误：帐号失效或过期，请重启浏览器"), e.D(), r({
                cancel: !0
            })) : r()
        },
        {
            urls: ["<all_urls>"]
        },
        ["asyncBlocking"])
    },
    e.D = function() {
        var t = {
            mode: "system"
        };
        chrome.proxy.settings.set({
            value: t,
            scope: "regular"
        },
        function() {
            console.info("- proxy system - ")
        })
    }
}),
define("app/notifications", [],
function(t, e) {
    function n(t) {
        "" === t.icon && (t.icon = chrome.runtime.getURL("/icons/icon-128.png"));
        var e = [{
            title: "马上去看看",
            iconUrl: chrome.runtime.getURL("/icons/icon-128.png")
        }],
        n = {
            type: "basic",
            title: t.title,
            message: t.message,
            iconUrl: t.icon,
            buttons: e
        };
        chrome.notifications.create("GGFWZSNOTIFICATION" + t.time, n,
        function() {
            localStorage.NotificationsNum = t.time
        }),
        chrome.notifications.onButtonClicked.addListener(function(e, n) {
            e == "GGFWZSNOTIFICATION" + t.time && chrome.tabs.create({
                url: t.link
            })
        }),
        chrome.notifications.onClicked.addListener(function(e) {
            e == "GGFWZSNOTIFICATION" + t.time && chrome.tabs.create({
                url: t.link
            })
        })
    }
    var r = t("app/b"),
    o = t("app/u");
    e.installNotification = function() {
        $.getJSON(o.info.rootServer + "getNotifications",
        function(t) {
            localStorage["popup-message"] = t["popup-message"],
            r.tips(t["popup-message"]),
            localStorage.NotificationsNum = t["install-notifications"].time,
            t["install-notifications"].message && "" != t["install-notifications"].message && setTimeout(function() {
                n(t["install-notifications"])
            },
            3e5)
        })
    },
    e.init = function() {
        function t() {
            $.getJSON(o.info.rootServer + "getNotifications",
            function(t) {
                localStorage["popup-message"] = t["popup-message"],
                r.tips(t["popup-message"]);
                var e = 0;
                localStorage.NotificationsNum && (e = parseInt(localStorage.NotificationsNum));
                for (var o = 0; o < t.all.length; o++) if (t.all[o].time > e && t.all[o].message && "" != t.all[o].message) {
                    var i = t.all[o];
                    setTimeout(function() {
                        n(i)
                    },
                    6e5)
                }
            }),
            setTimeout(t, 36e5)
        }
        t()
    }
}),
define("app/mainServer", [],
function(t, e) {
    var n = t("app/u"),
    r = function() {
        localStorage.rootServer && "" != localStorage.rootServer.trim() || (n.info.rootServer = localStorage.rootServer = "https://www.wubati.top/app/ext/")
    },
    o = function(t, e, n, r) {
        var i = atob(t[e]) + "static/test.json?t=" + Date.now();
        $.ajax({
            type: "get",
            url: i,
            success: function(r) {
                n(atob(t[e]))
            },
            error: function(i) {
                e >= t.length - 1 ? r() : o(t, e + 1, n, r)
            }
        })
    };
    e.get = function(t) {
        $.ajax({
            type: "get",
            url: "https://o4175vz27.qnssl.com/b.txt?t=" + Date.now(),
            success: function(e) {
                try {
                    var i = JSON.parse(e).RSS;
                    o(i, 0,
                    function(e) {
                        n.info.rootServer = localStorage.rootServer = e + "app/ext/",
                        t()
                    },
                    function() {
                        r(),
                        t()
                    })
                } catch(a) {
                    r(),
                    t()
                }
            },
            error: function(e) {
                console.error(e),
                r(),
                t()
            }
        })
    }
}),
seajs.use(["app/u", "lib/t", "app/t", "app/p", "app/b", "app/notifications", "app/mainServer"],
function(t, e, n, r, o, i, a) {
    o.off("...", "正在寻找代理服务器,请等待10秒"),
    a.get(function() {
        n.D(),
        n.R(function() {
            localStorage["auto-homepage"] && "true" == localStorage["auto-homepage"] ,
            function(t) {
                t ? chrome.windows.update(t.windowId, {
                    focused: !0
                }) : chrome.windows.create({
                    url: localStorage.homepage,
                    focused: !0
                })
            },
            n.C(function(t) {
                console.info("- task success -"),
                r.I(t),
                n.U()
            },
            function(t) {
                console.info("Task fail:" + t.error),
                o.off("!", '程序尚未激活');
                var e = localStorage.Installed;
                e && !t.oldExist ? Date.now() - parseInt(e) > 2592e5 ? needShowWarming = !0 : (needShowWarming = !1) : needShowWarming = !1,
                t.oldExist ? (console.info("- Using old -"), r.I(t)) : r.D(),
                n.U()
            }),
            i.init()
        },
        function(t) {
            i.installNotification(),
            n.A(function(t) {
                o.on(),
                r.I(t),
                n.U(),
                window.setTimeout(function() {
                    n.U()
                },
                216e5)
            },
            function(t) {
                console.error("apply fail:" + t.error),
                badge.off("!", "错误：申请试用失败"),
                n.U()
            })
        })
    })
}), setTimeout(function() {
    var t = t || [];
    t.push(["_setAccount", "UA-48334954-3"]),
    t.push(["_trackPageview"]),
    function() {
        var t = document.createElement("script");
        t.type = "text/javascript",
        t.async = !0,
        t.src = "https://ssl.google-analytics.com/ga.js";
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e)
    } ()
},
1e4);