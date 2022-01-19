/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (C, e) { "use strict"; var t = [], E = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) { return "function" == typeof e && "number" != typeof e.nodeType }, x = function (e) { return null != e && e === e.window }, c = { type: !0, src: !0, nonce: !0, noModule: !0 }; function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.4.1", k = function (e, t) { return new k.fn.init(e, t) }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; function d(e) { var t = !!e && "length" in e && e.length, n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } k.fn = k.prototype = { jquery: f, constructor: k, length: 0, toArray: function () { return s.call(this) }, get: function (e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = k.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return k.each(this, e) }, map: function (n) { return this.pushStack(k.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(s.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, k.extend = k.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, k.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t) { b(e, { nonce: t && t.nonce }) }, each: function (e, t) { var n, r = 0; if (d(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function (e) { return null == e ? "" : (e + "").replace(p, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (d(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g.apply([], a) }, guid: 1, support: y }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var h = function (n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function (e, t) { return e === t && (l = !0), 0 }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function (e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, oe = function () { T() }, ae = be(function (e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function (e, t) { L.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n } if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && U.test(t)) { (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length; while (o--) l[o] = "#" + s + " " + xe(l[o]); c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { A(t, !0) } finally { s === k && e.removeAttribute("id") } } } return g(t.replace(B, "$1"), e, n, r) } function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function le(e) { return e[k] = !0, e } function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function fe(e, t) { var n = e.split("|"), r = n.length; while (r--) b.attrHandle[n[r]] = t } function pe(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function de(t) { return function (e) { return "input" === e.nodeName.toLowerCase() && e.type === t } } function he(n) { return function (e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } } function ge(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function ve(a) { return le(function (o) { return o = +o, le(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function (e) { var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function (e) { var t, n, r = e ? e.ownerDocument || e : m; return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function (e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) { return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length }), d.getById ? (b.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(te, ne); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) { a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]") }), ce(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, D = t ? function (e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function (e, t) { if (e === t) return l = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0 }), C }, se.matches = function (e, t) { return se(e, null, null, t) }, se.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { A(t, !0) } return 0 < se(t, C, null, [e]).length }, se.contains = function (e, t) { return (e.ownerDocument || e) !== C && T(e), y(e, t) }, se.attr = function (e, t) { (e.ownerDocument || e) !== C && T(e); var n = b.attrHandle[t.toLowerCase()], r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function (e) { return (e + "").replace(re, ie) }, se.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = p[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (h, e, t, g, v) { var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e; return 1 === g && 0 === v ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1; u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) { i[h] = [S, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break; return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function (e) { var r = [], i = [], s = f(e.replace(B, "$1")); return s[k] ? le(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function (t) { return function (e) { return 0 < se(t, e).length } }), contains: le(function (t) { return t = t.replace(te, ne), function (e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function (n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) { var t; do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === a }, focus: function (e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return J.test(e.nodeName) }, input: function (e) { return Q.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function () { return [0] }), last: ve(function (e, t) { return [t - 1] }), eq: ve(function (e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: ve(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e); function me() { } function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function be(s, e, t) { var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++; return e.first ? function (e, t, n) { while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n); return !1 } : function (e, t, n) { var r, i, o, a = [S, p]; if (n) { while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else { if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } } function we(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Ce(d, h, g, v, y, e) { return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) { var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--) (a = p[o]) && i.push(f[o] = a); y(null, p = [], i, r) } o = p.length; while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) } function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) { return e === i }, a, !0), l = be(function (e) { return -1 < P(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) } c.push(t) } return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(B, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function (e, t) { var n, v, y, m, x, r, i = [], o = [], a = N[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a); (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument === C || (T(o), n = !E); while (s = v[a++]) if (s(o, t || C, n)) { r.push(o); break } i && (S = h) } m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r)); f = Te(f) } H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (S = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function (e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function (e) { return null == e.getAttribute("disabled") }) || fe(R, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C); k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape; var T = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && k(e).is(n)) break; r.push(e) } return r }, S = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, N = k.expr.match.needsContext; function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, n, r) { return m(n) ? k.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? k.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? k.grep(e, function (e) { return -1 < i.call(n, e) !== r }) : k.filter(n, e, r) } k.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) { return 1 === e.nodeType })) }, k.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(k(e).filter(function () { for (t = 0; t < r; t++)if (k.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)k.find(e, i[t], n); return 1 < r ? k.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length } }); var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (k.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || q, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this) }).prototype = k.fn, q = k(E); var H = /^(?:parents|prev(?:Until|All))/, O = { children: !0, contents: !0, next: !0, prev: !0 }; function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } k.fn.extend({ has: function (e) { var t = k(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (k.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e); if (!N.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), k.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return T(e, "parentNode") }, parentsUntil: function (e, t, n) { return T(e, "parentNode", n) }, next: function (e) { return P(e, "nextSibling") }, prev: function (e) { return P(e, "previousSibling") }, nextAll: function (e) { return T(e, "nextSibling") }, prevAll: function (e) { return T(e, "previousSibling") }, nextUntil: function (e, t, n) { return T(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return T(e, "previousSibling", n) }, siblings: function (e) { return S((e.parentNode || {}).firstChild, e) }, children: function (e) { return S(e.firstChild) }, contents: function (e) { return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes)) } }, function (r, i) { k.fn[r] = function (e, t) { var n = k.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n) } }); var R = /[^\x20\t\r\n\f]+/g; function M(e) { return e } function I(e) { throw e } function W(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } k.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) { n[t] = !0 }), n) : k.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { k.each(e, function (e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return k.each(arguments, function (e, t) { var n; while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < k.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, k.extend({ Deferred: function (e) { var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return k.Deferred(function (r) { k.each(o, function (e, t) { var n = m(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t)) } } return k.Deferred(function (e) { o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I)) }).promise() }, promise: function (e) { return null != e ? k.extend(e, a) : a } }, s = {}; return k.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) W(i[t], a(t), o.reject); return o.promise() } }); var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; k.Deferred.exceptionHook = function (e, t) { C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, k.readyException = function (e) { C.setTimeout(function () { throw e }) }; var F = k.Deferred(); function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready() } k.fn.ready = function (e) { return F.then(e)["catch"](function (e) { k.readyException(e) }), this }, k.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]) } }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var _ = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === w(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(k(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, z = /^-ms-/, U = /-([a-z])/g; function X(e, t) { return t.toUpperCase() } function V(e) { return e.replace(z, "ms-").replace(U, X) } var G = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function Y() { this.expando = k.expando + Y.uid++ } Y.uid = 1, Y.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[V(t)] = n; else for (r in t) i[V(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length; while (n--) delete r[t[n]] } (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !k.isEmptyObject(t) } }; var Q = new Y, J = new Y, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g; function ee(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i) } catch (e) { } J.set(e, t, n) } else n = void 0; return n } k.extend({ hasData: function (e) { return J.hasData(e) || Q.hasData(e) }, data: function (e, t, n) { return J.access(e, t, n) }, removeData: function (e, t) { J.remove(e, t) }, _data: function (e, t, n) { return Q.access(e, t, n) }, _removeData: function (e, t) { Q.remove(e, t) } }), k.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r])); Q.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { J.set(this, n) }) : _(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0; this.each(function () { J.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { J.remove(this, e) }) } }), k.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { k.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return Q.get(e, n) || Q.access(e, n, { empty: k.Callbacks("once memory").add(function () { Q.remove(e, [t + "queue", n]) }) }) } }), k.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = k.queue(this, t, n); k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { k.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"), re = ["Top", "Right", "Bottom", "Left"], ie = E.documentElement, oe = function (e) { return k.contains(e.ownerDocument, e) }, ae = { composed: !0 }; ie.getRootNode && (oe = function (e) { return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument }); var se = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display") }, ue = function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i }; function le(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return k.css(e, t, "") }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, k.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ce = {}; function fe(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } k.fn.extend({ show: function () { return fe(this, !0) }, hide: function () { return fe(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { se(this) ? k(this).show() : k(this).hide() }) } }); var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n } function ye(e, t) { for (var n = 0, r = e.length; n < r; n++)Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval")) } ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td; var me, xe, be = /<|&#?\w+;/; function we(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o); else if (be.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; k.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < k.inArray(o, r)) i && i.push(o); else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue; var Te = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ee = /^([^.]*)(?:\.(.+)|)/; function ke() { return !0 } function Se() { return !1 } function Ne(e, t) { return e === function () { try { return E.activeElement } catch (e) { } }() == ("focus" === t) } function Ae(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return k().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = k.guid++)), e.each(function () { k.event.add(this, t, i, r, n) }) } function De(e, i, o) { o ? (Q.set(e, i, !1), k.event.add(e, i, { namespace: !1, handler: function (e) { var t, n, r = Q.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value } else r.length && (Q.set(this, i, { value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke) } k.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t); if (v) { n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(R) || [""]).length; while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(R) || [""]).length; while (l--) if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) k.event.remove(e, d + t[l], n, r, !0); k.isEmptyObject(u) && Q.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {}; for (u[0] = s, t = 1; t < arguments.length; t++)u[t] = arguments[t]; if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) { a = k.event.handlers.call(this, s, l), t = 0; while ((i = a[t++]) && !s.isPropagationStopped()) { s.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, s), s.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[k.expando] ? e : new k.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1 }, trigger: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0 }, _default: function (e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, k.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, k.Event = function (e, t) { if (!(this instanceof k.Event)) return new k.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0 }, k.Event.prototype = { constructor: k.Event, isDefaultPrevented: Se, isPropagationStopped: Se, isImmediatePropagationStopped: Se, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) { var t = e.button; return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, function (e, t) { k.event.special[e] = { setup: function () { return De(this, e, Ne), !1 }, trigger: function () { return De(this, e), !0 }, delegateType: t } }), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { k.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), k.fn.extend({ on: function (e, t, n, r) { return Ae(this, e, t, n, r) }, one: function (e, t, n, r) { return Ae(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () { k.event.remove(this, e, n, t) }) } }); var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, qe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Oe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e } function Pe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function Re(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Me(e, t) { var n, r, i, o, a, s, u, l; if (1 === t.nodeType) { if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++)k.event.add(t, i, l[i][n]); J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u)) } } function Ie(n, r, i, o) { r = g.apply([], r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o) }); if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : b(u.textContent.replace(He, ""), u, l)) } return n } function We(e, t, n) { for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e } k.extend({ htmlPrefilter: function (e) { return e.replace(je, "<$1></$2>") }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)Me(o[r], a[r]); else Me(e, c); return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)if (G(n)) { if (t = n[Q.expando]) { if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle); n[Q.expando] = void 0 } n[J.expando] && (n[J.expando] = void 0) } } }), k.fn.extend({ detach: function (e) { return We(this, e, !0) }, remove: function (e) { return We(this, e) }, text: function (e) { return _(this, function (e) { return void 0 === e ? k.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return Ie(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e) }) }, prepend: function () { return Ie(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Oe(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return Ie(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return Ie(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return k.clone(this, e, t) }) }, html: function (e) { return _(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = k.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return Ie(this, arguments, function (e) { var t = this.parentNode; k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { k.fn[e] = function (e) { for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), Fe = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) }, Be = new RegExp(re.join("|"), "i"); function _e(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function ze(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (u) { s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u); var e = C.getComputedStyle(u); n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div"); u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), a }, scrollboxSize: function () { return e(), i } })) }(); var Ue = ["Webkit", "Moz", "ms"], Xe = E.createElement("div").style, Ve = {}; function Ge(e) { var t = k.cssProps[e] || Ve[e]; return t || (e in Xe ? e : Ve[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; while (n--) if ((e = Ue[n] + t) in Xe) return e }(e) || e) } var Ye = /^(none|table(?!-c[ea]).+)/, Qe = /^--/, Je = { position: "absolute", visibility: "hidden", display: "block" }, Ke = { letterSpacing: "0", fontWeight: "400" }; function Ze(e, t, n) { var r = ne.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function et(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u } function tt(e, t, n) { var r = Fe(e), i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), o = i, a = _e(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if ($e.test(a)) { if (!n) return a; a = "auto" } return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function nt(e, t, n, r, i) { return new nt.prototype.init(e, t, n, r, i) } k.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = _e(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = V(t), u = Qe.test(t), l = e.style; if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = V(t); return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), k.each(["height", "width"], function (e, u) { k.cssHooks[u] = { get: function (e, t, n) { if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () { return tt(e, u, n) }) }, set: function (e, t, n) { var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s) } } }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), k.each({ margin: "", padding: "", border: "Width" }, function (i, o) { k.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + re[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (k.cssHooks[i + o].set = Ze) }), k.fn.extend({ css: function (e, t) { return _(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Fe(e), i = t.length; a < i; a++)o[t[a]] = k.css(e, t[a], !1, r); return o } return void 0 !== n ? k.style(e, t, n) : k.css(e, t) }, e, t, 1 < arguments.length) } }), ((k.Tween = nt).prototype = { constructor: nt, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px") }, cur: function () { var e = nt.propHooks[this.prop]; return e && e.get ? e.get(this) : nt.propHooks._default.get(this) }, run: function (e) { var t, n = nt.propHooks[this.prop]; return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this } }).init.prototype = nt.prototype, (nt.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = nt.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, k.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, k.fx = nt.prototype.init, k.fx.step = {}; var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/; function lt() { it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick()) } function ct() { return C.setTimeout(function () { rt = void 0 }), rt = Date.now() } function ft(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = re[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function pt(e, t, n) { for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function dt(o, e, t) { var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: k.extend({}, e), opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t), originalProperties: e, originalOptions: t, startTime: rt || ct(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } k.Animation = k.extend(dt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return le(n.elem, e, ne.exec(t), n), n }] }, tweener: function (e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(R); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow"); for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, k.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], st.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || k.style(e, r) } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () { for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r]) })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? dt.prefilters.unshift(e) : dt.prefilters.push(e) } }), k.speed = function (e, t, n) { var r = e && "object" == typeof e ? k.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue) }, r }, k.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () { var e = dt(this, k.extend({}, t), o); (i || Q.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = Q.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || k.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0; for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), k.each(["toggle", "show", "hide"], function (e, r) { var i = k.fn[r]; k.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n) } }), k.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { k.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), k.timers = [], k.fx.tick = function () { var e, t = 0, n = k.timers; for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || k.fx.stop(), rt = void 0 }, k.fx.timer = function (e) { k.timers.push(e), k.fx.start() }, k.fx.interval = 13, k.fx.start = function () { it || (it = !0, lt()) }, k.fx.stop = function () { it = null }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function (r, e) { return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = C.setTimeout(e, r); t.stop = function () { C.clearTimeout(n) } }) }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value; var ht, gt = k.expr.attrHandle; k.fn.extend({ attr: function (e, t) { return _(this, k.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { k.removeAttr(this, e) }) } }), k.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(R); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), ht = { set: function (e, t, n) { return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n } }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = gt[t] || k.find.attr; gt[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r } }); var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i; function mt(e) { return (e.match(R) || []).join(" ") } function xt(e) { return e.getAttribute && e.getAttribute("class") || "" } function bt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [] } k.fn.extend({ prop: function (e, t) { return _(this, k.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[k.propFix[e] || e] }) } }), k.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = k.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (k.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { k.propFix[this.toLowerCase()] = this }), k.fn.extend({ addClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { k(this).addClass(t.call(this, e, xt(this))) }); if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = mt(r)) && n.setAttribute("class", s) } return this }, removeClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { k(this).removeClass(t.call(this, e, xt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { a = 0; while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " "); i !== (s = mt(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (i, t) { var o = typeof i, a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) { k(this).toggleClass(i.call(this, e, xt(this), t), t) }) : this.each(function () { var e, t, n, r; if (a) { t = 0, n = k(this), r = bt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0; return !1 } }); var wt = /\r/g; k.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) { return null == e ? "" : e + "" })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0 } }), k.extend({ valHooks: { option: { get: function (e) { var t = k.find.attr(e, "value"); return null != t ? t : mt(k.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = k(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = k.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), k.each(["radio", "checkbox"], function () { k.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t) } }, y.checkOn || (k.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function (e) { e.stopPropagation() }; k.extend(k.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = k.extend(new k.Event, n, { type: e, isSimulated: !0 }); k.event.trigger(r, null, t) } }), k.fn.extend({ trigger: function (e, t) { return this.each(function () { k.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return k.event.trigger(e, t, n, !0) } }), y.focusin || k.each({ focus: "focusin", blur: "focusout" }, function (n, r) { var i = function (e) { k.event.simulate(r, e.target, k.event.fix(e)) }; k.event.special[r] = { setup: function () { var e = this.ownerDocument || this, t = Q.access(e, r); t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this, t = Q.access(e, r) - 1; t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r)) } } }); var Et = C.location, kt = Date.now(), St = /\?/; k.parseXML = function (e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t }; var Nt = /\[\]$/, At = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, jt = /^(?:input|select|textarea|keygen)/i; function qt(n, e, r, i) { var t; if (Array.isArray(e)) k.each(e, function (e, t) { r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) qt(n + "[" + t + "]", e[t], r, i) } k.param = function (e, t) { var n, r = [], i = function (e, t) { var n = m(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () { i(this.name, this.value) }); else for (n in e) qt(n, e[n], t, i); return r.join("&") }, k.fn.extend({ serialize: function () { return k.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = k.prop(this, "elements"); return e ? k.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = k(this).val(); return null == n ? null : Array.isArray(n) ? k.map(n, function (e) { return { name: t.name, value: e.replace(At, "\r\n") } }) : { name: t.name, value: n.replace(At, "\r\n") } }).get() } }); var Lt = /%20/g, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/, Mt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Ft = E.createElement("a"); function Bt(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(R) || []; if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function _t(t, i, o, a) { var s = {}, u = t === Wt; function l(e) { var r; return s[e] = !0, k.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function zt(e, t) { var n, r, i = k.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && k.extend(!0, e, r), e } Ft.href = Et.href, k.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e) }, ajaxPrefilter: Bt(It), ajaxTransport: Bt(Wt), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T; for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = C.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return k.get(e, t, n, "json") }, getScript: function (e, t) { return k.get(e, void 0, t, "script") } }), k.each(["get", "post"], function (e, i) { k[i] = function (e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({ url: e, type: i, dataType: r, data: t, success: n }, k.isPlainObject(e) && e)) } }), k._evalUrl = function (e, t) { return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { k.globalEval(e, t) } }) }, k.fn.extend({ wrapAll: function (e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return m(n) ? this.each(function (e) { k(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = k(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = m(t); return this.each(function (e) { k(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { k(this).replaceWith(this.childNodes) }), this } }), k.expr.pseudos.hidden = function (e) { return !k.expr.pseudos.visible(e) }, k.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, k.ajaxSettings.xhr = function () { try { return new C.XMLHttpRequest } catch (e) { } }; var Ut = { 0: 200, 1223: 204 }, Xt = k.ajaxSettings.xhr(); y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) { var o, a; if (y.cors || Xt && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && C.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), k.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return k.globalEval(e), e } } }), k.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), k.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = k("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/; k.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Gt.pop() || k.expando + "_" + kt++; return this[e] = !0, e } }), k.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || k.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function () { o = arguments }, n.always(function () { void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes))); var r, i, o }, k.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { k.fn[t] = function (e) { return this.on(t, e) } }), k.expr.pseudos.animated = function (t) { return k.grep(k.timers, function (e) { return t === e.elem }).length }, k.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, k.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { k.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === k.css(e, "position")) e = e.offsetParent; return e || ie }) } }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; k.fn[t] = function (e) { return _(this, function (e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), k.each(["top", "left"], function (e, n) { k.cssHooks[n] = ze(y.pixelPosition, function (e, t) { if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t }) }), k.each({ Height: "height", Width: "width" }, function (a, s) { k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { k.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return _(this, function (e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { k.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), k.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), k.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), k.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || k.guid++, i }, k.holdReady = function (e) { e ? k.readyWait++ : k.ready(!0) }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) { var t = k.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function () { return k }); var Qt = C.jQuery, Jt = C.$; return k.noConflict = function (e) { return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k }, e || (C.jQuery = C.$ = k), k });


/* popper JS */
/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) { 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t() })(this, function () { 'use strict'; function e(e) { return e && '[object Function]' === {}.toString.call(e) } function t(e, t) { if (1 !== e.nodeType) return []; var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null); return t ? n[t] : n } function o(e) { return 'HTML' === e.nodeName ? e : e.parentNode || e.host } function n(e) { if (!e) return document.body; switch (e.nodeName) { case 'HTML': case 'BODY': return e.ownerDocument.body; case '#document': return e.body; }var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY; return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e)) } function r(e) { return 11 === e ? pe : 10 === e ? se : pe || se } function p(e) { if (!e) return document.documentElement; for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;)n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement } function s(e) { var t = e.nodeName; return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e) } function d(e) { return null === e.parentNode ? e : d(e.parentNode) } function a(e, t) { if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange(); r.setStart(n, 0), r.setEnd(i, 0); var l = r.commonAncestorContainer; if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l); var f = d(e); return f.host ? a(f.host, t) : a(e, d(t).host) } function l(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName; if ('BODY' === n || 'HTML' === n) { var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i; return r[o] } return e[o] } function f(e, t) { var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'), r = o ? -1 : 1; return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e } function m(e, t) { var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom'; return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10) } function h(e, t, o, n) { return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0) } function c(e) { var t = e.body, o = e.documentElement, n = r(10) && getComputedStyle(o); return { height: h('Height', t, o, n), width: h('Width', t, o, n) } } function g(e) { return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height }) } function u(e) { var o = {}; try { if (r(10)) { o = e.getBoundingClientRect(); var n = l(e, 'top'), i = l(e, 'left'); o.top += n, o.left += i, o.bottom += n, o.right += i } else o = e.getBoundingClientRect() } catch (t) { } var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top }, s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}, d = s.width || e.clientWidth || p.right - p.left, a = s.height || e.clientHeight || p.bottom - p.top, f = e.offsetWidth - d, h = e.offsetHeight - a; if (f || h) { var u = t(e); f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h } return g(p) } function b(e, o) { var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth, 10), c = parseFloat(m.borderLeftWidth, 10); i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0)); var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height }); if (b.marginTop = 0, b.marginLeft = 0, !p && s) { var w = parseFloat(m.marginTop, 10), y = parseFloat(m.marginLeft, 10); b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y } return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b } function w(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = ee(o.clientWidth, window.innerWidth || 0), r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, 'left'), d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r }; return g(d) } function y(e) { var n = e.nodeName; if ('BODY' === n || 'HTML' === n) return !1; if ('fixed' === t(e, 'position')) return !0; var i = o(e); return !!i && y(i) } function E(e) { if (!e || !e.parentElement || r()) return document.documentElement; for (var o = e.parentElement; o && 'none' === t(o, 'transform');)o = o.parentElement; return o || document.documentElement } function v(e, t, i, r) { var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], s = { top: 0, left: 0 }, d = p ? E(e) : a(e, t); if ('viewport' === r) s = w(d, p); else { var l; 'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r; var f = b(l, d, p); if ('HTML' === l.nodeName && !y(d)) { var m = c(e.ownerDocument), h = m.height, g = m.width; s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left } else s = f } i = i || 0; var u = 'number' == typeof i; return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s } function x(e) { var t = e.width, o = e.height; return t * o } function O(e, t, o, n, i) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf('auto')) return e; var p = v(o, n, r, i), s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } }, d = Object.keys(s).map(function (e) { return fe({ key: e }, s[e], { area: x(s[e]) }) }).sort(function (e, t) { return t.area - e.area }), a = d.filter(function (e) { var t = e.width, n = e.height; return t >= o.clientWidth && n >= o.clientHeight }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1]; return l + (f ? '-' + f : '') } function L(e, t, o) { var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, i = n ? E(t) : a(t, o); return b(o, i, n) } function S(e) { var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0), i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = { width: e.offsetWidth + i, height: e.offsetHeight + n }; return r } function T(e) { var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return e.replace(/left|right|bottom|top/g, function (e) { return t[e] }) } function D(e, t, o) { o = o.split('-')[0]; var n = S(e), i = { width: n.width, height: n.height }, r = -1 !== ['right', 'left'].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height'; return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i } function C(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] } function N(e, t, o) { if (Array.prototype.findIndex) return e.findIndex(function (e) { return e[t] === o }); var n = C(e, function (e) { return e[t] === o }); return e.indexOf(n) } function P(t, o, n) { var i = void 0 === n ? t : t.slice(0, N(t, 'name', n)); return i.forEach(function (t) { t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var n = t['function'] || t.fn; t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t)) }), o } function k() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }; e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } } function W(e, t) { return e.some(function (e) { var o = e.name, n = e.enabled; return n && o === t }) } function H(e) { for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) { var i = t[n], r = i ? '' + i + o : e; if ('undefined' != typeof document.body.style[r]) return r } return null } function B() { return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this } function A(e) { var t = e.ownerDocument; return t ? t.defaultView : window } function M(e, t, o, i) { var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e; p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p) } function F(e, t, o, i) { o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 }); var r = n(e); return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o } function I() { this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate)) } function R(e, t) { return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) { e.removeEventListener('scroll', t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t } function U() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state)) } function Y(e) { return '' !== e && !isNaN(parseFloat(e)) && isFinite(e) } function j(e, t) { Object.keys(t).forEach(function (o) { var n = ''; -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n }) } function V(e, t) { Object.keys(t).forEach(function (o) { var n = t[o]; !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]) }) } function q(e, t) { var o = e.offsets, n = o.popper, i = o.reference, r = $, p = function (e) { return e }, s = r(i.width), d = r(n.width), a = -1 !== ['left', 'right'].indexOf(e.placement), l = -1 !== e.placement.indexOf('-'), f = t ? a || l || s % 2 == d % 2 ? r : Z : p, m = t ? r : p; return { left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left), top: m(n.top), bottom: m(n.bottom), right: f(n.right) } } function K(e, t, o) { var n = C(e, function (e) { var o = e.name; return o === t }), i = !!n && e.some(function (e) { return e.name === o && e.enabled && e.order < n.order }); if (!i) { var r = '`' + t + '`'; console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!') } return i } function z(e) { return 'end' === e ? 'start' : 'start' === e ? 'end' : e } function G(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = ce.indexOf(e), n = ce.slice(o + 1).concat(ce.slice(0, o)); return t ? n.reverse() : n } function _(e, t, o, n) { var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2]; if (!r) return e; if (0 === p.indexOf('%')) { var s; switch (p) { case '%p': s = o; break; case '%': case '%r': default: s = n; }var d = g(s); return d[t] / 100 * r } if ('vh' === p || 'vw' === p) { var a; return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r } return r } function X(e, t, o, n) { var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) { return e.trim() }), s = p.indexOf(C(p, function (e) { return -1 !== e.search(/,|\s/) })); p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function (e, n) { var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1; return e.reduce(function (e, t) { return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t) }, []).map(function (e) { return _(e, i, t, o) }) }), a.forEach(function (e, t) { e.forEach(function (o, n) { Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1)) }) }), i } function J(e, t) { var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0]; return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e } for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1)if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) { ne = 1; break } var i = te && window.Promise, re = i ? function (e) { var t = !1; return function () { t || (t = !0, window.Promise.resolve().then(function () { t = !1, e() })) } } : function (e) { var t = !1; return function () { t || (t = !0, setTimeout(function () { t = !1, e() }, ne)) } }, pe = te && !!(window.MSInputMethodContext && document.documentMode), se = te && /MSIE 10/.test(navigator.userAgent), de = function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function') }, ae = function () { function e(e, t) { for (var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } return function (t, o, n) { return o && e(t.prototype, o), n && e(t, n), t } }(), le = function (e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e }, fe = Object.assign || function (e) { for (var t, o = 1; o < arguments.length; o++)for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e }, me = te && /Firefox/i.test(navigator.userAgent), he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], ce = he.slice(3), ge = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' }, ue = function () { function t(o, n) { var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; de(this, t), this.scheduleUpdate = function () { return requestAnimationFrame(i.update) }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) { i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) { return fe({ name: e }, i.options.modifiers[e]) }).sort(function (e, t) { return e.order - t.order }), this.modifiers.forEach(function (t) { t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) }), this.update(); var p = this.options.eventsEnabled; p && this.enableEventListeners(), this.state.eventsEnabled = p } return ae(t, [{ key: 'update', value: function () { return k.call(this) } }, { key: 'destroy', value: function () { return B.call(this) } }, { key: 'enableEventListeners', value: function () { return I.call(this) } }, { key: 'disableEventListeners', value: function () { return U.call(this) } }]), t }(); return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () { }, onUpdate: function () { }, modifiers: { shift: { order: 100, enabled: !0, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = t.split('-')[1]; if (n) { var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', l = { start: le({}, d, r[d]), end: le({}, d, r[d] + r[a] - p[a]) }; e.offsets.popper = fe({}, p, l[n]) } return e } }, offset: { order: 200, enabled: !0, fn: J, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function (e, t) { var o = t.boundariesElement || p(e.instance.popper); e.instance.reference === o && (o = p(o)); var n = H('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n]; i.top = '', i.left = '', i[n] = ''; var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed); i.top = r, i.left = s, i[n] = d, t.boundaries = a; var l = t.priority, f = e.offsets.popper, m = { primary: function (e) { var o = f[e]; return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o) }, secondary: function (e) { var o = 'right' === e ? 'left' : 'top', n = f[o]; return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n) } }; return l.forEach(function (e) { var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary'; f = fe({}, f, m[t](e)) }), e.offsets.popper = f, e }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function (e) { var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z, p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height'; return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e } }, arrow: { order: 500, enabled: !0, fn: function (e, o) { var n; if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var i = o.element; if ('string' == typeof i) { if (i = e.instance.popper.querySelector(i), !i) return e; } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right', u = S(i)[l]; d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper); var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper), y = parseFloat(w['margin' + f], 10), E = parseFloat(w['border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - y - E; return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function (e, t) { if (W(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = []; switch (t.behavior) { case ge.FLIP: p = [n, i]; break; case ge.CLOCKWISE: p = G(n); break; case ge.COUNTERCLOCKWISE: p = G(n, !0); break; default: p = t.behavior; }return p.forEach(function (s, d) { if (n !== s || p.length === d + 1) return e; n = e.placement.split('-')[0], i = T(n); var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u, w = -1 !== ['top', 'bottom'].indexOf(n), y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u); (m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip')) }), e }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o); return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e } }, hide: { order: 800, enabled: !0, fn: function (e) { if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference, o = C(e.instance.modifiers, function (e) { return 'preventOverflow' === e.name }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) { if (!0 === e.hide) return e; e.hide = !0, e.attributes['x-out-of-boundaries'] = '' } else { if (!1 === e.hide) return e; e.hide = !1, e.attributes['x-out-of-boundaries'] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function (e, t) { var o = t.x, n = t.y, i = e.offsets.popper, r = C(e.instance.modifiers, function (e) { return 'applyStyle' === e.name }).gpuAcceleration; void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = { position: i.position }, h = q(e, 2 > window.devicePixelRatio || !me), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = H('transform'); if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else { var w = 'bottom' == c ? -1 : 1, y = 'right' == g ? -1 : 1; m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g } var E = { "x-placement": e.placement }; return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function (e) { return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e }, onLoad: function (e, t, o, n, i) { var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return t.setAttribute('x-placement', p), j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o }, gpuAcceleration: void 0 } } }, ue });
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper) }(this, function (t, g, u) { "use strict"; function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } function l(o) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}, e = Object.keys(r); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) { return Object.getOwnPropertyDescriptor(r, t).enumerable }))), e.forEach(function (t) { var e, n, i; e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i }) } return o } g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u; var e = "transitionend"; function n(t) { var e = this, n = !1; return g(this).one(_.TRANSITION_END, function () { n = !0 }), setTimeout(function () { n || _.triggerTransitionEnd(e) }, t), this } var _ = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, getSelectorFromElement: function (t) { var e = t.getAttribute("data-target"); if (!e || "#" === e) { var n = t.getAttribute("href"); e = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(e) ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function (t) { if (!t) return 0; var e = g(t).css("transition-duration"), n = g(t).css("transition-delay"), i = parseFloat(e), o = parseFloat(n); return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0 }, reflow: function (t) { return t.offsetHeight }, triggerTransitionEnd: function (t) { g(t).trigger(e) }, supportsTransitionEnd: function () { return Boolean(e) }, isElement: function (t) { return (t[0] || t).nodeType }, typeCheckConfig: function (t, e, n) { for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) { var o = n[i], r = e[i], s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".') } var a }, findShadowRoot: function (t) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null; var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } }; g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = { bindType: e, delegateType: e, handle: function (t) { if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }; var o = "alert", r = "bs.alert", a = "." + r, c = g.fn[o], h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", m = "show", p = function () { function i(t) { this._element = t } var t = i.prototype; return t.close = function (t) { var e = this._element; t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, t.dispose = function () { g.removeData(this._element, r), this._element = null }, t._getRootElement = function (t) { var e = _.getSelectorFromElement(t), n = !1; return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n }, t._triggerCloseEvent = function (t) { var e = g.Event(h.CLOSE); return g(t).trigger(e), e }, t._removeElement = function (e) { var n = this; if (g(e).removeClass(m), g(e).hasClass(d)) { var t = _.getTransitionDurationFromElement(e); g(e).one(_.TRANSITION_END, function (t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t) } else this._destroyElement(e) }, t._destroyElement = function (t) { g(t).detach().trigger(h.CLOSED).remove() }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this), e = t.data(r); e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this) }) }, i._handleDismiss = function (e) { return function (t) { t && t.preventDefault(), e.close(this) } }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }]), i }(); g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () { return g.fn[o] = c, p._jQueryInterface }; var v = "button", y = "bs.button", E = "." + y, C = ".data-api", T = g.fn[v], S = "active", b = "btn", I = "focus", D = '[data-toggle^="button"]', w = '[data-toggle="buttons"]', A = 'input:not([type="hidden"])', N = ".active", O = ".btn", k = { CLICK_DATA_API: "click" + E + C, FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C }, P = function () { function n(t) { this._element = t } var t = n.prototype; return t.toggle = function () { var t = !0, e = !0, n = g(this._element).closest(w)[0]; if (n) { var i = this._element.querySelector(A); if (i) { if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1; else { var o = n.querySelector(N); o && g(o).removeClass(S) } if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return; i.checked = !this._element.classList.contains(S), g(i).trigger("change") } i.focus(), e = !1 } } e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S) }, t.dispose = function () { g.removeData(this._element, y), this._element = null }, n._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(y); t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]() }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.3.1" } }]), n }(); g(document).on(k.CLICK_DATA_API, D, function (t) { t.preventDefault(); var e = t.target; g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle") }).on(k.FOCUS_BLUR_DATA_API, D, function (t) { var e = g(t.target).closest(O)[0]; g(e).toggleClass(I, /^focus(in)?$/.test(t.type)) }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () { return g.fn[v] = T, P._jQueryInterface }; var L = "carousel", j = "bs.carousel", H = "." + j, R = ".data-api", x = g.fn[L], F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 }, U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, W = "next", q = "prev", M = "left", K = "right", Q = { SLIDE: "slide" + H, SLID: "slid" + H, KEYDOWN: "keydown" + H, MOUSEENTER: "mouseenter" + H, MOUSELEAVE: "mouseleave" + H, TOUCHSTART: "touchstart" + H, TOUCHMOVE: "touchmove" + H, TOUCHEND: "touchend" + H, POINTERDOWN: "pointerdown" + H, POINTERUP: "pointerup" + H, DRAG_START: "dragstart" + H, LOAD_DATA_API: "load" + H + R, CLICK_DATA_API: "click" + H + R }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", X = "carousel-item-left", $ = "carousel-item-next", G = "carousel-item-prev", J = "pointer-event", Z = ".active", tt = ".active.carousel-item", et = ".carousel-item", nt = ".carousel-item img", it = ".carousel-item-next, .carousel-item-prev", ot = ".carousel-indicators", rt = "[data-slide], [data-slide-to]", st = '[data-ride="carousel"]', at = { TOUCH: "touch", PEN: "pen" }, lt = function () { function r(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var t = r.prototype; return t.next = function () { this._isSliding || this._slide(W) }, t.nextWhenVisible = function () { !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next() }, t.prev = function () { this._isSliding || this._slide(q) }, t.pause = function (t) { t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function (t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function (t) { var e = this; this._activeElement = this._element.querySelector(tt); var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () { return e.to(t) }); else { if (n === t) return this.pause(), void this.cycle(); var i = n < t ? W : q; this._slide(i, this._items[t]) } }, t.dispose = function () { g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function (t) { return t = l({}, F, t), _.typeCheckConfig(L, t, U), t }, t._handleSwipe = function () { var t = Math.abs(this.touchDeltaX); if (!(t <= 40)) { var e = t / this.touchDeltaX; 0 < e && this.prev(), e < 0 && this.next() } }, t._addEventListeners = function () { var e = this; this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) { return e._keydown(t) }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) { return e.pause(t) }).on(Q.MOUSELEAVE, function (t) { return e.cycle(t) }), this._config.touch && this._addTouchEventListeners() }, t._addTouchEventListeners = function () { var n = this; if (this._touchSupported) { var e = function (t) { n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX) }, i = function (t) { n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) { return n.cycle(t) }, 500 + n._config.interval)) }; g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) { return t.preventDefault() }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) { return e(t) }), g(this._element).on(Q.POINTERUP, function (t) { return i(t) }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) { return e(t) }), g(this._element).on(Q.TOUCHMOVE, function (t) { var e; (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX }), g(this._element).on(Q.TOUCHEND, function (t) { return i(t) })) } }, t._keydown = function (t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) { case 37: t.preventDefault(), this.prev(); break; case 39: t.preventDefault(), this.next() } }, t._getItemIndex = function (t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t) }, t._getItemByDirection = function (t, e) { var n = t === W, i = t === q, o = this._getItemIndex(e), r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return e; var s = (o + (t === q ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, t._triggerSlideEvent = function (t, e) { var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(tt)), o = g.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n }); return g(this._element).trigger(o), o }, t._setActiveIndicatorElement = function (t) { if (this._indicatorsElement) { var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z)); g(e).removeClass(V); var n = this._indicatorsElement.children[this._getItemIndex(t)]; n && g(n).addClass(V) } }, t._slide = function (t, e) { var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval); if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) { this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l); var u = g.Event(Q.SLID, { relatedTarget: l, direction: o, from: a, to: c }); if (g(this._element).hasClass(Y)) { g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n); var f = parseInt(l.getAttribute("data-interval"), 10); this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval; var d = _.getTransitionDurationFromElement(s); g(s).one(_.TRANSITION_END, function () { g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () { return g(r._element).trigger(u) }, 0) }).emulateTransitionEnd(d) } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u); h && this.cycle() } }, r._jQueryInterface = function (i) { return this.each(function () { var t = g(this).data(j), e = l({}, F, g(this).data()); "object" == typeof i && (e = l({}, e, i)); var n = "string" == typeof i ? i : e.slide; if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } else e.interval && e.ride && (t.pause(), t.cycle()) }) }, r._dataApiClickHandler = function (t) { var e = _.getSelectorFromElement(this); if (e) { var n = g(e)[0]; if (n && g(n).hasClass(B)) { var i = l({}, g(n).data(), g(this).data()), o = this.getAttribute("data-slide-to"); o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault() } } }, s(r, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return F } }]), r }(); g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () { for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) { var i = g(t[e]); lt._jQueryInterface.call(i, i.data()) } }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () { return g.fn[L] = x, lt._jQueryInterface }; var ct = "collapse", ht = "bs.collapse", ut = "." + ht, ft = g.fn[ct], dt = { toggle: !0, parent: "" }, gt = { toggle: "boolean", parent: "(string|element)" }, _t = { SHOW: "show" + ut, SHOWN: "shown" + ut, HIDE: "hide" + ut, HIDDEN: "hidden" + ut, CLICK_DATA_API: "click" + ut + ".data-api" }, mt = "show", pt = "collapse", vt = "collapsing", yt = "collapsed", Et = "width", Ct = "height", Tt = ".show, .collapsing", St = '[data-toggle="collapse"]', bt = function () { function a(e, t) { this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) { var r = n[i], s = _.getSelectorFromElement(r), a = [].slice.call(document.querySelectorAll(s)).filter(function (t) { return t === e }); null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var t = a.prototype; return t.toggle = function () { g(this._element).hasClass(mt) ? this.hide() : this.show() }, t.show = function () { var t, e, n = this; if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) { return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt) })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) { var i = g.Event(_t.SHOW); if (g(this._element).trigger(i), !i.isDefaultPrevented()) { t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null)); var o = this._getDimension(); g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0); var r = "scroll" + (o[0].toUpperCase() + o.slice(1)), s = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, function () { g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN) }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px" } } }, t.hide = function () { var t = this; if (!this._isTransitioning && g(this._element).hasClass(mt)) { var e = g.Event(_t.HIDE); if (g(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension(); this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt); var i = this._triggerArray.length; if (0 < i) for (var o = 0; o < i; o++) { var r = this._triggerArray[o], s = _.getSelectorFromElement(r); if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1) } this.setTransitioning(!0); this._element.style[n] = ""; var a = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, function () { t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN) }).emulateTransitionEnd(a) } } }, t.setTransitioning = function (t) { this._isTransitioning = t }, t.dispose = function () { g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function (t) { return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t }, t._getDimension = function () { return g(this._element).hasClass(Et) ? Et : Ct }, t._getParent = function () { var t, n = this; _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent); var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i = [].slice.call(t.querySelectorAll(e)); return g(i).each(function (t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t }, t._addAriaAndCollapsedClass = function (t, e) { var n = g(t).hasClass(mt); e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n) }, a._getTargetFromElement = function (t) { var e = _.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, a._jQueryInterface = function (i) { return this.each(function () { var t = g(this), e = t.data(ht), n = l({}, dt, t.data(), "object" == typeof i && i ? i : {}); if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) { if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"'); e[i]() } }) }, s(a, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return dt } }]), a }(); g(document).on(_t.CLICK_DATA_API, St, function (t) { "A" === t.currentTarget.tagName && t.preventDefault(); var n = g(this), e = _.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(e)); g(i).each(function () { var t = g(this), e = t.data(ht) ? "toggle" : n.data(); bt._jQueryInterface.call(t, e) }) }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () { return g.fn[ct] = ft, bt._jQueryInterface }; var It = "dropdown", Dt = "bs.dropdown", wt = "." + Dt, At = ".data-api", Nt = g.fn[It], Ot = new RegExp("38|40|27"), kt = { HIDE: "hide" + wt, HIDDEN: "hidden" + wt, SHOW: "show" + wt, SHOWN: "shown" + wt, CLICK: "click" + wt, CLICK_DATA_API: "click" + wt + At, KEYDOWN_DATA_API: "keydown" + wt + At, KEYUP_DATA_API: "keyup" + wt + At }, Pt = "disabled", Lt = "show", jt = "dropup", Ht = "dropright", Rt = "dropleft", xt = "dropdown-menu-right", Ft = "position-static", Ut = '[data-toggle="dropdown"]', Wt = ".dropdown form", qt = ".dropdown-menu", Mt = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Qt = "top-start", Bt = "top-end", Vt = "bottom-start", Yt = "bottom-end", zt = "right-start", Xt = "left-start", $t = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Gt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Jt = function () { function c(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var t = c.prototype; return t.toggle = function () { if (!this._element.disabled && !g(this._element).hasClass(Pt)) { var t = c._getParentFromElement(this._element), e = g(this._menu).hasClass(Lt); if (c._clearMenus(), !e) { var n = { relatedTarget: this._element }, i = g.Event(kt.SHOW, n); if (g(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var o = this._element; "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n)) } } } }, t.show = function () { if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) { var t = { relatedTarget: this._element }, e = g.Event(kt.SHOW, t), n = c._getParentFromElement(this._element); g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t))) } }, t.hide = function () { if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) { var t = { relatedTarget: this._element }, e = g.Event(kt.HIDE, t), n = c._getParentFromElement(this._element); g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t))) } }, t.dispose = function () { g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function () { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function () { var e = this; g(this._element).on(kt.CLICK, function (t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, t._getConfig = function (t) { return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t }, t._getMenuElement = function () { if (!this._menu) { var t = c._getParentFromElement(this._element); t && (this._menu = t.querySelector(qt)) } return this._menu }, t._getPlacement = function () { var t = g(this._element.parentNode), e = Vt; return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e }, t._detectNavbar = function () { return 0 < g(this._element).closest(".navbar").length }, t._getOffset = function () { var e = this, t = {}; return "function" == typeof this._config.offset ? t.fn = function (t) { return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t } : t.offset = this._config.offset, t }, t._getPopperConfig = function () { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t }, c._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(Dt); if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, c._clearMenus = function (t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) { var o = c._getParentFromElement(e[n]), r = g(e[n]).data(Dt), s = { relatedTarget: e[n] }; if (t && "click" === t.type && (s.clickEvent = t), r) { var a = r._menu; if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) { var l = g.Event(kt.HIDE, s); g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s))) } } } }, c._getParentFromElement = function (t) { var e, n = _.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, c._dataApiKeydownHandler = function (t) { if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) { var e = c._getParentFromElement(this), n = g(e).hasClass(Lt); if (n && (!n || 27 !== t.which && 32 !== t.which)) { var i = [].slice.call(e.querySelectorAll(Kt)); if (0 !== i.length) { var o = i.indexOf(t.target); 38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus() } } else { if (27 === t.which) { var r = e.querySelector(Ut); g(r).trigger("focus") } g(this).trigger("click") } } }, s(c, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return $t } }, { key: "DefaultType", get: function () { return Gt } }]), c }(); g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) { t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle") }).on(kt.CLICK_DATA_API, Wt, function (t) { t.stopPropagation() }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () { return g.fn[It] = Nt, Jt._jQueryInterface }; var Zt = "modal", te = "bs.modal", ee = "." + te, ne = g.fn[Zt], ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, oe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, re = { HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api" }, se = "modal-dialog-scrollable", ae = "modal-scrollbar-measure", le = "modal-backdrop", ce = "modal-open", he = "fade", ue = "show", fe = ".modal-dialog", de = ".modal-body", ge = '[data-toggle="modal"]', _e = '[data-dismiss="modal"]', me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", pe = ".sticky-top", ve = function () { function o(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var t = o.prototype; return t.toggle = function (t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function (t) { var e = this; if (!this._isShown && !this._isTransitioning) { g(this._element).hasClass(he) && (this._isTransitioning = !0); var n = g.Event(re.SHOW, { relatedTarget: t }); g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) { return e.hide(t) }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () { g(e._element).one(re.MOUSEUP_DISMISS, function (t) { g(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function () { return e._showElement(t) })) } }, t.hide = function (t) { var e = this; if (t && t.preventDefault(), this._isShown && !this._isTransitioning) { var n = g.Event(re.HIDE); if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = g(this._element).hasClass(he); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) { var o = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, function (t) { return e._hideModal(t) }).emulateTransitionEnd(o) } else this._hideModal() } } }, t.dispose = function () { [window, this._element, this._dialog].forEach(function (t) { return g(t).off(ee) }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, t.handleUpdate = function () { this._adjustDialog() }, t._getConfig = function (t) { return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t }, t._showElement = function (t) { var e = this, n = g(this._element).hasClass(he); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus(); var i = g.Event(re.SHOWN, { relatedTarget: t }), o = function () { e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i) }; if (n) { var r = _.getTransitionDurationFromElement(this._dialog); g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o() }, t._enforceFocus = function () { var e = this; g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) { document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus() }) }, t._setEscapeEvent = function () { var e = this; this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS) }, t._setResizeEvent = function () { var e = this; this._isShown ? g(window).on(re.RESIZE, function (t) { return e.handleUpdate(t) }) : g(window).off(re.RESIZE) }, t._hideModal = function () { var t = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () { g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN) }) }, t._removeBackdrop = function () { this._backdrop && (g(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function (t) { var e = this, n = g(this._element).hasClass(he) ? he : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return; if (!n) return void t(); var i = _.getTransitionDurationFromElement(this._backdrop); g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { g(this._backdrop).removeClass(ue); var o = function () { e._removeBackdrop(), t && t() }; if (g(this._element).hasClass(he)) { var r = _.getTransitionDurationFromElement(this._backdrop); g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o() } else t && t() }, t._adjustDialog = function () { var t = this._element.scrollHeight > document.documentElement.clientHeight; !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function () { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function () { var t = document.body.getBoundingClientRect(); this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, t._setScrollbar = function () { var o = this; if (this._isBodyOverflowing) { var t = [].slice.call(document.querySelectorAll(me)), e = [].slice.call(document.querySelectorAll(pe)); g(t).each(function (t, e) { var n = e.style.paddingRight, i = g(e).css("padding-right"); g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px") }), g(e).each(function (t, e) { var n = e.style.marginRight, i = g(e).css("margin-right"); g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px") }); var n = document.body.style.paddingRight, i = g(document.body).css("padding-right"); g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") } g(document.body).addClass(ce) }, t._resetScrollbar = function () { var t = [].slice.call(document.querySelectorAll(me)); g(t).each(function (t, e) { var n = g(e).data("padding-right"); g(e).removeData("padding-right"), e.style.paddingRight = n || "" }); var e = [].slice.call(document.querySelectorAll("" + pe)); g(e).each(function (t, e) { var n = g(e).data("margin-right"); "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right") }); var n = g(document.body).data("padding-right"); g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, t._getScrollbarWidth = function () { var t = document.createElement("div"); t.className = ae, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, o._jQueryInterface = function (n, i) { return this.each(function () { var t = g(this).data(te), e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {}); if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n](i) } else e.show && t.show(i) }) }, s(o, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return ie } }]), o }(); g(document).on(re.CLICK_DATA_API, ge, function (t) { var e, n = this, i = _.getSelectorFromElement(this); i && (e = document.querySelector(i)); var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var r = g(e).one(re.SHOW, function (t) { t.isDefaultPrevented() || r.one(re.HIDDEN, function () { g(n).is(":visible") && n.focus() }) }); ve._jQueryInterface.call(g(e), o, this) }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () { return g.fn[Zt] = ne, ve._jQueryInterface }; var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Ee = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i; function Se(t, s, e) { if (0 === t.length) return t; if (e && "function" == typeof e) return e(t); for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function (t, e) { var n = l[t], i = n.nodeName.toLowerCase(); if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue"; var o = [].slice.call(n.attributes), r = [].concat(s["*"] || [], s[i] || []); o.forEach(function (t) { (function (t, e) { var n = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te)); for (var i = e.filter(function (t) { return t instanceof RegExp }), o = 0, r = i.length; o < r; o++)if (n.match(i[o])) return !0; return !1 })(t, r) || n.removeAttribute(t.nodeName) }) }, o = 0, r = l.length; o < r; o++)i(o); return n.body.innerHTML } var be = "tooltip", Ie = "bs.tooltip", De = "." + Ie, we = g.fn[be], Ae = "bs-tooltip", Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"), Oe = ["sanitize", "whiteList", "sanitizeFn"], ke = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" }, Pe = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, Le = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Ee }, je = "show", He = "out", Re = { HIDE: "hide" + De, HIDDEN: "hidden" + De, SHOW: "show" + De, SHOWN: "shown" + De, INSERTED: "inserted" + De, CLICK: "click" + De, FOCUSIN: "focusin" + De, FOCUSOUT: "focusout" + De, MOUSEENTER: "mouseenter" + De, MOUSELEAVE: "mouseleave" + De }, xe = "fade", Fe = "show", Ue = ".tooltip-inner", We = ".arrow", qe = "hover", Me = "focus", Ke = "click", Qe = "manual", Be = function () { function i(t, e) { if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)"); this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var t = i.prototype; return t.enable = function () { this._isEnabled = !0 }, t.disable = function () { this._isEnabled = !1 }, t.toggleEnabled = function () { this._isEnabled = !this._isEnabled }, t.toggle = function (t) { if (this._isEnabled) if (t) { var e = this.constructor.DATA_KEY, n = g(t.currentTarget).data(e); n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this); this._enter(null, this) } }, t.dispose = function () { clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function () { var e = this; if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements"); var t = g.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { g(this.element).trigger(t); var n = _.findShadowRoot(this.element), i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element); if (t.isDefaultPrevented() || !i) return; var o = this.getTipElement(), r = _.getUID(this.constructor.NAME); o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, a = this._getAttachment(s); this.addAttachmentClass(a); var l = this._getContainer(); g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, { placement: a, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: We }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function (t) { return e._handlePopperPlacementChange(t) } }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop); var c = function () { e.config.animation && e._fixTransition(); var t = e._hoverState; e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e) }; if (g(this.tip).hasClass(xe)) { var h = _.getTransitionDurationFromElement(this.tip); g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h) } else c() } }, t.hide = function (t) { var e = this, n = this.getTipElement(), i = g.Event(this.constructor.Event.HIDE), o = function () { e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (g(this.element).trigger(i), !i.isDefaultPrevented()) { if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) { var r = _.getTransitionDurationFromElement(n); g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o(); this._hoverState = "" } }, t.update = function () { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function () { return Boolean(this.getTitle()) }, t.addAttachmentClass = function (t) { g(this.getTipElement()).addClass(Ae + "-" + t) }, t.getTipElement = function () { return this.tip = this.tip || g(this.config.template)[0], this.tip }, t.setContent = function () { var t = this.getTipElement(); this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe) }, t.setElementContent = function (t, e) { "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text()) }, t.getTitle = function () { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getOffset = function () { var e = this, t = {}; return "function" == typeof this.config.offset ? t.fn = function (t) { return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t } : t.offset = this.config.offset, t }, t._getContainer = function () { return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container) }, t._getAttachment = function (t) { return Pe[t.toUpperCase()] }, t._setListeners = function () { var i = this; this.config.trigger.split(" ").forEach(function (t) { if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) { return i.toggle(t) }); else if (t !== Qe) { var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT; g(i.element).on(e, i.config.selector, function (t) { return i._enter(t) }).on(n, i.config.selector, function (t) { return i._leave(t) }) } }), g(this.element).closest(".modal").on("hide.bs.modal", function () { i.element && i.hide() }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, t._fixTitle = function () { var t = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, t._enter = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () { e._hoverState === je && e.show() }, e.config.delay.show) : e.show()) }, t._leave = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () { e._hoverState === He && e.hide() }, e.config.delay.hide) : e.hide()) }, t._isWithActiveTrigger = function () { for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 }, t._getConfig = function (t) { var e = g(this.element).data(); return Object.keys(e).forEach(function (t) { -1 !== Oe.indexOf(t) && delete e[t] }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t }, t._getDelegateConfig = function () { var t = {}; if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, t._cleanTipClass = function () { var t = g(this.getTipElement()), e = t.attr("class").match(Ne); null !== e && e.length && t.removeClass(e.join("")) }, t._handlePopperPlacementChange = function (t) { var e = t.instance; this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function () { var t = this.getTipElement(), e = this.config.animation; null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this).data(Ie), e = "object" == typeof n && n; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return Le } }, { key: "NAME", get: function () { return be } }, { key: "DATA_KEY", get: function () { return Ie } }, { key: "Event", get: function () { return Re } }, { key: "EVENT_KEY", get: function () { return De } }, { key: "DefaultType", get: function () { return ke } }]), i }(); g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () { return g.fn[be] = we, Be._jQueryInterface }; var Ve = "popover", Ye = "bs.popover", ze = "." + Ye, Xe = g.fn[Ve], $e = "bs-popover", Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"), Je = l({}, Be.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Ze = l({}, Be.DefaultType, { content: "(string|element|function)" }), tn = "fade", en = "show", nn = ".popover-header", on = ".popover-body", rn = { HIDE: "hide" + ze, HIDDEN: "hidden" + ze, SHOW: "show" + ze, SHOWN: "shown" + ze, INSERTED: "inserted" + ze, CLICK: "click" + ze, FOCUSIN: "focusin" + ze, FOCUSOUT: "focusout" + ze, MOUSEENTER: "mouseenter" + ze, MOUSELEAVE: "mouseleave" + ze }, sn = function (t) { var e, n; function i() { return t.apply(this, arguments) || this } n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n; var o = i.prototype; return o.isWithContent = function () { return this.getTitle() || this._getContent() }, o.addAttachmentClass = function (t) { g(this.getTipElement()).addClass($e + "-" + t) }, o.getTipElement = function () { return this.tip = this.tip || g(this.config.template)[0], this.tip }, o.setContent = function () { var t = g(this.getTipElement()); this.setElementContent(t.find(nn), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en) }, o._getContent = function () { return this.element.getAttribute("data-content") || this.config.content }, o._cleanTipClass = function () { var t = g(this.getTipElement()), e = t.attr("class").match(Ge); null !== e && 0 < e.length && t.removeClass(e.join("")) }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this).data(Ye), e = "object" == typeof n ? n : null; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return Je } }, { key: "NAME", get: function () { return Ve } }, { key: "DATA_KEY", get: function () { return Ye } }, { key: "Event", get: function () { return rn } }, { key: "EVENT_KEY", get: function () { return ze } }, { key: "DefaultType", get: function () { return Ze } }]), i }(Be); g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () { return g.fn[Ve] = Xe, sn._jQueryInterface }; var an = "scrollspy", ln = "bs.scrollspy", cn = "." + ln, hn = g.fn[an], un = { offset: 10, method: "auto", target: "" }, fn = { offset: "number", method: "string", target: "(string|element)" }, dn = { ACTIVATE: "activate" + cn, SCROLL: "scroll" + cn, LOAD_DATA_API: "load" + cn + ".data-api" }, gn = "dropdown-item", _n = "active", mn = '[data-spy="scroll"]', pn = ".nav, .list-group", vn = ".nav-link", yn = ".nav-item", En = ".list-group-item", Cn = ".dropdown", Tn = ".dropdown-item", Sn = ".dropdown-toggle", bn = "offset", In = "position", Dn = function () { function n(t, e) { var n = this; this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) { return n._process(t) }), this.refresh(), this._process() } var t = n.prototype; return t.refresh = function () { var e = this, t = this._scrollElement === this._scrollElement.window ? bn : In, o = "auto" === this._config.method ? t : this._config.method, r = o === In ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) { var e, n = _.getSelectorFromElement(t); if (n && (e = document.querySelector(n)), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [g(e)[o]().top + r, n] } return null }).filter(function (t) { return t }).sort(function (t, e) { return t[0] - e[0] }).forEach(function (t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, t.dispose = function () { g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function (t) { if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) { var e = g(t.target).attr("id"); e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e } return _.typeCheckConfig(an, t, fn), t }, t._getScrollTop = function () { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function () { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function () { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function () { var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), n <= t) { var i = this._targets[this._targets.length - 1]; this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } } }, t._activate = function (e) { this._activeTarget = e, this._clear(); var t = this._selector.split(",").map(function (t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }), n = g([].slice.call(document.querySelectorAll(t.join(",")))); n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e }) }, t._clear = function () { [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) { return t.classList.contains(_n) }).forEach(function (t) { return t.classList.remove(_n) }) }, n._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(ln); if (t || (t = new n(this, "object" == typeof e && e), g(this).data(ln, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return un } }]), n }(); g(window).on(dn.LOAD_DATA_API, function () { for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) { var n = g(t[e]); Dn._jQueryInterface.call(n, n.data()) } }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () { return g.fn[an] = hn, Dn._jQueryInterface }; var wn = "bs.tab", An = "." + wn, Nn = g.fn.tab, On = { HIDE: "hide" + An, HIDDEN: "hidden" + An, SHOW: "show" + An, SHOWN: "shown" + An, CLICK_DATA_API: "click" + An + ".data-api" }, kn = "dropdown-menu", Pn = "active", Ln = "disabled", jn = "fade", Hn = "show", Rn = ".dropdown", xn = ".nav, .list-group", Fn = ".active", Un = "> li > .active", Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', qn = ".dropdown-toggle", Mn = "> .dropdown-menu .active", Kn = function () { function i(t) { this._element = t } var t = i.prototype; return t.show = function () { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) { var t, i, e = g(this._element).closest(xn)[0], o = _.getSelectorFromElement(this._element); if (e) { var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn; i = (i = g.makeArray(g(e).find(r)))[i.length - 1] } var s = g.Event(On.HIDE, { relatedTarget: this._element }), a = g.Event(On.SHOW, { relatedTarget: i }); if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { o && (t = document.querySelector(o)), this._activate(this._element, e); var l = function () { var t = g.Event(On.HIDDEN, { relatedTarget: n._element }), e = g.Event(On.SHOWN, { relatedTarget: i }); g(i).trigger(t), g(n._element).trigger(e) }; t ? this._activate(t, t.parentNode, l) : l() } } }, t.dispose = function () { g.removeData(this._element, wn), this._element = null }, t._activate = function (t, e, n) { var i = this, o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0], r = n && o && g(o).hasClass(jn), s = function () { return i._transitionComplete(t, o, n) }; if (o && r) { var a = _.getTransitionDurationFromElement(o); g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a) } else s() }, t._transitionComplete = function (t, e, n) { if (e) { g(e).removeClass(Pn); var i = g(e.parentNode).find(Mn)[0]; i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) { var o = g(t).closest(Rn)[0]; if (o) { var r = [].slice.call(o.querySelectorAll(qn)); g(r).addClass(Pn) } t.setAttribute("aria-expanded", !0) } n && n() }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this), e = t.data(wn); if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"'); e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }]), i }(); g(document).on(On.CLICK_DATA_API, Wn, function (t) { t.preventDefault(), Kn._jQueryInterface.call(g(this), "show") }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () { return g.fn.tab = Nn, Kn._jQueryInterface }; var Qn = "toast", Bn = "bs.toast", Vn = "." + Bn, Yn = g.fn[Qn], zn = { CLICK_DISMISS: "click.dismiss" + Vn, HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn }, Xn = "fade", $n = "hide", Gn = "show", Jn = "showing", Zn = { animation: "boolean", autohide: "boolean", delay: "number" }, ti = { animation: !0, autohide: !0, delay: 500 }, ei = '[data-dismiss="toast"]', ni = function () { function i(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() } var t = i.prototype; return t.show = function () { var t = this; g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn); var e = function () { t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide() }; if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) { var n = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, t.hide = function (t) { var e = this; this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () { e._close() }, this._config.delay)) }, t.dispose = function () { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null }, t._getConfig = function (t) { return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t }, t._setListeners = function () { var t = this; g(this._element).on(zn.CLICK_DISMISS, ei, function () { return t.hide(!0) }) }, t._close = function () { var t = this, e = function () { t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN) }; if (this._element.classList.remove(Gn), this._config.animation) { var n = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this), e = t.data(Bn); if (e || (e = new i(this, "object" == typeof n && n), t.data(Bn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"'); e[n](this) } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "DefaultType", get: function () { return Zn } }, { key: "Default", get: function () { return ti } }]), i }(); g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () { return g.fn[Qn] = Yn, ni._jQueryInterface }, function () { if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = g.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", { value: !0 }) });
//# sourceMappingURL=bootstrap.min.js.map

/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PerfectScrollbar = e() }(this, function () { "use strict"; function t(t) { return getComputedStyle(t) } function e(t, e) { for (var i in e) { var r = e[i]; "number" == typeof r && (r += "px"), t.style[i] = r } return t } function i(t) { var e = document.createElement("div"); return e.className = t, e } function r(t, e) { if (!v) throw new Error("No element matching method supported"); return v.call(t, e) } function l(t) { t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t) } function n(t, e) { return Array.prototype.filter.call(t.children, function (t) { return r(t, e) }) } function o(t, e) { var i = t.element.classList, r = m.state.scrolling(e); i.contains(r) ? clearTimeout(Y[e]) : i.add(r) } function s(t, e) { Y[e] = setTimeout(function () { return t.isAlive && t.element.classList.remove(m.state.scrolling(e)) }, t.settings.scrollingThreshold) } function a(t, e) { o(t, e), s(t, e) } function c(t) { if ("function" == typeof window.CustomEvent) return new CustomEvent(t); var e = document.createEvent("CustomEvent"); return e.initCustomEvent(t, !1, !1, void 0), e } function h(t, e, i, r, l) { var n = i[0], o = i[1], s = i[2], h = i[3], u = i[4], d = i[5]; void 0 === r && (r = !0), void 0 === l && (l = !1); var f = t.element; t.reach[h] = null, f[s] < 1 && (t.reach[h] = "start"), f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"), e && (f.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)), r && a(t, h)), t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h])) } function u(t) { return parseInt(t, 10) || 0 } function d(t) { return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]") } function f(e) { var i = t(e); return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth) } function p(t, e) { return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e } function b(t, i) { var r = { width: i.railXWidth }, l = Math.floor(t.scrollTop); i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft, i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - l : r.top = i.scrollbarXTop + l, e(i.scrollbarXRail, r); var n = { top: l, height: i.railYHeight }; i.isScrollbarYUsingRight ? i.isRtl ? n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : n.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : n.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, n), e(i.scrollbarX, { left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth }), e(i.scrollbarY, { top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth }) } function g(t, e) { function i(e) { b[d] = g + Y * (e[a] - v), o(t, f), R(t), e.stopPropagation(), e.preventDefault() } function r() { s(t, f), t[p].classList.remove(m.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i) } var l = e[0], n = e[1], a = e[2], c = e[3], h = e[4], u = e[5], d = e[6], f = e[7], p = e[8], b = t.element, g = null, v = null, Y = null; t.event.bind(t[h], "mousedown", function (e) { g = b[d], v = e[a], Y = (t[n] - t[l]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", r), t[p].classList.add(m.state.clicking), e.stopPropagation(), e.preventDefault() }) } var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector), m = { main: "ps", element: { thumb: function (t) { return "ps__thumb-" + t }, rail: function (t) { return "ps__rail-" + t }, consuming: "ps__child--consume" }, state: { focus: "ps--focus", clicking: "ps--clicking", active: function (t) { return "ps--active-" + t }, scrolling: function (t) { return "ps--scrolling-" + t } } }, Y = { x: null, y: null }, X = function (t) { this.element = t, this.handlers = {} }, w = { isEmpty: { configurable: !0 } }; X.prototype.bind = function (t, e) { void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1) }, X.prototype.unbind = function (t, e) { var i = this; this.handlers[t] = this.handlers[t].filter(function (r) { return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1) }) }, X.prototype.unbindAll = function () { var t = this; for (var e in t.handlers) t.unbind(e) }, w.isEmpty.get = function () { var t = this; return Object.keys(this.handlers).every(function (e) { return 0 === t.handlers[e].length }) }, Object.defineProperties(X.prototype, w); var y = function () { this.eventElements = [] }; y.prototype.eventElement = function (t) { var e = this.eventElements.filter(function (e) { return e.element === t })[0]; return e || (e = new X(t), this.eventElements.push(e)), e }, y.prototype.bind = function (t, e, i) { this.eventElement(t).bind(e, i) }, y.prototype.unbind = function (t, e, i) { var r = this.eventElement(t); r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1) }, y.prototype.unbindAll = function () { this.eventElements.forEach(function (t) { return t.unbindAll() }), this.eventElements = [] }, y.prototype.once = function (t, e, i) { var r = this.eventElement(t), l = function (t) { r.unbind(e, l), i(t) }; r.bind(e, l) }; var W = function (t, e, i, r, l) { void 0 === r && (r = !0), void 0 === l && (l = !1); var n; if ("top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"]; else { if ("left" !== e) throw new Error("A proper axis should be provided"); n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"] } h(t, i, n, r, l) }, L = { isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style, supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints, isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent) }, R = function (t) { var e = t.element, i = Math.floor(e.scrollTop); t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (n(e, m.element.rail("x")).forEach(function (t) { return l(t) }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (n(e, m.element.rail("y")).forEach(function (t) { return l(t) }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = p(t, u(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = p(t, u(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = u(i * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), b(e, t), t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0) }, T = { "click-rail": function (t) { t.event.bind(t.scrollbarY, "mousedown", function (t) { return t.stopPropagation() }), t.event.bind(t.scrollbarYRail, "mousedown", function (e) { var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1; t.element.scrollTop += i * t.containerHeight, R(t), e.stopPropagation() }), t.event.bind(t.scrollbarX, "mousedown", function (t) { return t.stopPropagation() }), t.event.bind(t.scrollbarXRail, "mousedown", function (e) { var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1; t.element.scrollLeft += i * t.containerWidth, R(t), e.stopPropagation() }) }, "drag-thumb": function (t) { g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]) }, keyboard: function (t) { function e(e, r) { var l = Math.floor(i.scrollTop); if (0 === e) { if (!t.scrollbarYActive) return !1; if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0) return !t.settings.wheelPropagation } var n = i.scrollLeft; if (0 === r) { if (!t.scrollbarXActive) return !1; if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0) return !t.settings.wheelPropagation } return !0 } var i = t.element, l = function () { return r(i, ":hover") }, n = function () { return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus") }; t.event.bind(t.ownerDocument, "keydown", function (r) { if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l() || n())) { var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement; if (o) { if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement; else for (; o.shadowRoot;)o = o.shadowRoot.activeElement; if (d(o)) return } var s = 0, a = 0; switch (r.which) { case 37: s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30; break; case 38: a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30; break; case 39: s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30; break; case 40: a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30; break; case 32: a = r.shiftKey ? t.containerHeight : -t.containerHeight; break; case 33: a = t.containerHeight; break; case 34: a = -t.containerHeight; break; case 36: a = t.contentHeight; break; case 35: a = -t.contentHeight; break; default: return }t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a, i.scrollLeft += s, R(t), e(s, a) && r.preventDefault()) } }) }, wheel: function (e) { function i(t, i) { var r = Math.floor(o.scrollTop), l = 0 === o.scrollTop, n = r + o.offsetHeight === o.scrollHeight, s = 0 === o.scrollLeft, a = o.scrollLeft + o.offsetWidth === o.scrollWidth; return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation } function r(t) { var e = t.deltaX, i = -1 * t.deltaY; return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i] } function l(e, i, r) { if (!L.isWebKit && o.querySelector("select:focus")) return !0; if (!o.contains(e)) return !1; for (var l = e; l && l !== o;) { if (l.classList.contains(m.element.consuming)) return !0; var n = t(l); if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) { var s = l.scrollHeight - l.clientHeight; if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0)) return !0; var a = l.scrollWidth - l.clientWidth; if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0)) return !0 } l = l.parentNode } return !1 } function n(t) { var n = r(t), s = n[0], a = n[1]; if (!l(t.target, s, a)) { var c = !1; e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed, c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed, c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed, o.scrollLeft += s * e.settings.wheelSpeed), R(e), (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault()) } } var o = e.element; void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n) }, touch: function (e) { function i(t, i) { var r = Math.floor(h.scrollTop), l = h.scrollLeft, n = Math.abs(t), o = Math.abs(i); if (o > n) { if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && L.isChrome } else if (n > o && (t < 0 && l === e.contentWidth - e.containerWidth || t > 0 && 0 === l)) return !0; return !0 } function r(t, i) { h.scrollTop -= i, h.scrollLeft -= t, R(e) } function l(t) { return t.targetTouches ? t.targetTouches[0] : t } function n(t) { return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)) } function o(t) { if (n(t)) { var e = l(t); u.pageX = e.pageX, u.pageY = e.pageY, d = (new Date).getTime(), null !== p && clearInterval(p) } } function s(e, i, r) { if (!h.contains(e)) return !1; for (var l = e; l && l !== h;) { if (l.classList.contains(m.element.consuming)) return !0; var n = t(l); if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) { var o = l.scrollHeight - l.clientHeight; if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0)) return !0; var s = l.scrollLeft - l.clientWidth; if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0)) return !0 } l = l.parentNode } return !1 } function a(t) { if (n(t)) { var e = l(t), o = { pageX: e.pageX, pageY: e.pageY }, a = o.pageX - u.pageX, c = o.pageY - u.pageY; if (s(t.target, a, c)) return; r(a, c), u = o; var h = (new Date).getTime(), p = h - d; p > 0 && (f.x = a / p, f.y = c / p, d = h), i(a, c) && t.preventDefault() } } function c() { e.settings.swipeEasing && (clearInterval(p), p = setInterval(function () { e.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p) }, 10)) } if (L.supportsTouch || L.supportsIePointer) { var h = e.element, u = {}, d = 0, f = {}, p = null; L.supportsTouch ? (e.event.bind(h, "touchstart", o), e.event.bind(h, "touchmove", a), e.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (e.event.bind(h, "pointerdown", o), e.event.bind(h, "pointermove", a), e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o), e.event.bind(h, "MSPointerMove", a), e.event.bind(h, "MSPointerUp", c))) } } }, H = function (r, l) { var n = this; if (void 0 === l && (l = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar"); this.element = r, r.classList.add(m.main), this.settings = { handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollingThreshold: 1e3, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipeEasing: !0, useBothWheelAxes: !1, wheelPropagation: !0, wheelSpeed: 1 }; for (var o in l) n.settings[o] = l[o]; this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null; var s = function () { return r.classList.add(m.state.focus) }, a = function () { return r.classList.remove(m.state.focus) }; this.isRtl = "rtl" === t(r).direction, this.isNegativeScroll = function () { var t = r.scrollLeft, e = null; return r.scrollLeft = -1, e = r.scrollLeft < 0, r.scrollLeft = t, e }(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new y, this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null; var c = t(this.scrollbarXRail); this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), e(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), e(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null; var h = t(this.scrollbarYRail); this.scrollbarYRight = parseInt(h.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null, this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth), e(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom), e(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = { x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null, y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null }, this.isAlive = !0, this.settings.handlers.forEach(function (t) { return T[t](n) }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function (t) { return n.onScroll(t) }), R(this) }; return H.prototype.update = function () { this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, { display: "block" }), e(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, { display: "none" }), e(this.scrollbarYRail, { display: "none" }), R(this), W(this, "top", 0, !1, !0), W(this, "left", 0, !1, !0), e(this.scrollbarXRail, { display: "" }), e(this.scrollbarYRail, { display: "" })) }, H.prototype.onScroll = function (t) { this.isAlive && (R(this), W(this, "top", this.element.scrollTop - this.lastScrollTop), W(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft) }, H.prototype.destroy = function () { this.isAlive && (this.event.unbindAll(), l(this.scrollbarX), l(this.scrollbarY), l(this.scrollbarXRail), l(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1) }, H.prototype.removePsClasses = function () { this.element.className = this.element.className.split(" ").filter(function (t) { return !t.match(/^ps([-_].+|)$/) }).join(" ") }, H });

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function (a, b, c, d) { "use strict"; function e(a, b, c) { return setTimeout(j(a, c), b) } function f(a, b, c) { return Array.isArray(a) ? (g(a, c[b], c), !0) : !1 } function g(a, b, c) { var e; if (a) if (a.forEach) a.forEach(b, c); else if (a.length !== d) for (e = 0; e < a.length;)b.call(c, a[e], e, a), e++; else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a) } function h(b, c, d) { var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n"; return function () { var c = new Error("get-stack-trace"), d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", f = a.console && (a.console.warn || a.console.log); return f && f.call(a.console, e, d), b.apply(this, arguments) } } function i(a, b, c) { var d, e = b.prototype; d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c) } function j(a, b) { return function () { return a.apply(b, arguments) } } function k(a, b) { return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a } function l(a, b) { return a === d ? b : a } function m(a, b, c) { g(q(b), function (b) { a.addEventListener(b, c, !1) }) } function n(a, b, c) { g(q(b), function (b) { a.removeEventListener(b, c, !1) }) } function o(a, b) { for (; a;) { if (a == b) return !0; a = a.parentNode } return !1 } function p(a, b) { return a.indexOf(b) > -1 } function q(a) { return a.trim().split(/\s+/g) } function r(a, b, c) { if (a.indexOf && !c) return a.indexOf(b); for (var d = 0; d < a.length;) { if (c && a[d][c] == b || !c && a[d] === b) return d; d++ } return -1 } function s(a) { return Array.prototype.slice.call(a, 0) } function t(a, b, c) { for (var d = [], e = [], f = 0; f < a.length;) { var g = b ? a[f][b] : a[f]; r(e, g) < 0 && d.push(a[f]), e[f] = g, f++ } return c && (d = b ? d.sort(function (a, c) { return a[b] > c[b] }) : d.sort()), d } function u(a, b) { for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) { if (c = ma[g], e = c ? c + f : b, e in a) return e; g++ } return d } function v() { return ua++ } function w(b) { var c = b.ownerDocument || b; return c.defaultView || c.parentWindow || a } function x(a, b) { var c = this; this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) { k(a.options.enable, [a]) && c.handler(b) }, this.init() } function y(a) { var b, c = a.options.inputClass; return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z) } function z(a, b, c) { var d = c.pointers.length, e = c.changedPointers.length, f = b & Ea && d - e === 0, g = b & (Ga | Ha) && d - e === 0; c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c } function A(a, b) { var c = a.session, d = b.pointers, e = d.length; c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1); var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = E(d); b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY); var j = F(b.deltaTime, b.deltaX, b.deltaY); b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b); var k = a.element; o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k } function B(a, b) { var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {}; b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y) } function C(a, b) { var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp; if (b.eventType != Ha && (i > Da || h.velocity === d)) { var j = b.deltaX - h.deltaX, k = b.deltaY - h.deltaY, l = F(i, j, k); e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction; b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g } function D(a) { for (var b = [], c = 0; c < a.pointers.length;)b[c] = { clientX: pa(a.pointers[c].clientX), clientY: pa(a.pointers[c].clientY) }, c++; return { timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY } } function E(a) { var b = a.length; if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) }; for (var c = 0, d = 0, e = 0; b > e;)c += a[e].clientX, d += a[e].clientY, e++; return { x: pa(c / b), y: pa(d / b) } } function F(a, b, c) { return { x: b / a || 0, y: c / a || 0 } } function G(a, b) { return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma } function H(a, b, c) { c || (c = Qa); var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]]; return Math.sqrt(d * d + e * e) } function I(a, b, c) { c || (c = Qa); var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]]; return 180 * Math.atan2(e, d) / Math.PI } function J(a, b) { return I(b[1], b[0], Ra) + I(a[1], a[0], Ra) } function K(a, b) { return H(b[0], b[1], Ra) / H(a[0], a[1], Ra) } function L() { this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments) } function M() { this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [] } function N() { this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments) } function O(a, b) { var c = s(a.touches), d = s(a.changedTouches); return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d] } function P() { this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments) } function Q(a, b) { var c = s(a.touches), d = this.targetIds; if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c]; var e, f, g = s(a.changedTouches), h = [], i = this.target; if (f = c.filter(function (a) { return o(a.target, i) }), b === Ea) for (e = 0; e < f.length;)d[f[e].identifier] = !0, e++; for (e = 0; e < g.length;)d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++; return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0 } function R() { x.apply(this, arguments); var a = j(this.handler, this); this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [] } function S(a, b) { a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b) } function T(a) { var b = a.changedPointers[0]; if (b.identifier === this.primaryTouch) { var c = { x: b.clientX, y: b.clientY }; this.lastTouches.push(c); var d = this.lastTouches, e = function () { var a = d.indexOf(c); a > -1 && d.splice(a, 1) }; setTimeout(e, cb) } } function U(a) { for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) { var e = this.lastTouches[d], f = Math.abs(b - e.x), g = Math.abs(c - e.y); if (db >= f && db >= g) return !0 } return !1 } function V(a, b) { this.manager = a, this.set(b) } function W(a) { if (p(a, jb)) return jb; var b = p(a, kb), c = p(a, lb); return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb } function X() { if (!fb) return !1; var b = {}, c = a.CSS && a.CSS.supports; return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) { b[d] = c ? a.CSS.supports("touch-action", d) : !0 }), b } function Y(a) { this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [] } function Z(a) { return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "" } function $(a) { return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "" } function _(a, b) { var c = b.manager; return c ? c.get(a) : a } function aa() { Y.apply(this, arguments) } function ba() { aa.apply(this, arguments), this.pX = null, this.pY = null } function ca() { aa.apply(this, arguments) } function da() { Y.apply(this, arguments), this._timer = null, this._input = null } function ea() { aa.apply(this, arguments) } function fa() { aa.apply(this, arguments) } function ga() { Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0 } function ha(a, b) { return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b) } function ia(a, b) { this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) { var b = this.add(new a[0](a[1])); a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]) }, this) } function ja(a, b) { var c = a.element; if (c.style) { var d; g(a.options.cssProps, function (e, f) { d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "" }), b || (a.oldCssProps = {}) } } function ka(a, c) { var d = b.createEvent("Event"); d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d) } var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"], na = b.createElement("div"), oa = "function", pa = Math.round, qa = Math.abs, ra = Date.now; la = "function" != typeof Object.assign ? function (a) { if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object"); for (var b = Object(a), c = 1; c < arguments.length; c++) { var e = arguments[c]; if (e !== d && null !== e) for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f]) } return b } : Object.assign; var sa = h(function (a, b, c) { for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++; return a }, "extend", "Use `assign`."), ta = h(function (a, b) { return sa(a, b, !0) }, "merge", "Use `assign`."), ua = 1, va = /mobile|tablet|ip(ad|hone|od)|android/i, wa = "ontouchstart" in a, xa = u(a, "PointerEvent") !== d, ya = wa && va.test(navigator.userAgent), za = "touch", Aa = "pen", Ba = "mouse", Ca = "kinect", Da = 25, Ea = 1, Fa = 2, Ga = 4, Ha = 8, Ia = 1, Ja = 2, Ka = 4, La = 8, Ma = 16, Na = Ja | Ka, Oa = La | Ma, Pa = Na | Oa, Qa = ["x", "y"], Ra = ["clientX", "clientY"]; x.prototype = { handler: function () { }, init: function () { this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler) }, destroy: function () { this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler) } }; var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga }, Ta = "mousedown", Ua = "mousemove mouseup"; i(L, x, { handler: function (a) { var b = Sa[a.type]; b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: Ba, srcEvent: a })) } }); var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha }, Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca }, Xa = "pointerdown", Ya = "pointermove pointerup pointercancel"; a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function (a) { var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = Va[d], f = Wa[a.pointerType] || a.pointerType, g = f == za, h = r(b, a.pointerId, "pointerId"); e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1)) } }); var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha }, $a = "touchstart", _a = "touchstart touchmove touchend touchcancel"; i(N, x, { handler: function (a) { var b = Za[a.type]; if (b === Ea && (this.started = !0), this.started) { var c = O.call(this, a, b); b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a }) } } }); var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha }, bb = "touchstart touchmove touchend touchcancel"; i(P, x, { handler: function (a) { var b = ab[a.type], c = Q.call(this, a, b); c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a }) } }); var cb = 2500, db = 25; i(R, x, { handler: function (a, b, c) { var d = c.pointerType == za, e = c.pointerType == Ba; if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) { if (d) S.call(this, b, c); else if (e && U.call(this, c)) return; this.callback(a, b, c) } }, destroy: function () { this.touch.destroy(), this.mouse.destroy() } }); var eb = u(na.style, "touchAction"), fb = eb !== d, gb = "compute", hb = "auto", ib = "manipulation", jb = "none", kb = "pan-x", lb = "pan-y", mb = X(); V.prototype = { set: function (a) { a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim() }, update: function () { this.set(this.manager.options.touchAction) }, compute: function () { var a = []; return g(this.manager.recognizers, function (b) { k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction())) }), W(a.join(" ")) }, preventDefaults: function (a) { var b = a.srcEvent, c = a.offsetDirection; if (this.manager.session.prevented) return void b.preventDefault(); var d = this.actions, e = p(d, jb) && !mb[jb], f = p(d, lb) && !mb[lb], g = p(d, kb) && !mb[kb]; if (e) { var h = 1 === a.pointers.length, i = a.distance < 2, j = a.deltaTime < 250; if (h && i && j) return } return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0 }, preventSrc: function (a) { this.manager.session.prevented = !0, a.preventDefault() } }; var nb = 1, ob = 2, pb = 4, qb = 8, rb = qb, sb = 16, tb = 32; Y.prototype = { defaults: {}, set: function (a) { return la(this.options, a), this.manager && this.manager.touchAction.update(), this }, recognizeWith: function (a) { if (f(a, "recognizeWith", this)) return this; var b = this.simultaneous; return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this }, dropRecognizeWith: function (a) { return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this) }, requireFailure: function (a) { if (f(a, "requireFailure", this)) return this; var b = this.requireFail; return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this }, dropRequireFailure: function (a) { if (f(a, "dropRequireFailure", this)) return this; a = _(a, this); var b = r(this.requireFail, a); return b > -1 && this.requireFail.splice(b, 1), this }, hasRequireFailures: function () { return this.requireFail.length > 0 }, canRecognizeWith: function (a) { return !!this.simultaneous[a.id] }, emit: function (a) { function b(b) { c.manager.emit(b, a) } var c = this, d = this.state; qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d)) }, tryEmit: function (a) { return this.canEmit() ? this.emit(a) : void (this.state = tb) }, canEmit: function () { for (var a = 0; a < this.requireFail.length;) { if (!(this.requireFail[a].state & (tb | nb))) return !1; a++ } return !0 }, recognize: function (a) { var b = la({}, a); return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb)) }, process: function (a) { }, getTouchAction: function () { }, reset: function () { } }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function (a) { var b = this.options.pointers; return 0 === b || a.pointers.length === b }, process: function (a) { var b = this.state, c = a.eventType, d = b & (ob | pb), e = this.attrTest(a); return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function () { var a = this.options.direction, b = []; return a & Na && b.push(lb), a & Oa && b.push(kb), b }, directionTest: function (a) { var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY; return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction }, attrTest: function (a) { return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a)) }, emit: function (a) { this.pX = a.deltaX, this.pY = a.deltaY; var b = $(a.direction); b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a) } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function () { return [jb] }, attrTest: function (a) { return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob) }, emit: function (a) { if (1 !== a.scale) { var b = a.scale < 1 ? "in" : "out"; a.additionalEvent = this.options.event + b } this._super.emit.call(this, a) } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function () { return [hb] }, process: function (a) { var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime > b.time; if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset(); else if (a.eventType & Ea) this.reset(), this._timer = e(function () { this.state = rb, this.tryEmit() }, b.time, this); else if (a.eventType & Ga) return rb; return tb }, reset: function () { clearTimeout(this._timer) }, emit: function (a) { this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input))) } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function () { return [jb] }, attrTest: function (a) { return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob) } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1 }, getTouchAction: function () { return ba.prototype.getTouchAction.call(this) }, attrTest: function (a) { var b, c = this.options.direction; return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga }, emit: function (a) { var b = $(a.offsetDirection); b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a) } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function () { return [ib] }, process: function (a) { var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime < b.time; if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout(); if (d && f && c) { if (a.eventType != Ga) return this.failTimeout(); var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold; this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a; var i = this.count % b.taps; if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () { this.state = rb, this.tryEmit() }, b.interval, this), ob) : rb } return tb }, failTimeout: function () { return this._timer = e(function () { this.state = tb }, this.options.interval, this), tb }, reset: function () { clearTimeout(this._timer) }, emit: function () { this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input)) } }), ha.VERSION = "2.0.8", ha.defaults = { domEvents: !1, touchAction: gb, enable: !0, inputTarget: null, inputClass: null, preset: [[ea, { enable: !1 }], [ca, { enable: !1 }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } }; var ub = 1, vb = 2; ia.prototype = { set: function (a) { return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this }, stop: function (a) { this.session.stopped = a ? vb : ub }, recognize: function (a) { var b = this.session; if (!b.stopped) { this.touchAction.preventDefaults(a); var c, d = this.recognizers, e = b.curRecognizer; (!e || e && e.state & rb) && (e = b.curRecognizer = null); for (var f = 0; f < d.length;)c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++ } }, get: function (a) { if (a instanceof Y) return a; for (var b = this.recognizers, c = 0; c < b.length; c++)if (b[c].options.event == a) return b[c]; return null }, add: function (a) { if (f(a, "add", this)) return this; var b = this.get(a.options.event); return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a }, remove: function (a) { if (f(a, "remove", this)) return this; if (a = this.get(a)) { var b = this.recognizers, c = r(b, a); -1 !== c && (b.splice(c, 1), this.touchAction.update()) } return this }, on: function (a, b) { if (a !== d && b !== d) { var c = this.handlers; return g(q(a), function (a) { c[a] = c[a] || [], c[a].push(b) }), this } }, off: function (a, b) { if (a !== d) { var c = this.handlers; return g(q(a), function (a) { b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a] }), this } }, emit: function (a, b) { this.options.domEvents && ka(a, b); var c = this.handlers[a] && this.handlers[a].slice(); if (c && c.length) { b.type = a, b.preventDefault = function () { b.srcEvent.preventDefault() }; for (var d = 0; d < c.length;)c[d](b), d++ } }, destroy: function () { this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u }); var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {}; wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () { return ha }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha }(window, document, "Hammer");


/* Unison JS */
Unison = function () { "use strict"; var a, b = window, c = document, d = c.head, e = {}, f = !1, g = { parseMQ: function (a) { var c = b.getComputedStyle(a, null).getPropertyValue("font-family"); return c.replace(/"/g, "").replace(/'/g, "") }, debounce: function (a, b, c) { var d; return function () { var e = this, f = arguments; clearTimeout(d), d = setTimeout(function () { d = null, c || a.apply(e, f) }, b), c && !d && a.apply(e, f) } }, isObject: function (a) { return "object" == typeof a }, isUndefined: function (a) { return "undefined" == typeof a } }, h = { on: function (a, b) { g.isObject(e[a]) || (e[a] = []), e[a].push(b) }, emit: function (a, b) { if (g.isObject(e[a])) for (var c = e[a].slice(), d = 0; d < c.length; d++)c[d].call(this, b) } }, i = { all: function () { for (var a = {}, b = g.parseMQ(c.querySelector("title")).split(","), d = 0; d < b.length; d++) { var e = b[d].trim().split(" "); a[e[0]] = e[1] } return f ? a : null }, now: function (a) { var b = g.parseMQ(d).split(" "), c = { name: b[0], width: b[1] }; return f ? g.isUndefined(a) ? c : a(c) : null }, update: function () { i.now(function (b) { b.name !== a && (h.emit(b.name), h.emit("change", b), a = b.name) }) } }; return b.onresize = g.debounce(i.update, 100), c.addEventListener("DOMContentLoaded", function () { f = "none" !== b.getComputedStyle(d, null).getPropertyValue("clear"), i.update() }), { fetch: { all: i.all, now: i.now }, on: h.on, emit: h.emit, util: { debounce: g.debounce, isObject: g.isObject } } }();


/*!
* screenfull
* v5.0.0 - 2019-09-09
* (c) Sindre Sorhus; MIT License
*/

!function () { "use strict"; var u = "undefined" != typeof window && void 0 !== window.document ? window.document : {}, e = "undefined" != typeof module && module.exports, t = function () { for (var e, n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], l = 0, r = n.length, t = {}; l < r; l++)if ((e = n[l]) && e[1] in u) { for (l = 0; l < e.length; l++)t[n[0][l]] = e[l]; return t } return !1 }(), r = { change: t.fullscreenchange, error: t.fullscreenerror }, n = { request: function (r) { return new Promise(function (e, n) { var l = function () { this.off("change", l), e() }.bind(this); this.on("change", l), r = r || u.documentElement, Promise.resolve(r[t.requestFullscreen]()).catch(n) }.bind(this)) }, exit: function () { return new Promise(function (e, n) { if (this.isFullscreen) { var l = function () { this.off("change", l), e() }.bind(this); this.on("change", l), Promise.resolve(u[t.exitFullscreen]()).catch(n) } else e() }.bind(this)) }, toggle: function (e) { return this.isFullscreen ? this.exit() : this.request(e) }, onchange: function (e) { this.on("change", e) }, onerror: function (e) { this.on("error", e) }, on: function (e, n) { var l = r[e]; l && u.addEventListener(l, n, !1) }, off: function (e, n) { var l = r[e]; l && u.removeEventListener(l, n, !1) }, raw: t }; t ? (Object.defineProperties(n, { isFullscreen: { get: function () { return Boolean(u[t.fullscreenElement]) } }, element: { enumerable: !0, get: function () { return u[t.fullscreenElement] } }, isEnabled: { enumerable: !0, get: function () { return Boolean(u[t.fullscreenEnabled]) } } }), e ? module.exports = n : window.screenfull = n) : e ? module.exports = { isEnabled: !1 } : window.screenfull = { isEnabled: !1 } }();

/*! pace 1.0.2 */
(function () { var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice, Y = {}.hasOwnProperty, Z = function (a, b) { function c() { this.constructor = a } for (var d in b) Y.call(b, d) && (a[d] = b[d]); return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a }, $ = [].indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++)if (b in this && this[b] === a) return b; return -1 }; for (u = { catchupTime: 100, initialRate: .03, minTime: 250, ghostTime: 100, maxProgressPerFrame: 20, easeFactor: 1.25, startOnPageLoad: !0, restartOnPushState: !0, restartOnRequestAfter: 500, target: "body", elements: { checkInterval: 100, selectors: ["body"] }, eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 }, ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] } }, C = function () { var a; return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function (a) { return setTimeout(a, 50) }, t = function (a) { return clearTimeout(a) }), G = function (a) { var b, c; return b = C(), (c = function () { var d; return d = C() - b, d >= 33 ? (b = C(), a(d, function () { return E(c) })) : setTimeout(c, 33 - d) })() }, F = function () { var a, b, c; return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b] }, v = function () { var a, b, c, d, e, f, g; for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)if (c = d[f]) for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e); return b }, q = function (a) { var b, c, d, e, f; for (c = b = 0, e = 0, f = a.length; f > e; e++)d = a[e], c += Math.abs(d), b++; return c / b }, x = function (a, b) { var c, d, e; if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) { if (c = e.getAttribute("data-pace-" + a), !b) return c; try { return JSON.parse(c) } catch (f) { return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0 } } }, g = function () { function a() { } return a.prototype.on = function (a, b, c, d) { var e; return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({ handler: b, ctx: c, once: d }) }, a.prototype.once = function (a, b, c) { return this.on(a, b, c, !0) }, a.prototype.off = function (a, b) { var c, d, e; if (null != (null != (d = this.bindings) ? d[a] : void 0)) { if (null == b) return delete this.bindings[a]; for (c = 0, e = []; c < this.bindings[a].length;)e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++); return e } }, a.prototype.trigger = function () { var a, b, c, d, e, f, g, h, i; if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) { for (e = 0, i = []; e < this.bindings[c].length;)h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++); return i } }, a }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++)K = U[Q], D[K] === !0 && (D[K] = u[K]); i = function (a) { function b() { return V = b.__super__.constructor.apply(this, arguments) } return Z(b, a), b }(Error), b = function () { function a() { this.progress = 0 } return a.prototype.getElement = function () { var a; if (null == this.el) { if (a = document.querySelector(D.target), !a) throw new i; this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el) } return this.el }, a.prototype.finish = function () { var a; return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done" }, a.prototype.update = function (a) { return this.progress = a, this.render() }, a.prototype.destroy = function () { try { this.getElement().parentNode.removeChild(this.getElement()) } catch (a) { i = a } return this.el = void 0 }, a.prototype.render = function () { var a, b, c, d, e, f, g; if (null == document.querySelector(D.target)) return !1; for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++)b = g[e], a.children[0].style[b] = d; return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress }, a.prototype.done = function () { return this.progress >= 100 }, a }(), h = function () { function a() { this.bindings = {} } return a.prototype.trigger = function (a, b) { var c, d, e, f, g; if (null != this.bindings[a]) { for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(c.call(this, b)); return g } }, a.prototype.on = function (a, b) { var c; return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b) }, a }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function (a, b) { var c, d, e; e = []; for (d in b.prototype) try { e.push(null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? Object.defineProperty(a, d, { get: function () { return b.prototype[d] }, configurable: !0, enumerable: !0 }) : a[d] = b.prototype[d] : void 0) } catch (f) { c = f } return e }, A = [], j.ignore = function () { var a, b, c; return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c }, j.track = function () { var a, b, c; return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c }, J = function (a) { var b; if (null == a && (a = "GET"), "track" === A[0]) return "force"; if (!A.length && D.ajax) { if ("socket" === a && D.ajax.trackWebSockets) return !0; if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0 } return !1 }, k = function (a) { function b() { var a, c = this; b.__super__.constructor.apply(this, arguments), a = function (a) { var b; return b = a.open, a.open = function (d, e) { return J(d) && c.trigger("request", { type: d, url: e, request: a }), b.apply(a, arguments) } }, window.XMLHttpRequest = function (b) { var c; return c = new P(b), a(c), c }; try { w(window.XMLHttpRequest, P) } catch (d) { } if (null != O) { window.XDomainRequest = function () { var b; return b = new O, a(b), b }; try { w(window.XDomainRequest, O) } catch (d) { } } if (null != N && D.ajax.trackWebSockets) { window.WebSocket = function (a, b) { var d; return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", { type: "socket", url: a, protocols: b, request: d }), d }; try { w(window.WebSocket, N) } catch (d) { } } } return Z(b, a), b }(h), R = null, y = function () { return null == R && (R = new k), R }, I = function (a) { var b, c, d, e; for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)if (b = e[c], "string" == typeof b) { if (-1 !== a.indexOf(b)) return !0 } else if (b.test(a)) return !0; return !1 }, y().on("request", function (b) { var c, d, e, f, g; return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () { var b, c, g, h, i, k; if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) { for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) { if (K = i[c], K instanceof a) { K.watch.apply(K, d); break } k.push(void 0) } return k } }, c)) }), a = function () { function a() { var a = this; this.elements = [], y().on("request", function () { return a.watch.apply(a, arguments) }) } return a.prototype.watch = function (a) { var b, c, d, e; return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c)) }, a }(), o = function () { function a(a) { var b, c, d, e, f, g, h = this; if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) { return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2 }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++)b = g[d], a.addEventListener(b, function () { return h.progress = 100 }, !1); else f = a.onreadystatechange, a.onreadystatechange = function () { var b; return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0 } } return a }(), n = function () { function a(a) { var b, c, d, e, f = this; for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++)b = e[c], a.addEventListener(b, function () { return f.progress = 100 }, !1) } return a }(), d = function () { function a(a) { var b, c, d, f; for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++)b = f[c], this.elements.push(new e(b)) } return a }(), e = function () { function a(a) { this.selector = a, this.progress = 0, this.check() } return a.prototype.check = function () { var a = this; return document.querySelector(this.selector) ? this.done() : setTimeout(function () { return a.check() }, D.elements.checkInterval) }, a.prototype.done = function () { return this.progress = 100 }, a }(), c = function () { function a() { var a, b, c = this; this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () { return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0 } } return a.prototype.states = { loading: 0, interactive: 50, complete: 100 }, a }(), f = function () { function a() { var a, b, c, d, e, f = this; this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () { var g; return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3)) }, 50) } return a }(), m = function () { function a(a) { this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress")) } return a.prototype.tick = function (a, b) { var c; return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress }, a }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function () { return D.restartOnPushState ? j.restart() : void 0 }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () { return z(), T.apply(window.history, arguments) }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () { return z(), W.apply(window.history, arguments) }), l = { ajax: a, elements: d, document: c, eventLag: f }, (B = function () { var a, c, d, e, f, g, h, i; for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++)a = g[c], D[a] !== !1 && L.push(new l[a](D[a])); for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++)K = i[d], L.push(new K(D)); return j.bar = r = new b, H = [], M = new m })(), j.stop = function () { return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B() }, j.restart = function () { return j.trigger("restart"), j.stop(), j.start() }, j.go = function () { var a; return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) { var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w; for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t)g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b)); return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () { return r.finish(), j.running = !1, j.trigger("hide") }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c() }) }, j.start = function (a) { v(D, a), j.running = !0; try { r.render() } catch (b) { i = b } return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50) }, "function" == typeof define && define.amd ? define(["pace"], function () { return j }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start() }).call(this);

// Internationalization
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).i18next = t() }(this, function () { "use strict"; function e(t) { return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(t) } function t(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function n(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } function r(e, t, r) { return t && n(e.prototype, t), r && n(e, r), e } function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function i(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n); "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) { return Object.getOwnPropertyDescriptor(n, e).enumerable }))), r.forEach(function (t) { o(e, t, n[t]) }) } return e } function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && u(e, t) } function s(e) { return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) } function u(e, t) { return (u = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e })(e, t) } function l(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e } function c(e, t) { return !t || "object" != typeof t && "function" != typeof t ? l(e) : t } function f(e, t) { return function (e) { if (Array.isArray(e)) return e }(e) || function (e, t) { var n = [], r = !0, o = !1, i = void 0; try { for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, i = e } finally { try { r || null == s.return || s.return() } finally { if (o) throw i } } return n }(e, t) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance") }() } function p(e) { return function (e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++)n[t] = e[t]; return n } }(e) || function (e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance") }() } var g = { type: "logger", log: function (e) { this.output("log", e) }, warn: function (e) { this.output("warn", e) }, error: function (e) { this.output("error", e) }, output: function (e, t) { var n; console && console[e] && (n = console)[e].apply(n, p(t)) } }, h = new (function () { function e(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; t(this, e), this.init(n, r) } return r(e, [{ key: "init", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; this.prefix = t.prefix || "i18next:", this.logger = e || g, this.options = t, this.debug = t.debug } }, { key: "setDebug", value: function (e) { this.debug = e } }, { key: "log", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return this.forward(t, "log", "", !0) } }, { key: "warn", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return this.forward(t, "warn", "", !0) } }, { key: "error", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return this.forward(t, "error", "") } }, { key: "deprecate", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return this.forward(t, "warn", "WARNING DEPRECATED: ", !0) } }, { key: "forward", value: function (e, t, n, r) { return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e)) } }, { key: "create", value: function (t) { return new e(this.logger, i({}, { prefix: "".concat(this.prefix, ":").concat(t, ":") }, this.options)) } }]), e }()), d = function () { function e() { t(this, e), this.observers = {} } return r(e, [{ key: "on", value: function (e, t) { var n = this; return e.split(" ").forEach(function (e) { n.observers[e] = n.observers[e] || [], n.observers[e].push(t) }), this } }, { key: "off", value: function (e, t) { var n = this; this.observers[e] && this.observers[e].forEach(function () { if (t) { var r = n.observers[e].indexOf(t); r > -1 && n.observers[e].splice(r, 1) } else delete n.observers[e] }) } }, { key: "emit", value: function (e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r]; this.observers[e] && [].concat(this.observers[e]).forEach(function (e) { e.apply(void 0, n) }); this.observers["*"] && [].concat(this.observers["*"]).forEach(function (t) { t.apply(t, [e].concat(n)) }) } }]), e }(); function v() { var e, t, n = new Promise(function (n, r) { e = n, t = r }); return n.resolve = e, n.reject = t, n } function y(e) { return null == e ? "" : "" + e } function m(e, t, n) { function r(e) { return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e } function o() { return !e || "string" == typeof e } for (var i = "string" != typeof t ? [].concat(t) : t.split("."); i.length > 1;) { if (o()) return {}; var a = r(i.shift()); !e[a] && n && (e[a] = new n), e = e[a] } return o() ? {} : { obj: e, k: r(i.shift()) } } function b(e, t, n) { var r = m(e, t, Object); r.obj[r.k] = n } function k(e, t) { var n = m(e, t), r = n.obj, o = n.k; if (r) return r[o] } function x(e) { return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") } var S = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" }; function w(e) { return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function (e) { return S[e] }) : e } var O = function (e) { function n(e) { var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" }; return t(this, n), r = c(this, s(n).call(this)), d.call(l(l(r))), r.data = e || {}, r.options = o, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), r } return a(n, d), r(n, [{ key: "addNamespaces", value: function (e) { this.options.ns.indexOf(e) < 0 && this.options.ns.push(e) } }, { key: "removeNamespaces", value: function (e) { var t = this.options.ns.indexOf(e); t > -1 && this.options.ns.splice(t, 1) } }, { key: "getResource", value: function (e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator, i = [e, t]; return n && "string" != typeof n && (i = i.concat(n)), n && "string" == typeof n && (i = i.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (i = e.split(".")), k(this.data, i) } }, { key: "addResource", value: function (e, t, n, r) { var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 }, i = this.options.keySeparator; void 0 === i && (i = "."); var a = [e, t]; n && (a = a.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (r = t, t = (a = e.split("."))[1]), this.addNamespaces(t), b(this.data, a, r), o.silent || this.emit("added", e, t, n, r) } }, { key: "addResources", value: function (e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: !1 }; for (var o in n) "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], { silent: !0 }); r.silent || this.emit("added", e, t, n) } }, { key: "addResourceBundle", value: function (e, t, n, r, o) { var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: !1 }, s = [e, t]; e.indexOf(".") > -1 && (r = n, n = t, t = (s = e.split("."))[1]), this.addNamespaces(t); var u = k(this.data, s) || {}; r ? function e(t, n, r) { for (var o in n) o in t ? "string" == typeof t[o] || t[o] instanceof String || "string" == typeof n[o] || n[o] instanceof String ? r && (t[o] = n[o]) : e(t[o], n[o], r) : t[o] = n[o]; return t }(u, n, o) : u = i({}, u, n), b(this.data, s, u), a.silent || this.emit("added", e, t, n) } }, { key: "removeResourceBundle", value: function (e, t) { this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t) } }, { key: "hasResourceBundle", value: function (e, t) { return void 0 !== this.getResource(e, t) } }, { key: "getResourceBundle", value: function (e, t) { return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? i({}, {}, this.getResource(e, t)) : this.getResource(e, t) } }, { key: "getDataByLanguage", value: function (e) { return this.data[e] } }, { key: "toJSON", value: function () { return this.data } }]), n }(), R = { processors: {}, addPostProcessor: function (e) { this.processors[e.name] = e }, handle: function (e, t, n, r, o) { var i = this; return e.forEach(function (e) { i.processors[e] && (t = i.processors[e].process(t, n, r, o)) }), t } }, j = function (n) { function o(e) { var n, r, i, a, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return t(this, o), n = c(this, s(o).call(this)), d.call(l(l(n))), r = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat"], i = e, a = l(l(n)), r.forEach(function (e) { i[e] && (a[e] = i[e]) }), n.options = u, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = h.create("translator"), n } return a(o, d), r(o, [{ key: "changeLanguage", value: function (e) { e && (this.language = e) } }, { key: "exists", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} }, n = this.resolve(e, t); return n && void 0 !== n.res } }, { key: "extractFromKey", value: function (e, t) { var n = t.nsSeparator || this.options.nsSeparator; void 0 === n && (n = ":"); var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator, o = t.ns || this.options.defaultNS; if (n && e.indexOf(n) > -1) { var i = e.split(n); (n !== r || n === r && this.options.ns.indexOf(i[0]) > -1) && (o = i.shift()), e = i.join(r) } return "string" == typeof o && (o = [o]), { key: e, namespaces: o } } }, { key: "translate", value: function (t, n) { var r = this; if ("object" !== e(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), null == t) return ""; Array.isArray(t) || (t = [String(t)]); var o = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator, a = this.extractFromKey(t[t.length - 1], n), s = a.key, u = a.namespaces, l = u[u.length - 1], c = n.lng || this.language, f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode; if (c && "cimode" === c.toLowerCase()) { if (f) { var p = n.nsSeparator || this.options.nsSeparator; return l + p + s } return s } var g = this.resolve(t, n), h = g && g.res, d = g && g.usedKey || s, v = g && g.exactUsedKey || s, y = Object.prototype.toString.apply(h), m = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject; if (b && h && ("string" != typeof h && "boolean" != typeof h && "number" != typeof h) && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(y) < 0 && ("string" != typeof m || "[object Array]" !== y)) { if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(d, h, n) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string."); if (o) { var k = "[object Array]" === y, x = k ? [] : {}, S = k ? v : d; for (var w in h) if (Object.prototype.hasOwnProperty.call(h, w)) { var O = "".concat(S).concat(o).concat(w); x[w] = this.translate(O, i({}, n, { joinArrays: !1, ns: u })), x[w] === O && (x[w] = h[w]) } h = x } } else if (b && "string" == typeof m && "[object Array]" === y) (h = h.join(m)) && (h = this.extendTranslation(h, t, n)); else { var R = !1, j = !1; if (!this.isValidLookup(h) && void 0 !== n.defaultValue) { if (R = !0, void 0 !== n.count) { var L = this.pluralResolver.getSuffix(c, n.count); h = n["defaultValue".concat(L)] } h || (h = n.defaultValue) } this.isValidLookup(h) || (j = !0, h = s); var N = n.defaultValue && n.defaultValue !== h && this.options.updateMissing; if (j || R || N) { this.logger.log(N ? "updateKey" : "missingKey", c, l, s, N ? n.defaultValue : h); var P = [], C = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language); if ("fallback" === this.options.saveMissingTo && C && C[0]) for (var E = 0; E < C.length; E++)P.push(C[E]); else "all" === this.options.saveMissingTo ? P = this.languageUtils.toResolveHierarchy(n.lng || this.language) : P.push(n.lng || this.language); var F = function (e, t) { r.options.missingKeyHandler ? r.options.missingKeyHandler(e, l, t, N ? n.defaultValue : h, N, n) : r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(e, l, t, N ? n.defaultValue : h, N, n), r.emit("missingKey", e, l, t, h) }; if (this.options.saveMissing) { var A = void 0 !== n.count && "string" != typeof n.count; this.options.saveMissingPlurals && A ? P.forEach(function (e) { r.pluralResolver.getPluralFormsOfKey(e, s).forEach(function (t) { return F([e], t) }) }) : F(P, s) } } h = this.extendTranslation(h, t, n, g), j && h === s && this.options.appendNamespaceToMissingKey && (h = "".concat(l, ":").concat(s)), j && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h)) } return h } }, { key: "extendTranslation", value: function (e, t, n, r) { var o = this; if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, { resolved: r }); else if (!n.skipInterpolation) { n.interpolation && this.interpolator.init(i({}, n, { interpolation: i({}, this.options.interpolation, n.interpolation) })); var a = n.replace && "string" != typeof n.replace ? n.replace : n; this.options.interpolation.defaultVariables && (a = i({}, this.options.interpolation.defaultVariables, a)), e = this.interpolator.interpolate(e, a, n.lng || this.language, n), !1 !== n.nest && (e = this.interpolator.nest(e, function () { return o.translate.apply(o, arguments) }, n)), n.interpolation && this.interpolator.reset() } var s = n.postProcess || this.options.postProcess, u = "string" == typeof s ? [s] : s; return null != e && u && u.length && !1 !== n.applyPostProcessor && (e = R.handle(u, e, t, n, this)), e } }, { key: "resolve", value: function (e) { var t, n, r, o, i, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return "string" == typeof e && (e = [e]), e.forEach(function (e) { if (!a.isValidLookup(t)) { var u = a.extractFromKey(e, s), l = u.key; n = l; var c = u.namespaces; a.options.fallbackNS && (c = c.concat(a.options.fallbackNS)); var f = void 0 !== s.count && "string" != typeof s.count, p = void 0 !== s.context && "string" == typeof s.context && "" !== s.context, g = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng); c.forEach(function (e) { a.isValidLookup(t) || (i = e, g.forEach(function (n) { if (!a.isValidLookup(t)) { o = n; var i, u, c = l, g = [c]; if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(g, l, n, e, s); else f && (i = a.pluralResolver.getSuffix(n, s.count)), f && p && g.push(c + i), p && g.push(c += "".concat(a.options.contextSeparator).concat(s.context)), f && g.push(c += i); for (; u = g.pop();)a.isValidLookup(t) || (r = u, t = a.getResource(n, e, u, s)) } })) }) } }), { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i } } }, { key: "isValidLookup", value: function (e) { return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e) } }, { key: "getResource", value: function (e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r) } }]), o }(); function L(e) { return e.charAt(0).toUpperCase() + e.slice(1) } var N = function () { function e(n) { t(this, e), this.options = n, this.whitelist = this.options.whitelist || !1, this.logger = h.create("languageUtils") } return r(e, [{ key: "getScriptPartFromCode", value: function (e) { if (!e || e.indexOf("-") < 0) return null; var t = e.split("-"); return 2 === t.length ? null : (t.pop(), this.formatLanguageCode(t.join("-"))) } }, { key: "getLanguagePartFromCode", value: function (e) { if (!e || e.indexOf("-") < 0) return e; var t = e.split("-"); return this.formatLanguageCode(t[0]) } }, { key: "formatLanguageCode", value: function (e) { if ("string" == typeof e && e.indexOf("-") > -1) { var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], n = e.split("-"); return this.options.lowerCaseLng ? n = n.map(function (e) { return e.toLowerCase() }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = L(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = L(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = L(n[2].toLowerCase()))), n.join("-") } return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e } }, { key: "isWhitelisted", value: function (e) { return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1 } }, { key: "getFallbackCodes", value: function (e, t) { if (!e) return []; if ("string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e; if (!t) return e.default || []; var n = e[t]; return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e.default), n || [] } }, { key: "toResolveHierarchy", value: function (e, t) { var n = this, r = this.getFallbackCodes(t || this.options.fallbackLng || [], e), o = [], i = function (e) { e && (n.isWhitelisted(e) ? o.push(e) : n.logger.warn("rejecting non-whitelisted language code: ".concat(e))) }; return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)), r.forEach(function (e) { o.indexOf(e) < 0 && i(n.formatLanguageCode(e)) }), o } }]), e }(), P = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he"], nr: [1, 2, 20, 21], fc: 22 }], C = { 1: function (e) { return Number(e > 1) }, 2: function (e) { return Number(1 != e) }, 3: function (e) { return 0 }, 4: function (e) { return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2) }, 5: function (e) { return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5) }, 6: function (e) { return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2) }, 7: function (e) { return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2) }, 8: function (e) { return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3) }, 9: function (e) { return Number(e >= 2) }, 10: function (e) { return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4) }, 11: function (e) { return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3) }, 12: function (e) { return Number(e % 10 != 1 || e % 100 == 11) }, 13: function (e) { return Number(0 !== e) }, 14: function (e) { return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3) }, 15: function (e) { return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2) }, 16: function (e) { return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2) }, 17: function (e) { return Number(1 == e || e % 10 == 1 ? 0 : 1) }, 18: function (e) { return Number(0 == e ? 0 : 1 == e ? 1 : 2) }, 19: function (e) { return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3) }, 20: function (e) { return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2) }, 21: function (e) { return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0) }, 22: function (e) { return Number(1 === e ? 0 : 2 === e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3) } }; var E = function () { function e(n) { var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; t(this, e), this.languageUtils = n, this.options = o, this.logger = h.create("pluralResolver"), this.rules = (r = {}, P.forEach(function (e) { e.lngs.forEach(function (t) { r[t] = { numbers: e.nr, plurals: C[e.fc] } }) }), r) } return r(e, [{ key: "addRule", value: function (e, t) { this.rules[e] = t } }, { key: "getRule", value: function (e) { return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)] } }, { key: "needsPlural", value: function (e) { var t = this.getRule(e); return t && t.numbers.length > 1 } }, { key: "getPluralFormsOfKey", value: function (e, t) { var n = this, r = [], o = this.getRule(e); return o ? (o.numbers.forEach(function (o) { var i = n.getSuffix(e, o); r.push("".concat(t).concat(i)) }), r) : r } }, { key: "getSuffix", value: function (e, t) { var n = this, r = this.getRule(e); if (r) { var o = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)), i = r.numbers[o]; this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = "")); var a = function () { return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString() }; return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" == typeof i ? "_plural_".concat(i.toString()) : a() : "v2" === this.options.compatibilityJSON ? a() : this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString() } return this.logger.warn("no plural rule found for: ".concat(e)), "" } }]), e }(), F = function () { function e() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; t(this, e), this.logger = h.create("interpolator"), this.init(n, !0) } return r(e, [{ key: "init", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; (arguments.length > 1 ? arguments[1] : void 0) && (this.options = e, this.format = e.interpolation && e.interpolation.format || function (e) { return e }), e.interpolation || (e.interpolation = { escapeValue: !0 }); var t = e.interpolation; this.escape = void 0 !== t.escape ? t.escape : w, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? x(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? x(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? x(t.nestingPrefix) : t.nestingPrefixEscaped || x("$t("), this.nestingSuffix = t.nestingSuffix ? x(t.nestingSuffix) : t.nestingSuffixEscaped || x(")"), this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.resetRegExp() } }, { key: "reset", value: function () { this.options && this.init(this.options) } }, { key: "resetRegExp", value: function () { var e = "".concat(this.prefix, "(.+?)").concat(this.suffix); this.regexp = new RegExp(e, "g"); var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix); this.regexpUnescape = new RegExp(t, "g"); var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix); this.nestingRegexp = new RegExp(n, "g") } }, { key: "interpolate", value: function (e, t, n, r) { var o, i, a, s = this; function u(e) { return e.replace(/\$/g, "$$$$") } var l = function (e) { if (e.indexOf(s.formatSeparator) < 0) return k(t, e); var r = e.split(s.formatSeparator), o = r.shift().trim(), i = r.join(s.formatSeparator).trim(); return s.format(k(t, o), i, n) }; this.resetRegExp(); var c = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler; for (a = 0; (o = this.regexpUnescape.exec(e)) && (i = l(o[1].trim()), e = e.replace(o[0], i), this.regexpUnescape.lastIndex = 0, !(++a >= this.maxReplaces));); for (a = 0; o = this.regexp.exec(e);) { if (void 0 === (i = l(o[1].trim()))) if ("function" == typeof c) { var f = c(e, o, r); i = "string" == typeof f ? f : "" } else this.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), i = ""; else "string" == typeof i || this.useRawValueToEscape || (i = y(i)); if (i = this.escapeValue ? u(this.escape(i)) : u(i), e = e.replace(o[0], i), this.regexp.lastIndex = 0, ++a >= this.maxReplaces) break } return e } }, { key: "nest", value: function (e, t) { var n, r, o = i({}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}); function a(e, t) { if (e.indexOf(",") < 0) return e; var n = e.split(","); e = n.shift(); var r = n.join(","); r = (r = this.interpolate(r, o)).replace(/'/g, '"'); try { o = JSON.parse(r), t && (o = i({}, t, o)) } catch (t) { this.logger.error("failed parsing options string in nesting for key ".concat(e), t) } return e } for (o.applyPostProcessor = !1; n = this.nestingRegexp.exec(e);) { if ((r = t(a.call(this, n[1].trim(), o), o)) && n[0] === e && "string" != typeof r) return r; "string" != typeof r && (r = y(r)), r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), r = ""), e = e.replace(n[0], r), this.regexp.lastIndex = 0 } return e } }]), e }(); var A = function (e) { function n(e, r, o) { var i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return t(this, n), i = c(this, s(n).call(this)), d.call(l(l(i))), i.backend = e, i.store = r, i.languageUtils = o.languageUtils, i.options = a, i.logger = h.create("backendConnector"), i.state = {}, i.queue = [], i.backend && i.backend.init && i.backend.init(o, a.backend, a), i } return a(n, d), r(n, [{ key: "queueLoad", value: function (e, t, n, r) { var o = this, i = [], a = [], s = [], u = []; return e.forEach(function (e) { var r = !0; t.forEach(function (t) { var s = "".concat(e, "|").concat(t); !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1, r = !1, a.indexOf(s) < 0 && a.push(s), i.indexOf(s) < 0 && i.push(s), u.indexOf(t) < 0 && u.push(t))) }), r || s.push(e) }), (i.length || a.length) && this.queue.push({ pending: a, loaded: {}, errors: [], callback: r }), { toLoad: i, pending: a, toLoadLanguages: s, toLoadNamespaces: u } } }, { key: "loaded", value: function (e, t, n) { var r = f(e.split("|"), 2), o = r[0], i = r[1]; t && this.emit("failedLoading", o, i, t), n && this.store.addResourceBundle(o, i, n), this.state[e] = t ? -1 : 2; var a = {}; this.queue.forEach(function (n) { var r, s, u, l, c, f; r = n.loaded, s = i, l = m(r, [o], Object), c = l.obj, f = l.k, c[f] = c[f] || [], u && (c[f] = c[f].concat(s)), u || c[f].push(s), function (e, t) { for (var n = e.indexOf(t); -1 !== n;)e.splice(n, 1), n = e.indexOf(t) }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach(function (e) { a[e] || (a[e] = []), n.loaded[e].length && n.loaded[e].forEach(function (t) { a[e].indexOf(t) < 0 && a[e].push(t) }) }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback()) }), this.emit("loaded", a), this.queue = this.queue.filter(function (e) { return !e.done }) } }, { key: "read", value: function (e, t, n) { var r = this, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250, a = arguments.length > 5 ? arguments[5] : void 0; return e.length ? this.backend[n](e, t, function (s, u) { s && u && o < 5 ? setTimeout(function () { r.read.call(r, e, t, n, o + 1, 2 * i, a) }, i) : a(s, u) }) : a(null, {}) } }, { key: "prepareLoading", value: function (e, t) { var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0; if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o(); "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]); var i = this.queueLoad(e, t, r, o); if (!i.toLoad.length) return i.pending.length || o(), null; i.toLoad.forEach(function (e) { n.loadOne(e) }) } }, { key: "load", value: function (e, t, n) { this.prepareLoading(e, t, {}, n) } }, { key: "reload", value: function (e, t, n) { this.prepareLoading(e, t, { reload: !0 }, n) } }, { key: "loadOne", value: function (e) { var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = f(e.split("|"), 2), o = r[0], i = r[1]; this.read(o, i, "read", null, null, function (r, a) { r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r), !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a), t.loaded(e, r, a) }) } }, { key: "saveMissing", value: function (e, t, n, r, o) { var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}; this.backend && this.backend.create && this.backend.create(e, t, n, r, null, i({}, a, { isUpdate: o })), e && e[0] && this.store.addResource(e[0], t, n, r) } }]), n }(); function T(e) { return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e } function V() { } return new (function (n) { function o() { var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0; if (t(this, o), e = c(this, s(o).call(this)), d.call(l(l(e))), e.options = T(n), e.services = {}, e.logger = h, e.modules = { external: [] }, r && !e.isInitialized && !n.isClone) { if (!e.options.initImmediate) return e.init(n, r), c(e, l(l(e))); setTimeout(function () { e.init(n, r) }, 0) } return e } return a(o, d), r(o, [{ key: "init", value: function () { var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0; function o(e) { return e ? "function" == typeof e ? new e : e : null } if ("function" == typeof n && (r = n, n = {}), this.options = i({}, { debug: !1, initImmediate: !0, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, whitelist: !1, nonExplicitWhitelist: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, returnNull: !0, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: function () { }, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function (t) { var n = {}; if ("object" === e(t[1]) && (n = t[1]), "string" == typeof t[1] && (n.defaultValue = t[1]), "string" == typeof t[2] && (n.tDescription = t[2]), "object" === e(t[2]) || "object" === e(t[3])) { var r = t[3] || t[2]; Object.keys(r).forEach(function (e) { n[e] = r[e] }) } return n }, interpolation: { escapeValue: !0, format: function (e, t, n) { return e }, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", maxReplaces: 1e3 } }, this.options, T(n)), this.format = this.options.interpolation.format, r || (r = V), !this.options.isClone) { this.modules.logger ? h.init(o(this.modules.logger), this.options) : h.init(null, this.options); var a = new N(this.options); this.store = new O(this.options.resources, this.options); var s = this.services; s.logger = h, s.resourceStore = this.store, s.languageUtils = a, s.pluralResolver = new E(a, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), s.interpolator = new F(this.options), s.backendConnector = new A(o(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", function (e) { for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)r[o - 1] = arguments[o]; t.emit.apply(t, [e].concat(r)) }), this.modules.languageDetector && (s.languageDetector = o(this.modules.languageDetector), s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = o(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new j(this.services, this.options), this.translator.on("*", function (e) { for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)r[o - 1] = arguments[o]; t.emit.apply(t, [e].concat(r)) }), this.modules.external.forEach(function (e) { e.init && e.init(t) }) } ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function (e) { t[e] = function () { var n; return (n = t.store)[e].apply(n, arguments) } }); var u = v(), l = function () { t.changeLanguage(t.options.lng, function (e, n) { t.isInitialized = !0, t.logger.log("initialized", t.options), t.emit("initialized", t.options), u.resolve(n), r(e, n) }) }; return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), u } }, { key: "loadResources", value: function () { var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V; if (!this.options.resources || this.options.partialBundledLanguages) { if (this.language && "cimode" === this.language.toLowerCase()) return t(); var n = [], r = function (t) { t && e.services.languageUtils.toResolveHierarchy(t).forEach(function (e) { n.indexOf(e) < 0 && n.push(e) }) }; if (this.language) r(this.language); else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function (e) { return r(e) }); this.options.preload && this.options.preload.forEach(function (e) { return r(e) }), this.services.backendConnector.load(n, this.options.ns, t) } else t(null) } }, { key: "reloadResources", value: function (e, t, n) { var r = v(); return e || (e = this.languages), t || (t = this.options.ns), n || (n = V), this.services.backendConnector.reload(e, t, function (e) { r.resolve(), n(e) }), r } }, { key: "use", value: function (e) { return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && R.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this } }, { key: "changeLanguage", value: function (e, t) { var n = this, r = v(), o = function (e) { e && (n.language = e, n.languages = n.services.languageUtils.toResolveHierarchy(e), n.translator.language || n.translator.changeLanguage(e), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(e)), n.loadResources(function (o) { !function (e, o) { n.translator.changeLanguage(o), o && (n.emit("languageChanged", o), n.logger.log("languageChanged", o)), r.resolve(function () { return n.t.apply(n, arguments) }), t && t(e, function () { return n.t.apply(n, arguments) }) }(o, e) }) }; return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), r } }, { key: "getFixedT", value: function (t, n) { var r = this, o = function t(n, o) { var a = i({}, o); if ("object" !== e(o)) { for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++)u[l - 2] = arguments[l]; a = r.options.overloadTranslationOptionHandler([n, o].concat(u)) } return a.lng = a.lng || t.lng, a.lngs = a.lngs || t.lngs, a.ns = a.ns || t.ns, r.t(n, a) }; return "string" == typeof t ? o.lng = t : o.lngs = t, o.ns = n, o } }, { key: "t", value: function () { var e; return this.translator && (e = this.translator).translate.apply(e, arguments) } }, { key: "exists", value: function () { var e; return this.translator && (e = this.translator).exists.apply(e, arguments) } }, { key: "setDefaultNamespace", value: function (e) { this.options.defaultNS = e } }, { key: "loadNamespaces", value: function (e, t) { var n = this, r = v(); return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(function (e) { n.options.ns.indexOf(e) < 0 && n.options.ns.push(e) }), this.loadResources(function (e) { r.resolve(), t && t(e) }), r) : (t && t(), Promise.resolve()) } }, { key: "loadLanguages", value: function (e, t) { var n = v(); "string" == typeof e && (e = [e]); var r = this.options.preload || [], o = e.filter(function (e) { return r.indexOf(e) < 0 }); return o.length ? (this.options.preload = r.concat(o), this.loadResources(function (e) { n.resolve(), t && t(e) }), n) : (t && t(), Promise.resolve()) } }, { key: "dir", value: function (e) { if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e) return "rtl"; return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" } }, { key: "createInstance", value: function () { return new o(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0) } }, { key: "cloneInstance", value: function () { var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V, r = i({}, this.options, t, { isClone: !0 }), a = new o(r); return ["store", "services", "language"].forEach(function (t) { a[t] = e[t] }), a.translator = new j(a.services, a.options), a.translator.on("*", function (e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r]; a.emit.apply(a, [e].concat(n)) }), a.init(r, n), a.translator.options = a.options, a } }]), o }()) });

// I18n XHR Backend
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.i18nextXHRBackend = e() }(this, function () { "use strict"; function t(t) { return r.call(s.call(arguments, 1), function (e) { if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n]) }), t } function e(t, e) { if (e && "object" === (void 0 === e ? "undefined" : l(e))) { var n = "", o = encodeURIComponent; for (var i in e) n += "&" + o(i) + "=" + o(e[i]); if (!n) return t; t = t + (-1 !== t.indexOf("?") ? "&" : "?") + n.slice(1) } return t } function n(t, n, o, i, a) { i && "object" === (void 0 === i ? "undefined" : l(i)) && (a || (i._t = new Date), i = e("", i).slice(1)), n.queryStringParams && (t = e(t, n.queryStringParams)); try { var r; r = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0"), r.open(i ? "POST" : "GET", t, 1), n.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.withCredentials = !!n.withCredentials, i && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.overrideMimeType && r.overrideMimeType("application/json"); var s = n.customHeaders; if (s) for (var u in s) r.setRequestHeader(u, s[u]); r.onreadystatechange = function () { r.readyState > 3 && o && o(r.responseText, r) }, r.send(i) } catch (t) { console && console.log(t) } } function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function i() { return { loadPath: "/locales/{{lng}}/{{ns}}.json", addPath: "/locales/add/{{lng}}/{{ns}}", allowMultiLoading: !1, parse: JSON.parse, crossDomain: !1, ajax: n } } var a = [], r = a.forEach, s = a.slice, l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, u = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function (e, n, o) { return n && t(e.prototype, n), o && t(e, o), e } }(), c = function () { function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; o(this, e), this.init(t, n), this.type = "backend" } return u(e, [{ key: "init", value: function (e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; this.services = e, this.options = t(n, this.options || {}, i()) } }, { key: "readMulti", value: function (t, e, n) { var o = this.options.loadPath; "function" == typeof this.options.loadPath && (o = this.options.loadPath(t, e)); var i = this.services.interpolator.interpolate(o, { lng: t.join("+"), ns: e.join("+") }); this.loadUrl(i, n) } }, { key: "read", value: function (t, e, n) { var o = this.options.loadPath; "function" == typeof this.options.loadPath && (o = this.options.loadPath([t], [e])); var i = this.services.interpolator.interpolate(o, { lng: t, ns: e }); this.loadUrl(i, n) } }, { key: "loadUrl", value: function (t, e) { var n = this; this.options.ajax(t, this.options, function (o, i) { if (i.status >= 500 && i.status < 600) return e("failed loading " + t, !0); if (i.status >= 400 && i.status < 500) return e("failed loading " + t, !1); var a = void 0, r = void 0; try { a = n.options.parse(o, t) } catch (e) { r = "failed parsing " + t + " to json" } if (r) return e(r, !1); e(null, a) }) } }, { key: "create", value: function (t, e, n, o) { var i = this; "string" == typeof t && (t = [t]); var a = {}; a[n] = o || "", t.forEach(function (t) { var n = i.services.interpolator.interpolate(i.options.addPath, { lng: t, ns: e }); i.options.ajax(n, i.options, function (t, e) { }, a) }) } }]), e }(); return c.type = "backend", c });

// Language detector i18n
!function (e, o) { "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : e.i18nextBrowserLanguageDetector = o() }(this, function () { "use strict"; function e(e) { return a.call(i.call(arguments, 1), function (o) { if (o) for (var t in o) void 0 === e[t] && (e[t] = o[t]) }), e } function o(e, o) { if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function") } function t() { return { order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"], lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"] } } var n = [], a = n.forEach, i = n.slice, r = { create: function (e, o, t, n) { var a = void 0; if (t) { var i = new Date; i.setTime(i.getTime() + 60 * t * 1e3), a = "; expires=" + i.toGMTString() } else a = ""; n = n ? "domain=" + n + ";" : "", document.cookie = e + "=" + o + a + ";" + n + "path=/" }, read: function (e) { for (var o = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) { for (var a = t[n]; " " === a.charAt(0);)a = a.substring(1, a.length); if (0 === a.indexOf(o)) return a.substring(o.length, a.length) } return null }, remove: function (e) { this.create(e, "", -1) } }, u = { name: "cookie", lookup: function (e) { var o = void 0; if (e.lookupCookie && "undefined" != typeof document) { var t = r.read(e.lookupCookie); t && (o = t) } return o }, cacheUserLanguage: function (e, o) { o.lookupCookie && "undefined" != typeof document && r.create(o.lookupCookie, e, o.cookieMinutes, o.cookieDomain) } }, c = { name: "querystring", lookup: function (e) { var o = void 0; if ("undefined" != typeof window) for (var t = window.location.search.substring(1), n = t.split("&"), a = 0; a < n.length; a++) { var i = n[a].indexOf("="); if (i > 0) { var r = n[a].substring(0, i); r === e.lookupQuerystring && (o = n[a].substring(i + 1)) } } return o } }, l = void 0; try { l = "undefined" !== window && null !== window.localStorage; window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo") } catch (e) { l = !1 } var s = { name: "localStorage", lookup: function (e) { var o = void 0; if (e.lookupLocalStorage && l) { var t = window.localStorage.getItem(e.lookupLocalStorage); t && (o = t) } return o }, cacheUserLanguage: function (e, o) { o.lookupLocalStorage && l && window.localStorage.setItem(o.lookupLocalStorage, e) } }, d = { name: "navigator", lookup: function (e) { var o = []; if ("undefined" != typeof navigator) { if (navigator.languages) for (var t = 0; t < navigator.languages.length; t++)o.push(navigator.languages[t]); navigator.userLanguage && o.push(navigator.userLanguage), navigator.language && o.push(navigator.language) } return o.length > 0 ? o : void 0 } }, f = { name: "htmlTag", lookup: function (e) { var o = void 0, t = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null); return t && "function" == typeof t.getAttribute && (o = t.getAttribute("lang")), o } }, g = { name: "path", lookup: function (e) { var o = void 0; if ("undefined" != typeof window) { var t = window.location.pathname.match(/\/([a-zA-Z-]*)/g); if (t instanceof Array) if ("number" == typeof e.lookupFromPathIndex) { if ("string" != typeof t[e.lookupFromPathIndex]) return; o = t[e.lookupFromPathIndex].replace("/", "") } else o = t[0].replace("/", "") } return o } }, p = { name: "subdomain", lookup: function (e) { var o = void 0; if ("undefined" != typeof window) { var t = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi); t instanceof Array && (o = "number" == typeof e.lookupFromSubdomainIndex ? t[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : t[0].replace("http://", "").replace("https://", "").replace(".", "")) } return o } }, h = function () { function e(e, o) { for (var t = 0; t < o.length; t++) { var n = o[t]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (o, t, n) { return t && e(o.prototype, t), n && e(o, n), o } }(), v = function () { function n(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; o(this, n), this.type = "languageDetector", this.detectors = {}, this.init(e, t) } return h(n, [{ key: "init", value: function (o) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; this.services = o, this.options = e(n, this.options || {}, t()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = a, this.addDetector(u), this.addDetector(c), this.addDetector(s), this.addDetector(d), this.addDetector(f), this.addDetector(g), this.addDetector(p) } }, { key: "addDetector", value: function (e) { this.detectors[e.name] = e } }, { key: "detect", value: function (e) { var o = this; e || (e = this.options.order); var t = []; e.forEach(function (e) { if (o.detectors[e]) { var n = o.detectors[e].lookup(o.options); n && "string" == typeof n && (n = [n]), n && (t = t.concat(n)) } }); var n = void 0; if (t.forEach(function (e) { if (!n) { var t = o.services.languageUtils.formatLanguageCode(e); o.services.languageUtils.isWhitelisted(t) && (n = t) } }), !n) { var a = this.i18nOptions.fallbackLng; "string" == typeof a && (a = [a]), a || (a = []), n = "[object Array]" === Object.prototype.toString.apply(a) ? a[0] : a[0] || a.default && a.default[0] } return n } }, { key: "cacheUserLanguage", value: function (e, o) { var t = this; o || (o = this.options.caches), o && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || o.forEach(function (o) { t.detectors[o] && t.detectors[o].cacheUserLanguage(e, t.options) })) } }]), n }(); return v.type = "languageDetector", v });

// I18n Jquery
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.jqueryI18next = e() }(this, function () { "use strict"; function t(t, a) { function i(n, a, i) { function r(t, n) { return f.parseDefaultValueFromContent ? e({}, t, { defaultValue: n }) : t } if (0 !== a.length) { var o = "text"; if (0 === a.indexOf("[")) { var l = a.split("]"); a = l[1], o = l[0].substr(1, l[0].length - 1) } if (a.indexOf(";") === a.length - 1 && (a = a.substr(0, a.length - 2)), "html" === o) n.html(t.t(a, r(i, n.html()))); else if ("text" === o) n.text(t.t(a, r(i, n.text()))); else if ("prepend" === o) n.prepend(t.t(a, r(i, n.html()))); else if ("append" === o) n.append(t.t(a, r(i, n.html()))); else if (0 === o.indexOf("data-")) { var s = o.substr("data-".length), d = t.t(a, r(i, n.data(s))); n.data(s, d), n.attr(o, d) } else n.attr(o, t.t(a, r(i, n.attr(o)))) } } function r(t, n) { var r = t.attr(f.selectorAttr); if (r || void 0 === r || !1 === r || (r = t.text() || t.val()), r) { var o = t, l = t.data(f.targetAttr); if (l && (o = t.find(l) || t), n || !0 !== f.useOptionsAttr || (n = t.data(f.optionsAttr)), n = n || {}, r.indexOf(";") >= 0) { var s = r.split(";"); a.each(s, function (t, e) { "" !== e && i(o, e.trim(), n) }) } else i(o, r, n); if (!0 === f.useOptionsAttr) { var d = {}; d = e({ clone: d }, n), delete d.lng, t.data(f.optionsAttr, d) } } } function o(t) { return this.each(function () { r(a(this), t), a(this).find("[" + f.selectorAttr + "]").each(function () { r(a(this), t) }) }) } var f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; f = e({}, n, f), a[f.tName] = t.t.bind(t), a[f.i18nName] = t, a.fn[f.handleName] = o } var e = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]) } return t }, n = { tName: "t", i18nName: "i18n", handleName: "localize", selectorAttr: "data-i18n", targetAttr: "i18n-target", optionsAttr: "i18n-options", useOptionsAttr: !1, parseDefaultValueFromContent: !0 }; return { init: t } });

!function(e,n,a){"use strict";a.app=a.app||{};var t=a("body"),i=a(e),s=a('div[data-menu="menu-wrapper"]').html(),o=a('div[data-menu="menu-wrapper"]').attr("class");a.app.menu={expanded:null,collapsed:null,hidden:null,container:null,horizontalMenu:!1,is_touch_device:function(){var a=" -webkit- -moz- -o- -ms- ".split(" ");return!!("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)||function(n){return e.matchMedia(n).matches}(["(",a.join("touch-enabled),("),"heartz",")"].join(""))},manualScroller:{obj:null,init:function(){a.app.menu.is_touch_device()?a(".main-menu").addClass("menu-native-scroll"):this.obj=new PerfectScrollbar(".main-menu-content",{suppressScrollX:!0,wheelPropagation:!1})},update:function(){if(this.obj){if(!0===a(".main-menu").data("scroll-to-active")){var e,i,s;if(e=n.querySelector(".main-menu-content li.active"),i=n.querySelector(".main-menu-content"),t.hasClass("menu-collapsed")&&a(".main-menu-content li.menu-collapsed-open").length&&(e=n.querySelector(".main-menu-content li.menu-collapsed-open")),e&&(s=e.getBoundingClientRect().top+i.scrollTop),s>parseInt(2*i.clientHeight/3))var o=s-i.scrollTop-parseInt(i.clientHeight/2);setTimeout((function(){a.app.menu.container.stop().animate({scrollTop:o},300),a(".main-menu").data("scroll-to-active","false")}),300)}this.obj.update()}},enable:function(){a(".main-menu-content").hasClass("ps")||this.init()},disable:function(){this.obj&&this.obj.destroy()},updateHeight:function(){"vertical-menu"!=t.data("menu")&&"vertical-menu-modern"!=t.data("menu")&&"vertical-overlay-menu"!=t.data("menu")||!a(".main-menu").hasClass("menu-fixed")||(a(".main-menu-content").css("height",a(e).height()-a(".header-navbar").height()-a(".main-menu-header").outerHeight()),this.update())}},init:function(e){if(a(".main-menu-content").length>0){this.container=a(".main-menu-content");var n="";!0===e&&(n="collapsed"),this.change(n)}"collapsed"===n&&this.collapse()},change:function(n){var i=Unison.fetch.now();this.reset();var s=t.data("menu");if(i)switch(i.name){case"xl":"vertical-overlay-menu"===s?this.hide():"vertical-compact-menu"===s?this.open():"collapsed"===n?this.collapse(n):this.expand();break;case"lg":"vertical-overlay-menu"===s?this.hide():"vertical-compact-menu"===s?this.open():"horizontal-menu"===s?this.hide():"collapsed"===n?this.collapse(n):this.expand();break;case"md":"vertical-overlay-menu"===s||"vertical-menu-modern"===s?this.hide():"vertical-compact-menu"===s?this.open():"horizontal-menu"===s?this.hide():this.collapse();break;case"sm":case"xs":this.hide()}"vertical-menu"!==s&&"vertical-compact-menu"!==s&&"vertical-content-menu"!==s&&"vertical-menu-modern"!==s||this.toOverlayMenu(i.name,s),t.is(".horizontal-layout")&&!t.hasClass(".horizontal-menu-demo")&&(this.changeMenu(i.name),a(".menu-toggle").removeClass("is-active")),"xl"==i.name&&a('body[data-open="hover"] .dropdown').off("mouseenter").on("mouseenter",(function(e){a(this).hasClass("show")?a(this).removeClass("show"):a(this).addClass("show")})).off("mouseleave").on("mouseleave",(function(e){a(this).removeClass("show")})),a(".header-navbar").hasClass("navbar-brand-center")&&a(".header-navbar").attr("data-nav","brand-center"),"sm"==i.name||"xs"==i.name?a(".header-navbar[data-nav=brand-center]").removeClass("navbar-brand-center"):a(".header-navbar[data-nav=brand-center]").addClass("navbar-brand-center"),a("ul.dropdown-menu [data-toggle=dropdown]").on("click",(function(e){a(this).siblings("ul.dropdown-menu").length>0&&e.preventDefault(),e.stopPropagation(),a(this).parent().siblings().removeClass("show"),a(this).parent().toggleClass("show")})),"horizontal-menu"==s&&(a("li.dropdown-submenu .dropdown-item").on("click",(function(){var n=a(this).parent().find(".dropdown-menu");if(n.length){var t=a(e).height(),i=n.offset().top,s=n.offset().left,o=n.width();if(t-i-n.height()-28<1){var l=t-i-25;if("click"===a("body").data("open")){a(this).parent().find(".dropdown-menu").css({"max-height":l+"px","overflow-y":"auto","overflow-x":"hidden"});new PerfectScrollbar("li.dropdown-submenu.show .dropdown-menu",{wheelPropagation:!1})}}"ltr"===a("html").data("textdirection")&&s+o-(e.innerWidth-16)>=0?a(this).parent().find(".dropdown-menu").addClass("open-left"):"rtl"===a("html").data("textdirection")&&s+o-(e.innerWidth-1e3)<=0&&a(this).parent().find(".dropdown-menu").addClass("open-left")}})),a("li.dropdown-submenu").on("mouseenter",(function(){var n=a(this).find(".dropdown-menu");if(n.length){var t=a(e).height(),i=n.offset().top,s=n.offset().left,o=n.width();if(t-i-n.height()-28<1){var l=t-i-25;if("hover"===a("body").data("open")){a(this).find(".dropdown-menu").css({"max-height":l+"px","overflow-y":"auto","overflow-x":"hidden"});new PerfectScrollbar("li.dropdown-submenu.show .dropdown-menu",{wheelPropagation:!1})}}"ltr"===a("html").data("textdirection")&&s+o-(e.innerWidth-16)>=0?a(this).parent().find(".dropdown-menu").addClass("open-left"):"rtl"===a("html").data("textdirection")&&s+o-(e.innerWidth-1e3)<=0&&a(this).parent().find(".dropdown-menu").addClass("open-left")}}))),"horizontal-menu"==s&&("xl"==i.name?a(".navbar-fixed").length&&a(".navbar-fixed").sticky():a(".menu-fixed").length&&a(".menu-fixed").unstick())},transit:function(e,n){var i=this;t.addClass("changing-menu"),e.call(i),t.hasClass("vertical-layout")&&(t.hasClass("menu-open")||t.hasClass("menu-expanded")?(a(".menu-toggle").addClass("is-active"),"vertical-menu"!==t.data("menu")&&"vertical-content-menu"!==t.data("menu")||a(".main-menu-header")&&a(".main-menu-header").show()):(a(".menu-toggle").removeClass("is-active"),"vertical-menu"!==t.data("menu")&&"vertical-content-menu"!==t.data("menu")||a(".main-menu-header")&&a(".main-menu-header").hide())),setTimeout((function(){n.call(i),t.removeClass("changing-menu"),i.update()}),500)},open:function(){this.transit((function(){t.removeClass("menu-hide menu-collapsed").addClass("menu-open"),this.hidden=!1,this.expanded=!0,t.hasClass("vertical-overlay-menu")&&(a(".sidenav-overlay").removeClass("d-none").addClass("d-block"),t.css("overflow","hidden"))}),(function(){!a(".main-menu").hasClass("menu-native-scroll")&&a(".main-menu").hasClass("menu-fixed")&&(this.manualScroller.enable(),a(".main-menu-content").css("height",a(e).height()-a(".header-navbar").height()-a(".main-menu-header").outerHeight())),"vertical-compact-menu"!=t.data("menu")||t.hasClass("vertical-overlay-menu")||(a(".sidenav-overlay").removeClass("d-block d-none"),a("body").css("overflow","auto"))}))},hide:function(){this.transit((function(){t.removeClass("menu-open menu-expanded").addClass("menu-hide"),this.hidden=!0,this.expanded=!1,t.hasClass("vertical-overlay-menu")&&(a(".sidenav-overlay").removeClass("d-block").addClass("d-none"),a("body").css("overflow","auto"))}),(function(){!a(".main-menu").hasClass("menu-native-scroll")&&a(".main-menu").hasClass("menu-fixed")&&this.manualScroller.enable(),"vertical-compact-menu"!=t.data("menu")||t.hasClass("vertical-overlay-menu")||(a(".sidenav-overlay").removeClass("d-block d-none"),a("body").css("overflow","auto"))}))},expand:function(){!1===this.expanded&&("vertical-menu-modern"==t.data("menu")&&a(".modern-nav-toggle").find(".toggle-icon").removeClass("ft-toggle-left").addClass("ft-toggle-right"),this.transit((function(){t.removeClass("menu-collapsed").addClass("menu-expanded"),this.collapsed=!1,this.expanded=!0,a(".sidenav-overlay").removeClass("d-block d-none")}),(function(){a(".main-menu").hasClass("menu-native-scroll")||"horizontal-menu"==t.data("menu")?this.manualScroller.disable():a(".main-menu").hasClass("menu-fixed")&&this.manualScroller.enable(),"vertical-menu"!=t.data("menu")&&"vertical-menu-modern"!=t.data("menu")||!a(".main-menu").hasClass("menu-fixed")||a(".main-menu-content").css("height",a(e).height()-a(".header-navbar").height()-a(".main-menu-header").outerHeight())})))},collapse:function(n){!1===this.collapsed&&("vertical-menu-modern"==t.data("menu")&&a(".modern-nav-toggle").find(".toggle-icon").removeClass("ft-toggle-right").addClass("ft-toggle-left"),this.transit((function(){t.removeClass("menu-expanded").addClass("menu-collapsed"),this.collapsed=!0,this.expanded=!1,a(".content-overlay").removeClass("d-block d-none")}),(function(){"vertical-content-menu"==t.data("menu")&&this.manualScroller.disable(),"horizontal-menu"==t.data("menu")&&t.hasClass("vertical-overlay-menu")&&a(".main-menu").hasClass("menu-fixed")&&this.manualScroller.enable(),"vertical-menu"!=t.data("menu")&&"vertical-menu-modern"!=t.data("menu")||!a(".main-menu").hasClass("menu-fixed")||(a(".main-menu-content").css("height",a(e).height()-a(".header-navbar").height()),a(".main-menu-content").hasClass("ps")||this.manualScroller.enable())})))},toOverlayMenu:function(e,n){var i=t.data("menu");"vertical-menu-modern"==n?"md"==e||"sm"==e||"xs"==e?t.hasClass(i)&&t.removeClass(i).addClass("vertical-overlay-menu"):t.hasClass("vertical-overlay-menu")&&t.removeClass("vertical-overlay-menu").addClass(i):"sm"==e||"xs"==e?(t.hasClass(i)&&t.removeClass(i).addClass("vertical-overlay-menu"),"vertical-content-menu"==i&&a(".main-menu").addClass("menu-fixed")):(t.hasClass("vertical-overlay-menu")&&t.removeClass("vertical-overlay-menu").addClass(i),"vertical-content-menu"==i&&a(".main-menu").removeClass("menu-fixed"))},changeMenu:function(e){a('div[data-menu="menu-wrapper"]').html(""),a('div[data-menu="menu-wrapper"]').html(s);var n=a('div[data-menu="menu-wrapper"]'),i=(a('div[data-menu="menu-container"]'),a('ul[data-menu="menu-navigation"]')),l=a('li[data-menu="megamenu"]'),r=a("li[data-mega-col]"),d=a('li[data-menu="dropdown"]'),m=a('li[data-menu="dropdown-submenu"]');"xl"===e?(t.removeClass("vertical-layout vertical-overlay-menu fixed-navbar").addClass(t.data("menu")),a("nav.header-navbar").removeClass("fixed-top"),n.removeClass().addClass(o),a("a.dropdown-item.nav-has-children").on("click",(function(){event.preventDefault(),event.stopPropagation()})),a("a.dropdown-item.nav-has-parent").on("click",(function(){event.preventDefault(),event.stopPropagation()}))):(t.removeClass(t.data("menu")).addClass("vertical-layout vertical-overlay-menu fixed-navbar"),a("nav.header-navbar").addClass("fixed-top"),n.removeClass().addClass("main-menu menu-light menu-fixed menu-shadow"),i.removeClass().addClass("navigation navigation-main"),l.removeClass("dropdown mega-dropdown").addClass("has-sub"),l.children("ul").removeClass(),r.each((function(e,n){a(n).find(".mega-menu-sub").find("li").has("ul").addClass("has-sub");var t=a(n).children().first(),i="";t.is("h6")&&(i=t.html(),t.remove(),a(n).prepend('<a href="#">'+i+"</a>").addClass("has-sub mega-menu-title"))})),l.find("a").removeClass("dropdown-toggle"),l.find("a").removeClass("dropdown-item"),d.removeClass("dropdown").addClass("has-sub"),d.find("a").removeClass("dropdown-toggle nav-link"),d.children("ul").find("a").removeClass("dropdown-item"),d.find("ul").removeClass("dropdown-menu"),m.removeClass().addClass("has-sub"),a.app.nav.init(),a("ul.dropdown-menu [data-toggle=dropdown]").on("click",(function(e){e.preventDefault(),e.stopPropagation(),a(this).parent().siblings().removeClass("open"),a(this).parent().toggleClass("open")})))},toggle:function(){var e=Unison.fetch.now(),n=(this.collapsed,this.expanded),a=this.hidden,i=t.data("menu");switch(e.name){case"xl":!0===n?"vertical-compact-menu"==i||"vertical-overlay-menu"==i?this.hide():this.collapse():"vertical-compact-menu"==i||"vertical-overlay-menu"==i?this.open():this.expand();break;case"lg":!0===n?"vertical-compact-menu"==i||"vertical-overlay-menu"==i||"horizontal-menu"==i?this.hide():this.collapse():"vertical-compact-menu"==i||"vertical-overlay-menu"==i||"horizontal-menu"==i?this.open():this.expand();break;case"md":!0===n?"vertical-compact-menu"==i||"vertical-overlay-menu"==i||"vertical-menu-modern"==i||"horizontal-menu"==i?this.hide():this.collapse():"vertical-compact-menu"==i||"vertical-overlay-menu"==i||"vertical-menu-modern"==i||"horizontal-menu"==i?this.open():this.expand();break;case"sm":case"xs":!0===a?this.open():this.hide()}},update:function(){this.manualScroller.update()},reset:function(){this.expanded=!1,this.collapsed=!1,this.hidden=!1,t.removeClass("menu-hide menu-open menu-collapsed menu-expanded")}},a.app.nav={container:a(".navigation-main"),initialized:!1,navItem:a(".navigation-main").find("li").not(".navigation-category"),config:{speed:300},init:function(e){this.initialized=!0,a.extend(this.config,e),this.bind_events()},detectIE:function(n){var a=e.navigator.userAgent,t=a.indexOf("MSIE ");if(t>0)return parseInt(a.substring(t+5,a.indexOf(".",t)),10);if(a.indexOf("Trident/")>0){var i=a.indexOf("rv:");return parseInt(a.substring(i+3,a.indexOf(".",i)),10)}var s=a.indexOf("Edge/");return s>0&&parseInt(a.substring(s+5,a.indexOf(".",s)),10)},bind_events:function(){var e=this;a(".navigation-main").on("mouseenter.app.menu","li",(function(){var n=a(this);if(a(".hover",".navigation-main").removeClass("hover"),t.hasClass("menu-collapsed")&&"vertical-menu-modern"!=t.data("menu")||"vertical-compact-menu"==t.data("menu")&&!t.hasClass("vertical-overlay-menu")){a(".main-menu-content").children("span.menu-title").remove(),a(".main-menu-content").children("a.menu-title").remove(),a(".main-menu-content").children("ul.menu-content").remove();var i,s,o,l=n.find("span.menu-title").clone();if(n.hasClass("has-sub")||(i=n.find("span.menu-title").text(),s=n.children("a").attr("href"),""!==i&&((l=a("<a>")).attr("href",s),l.attr("title",i),l.text(i),l.addClass("menu-title"))),o=n.css("border-top")?n.position().top+parseInt(n.css("border-top"),10):n.position().top,t.hasClass("material-vertical-layout")&&(o=a(".user-profile").height()+n.position().top),!1!==e.detectIE()&&t.hasClass("material-vertical-layout")&&(o=a(".user-profile").height()+n.position().top+a(".header-navbar").height()),"vertical-compact-menu"!==t.data("menu")&&l.appendTo(".main-menu-content").css({position:"fixed",top:o}),n.hasClass("has-sub")&&n.hasClass("nav-item")){n.children("ul:first");"vertical-compact-menu"!==t.data("menu")?e.adjustSubmenu(n):e.fullSubmenu(n)}}n.addClass("hover")})).on("mouseleave.app.menu","li",(function(){})).on("active.app.menu","li",(function(e){a(this).addClass("active"),e.stopPropagation()})).on("deactive.app.menu","li.active",(function(e){a(this).removeClass("active"),e.stopPropagation()})).on("open.app.menu","li",(function(n){var t=a(this);if(t.addClass("open"),e.expand(t),a(".main-menu").hasClass("menu-collapsible"))return!1;t.siblings(".open").find("li.open").trigger("close.app.menu"),t.siblings(".open").trigger("close.app.menu"),n.stopPropagation()})).on("close.app.menu","li.open",(function(n){var t=a(this);t.removeClass("open"),e.collapse(t),n.stopPropagation()})).on("click.app.menu","li",(function(e){var n=a(this);n.is(".disabled")?e.preventDefault():t.hasClass("menu-collapsed")&&"vertical-menu-modern"!=t.data("menu")||"vertical-compact-menu"==t.data("menu")&&n.is(".has-sub")&&!t.hasClass("vertical-overlay-menu")?e.preventDefault():n.has("ul")?n.is(".open")?n.trigger("close.app.menu"):n.trigger("open.app.menu"):n.is(".active")||(n.siblings(".active").trigger("deactive.app.menu"),n.trigger("active.app.menu")),e.stopPropagation()})),a(".navbar-header, .main-menu").on("mouseenter",(function(){if("vertical-menu-modern"==t.data("menu")&&(a(".main-menu, .navbar-header").addClass("expanded"),t.hasClass("menu-collapsed"))){var e=a(".main-menu li.menu-collapsed-open");e.children("ul").hide().slideDown(200,(function(){a(this).css("display","")})),e.addClass("open").removeClass("menu-collapsed-open")}})).on("mouseleave",(function(){t.hasClass("menu-collapsed")&&"vertical-menu-modern"==t.data("menu")&&setTimeout((function(){if(0===a(".main-menu:hover").length&&0===a(".navbar-header:hover").length&&(a(".main-menu, .navbar-header").removeClass("expanded"),a(".user-profile .user-info .dropdown").hasClass("show")&&(a(".user-profile .user-info .dropdown").removeClass("show"),a(".user-profile .user-info .dropdown .dropdown-menu").removeClass("show")),t.hasClass("menu-collapsed"))){var e=a(".main-menu li.open"),n=e.children("ul");e.addClass("menu-collapsed-open"),n.show().slideUp(200,(function(){a(this).css("display","")})),e.removeClass("open")}}),1)})),a(".main-menu-content").on("mouseleave",(function(){(t.hasClass("menu-collapsed")||"vertical-compact-menu"==t.data("menu"))&&(a(".main-menu-content").children("span.menu-title").remove(),a(".main-menu-content").children("a.menu-title").remove(),a(".main-menu-content").children("ul.menu-content").remove()),a(".hover",".navigation-main").removeClass("hover")})),a(".navigation-main li.has-sub > a").on("click",(function(e){e.preventDefault()})),a("ul.menu-content").on("click","li",(function(n){var t=a(this);if(t.is(".disabled"))n.preventDefault();else if(t.has("ul"))if(t.is(".open"))t.removeClass("open"),e.collapse(t);else{if(t.addClass("open"),e.expand(t),a(".main-menu").hasClass("menu-collapsible"))return!1;t.siblings(".open").find("li.open").trigger("close.app.menu"),t.siblings(".open").trigger("close.app.menu"),n.stopPropagation()}else t.is(".active")||(t.siblings(".active").trigger("deactive.app.menu"),t.trigger("active.app.menu"));n.stopPropagation()}))},adjustSubmenu:function(e){var n,s,o,l,r,d=e.children("ul:first"),m=d.clone(!0);if(a(".main-menu-header").height(),n=e.position().top,o=i.height()-a(".header-navbar").height(),r=0,d.height(),parseInt(e.css("border-top"),10)>0&&(r=parseInt(e.css("border-top"),10)),l=o-n-e.height()-30,a(".main-menu").hasClass("menu-dark")?"light":"dark","vertical-compact-menu"===t.data("menu")?(s=n+r,l=o-n-30):"vertical-content-menu"===t.data("menu")?(s=n+e.height()+r-5,l=o-a(".content-header").height()-e.height()-n-60,t.hasClass("material-vertical-layout")&&(s=n+e.height()+a(".user-profile").height()+r)):s=t.hasClass("material-vertical-layout")?n+e.height()+a(".user-profile").height()+r:n+e.height()+r,!1!==this.detectIE()&&t.hasClass("material-vertical-layout")&&(s=n+e.height()+a(".user-profile").height()+r+a(".header-navbar").height()),"vertical-content-menu"==t.data("menu"))m.addClass("menu-popout").appendTo(".main-menu-content").css({top:s,position:"fixed"});else{m.addClass("menu-popout").appendTo(".main-menu-content").css({top:s,position:"fixed","max-height":l});new PerfectScrollbar(".main-menu-content > ul.menu-content")}},fullSubmenu:function(e){e.children("ul:first").clone(!0).addClass("menu-popout").appendTo(".main-menu-content").css({top:0,position:"fixed",height:"100%"});new PerfectScrollbar(".main-menu-content > ul.menu-content")},collapse:function(e,n){e.children("ul").show().slideUp(a.app.nav.config.speed,(function(){a(this).css("display",""),a(this).find("> li").removeClass("is-shown"),n&&n(),a.app.nav.container.trigger("collapsed.app.menu")}))},expand:function(e,n){var t=e.children("ul"),i=t.children("li").addClass("is-hidden");t.hide().slideDown(a.app.nav.config.speed,(function(){a(this).css("display",""),n&&n(),a.app.nav.container.trigger("expanded.app.menu")})),setTimeout((function(){i.addClass("is-shown"),i.removeClass("is-hidden")}),0)},refresh:function(){a.app.nav.container.find(".open").removeClass("open")}}}(window,document,jQuery);
! function (e, n, a) {
	"use strict";
	var t = a("html"),
		s = a("body");
	if (a(e).on("load", (function () {
		var i = !1;
		s.hasClass("menu-collapsed") && (i = !0), a("html").data("textdirection"), setTimeout((function () {
			t.removeClass("loading").addClass("loaded")
		}), 1200), a.app.menu.init(i);
		!1 === a.app.nav.initialized && a.app.nav.init({
			speed: 300
		}), Unison.on("change", (function (e) {
			a.app.menu.change()
		})), a('[data-toggle="tooltip"]').tooltip({
			container: "body"
		}), setTimeout((function () {
			var e;
			a("body").hasClass("vertical-content-menu") && (e = a(".main-menu").height(), a(".content-body").height() < e && a(".content-body").css("height", e))
		}), 500), a('a[data-action="collapse"]').on("click", (function (e) {
			e.preventDefault(), a(this).closest(".card").children(".card-content").collapse("toggle"), a(this).closest(".card").find('[data-action="collapse"] i').toggleClass("ft-plus ft-minus")
		})), a('a[data-action="expand"]').on("click", (function (e) {
			e.preventDefault(), a(this).closest(".card").find('[data-action="expand"] i').toggleClass("ft-maximize ft-minimize"), a(this).closest(".card").toggleClass("card-fullscreen")
		})), a(".scrollable-container").length > 0 && a(".scrollable-container").each((function () {
			new PerfectScrollbar(a(this)[0], {
				wheelPropagation: !1
			})
		})), a('a[data-action="close"]').on("click", (function () {
			a(this).closest(".card").removeClass().slideUp("fast")
		})), setTimeout((function () {
			a(".row.match-height").each((function () {
				a(this).find(".card").not(".card .card").matchHeight()
			}))
		}), 500), a('.card .heading-elements a[data-action="collapse"]').on("click", (function () {
			var e, n = a(this).closest(".card");
			parseInt(n[0].style.height, 10) > 0 ? (e = n.css("height"), n.css("height", "").attr("data-height", e)) : n.data("height") && (e = n.data("height"), n.css("height", e).attr("data-height", ""))
		})), a(".main-menu-content").find("li.active").parents("li").addClass("menu-collapsed-open");
		var o = s.data("menu");
		"vertical-compact-menu" != o && "horizontal-menu" != o && !1 === i && a(".main-menu-content").find("li.active").parents("li").addClass("open"), "vertical-compact-menu" != o && "horizontal-menu" != o || (a(".main-menu-content").find("li.active").parents("li:not(.nav-item)").addClass("open"), a(".main-menu-content").find("li.active").parents("li").addClass("active")), a(".heading-elements-toggle").on("click", (function () {
			a(this).parent().children(".heading-elements").toggleClass("visible")
		}));
		var c = a(".search-input input").data("search");
		a(".nav-link-search").on("click", (function () {
			a(this);
			a(this).parent(".nav-search").find(".search-input").addClass("open"), setTimeout((function () {
				a(".search-input.open .input").focus()
			}), 50), a(".search-input .search-list li").remove(), a(".search-input .search-list").addClass("show")
		})), a(".search-input-close i").on("click", (function () {
			a(this);
			var e = a(this).closest(".search-input");
			e.hasClass("open") && (e.removeClass("open"), a(".search-input input").val(""), a(".search-input input").blur(), a(".search-input .search-list").removeClass("show"), a(".app-content").hasClass("show-overlay") && a(".app-content").removeClass("show-overlay"))
		})),a(e).on("keydown", (function (n) {
			var t, s, i = a(".search-list li.current_item");
			if (40 === n.keyCode ? (t = i.next(), i.removeClass("current_item"), i = t.addClass("current_item")) : 38 === n.keyCode && (s = i.prev(), i.removeClass("current_item"), i = s.addClass("current_item")), 13 === n.keyCode && a(".search-list li.current_item").length > 0) {
				var o = a(".search-list li.current_item a");
				e.location = o.attr("href"), a(o).trigger("click")
			}
		})), a(n).on("mouseenter", ".search-list li", (function (e) {
			a(this).siblings().removeClass("current_item"), a(this).addClass("current_item")
		})), a(n).on("click", ".search-list li", (function (e) {
			e.stopPropagation()
		}))
	})), a(n).on("click", ".sidenav-overlay", (function (e) {
		return a.app.menu.hide(), !1
	})), "undefined" != typeof Hammer) {
		var i;
		"rtl" == a("html").data("textdirection") && (i = !0);
		var o = n.querySelector(".drag-target"),
			l = "panright",
			r = "panleft";
		if (!0 === i && (l = "panleft", r = "panright"), a(o).length > 0) new Hammer(o).on(l, (function (e) {
			if (s.hasClass("vertical-overlay-menu")) return a.app.menu.open(), !1
		}));
		setTimeout((function () {
			var e, t = n.querySelector(".main-menu");
			a(t).length > 0 && ((e = new Hammer(t)).get("pan").set({
				direction: Hammer.DIRECTION_ALL,
				threshold: 100
			}), e.on(r, (function (e) {
				if (s.hasClass("vertical-overlay-menu")) return a.app.menu.hide(), !1
			})))
		}), 300);
		var c = n.querySelector(".sidenav-overlay");
		if (a(c).length > 0) new Hammer(c).on(r, (function (e) {
			if (s.hasClass("vertical-overlay-menu")) return a.app.menu.hide(), !1
		}))
	}
	a(n).on("click", ".menu-toggle, .modern-nav-toggle", (function (n) {
		return n.preventDefault(), a(".user-profile .user-info .dropdown").hasClass("show") && (a(".user-profile .user-info .dropdown").removeClass("show"), a(".user-profile .user-info .dropdown .dropdown-menu").removeClass("show")), a.app.menu.toggle(), setTimeout((function () {
			a(e).trigger("resize")
		}), 200), a("#collapsed-sidebar").length > 0 && setTimeout((function () {
			s.hasClass("menu-expanded") || s.hasClass("menu-open") ? a("#collapsed-sidebar").prop("checked", !1) : a("#collapsed-sidebar").prop("checked", !0)
		}), 1e3), a(".vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse").hasClass("show") && a(".vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse").removeClass("show"), !1
	})), a(n).on("click", ".open-navbar-container", (function (e) {
		Unison.fetch.now()
	})), a(".navigation").find("li").has("ul").addClass("has-sub"), a(".carousel").carousel({
		interval: 2e3
	}), a(".nav-link-expand").on("click", (function (e) {
		"undefined" != typeof screenfull && screenfull.isEnabled && screenfull.toggle()
	})), "undefined" != typeof screenfull && screenfull.isEnabled && a(n).on(screenfull.raw.fullscreenchange, (function () {
		screenfull.isFullscreen ? a(".nav-link-expand").find("i").toggleClass("ft-minimize ft-maximize") : a(".nav-link-expand").find("i").toggleClass("ft-maximize ft-minimize")
	})), a(n).on("click", ".mega-dropdown-menu", (function (e) {
		e.stopPropagation()
	}))
}(window, document, jQuery);
! function (a, e, t) {
    "use strict";
    if (t(".customizer-toggle").on("click", (function () {
        t(".customizer").toggleClass("open")
    })), t(".customizer-close").on("click", (function () {
        t(".customizer").removeClass("open")
    })), t(".customizer-content").length > 0) new PerfectScrollbar(".customizer-content");
    var s = t("body"),
        n = t("nav.header-navbar"),
        o = t("div.header-navbar"),
        r = t("footer"),
        i = t(".main-menu"),
        l = s.data("menu"),
        c = !1,
        d = !1,
        m = !1;
    n.hasClass("navbar-semi-light") && (d = !0), n.hasClass("navbar-semi-dark") && (m = !0), "horizontal-menu" == l && (c = !0, t(".layout-options .navbar").parent(".nav-item").attr("style", "display: none !important"), t(".color-options .nav-semi-light").parent(".nav-item").attr("style", "display: none !important"), t(".color-options .nav-semi-dark").parent(".nav-item").attr("style", "display: none !important"), t("#native-scroll").parent(".custom-checkbox").attr("style", "display: none !important"), t("#bordered-navigation").parent(".custom-checkbox").attr("style", "display: none !important"), t("#collapsible-navigation").parent(".custom-checkbox").attr("style", "display: none !important"), t("#static-navigation").parent(".custom-checkbox").attr("style", "display: none !important"), t("#flipped-navigation").parent(".custom-checkbox").attr("style", "display: none !important"), t(".color-options li:eq(3) a").tab("show")), "vertical-compact-menu" !== l && "vertical-content-menu" !== l && "vertical-overlay-menu" !== l || (t(".color-options a#color-opt-3").tab("show"), "vertical-content-menu" === l && t(".color-options a#color-opt-4").tab("show"), "vertical-compact-menu" !== l && "vertical-overlay-menu" !== l || t("#boxed-layout").parent(".custom-checkbox").attr("style", "display: none !important"), t(".color-options .nav-semi-light").parent(".nav-item").attr("style", "display: none !important"), t(".color-options .nav-semi-dark").parent(".nav-item").attr("style", "display: none !important")), "vertical-content-menu" === l && (t("#fixed-layout").parent(".custom-checkbox").attr("style", "display: none !important"), t("#native-scroll").parent(".custom-checkbox").attr("style", "display: none !important"), t("#static-navigation").parent(".custom-checkbox").attr("style", "display: none !important"), t(".layout-options .navbar").parent(".nav-item").attr("style", "display: none !important")), "vertical-compact-menu" === l && (t("#right-side-icons").parent(".custom-checkbox").attr("style", "display: none !important"), t("#collapsible-navigation").parent(".custom-checkbox").attr("style", "display: none !important"), t("#brand-center").parent(".custom-checkbox").attr("style", "display: none !important")), "vertical-overlay-menu" === l && (t("#brand-center").parent(".custom-checkbox").attr("style", "display: none !important"), t("#native-scroll").parent(".custom-checkbox").attr("style", "display: none !important")), "vertical-menu-modern" === l && t("#brand-center").parent(".custom-checkbox").attr("style", "display: none !important"), "vertical-overlay-menu" === l && (t("#collapsed-sidebar").prop("checked", !0), t("#static-layout").parent(".custom-checkbox").attr("style", "display: none !important"), t("#static-navigation").parent(".custom-checkbox").attr("style", "display: none !important")), t("#collapsed-sidebar").on("click", (function () {
        t.app.menu.toggle(), setTimeout((function () {
            t(a).trigger("resize")
        }), 100)
    })), t("#fixed-layout").on("click", (function () {
        !0 === t("#boxed-layout").prop("checked") && t("#boxed-layout").trigger("click"), !0 === t(this).prop("checked") ? (s.hasClass("footer-fixed") || s.addClass("footer-fixed"), s.hasClass("fixed-navbar") || !1 !== c || s.addClass("fixed-navbar"), n.hasClass("fixed-top") || !1 !== c || n.addClass("fixed-top"), r.hasClass("fixed-bottom") || r.addClass("fixed-bottom"), o.hasClass("navbar-fixed") || !0 !== c || o.addClass("navbar-fixed"), n.removeClass("navbar-static-top"), o.removeClass("navbar-static"), i.removeClass("menu-static"), r.removeClass("footer-static")) : (r.removeClass("fixed-bottom"), s.removeClass("footer-fixed"))
    })), t("#boxed-layout").on("click", (function () {
        !0 === t("#fixed-layout").prop("checked") && t("#fixed-layout").trigger("click"), !0 === t(this).prop("checked") ? (s.hasClass("container boxed-layout") || s.addClass("container boxed-layout"), n.hasClass("container boxed-layout") || n.addClass("container boxed-layout"), n.removeClass("navbar-static-top"), i.removeClass("menu-static"), r.removeClass("footer-static")) : (s.removeClass("container boxed-layout"), n.removeClass("container boxed-layout"))
    })), t("#static-layout").on("click", (function () {
        !0 === t(this).prop("checked") ? (n.hasClass("navbar-static-top") || n.addClass("navbar-static-top"), i.hasClass("menu-static") || i.addClass("menu-static"), r.hasClass("footer-static") || r.addClass("footer-static"), !0 === c && (o.unstick(), o.addClass("navbar-static")), s.removeClass("fixed-navbar"), n.removeClass("fixed-top"), o.removeClass("menu-fixed"), i.removeClass("menu-fixed"), r.removeClass("fixed-bottom"), t.app.menu.manualScroller.disable()) : (!1 === c && (s.addClass("fixed-navbar"), i.removeClass("navbar-static").addClass("menu-fixed"), n.removeClass("navbar-static-top").addClass("fixed-top")), !0 === c && (o.sticky(), o.removeClass("navbar-static").addClass("navbar-fixed")), r.removeClass("footer-static"), t.app.menu.manualScroller.enable())
    })), "vertical-overlay-menu" === l && t("#brand-center").prop("checked", !0), t("#brand-center").on("click", (function () {
        n.hasClass("navbar-brand-center") ? (1 == d && (n.removeClass("navbar-dark navbar-brand-center"), g("dark"), n.addClass("navbar-semi-light")), 1 == m && (n.removeClass("navbar-dark navbar-brand-center"), g("light"), n.addClass("navbar-semi-dark"))) : (1 == d && n.removeClass("navbar-semi-light"), 1 == m && n.removeClass("navbar-semi-dark"), n.addClass("navbar-dark navbar-brand-center"), g("light"))
    })), t("#navbar-static-top").on("click", (function () {
        !0 === t(this).prop("checked") ? (n.hasClass("navbar-static-top") || n.addClass("navbar-static-top"), i.hasClass("menu-static") || i.addClass("menu-static"), r.hasClass("footer-static") || r.addClass("footer-static"), s.removeClass("fixed-navbar"), n.removeClass("fixed-top"), i.removeClass("menu-fixed"), r.removeClass("fixed-bottom"), t.app.menu.manualScroller.disable()) : (s.addClass("fixed-navbar"), n.removeClass("navbar-static-top").addClass("fixed-top"), i.removeClass("menu-static").addClass("menu-fixed"), r.removeClass("footer-static"), t.app.menu.manualScroller.enable())
    })), t("#native-scroll").on("click", (function () {
        !0 === t("#static-navigation").prop("checked") && (i.removeClass("menu-static").addClass("menu-fixed"), t("#static-navigation").attr("checked", !1)), i.hasClass("menu-native-scroll") ? (i.removeClass("menu-native-scroll"), t.app.menu.manualScroller.enable()) : (i.addClass("menu-native-scroll"), t.app.menu.manualScroller.disable())
    })), t("#right-side-icons").on("click", (function () {
        i.hasClass("menu-icon-right") ? i.removeClass("menu-icon-right") : i.addClass("menu-icon-right"), !0 === c && (o.hasClass("navbar-icon-right") ? o.removeClass("navbar-icon-right") : o.addClass("navbar-icon-right"))
    })), t("#bordered-navigation").on("click", (function () {
        i.hasClass("menu-bordered") ? i.removeClass("menu-bordered") : i.addClass("menu-bordered")
    })), t("#flipped-navigation").on("click", (function () {
        s.hasClass("menu-flipped") ? s.removeClass("menu-flipped") : (s.addClass("menu-flipped"), t(".customizer-close").trigger("click")), !0 === c && (o.hasClass("navbar-flipped") ? o.removeClass("navbar-flipped") : o.addClass("navbar-flipped"))
    })), t("#collapsible-navigation").on("click", (function () {
        i.hasClass("menu-collapsible") ? i.removeClass("menu-collapsible") : i.addClass("menu-collapsible")
    })), t("#static-navigation").on("click", (function () {
        !0 === t("#native-scroll").prop("checked") && (i.removeClass("menu-native-scroll"), t("#native-scroll").attr("checked", !1)), i.hasClass("menu-static") ? (i.removeClass("menu-static").addClass("menu-fixed"), t.app.menu.manualScroller.enable()) : (i.addClass("menu-static").removeClass("menu-fixed"), t.app.menu.manualScroller.disable())
    })), t(".main-menu").hasClass("menu-dark") ? t(".customizer-sidebar-options").find('[data-sidebar="menu-dark"]').addClass("active").siblings("btn").removeClass("active") : t(".customizer-sidebar-options").find('[data-sidebar="menu-light"]').addClass("active").siblings("btn").removeClass("active"), t(".customizer-sidebar-options .btn").on("click", (function () {
        var a = t(this),
            e = a.attr("data-sidebar");
        a.addClass("active").siblings(".btn").removeClass("active"), t(".main-menu").removeClass("menu-dark menu-light").addClass(e), !0 === c && (o.removeClass("navbar-dark navbar-light"), "menu-light" == e ? o.addClass("navbar-light") : o.addClass("navbar-dark"))
    }));
    var v, p = t("nav.header-navbar"),
        b = "";

    function u(a) {
        if (a.attr("class").match(/\bbg-\S+/g)) {
            b = a.attr("class").match(/\bbg-\S+/g);
            var e = "";
            t.map(b, (function (a, t) {
                e = 0 === t ? a : e + " " + a
            })), b = e
        } else b = "";
        return b
    }

    function h(a) {
        a.removeClass("navbar-semi-dark navbar-semi-light navbar-light navbar-dark navbar-shadow " + b);
        var e = "";
        t(".navbar-header").attr("class").match(/\bbg-\S+/g) && (e = t(".navbar-header").attr("class").match(/\bbg-\S+/g)[0]), t(".navbar-header").removeClass(e)
    }

    function C(a, e) {
        a.addClass(e)
    }

    function g(a) {
        t(".brand-logo").attr("src", "../../../app-assets/images/logo/logo.png")
    }
    p.attr("class").match(/\bbg-\S+/g) && (b = p.attr("class").match(/\bbg-\S+/g)[0]), t(".nav-semi-light").on("click", (function () {
        u(p), g("dark"), h(p), C(p, "navbar-semi-light bg-gradient-x-grey-blue"), t("input[name=nav-slight-clr].default").prop("checked", !0), d = !0, m = !1
    })), t("input[name='nav-slight-clr']").change((function () {
        1 == m && p.removeClass("navbar-semi-dark").addClass("navbar-semi-light"), b = u(p), p.removeClass(b).addClass(t(this).data("bg"))
    })), t(".nav-semi-dark").on("click", (function () {
        u(p), g("light"), h(p), C(p, "navbar-semi-dark navbar-shadow"), t("input[name=nav-sdark-clr].default").prop("checked", !0), d = !1, m = !0
    })), t("input[name='nav-sdark-clr']").change((function () {
        1 == d && a.removeClass("navbar-semi-light").addClass("navbar-semi-dark");
        var a = t(".navbar-header"),
            e = u(a);
        a.removeClass(e).addClass(t(this).data("bg"))
    })), t(".nav-dark").on("click", (function () {
        u(p), g("light"), h(p), C(p, "navbar-dark"), t("input[name=nav-dark-clr].default").prop("checked", !0)
    })), t("input[name='nav-dark-clr']").change((function () {
        p.hasClass("navbar-dark") || t(".nav-dark").trigger("click");
        var a = u(p);
        p.removeClass(a).addClass(t(this).data("bg"))
    })), t(".nav-light").on("click", (function () {
        u(p), g("dark"), h(p), C(p, "navbar-light navbar-shadow"), t("input[name=nav-light-clr].default").prop("checked", !0)
    })), t("input[name='nav-light-clr']").change((function () {
        p.hasClass("navbar-light") || t(".nav-light").trigger("click");
        var a = u(p);
        p.removeClass(a).addClass(t(this).data("bg"))
    })), "undefined" != typeof Storage && (v = localStorage.getItem("menuLocked")), "false" === v && t("#collapsed-sidebar").prop("checked", !0)
}(window, document, jQuery);
/*!
* sweetalert2 v11.2.0
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Sweetalert2 = factory());
}(this, function () { 'use strict';

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  const toArray = nodeList => Array.prototype.slice.call(nodeList);
  /**
   * Standardise console warnings
   * @param message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  const swalPrefix = 'swal2-';
  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };

  const getPopup = () => elementByClass(swalClasses.popup);
  const getIcon = () => elementByClass(swalClasses.icon);
  const getTitle = () => elementByClass(swalClasses.title);
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  const getImage = () => elementByClass(swalClasses.image);
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  const getActions = () => elementByClass(swalClasses.actions);
  const getFooter = () => elementByClass(swalClasses.footer);
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  const getFocusableElements = () => {
    const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  const isModal = () => {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  const isToast = () => {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  const setInnerHtml = (elem, html) => {
    // #1926
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  const removeCustomClasses = (elem, params) => {
    toArray(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  const getInput = (popup, inputType) => {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(popup, swalClasses[inputType]);

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(popup, swalClasses.input);
    }
  };
  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (target.forEach) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  const getChildByClass = (elem, className) => {
    for (let i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  const hide = elem => {
    elem.style.display = 'none';
  };
  const setStyle = (parent, selector, property, value) => {
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  const toggle = (elem, condition, display) => {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight); // borrowed from https://stackoverflow.com/a/46352119

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    if (Swal.isVisible()) {
      Swal.resetValidationMessage();
    }
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getChildByClass(popup, swalClasses.input);
    const file = getChildByClass(popup, swalClasses.file);
    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getChildByClass(popup, swalClasses.select);
    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      range.nextSibling.value = range.value;
    };
  };

  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (typeof param === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render all the buttons

    renderButtons(actions, loader, params); // Loader

    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(inputType => {
      const inputClass = swalClasses[inputType];
      const inputContainer = getChildByClass(popup, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };

  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  const setAttributes = (inputType, inputAttributes) => {
    const input = getInput(getPopup(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  const getInputContainer = inputType => {
    const inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getPopup(), inputClass);
  };

  const renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof params.inputValue, "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = (textarea, params) => {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    setTimeout(() => {
      // #2291
      if ('MutationObserver' in window) {
        // #1699
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgoundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const setContent = (icon, params) => {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  function fire() {
    const Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const RESTORE_FOCUS_TIMEOUT = 100;

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  const addBottomPaddingForTallPopups = () => {
    const safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  const lockBodyScroll = () => {
    // #1246
    const container = getContainer();
    let preventTouchMove;

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };

  const isStylys = event => {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  const isZoom = event => {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }

  const triggerClosePopup = instance => {
    const popup = getPopup();

    if (!popup) {
      return false;
    }

    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  var defaultInputValidators = {
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  const getSwalParams = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      let value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  const getSwalButtons = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  const getSwalImage = templateContent => {
    const result = {};
    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  const getSwalIcon = templateContent => {
    const result = {};
    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  const getSwalInput = templateContent => {
    const result = {};
    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    const inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };

  const showWarningsForElements = template => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  const showWarningsForAttributes = (el, allowedAttributes) => {
    toArray(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  const handleConfirmOrDenyWithInput = (instance, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  const handleInputValidator = (instance, inputValue, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesnt get destroyed until the result from this preDeny's promise is received

      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      instance.closePopup({
        isDenied: true,
        value
      });
    }
  };

  const succeedWith = (instance, value) => {
    instance.closePopup({
      isConfirmed: true,
      value
    });
  };

  const rejectWith = (instance, error$$1) => {
    instance.rejectPromise(error$$1);
  };

  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesnt get destroyed until the result from this preConfirm's promise is received

      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      succeedWith(instance, value);
    }
  };

  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key); // ESC
    } else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  const handleEnter = (instance, e, innerParams) => {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    const buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    showWarningsForParams(Object.assign({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();

      if (isModal()) {
        unsetAriaHidden();
      }
    }

    globalState.currentInstance = this;
    const innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    const domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(param => {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining weakmaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }

  const disposeSwal = instance => {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };

  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };

  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  let currentInstance;

  class SweetAlert {
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      const promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  } // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function () {
      if (currentInstance) {
        return currentInstance[key](...arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.2.0';

  const Swal = SweetAlert;
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

/*!
 * jQuery Validation Plugin v1.19.3
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2021 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// JQuery trim is deprecated, provide a trim method based on String.prototype.trim
var trim = function( str ) {

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
	return str.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "" );
};

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				// Set form expando on contenteditable
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.trigger( "focus" )

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = typeof parameter === "function" && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( Array.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
// Unobtrusive validation support library for jQuery and jQuery Validate
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// @version v3.2.12

/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: false */
/*global document: false, jQuery: false */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define("jquery.validate.unobtrusive", ['jquery-validation'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports     
        module.exports = factory(require('jquery-validation'));
    } else {
        // Browser global
        jQuery.validator.unobtrusive = factory(jQuery);
    }
}(function ($) {
    var $jQval = $.validator,
        adapters,
        data_validation = "unobtrusiveValidation";

    function setValidationValues(options, ruleName, value) {
        options.rules[ruleName] = value;
        if (options.message) {
            options.messages[ruleName] = options.message;
        }
    }

    function splitAndTrim(value) {
        return value.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
    }

    function escapeAttributeValue(value) {
        // As mentioned on http://api.jquery.com/category/selectors/
        return value.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
    }

    function getModelPrefix(fieldName) {
        return fieldName.substr(0, fieldName.lastIndexOf(".") + 1);
    }

    function appendModelPrefix(value, prefix) {
        if (value.indexOf("*.") === 0) {
            value = value.replace("*.", prefix);
        }
        return value;
    }

    function onError(error, inputElement) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-for='" + escapeAttributeValue(inputElement[0].name) + "']"),
            replaceAttrValue = container.attr("data-valmsg-replace"),
            replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) !== false : null;

        container.removeClass("field-validation-valid").addClass("field-validation-error");
        error.data("unobtrusiveContainer", container);

        if (replace) {
            container.empty();
            error.removeClass("input-validation-error").appendTo(container);
        }
        else {
            error.hide();
        }
    }

    function onErrors(event, validator) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-summary=true]"),
            list = container.find("ul");

        if (list && list.length && validator.errorList.length) {
            list.empty();
            container.addClass("validation-summary-errors").removeClass("validation-summary-valid");

            $.each(validator.errorList, function () {
                $("<li />").html(this.message).appendTo(list);
            });
        }
    }

    function onSuccess(error) {  // 'this' is the form element
        var container = error.data("unobtrusiveContainer");

        if (container) {
            var replaceAttrValue = container.attr("data-valmsg-replace"),
                replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) : null;

            container.addClass("field-validation-valid").removeClass("field-validation-error");
            error.removeData("unobtrusiveContainer");

            if (replace) {
                container.empty();
            }
        }
    }

    function onReset(event) {  // 'this' is the form element
        var $form = $(this),
            key = '__jquery_unobtrusive_validation_form_reset';
        if ($form.data(key)) {
            return;
        }
        // Set a flag that indicates we're currently resetting the form.
        $form.data(key, true);
        try {
            $form.data("validator").resetForm();
        } finally {
            $form.removeData(key);
        }

        $form.find(".validation-summary-errors")
            .addClass("validation-summary-valid")
            .removeClass("validation-summary-errors");
        $form.find(".field-validation-error")
            .addClass("field-validation-valid")
            .removeClass("field-validation-error")
            .removeData("unobtrusiveContainer")
            .find(">*")  // If we were using valmsg-replace, get the underlying error
            .removeData("unobtrusiveContainer");
    }

    function validationInfo(form) {
        var $form = $(form),
            result = $form.data(data_validation),
            onResetProxy = $.proxy(onReset, form),
            defaultOptions = $jQval.unobtrusive.options || {},
            execInContext = function (name, args) {
                var func = defaultOptions[name];
                func && $.isFunction(func) && func.apply(form, args);
            };

        if (!result) {
            result = {
                options: {  // options structure passed to jQuery Validate's validate() method
                    errorClass: defaultOptions.errorClass || "input-validation-error",
                    errorElement: defaultOptions.errorElement || "span",
                    errorPlacement: function () {
                        onError.apply(form, arguments);
                        execInContext("errorPlacement", arguments);
                    },
                    invalidHandler: function () {
                        onErrors.apply(form, arguments);
                        execInContext("invalidHandler", arguments);
                    },
                    messages: {},
                    rules: {},
                    success: function () {
                        onSuccess.apply(form, arguments);
                        execInContext("success", arguments);
                    }
                },
                attachValidation: function () {
                    $form
                        .off("reset." + data_validation, onResetProxy)
                        .on("reset." + data_validation, onResetProxy)
                        .validate(this.options);
                },
                validate: function () {  // a validation function that is called by unobtrusive Ajax
                    $form.validate();
                    return $form.valid();
                }
            };
            $form.data(data_validation, result);
        }

        return result;
    }

    $jQval.unobtrusive = {
        adapters: [],

        parseElement: function (element, skipAttach) {
            /// <summary>
            /// Parses a single HTML element for unobtrusive validation attributes.
            /// </summary>
            /// <param name="element" domElement="true">The HTML element to be parsed.</param>
            /// <param name="skipAttach" type="Boolean">[Optional] true to skip attaching the
            /// validation to the form. If parsing just this single element, you should specify true.
            /// If parsing several elements, you should specify false, and manually attach the validation
            /// to the form when you are finished. The default is false.</param>
            var $element = $(element),
                form = $element.parents("form")[0],
                valInfo, rules, messages;

            if (!form) {  // Cannot do client-side validation without a form
                return;
            }

            valInfo = validationInfo(form);
            valInfo.options.rules[element.name] = rules = {};
            valInfo.options.messages[element.name] = messages = {};

            $.each(this.adapters, function () {
                var prefix = "data-val-" + this.name,
                    message = $element.attr(prefix),
                    paramValues = {};

                if (message !== undefined) {  // Compare against undefined, because an empty message is legal (and falsy)
                    prefix += "-";

                    $.each(this.params, function () {
                        paramValues[this] = $element.attr(prefix + this);
                    });

                    this.adapt({
                        element: element,
                        form: form,
                        message: message,
                        params: paramValues,
                        rules: rules,
                        messages: messages
                    });
                }
            });

            $.extend(rules, { "__dummy__": true });

            if (!skipAttach) {
                valInfo.attachValidation();
            }
        },

        parse: function (selector) {
            /// <summary>
            /// Parses all the HTML elements in the specified selector. It looks for input elements decorated
            /// with the [data-val=true] attribute value and enables validation according to the data-val-*
            /// attribute values.
            /// </summary>
            /// <param name="selector" type="String">Any valid jQuery selector.</param>

            // $forms includes all forms in selector's DOM hierarchy (parent, children and self) that have at least one
            // element with data-val=true
            var $selector = $(selector),
                $forms = $selector.parents()
                    .addBack()
                    .filter("form")
                    .add($selector.find("form"))
                    .has("[data-val=true]");

            $selector.find("[data-val=true]").each(function () {
                $jQval.unobtrusive.parseElement(this, true);
            });

            $forms.each(function () {
                var info = validationInfo(this);
                if (info) {
                    info.attachValidation();
                }
            });
        }
    };

    adapters = $jQval.unobtrusive.adapters;

    adapters.add = function (adapterName, params, fn) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="params" type="Array" optional="true">[Optional] An array of parameter names (strings) that will
        /// be extracted from the data-val-nnnn-mmmm HTML attributes (where nnnn is the adapter name, and
        /// mmmm is the parameter name).</param>
        /// <param name="fn" type="Function">The function to call, which adapts the values from the HTML
        /// attributes into jQuery Validate rules and/or messages.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        if (!fn) {  // Called with no params, just a function
            fn = params;
            params = [];
        }
        this.push({ name: adapterName, params: params, adapt: fn });
        return this;
    };

    adapters.addBool = function (adapterName, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has no parameter values.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, function (options) {
            setValidationValues(options, ruleName || adapterName, true);
        });
    };

    adapters.addMinMax = function (adapterName, minRuleName, maxRuleName, minMaxRuleName, minAttribute, maxAttribute) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation has three potential rules (one for min-only, one for max-only, and
        /// one for min-and-max). The HTML parameters are expected to be named -min and -max.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="minRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a minimum value.</param>
        /// <param name="maxRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a maximum value.</param>
        /// <param name="minMaxRuleName" type="String">The name of the jQuery Validate rule to be used when you
        /// have both a minimum and maximum value.</param>
        /// <param name="minAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the minimum value. The default is "min".</param>
        /// <param name="maxAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the maximum value. The default is "max".</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [minAttribute || "min", maxAttribute || "max"], function (options) {
            var min = options.params.min,
                max = options.params.max;

            if (min && max) {
                setValidationValues(options, minMaxRuleName, [min, max]);
            }
            else if (min) {
                setValidationValues(options, minRuleName, min);
            }
            else if (max) {
                setValidationValues(options, maxRuleName, max);
            }
        });
    };

    adapters.addSingleVal = function (adapterName, attribute, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has a single value.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute(where nnnn is the adapter name).</param>
        /// <param name="attribute" type="String">[Optional] The name of the HTML attribute that contains the value.
        /// The default is "val".</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [attribute || "val"], function (options) {
            setValidationValues(options, ruleName || adapterName, options.params[attribute]);
        });
    };

    $jQval.addMethod("__dummy__", function (value, element, params) {
        return true;
    });

    $jQval.addMethod("regex", function (value, element, params) {
        var match;
        if (this.optional(element)) {
            return true;
        }

        match = new RegExp(params).exec(value);
        return (match && (match.index === 0) && (match[0].length === value.length));
    });

    $jQval.addMethod("nonalphamin", function (value, element, nonalphamin) {
        var match;
        if (nonalphamin) {
            match = value.match(/\W/g);
            match = match && match.length >= nonalphamin;
        }
        return match;
    });

    if ($jQval.methods.extension) {
        adapters.addSingleVal("accept", "mimtype");
        adapters.addSingleVal("extension", "extension");
    } else {
        // for backward compatibility, when the 'extension' validation method does not exist, such as with versions
        // of JQuery Validation plugin prior to 1.10, we should use the 'accept' method for
        // validating the extension, and ignore mime-type validations as they are not supported.
        adapters.addSingleVal("extension", "extension", "accept");
    }

    adapters.addSingleVal("regex", "pattern");
    adapters.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    adapters.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    adapters.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    adapters.add("equalto", ["other"], function (options) {
        var prefix = getModelPrefix(options.element.name),
            other = options.params.other,
            fullOtherName = appendModelPrefix(other, prefix),
            element = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(fullOtherName) + "']")[0];

        setValidationValues(options, "equalTo", element);
    });
    adapters.add("required", function (options) {
        // jQuery Validate equates "required" with "mandatory" for checkbox elements
        if (options.element.tagName.toUpperCase() !== "INPUT" || options.element.type.toUpperCase() !== "CHECKBOX") {
            setValidationValues(options, "required", true);
        }
    });
    adapters.add("remote", ["url", "type", "additionalfields"], function (options) {
        var value = {
            url: options.params.url,
            type: options.params.type || "GET",
            data: {}
        },
            prefix = getModelPrefix(options.element.name);

        $.each(splitAndTrim(options.params.additionalfields || options.element.name), function (i, fieldName) {
            var paramName = appendModelPrefix(fieldName, prefix);
            value.data[paramName] = function () {
                var field = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(paramName) + "']");
                // For checkboxes and radio buttons, only pick up values from checked fields.
                if (field.is(":checkbox")) {
                    return field.filter(":checked").val() || field.filter(":hidden").val() || '';
                }
                else if (field.is(":radio")) {
                    return field.filter(":checked").val() || '';
                }
                return field.val();
            };
        });

        setValidationValues(options, "remote", value);
    });
    adapters.add("password", ["min", "nonalphamin", "regex"], function (options) {
        if (options.params.min) {
            setValidationValues(options, "minlength", options.params.min);
        }
        if (options.params.nonalphamin) {
            setValidationValues(options, "nonalphamin", options.params.nonalphamin);
        }
        if (options.params.regex) {
            setValidationValues(options, "regex", options.params.regex);
        }
    });
    adapters.add("fileextensions", ["extensions"], function (options) {
        setValidationValues(options, "extension", options.params.extensions);
    });

    $(function () {
        $jQval.unobtrusive.parse(document);
    });

    return $jQval.unobtrusive;
}));

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var hasError = function hasError(valueValidationResult) {
  if (valueValidationResult == null) {
    return false;
  }

  if (Array.isArray(valueValidationResult)) {
    return valueValidationResult.filter(function (eachResult) {
      return hasError(eachResult);
    }).length > 0;
  }

  if (typeof valueValidationResult === 'object') {
    return Object.keys(valueValidationResult).length > 0;
  }

  return valueValidationResult != null;
};

var CoreRule = function CoreRule() {
  var _this = this;

  this.setCustomErrorMessage = function (customErrorMessage) {
    _this.customErrorMessage = customErrorMessage;
  };

  this.setWhenCondition = function (condition) {
    _this.whenCondition = condition;
  };

  this.setUnlessCondition = function (condition) {
    _this.unlessCondition = condition;
  };
};

var AsyncRule = /*#__PURE__*/function (_CoreRule) {
  _inheritsLoose(AsyncRule, _CoreRule);

  function AsyncRule(asyncValueValidator) {
    var _this;

    _this = _CoreRule.call(this) || this;

    _this.validateAsync = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(value, model) {
        var errorOrNull;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.whenCondition != null && !_this.whenCondition(model))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", null);

              case 2:
                if (!(_this.unlessCondition != null && _this.unlessCondition(model))) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", null);

              case 4:
                _context.next = 6;
                return _this.asyncValueValidator(value, model);

              case 6:
                errorOrNull = _context.sent;
                return _context.abrupt("return", errorOrNull != null ? _this.customErrorMessage || errorOrNull : null);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.asyncValueValidator = asyncValueValidator;
    return _this;
  }

  return AsyncRule;
}(CoreRule);

var MustAsyncRule = /*#__PURE__*/function (_AsyncRule) {
  _inheritsLoose(MustAsyncRule, _AsyncRule);

  function MustAsyncRule(definition) {
    return _AsyncRule.call(this, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(value, model) {
        var _iterator, _step, eachDefinition, isValid, _isValid, predicate, message;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!Array.isArray(definition)) {
                  _context.next = 20;
                  break;
                }

                _iterator = _createForOfIteratorHelperLoose(definition);

              case 2:
                if ((_step = _iterator()).done) {
                  _context.next = 19;
                  break;
                }

                eachDefinition = _step.value;

                if (!(typeof eachDefinition === 'function')) {
                  _context.next = 12;
                  break;
                }

                _context.next = 7;
                return eachDefinition(value, model);

              case 7:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", 'Value is not valid');

              case 10:
                _context.next = 17;
                break;

              case 12:
                _context.next = 14;
                return eachDefinition.predicate(value, model);

              case 14:
                _isValid = _context.sent;

                if (_isValid) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("return", typeof eachDefinition.message === 'function' ? eachDefinition.message(value, model) : eachDefinition.message);

              case 17:
                _context.next = 2;
                break;

              case 19:
                return _context.abrupt("return", null);

              case 20:
                if (!(typeof definition === 'function')) {
                  _context.next = 29;
                  break;
                }

                _context.next = 23;
                return definition(value, model);

              case 23:
                if (!_context.sent) {
                  _context.next = 27;
                  break;
                }

                _context.t0 = null;
                _context.next = 28;
                break;

              case 27:
                _context.t0 = 'Value is not valid';

              case 28:
                return _context.abrupt("return", _context.t0);

              case 29:
                predicate = definition.predicate, message = definition.message;
                _context.next = 32;
                return predicate(value, model);

              case 32:
                if (!_context.sent) {
                  _context.next = 36;
                  break;
                }

                _context.t1 = null;
                _context.next = 37;
                break;

              case 36:
                _context.t1 = typeof message === 'function' ? message(value, model) : message;

              case 37:
                return _context.abrupt("return", _context.t1);

              case 38:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()) || this;
  }

  return MustAsyncRule;
}(AsyncRule);

var AsyncValidatorRule = /*#__PURE__*/function (_AsyncRule) {
  _inheritsLoose(AsyncValidatorRule, _AsyncRule);

  function AsyncValidatorRule(validatorProducer) {
    return _AsyncRule.call(this, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(value, model) {
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(value == null)) {
                  _context.next = 4;
                  break;
                }

                _context.t0 = Promise.resolve(null);
                _context.next = 7;
                break;

              case 4:
                _context.next = 6;
                return validatorProducer(model).validateAsync(value);

              case 6:
                _context.t0 = _context.sent;

              case 7:
                return _context.abrupt("return", _context.t0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()) || this;
  }

  return AsyncValidatorRule;
}(AsyncRule);

var Rule = /*#__PURE__*/function (_CoreRule) {
  _inheritsLoose(Rule, _CoreRule);

  function Rule(valueValidator) {
    var _this;

    _this = _CoreRule.call(this) || this;

    _this.validate = function (value, model) {
      if (_this.whenCondition != null && !_this.whenCondition(model)) {
        return null;
      }

      if (_this.unlessCondition != null && _this.unlessCondition(model)) {
        return null;
      }

      var errorOrNull = _this.valueValidator(value, model);

      return errorOrNull != null ? _this.customErrorMessage || errorOrNull : null;
    };

    _this.valueValidator = valueValidator;
    return _this;
  }

  return Rule;
}(CoreRule);

var emailAddressPattern = /^[a-zA-Z0-9.!#$%&’"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
var EmailAddressRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(EmailAddressRule, _Rule);

  function EmailAddressRule() {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'string') {
        throw new TypeError('A non-string value was passed to the emailAddress rule');
      }

      return emailAddressPattern.test(value) ? null : 'Not a valid email address';
    }) || this;
  }

  return EmailAddressRule;
}(Rule);

var EqualRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(EqualRule, _Rule);

  function EqualRule(requiredValue) {
    return _Rule.call(this, function (value) {
      return value === requiredValue ? null : "Must equal '" + requiredValue + "'";
    }) || this;
  }

  return EqualRule;
}(Rule);

var ExclusiveBetweenRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(ExclusiveBetweenRule, _Rule);

  function ExclusiveBetweenRule(lowerBound, upperBound) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'number') {
        throw new TypeError('A non-number value was passed to the exclusiveBetween rule');
      }

      return value > lowerBound && value < upperBound ? null : "Value must be between " + lowerBound.toLocaleString() + " and " + upperBound.toLocaleString() + " (exclusive)";
    }) || this;
  }

  return ExclusiveBetweenRule;
}(Rule);

var GreaterThanOrEqualToRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(GreaterThanOrEqualToRule, _Rule);

  function GreaterThanOrEqualToRule(threshold) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'number') {
        throw new TypeError('A non-number value was passed to the greaterThanOrEqualTo rule');
      }

      return value >= threshold ? null : "Value must be greater than or equal to " + threshold.toLocaleString();
    }) || this;
  }

  return GreaterThanOrEqualToRule;
}(Rule);

var GreaterThanRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(GreaterThanRule, _Rule);

  function GreaterThanRule(threshold) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'number') {
        throw new TypeError('A non-number value was passed to the greaterThan rule');
      }

      return value > threshold ? null : "Value must be greater than " + threshold.toLocaleString();
    }) || this;
  }

  return GreaterThanRule;
}(Rule);

var InclusiveBetweenRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(InclusiveBetweenRule, _Rule);

  function InclusiveBetweenRule(lowerBound, upperBound) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'number') {
        throw new TypeError('A non-number value was passed to the inclusiveBetween rule');
      }

      return value >= lowerBound && value <= upperBound ? null : "Value must be between " + lowerBound.toLocaleString() + " and " + upperBound.toLocaleString() + " (inclusive)";
    }) || this;
  }

  return InclusiveBetweenRule;
}(Rule);

var LengthRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(LengthRule, _Rule);

  function LengthRule(minLength, maxLength) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'string') {
        throw new TypeError('A non-string value was passed to the length rule');
      }

      return value.length >= minLength && value.length <= maxLength ? null : "Value must be between " + minLength.toLocaleString() + " and " + maxLength.toLocaleString() + " characters long";
    }) || this;
  }

  return LengthRule;
}(Rule);

var LessThanOrEqualToRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(LessThanOrEqualToRule, _Rule);

  function LessThanOrEqualToRule(threshold) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'number') {
        throw new TypeError('A non-number value was passed to the lessThanOrEqualTo rule');
      }

      return value <= threshold ? null : "Value must be less than or equal to " + threshold.toLocaleString();
    }) || this;
  }

  return LessThanOrEqualToRule;
}(Rule);

var LessThanRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(LessThanRule, _Rule);

  function LessThanRule(threshold) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'number') {
        throw new TypeError('A non-number value was passed to the lessThan rule');
      }

      return value < threshold ? null : "Value must be less than " + threshold.toLocaleString();
    }) || this;
  }

  return LessThanRule;
}(Rule);

var MatchesRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(MatchesRule, _Rule);

  function MatchesRule(pattern) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'string') {
        throw new TypeError('A non-string value was passed to the matches rule');
      }

      return pattern.test(value) ? null : 'Value does not match the required pattern';
    }) || this;
  }

  return MatchesRule;
}(Rule);

var MaxLengthRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(MaxLengthRule, _Rule);

  function MaxLengthRule(maxLength) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'string') {
        throw new TypeError('A non-string value was passed to the maxLength rule');
      }

      return value.length <= maxLength ? null : "Value must be no more than " + maxLength.toLocaleString() + " characters long";
    }) || this;
  }

  return MaxLengthRule;
}(Rule);

var MinLengthRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(MinLengthRule, _Rule);

  function MinLengthRule(minLength) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'string') {
        throw new TypeError('A non-string value was passed to the minLength rule');
      }

      return value.length >= minLength ? null : "Value must be at least " + minLength.toLocaleString() + " characters long";
    }) || this;
  }

  return MinLengthRule;
}(Rule);

var MustRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(MustRule, _Rule);

  function MustRule(definition) {
    return _Rule.call(this, function (value, model) {
      if (Array.isArray(definition)) {
        for (var _iterator = _createForOfIteratorHelperLoose(definition), _step; !(_step = _iterator()).done;) {
          var eachDefinition = _step.value;

          if (typeof eachDefinition === 'function') {
            var isValid = eachDefinition(value, model);

            if (!isValid) {
              return 'Value is not valid';
            }
          } else {
            var _isValid = eachDefinition.predicate(value, model);

            if (!_isValid) {
              return typeof eachDefinition.message === 'function' ? eachDefinition.message(value, model) : eachDefinition.message;
            }
          }
        }

        return null;
      }

      if (typeof definition === 'function') {
        return definition(value, model) ? null : 'Value is not valid';
      }

      var predicate = definition.predicate,
          message = definition.message;
      return predicate(value, model) ? null : typeof message === 'function' ? message(value, model) : message;
    }) || this;
  }

  return MustRule;
}(Rule);

var NotEmptyRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(NotEmptyRule, _Rule);

  function NotEmptyRule() {
    return _Rule.call(this, function (value) {
      if (typeof value !== 'string') {
        if (value == null) {
          return null;
        }

        throw new TypeError('A non-string value was passed to the notEmpty rule');
      }

      return value.trim().length > 0 ? null : 'Value cannot be empty';
    }) || this;
  }

  return NotEmptyRule;
}(Rule);

var NotEqualRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(NotEqualRule, _Rule);

  function NotEqualRule(forbiddenValue) {
    return _Rule.call(this, function (value) {
      return value !== forbiddenValue ? null : "Must not equal '" + forbiddenValue + "'";
    }) || this;
  }

  return NotEqualRule;
}(Rule);

var NotNullRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(NotNullRule, _Rule);

  function NotNullRule() {
    return _Rule.call(this, function (value) {
      return value != null ? null : 'Value cannot be null';
    }) || this;
  }

  return NotNullRule;
}(Rule);

var NullRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(NullRule, _Rule);

  function NullRule() {
    return _Rule.call(this, function (value) {
      return value == null ? null : 'Value must be null';
    }) || this;
  }

  return NullRule;
}(Rule);

var ScalePrecisionRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(ScalePrecisionRule, _Rule);

  function ScalePrecisionRule(precision, scale) {
    return _Rule.call(this, function (value) {
      if (value == null) {
        return null;
      }

      if (typeof value !== 'number') {
        throw new TypeError('A non-number value was passed to the scalePrecision rule');
      }

      var regex = scalePrecisionRegex(scale, precision);

      if (!regex.test(value.toString())) {
        return "Value must not be more than " + scale + " digits in total, with allowance for " + precision + " decimals";
      }

      return null;
    }) || this;
  }

  return ScalePrecisionRule;
}(Rule);

var scalePrecisionRegex = function scalePrecisionRegex(scale, precision) {
  return new RegExp("^(-)?([0-9]){0," + (scale - precision) + "}(\\.[0-9]{0," + precision + "})?$");
};

var ValidatorRule = /*#__PURE__*/function (_Rule) {
  _inheritsLoose(ValidatorRule, _Rule);

  function ValidatorRule(validatorProducer) {
    return _Rule.call(this, function (value, model) {
      return value == null ? null : validatorProducer(model).validate(value);
    }) || this;
  }

  return ValidatorRule;
}(Rule);

var CoreValueValidatorBuilder = function CoreValueValidatorBuilder(rebuildValidate) {
  var _this = this;

  this.rules = [];

  this.pushRule = function (rule) {
    _this.rules.push({
      isAsync: false,
      rule: rule
    });

    _this.rebuildValidate();
  };

  this.pushAsyncRule = function (rule) {
    _this.rules.push({
      isAsync: true,
      rule: rule
    });

    _this.rebuildValidate();
  };

  this.withMessage = function (message) {
    var latestRule = _this.getLatestRule();

    latestRule.rule.setCustomErrorMessage(message);

    _this.rebuildValidate();

    return _extends({}, _this.getAllRules(), {
      when: _this.when,
      unless: _this.unless
    });
  };

  this.when = function (condition, appliesTo) {
    if (appliesTo === void 0) {
      appliesTo = 'AppliesToAllValidators';
    }

    if (appliesTo === 'AppliesToAllValidators') {
      for (var _iterator = _createForOfIteratorHelperLoose(_this.rules), _step; !(_step = _iterator()).done;) {
        var rule = _step.value;
        rule.rule.setWhenCondition(condition);
      }
    } else {
      var latestRule = _this.getLatestRule();

      latestRule.rule.setWhenCondition(condition);
    }

    _this.rebuildValidate();

    return _this.getAllRules();
  };

  this.unless = function (condition, appliesTo) {
    if (appliesTo === void 0) {
      appliesTo = 'AppliesToAllValidators';
    }

    if (appliesTo === 'AppliesToAllValidators') {
      for (var _iterator2 = _createForOfIteratorHelperLoose(_this.rules), _step2; !(_step2 = _iterator2()).done;) {
        var rule = _step2.value;
        rule.rule.setUnlessCondition(condition);
      }
    } else {
      var latestRule = _this.getLatestRule();

      latestRule.rule.setUnlessCondition(condition);
    }

    _this.rebuildValidate();

    return _this.getAllRules();
  };

  this.notEqual = function (forbiddenValue) {
    var notEqualRule = new NotEqualRule(forbiddenValue);

    _this.pushRule(notEqualRule);

    return _this.getAllRulesAndExtensions();
  };

  this.equal = function (requiredValue) {
    var equalRule = new EqualRule(requiredValue);

    _this.pushRule(equalRule);

    return _this.getAllRulesAndExtensions();
  };

  this.must = function (definition) {
    var mustRule = new MustRule(definition);

    _this.pushRule(mustRule);

    return _this.getAllRulesAndExtensions();
  };

  this.notNull = function () {
    var notNullRule = new NotNullRule();

    _this.pushRule(notNullRule);

    return _this.getAllRulesAndExtensions();
  };

  this["null"] = function () {
    var nullRule = new NullRule();

    _this.pushRule(nullRule);

    return _this.getAllRulesAndExtensions();
  };

  this.notEmpty = function () {
    var notEmptyRule = new NotEmptyRule();

    _this.pushRule(notEmptyRule);

    return _this.getAllRulesAndExtensions();
  };

  this.length = function (minLength, maxLength) {
    var lengthRule = new LengthRule(minLength, maxLength);

    _this.pushRule(lengthRule);

    return _this.getAllRulesAndExtensions();
  };

  this.maxLength = function (maxLength) {
    var maxLengthRule = new MaxLengthRule(maxLength);

    _this.pushRule(maxLengthRule);

    return _this.getAllRulesAndExtensions();
  };

  this.minLength = function (minLength) {
    var minLengthRule = new MinLengthRule(minLength);

    _this.pushRule(minLengthRule);

    return _this.getAllRulesAndExtensions();
  };

  this.matches = function (pattern) {
    var matchesRule = new MatchesRule(pattern);

    _this.pushRule(matchesRule);

    return _this.getAllRulesAndExtensions();
  };

  this.emailAddress = function () {
    var emailAddressRule = new EmailAddressRule();

    _this.pushRule(emailAddressRule);

    return _this.getAllRulesAndExtensions();
  };

  this.lessThan = function (threshold) {
    var lessThanRule = new LessThanRule(threshold);

    _this.pushRule(lessThanRule);

    return _this.getAllRulesAndExtensions();
  };

  this.lessThanOrEqualTo = function (threshold) {
    var lessThanOrEqualToRule = new LessThanOrEqualToRule(threshold);

    _this.pushRule(lessThanOrEqualToRule);

    return _this.getAllRulesAndExtensions();
  };

  this.greaterThan = function (threshold) {
    var greaterThanRule = new GreaterThanRule(threshold);

    _this.pushRule(greaterThanRule);

    return _this.getAllRulesAndExtensions();
  };

  this.greaterThanOrEqualTo = function (threshold) {
    var greaterThanOrEqualToRule = new GreaterThanOrEqualToRule(threshold);

    _this.pushRule(greaterThanOrEqualToRule);

    return _this.getAllRulesAndExtensions();
  };

  this.exclusiveBetween = function (lowerBound, upperBound) {
    var exclusiveBetweenRule = new ExclusiveBetweenRule(lowerBound, upperBound);

    _this.pushRule(exclusiveBetweenRule);

    return _this.getAllRulesAndExtensions();
  };

  this.inclusiveBetween = function (lowerBound, upperBound) {
    var inclusiveBetweenRule = new InclusiveBetweenRule(lowerBound, upperBound);

    _this.pushRule(inclusiveBetweenRule);

    return _this.getAllRulesAndExtensions();
  };

  this.setValidator = function (validatorProducer) {
    var validatorRule = new ValidatorRule(validatorProducer);

    _this.pushRule(validatorRule);

    return _this.getAllRulesAndExtensions();
  };

  this.scalePrecision = function (precision, scale) {
    if (scale - precision <= 0) {
      throw new Error('Invalid scale and precision were passed to the scalePrecision rule');
    }

    var scalePrecisionRule = new ScalePrecisionRule(precision, scale);

    _this.pushRule(scalePrecisionRule);

    return _this.getAllRulesAndExtensions();
  };

  this._getAllRules = function () {
    return {
      notEqual: _this.notEqual,
      equal: _this.equal,
      must: _this.must,
      notNull: _this.notNull,
      "null": _this["null"],
      notEmpty: _this.notEmpty,
      length: _this.length,
      maxLength: _this.maxLength,
      minLength: _this.minLength,
      matches: _this.matches,
      emailAddress: _this.emailAddress,
      lessThan: _this.lessThan,
      lessThanOrEqualTo: _this.lessThanOrEqualTo,
      greaterThan: _this.greaterThan,
      greaterThanOrEqualTo: _this.greaterThanOrEqualTo,
      exclusiveBetween: _this.exclusiveBetween,
      inclusiveBetween: _this.inclusiveBetween,
      setValidator: _this.setValidator,
      scalePrecision: _this.scalePrecision
    };
  }; // We don't care about code coverage for this line
  // istanbul ignore next


  this.getAllRules = function () {
    throw new Error('getAllRules on CoreValueValidatorBuilder is an abstract method and should never be called');
  };

  this.getAllRulesAndExtensions = function () {
    return _extends({}, _this.getAllRules(), {
      withMessage: _this.withMessage,
      when: _this.when,
      unless: _this.unless
    });
  };

  this.getLatestRule = function () {
    return _this.rules[_this.rules.length - 1];
  };

  this.rebuildValidate = rebuildValidate;
};

var AsyncValueValidatorBuilder = /*#__PURE__*/function (_CoreValueValidatorBu) {
  _inheritsLoose(AsyncValueValidatorBuilder, _CoreValueValidatorBu);

  function AsyncValueValidatorBuilder(rebuildValidateAsync) {
    var _this;

    _this = _CoreValueValidatorBu.call(this, rebuildValidateAsync) || this;

    _this.build = function () {
      return /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(value, model) {
          var _iterator, _step, rule, validationResult;

          return runtime_1.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _iterator = _createForOfIteratorHelperLoose(_this.rules);

                case 1:
                  if ((_step = _iterator()).done) {
                    _context.next = 15;
                    break;
                  }

                  rule = _step.value;

                  if (!rule.isAsync) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 6;
                  return rule.rule.validateAsync(value, model);

                case 6:
                  _context.t0 = _context.sent;
                  _context.next = 10;
                  break;

                case 9:
                  _context.t0 = rule.rule.validate(value, model);

                case 10:
                  validationResult = _context.t0;

                  if (!hasError(validationResult)) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt("return", validationResult);

                case 13:
                  _context.next = 1;
                  break;

                case 15:
                  return _context.abrupt("return", null);

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
    };

    _this.mustAsync = function (definition) {
      var asyncMustRule = new MustAsyncRule(definition);

      _this.pushAsyncRule(asyncMustRule);

      return _this.getAllRulesAndExtensions();
    };

    _this.setAsyncValidator = function (validatorProducer) {
      var asyncValidatorRule = new AsyncValidatorRule(validatorProducer);

      _this.pushAsyncRule(asyncValidatorRule);

      return _this.getAllRulesAndExtensions();
    };

    _this.getAllRules = function () {
      return _extends({}, _this._getAllRules(), {
        mustAsync: _this.mustAsync,
        setAsyncValidator: _this.setAsyncValidator
      });
    };

    return _this;
  }

  return AsyncValueValidatorBuilder;
}(CoreValueValidatorBuilder);

var AsyncArrayValueValidatorBuilder = function AsyncArrayValueValidatorBuilder(rebuildValidateAsync, propertyName) {
  var _this = this;

  this.build = function () {
    return /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(value, model) {
        var asyncValueValidator, errors, _iterator, _step, element, errorOrNull, valueValidationResult;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(model[_this.propertyName] == null)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", null);

              case 2:
                asyncValueValidator = _this.eachAsyncValueValidatorBuilder.build();
                errors = [];
                _iterator = _createForOfIteratorHelperLoose(value);

              case 5:
                if ((_step = _iterator()).done) {
                  _context.next = 14;
                  break;
                }

                element = _step.value;
                _context.next = 9;
                return asyncValueValidator(element, model);

              case 9:
                errorOrNull = _context.sent;
                valueValidationResult = hasError(errorOrNull) ? errorOrNull : null;
                errors.push(valueValidationResult);

              case 12:
                _context.next = 5;
                break;

              case 14:
                return _context.abrupt("return", hasError(errors) ? errors : null);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  };

  this.getAllRules = function () {
    return _this.eachAsyncValueValidatorBuilder.getAllRules();
  };

  this.eachAsyncValueValidatorBuilder = new AsyncValueValidatorBuilder(rebuildValidateAsync);
  this.propertyName = propertyName;
};

var ValueValidatorBuilder = /*#__PURE__*/function (_CoreValueValidatorBu) {
  _inheritsLoose(ValueValidatorBuilder, _CoreValueValidatorBu);

  function ValueValidatorBuilder(rebuildValidate) {
    var _this;

    _this = _CoreValueValidatorBu.call(this, rebuildValidate) || this;

    _this.build = function () {
      return function (value, model) {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.rules), _step; !(_step = _iterator()).done;) {
          var rule = _step.value;
          var validationResult = rule.rule.validate(value, model);

          if (hasError(validationResult)) {
            return validationResult;
          }
        }

        return null;
      };
    };

    _this.getAllRules = function () {
      return _extends({}, _this._getAllRules());
    };

    return _this;
  }

  return ValueValidatorBuilder;
}(CoreValueValidatorBuilder);

var ArrayValueValidatorBuilder = function ArrayValueValidatorBuilder(rebuildValidate, propertyName) {
  var _this = this;

  this.build = function () {
    return function (value, model) {
      if (model[_this.propertyName] == null) {
        return null;
      }

      var valueValidator = _this.eachValueValidatorBuilder.build();

      var errors = value.map(function (element) {
        var errorOrNull = valueValidator(element, model);
        return hasError(errorOrNull) ? errorOrNull : null;
      });
      return hasError(errors) ? errors : null;
    };
  };

  this.getAllRules = function () {
    return _this.eachValueValidatorBuilder.getAllRules();
  };

  this.eachValueValidatorBuilder = new ValueValidatorBuilder(rebuildValidate);
  this.propertyName = propertyName;
};

var CoreValidator = function CoreValidator(isAsync) {
  var _this = this;

  this.valueValidatorBuildersByPropertyName = {};
  this.asyncValueValidatorBuildersByPropertyName = {};

  this._validate = function () {
    return {};
  };

  this._validateAsync = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Promise.resolve({}));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  this.rebuildValidate = function () {
    _this._validate = function (value) {
      var errors = {};

      for (var _i = 0, _Object$keys = Object.keys(_this.valueValidatorBuildersByPropertyName); _i < _Object$keys.length; _i++) {
        var propertyName = _Object$keys[_i];
        var valueValidatorBuilders = _this.valueValidatorBuildersByPropertyName[propertyName];

        for (var _iterator = _createForOfIteratorHelperLoose(valueValidatorBuilders), _step; !(_step = _iterator()).done;) {
          var valueValidatorBuilder = _step.value;
          var valueValidator = valueValidatorBuilder.build();
          var result = valueValidator(value[propertyName], value);

          if (hasError(result)) {
            errors[propertyName] = result;
          }
        }
      }

      return errors;
    };
  };

  this.rebuildValidateAsync = function () {
    _this._validateAsync = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(value) {
        var errors, _i2, _Object$keys2, propertyName, asyncValueValidatorBuilders, _iterator2, _step2, asyncValueValidatorBuilder, asyncValueValidator, result;

        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                errors = {};
                _i2 = 0, _Object$keys2 = Object.keys(_this.asyncValueValidatorBuildersByPropertyName);

              case 2:
                if (!(_i2 < _Object$keys2.length)) {
                  _context2.next = 18;
                  break;
                }

                propertyName = _Object$keys2[_i2];
                asyncValueValidatorBuilders = _this.asyncValueValidatorBuildersByPropertyName[propertyName];
                _iterator2 = _createForOfIteratorHelperLoose(asyncValueValidatorBuilders);

              case 6:
                if ((_step2 = _iterator2()).done) {
                  _context2.next = 15;
                  break;
                }

                asyncValueValidatorBuilder = _step2.value;
                asyncValueValidator = asyncValueValidatorBuilder.build();
                _context2.next = 11;
                return asyncValueValidator(value[propertyName], value);

              case 11:
                result = _context2.sent;

                if (hasError(result)) {
                  errors[propertyName] = result;
                }

              case 13:
                _context2.next = 6;
                break;

              case 15:
                _i2++;
                _context2.next = 2;
                break;

              case 18:
                return _context2.abrupt("return", errors);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
  };

  this.ruleFor = function (propertyName) {
    if (_this._isAsync) {
      var asyncValueValidatorBuilder = new AsyncValueValidatorBuilder(_this.rebuildValidateAsync);
      _this.asyncValueValidatorBuildersByPropertyName[propertyName] = _this.asyncValueValidatorBuildersByPropertyName[propertyName] || [];

      _this.asyncValueValidatorBuildersByPropertyName[propertyName].push(asyncValueValidatorBuilder);

      return asyncValueValidatorBuilder.getAllRules(); // Appease the type system
    } else {
      var valueValidatorBuilder = new ValueValidatorBuilder(_this.rebuildValidate);
      _this.valueValidatorBuildersByPropertyName[propertyName] = _this.valueValidatorBuildersByPropertyName[propertyName] || [];

      _this.valueValidatorBuildersByPropertyName[propertyName].push(valueValidatorBuilder);

      return valueValidatorBuilder.getAllRules(); // Appease the type system
    }
  };

  this.ruleForEach = function (propertyName) {
    if (_this._isAsync) {
      var asyncArrayValueValidatorBuilder = new AsyncArrayValueValidatorBuilder(_this.rebuildValidateAsync, propertyName);

      if (_this.asyncValueValidatorBuildersByPropertyName[propertyName] == null) {
        _this.asyncValueValidatorBuildersByPropertyName[propertyName] = [];
      }

      _this.asyncValueValidatorBuildersByPropertyName[propertyName].push(asyncArrayValueValidatorBuilder);

      return asyncArrayValueValidatorBuilder.getAllRules();
    } else {
      var arrayValueValidatorBuilder = new ArrayValueValidatorBuilder(_this.rebuildValidate, propertyName);

      if (_this.valueValidatorBuildersByPropertyName[propertyName] == null) {
        _this.valueValidatorBuildersByPropertyName[propertyName] = [];
      }

      _this.valueValidatorBuildersByPropertyName[propertyName].push(arrayValueValidatorBuilder);

      return arrayValueValidatorBuilder.getAllRules();
    }
  };

  this._isAsync = isAsync;
};
var SyncValidator = /*#__PURE__*/function (_CoreValidator) {
  _inheritsLoose(SyncValidator, _CoreValidator);

  function SyncValidator() {
    var _this2;

    _this2 = _CoreValidator.call(this, false) || this;

    _this2.validate = function (value) {
      return _this2._validate(value);
    };

    return _this2;
  }

  return SyncValidator;
}(CoreValidator);
var AsyncValidator = /*#__PURE__*/function (_CoreValidator2) {
  _inheritsLoose(AsyncValidator, _CoreValidator2);

  function AsyncValidator() {
    var _this3;

    _this3 = _CoreValidator2.call(this, true) || this;

    _this3.validateAsync = function (value) {
      return _this3._validateAsync(value);
    };

    return _this3;
  }

  return AsyncValidator;
}(CoreValidator);

exports.AsyncValidator = AsyncValidator;
exports.Validator = SyncValidator;
//# sourceMappingURL=fluentvalidation-ts.cjs.development.js.map
