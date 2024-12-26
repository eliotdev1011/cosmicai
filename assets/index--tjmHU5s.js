function B1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? (i.credentials = "include") : o.crossOrigin === "anonymous" ? (i.credentials = "omit") : (i.credentials = "same-origin"), i;
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function lm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cm = { exports: {} },
  la = {},
  um = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var li = Symbol.for("react.element"),
  U1 = Symbol.for("react.portal"),
  W1 = Symbol.for("react.fragment"),
  K1 = Symbol.for("react.strict_mode"),
  H1 = Symbol.for("react.profiler"),
  G1 = Symbol.for("react.provider"),
  Y1 = Symbol.for("react.context"),
  X1 = Symbol.for("react.forward_ref"),
  Q1 = Symbol.for("react.suspense"),
  q1 = Symbol.for("react.memo"),
  Z1 = Symbol.for("react.lazy"),
  ef = Symbol.iterator;
function J1(e) {
  return e === null || typeof e != "object" ? null : ((e = (ef && e[ef]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var dm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fm = Object.assign,
  pm = {};
function Hr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = pm), (this.updater = n || dm);
}
Hr.prototype.isReactComponent = {};
Hr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hm() {}
hm.prototype = Hr.prototype;
function ou(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = pm), (this.updater = n || dm);
}
var iu = (ou.prototype = new hm());
iu.constructor = ou;
fm(iu, Hr.prototype);
iu.isPureReactComponent = !0;
var tf = Array.isArray,
  mm = Object.prototype.hasOwnProperty,
  su = { current: null },
  gm = { key: !0, ref: !0, __self: !0, __source: !0 };
function vm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null) for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)) mm.call(t, r) && !gm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: li, type: e, key: i, ref: s, props: o, _owner: su.current };
}
function ex(e, t) {
  return { $$typeof: li, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === li;
}
function tx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nf = /\/+/g;
function Fa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? tx("" + e.key) : t.toString(36);
}
function ns(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case li:
          case U1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Fa(s, 0) : r),
      tf(o)
        ? ((n = ""),
          e != null && (n = e.replace(nf, "$&/") + "/"),
          ns(o, t, n, "", function (c) {
            return c;
          }))
        : o != null && (au(o) && (o = ex(o, n + (!o.key || (s && s.key === o.key) ? "" : ("" + o.key).replace(nf, "$&/") + "/") + e)), t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), tf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Fa(i, a);
      s += ns(i, t, n, l, o);
    }
  else if (((l = J1(e)), typeof l == "function")) for (e = l.call(e), a = 0; !(i = e.next()).done; ) (i = i.value), (l = r + Fa(i, a++)), (s += ns(i, t, n, l, o));
  else if (i === "object") throw ((t = String(e)), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."));
  return s;
}
function Ti(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ns(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function nx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null },
  rs = { transition: null },
  rx = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: rs, ReactCurrentOwner: su };
W.Children = {
  map: Ti,
  forEach: function (e, t, n) {
    Ti(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ti(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ti(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!au(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
W.Component = Hr;
W.Fragment = W1;
W.Profiler = H1;
W.PureComponent = ou;
W.StrictMode = K1;
W.Suspense = Q1;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rx;
W.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((i = t.ref), (s = su.current)), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
    for (l in t) mm.call(t, l) && !gm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: li, type: e.type, key: o, ref: i, props: r, _owner: s };
};
W.createContext = function (e) {
  return (e = { $$typeof: Y1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: G1, _context: e }), (e.Consumer = e);
};
W.createElement = vm;
W.createFactory = function (e) {
  var t = vm.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: X1, render: e };
};
W.isValidElement = au;
W.lazy = function (e) {
  return { $$typeof: Z1, _payload: { _status: -1, _result: e }, _init: nx };
};
W.memo = function (e, t) {
  return { $$typeof: q1, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = rs.transition;
  rs.transition = {};
  try {
    e();
  } finally {
    rs.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Ie.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t);
};
W.useId = function () {
  return Ie.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Ie.current.useRef(e);
};
W.useState = function (e) {
  return Ie.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Ie.current.useTransition();
};
W.version = "18.2.0";
um.exports = W;
var f = um.exports;
const fe = lm(f),
  ym = B1({ __proto__: null, default: fe }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ox = f,
  ix = Symbol.for("react.element"),
  sx = Symbol.for("react.fragment"),
  ax = Object.prototype.hasOwnProperty,
  lx = ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cx = { key: !0, ref: !0, __self: !0, __source: !0 };
function xm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) ax.call(t, r) && !cx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: ix, type: e, key: i, ref: s, props: o, _owner: lx.current };
}
la.Fragment = sx;
la.jsx = xm;
la.jsxs = xm;
cm.exports = la;
var g = cm.exports,
  _l = {},
  wm = { exports: {} },
  Je = {},
  bm = { exports: {} },
  Sm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, R) {
    var A = $.length;
    $.push(R);
    e: for (; 0 < A; ) {
      var V = (A - 1) >>> 1,
        K = $[V];
      if (0 < o(K, R)) ($[V] = R), ($[A] = K), (A = V);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var R = $[0],
      A = $.pop();
    if (A !== R) {
      $[0] = A;
      e: for (var V = 0, K = $.length, Ue = K >>> 1; V < Ue; ) {
        var We = 2 * (V + 1) - 1,
          dt = $[We],
          me = We + 1,
          Ke = $[me];
        if (0 > o(dt, A)) me < K && 0 > o(Ke, dt) ? (($[V] = Ke), ($[me] = A), (V = me)) : (($[V] = dt), ($[We] = A), (V = We));
        else if (me < K && 0 > o(Ke, A)) ($[V] = Ke), ($[me] = A), (V = me);
        else break e;
      }
    }
    return R;
  }
  function o($, R) {
    var A = $.sortIndex - R.sortIndex;
    return A !== 0 ? A : $.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    p = 3,
    v = !1,
    w = !1,
    x = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y($) {
    for (var R = n(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= $) r(c), (R.sortIndex = R.expirationTime), t(l, R);
      else break;
      R = n(c);
    }
  }
  function S($) {
    if (((x = !1), y($), !w))
      if (n(l) !== null) (w = !0), z(C);
      else {
        var R = n(c);
        R !== null && B(S, R.startTime - $);
      }
  }
  function C($, R) {
    (w = !1), x && ((x = !1), h(P), (P = -1)), (v = !0);
    var A = p;
    try {
      for (y(R), d = n(l); d !== null && (!(d.expirationTime > R) || ($ && !O())); ) {
        var V = d.callback;
        if (typeof V == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var K = V(d.expirationTime <= R);
          (R = e.unstable_now()), typeof K == "function" ? (d.callback = K) : d === n(l) && r(l), y(R);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Ue = !0;
      else {
        var We = n(c);
        We !== null && B(S, We.startTime - R), (Ue = !1);
      }
      return Ue;
    } finally {
      (d = null), (p = A), (v = !1);
    }
  }
  var E = !1,
    T = null,
    P = -1,
    k = 5,
    M = -1;
  function O() {
    return !(e.unstable_now() - M < k);
  }
  function j() {
    if (T !== null) {
      var $ = e.unstable_now();
      M = $;
      var R = !0;
      try {
        R = T(!0, $);
      } finally {
        R ? Z() : ((E = !1), (T = null));
      }
    } else E = !1;
  }
  var Z;
  if (typeof m == "function")
    Z = function () {
      m(j);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      G = F.port2;
    (F.port1.onmessage = j),
      (Z = function () {
        G.postMessage(null);
      });
  } else
    Z = function () {
      b(j, 0);
    };
  function z($) {
    (T = $), E || ((E = !0), Z());
  }
  function B($, R) {
    P = b(function () {
      $(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), z(C));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (k = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function ($) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = p;
      }
      var A = p;
      p = R;
      try {
        return $();
      } finally {
        p = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, R) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var A = p;
      p = $;
      try {
        return R();
      } finally {
        p = A;
      }
    }),
    (e.unstable_scheduleCallback = function ($, R, A) {
      var V = e.unstable_now();
      switch ((typeof A == "object" && A !== null ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? V + A : V)) : (A = V), $)) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (K = A + K), ($ = { id: u++, callback: R, priorityLevel: $, startTime: A, expirationTime: K, sortIndex: -1 }), A > V ? (($.sortIndex = A), t(c, $), n(l) === null && $ === n(c) && (x ? (h(P), (P = -1)) : (x = !0), B(S, A - V))) : (($.sortIndex = K), t(l, $), w || v || ((w = !0), z(C))), $;
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function ($) {
      var R = p;
      return function () {
        var A = p;
        p = R;
        try {
          return $.apply(this, arguments);
        } finally {
          p = A;
        }
      };
    });
})(Sm);
bm.exports = Sm;
var ux = bm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cm = f,
  qe = ux;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Em = new Set(),
  _o = {};
function qn(e, t) {
  jr(e, t), jr(e + "Capture", t);
}
function jr(e, t) {
  for (_o[e] = t, e = 0; e < t.length; e++) Em.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  jl = Object.prototype.hasOwnProperty,
  dx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  rf = {},
  of = {};
function fx(e) {
  return jl.call(of, e) ? !0 : jl.call(rf, e) ? !1 : dx.test(e) ? (of[e] = !0) : ((rf[e] = !0), !1);
}
function px(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function hx(e, t, n, r) {
  if (t === null || typeof t > "u" || px(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = o), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = s);
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  Te[e] = new De(e, 0, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Te[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Te[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Te[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  Te[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Te[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Te[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Te[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Te[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lu = /[\-:]([a-z])/g;
function cu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(lu, cu);
  Te[t] = new De(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(lu, cu);
  Te[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(lu, cu);
  Te[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Te[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Te[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uu(e, t, n, r) {
  var o = Te.hasOwnProperty(t) ? Te[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) && (hx(t, n, o, r) && (n = null), r || o === null ? fx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n) : ((t = o.attributeName), (r = o.attributeNamespace), n === null ? e.removeAttribute(t) : ((o = o.type), (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ki = Symbol.for("react.element"),
  cr = Symbol.for("react.portal"),
  ur = Symbol.for("react.fragment"),
  du = Symbol.for("react.strict_mode"),
  Il = Symbol.for("react.profiler"),
  Pm = Symbol.for("react.provider"),
  Tm = Symbol.for("react.context"),
  fu = Symbol.for("react.forward_ref"),
  Dl = Symbol.for("react.suspense"),
  Ol = Symbol.for("react.suspense_list"),
  pu = Symbol.for("react.memo"),
  rn = Symbol.for("react.lazy"),
  km = Symbol.for("react.offscreen"),
  sf = Symbol.iterator;
function no(e) {
  return e === null || typeof e != "object" ? null : ((e = (sf && e[sf]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var se = Object.assign,
  Va;
function ho(e) {
  if (Va === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Va = (t && t[1]) || "";
    }
  return (
    `
` +
    Va +
    e
  );
}
var za = !1;
function Ba(e, t) {
  if (!e || za) return "";
  za = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (za = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ho(e) : "";
}
function mx(e) {
  switch (e.tag) {
    case 5:
      return ho(e.type);
    case 16:
      return ho("Lazy");
    case 13:
      return ho("Suspense");
    case 19:
      return ho("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ba(e.type, !1)), e;
    case 11:
      return (e = Ba(e.type.render, !1)), e;
    case 1:
      return (e = Ba(e.type, !0)), e;
    default:
      return "";
  }
}
function Ll(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ur:
      return "Fragment";
    case cr:
      return "Portal";
    case Il:
      return "Profiler";
    case du:
      return "StrictMode";
    case Dl:
      return "Suspense";
    case Ol:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Tm:
        return (e.displayName || "Context") + ".Consumer";
      case Pm:
        return (e._context.displayName || "Context") + ".Provider";
      case fu:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case pu:
        return (t = e.displayName || null), t !== null ? t : Ll(e.type) || "Memo";
      case rn:
        (t = e._payload), (e = e._init);
        try {
          return Ll(e(t));
        } catch {}
    }
  return null;
}
function gx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ll(t);
    case 8:
      return t === du ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function wn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function $m(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function vx(e) {
  var t = $m(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $i(e) {
  e._valueTracker || (e._valueTracker = vx(e));
}
function Rm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = $m(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function ws(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fl(e, t) {
  var n = t.checked;
  return se({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function af(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = wn(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function Nm(e, t) {
  (t = t.checked), t != null && uu(e, "checked", t, !1);
}
function Vl(e, t) {
  Nm(e, t);
  var n = wn(t.value),
    r = t.type;
  if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? zl(e, t.type, n) : t.hasOwnProperty("defaultValue") && zl(e, t.type, wn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function zl(e, t, n) {
  (t !== "number" || ws(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mo = Array.isArray;
function kr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return se({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function cf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (mo(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: wn(n) };
}
function Mm(e, t) {
  var n = wn(t.value),
    r = wn(t.defaultValue);
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function uf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Am(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ul(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Am(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ri,
  _m = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ri = Ri || document.createElement("div"), Ri.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ri.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bo = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
  yx = ["Webkit", "ms", "Moz", "O"];
Object.keys(bo).forEach(function (e) {
  yx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bo[t] = bo[e]);
  });
});
function jm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (bo.hasOwnProperty(e) && bo[e]) ? ("" + t).trim() : t + "px";
}
function Im(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = jm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var xx = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Wl(e, t) {
  if (t) {
    if (xx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Kl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Hl = null;
function hu(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Gl = null,
  $r = null,
  Rr = null;
function df(e) {
  if ((e = di(e))) {
    if (typeof Gl != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = pa(t)), Gl(e.stateNode, e.type, t));
  }
}
function Dm(e) {
  $r ? (Rr ? Rr.push(e) : (Rr = [e])) : ($r = e);
}
function Om() {
  if ($r) {
    var e = $r,
      t = Rr;
    if (((Rr = $r = null), df(e), t)) for (e = 0; e < t.length; e++) df(t[e]);
  }
}
function Lm(e, t) {
  return e(t);
}
function Fm() {}
var Ua = !1;
function Vm(e, t, n) {
  if (Ua) return e(t, n);
  Ua = !0;
  try {
    return Lm(e, t, n);
  } finally {
    (Ua = !1), ($r !== null || Rr !== null) && (Fm(), Om());
  }
}
function Io(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Yl = !1;
if (zt)
  try {
    var ro = {};
    Object.defineProperty(ro, "passive", {
      get: function () {
        Yl = !0;
      },
    }),
      window.addEventListener("test", ro, ro),
      window.removeEventListener("test", ro, ro);
  } catch {
    Yl = !1;
  }
function wx(e, t, n, r, o, i, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var So = !1,
  bs = null,
  Ss = !1,
  Xl = null,
  bx = {
    onError: function (e) {
      (So = !0), (bs = e);
    },
  };
function Sx(e, t, n, r, o, i, s, a, l) {
  (So = !1), (bs = null), wx.apply(bx, arguments);
}
function Cx(e, t, n, r, o, i, s, a, l) {
  if ((Sx.apply(this, arguments), So)) {
    if (So) {
      var c = bs;
      (So = !1), (bs = null);
    } else throw Error(N(198));
    Ss || ((Ss = !0), (Xl = c));
  }
}
function Zn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function zm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function ff(e) {
  if (Zn(e) !== e) throw Error(N(188));
}
function Ex(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return ff(o), e;
        if (i === r) return ff(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Bm(e) {
  return (e = Ex(e)), e !== null ? Um(e) : null;
}
function Um(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Um(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wm = qe.unstable_scheduleCallback,
  pf = qe.unstable_cancelCallback,
  Px = qe.unstable_shouldYield,
  Tx = qe.unstable_requestPaint,
  de = qe.unstable_now,
  kx = qe.unstable_getCurrentPriorityLevel,
  mu = qe.unstable_ImmediatePriority,
  Km = qe.unstable_UserBlockingPriority,
  Cs = qe.unstable_NormalPriority,
  $x = qe.unstable_LowPriority,
  Hm = qe.unstable_IdlePriority,
  ca = null,
  Tt = null;
function Rx(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == "function")
    try {
      Tt.onCommitFiberRoot(ca, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : Ax,
  Nx = Math.log,
  Mx = Math.LN2;
function Ax(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Nx(e) / Mx) | 0)) | 0;
}
var Ni = 64,
  Mi = 4194304;
function go(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Es(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = go(a)) : ((i &= s), i !== 0 && (r = go(i)));
  } else (s = n & ~o), s !== 0 ? (r = go(s)) : i !== 0 && (r = go(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))) return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - vt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function _x(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function jx(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - vt(i),
      a = 1 << s,
      l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = _x(a, t)) : l <= t && (e.expiredLanes |= a), (i &= ~a);
  }
}
function Ql(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Gm() {
  var e = Ni;
  return (Ni <<= 1), !(Ni & 4194240) && (Ni = 64), e;
}
function Wa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ci(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - vt(t)), (e[t] = n);
}
function Ix(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - vt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function gu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var X = 0;
function Ym(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xm,
  vu,
  Qm,
  qm,
  Zm,
  ql = !1,
  Ai = [],
  dn = null,
  fn = null,
  pn = null,
  Do = new Map(),
  Oo = new Map(),
  sn = [],
  Dx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dn = null;
      break;
    case "dragenter":
    case "dragleave":
      fn = null;
      break;
    case "mouseover":
    case "mouseout":
      pn = null;
      break;
    case "pointerover":
    case "pointerout":
      Do.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oo.delete(t.pointerId);
  }
}
function oo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }), t !== null && ((t = di(t)), t !== null && vu(t)), e) : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Ox(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (dn = oo(dn, e, t, n, r, o)), !0;
    case "dragenter":
      return (fn = oo(fn, e, t, n, r, o)), !0;
    case "mouseover":
      return (pn = oo(pn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Do.set(i, oo(Do.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (i = o.pointerId), Oo.set(i, oo(Oo.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Jm(e) {
  var t = On(e.target);
  if (t !== null) {
    var n = Zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zm(n)), t !== null)) {
          (e.blockedOn = t),
            Zm(e.priority, function () {
              Qm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function os(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Hl = r), n.target.dispatchEvent(r), (Hl = null);
    } else return (t = di(n)), t !== null && vu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mf(e, t, n) {
  os(e) && n.delete(t);
}
function Lx() {
  (ql = !1), dn !== null && os(dn) && (dn = null), fn !== null && os(fn) && (fn = null), pn !== null && os(pn) && (pn = null), Do.forEach(mf), Oo.forEach(mf);
}
function io(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), ql || ((ql = !0), qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Lx)));
}
function Lo(e) {
  function t(o) {
    return io(o, e);
  }
  if (0 < Ai.length) {
    io(Ai[0], e);
    for (var n = 1; n < Ai.length; n++) {
      var r = Ai[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (dn !== null && io(dn, e), fn !== null && io(fn, e), pn !== null && io(pn, e), Do.forEach(t), Oo.forEach(t), n = 0; n < sn.length; n++) (r = sn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < sn.length && ((n = sn[0]), n.blockedOn === null); ) Jm(n), n.blockedOn === null && sn.shift();
}
var Nr = Xt.ReactCurrentBatchConfig,
  Ps = !0;
function Fx(e, t, n, r) {
  var o = X,
    i = Nr.transition;
  Nr.transition = null;
  try {
    (X = 1), yu(e, t, n, r);
  } finally {
    (X = o), (Nr.transition = i);
  }
}
function Vx(e, t, n, r) {
  var o = X,
    i = Nr.transition;
  Nr.transition = null;
  try {
    (X = 4), yu(e, t, n, r);
  } finally {
    (X = o), (Nr.transition = i);
  }
}
function yu(e, t, n, r) {
  if (Ps) {
    var o = Zl(e, t, n, r);
    if (o === null) el(e, t, r, Ts, n), hf(e, r);
    else if (Ox(o, e, t, n, r)) r.stopPropagation();
    else if ((hf(e, r), t & 4 && -1 < Dx.indexOf(e))) {
      for (; o !== null; ) {
        var i = di(o);
        if ((i !== null && Xm(i), (i = Zl(e, t, n, r)), i === null && el(e, t, r, Ts, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else el(e, t, r, null, n);
  }
}
var Ts = null;
function Zl(e, t, n, r) {
  if (((Ts = null), (e = hu(r)), (e = On(e)), e !== null))
    if (((t = Zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ts = e), null;
}
function eg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kx()) {
        case mu:
          return 1;
        case Km:
          return 4;
        case Cs:
        case $x:
          return 16;
        case Hm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ln = null,
  xu = null,
  is = null;
function tg() {
  if (is) return is;
  var e,
    t = xu,
    n = t.length,
    r,
    o = "value" in ln ? ln.value : ln.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (is = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ss(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _i() {
  return !0;
}
function gf() {
  return !1;
}
function et(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n), (this._targetInst = o), (this.type = r), (this.nativeEvent = i), (this.target = s), (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _i : gf), (this.isPropagationStopped = gf), this;
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = _i));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = _i));
      },
      persist: function () {},
      isPersistent: _i,
    }),
    t
  );
}
var Gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wu = et(Gr),
  ui = se({}, Gr, { view: 0, detail: 0 }),
  zx = et(ui),
  Ka,
  Ha,
  so,
  ua = se({}, ui, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== so && (so && e.type === "mousemove" ? ((Ka = e.screenX - so.screenX), (Ha = e.screenY - so.screenY)) : (Ha = Ka = 0), (so = e)), Ka);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ha;
    },
  }),
  vf = et(ua),
  Bx = se({}, ua, { dataTransfer: 0 }),
  Ux = et(Bx),
  Wx = se({}, ui, { relatedTarget: 0 }),
  Ga = et(Wx),
  Kx = se({}, Gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hx = et(Kx),
  Gx = se({}, Gr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Yx = et(Gx),
  Xx = se({}, Gr, { data: 0 }),
  yf = et(Xx),
  Qx = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
  qx = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
  Zx = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zx[e]) ? !!t[e] : !1;
}
function bu() {
  return Jx;
}
var ew = se({}, ui, {
    key: function (e) {
      if (e.key) {
        var t = Qx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? ((e = ss(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qx[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bu,
    charCode: function (e) {
      return e.type === "keypress" ? ss(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  tw = et(ew),
  nw = se({}, ua, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  xf = et(nw),
  rw = se({}, ui, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bu }),
  ow = et(rw),
  iw = se({}, Gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sw = et(iw),
  aw = se({}, ua, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  lw = et(aw),
  cw = [9, 13, 27, 32],
  Su = zt && "CompositionEvent" in window,
  Co = null;
zt && "documentMode" in document && (Co = document.documentMode);
var uw = zt && "TextEvent" in window && !Co,
  ng = zt && (!Su || (Co && 8 < Co && 11 >= Co)),
  wf = " ",
  bf = !1;
function rg(e, t) {
  switch (e) {
    case "keyup":
      return cw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function og(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dr = !1;
function dw(e, t) {
  switch (e) {
    case "compositionend":
      return og(t);
    case "keypress":
      return t.which !== 32 ? null : ((bf = !0), wf);
    case "textInput":
      return (e = t.data), e === wf && bf ? null : e;
    default:
      return null;
  }
}
function fw(e, t) {
  if (dr) return e === "compositionend" || (!Su && rg(e, t)) ? ((e = tg()), (is = xu = ln = null), (dr = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ng && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var pw = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Sf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pw[e.type] : t === "textarea";
}
function ig(e, t, n, r) {
  Dm(r), (t = ks(t, "onChange")), 0 < t.length && ((n = new wu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Eo = null,
  Fo = null;
function hw(e) {
  gg(e, 0);
}
function da(e) {
  var t = hr(e);
  if (Rm(t)) return e;
}
function mw(e, t) {
  if (e === "change") return t;
}
var sg = !1;
if (zt) {
  var Ya;
  if (zt) {
    var Xa = "oninput" in document;
    if (!Xa) {
      var Cf = document.createElement("div");
      Cf.setAttribute("oninput", "return;"), (Xa = typeof Cf.oninput == "function");
    }
    Ya = Xa;
  } else Ya = !1;
  sg = Ya && (!document.documentMode || 9 < document.documentMode);
}
function Ef() {
  Eo && (Eo.detachEvent("onpropertychange", ag), (Fo = Eo = null));
}
function ag(e) {
  if (e.propertyName === "value" && da(Fo)) {
    var t = [];
    ig(t, Fo, e, hu(e)), Vm(hw, t);
  }
}
function gw(e, t, n) {
  e === "focusin" ? (Ef(), (Eo = t), (Fo = n), Eo.attachEvent("onpropertychange", ag)) : e === "focusout" && Ef();
}
function vw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return da(Fo);
}
function yw(e, t) {
  if (e === "click") return da(t);
}
function xw(e, t) {
  if (e === "input" || e === "change") return da(t);
}
function ww(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wt = typeof Object.is == "function" ? Object.is : ww;
function Vo(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!jl.call(t, o) || !wt(e[o], t[o])) return !1;
  }
  return !0;
}
function Pf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tf(e, t) {
  var n = Pf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pf(n);
  }
}
function lg(e, t) {
  return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function cg() {
  for (var e = window, t = ws(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ws(e.document);
  }
  return t;
}
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function bw(e) {
  var t = cg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && lg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Cu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)), !e.extend && i > r && ((o = r), (r = i), (i = o)), (o = Tf(n, i));
        var s = Tf(n, r);
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && ((t = t.createRange()), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Sw = zt && "documentMode" in document && 11 >= document.documentMode,
  fr = null,
  Jl = null,
  Po = null,
  ec = !1;
function kf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ec || fr == null || fr !== ws(r) || ((r = fr), "selectionStart" in r && Cu(r) ? (r = { start: r.selectionStart, end: r.selectionEnd }) : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })), (Po && Vo(Po, r)) || ((Po = r), (r = ks(Jl, "onSelect")), 0 < r.length && ((t = new wu("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = fr))));
}
function ji(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var pr = { animationend: ji("Animation", "AnimationEnd"), animationiteration: ji("Animation", "AnimationIteration"), animationstart: ji("Animation", "AnimationStart"), transitionend: ji("Transition", "TransitionEnd") },
  Qa = {},
  ug = {};
zt && ((ug = document.createElement("div").style), "AnimationEvent" in window || (delete pr.animationend.animation, delete pr.animationiteration.animation, delete pr.animationstart.animation), "TransitionEvent" in window || delete pr.transitionend.transition);
function fa(e) {
  if (Qa[e]) return Qa[e];
  if (!pr[e]) return e;
  var t = pr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ug) return (Qa[e] = t[n]);
  return e;
}
var dg = fa("animationend"),
  fg = fa("animationiteration"),
  pg = fa("animationstart"),
  hg = fa("transitionend"),
  mg = new Map(),
  $f = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $n(e, t) {
  mg.set(e, t), qn(t, [e]);
}
for (var qa = 0; qa < $f.length; qa++) {
  var Za = $f[qa],
    Cw = Za.toLowerCase(),
    Ew = Za[0].toUpperCase() + Za.slice(1);
  $n(Cw, "on" + Ew);
}
$n(dg, "onAnimationEnd");
$n(fg, "onAnimationIteration");
$n(pg, "onAnimationStart");
$n("dblclick", "onDoubleClick");
$n("focusin", "onFocus");
$n("focusout", "onBlur");
$n(hg, "onTransitionEnd");
jr("onMouseEnter", ["mouseout", "mouseover"]);
jr("onMouseLeave", ["mouseout", "mouseover"]);
jr("onPointerEnter", ["pointerout", "pointerover"]);
jr("onPointerLeave", ["pointerout", "pointerover"]);
qn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  Pw = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));
function Rf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Cx(r, t, void 0, e), (e.currentTarget = null);
}
function gg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Rf(o, a, c), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (((a = r[s]), (l = a.instance), (c = a.currentTarget), (a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Rf(o, a, c), (i = l);
        }
    }
  }
  if (Ss) throw ((e = Xl), (Ss = !1), (Xl = null), e);
}
function ee(e, t) {
  var n = t[ic];
  n === void 0 && (n = t[ic] = new Set());
  var r = e + "__bubble";
  n.has(r) || (vg(t, e, 2, !1), n.add(r));
}
function Ja(e, t, n) {
  var r = 0;
  t && (r |= 4), vg(n, e, r, t);
}
var Ii = "_reactListening" + Math.random().toString(36).slice(2);
function zo(e) {
  if (!e[Ii]) {
    (e[Ii] = !0),
      Em.forEach(function (n) {
        n !== "selectionchange" && (Pw.has(n) || Ja(n, !1, e), Ja(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ii] || ((t[Ii] = !0), Ja("selectionchange", !1, t));
  }
}
function vg(e, t, n, r) {
  switch (eg(t)) {
    case 1:
      var o = Fx;
      break;
    case 4:
      o = Vx;
      break;
    default:
      o = yu;
  }
  (n = o.bind(null, t, n, e)), (o = void 0), !Yl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0), r ? (o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0)) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function el(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if ((l === 3 || l === 4) && ((l = s.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o))) return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = On(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Vm(function () {
    var c = i,
      u = hu(n),
      d = [];
    e: {
      var p = mg.get(e);
      if (p !== void 0) {
        var v = wu,
          w = e;
        switch (e) {
          case "keypress":
            if (ss(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = tw;
            break;
          case "focusin":
            (w = "focus"), (v = Ga);
            break;
          case "focusout":
            (w = "blur"), (v = Ga);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ga;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = vf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ux;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ow;
            break;
          case dg:
          case fg:
          case pg:
            v = Hx;
            break;
          case hg:
            v = sw;
            break;
          case "scroll":
            v = zx;
            break;
          case "wheel":
            v = lw;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Yx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = xf;
        }
        var x = (t & 4) !== 0,
          b = !x && e === "scroll",
          h = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var m = c, y; m !== null; ) {
          y = m;
          var S = y.stateNode;
          if ((y.tag === 5 && S !== null && ((y = S), h !== null && ((S = Io(m, h)), S != null && x.push(Bo(m, S, y)))), b)) break;
          m = m.return;
        }
        0 < x.length && ((p = new v(p, w, null, n, u)), d.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (((p = e === "mouseover" || e === "pointerover"), (v = e === "mouseout" || e === "pointerout"), p && n !== Hl && (w = n.relatedTarget || n.fromElement) && (On(w) || w[Bt]))) break e;
        if ((v || p) && ((p = u.window === u ? u : (p = u.ownerDocument) ? p.defaultView || p.parentWindow : window), v ? ((w = n.relatedTarget || n.toElement), (v = c), (w = w ? On(w) : null), w !== null && ((b = Zn(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) && (w = null)) : ((v = null), (w = c)), v !== w)) {
          if (((x = vf), (S = "onMouseLeave"), (h = "onMouseEnter"), (m = "mouse"), (e === "pointerout" || e === "pointerover") && ((x = xf), (S = "onPointerLeave"), (h = "onPointerEnter"), (m = "pointer")), (b = v == null ? p : hr(v)), (y = w == null ? p : hr(w)), (p = new x(S, m + "leave", v, n, u)), (p.target = b), (p.relatedTarget = y), (S = null), On(u) === c && ((x = new x(h, m + "enter", w, n, u)), (x.target = y), (x.relatedTarget = b), (S = x)), (b = S), v && w))
            t: {
              for (x = v, h = w, m = 0, y = x; y; y = ir(y)) m++;
              for (y = 0, S = h; S; S = ir(S)) y++;
              for (; 0 < m - y; ) (x = ir(x)), m--;
              for (; 0 < y - m; ) (h = ir(h)), y--;
              for (; m--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = ir(x)), (h = ir(h));
              }
              x = null;
            }
          else x = null;
          v !== null && Nf(d, p, v, x, !1), w !== null && b !== null && Nf(d, b, w, x, !0);
        }
      }
      e: {
        if (((p = c ? hr(c) : window), (v = p.nodeName && p.nodeName.toLowerCase()), v === "select" || (v === "input" && p.type === "file"))) var C = mw;
        else if (Sf(p))
          if (sg) C = xw;
          else {
            C = vw;
            var E = gw;
          }
        else (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = yw);
        if (C && (C = C(e, c))) {
          ig(d, C, n, u);
          break e;
        }
        E && E(e, p, c), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && zl(p, "number", p.value);
      }
      switch (((E = c ? hr(c) : window), e)) {
        case "focusin":
          (Sf(E) || E.contentEditable === "true") && ((fr = E), (Jl = c), (Po = null));
          break;
        case "focusout":
          Po = Jl = fr = null;
          break;
        case "mousedown":
          ec = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ec = !1), kf(d, n, u);
          break;
        case "selectionchange":
          if (Sw) break;
        case "keydown":
        case "keyup":
          kf(d, n, u);
      }
      var T;
      if (Su)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else dr ? rg(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (ng && n.locale !== "ko" && (dr || P !== "onCompositionStart" ? P === "onCompositionEnd" && dr && (T = tg()) : ((ln = u), (xu = "value" in ln ? ln.value : ln.textContent), (dr = !0))), (E = ks(c, P)), 0 < E.length && ((P = new yf(P, e, null, n, u)), d.push({ event: P, listeners: E }), T ? (P.data = T) : ((T = og(n)), T !== null && (P.data = T)))), (T = uw ? dw(e, n) : fw(e, n)) && ((c = ks(c, "onBeforeInput")), 0 < c.length && ((u = new yf("onBeforeInput", "beforeinput", null, n, u)), d.push({ event: u, listeners: c }), (u.data = T)));
    }
    gg(d, t);
  });
}
function Bo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ks(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 && i !== null && ((o = i), (i = Io(e, n)), i != null && r.unshift(Bo(e, i, o)), (i = Io(e, t)), i != null && r.push(Bo(e, i, o))), (e = e.return);
  }
  return r;
}
function ir(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && c !== null && ((a = c), o ? ((l = Io(n, i)), l != null && s.unshift(Bo(n, l, a))) : o || ((l = Io(n, i)), l != null && s.push(Bo(n, l, a)))), (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Tw = /\r\n?/g,
  kw = /\u0000|\uFFFD/g;
function Mf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Tw,
      `
`
    )
    .replace(kw, "");
}
function Di(e, t, n) {
  if (((t = Mf(t)), Mf(e) !== t && n)) throw Error(N(425));
}
function $s() {}
var tc = null,
  nc = null;
function rc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null);
}
var oc = typeof setTimeout == "function" ? setTimeout : void 0,
  $w = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Af = typeof Promise == "function" ? Promise : void 0,
  Rw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Af < "u"
      ? function (e) {
          return Af.resolve(null).then(e).catch(Nw);
        }
      : oc;
function Nw(e) {
  setTimeout(function () {
    throw e;
  });
}
function tl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Lo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Lo(t);
}
function hn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _f(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yr = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + Yr,
  Uo = "__reactProps$" + Yr,
  Bt = "__reactContainer$" + Yr,
  ic = "__reactEvents$" + Yr,
  Mw = "__reactListeners$" + Yr,
  Aw = "__reactHandles$" + Yr;
function On(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bt] || n[Et])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = _f(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = _f(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function di(e) {
  return (e = e[Et] || e[Bt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function hr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function pa(e) {
  return e[Uo] || null;
}
var sc = [],
  mr = -1;
function Rn(e) {
  return { current: e };
}
function te(e) {
  0 > mr || ((e.current = sc[mr]), (sc[mr] = null), mr--);
}
function q(e, t) {
  mr++, (sc[mr] = e.current), (e.current = t);
}
var bn = {},
  Ae = Rn(bn),
  Ve = Rn(!1),
  Kn = bn;
function Ir(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
}
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function Rs() {
  te(Ve), te(Ae);
}
function jf(e, t, n) {
  if (Ae.current !== bn) throw Error(N(168));
  q(Ae, t), q(Ve, n);
}
function yg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, gx(e) || "Unknown", o));
  return se({}, n, r);
}
function Ns(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bn), (Kn = Ae.current), q(Ae, e), q(Ve, Ve.current), !0;
}
function If(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? ((e = yg(e, t, Kn)), (r.__reactInternalMemoizedMergedChildContext = e), te(Ve), te(Ae), q(Ae, e)) : te(Ve), q(Ve, n);
}
var _t = null,
  ha = !1,
  nl = !1;
function xg(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function _w(e) {
  (ha = !0), xg(e);
}
function Nn() {
  if (!nl && _t !== null) {
    nl = !0;
    var e = 0,
      t = X;
    try {
      var n = _t;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_t = null), (ha = !1);
    } catch (o) {
      throw (_t !== null && (_t = _t.slice(e + 1)), Wm(mu, Nn), o);
    } finally {
      (X = t), (nl = !1);
    }
  }
  return null;
}
var gr = [],
  vr = 0,
  Ms = null,
  As = 0,
  rt = [],
  ot = 0,
  Hn = null,
  jt = 1,
  It = "";
function _n(e, t) {
  (gr[vr++] = As), (gr[vr++] = Ms), (Ms = e), (As = t);
}
function wg(e, t, n) {
  (rt[ot++] = jt), (rt[ot++] = It), (rt[ot++] = Hn), (Hn = e);
  var r = jt;
  e = It;
  var o = 32 - vt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - vt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)), (r >>= s), (o -= s), (jt = (1 << (32 - vt(t) + o)) | (n << o) | r), (It = i + e);
  } else (jt = (1 << i) | (n << o) | r), (It = e);
}
function Eu(e) {
  e.return !== null && (_n(e, 1), wg(e, 1, 0));
}
function Pu(e) {
  for (; e === Ms; ) (Ms = gr[--vr]), (gr[vr] = null), (As = gr[--vr]), (gr[vr] = null);
  for (; e === Hn; ) (Hn = rt[--ot]), (rt[ot] = null), (It = rt[--ot]), (rt[ot] = null), (jt = rt[--ot]), (rt[ot] = null);
}
var Xe = null,
  Ye = null,
  ne = !1,
  gt = null;
function bg(e, t) {
  var n = it(5, null, null, 0);
  (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Df(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (Xe = e), (Ye = hn(t.firstChild)), !0) : !1;
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Xe = e), (Ye = null), !0) : !1;
    case 13:
      return (t = t.nodeType !== 8 ? null : t), t !== null ? ((n = Hn !== null ? { id: jt, overflow: It } : null), (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }), (n = it(18, null, null, 0)), (n.stateNode = t), (n.return = e), (e.child = n), (Xe = e), (Ye = null), !0) : !1;
    default:
      return !1;
  }
}
function ac(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lc(e) {
  if (ne) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Df(e, t)) {
        if (ac(e)) throw Error(N(418));
        t = hn(n.nextSibling);
        var r = Xe;
        t && Df(e, t) ? bg(r, n) : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (Xe = e));
      }
    } else {
      if (ac(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (Xe = e);
    }
  }
}
function Of(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Xe = e;
}
function Oi(e) {
  if (e !== Xe) return !1;
  if (!ne) return Of(e), (ne = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !rc(e.type, e.memoizedProps))), t && (t = Ye))) {
    if (ac(e)) throw (Sg(), Error(N(418)));
    for (; t; ) bg(e, t), (t = hn(t.nextSibling));
  }
  if ((Of(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = hn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? hn(e.stateNode.nextSibling) : null;
  return !0;
}
function Sg() {
  for (var e = Ye; e; ) e = hn(e.nextSibling);
}
function Dr() {
  (Ye = Xe = null), (ne = !1);
}
function Tu(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
var jw = Xt.ReactCurrentBatchConfig;
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var _s = Rn(null),
  js = null,
  yr = null,
  ku = null;
function $u() {
  ku = yr = js = null;
}
function Ru(e) {
  var t = _s.current;
  te(_s), (e._currentValue = t);
}
function cc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
    e = e.return;
  }
}
function Mr(e, t) {
  (js = e), (ku = yr = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function at(e) {
  var t = e._currentValue;
  if (ku !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yr === null)) {
      if (js === null) throw Error(N(308));
      (yr = e), (js.dependencies = { lanes: 0, firstContext: e });
    } else yr = yr.next = e;
  return t;
}
var Ln = null;
function Nu(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
function Cg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), Nu(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Ut(e, r);
}
function Ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var on = !1;
function Mu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Eg(e, t) {
  (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Ut(e, n);
  }
  return (o = r.interleaved), o === null ? ((t.next = t), Nu(r)) : ((t.next = o.next), (o.next = t)), (r.interleaved = t), Ut(e, n);
}
function as(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n);
  }
}
function Lf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Is(e, t, n, r) {
  var o = e.updateQueue;
  on = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (i = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null && ((u = u.updateQueue), (a = u.lastBaseUpdate), a !== s && (a === null ? (u.firstBaseUpdate = c) : (a.next = c), (u.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (u = c = l = null), (a = i);
    do {
      var p = a.lane,
        v = a.eventTime;
      if ((r & p) === p) {
        u !== null && (u = u.next = { eventTime: v, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var w = e,
            x = a;
          switch (((p = t), (v = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                d = w.call(v, d, p);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (((w = x.payload), (p = typeof w == "function" ? w.call(v, d, p) : w), p == null)) break e;
              d = se({}, d, p);
              break e;
            case 2:
              on = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (p = o.effects), p === null ? (o.effects = [a]) : p.push(a));
      } else (v = { eventTime: v, lane: p, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), u === null ? ((c = u = v), (l = d)) : (u = u.next = v), (s |= p);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (p = a), (a = p.next), (p.next = null), (o.lastBaseUpdate = p), (o.shared.pending = null);
      }
    } while (!0);
    if ((u === null && (l = d), (o.baseState = l), (o.firstBaseUpdate = c), (o.lastBaseUpdate = u), (t = o.shared.interleaved), t !== null)) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Yn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Ff(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function")) throw Error(N(191, o));
        o.call(r);
      }
    }
}
var Pg = new Cm.Component().refs;
function uc(e, t, n, r) {
  (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : se({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ma = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = vn(e),
      i = Ot(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = mn(e, i, o)), t !== null && (yt(t, e, o, r), as(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = vn(e),
      i = Ot(r, o);
    (i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = mn(e, i, o)), t !== null && (yt(t, e, o, r), as(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = vn(e),
      o = Ot(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = mn(e, o, r)), t !== null && (yt(t, e, r, n), as(t, e, r));
  },
};
function Vf(e, t, n, r, o, i, s) {
  return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Vo(n, r) || !Vo(o, i) : !0;
}
function Tg(e, t, n) {
  var r = !1,
    o = bn,
    i = t.contextType;
  return typeof i == "object" && i !== null ? (i = at(i)) : ((o = ze(t) ? Kn : Ae.current), (r = t.contextTypes), (i = (r = r != null) ? Ir(e, o) : bn)), (t = new t(n, i)), (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null), (t.updater = ma), (e.stateNode = t), (t._reactInternals = e), r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = i)), t;
}
function zf(e, t, n, r) {
  (e = t.state), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ma.enqueueReplaceState(t, t.state, null);
}
function dc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Pg), Mu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (o.context = at(i)) : ((i = ze(t) ? Kn : Ae.current), (o.context = Ir(e, i))), (o.state = e.memoizedState), (i = t.getDerivedStateFromProps), typeof i == "function" && (uc(e, t, i, n), (o.state = e.memoizedState)), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") || ((t = o.state), typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ma.enqueueReplaceState(o, o.state, null), Is(e, n, o, r), (o.state = e.memoizedState)), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ao(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === Pg && (a = o.refs = {}), s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Li(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function Bf(e) {
  var t = e._init;
  return t(e._payload);
}
function kg(e) {
  function t(h, m) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [m]), (h.flags |= 16)) : y.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; ) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function o(h, m) {
    return (h = yn(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, m, y) {
    return (h.index = y), e ? ((y = h.alternate), y !== null ? ((y = y.index), y < m ? ((h.flags |= 2), m) : y) : ((h.flags |= 2), m)) : ((h.flags |= 1048576), m);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, m, y, S) {
    return m === null || m.tag !== 6 ? ((m = cl(y, h.mode, S)), (m.return = h), m) : ((m = o(m, y)), (m.return = h), m);
  }
  function l(h, m, y, S) {
    var C = y.type;
    return C === ur ? u(h, m, y.props.children, S, y.key) : m !== null && (m.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === rn && Bf(C) === m.type)) ? ((S = o(m, y.props)), (S.ref = ao(h, m, y)), (S.return = h), S) : ((S = ps(y.type, y.key, y.props, null, h.mode, S)), (S.ref = ao(h, m, y)), (S.return = h), S);
  }
  function c(h, m, y, S) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? ((m = ul(y, h.mode, S)), (m.return = h), m) : ((m = o(m, y.children || [])), (m.return = h), m);
  }
  function u(h, m, y, S, C) {
    return m === null || m.tag !== 7 ? ((m = Un(y, h.mode, S, C)), (m.return = h), m) : ((m = o(m, y)), (m.return = h), m);
  }
  function d(h, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number") return (m = cl("" + m, h.mode, y)), (m.return = h), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ki:
          return (y = ps(m.type, m.key, m.props, null, h.mode, y)), (y.ref = ao(h, null, m)), (y.return = h), y;
        case cr:
          return (m = ul(m, h.mode, y)), (m.return = h), m;
        case rn:
          var S = m._init;
          return d(h, S(m._payload), y);
      }
      if (mo(m) || no(m)) return (m = Un(m, h.mode, y, null)), (m.return = h), m;
      Li(h, m);
    }
    return null;
  }
  function p(h, m, y, S) {
    var C = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number") return C !== null ? null : a(h, m, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ki:
          return y.key === C ? l(h, m, y, S) : null;
        case cr:
          return y.key === C ? c(h, m, y, S) : null;
        case rn:
          return (C = y._init), p(h, m, C(y._payload), S);
      }
      if (mo(y) || no(y)) return C !== null ? null : u(h, m, y, S, null);
      Li(h, y);
    }
    return null;
  }
  function v(h, m, y, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number") return (h = h.get(y) || null), a(m, h, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ki:
          return (h = h.get(S.key === null ? y : S.key) || null), l(m, h, S, C);
        case cr:
          return (h = h.get(S.key === null ? y : S.key) || null), c(m, h, S, C);
        case rn:
          var E = S._init;
          return v(h, m, y, E(S._payload), C);
      }
      if (mo(S) || no(S)) return (h = h.get(y) || null), u(m, h, S, C, null);
      Li(m, S);
    }
    return null;
  }
  function w(h, m, y, S) {
    for (var C = null, E = null, T = m, P = (m = 0), k = null; T !== null && P < y.length; P++) {
      T.index > P ? ((k = T), (T = null)) : (k = T.sibling);
      var M = p(h, T, y[P], S);
      if (M === null) {
        T === null && (T = k);
        break;
      }
      e && T && M.alternate === null && t(h, T), (m = i(M, m, P)), E === null ? (C = M) : (E.sibling = M), (E = M), (T = k);
    }
    if (P === y.length) return n(h, T), ne && _n(h, P), C;
    if (T === null) {
      for (; P < y.length; P++) (T = d(h, y[P], S)), T !== null && ((m = i(T, m, P)), E === null ? (C = T) : (E.sibling = T), (E = T));
      return ne && _n(h, P), C;
    }
    for (T = r(h, T); P < y.length; P++) (k = v(T, h, P, y[P], S)), k !== null && (e && k.alternate !== null && T.delete(k.key === null ? P : k.key), (m = i(k, m, P)), E === null ? (C = k) : (E.sibling = k), (E = k));
    return (
      e &&
        T.forEach(function (O) {
          return t(h, O);
        }),
      ne && _n(h, P),
      C
    );
  }
  function x(h, m, y, S) {
    var C = no(y);
    if (typeof C != "function") throw Error(N(150));
    if (((y = C.call(y)), y == null)) throw Error(N(151));
    for (var E = (C = null), T = m, P = (m = 0), k = null, M = y.next(); T !== null && !M.done; P++, M = y.next()) {
      T.index > P ? ((k = T), (T = null)) : (k = T.sibling);
      var O = p(h, T, M.value, S);
      if (O === null) {
        T === null && (T = k);
        break;
      }
      e && T && O.alternate === null && t(h, T), (m = i(O, m, P)), E === null ? (C = O) : (E.sibling = O), (E = O), (T = k);
    }
    if (M.done) return n(h, T), ne && _n(h, P), C;
    if (T === null) {
      for (; !M.done; P++, M = y.next()) (M = d(h, M.value, S)), M !== null && ((m = i(M, m, P)), E === null ? (C = M) : (E.sibling = M), (E = M));
      return ne && _n(h, P), C;
    }
    for (T = r(h, T); !M.done; P++, M = y.next()) (M = v(T, h, P, M.value, S)), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? P : M.key), (m = i(M, m, P)), E === null ? (C = M) : (E.sibling = M), (E = M));
    return (
      e &&
        T.forEach(function (j) {
          return t(h, j);
        }),
      ne && _n(h, P),
      C
    );
  }
  function b(h, m, y, S) {
    if ((typeof y == "object" && y !== null && y.type === ur && y.key === null && (y = y.props.children), typeof y == "object" && y !== null)) {
      switch (y.$$typeof) {
        case ki:
          e: {
            for (var C = y.key, E = m; E !== null; ) {
              if (E.key === C) {
                if (((C = y.type), C === ur)) {
                  if (E.tag === 7) {
                    n(h, E.sibling), (m = o(E, y.props.children)), (m.return = h), (h = m);
                    break e;
                  }
                } else if (E.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === rn && Bf(C) === E.type)) {
                  n(h, E.sibling), (m = o(E, y.props)), (m.ref = ao(h, E, y)), (m.return = h), (h = m);
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            y.type === ur ? ((m = Un(y.props.children, h.mode, S, y.key)), (m.return = h), (h = m)) : ((S = ps(y.type, y.key, y.props, null, h.mode, S)), (S.ref = ao(h, m, y)), (S.return = h), (h = S));
          }
          return s(h);
        case cr:
          e: {
            for (E = y.key; m !== null; ) {
              if (m.key === E)
                if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                  n(h, m.sibling), (m = o(m, y.children || [])), (m.return = h), (h = m);
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = ul(y, h.mode, S)), (m.return = h), (h = m);
          }
          return s(h);
        case rn:
          return (E = y._init), b(h, m, E(y._payload), S);
      }
      if (mo(y)) return w(h, m, y, S);
      if (no(y)) return x(h, m, y, S);
      Li(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number" ? ((y = "" + y), m !== null && m.tag === 6 ? (n(h, m.sibling), (m = o(m, y)), (m.return = h), (h = m)) : (n(h, m), (m = cl(y, h.mode, S)), (m.return = h), (h = m)), s(h)) : n(h, m);
  }
  return b;
}
var Or = kg(!0),
  $g = kg(!1),
  fi = {},
  kt = Rn(fi),
  Wo = Rn(fi),
  Ko = Rn(fi);
function Fn(e) {
  if (e === fi) throw Error(N(174));
  return e;
}
function Au(e, t) {
  switch ((q(Ko, t), q(Wo, e), q(kt, fi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ul(t, e));
  }
  te(kt), q(kt, t);
}
function Lr() {
  te(kt), te(Wo), te(Ko);
}
function Rg(e) {
  Fn(Ko.current);
  var t = Fn(kt.current),
    n = Ul(t, e.type);
  t !== n && (q(Wo, e), q(kt, n));
}
function _u(e) {
  Wo.current === e && (te(kt), te(Wo));
}
var re = Rn(0);
function Ds(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var rl = [];
function ju() {
  for (var e = 0; e < rl.length; e++) rl[e]._workInProgressVersionPrimary = null;
  rl.length = 0;
}
var ls = Xt.ReactCurrentDispatcher,
  ol = Xt.ReactCurrentBatchConfig,
  Gn = 0,
  ie = null,
  ge = null,
  ye = null,
  Os = !1,
  To = !1,
  Ho = 0,
  Iw = 0;
function ke() {
  throw Error(N(321));
}
function Iu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!wt(e[n], t[n])) return !1;
  return !0;
}
function Du(e, t, n, r, o, i) {
  if (((Gn = i), (ie = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (ls.current = e === null || e.memoizedState === null ? Fw : Vw), (e = n(r, o)), To)) {
    i = 0;
    do {
      if (((To = !1), (Ho = 0), 25 <= i)) throw Error(N(301));
      (i += 1), (ye = ge = null), (t.updateQueue = null), (ls.current = zw), (e = n(r, o));
    } while (To);
  }
  if (((ls.current = Ls), (t = ge !== null && ge.next !== null), (Gn = 0), (ye = ge = ie = null), (Os = !1), t)) throw Error(N(300));
  return e;
}
function Ou() {
  var e = Ho !== 0;
  return (Ho = 0), e;
}
function Ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ye === null ? (ie.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function lt() {
  if (ge === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = ye === null ? ie.memoizedState : ye.next;
  if (t !== null) (ye = t), (ge = e);
  else {
    if (e === null) throw Error(N(310));
    (ge = e), (e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }), ye === null ? (ie.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function Go(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function il(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ge,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = i;
    do {
      var u = c.lane;
      if ((Gn & u) === u) l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = { lane: u, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d), (ie.lanes |= u), (Yn |= u);
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? (s = r) : (l.next = a), wt(r, t.memoizedState) || (Fe = !0), (t.memoizedState = r), (t.baseState = s), (t.baseQueue = l), (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ie.lanes |= i), (Yn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function sl(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    wt(i, t.memoizedState) || (Fe = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ng() {}
function Mg(e, t) {
  var n = ie,
    r = lt(),
    o = t(),
    i = !wt(r.memoizedState, o);
  if ((i && ((r.memoizedState = o), (Fe = !0)), (r = r.queue), Lu(jg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || (ye !== null && ye.memoizedState.tag & 1))) {
    if (((n.flags |= 2048), Yo(9, _g.bind(null, n, r, o, t), void 0, null), xe === null)) throw Error(N(349));
    Gn & 30 || Ag(n, t, o);
  }
  return o;
}
function Ag(e, t, n) {
  (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = ie.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (ie.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _g(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ig(t) && Dg(e);
}
function jg(e, t, n) {
  return n(function () {
    Ig(t) && Dg(e);
  });
}
function Ig(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function Dg(e) {
  var t = Ut(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function Uf(e) {
  var t = Ct();
  return typeof e == "function" && (e = e()), (t.memoizedState = t.baseState = e), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Go, lastRenderedState: e }), (t.queue = e), (e = e.dispatch = Lw.bind(null, ie, e)), [t.memoizedState, e];
}
function Yo(e, t, n, r) {
  return (e = { tag: e, create: t, destroy: n, deps: r, next: null }), (t = ie.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (ie.updateQueue = t), (t.lastEffect = e.next = e)) : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))), e;
}
function Og() {
  return lt().memoizedState;
}
function cs(e, t, n, r) {
  var o = Ct();
  (ie.flags |= e), (o.memoizedState = Yo(1 | t, n, void 0, r === void 0 ? null : r));
}
function ga(e, t, n, r) {
  var o = lt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var s = ge.memoizedState;
    if (((i = s.destroy), r !== null && Iu(r, s.deps))) {
      o.memoizedState = Yo(t, n, i, r);
      return;
    }
  }
  (ie.flags |= e), (o.memoizedState = Yo(1 | t, n, i, r));
}
function Wf(e, t) {
  return cs(8390656, 8, e, t);
}
function Lu(e, t) {
  return ga(2048, 8, e, t);
}
function Lg(e, t) {
  return ga(4, 2, e, t);
}
function Fg(e, t) {
  return ga(4, 4, e, t);
}
function Vg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function zg(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ga(4, 4, Vg.bind(null, t, e), n);
}
function Fu() {}
function Bg(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Iu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ug(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Iu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wg(e, t, n) {
  return Gn & 21 ? (wt(n, t) || ((n = Gm()), (ie.lanes |= n), (Yn |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function Dw(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ol.transition;
  ol.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (ol.transition = r);
  }
}
function Kg() {
  return lt().memoizedState;
}
function Ow(e, t, n) {
  var r = vn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Hg(e))) Gg(t, n);
  else if (((n = Cg(e, t, n, r)), n !== null)) {
    var o = je();
    yt(n, e, r, o), Yg(n, t, r);
  }
}
function Lw(e, t, n) {
  var r = vn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hg(e)) Gg(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), wt(a, s))) {
          var l = t.interleaved;
          l === null ? ((o.next = o), Nu(t)) : ((o.next = l.next), (l.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Cg(e, t, o, r)), n !== null && ((o = je()), yt(n, e, r, o), Yg(n, t, r));
  }
}
function Hg(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function Gg(e, t) {
  To = Os = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Yg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n);
  }
}
var Ls = { readContext: at, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 },
  Fw = {
    readContext: at,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: at,
    useEffect: Wf,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), cs(4194308, 4, Vg.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return cs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return cs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Ct();
      return (t = n !== void 0 ? n(t) : t), (r.memoizedState = r.baseState = t), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }), (r.queue = e), (e = e.dispatch = Ow.bind(null, ie, e)), [r.memoizedState, e];
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Uf,
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = Uf(!1),
        t = e[0];
      return (e = Dw.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        o = Ct();
      if (ne) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(N(349));
        Gn & 30 || Ag(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (o.queue = i), Wf(jg.bind(null, r, i, e), [e]), (r.flags |= 2048), Yo(9, _g.bind(null, r, i, n, t), void 0, null), n;
    },
    useId: function () {
      var e = Ct(),
        t = xe.identifierPrefix;
      if (ne) {
        var n = It,
          r = jt;
        (n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = Ho++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
      } else (n = Iw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Vw = {
    readContext: at,
    useCallback: Bg,
    useContext: at,
    useEffect: Lu,
    useImperativeHandle: zg,
    useInsertionEffect: Lg,
    useLayoutEffect: Fg,
    useMemo: Ug,
    useReducer: il,
    useRef: Og,
    useState: function () {
      return il(Go);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = lt();
      return Wg(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = il(Go)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ng,
    useSyncExternalStore: Mg,
    useId: Kg,
    unstable_isNewReconciler: !1,
  },
  zw = {
    readContext: at,
    useCallback: Bg,
    useContext: at,
    useEffect: Lu,
    useImperativeHandle: zg,
    useInsertionEffect: Lg,
    useLayoutEffect: Fg,
    useMemo: Ug,
    useReducer: sl,
    useRef: Og,
    useState: function () {
      return sl(Go);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = lt();
      return ge === null ? (t.memoizedState = e) : Wg(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = sl(Go)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ng,
    useSyncExternalStore: Mg,
    useId: Kg,
    unstable_isNewReconciler: !1,
  };
function Fr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += mx(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Bw = typeof WeakMap == "function" ? WeakMap : Map;
function Xg(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vs || ((Vs = !0), (Sc = r)), fc(e, t);
    }),
    n
  );
}
function Qg(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        fc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        fc(e, t), typeof r != "function" && (gn === null ? (gn = new Set([this])) : gn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
      }),
    n
  );
}
function Kf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Bw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = n2.bind(null, e, t, n)), t.then(e, e));
}
function Hf(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gf(e, t, n, r, o) {
  return e.mode & 1 ? ((e.flags |= 65536), (e.lanes = o), e) : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Ot(-1, 1)), (t.tag = 2), mn(n, t, 1))), (n.lanes |= 1)), e);
}
var Uw = Xt.ReactCurrentOwner,
  Fe = !1;
function _e(e, t, n, r) {
  t.child = e === null ? $g(t, null, n, r) : Or(t, e.child, n, r);
}
function Yf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Mr(t, o), (r = Du(e, t, n, r, i, o)), (n = Ou()), e !== null && !Fe ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Wt(e, t, o)) : (ne && n && Eu(t), (t.flags |= 1), _e(e, t, r, o), t.child);
}
function Xf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Gu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? ((t.tag = 15), (t.type = i), qg(e, t, i, r, o)) : ((e = ps(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Vo), n(s, r) && e.ref === t.ref)) return Wt(e, t, o);
  }
  return (t.flags |= 1), (e = yn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function qg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Vo(i, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), Wt(e, t, o);
  }
  return pc(e, t, n, r, o);
}
function Zg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), q(wr, He), (He |= n);
    else {
      if (!(n & 1073741824)) return (e = i !== null ? i.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), q(wr, He), (He |= e), null;
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = i !== null ? i.baseLanes : n), q(wr, He), (He |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), q(wr, He), (He |= r);
  return _e(e, t, o, n), t.child;
}
function Jg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function pc(e, t, n, r, o) {
  var i = ze(n) ? Kn : Ae.current;
  return (i = Ir(t, i)), Mr(t, o), (n = Du(e, t, n, r, i, o)), (r = Ou()), e !== null && !Fe ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Wt(e, t, o)) : (ne && r && Eu(t), (t.flags |= 1), _e(e, t, n, o), t.child);
}
function Qf(e, t, n, r, o) {
  if (ze(n)) {
    var i = !0;
    Ns(t);
  } else i = !1;
  if ((Mr(t, o), t.stateNode === null)) us(e, t), Tg(t, n, r), dc(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null ? (c = at(c)) : ((c = ze(n) ? Kn : Ae.current), (c = Ir(t, c)));
    var u = n.getDerivedStateFromProps,
      d = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") || ((a !== r || l !== c) && zf(t, s, r, c)), (on = !1);
    var p = t.memoizedState;
    (s.state = p), Is(t, r, s, o), (l = t.memoizedState), a !== r || p !== l || Ve.current || on ? (typeof u == "function" && (uc(t, n, u, r), (l = t.memoizedState)), (a = on || Vf(t, n, a, r, p, l, c)) ? (d || (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = l)), (s.props = r), (s.state = l), (s.context = c), (r = a)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode), Eg(e, t), (a = t.memoizedProps), (c = t.type === t.elementType ? a : ht(t.type, a)), (s.props = c), (d = t.pendingProps), (p = s.context), (l = n.contextType), typeof l == "object" && l !== null ? (l = at(l)) : ((l = ze(n) ? Kn : Ae.current), (l = Ir(t, l)));
    var v = n.getDerivedStateFromProps;
    (u = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") || ((a !== d || p !== l) && zf(t, s, r, l)), (on = !1), (p = t.memoizedState), (s.state = p), Is(t, r, s, o);
    var w = t.memoizedState;
    a !== d || p !== w || Ve.current || on ? (typeof v == "function" && (uc(t, n, v, r), (w = t.memoizedState)), (c = on || Vf(t, n, c, r, p, w, l) || !1) ? (u || (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024), (t.memoizedProps = r), (t.memoizedState = w)), (s.props = r), (s.state = w), (s.context = l), (r = c)) : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024), (r = !1));
  }
  return hc(e, t, n, r, i, o);
}
function hc(e, t, n, r, o, i) {
  Jg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && If(t, n, !1), Wt(e, t, i);
  (r = t.stateNode), (Uw.current = t);
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (t.flags |= 1), e !== null && s ? ((t.child = Or(t, e.child, null, i)), (t.child = Or(t, null, a, i))) : _e(e, t, a, i), (t.memoizedState = r.state), o && If(t, n, !0), t.child;
}
function ev(e) {
  var t = e.stateNode;
  t.pendingContext ? jf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && jf(e, t.context, !1), Au(e, t.containerInfo);
}
function qf(e, t, n, r, o) {
  return Dr(), Tu(o), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var mc = { dehydrated: null, treeContext: null, retryLane: 0 };
function gc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tv(e, t, n) {
  var r = t.pendingProps,
    o = re.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1), q(re, o & 1), e === null)) return lc(t), (e = t.memoizedState), e !== null && ((e = e.dehydrated), e !== null) ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null) : ((s = r.children), (e = r.fallback), i ? ((r = t.mode), (i = t.child), (s = { mode: "hidden", children: s }), !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = xa(s, r, 0, null)), (e = Un(e, r, n, null)), (i.return = t), (e.return = t), (i.sibling = e), (t.child = i), (t.child.memoizedState = gc(n)), (t.memoizedState = mc), e) : Vu(t, s));
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return Ww(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null)) : ((r = yn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)), a !== null ? (i = yn(a, i)) : ((i = Un(i, s, n, null)), (i.flags |= 2)), (i.return = t), (r.return = t), (r.sibling = i), (t.child = r), (r = i), (i = t.child), (s = e.child.memoizedState), (s = s === null ? gc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }), (i.memoizedState = s), (i.childLanes = e.childLanes & ~n), (t.memoizedState = mc), r;
  }
  return (i = e.child), (e = i.sibling), (r = yn(i, { mode: "visible", children: r.children })), !(t.mode & 1) && (r.lanes = n), (r.return = t), (r.sibling = null), e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)), (t.child = r), (t.memoizedState = null), r;
}
function Vu(e, t) {
  return (t = xa({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Fi(e, t, n, r) {
  return r !== null && Tu(r), Or(t, e.child, null, n), (e = Vu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function Ww(e, t, n, r, o, i, s) {
  if (n) return t.flags & 256 ? ((t.flags &= -257), (r = al(Error(N(422)))), Fi(e, t, s, r)) : t.memoizedState !== null ? ((t.child = e.child), (t.flags |= 128), null) : ((i = r.fallback), (o = t.mode), (r = xa({ mode: "visible", children: r.children }, o, 0, null)), (i = Un(i, o, s, null)), (i.flags |= 2), (r.return = t), (i.return = t), (r.sibling = i), (t.child = r), t.mode & 1 && Or(t, e.child, null, s), (t.child.memoizedState = gc(s)), (t.memoizedState = mc), i);
  if (!(t.mode & 1)) return Fi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(N(419))), (r = al(i, r, void 0)), Fi(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Fe || a)) {
    if (((r = xe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o), o !== 0 && o !== i.retryLane && ((i.retryLane = o), Ut(e, o), yt(r, e, o, -1));
    }
    return Hu(), (r = al(Error(N(421)))), Fi(e, t, s, r);
  }
  return o.data === "$?" ? ((t.flags |= 128), (t.child = e.child), (t = r2.bind(null, e)), (o._reactRetry = t), null) : ((e = i.treeContext), (Ye = hn(o.nextSibling)), (Xe = t), (ne = !0), (gt = null), e !== null && ((rt[ot++] = jt), (rt[ot++] = It), (rt[ot++] = Hn), (jt = e.id), (It = e.overflow), (Hn = t)), (t = Vu(t, r.children)), (t.flags |= 4096), t);
}
function Zf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cc(e.return, t, n);
}
function ll(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o }) : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = n), (i.tailMode = o));
}
function nv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((_e(e, t, r.children, n), (r = re.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zf(e, n, t);
        else if (e.tag === 19) Zf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(re, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) (e = n.alternate), e !== null && Ds(e) === null && (o = n), (n = n.sibling);
        (n = o), n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), ll(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ds(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ll(t, !0, n, null, i);
        break;
      case "together":
        ll(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function us(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Wt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Yn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = yn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = yn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Kw(e, t, n) {
  switch (t.tag) {
    case 3:
      ev(t), Dr();
      break;
    case 5:
      Rg(t);
      break;
    case 1:
      ze(t.type) && Ns(t);
      break;
    case 4:
      Au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      q(_s, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null)) return r.dehydrated !== null ? (q(re, re.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? tv(e, t, n) : (q(re, re.current & 1), (e = Wt(e, t, n)), e !== null ? e.sibling : null);
      q(re, re.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nv(e, t, n);
        t.flags |= 128;
      }
      if (((o = t.memoizedState), o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), q(re, re.current), r)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zg(e, t, n);
  }
  return Wt(e, t, n);
}
var rv, vc, ov, iv;
rv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
vc = function () {};
ov = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fn(kt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Fl(e, o)), (r = Fl(e, r)), (i = []);
        break;
      case "select":
        (o = se({}, o, { value: void 0 })), (r = se({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (o = Bl(e, o)), (r = Bl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $s);
    }
    Wl(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (_o.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (((a = o != null ? o[c] : void 0), r.hasOwnProperty(c) && l !== a && (l != null || a != null)))
        if (c === "style")
          if (a) {
            for (s in a) !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(c, n)), (n = l);
        else c === "dangerouslySetInnerHTML" ? ((l = l ? l.__html : void 0), (a = a ? a.__html : void 0), l != null && a !== l && (i = i || []).push(c, l)) : c === "children" ? (typeof l != "string" && typeof l != "number") || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (_o.hasOwnProperty(c) ? (l != null && c === "onScroll" && ee("scroll", e), i || a === l || (i = [])) : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
iv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lo(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t) for (var o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags & 14680064), (r |= o.flags & 14680064), (o.return = e), (o = o.sibling);
  else for (o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Hw(e, t, n) {
  var r = t.pendingProps;
  switch ((Pu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null;
    case 1:
      return ze(t.type) && Rs(), $e(t), null;
    case 3:
      return (r = t.stateNode), Lr(), te(Ve), te(Ae), ju(), r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (e === null || e.child === null) && (Oi(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), gt !== null && (Pc(gt), (gt = null)))), vc(e, t), $e(t), null;
    case 5:
      _u(t);
      var o = Fn(Ko.current);
      if (((n = t.type), e !== null && t.stateNode != null)) ov(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return $e(t), null;
        }
        if (((e = Fn(kt.current)), Oi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Et] = t), (r[Uo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < vo.length; o++) ee(vo[o], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              af(r, i), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), ee("invalid", r);
              break;
            case "textarea":
              cf(r, i), ee("invalid", r);
          }
          Wl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? (typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Di(r.textContent, a, e), (o = ["children", a])) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Di(r.textContent, a, e), (o = ["children", "" + a]))) : _o.hasOwnProperty(s) && a != null && s === "onScroll" && ee("scroll", r);
            }
          switch (n) {
            case "input":
              $i(r), lf(r, i, !0);
              break;
            case "textarea":
              $i(r), uf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $s);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument), e === "http://www.w3.org/1999/xhtml" && (e = Am(n)), e === "http://www.w3.org/1999/xhtml" ? (n === "script" ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild))) : typeof r.is == "string" ? (e = s.createElement(n, { is: r.is })) : ((e = s.createElement(n)), n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))) : (e = s.createElementNS(e, n)), (e[Et] = t), (e[Uo] = r), rv(e, t, !1, !1), (t.stateNode = e);
          e: {
            switch (((s = Kl(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < vo.length; o++) ee(vo[o], e);
                o = r;
                break;
              case "source":
                ee("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (o = r);
                break;
              case "details":
                ee("toggle", e), (o = r);
                break;
              case "input":
                af(e, r), (o = Fl(e, r)), ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = se({}, r, { value: void 0 })), ee("invalid", e);
                break;
              case "textarea":
                cf(e, r), (o = Bl(e, r)), ee("invalid", e);
                break;
              default:
                o = r;
            }
            Wl(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? Im(e, l) : i === "dangerouslySetInnerHTML" ? ((l = l ? l.__html : void 0), l != null && _m(e, l)) : i === "children" ? (typeof l == "string" ? (n !== "textarea" || l !== "") && jo(e, l) : typeof l == "number" && jo(e, "" + l)) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (_o.hasOwnProperty(i) ? l != null && i === "onScroll" && ee("scroll", e) : l != null && uu(e, i, l, s));
              }
            switch (n) {
              case "input":
                $i(e), lf(e, r, !1);
                break;
              case "textarea":
                $i(e), uf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple), (i = r.value), i != null ? kr(e, !!r.multiple, i, !1) : r.defaultValue != null && kr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = $s);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) iv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Fn(Ko.current)), Fn(kt.current), Oi(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[Et] = t), (i = r.nodeValue !== n) && ((e = Xe), e !== null)))
            switch (e.tag) {
              case 3:
                Di(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Di(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Et] = t), (t.stateNode = r);
      }
      return $e(t), null;
    case 13:
      if ((te(re), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (ne && Ye !== null && t.mode & 1 && !(t.flags & 128)) Sg(), Dr(), (t.flags |= 98560), (i = !1);
        else if (((i = Oi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(N(317));
            i[Et] = t;
          } else Dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $e(t), (i = !1);
        } else gt !== null && (Pc(gt), (gt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? ((t.lanes = n), t) : ((r = r !== null), r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || re.current & 1 ? ve === 0 && (ve = 3) : Hu())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return Lr(), vc(e, t), e === null && zo(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return Ru(t.type._context), $e(t), null;
    case 17:
      return ze(t.type) && Rs(), $e(t), null;
    case 19:
      if ((te(re), (i = t.memoizedState), i === null)) return $e(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) lo(i, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ds(e)), s !== null)) {
                for (t.flags |= 128, lo(i, !1), r = s.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) (i = n), (e = r), (i.flags &= 14680066), (s = i.alternate), s === null ? ((i.childLanes = 0), (i.lanes = e), (i.child = null), (i.subtreeFlags = 0), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null), (i.stateNode = null)) : ((i.childLanes = s.childLanes), (i.lanes = s.lanes), (i.child = s.child), (i.subtreeFlags = 0), (i.deletions = null), (i.memoizedProps = s.memoizedProps), (i.memoizedState = s.memoizedState), (i.updateQueue = s.updateQueue), (i.type = s.type), (e = s.dependencies), (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })), (n = n.sibling);
                return q(re, (re.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && de() > Vr && ((t.flags |= 128), (r = !0), lo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ds(s)), e !== null)) {
            if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), lo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ne)) return $e(t), null;
          } else 2 * de() - i.renderingStartTime > Vr && n !== 1073741824 && ((t.flags |= 128), (r = !0), lo(i, !1), (t.lanes = 4194304));
        i.isBackwards ? ((s.sibling = t.child), (t.child = s)) : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
      }
      return i.tail !== null ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = de()), (t.sibling = null), (n = re.current), q(re, r ? (n & 1) | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return Ku(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Gw(e, t) {
  switch ((Pu(t), t.tag)) {
    case 1:
      return ze(t.type) && Rs(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return Lr(), te(Ve), te(Ae), ju(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return _u(t), null;
    case 13:
      if ((te(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Dr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return te(re), null;
    case 4:
      return Lr(), null;
    case 10:
      return Ru(t.type._context), null;
    case 22:
    case 23:
      return Ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vi = !1,
  Ne = !1,
  Yw = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function xr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function yc(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Jf = !1;
function Xw(e, t) {
  if (((tc = Ps), (e = cg()), Cu(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (var v; d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o), d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (v = d.firstChild) !== null; ) (p = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if ((p === n && ++c === o && (a = s), p === i && ++u === r && (l = s), (v = d.nextSibling) !== null)) break;
              (d = p), (p = d.parentNode);
            }
            d = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nc = { focusedElem: e, selectionRange: n }, Ps = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    b = w.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ht(t.type, x), b);
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1 ? (y.textContent = "") : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          le(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = Jf), (Jf = !1), w;
}
function ko(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && yc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function va(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function sv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), sv(t)), (e.child = null), (e.deletions = null), (e.sibling = null), e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Et], delete t[Uo], delete t[ic], delete t[Mw], delete t[Aw])), (e.stateNode = null), (e.return = null), (e.dependencies = null), (e.memoizedProps = null), (e.memoizedState = null), (e.pendingProps = null), (e.stateNode = null), (e.updateQueue = null);
}
function av(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ep(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || av(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? (n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t)) : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = $s));
  else if (r !== 4 && ((e = e.child), e !== null)) for (wc(e, t, n), e = e.sibling; e !== null; ) wc(e, t, n), (e = e.sibling);
}
function bc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (bc(e, t, n), e = e.sibling; e !== null; ) bc(e, t, n), (e = e.sibling);
}
var be = null,
  mt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) lv(e, t, n), (n = n.sibling);
}
function lv(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == "function")
    try {
      Tt.onCommitFiberUnmount(ca, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || xr(n, t);
    case 6:
      var r = be,
        o = mt;
      (be = null), Zt(e, t, n), (be = r), (mt = o), be !== null && (mt ? ((e = be), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : be.removeChild(n.stateNode));
      break;
    case 18:
      be !== null && (mt ? ((e = be), (n = n.stateNode), e.nodeType === 8 ? tl(e.parentNode, n) : e.nodeType === 1 && tl(e, n), Lo(e)) : tl(be, n.stateNode));
      break;
    case 4:
      (r = be), (o = mt), (be = n.stateNode.containerInfo), (mt = !0), Zt(e, t, n), (be = r), (mt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ne && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag), s !== void 0 && (i & 2 || i & 4) && yc(n, t, s), (o = o.next);
        } while (o !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (!Ne && (xr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          le(n, t, a);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Ne = (r = Ne) || n.memoizedState !== null), Zt(e, t, n), (Ne = r)) : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function tp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Yw()),
      t.forEach(function (r) {
        var o = o2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (be = a.stateNode), (mt = !1);
              break e;
            case 3:
              (be = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (be = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (be === null) throw Error(N(160));
        lv(i, s, o), (be = null), (mt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (c) {
        le(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) cv(t, e), (t = t.sibling);
}
function cv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), St(e), r & 4)) {
        try {
          ko(3, e, e.return), va(3, e);
        } catch (x) {
          le(e, e.return, x);
        }
        try {
          ko(5, e, e.return);
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 1:
      ft(t, e), St(e), r & 512 && n !== null && xr(n, n.return);
      break;
    case 5:
      if ((ft(t, e), St(e), r & 512 && n !== null && xr(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          jo(o, "");
        } catch (x) {
          le(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Nm(o, i), Kl(a, s);
            var c = Kl(a, i);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                d = l[s + 1];
              u === "style" ? Im(o, d) : u === "dangerouslySetInnerHTML" ? _m(o, d) : u === "children" ? jo(o, d) : uu(o, u, d, c);
            }
            switch (a) {
              case "input":
                Vl(o, i);
                break;
              case "textarea":
                Mm(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null ? kr(o, !!i.multiple, v, !1) : p !== !!i.multiple && (i.defaultValue != null ? kr(o, !!i.multiple, i.defaultValue, !0) : kr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Uo] = i;
          } catch (x) {
            le(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((ft(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 3:
      if ((ft(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Lo(t.containerInfo);
        } catch (x) {
          le(e, e.return, x);
        }
      break;
    case 4:
      ft(t, e), St(e);
      break;
    case 13:
      ft(t, e), St(e), (o = e.child), o.flags & 8192 && ((i = o.memoizedState !== null), (o.stateNode.isHidden = i), !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Uu = de())), r & 4 && tp(e);
      break;
    case 22:
      if (((u = n !== null && n.memoizedState !== null), e.mode & 1 ? ((Ne = (c = Ne) || u), ft(t, e), (Ne = c)) : ft(t, e), St(e), r & 8192)) {
        if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !u && e.mode & 1))
          for (_ = e, u = e.child; u !== null; ) {
            for (d = _ = u; _ !== null; ) {
              switch (((p = _), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ko(4, p, p.return);
                  break;
                case 1:
                  xr(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r), (w.props = t.memoizedProps), (w.state = t.memoizedState), w.componentWillUnmount();
                    } catch (x) {
                      le(r, n, x);
                    }
                  }
                  break;
                case 5:
                  xr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    rp(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (_ = v)) : rp(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (o = d.stateNode), c ? ((i = o.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none")) : ((a = d.stateNode), (l = d.memoizedProps.style), (s = l != null && l.hasOwnProperty("display") ? l.display : null), (a.style.display = jm("display", s)));
              } catch (x) {
                le(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (x) {
                le(e, e.return, x);
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), St(e), r & 4 && tp(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (av(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (jo(o, ""), (r.flags &= -33));
          var i = ep(e);
          bc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ep(e);
          wc(e, a, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      le(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qw(e, t, n) {
  (_ = e), uv(e);
}
function uv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Vi;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Ne;
        a = Vi;
        var c = Ne;
        if (((Vi = s), (Ne = l) && !c)) for (_ = o; _ !== null; ) (s = _), (l = s.child), s.tag === 22 && s.memoizedState !== null ? op(o) : l !== null ? ((l.return = s), (_ = l)) : op(o);
        for (; i !== null; ) (_ = i), uv(i), (i = i.sibling);
        (_ = o), (Vi = a), (Ne = c);
      }
      np(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (_ = i)) : np(e);
  }
}
function np(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ne || va(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Ff(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ff(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && Lo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Ne || (t.flags & 512 && xc(t));
      } catch (p) {
        le(t, t.return, p);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function rp(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function op(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            va(4, t);
          } catch (l) {
            le(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              le(t, o, l);
            }
          }
          var i = t.return;
          try {
            xc(t);
          } catch (l) {
            le(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            xc(t);
          } catch (l) {
            le(t, s, l);
          }
      }
    } catch (l) {
      le(t, t.return, l);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (_ = a);
      break;
    }
    _ = t.return;
  }
}
var qw = Math.ceil,
  Fs = Xt.ReactCurrentDispatcher,
  zu = Xt.ReactCurrentOwner,
  st = Xt.ReactCurrentBatchConfig,
  H = 0,
  xe = null,
  pe = null,
  Ee = 0,
  He = 0,
  wr = Rn(0),
  ve = 0,
  Xo = null,
  Yn = 0,
  ya = 0,
  Bu = 0,
  $o = null,
  Le = null,
  Uu = 0,
  Vr = 1 / 0,
  At = null,
  Vs = !1,
  Sc = null,
  gn = null,
  zi = !1,
  cn = null,
  zs = 0,
  Ro = 0,
  Cc = null,
  ds = -1,
  fs = 0;
function je() {
  return H & 6 ? de() : ds !== -1 ? ds : (ds = de());
}
function vn(e) {
  return e.mode & 1 ? (H & 2 && Ee !== 0 ? Ee & -Ee : jw.transition !== null ? (fs === 0 && (fs = Gm()), fs) : ((e = X), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : eg(e.type))), e)) : 1;
}
function yt(e, t, n, r) {
  if (50 < Ro) throw ((Ro = 0), (Cc = null), Error(N(185)));
  ci(e, n, r), (!(H & 2) || e !== xe) && (e === xe && (!(H & 2) && (ya |= n), ve === 4 && an(e, Ee)), Be(e, r), n === 1 && H === 0 && !(t.mode & 1) && ((Vr = de() + 500), ha && Nn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  jx(e, t);
  var r = Es(e, e === xe ? Ee : 0);
  if (r === 0) n !== null && pf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pf(n), t === 1))
      e.tag === 0 ? _w(ip.bind(null, e)) : xg(ip.bind(null, e)),
        Rw(function () {
          !(H & 6) && Nn();
        }),
        (n = null);
    else {
      switch (Ym(r)) {
        case 1:
          n = mu;
          break;
        case 4:
          n = Km;
          break;
        case 16:
          n = Cs;
          break;
        case 536870912:
          n = Hm;
          break;
        default:
          n = Cs;
      }
      n = yv(n, dv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function dv(e, t) {
  if (((ds = -1), (fs = 0), H & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Ar() && e.callbackNode !== n) return null;
  var r = Es(e, e === xe ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bs(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var i = pv();
    (xe !== e || Ee !== t) && ((At = null), (Vr = de() + 500), Bn(e, t));
    do
      try {
        e2();
        break;
      } catch (a) {
        fv(e, a);
      }
    while (!0);
    $u(), (Fs.current = i), (H = o), pe !== null ? (t = 0) : ((xe = null), (Ee = 0), (t = ve));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Ql(e)), o !== 0 && ((r = o), (t = Ec(e, o)))), t === 1)) throw ((n = Xo), Bn(e, 0), an(e, r), Be(e, de()), n);
    if (t === 6) an(e, r);
    else {
      if (((o = e.current.alternate), !(r & 30) && !Zw(o) && ((t = Bs(e, r)), t === 2 && ((i = Ql(e)), i !== 0 && ((r = i), (t = Ec(e, i)))), t === 1))) throw ((n = Xo), Bn(e, 0), an(e, r), Be(e, de()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          jn(e, Le, At);
          break;
        case 3:
          if ((an(e, r), (r & 130023424) === r && ((t = Uu + 500 - de()), 10 < t))) {
            if (Es(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = oc(jn.bind(null, e, Le, At), t);
            break;
          }
          jn(e, Le, At);
          break;
        case 4:
          if ((an(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - vt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (((r = o), (r = de() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qw(r / 1960)) - r), 10 < r)) {
            e.timeoutHandle = oc(jn.bind(null, e, Le, At), r);
            break;
          }
          jn(e, Le, At);
          break;
        case 5:
          jn(e, Le, At);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Be(e, de()), e.callbackNode === n ? dv.bind(null, e) : null;
}
function Ec(e, t) {
  var n = $o;
  return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), (e = Bs(e, t)), e !== 2 && ((t = Le), (Le = n), t !== null && Pc(t)), e;
}
function Pc(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function Zw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!wt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function an(e, t) {
  for (t &= ~Bu, t &= ~ya, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ip(e) {
  if (H & 6) throw Error(N(327));
  Ar();
  var t = Es(e, 0);
  if (!(t & 1)) return Be(e, de()), null;
  var n = Bs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ql(e);
    r !== 0 && ((t = r), (n = Ec(e, r)));
  }
  if (n === 1) throw ((n = Xo), Bn(e, 0), an(e, t), Be(e, de()), n);
  if (n === 6) throw Error(N(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), jn(e, Le, At), Be(e, de()), null;
}
function Wu(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Vr = de() + 500), ha && Nn());
  }
}
function Xn(e) {
  cn !== null && cn.tag === 0 && !(H & 6) && Ar();
  var t = H;
  H |= 1;
  var n = st.transition,
    r = X;
  try {
    if (((st.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (st.transition = n), (H = t), !(H & 6) && Nn();
  }
}
function Ku() {
  (He = wr.current), te(wr);
}
function Bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $w(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((Pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Rs();
          break;
        case 3:
          Lr(), te(Ve), te(Ae), ju();
          break;
        case 5:
          _u(r);
          break;
        case 4:
          Lr();
          break;
        case 13:
          te(re);
          break;
        case 19:
          te(re);
          break;
        case 10:
          Ru(r.type._context);
          break;
        case 22:
        case 23:
          Ku();
      }
      n = n.return;
    }
  if (((xe = e), (pe = e = yn(e.current, null)), (Ee = He = t), (ve = 0), (Xo = null), (Bu = ya = Yn = 0), (Le = $o = null), Ln !== null)) {
    for (t = 0; t < Ln.length; t++)
      if (((n = Ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Ln = null;
  }
  return e;
}
function fv(e, t) {
  do {
    var n = pe;
    try {
      if (($u(), (ls.current = Ls), Os)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Os = !1;
      }
      if (((Gn = 0), (ye = ge = ie = null), (To = !1), (Ho = 0), (zu.current = null), n === null || n.return === null)) {
        (ve = 1), (Xo = t), (pe = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (((t = Ee), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = u.alternate;
            p ? ((u.updateQueue = p.updateQueue), (u.memoizedState = p.memoizedState), (u.lanes = p.lanes)) : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var v = Hf(s);
          if (v !== null) {
            (v.flags &= -257), Gf(v, s, a, i, t), v.mode & 1 && Kf(i, c, t), (t = v), (l = c);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Kf(i, c, t), Hu();
              break e;
            }
            l = Error(N(426));
          }
        } else if (ne && a.mode & 1) {
          var b = Hf(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), Gf(b, s, a, i, t), Tu(Fr(l, a));
            break e;
          }
        }
        (i = l = Fr(l, a)), ve !== 4 && (ve = 2), $o === null ? ($o = [i]) : $o.push(i), (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Xg(i, l, t);
              Lf(i, h);
              break e;
            case 1:
              a = l;
              var m = i.type,
                y = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || (y !== null && typeof y.componentDidCatch == "function" && (gn === null || !gn.has(y))))) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Qg(i, a, t);
                Lf(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      mv(n);
    } catch (C) {
      (t = C), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pv() {
  var e = Fs.current;
  return (Fs.current = Ls), e === null ? Ls : e;
}
function Hu() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4), xe === null || (!(Yn & 268435455) && !(ya & 268435455)) || an(xe, Ee);
}
function Bs(e, t) {
  var n = H;
  H |= 2;
  var r = pv();
  (xe !== e || Ee !== t) && ((At = null), Bn(e, t));
  do
    try {
      Jw();
      break;
    } catch (o) {
      fv(e, o);
    }
  while (!0);
  if (($u(), (H = n), (Fs.current = r), pe !== null)) throw Error(N(261));
  return (xe = null), (Ee = 0), ve;
}
function Jw() {
  for (; pe !== null; ) hv(pe);
}
function e2() {
  for (; pe !== null && !Px(); ) hv(pe);
}
function hv(e) {
  var t = vv(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps), t === null ? mv(e) : (pe = t), (zu.current = null);
}
function mv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gw(n, t)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (pe = null);
        return;
      }
    } else if (((n = Hw(n, t, He)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function jn(e, t, n) {
  var r = X,
    o = st.transition;
  try {
    (st.transition = null), (X = 1), t2(e, t, n, r);
  } finally {
    (st.transition = o), (X = r);
  }
  return null;
}
function t2(e, t, n, r) {
  do Ar();
  while (cn !== null);
  if (H & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Ix(e, i),
    e === xe && ((pe = xe = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zi ||
      ((zi = !0),
      yv(Cs, function () {
        return Ar(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = st.transition), (st.transition = null);
    var s = X;
    X = 1;
    var a = H;
    (H |= 4), (zu.current = null), Xw(e, n), cv(n, e), bw(nc), (Ps = !!tc), (nc = tc = null), (e.current = n), Qw(n), Tx(), (H = a), (X = s), (st.transition = i);
  } else e.current = n;
  if ((zi && ((zi = !1), (cn = e), (zs = o)), (i = e.pendingLanes), i === 0 && (gn = null), Rx(n.stateNode), Be(e, de()), t !== null)) for (r = e.onRecoverableError, n = 0; n < t.length; n++) (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Vs) throw ((Vs = !1), (e = Sc), (Sc = null), e);
  return zs & 1 && e.tag !== 0 && Ar(), (i = e.pendingLanes), i & 1 ? (e === Cc ? Ro++ : ((Ro = 0), (Cc = e))) : (Ro = 0), Nn(), null;
}
function Ar() {
  if (cn !== null) {
    var e = Ym(zs),
      t = st.transition,
      n = X;
    try {
      if (((st.transition = null), (X = 16 > e ? 16 : e), cn === null)) var r = !1;
      else {
        if (((e = cn), (cn = null), (zs = 0), H & 6)) throw Error(N(331));
        var o = H;
        for (H |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            s = i.child;
          if (_.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (_ = c; _ !== null; ) {
                  var u = _;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ko(8, u, i);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (_ = d);
                  else
                    for (; _ !== null; ) {
                      u = _;
                      var p = u.sibling,
                        v = u.return;
                      if ((sv(u), u === c)) {
                        _ = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (_ = p);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var b = x.sibling;
                    (x.sibling = null), (x = b);
                  } while (x !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (_ = s);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ko(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (_ = h);
                break e;
              }
              _ = i.return;
            }
        }
        var m = e.current;
        for (_ = m; _ !== null; ) {
          s = _;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (_ = y);
          else
            e: for (s = m; _ !== null; ) {
              if (((a = _), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      va(9, a);
                  }
                } catch (C) {
                  le(a, a.return, C);
                }
              if (a === s) {
                _ = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (_ = S);
                break e;
              }
              _ = a.return;
            }
        }
        if (((H = o), Nn(), Tt && typeof Tt.onPostCommitFiberRoot == "function"))
          try {
            Tt.onPostCommitFiberRoot(ca, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (st.transition = t);
    }
  }
  return !1;
}
function sp(e, t, n) {
  (t = Fr(n, t)), (t = Xg(e, t, 1)), (e = mn(e, t, 1)), (t = je()), e !== null && (ci(e, 1, t), Be(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) sp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (gn === null || !gn.has(r)))) {
          (e = Fr(n, e)), (e = Qg(t, e, 1)), (t = mn(t, e, 1)), (e = je()), t !== null && (ci(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function n2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), (t = je()), (e.pingedLanes |= e.suspendedLanes & n), xe === e && (Ee & n) === n && (ve === 4 || (ve === 3 && (Ee & 130023424) === Ee && 500 > de() - Uu) ? Bn(e, 0) : (Bu |= n)), Be(e, t);
}
function gv(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Mi), (Mi <<= 1), !(Mi & 130023424) && (Mi = 4194304)) : (t = 1));
  var n = je();
  (e = Ut(e, t)), e !== null && (ci(e, t, n), Be(e, n));
}
function r2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gv(e, n);
}
function o2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), gv(e, n);
}
var vv;
vv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), Kw(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), ne && t.flags & 1048576 && wg(t, As, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      us(e, t), (e = t.pendingProps);
      var o = Ir(t, Ae.current);
      Mr(t, n), (o = Du(null, t, r, e, o, n));
      var i = Ou();
      return (t.flags |= 1), typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ze(r) ? ((i = !0), Ns(t)) : (i = !1), (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null), Mu(t), (o.updater = ma), (t.stateNode = o), (o._reactInternals = t), dc(t, r, e, n), (t = hc(null, t, r, !0, i, n))) : ((t.tag = 0), ne && i && Eu(t), _e(null, t, o, n), (t = t.child)), t;
    case 16:
      r = t.elementType;
      e: {
        switch ((us(e, t), (e = t.pendingProps), (o = r._init), (r = o(r._payload)), (t.type = r), (o = t.tag = s2(r)), (e = ht(r, e)), o)) {
          case 0:
            t = pc(null, t, r, e, n);
            break e;
          case 1:
            t = Qf(null, t, r, e, n);
            break e;
          case 11:
            t = Yf(null, t, r, e, n);
            break e;
          case 14:
            t = Xf(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ht(r, o)), pc(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ht(r, o)), Qf(e, t, r, o, n);
    case 3:
      e: {
        if ((ev(t), e === null)) throw Error(N(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Eg(e, t), Is(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (((i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }), (t.updateQueue.baseState = i), (t.memoizedState = i), t.flags & 256)) {
            (o = Fr(Error(N(423)), t)), (t = qf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Fr(Error(N(424)), t)), (t = qf(e, t, r, n, o));
            break e;
          } else for (Ye = hn(t.stateNode.containerInfo.firstChild), Xe = t, ne = !0, gt = null, n = $g(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Dr(), r === o)) {
            t = Wt(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Rg(t), e === null && lc(t), (r = t.type), (o = t.pendingProps), (i = e !== null ? e.memoizedProps : null), (s = o.children), rc(r, o) ? (s = null) : i !== null && rc(r, i) && (t.flags |= 32), Jg(e, t), _e(e, t, s, n), t.child;
    case 6:
      return e === null && lc(t), null;
    case 13:
      return tv(e, t, n);
    case 4:
      return Au(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = Or(t, null, r, n)) : _e(e, t, r, n), t.child;
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ht(r, o)), Yf(e, t, r, o, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (((r = t.type._context), (o = t.pendingProps), (i = t.memoizedProps), (s = o.value), q(_s, r._currentValue), (r._currentValue = s), i !== null))
          if (wt(i.value, s)) {
            if (i.children === o.children && !Ve.current) {
              t = Wt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Ot(-1, n & -n)), (l.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)), (c.pending = l);
                      }
                    }
                    (i.lanes |= n), (l = i.alternate), l !== null && (l.lanes |= n), cc(i.return, n, t), (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(N(341));
                (s.lanes |= n), (a = s.alternate), a !== null && (a.lanes |= n), cc(s, n, t), (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        _e(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (o = t.type), (r = t.pendingProps.children), Mr(t, n), (o = at(o)), (r = r(o)), (t.flags |= 1), _e(e, t, r, n), t.child;
    case 14:
      return (r = t.type), (o = ht(r, t.pendingProps)), (o = ht(r.type, o)), Xf(e, t, r, o, n);
    case 15:
      return qg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ht(r, o)), us(e, t), (t.tag = 1), ze(r) ? ((e = !0), Ns(t)) : (e = !1), Mr(t, n), Tg(t, r, o), dc(t, r, o, n), hc(null, t, r, !0, e, n);
    case 19:
      return nv(e, t, n);
    case 22:
      return Zg(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function yv(e, t) {
  return Wm(e, t);
}
function i2(e, t, n, r) {
  (this.tag = e), (this.key = n), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = r), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null);
}
function it(e, t, n, r) {
  return new i2(e, t, n, r);
}
function Gu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function s2(e) {
  if (typeof e == "function") return Gu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fu)) return 11;
    if (e === pu) return 14;
  }
  return 2;
}
function yn(e, t) {
  var n = e.alternate;
  return n === null ? ((n = it(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n)) : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)), (n.flags = e.flags & 14680064), (n.childLanes = e.childLanes), (n.lanes = e.lanes), (n.child = e.child), (n.memoizedProps = e.memoizedProps), (n.memoizedState = e.memoizedState), (n.updateQueue = e.updateQueue), (t = e.dependencies), (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), (n.sibling = e.sibling), (n.index = e.index), (n.ref = e.ref), n;
}
function ps(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Gu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ur:
        return Un(n.children, o, i, t);
      case du:
        (s = 8), (o |= 8);
        break;
      case Il:
        return (e = it(12, n, t, o | 2)), (e.elementType = Il), (e.lanes = i), e;
      case Dl:
        return (e = it(13, n, t, o)), (e.elementType = Dl), (e.lanes = i), e;
      case Ol:
        return (e = it(19, n, t, o)), (e.elementType = Ol), (e.lanes = i), e;
      case km:
        return xa(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Pm:
              s = 10;
              break e;
            case Tm:
              s = 9;
              break e;
            case fu:
              s = 11;
              break e;
            case pu:
              s = 14;
              break e;
            case rn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (t = it(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Un(e, t, n, r) {
  return (e = it(7, e, r, t)), (e.lanes = n), e;
}
function xa(e, t, n, r) {
  return (e = it(22, e, r, t)), (e.elementType = km), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function cl(e, t, n) {
  return (e = it(6, e, null, t)), (e.lanes = n), e;
}
function ul(e, t, n) {
  return (t = it(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function a2(e, t, n, r, o) {
  (this.tag = t), (this.containerInfo = e), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.pendingContext = this.context = null), (this.callbackPriority = 0), (this.eventTimes = Wa(0)), (this.expirationTimes = Wa(-1)), (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = Wa(0)), (this.identifierPrefix = r), (this.onRecoverableError = o), (this.mutableSourceEagerHydrationData = null);
}
function Yu(e, t, n, r, o, i, s, a, l) {
  return (e = new a2(e, t, n, a, l)), t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0), (i = it(3, null, null, t)), (e.current = i), (i.stateNode = e), (i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }), Mu(i), e;
}
function l2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: cr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function xv(e) {
  if (!e) return bn;
  e = e._reactInternals;
  e: {
    if (Zn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return yg(e, n, t);
  }
  return t;
}
function wv(e, t, n, r, o, i, s, a, l) {
  return (e = Yu(n, r, !0, e, o, i, s, a, l)), (e.context = xv(null)), (n = e.current), (r = je()), (o = vn(n)), (i = Ot(r, o)), (i.callback = t ?? null), mn(n, i, o), (e.current.lanes = o), ci(e, o, r), Be(e, r), e;
}
function wa(e, t, n, r) {
  var o = t.current,
    i = je(),
    s = vn(o);
  return (n = xv(n)), t.context === null ? (t.context = n) : (t.pendingContext = n), (t = Ot(i, s)), (t.payload = { element: e }), (r = r === void 0 ? null : r), r !== null && (t.callback = r), (e = mn(o, t, s)), e !== null && (yt(e, o, s, i), as(e, o, s)), s;
}
function Us(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ap(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xu(e, t) {
  ap(e, t), (e = e.alternate) && ap(e, t);
}
function c2() {
  return null;
}
var bv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qu(e) {
  this._internalRoot = e;
}
ba.prototype.render = Qu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  wa(e, t, null, null);
};
ba.prototype.unmount = Qu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xn(function () {
      wa(null, e, null, null);
    }),
      (t[Bt] = null);
  }
};
function ba(e) {
  this._internalRoot = e;
}
ba.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++);
    sn.splice(n, 0, e), n === 0 && Jm(e);
  }
};
function qu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function lp() {}
function u2(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Us(s);
        i.call(c);
      };
    }
    var s = wv(t, r, e, 0, null, !1, !1, "", lp);
    return (e._reactRootContainer = s), (e[Bt] = s.current), zo(e.nodeType === 8 ? e.parentNode : e), Xn(), s;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Us(l);
      a.call(c);
    };
  }
  var l = Yu(e, 0, !1, null, null, !1, !1, "", lp);
  return (
    (e._reactRootContainer = l),
    (e[Bt] = l.current),
    zo(e.nodeType === 8 ? e.parentNode : e),
    Xn(function () {
      wa(t, l, n, r);
    }),
    l
  );
}
function Ca(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Us(s);
        a.call(l);
      };
    }
    wa(t, s, e, o);
  } else s = u2(n, t, e, o, r);
  return Us(s);
}
Xm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = go(t.pendingLanes);
        n !== 0 && (gu(t, n | 1), Be(t, de()), !(H & 6) && ((Vr = de() + 500), Nn()));
      }
      break;
    case 13:
      Xn(function () {
        var r = Ut(e, 1);
        if (r !== null) {
          var o = je();
          yt(r, e, 1, o);
        }
      }),
        Xu(e, 1);
  }
};
vu = function (e) {
  if (e.tag === 13) {
    var t = Ut(e, 134217728);
    if (t !== null) {
      var n = je();
      yt(t, e, 134217728, n);
    }
    Xu(e, 134217728);
  }
};
Qm = function (e) {
  if (e.tag === 13) {
    var t = vn(e),
      n = Ut(e, t);
    if (n !== null) {
      var r = je();
      yt(n, e, t, r);
    }
    Xu(e, t);
  }
};
qm = function () {
  return X;
};
Zm = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Gl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = pa(r);
            if (!o) throw Error(N(90));
            Rm(r), Vl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Mm(e, n);
      break;
    case "select":
      (t = n.value), t != null && kr(e, !!n.multiple, t, !1);
  }
};
Lm = Wu;
Fm = Xn;
var d2 = { usingClientEntryPoint: !1, Events: [di, hr, pa, Dm, Om, Wu] },
  co = { findFiberByHostInstance: On, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  f2 = {
    bundleType: co.bundleType,
    version: co.version,
    rendererPackageName: co.rendererPackageName,
    rendererConfig: co.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: co.findFiberByHostInstance || c2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Bi.isDisabled && Bi.supportsFiber)
    try {
      (ca = Bi.inject(f2)), (Tt = Bi);
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d2;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qu(t)) throw Error(N(200));
  return l2(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!qu(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = bv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), (t = Yu(e, 1, !1, null, null, n, !1, r, o)), (e[Bt] = t.current), zo(e.nodeType === 8 ? e.parentNode : e), new Qu(t);
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Bm(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return Xn(e);
};
Je.hydrate = function (e, t, n) {
  if (!Sa(t)) throw Error(N(200));
  return Ca(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!qu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = bv;
  if ((n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), (t = wv(t, null, e, 1, n ?? null, o, !1, i, s)), (e[Bt] = t.current), zo(e), r)) for (e = 0; e < r.length; e++) (n = r[e]), (o = n._getVersion), (o = o(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, o]) : t.mutableSourceEagerHydrationData.push(n, o);
  return new ba(t);
};
Je.render = function (e, t, n) {
  if (!Sa(t)) throw Error(N(200));
  return Ca(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!Sa(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Xn(function () {
        Ca(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bt] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = Wu;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sa(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Ca(e, t, n, !1, r);
};
Je.version = "18.2.0-next-9e3b772b8-20220608";
function Sv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sv);
    } catch (e) {
      console.error(e);
    }
}
Sv(), (wm.exports = Je);
var pi = wm.exports;
const Cv = lm(pi);
var cp = pi;
(_l.createRoot = cp.createRoot), (_l.hydrateRoot = cp.hydrateRoot);
function p2(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, { get: (r, o) => (o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))) });
}
function Ea(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Tc = (e) => Array.isArray(e);
function Ev(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Qo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function up(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Zu(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = up(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if ((typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function")) {
    const [o, i] = up(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function Pa(e, t, n) {
  const r = e.getProps();
  return Zu(r, t, n !== void 0 ? n : r.custom, e);
}
const Ju = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  ed = ["initial", ...Ju],
  hi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  Jn = new Set(hi),
  $t = (e) => e * 1e3,
  Lt = (e) => e / 1e3,
  h2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  m2 = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
  g2 = { type: "keyframes", duration: 0.8 },
  v2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  y2 = (e, { keyframes: t }) => (t.length > 2 ? g2 : Jn.has(e) ? (e.startsWith("scale") ? m2(t[1]) : h2) : v2);
function td(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const x2 = { skipAnimations: !1, useManualTiming: !1 },
  w2 = (e) => e !== null;
function Ta(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(w2),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Pe = (e) => e;
function b2(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(s);
  }
  const l = {
    schedule: (c, u = !1, d = !1) => {
      const v = d && r ? t : n;
      return u && i.add(c), v.has(c) || v.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), i.delete(c);
    },
    process: (c) => {
      if (((s = c), r)) {
        o = !0;
        return;
      }
      (r = !0), ([t, n] = [n, t]), n.clear(), t.forEach(a), (r = !1), o && ((o = !1), l.process(c));
    },
  };
  return l;
}
const Ui = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  S2 = 40;
function Pv(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = Ui.reduce((h, m) => ((h[m] = b2(i)), h), {}),
    { read: a, resolveKeyframes: l, update: c, preRender: u, render: d, postRender: p } = s,
    v = () => {
      const h = performance.now();
      (n = !1), (o.delta = r ? 1e3 / 60 : Math.max(Math.min(h - o.timestamp, S2), 1)), (o.timestamp = h), (o.isProcessing = !0), a.process(o), l.process(o), c.process(o), u.process(o), d.process(o), p.process(o), (o.isProcessing = !1), n && t && ((r = !1), e(v));
    },
    w = () => {
      (n = !0), (r = !0), o.isProcessing || e(v);
    };
  return {
    schedule: Ui.reduce((h, m) => {
      const y = s[m];
      return (h[m] = (S, C = !1, E = !1) => (n || w(), y.schedule(S, C, E))), h;
    }, {}),
    cancel: (h) => {
      for (let m = 0; m < Ui.length; m++) s[Ui[m]].cancel(h);
    },
    state: o,
    steps: s,
  };
}
const { schedule: Q, cancel: Sn, state: Se, steps: dl } = Pv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pe, !0),
  Tv = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  C2 = 1e-7,
  E2 = 12;
function P2(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = Tv(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > C2 && ++a < E2);
  return s;
}
function mi(e, t, n, r) {
  if (e === t && n === r) return Pe;
  const o = (i) => P2(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Tv(o(i), t, r));
}
const kv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  $v = (e) => (t) => 1 - e(1 - t),
  Rv = mi(0.33, 1.53, 0.69, 0.99),
  nd = $v(Rv),
  Nv = kv(nd),
  Mv = (e) => ((e *= 2) < 1 ? 0.5 * nd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  rd = (e) => 1 - Math.sin(Math.acos(e)),
  Av = $v(rd),
  _v = kv(rd),
  jv = (e) => /^0[^.\s]+$/u.test(e);
function T2(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || jv(e) : !0;
}
let k2 = Pe,
  Iv = Pe;
const Dv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Ov = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Lv = Ov("--"),
  $2 = Ov("var(--"),
  od = (e) => ($2(e) ? R2.test(e.split("/*")[0].trim()) : !1),
  R2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  N2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function M2(e) {
  const t = N2.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Fv(e, t, n = 1) {
  const [r, o] = M2(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return Dv(s) ? parseFloat(s) : s;
  }
  return od(o) ? Fv(o, t, n + 1) : o;
}
const Cn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Xr = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e },
  qo = { ...Xr, transform: (e) => Cn(0, 1, e) },
  Wi = { ...Xr, default: 1 },
  gi = (e) => ({ test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1, parse: parseFloat, transform: (t) => `${t}${e}` }),
  tn = gi("deg"),
  Rt = gi("%"),
  D = gi("px"),
  A2 = gi("vh"),
  _2 = gi("vw"),
  dp = { ...Rt, parse: (e) => Rt.parse(e) / 100, transform: (e) => Rt.transform(e * 100) },
  j2 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
  fp = (e) => e === Xr || e === D,
  pp = (e, t) => parseFloat(e.split(", ")[t]),
  hp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return pp(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? pp(i[1], e) : 0;
      }
    },
  I2 = new Set(["x", "y", "z"]),
  D2 = hi.filter((e) => !I2.has(e));
function O2(e) {
  const t = [];
  return (
    D2.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const zr = { width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n), height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n), top: (e, { top: t }) => parseFloat(t), left: (e, { left: t }) => parseFloat(t), bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min), right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min), x: hp(4, 13), y: hp(5, 14) };
zr.translateX = zr.x;
zr.translateY = zr.y;
const Vv = (e) => (t) => t.test(e),
  L2 = { test: (e) => e === "auto", parse: (e) => e },
  zv = [Xr, D, Rt, tn, _2, A2, L2],
  mp = (e) => zv.find(Vv(e)),
  Wn = new Set();
let kc = !1,
  $c = !1;
function Bv() {
  if ($c) {
    const e = Array.from(Wn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = O2(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  ($c = !1), (kc = !1), Wn.forEach((e) => e.complete()), Wn.clear();
}
function Uv() {
  Wn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && ($c = !0);
  });
}
function F2() {
  Uv(), Bv();
}
class id {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1), (this.isAsync = !1), (this.needsMeasurement = !1), (this.isScheduled = !1), (this.unresolvedKeyframes = [...t]), (this.onComplete = n), (this.name = r), (this.motionValue = o), (this.element = i), (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0), this.isAsync ? (Wn.add(this), kc || ((kc = !0), Q.read(Uv), Q.resolveKeyframes(Bv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Wn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Wn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const No = (e) => Math.round(e * 1e5) / 1e5,
  sd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function V2(e) {
  return e == null;
}
const z2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ad = (e, t) => (n) => !!((typeof n == "string" && z2.test(n) && n.startsWith(e)) || (t && !V2(n) && Object.prototype.hasOwnProperty.call(n, t))),
  Wv = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [o, i, s, a] = r.match(sd);
    return { [e]: parseFloat(o), [t]: parseFloat(i), [n]: parseFloat(s), alpha: a !== void 0 ? parseFloat(a) : 1 };
  },
  B2 = (e) => Cn(0, 255, e),
  fl = { ...Xr, transform: (e) => Math.round(B2(e)) },
  Vn = { test: ad("rgb", "red"), parse: Wv("red", "green", "blue"), transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + fl.transform(e) + ", " + fl.transform(t) + ", " + fl.transform(n) + ", " + No(qo.transform(r)) + ")" };
function U2(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return e.length > 5 ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (o = e.substring(7, 9))) : ((t = e.substring(1, 2)), (n = e.substring(2, 3)), (r = e.substring(3, 4)), (o = e.substring(4, 5)), (t += t), (n += n), (r += r), (o += o)), { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: o ? parseInt(o, 16) / 255 : 1 };
}
const Rc = { test: ad("#"), parse: U2, transform: Vn.transform },
  br = { test: ad("hsl", "hue"), parse: Wv("hue", "saturation", "lightness"), transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Rt.transform(No(t)) + ", " + Rt.transform(No(n)) + ", " + No(qo.transform(r)) + ")" },
  Re = { test: (e) => Vn.test(e) || Rc.test(e) || br.test(e), parse: (e) => (Vn.test(e) ? Vn.parse(e) : br.test(e) ? br.parse(e) : Rc.parse(e)), transform: (e) => (typeof e == "string" ? e : e.hasOwnProperty("red") ? Vn.transform(e) : br.transform(e)) },
  W2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function K2(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(sd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(W2)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Kv = "number",
  Hv = "color",
  H2 = "var",
  G2 = "var(",
  gp = "${}",
  Y2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zo(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t.replace(Y2, (l) => (Re.test(l) ? (r.color.push(i), o.push(Hv), n.push(Re.parse(l))) : l.startsWith(G2) ? (r.var.push(i), o.push(H2), n.push(l)) : (r.number.push(i), o.push(Kv), n.push(parseFloat(l))), ++i, gp)).split(gp);
  return { values: n, split: a, indexes: r, types: o };
}
function Gv(e) {
  return Zo(e).values;
}
function Yv(e) {
  const { split: t, types: n } = Zo(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === Kv ? (i += No(o[s])) : a === Hv ? (i += Re.transform(o[s])) : (i += o[s]);
      }
    return i;
  };
}
const X2 = (e) => (typeof e == "number" ? 0 : e);
function Q2(e) {
  const t = Gv(e);
  return Yv(e)(t.map(X2));
}
const En = { test: K2, parse: Gv, createTransformer: Yv, getAnimatableNone: Q2 },
  q2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Z2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(sd) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = q2.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const J2 = /\b([a-z-]*)\(.*?\)/gu,
  Nc = {
    ...En,
    getAnimatableNone: (e) => {
      const t = e.match(J2);
      return t ? t.map(Z2).join(" ") : e;
    },
  },
  eb = { borderWidth: D, borderTopWidth: D, borderRightWidth: D, borderBottomWidth: D, borderLeftWidth: D, borderRadius: D, radius: D, borderTopLeftRadius: D, borderTopRightRadius: D, borderBottomRightRadius: D, borderBottomLeftRadius: D, width: D, maxWidth: D, height: D, maxHeight: D, top: D, right: D, bottom: D, left: D, padding: D, paddingTop: D, paddingRight: D, paddingBottom: D, paddingLeft: D, margin: D, marginTop: D, marginRight: D, marginBottom: D, marginLeft: D, backgroundPositionX: D, backgroundPositionY: D },
  tb = { rotate: tn, rotateX: tn, rotateY: tn, rotateZ: tn, scale: Wi, scaleX: Wi, scaleY: Wi, scaleZ: Wi, skew: tn, skewX: tn, skewY: tn, distance: D, translateX: D, translateY: D, translateZ: D, x: D, y: D, z: D, perspective: D, transformPerspective: D, opacity: qo, originX: dp, originY: dp, originZ: D },
  vp = { ...Xr, transform: Math.round },
  ld = { ...eb, ...tb, zIndex: vp, size: D, fillOpacity: qo, strokeOpacity: qo, numOctaves: vp },
  nb = { ...ld, color: Re, backgroundColor: Re, outlineColor: Re, fill: Re, stroke: Re, borderColor: Re, borderTopColor: Re, borderRightColor: Re, borderBottomColor: Re, borderLeftColor: Re, filter: Nc, WebkitFilter: Nc },
  cd = (e) => nb[e];
function Xv(e, t) {
  let n = cd(e);
  return n !== Nc && (n = En), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const rb = new Set(["auto", "none", "0"]);
function ob(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !rb.has(i) && Zo(i).values.length && (o = e[r]), r++;
  }
  if (o && n) for (const i of t) e[i] = Xv(n, o);
}
class Qv extends id {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), od(c))) {
        const u = Fv(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !j2.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = mp(o),
      a = mp(i);
    if (s !== a)
      if (fp(s) && fp(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) T2(t[o]) && r.push(o);
    r.length && ob(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), (this.measuredOrigin = zr[r](t.measureViewportBox(), window.getComputedStyle(t.current))), (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = zr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function ud(e) {
  return typeof e == "function";
}
let hs;
function ib() {
  hs = void 0;
}
const Nt = {
    now: () => (hs === void 0 && Nt.set(Se.isProcessing || x2.useManualTiming ? Se.timestamp : performance.now()), hs),
    set: (e) => {
      (hs = e), queueMicrotask(ib);
    },
  },
  yp = (e, t) => (t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || (typeof e == "string" && (En.test(e) || e === "0") && !e.startsWith("url("))));
function sb(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function ab(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = yp(o, t),
    a = yp(i, t);
  return !s || !a ? !1 : sb(e) || ((n === "spring" || ud(n)) && r);
}
const lb = 40;
class qv {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", ...a }) {
    (this.isStopped = !1), (this.hasAttemptedResolve = !1), (this.createdAt = Nt.now()), (this.options = { autoplay: t, delay: n, type: r, repeat: o, repeatDelay: i, repeatType: s, ...a }), this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt ? (this.resolvedAt - this.createdAt > lb ? this.resolvedAt : this.createdAt) : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && F2(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Nt.now()), (this.hasAttemptedResolve = !0);
    const { name: r, type: o, velocity: i, delay: s, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !ab(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Ta(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 && ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }), this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Zv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const cb = 5;
function Jv(e, t, n) {
  const r = Math.max(t - cb, 0);
  return Zv(n - e(r), t - r);
}
const pl = 0.001,
  ub = 0.01,
  xp = 10,
  db = 0.05,
  fb = 1;
function pb({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  k2(e <= $t(xp));
  let s = 1 - t;
  (s = Cn(db, fb, s)),
    (e = Cn(ub, xp, Lt(e))),
    s < 1
      ? ((o = (c) => {
          const u = c * s,
            d = u * e,
            p = u - n,
            v = Mc(c, s),
            w = Math.exp(-d);
          return pl - (p / v) * w;
        }),
        (i = (c) => {
          const d = c * s * e,
            p = d * n + n,
            v = Math.pow(s, 2) * Math.pow(c, 2) * e,
            w = Math.exp(-d),
            x = Mc(Math.pow(c, 2), s);
          return ((-o(c) + pl > 0 ? -1 : 1) * ((p - v) * w)) / x;
        }))
      : ((o = (c) => {
          const u = Math.exp(-c * e),
            d = (c - n) * e + 1;
          return -pl + u * d;
        }),
        (i = (c) => {
          const u = Math.exp(-c * e),
            d = (n - c) * (e * e);
          return u * d;
        }));
  const a = 5 / e,
    l = mb(o, i, a);
  if (((e = $t(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
const hb = 12;
function mb(e, t, n) {
  let r = n;
  for (let o = 1; o < hb; o++) r = r - e(r) / t(r);
  return r;
}
function Mc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const gb = ["duration", "bounce"],
  vb = ["stiffness", "damping", "mass"];
function wp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function yb(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
  if (!wp(e, vb) && wp(e, gb)) {
    const n = pb(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function e0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    { stiffness: a, damping: l, mass: c, duration: u, velocity: d, isResolvedFromDuration: p } = yb({ ...r, velocity: -Lt(r.velocity || 0) }),
    v = d || 0,
    w = l / (2 * Math.sqrt(a * c)),
    x = i - o,
    b = Lt(Math.sqrt(a / c)),
    h = Math.abs(x) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let m;
  if (w < 1) {
    const y = Mc(b, w);
    m = (S) => {
      const C = Math.exp(-w * b * S);
      return i - C * (((v + w * b * x) / y) * Math.sin(y * S) + x * Math.cos(y * S));
    };
  } else if (w === 1) m = (y) => i - Math.exp(-b * y) * (x + (v + b * x) * y);
  else {
    const y = b * Math.sqrt(w * w - 1);
    m = (S) => {
      const C = Math.exp(-w * b * S),
        E = Math.min(y * S, 300);
      return i - (C * ((v + w * b * x) * Math.sinh(E) + y * x * Math.cosh(E))) / y;
    };
  }
  return {
    calculatedDuration: (p && u) || null,
    next: (y) => {
      const S = m(y);
      if (p) s.done = y >= u;
      else {
        let C = 0;
        w < 1 && (C = y === 0 ? $t(v) : Jv(m, y, S));
        const E = Math.abs(C) <= n,
          T = Math.abs(i - S) <= t;
        s.done = E && T;
      }
      return (s.value = s.done ? i : S), s;
    },
  };
}
function bp({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0],
    p = { done: !1, value: d },
    v = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    w = (P) => (a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l);
  let x = n * t;
  const b = d + x,
    h = s === void 0 ? b : s(b);
  h !== b && (x = h - d);
  const m = (P) => -x * Math.exp(-P / r),
    y = (P) => h + m(P),
    S = (P) => {
      const k = m(P),
        M = y(P);
      (p.done = Math.abs(k) <= c), (p.value = p.done ? h : M);
    };
  let C, E;
  const T = (P) => {
    v(p.value) && ((C = P), (E = e0({ keyframes: [p.value, w(p.value)], velocity: Jv(y, P, p.value), damping: o, stiffness: i, restDelta: c, restSpeed: u })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let k = !1;
        return !E && C === void 0 && ((k = !0), S(P), T(P)), C !== void 0 && P >= C ? E.next(P - C) : (!k && S(P), p);
      },
    }
  );
}
const xb = mi(0.42, 0, 1, 1),
  wb = mi(0, 0, 0.58, 1),
  t0 = mi(0.42, 0, 0.58, 1),
  bb = (e) => Array.isArray(e) && typeof e[0] != "number",
  dd = (e) => Array.isArray(e) && typeof e[0] == "number",
  Sb = { linear: Pe, easeIn: xb, easeInOut: t0, easeOut: wb, circIn: rd, circInOut: _v, circOut: Av, backIn: nd, backInOut: Nv, backOut: Rv, anticipate: Mv },
  Sp = (e) => {
    if (dd(e)) {
      Iv(e.length === 4);
      const [t, n, r, o] = e;
      return mi(t, n, r, o);
    } else if (typeof e == "string") return Sb[e];
    return e;
  },
  Cb = (e, t) => (n) => t(e(n)),
  Ft = (...e) => e.reduce(Cb),
  Br = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  oe = (e, t, n) => e + (t - e) * n;
function hl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Eb({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = hl(l, a, e + 1 / 3)), (i = hl(l, a, e)), (s = hl(l, a, e - 1 / 3));
  }
  return { red: Math.round(o * 255), green: Math.round(i * 255), blue: Math.round(s * 255), alpha: r };
}
function Ws(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ml = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  Pb = [Rc, Vn, br],
  Tb = (e) => Pb.find((t) => t.test(e));
function Cp(e) {
  const t = Tb(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === br && (n = Eb(n)), n;
}
const Ep = (e, t) => {
    const n = Cp(e),
      r = Cp(t);
    if (!n || !r) return Ws(e, t);
    const o = { ...n };
    return (i) => ((o.red = ml(n.red, r.red, i)), (o.green = ml(n.green, r.green, i)), (o.blue = ml(n.blue, r.blue, i)), (o.alpha = oe(n.alpha, r.alpha, i)), Vn.transform(o));
  },
  Ac = new Set(["none", "hidden"]);
function kb(e, t) {
  return Ac.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function $b(e, t) {
  return (n) => oe(e, t, n);
}
function fd(e) {
  return typeof e == "number" ? $b : typeof e == "string" ? (od(e) ? Ws : Re.test(e) ? Ep : Mb) : Array.isArray(e) ? n0 : typeof e == "object" ? (Re.test(e) ? Ep : Rb) : Ws;
}
function n0(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => fd(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function Rb(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = fd(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function Nb(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[s]++;
  }
  return r;
}
const Mb = (e, t) => {
  const n = En.createTransformer(t),
    r = Zo(e),
    o = Zo(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? ((Ac.has(e) && !o.values.length) || (Ac.has(t) && !r.values.length) ? kb(e, t) : Ft(n0(Nb(r, o), o.values), n)) : Ws(e, t);
};
function r0(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? oe(e, t, n) : fd(e)(e, t);
}
function Ab(e, t, n) {
  const r = [],
    o = n || r0,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Pe : t;
      a = Ft(l, a);
    }
    r.push(a);
  }
  return r;
}
function _b(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Iv(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = Ab(t, r, o),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      const d = Br(e[u], e[u + 1], c);
      return s[u](d);
    };
  return n ? (c) => l(Cn(e[0], e[i - 1], c)) : l;
}
function jb(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Br(0, t, r);
    e.push(oe(n, 1, o));
  }
}
function Ib(e) {
  const t = [0];
  return jb(t, e.length - 1), t;
}
function Db(e, t) {
  return e.map((n) => n * t);
}
function Ob(e, t) {
  return e.map(() => t || t0).splice(0, e.length - 1);
}
function Ks({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = bb(r) ? r.map(Sp) : Sp(r),
    i = { done: !1, value: t[0] },
    s = Db(n && n.length === t.length ? n : Ib(t), e),
    a = _b(s, t, { ease: Array.isArray(o) ? o : Ob(t, o) });
  return { calculatedDuration: e, next: (l) => ((i.value = a(l)), (i.done = l >= e), i) };
}
const Pp = 2e4;
function Lb(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Pp; ) (t += n), (r = e.next(t));
  return t >= Pp ? 1 / 0 : t;
}
const Fb = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return { start: () => Q.update(t, !0), stop: () => Sn(t), now: () => (Se.isProcessing ? Se.timestamp : Nt.now()) };
  },
  Vb = { decay: bp, inertia: bp, tween: Ks, keyframes: Ks, spring: e0 },
  zb = (e) => e / 100;
class pd extends qv {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")) return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      s = (o == null ? void 0 : o.KeyframeResolver) || id,
      a = (l, c) => this.onKeyframesResolved(l, c);
    (this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = this.options,
      a = ud(n) ? n : Vb[n] || Ks;
    let l, c;
    a !== Ks && typeof t[0] != "number" && ((l = Ft(zb, r0(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" && (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })), u.calculatedDuration === null && (u.calculatedDuration = Lb(u));
    const { calculatedDuration: d } = u,
      p = d + o,
      v = p * (r + 1) - o;
    return { generator: u, mirroredGenerator: c, mapPercentToKeyframes: l, calculatedDuration: d, resolvedDuration: p, totalDuration: v };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const { finalKeyframe: o, generator: i, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: d } = r;
    if (this.startTime === null) return i.next(0);
    const { delay: p, repeat: v, repeatType: w, repeatDelay: x, onUpdate: b } = this.options;
    this.speed > 0 ? (this.startTime = Math.min(this.startTime, t)) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? (this.currentTime = t) : this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const h = this.currentTime - p * (this.speed >= 0 ? 1 : -1),
      m = this.speed >= 0 ? h < 0 : h > u;
    (this.currentTime = Math.max(h, 0)), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let y = this.currentTime,
      S = i;
    if (v) {
      const P = Math.min(this.currentTime, u) / d;
      let k = Math.floor(P),
        M = P % 1;
      !M && P >= 1 && (M = 1), M === 1 && k--, (k = Math.min(k, v + 1)), !!(k % 2) && (w === "reverse" ? ((M = 1 - M), x && (M -= x / d)) : w === "mirror" && (S = s)), (y = Cn(0, 1, M) * d);
    }
    const C = m ? { done: !1, value: l[0] } : S.next(y);
    a && (C.value = a(C.value));
    let { done: E } = C;
    !m && c !== null && (E = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const T = this.holdTime === null && (this.state === "finished" || (this.state === "running" && E));
    return T && o !== void 0 && (C.value = Ta(l, this.options, o)), b && b(C.value), T && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Lt(t.calculatedDuration) : 0;
  }
  get time() {
    return Lt(this.currentTime);
  }
  set time(t) {
    (t = $t(t)), (this.currentTime = t), this.holdTime !== null || this.speed === 0 ? (this.holdTime = t) : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Lt(this.currentTime));
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Fb, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null ? (this.startTime = o - this.holdTime) : this.startTime ? this.state === "finished" && (this.startTime = o) : (this.startTime = r ?? this.calcStartTime()), this.state === "finished" && this.updateFinishedPromise(), (this.cancelTime = this.startTime), (this.holdTime = null), (this.state = "running"), this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"), (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(), (this.pendingPlayState = this.state = "finished"), (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"), this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), (this.startTime = this.cancelTime = null), this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Bb = new Set(["opacity", "clipPath", "filter", "transform"]),
  Ub = 10,
  Wb = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / Ub), 2);
    for (let o = 0; o < r; o++) n += e(Br(0, r - 1, o)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function hd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Kb = { linearEasing: void 0 };
function Hb(e, t) {
  const n = hd(e);
  return () => {
    var r;
    return (r = Kb[t]) !== null && r !== void 0 ? r : n();
  };
}
const Hs = Hb(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function o0(e) {
  return !!((typeof e == "function" && Hs()) || !e || (typeof e == "string" && (e in _c || Hs())) || dd(e) || (Array.isArray(e) && e.every(o0)));
}
const yo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  _c = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: yo([0, 0.65, 0.55, 1]), circOut: yo([0.55, 0, 1, 0.45]), backIn: yo([0.31, 0.01, 0.66, -0.59]), backOut: yo([0.33, 1.53, 0.69, 0.99]) };
function i0(e, t) {
  if (e) return typeof e == "function" && Hs() ? Wb(e, t) : dd(e) ? yo(e) : Array.isArray(e) ? e.map((n) => i0(n, t) || _c.easeOut) : _c[e];
}
function Gb(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = i0(a, o);
  return Array.isArray(u) && (c.easing = u), e.animate(c, { delay: r, duration: o, easing: Array.isArray(u) ? "linear" : u, fill: "both", iterations: i + 1, direction: s === "reverse" ? "alternate" : "normal" });
}
function Tp(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Yb = hd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Gs = 10,
  Xb = 2e4;
function Qb(e) {
  return ud(e.type) || e.type === "spring" || !o0(e.ease);
}
function qb(e, t) {
  const n = new pd({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < Xb; ) (r = n.sample(i)), o.push(r.value), (i += Gs);
  return { times: void 0, keyframes: o, duration: i - Gs, ease: "linear" };
}
const s0 = { anticipate: Mv, backInOut: Nv, circInOut: _v };
function Zb(e) {
  return e in s0;
}
class kp extends qv {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new Qv(i, (s, a) => this.onKeyframesResolved(s, a), n, r, o)), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: o = 300, times: i, ease: s, type: a, motionValue: l, name: c, startTime: u } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if ((typeof s == "string" && Hs() && Zb(s) && (s = s0[s]), Qb(this.options))) {
      const { onComplete: p, onUpdate: v, motionValue: w, element: x, ...b } = this.options,
        h = qb(t, b);
      (t = h.keyframes), t.length === 1 && (t[1] = t[0]), (o = h.duration), (i = h.times), (s = h.ease), (a = "keyframes");
    }
    const d = Gb(l.owner.current, c, t, { ...this.options, duration: o, times: i, ease: s });
    return (
      (d.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Tp(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: p } = this.options;
            l.set(Ta(t, this.options, n)), p && p(), this.cancel(), this.resolveFinishedPromise();
          }),
      { animation: d, duration: o, times: i, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Lt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Lt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = $t(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Pe;
      const { animation: r } = n;
      Tp(r, t);
    }
    return Pe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")) return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n, keyframes: r, duration: o, type: i, ease: s, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: d, element: p, ...v } = this.options,
        w = new pd({ ...v, keyframes: r, duration: o, type: i, ease: s, times: a, isGenerator: !0 }),
        x = $t(this.time);
      c.setWithVelocity(w.sample(x - Gs).value, w.sample(x).value, Gs);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: o, repeatType: i, damping: s, type: a } = t;
    return Yb() && r && Bb.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !o && i !== "mirror" && s !== 0 && a !== "inertia";
  }
}
const Jb = hd(() => window.ScrollTimeline !== void 0);
class eS {
  constructor(t) {
    (this.stop = () => this.runAll("stop")), (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) => (Jb() && o.attachTimeline ? o.attachTimeline(t) : n(o)));
    return () => {
      r.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function tS({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const md =
    (e, t, n, r = {}, o, i) =>
    (s) => {
      const a = td(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: c = 0 } = r;
      c = c - $t(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (p) => {
          t.set(p), a.onUpdate && a.onUpdate(p);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : o,
      };
      tS(a) || (u = { ...u, ...y2(e, u) }), u.duration && (u.duration = $t(u.duration)), u.repeatDelay && (u.repeatDelay = $t(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
      let d = !1;
      if (((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) && ((u.duration = 0), u.delay === 0 && (d = !0)), d && !i && t.get() !== void 0)) {
        const p = Ta(u.keyframes, a);
        if (p !== void 0)
          return (
            Q.update(() => {
              u.onUpdate(p), u.onComplete();
            }),
            new eS([])
          );
      }
      return !i && kp.supports(u) ? new kp(u) : new pd(u);
    },
  nS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  rS = (e) => (Tc(e) ? e[e.length - 1] || 0 : e);
function gd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function vd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class yd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return gd(this.subscriptions, t), () => vd(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const $p = 30,
  oS = (e) => !isNaN(parseFloat(e));
class iS {
  constructor(t, n = {}) {
    (this.version = "11.11.17"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Nt.now();
        this.updatedAt !== i && this.setPrevFrameValue(), (this.prev = this.current), this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = Nt.now()), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = oS(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new yd());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Q.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = void 0), (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t), (this.prev = t), (this.prevUpdatedAt = this.prevFrameValue = void 0), n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Nt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > $p) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, $p);
    return Zv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0), (this.animation = t(n)), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Jo(e, t) {
  return new iS(e, t);
}
function sS(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Jo(n));
}
function aS(e, t) {
  const n = Pa(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = rS(i[s]);
    sS(e, s, a);
  }
}
const xd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  lS = "framerAppearId",
  a0 = "data-" + xd(lS);
function l0(e) {
  return e.props[a0];
}
const Me = (e) => !!(e && e.getVelocity);
function cS(e) {
  return !!(Me(e) && e.add);
}
function jc(e, t) {
  const n = e.getValue("willChange");
  if (cS(n)) return n.add(t);
}
function uS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function c0(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const c = [],
    u = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const p = e.getValue(d, (i = e.latestValues[d]) !== null && i !== void 0 ? i : null),
      v = l[d];
    if (v === void 0 || (u && uS(u, d))) continue;
    const w = { delay: n, ...td(s || {}, d) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const h = l0(e);
      if (h) {
        const m = window.MotionHandoffAnimation(h, d, Q);
        m !== null && ((w.startTime = m), (x = !0));
      }
    }
    jc(e, d), p.start(md(d, p, v, e.shouldReduceMotion && Jn.has(d) ? { type: !1 } : w, e, x));
    const b = p.animation;
    b && c.push(b);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        Q.update(() => {
          a && aS(e, a);
        });
      }),
    c
  );
}
function Ic(e, t, n = {}) {
  var r;
  const o = Pa(e, t, n.type === "exit" ? ((r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom) : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(c0(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const { delayChildren: u = 0, staggerChildren: d, staggerDirection: p } = i;
            return dS(e, t, u + c, d, p, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function dS(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(fS)
      .forEach((c, u) => {
        c.notify("AnimationStart", t), s.push(Ic(c, t, { ...i, delay: n + l(u) }).then(() => c.notify("AnimationComplete", t)));
      }),
    Promise.all(s)
  );
}
function fS(e, t) {
  return e.sortNodePosition(t);
}
function pS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Ic(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Ic(e, t, n);
  else {
    const o = typeof t == "function" ? Pa(e, t, n.custom) : t;
    r = Promise.all(c0(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const hS = ed.length;
function u0(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? u0(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < hS; n++) {
    const r = ed[n],
      o = e.props[r];
    (Qo(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const mS = [...Ju].reverse(),
  gS = Ju.length;
function vS(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => pS(e, n, r)));
}
function yS(e) {
  let t = vS(e),
    n = Rp(),
    r = !0;
  const o = (l) => (c, u) => {
    var d;
    const p = Pa(e, u, l === "exit" ? ((d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom) : void 0);
    if (p) {
      const { transition: v, transitionEnd: w, ...x } = p;
      c = { ...c, ...x, ...w };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e,
      u = u0(e.parent) || {},
      d = [],
      p = new Set();
    let v = {},
      w = 1 / 0;
    for (let b = 0; b < gS; b++) {
      const h = mS[b],
        m = n[h],
        y = c[h] !== void 0 ? c[h] : u[h],
        S = Qo(y),
        C = h === l ? m.isActive : null;
      C === !1 && (w = b);
      let E = y === u[h] && y !== c[h] && S;
      if ((E && r && e.manuallyAnimateOnMount && (E = !1), (m.protectedKeys = { ...v }), (!m.isActive && C === null) || (!y && !m.prevProp) || Ea(y) || typeof y == "boolean")) continue;
      const T = xS(m.prevProp, y);
      let P = T || (h === l && m.isActive && !E && S) || (b > w && S),
        k = !1;
      const M = Array.isArray(y) ? y : [y];
      let O = M.reduce(o(h), {});
      C === !1 && (O = {});
      const { prevResolvedValues: j = {} } = m,
        Z = { ...j, ...O },
        F = (B) => {
          (P = !0), p.has(B) && ((k = !0), p.delete(B)), (m.needsAnimating[B] = !0);
          const $ = e.getValue(B);
          $ && ($.liveStyle = !1);
        };
      for (const B in Z) {
        const $ = O[B],
          R = j[B];
        if (v.hasOwnProperty(B)) continue;
        let A = !1;
        Tc($) && Tc(R) ? (A = !Ev($, R)) : (A = $ !== R), A ? ($ != null ? F(B) : p.add(B)) : $ !== void 0 && p.has(B) ? F(B) : (m.protectedKeys[B] = !0);
      }
      (m.prevProp = y), (m.prevResolvedValues = O), m.isActive && (v = { ...v, ...O }), r && e.blockInitialAnimation && (P = !1), P && (!(E && T) || k) && d.push(...M.map((B) => ({ animation: B, options: { type: h } })));
    }
    if (p.size) {
      const b = {};
      p.forEach((h) => {
        const m = e.getBaseTarget(h),
          y = e.getValue(h);
        y && (y.liveStyle = !0), (b[h] = m ?? null);
      }),
        d.push({ animation: b });
    }
    let x = !!d.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (x = !1), (r = !1), x ? t(d) : Promise.resolve();
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((p) => {
        var v;
        return (v = p.animationState) === null || v === void 0 ? void 0 : v.setActive(l, c);
      }),
      (n[l].isActive = c);
    const d = s(l);
    for (const p in n) n[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = Rp()), (r = !0);
    },
  };
}
function xS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ev(t, e) : !1;
}
function An(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Rp() {
  return { animate: An(!0), whileInView: An(), whileHover: An(), whileTap: An(), whileDrag: An(), whileFocus: An(), exit: An() };
}
class Mn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class wS extends Mn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = yS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ea(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let bS = 0;
class SS extends Mn {
  constructor() {
    super(...arguments), (this.id = bS++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const CS = { animation: { Feature: wS }, exit: { Feature: SS } },
  d0 = (e) => (e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1);
function ka(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const ES = (e) => (t) => d0(t) && e(t, ka(t));
function Dt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Vt(e, t, n, r) {
  return Dt(e, t, ES(n), r);
}
const Np = (e, t) => Math.abs(e - t);
function PS(e, t) {
  const n = Np(e.x, t.x),
    r = Np(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class f0 {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = vl(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          v = PS(d.offset, { x: 0, y: 0 }) >= 3;
        if (!p && !v) return;
        const { point: w } = d,
          { timestamp: x } = Se;
        this.history.push({ ...w, timestamp: x });
        const { onStart: b, onMove: h } = this.handlers;
        p || (b && b(this.lastMoveEvent, d), (this.startEvent = this.lastMoveEvent)), h && h(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, p) => {
        (this.lastMoveEvent = d), (this.lastMoveEventInfo = gl(p, this.transformPagePoint)), Q.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, p) => {
        this.end();
        const { onEnd: v, onSessionEnd: w, resumeAnimation: x } = this.handlers;
        if ((this.dragSnapToOrigin && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
        const b = vl(d.type === "pointercancel" ? this.lastMoveEventInfo : gl(p, this.transformPagePoint), this.history);
        this.startEvent && v && v(d, b), w && w(d, b);
      }),
      !d0(t))
    )
      return;
    (this.dragSnapToOrigin = i), (this.handlers = n), (this.transformPagePoint = r), (this.contextWindow = o || window);
    const s = ka(t),
      a = gl(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = Se;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, vl(a, this.history)), (this.removeListeners = Ft(Vt(this.contextWindow, "pointermove", this.handlePointerMove), Vt(this.contextWindow, "pointerup", this.handlePointerUp), Vt(this.contextWindow, "pointercancel", this.handlePointerUp)));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Sn(this.updatePoint);
  }
}
function gl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Mp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function vl({ point: e }, t) {
  return { point: e, delta: Mp(e, p0(t)), offset: Mp(e, TS(t)), velocity: kS(t, 0.1) };
}
function TS(e) {
  return e[0];
}
function p0(e) {
  return e[e.length - 1];
}
function kS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = p0(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > $t(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Lt(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function h0(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Ap = h0("dragHorizontal"),
  _p = h0("dragVertical");
function m0(e) {
  let t = !1;
  if (e === "y") t = _p();
  else if (e === "x") t = Ap();
  else {
    const n = Ap(),
      r = _p();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function g0() {
  const e = m0(!0);
  return e ? (e(), !1) : !0;
}
function Sr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const v0 = 1e-4,
  $S = 1 - v0,
  RS = 1 + v0,
  y0 = 0.01,
  NS = 0 - y0,
  MS = 0 + y0;
function Ze(e) {
  return e.max - e.min;
}
function AS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function jp(e, t, n, r = 0.5) {
  (e.origin = r), (e.originPoint = oe(t.min, t.max, e.origin)), (e.scale = Ze(n) / Ze(t)), (e.translate = oe(n.min, n.max, e.origin) - e.originPoint), ((e.scale >= $S && e.scale <= RS) || isNaN(e.scale)) && (e.scale = 1), ((e.translate >= NS && e.translate <= MS) || isNaN(e.translate)) && (e.translate = 0);
}
function Mo(e, t, n, r) {
  jp(e.x, t.x, n.x, r ? r.originX : void 0), jp(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ip(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ze(t));
}
function _S(e, t, n) {
  Ip(e.x, t.x, n.x), Ip(e.y, t.y, n.y);
}
function Dp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ze(t));
}
function Ao(e, t, n) {
  Dp(e.x, t.x, n.x), Dp(e.y, t.y, n.y);
}
function jS(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? (e = r ? oe(t, e, r.min) : Math.max(e, t)) : n !== void 0 && e > n && (e = r ? oe(n, e, r.max) : Math.min(e, n)), e;
}
function Op(e, t, n) {
  return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
}
function IS(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Op(e.x, n, o), y: Op(e.y, t, r) };
}
function Lp(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function DS(e, t) {
  return { x: Lp(e.x, t.x), y: Lp(e.y, t.y) };
}
function OS(e, t) {
  let n = 0.5;
  const r = Ze(e),
    o = Ze(t);
  return o > r ? (n = Br(t.min, t.max - r, e.min)) : r > o && (n = Br(e.min, e.max - o, t.min)), Cn(0, 1, n);
}
function LS(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Dc = 0.35;
function FS(e = Dc) {
  return e === !1 ? (e = 0) : e === !0 && (e = Dc), { x: Fp(e, "left", "right"), y: Fp(e, "top", "bottom") };
}
function Fp(e, t, n) {
  return { min: Vp(e, t), max: Vp(e, n) };
}
function Vp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const zp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Cr = () => ({ x: zp(), y: zp() }),
  Bp = () => ({ min: 0, max: 0 }),
  ue = () => ({ x: Bp(), y: Bp() });
function nt(e) {
  return [e("x"), e("y")];
}
function x0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function VS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function zS(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function yl(e) {
  return e === void 0 || e === 1;
}
function Oc({ scale: e, scaleX: t, scaleY: n }) {
  return !yl(e) || !yl(t) || !yl(n);
}
function In(e) {
  return Oc(e) || w0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function w0(e) {
  return Up(e.x) || Up(e.y);
}
function Up(e) {
  return e && e !== "0%";
}
function Ys(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Wp(e, t, n, r, o) {
  return o !== void 0 && (e = Ys(e, o, r)), Ys(e, n, r) + t;
}
function Lc(e, t = 0, n = 1, r, o) {
  (e.min = Wp(e.min, t, n, r, o)), (e.max = Wp(e.max, t, n, r, o));
}
function b0(e, { x: t, y: n }) {
  Lc(e.x, t.translate, t.scale, t.originPoint), Lc(e.y, n.translate, n.scale, n.originPoint);
}
const Kp = 0.999999999999,
  Hp = 1.0000000000001;
function BS(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") || (r && i.options.layoutScroll && i.scroll && i !== i.root && Pr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }), s && ((t.x *= s.x.scale), (t.y *= s.y.scale), b0(e, s)), r && In(i.latestValues) && Pr(e, i.latestValues));
  }
  t.x < Hp && t.x > Kp && (t.x = 1), t.y < Hp && t.y > Kp && (t.y = 1);
}
function Er(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Gp(e, t, n, r, o = 0.5) {
  const i = oe(e.min, e.max, o);
  Lc(e, t, n, i, r);
}
function Pr(e, t) {
  Gp(e.x, t.x, t.scaleX, t.scale, t.originX), Gp(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function S0(e, t) {
  return x0(zS(e.getBoundingClientRect(), t));
}
function US(e, t, n) {
  const r = S0(e, n),
    { scroll: o } = t;
  return o && (Er(r.x, o.offset.x), Er(r.y, o.offset.y)), r;
}
const C0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  WS = new WeakMap();
class KS {
  constructor(t) {
    (this.openGlobalLock = null), (this.isDragging = !1), (this.currentDirection = null), (this.originPoint = { x: 0, y: 0 }), (this.constraints = !1), (this.hasMutatedConstraints = !1), (this.elastic = ue()), (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (u) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ka(u, "page").point);
      },
      i = (u, d) => {
        const { drag: p, dragPropagation: v, onDragStart: w } = this.getProps();
        if (p && !v && (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = m0(p)), !this.openGlobalLock)) return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection && ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
          nt((b) => {
            let h = this.getAxisMotionValue(b).get() || 0;
            if (Rt.test(h)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const y = m.layout.layoutBox[b];
                y && (h = Ze(y) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[b] = h;
          }),
          w && Q.postRender(() => w(u, d)),
          jc(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      s = (u, d) => {
        const { dragPropagation: p, dragDirectionLock: v, onDirectionLock: w, onDrag: x } = this.getProps();
        if (!p && !this.openGlobalLock) return;
        const { offset: b } = d;
        if (v && this.currentDirection === null) {
          (this.currentDirection = HS(b)), this.currentDirection !== null && w && w(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, b), this.updateAxis("y", d.point, b), this.visualElement.render(), x && x(u, d);
      },
      a = (u, d) => this.stop(u, d),
      l = () =>
        nt((u) => {
          var d;
          return this.getAnimationState(u) === "paused" && ((d = this.getAxisMotionValue(u).animation) === null || d === void 0 ? void 0 : d.play());
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new f0(t, { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a, resumeAnimation: l }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: c, contextWindow: C0(this.visualElement) });
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Q.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Ki(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = jS(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout,
      i = this.constraints;
    n && Sr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? (this.constraints = IS(o.layoutBox, n)) : (this.constraints = !1),
      (this.elastic = FS(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        nt((s) => {
          this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = LS(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Sr(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = US(r, o.root, this.visualElement.getTransformPagePoint());
    let s = DS(o.layout.layoutBox, i);
    if (n) {
      const a = n(VS(s));
      (this.hasMutatedConstraints = !!a), a && (s = x0(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(),
      l = this.constraints || {},
      c = nt((u) => {
        if (!Ki(u, n, this.currentDirection)) return;
        let d = (l && l[u]) || {};
        s && (d = { min: 0, max: 0 });
        const p = o ? 200 : 1e6,
          v = o ? 40 : 1e7,
          w = { type: "inertia", velocity: r ? t[u] : 0, bounceStiffness: p, bounceDamping: v, timeConstant: 750, restDelta: 1, restSpeed: 10, ...i, ...d };
        return this.startAxisValueAnimation(u, w);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return jc(this.visualElement, t), r.start(md(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    nt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    nt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    nt((n) => {
      const { drag: r } = this.getProps();
      if (!Ki(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - oe(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Sr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    nt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = OS({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      nt((s) => {
        if (!Ki(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: c } = this.constraints[s];
        a.set(oe(l, c, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    WS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Vt(t, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Sr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), Q.read(r);
    const s = Dt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
        this.isDragging &&
          c &&
          (nt((u) => {
            const d = this.getAxisMotionValue(u);
            d && ((this.originPoint[u] += l[u].translate), d.set(d.get() + l[u].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = Dc, dragMomentum: a = !0 } = t;
    return { ...t, drag: n, dragDirectionLock: r, dragPropagation: o, dragConstraints: i, dragElastic: s, dragMomentum: a };
  }
}
function Ki(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function HS(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class GS extends Mn {
  constructor(t) {
    super(t), (this.removeGroupControls = Pe), (this.removeListeners = Pe), (this.controls = new KS(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || Pe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Yp = (e) => (t, n) => {
  e && Q.postRender(() => e(t, n));
};
class YS extends Mn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Pe);
  }
  onPointerDown(t) {
    this.session = new f0(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: C0(this.node) });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Yp(t),
      onStart: Yp(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && Q.postRender(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Vt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const $a = f.createContext(null);
function XS() {
  const e = f.useContext($a);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = f.useId();
  f.useEffect(() => r(o), []);
  const i = f.useCallback(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const wd = f.createContext({}),
  E0 = f.createContext({}),
  ms = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Xp(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const uo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Xp(e, t.target.x),
        r = Xp(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  QS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = En.parse(e);
      if (o.length > 5) return r;
      const i = En.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const c = oe(a, l, 0.5);
      return typeof o[2 + s] == "number" && (o[2 + s] /= c), typeof o[3 + s] == "number" && (o[3 + s] /= c), i(o);
    },
  },
  Xs = {};
function qS(e) {
  Object.assign(Xs, e);
}
const { schedule: bd, cancel: rR } = Pv(queueMicrotask, !1);
class ZS extends f.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props,
      { projection: i } = t;
    qS(JS),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
      (ms.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Q.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      bd.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function P0(e) {
  const [t, n] = XS(),
    r = f.useContext(wd);
  return g.jsx(ZS, { ...e, layoutGroup: r, switchLayoutGroup: f.useContext(E0), isPresent: t, safeToRemove: n });
}
const JS = { borderRadius: { ...uo, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: uo, borderTopRightRadius: uo, borderBottomLeftRadius: uo, borderBottomRightRadius: uo, boxShadow: QS },
  T0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  eC = T0.length,
  Qp = (e) => (typeof e == "string" ? parseFloat(e) : e),
  qp = (e) => typeof e == "number" || D.test(e);
function tC(e, t, n, r, o, i) {
  o ? ((e.opacity = oe(0, n.opacity !== void 0 ? n.opacity : 1, nC(r))), (e.opacityExit = oe(t.opacity !== void 0 ? t.opacity : 1, 0, rC(r)))) : i && (e.opacity = oe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < eC; s++) {
    const a = `border${T0[s]}Radius`;
    let l = Zp(t, a),
      c = Zp(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || qp(l) === qp(c) ? ((e[a] = Math.max(oe(Qp(l), Qp(c), r), 0)), (Rt.test(c) || Rt.test(l)) && (e[a] += "%")) : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = oe(t.rotate || 0, n.rotate || 0, r));
}
function Zp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const nC = k0(0, 0.5, Av),
  rC = k0(0.5, 0.95, Pe);
function k0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Br(e, t, r)));
}
function Jp(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function tt(e, t) {
  Jp(e.x, t.x), Jp(e.y, t.y);
}
function eh(e, t) {
  (e.translate = t.translate), (e.scale = t.scale), (e.originPoint = t.originPoint), (e.origin = t.origin);
}
function th(e, t, n, r, o) {
  return (e -= t), (e = Ys(e, 1 / n, r)), o !== void 0 && (e = Ys(e, 1 / o, r)), e;
}
function oC(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if ((Rt.test(t) && ((t = parseFloat(t)), (t = oe(s.min, s.max, t / 100) - s.min)), typeof t != "number")) return;
  let a = oe(i.min, i.max, r);
  e === i && (a -= t), (e.min = th(e.min, t, n, a, o)), (e.max = th(e.max, t, n, a, o));
}
function nh(e, t, [n, r, o], i, s) {
  oC(e, t[n], t[r], t[o], t.scale, i, s);
}
const iC = ["x", "scaleX", "originX"],
  sC = ["y", "scaleY", "originY"];
function rh(e, t, n, r) {
  nh(e.x, t, iC, n ? n.x : void 0, r ? r.x : void 0), nh(e.y, t, sC, n ? n.y : void 0, r ? r.y : void 0);
}
function oh(e) {
  return e.translate === 0 && e.scale === 1;
}
function $0(e) {
  return oh(e.x) && oh(e.y);
}
function ih(e, t) {
  return e.min === t.min && e.max === t.max;
}
function aC(e, t) {
  return ih(e.x, t.x) && ih(e.y, t.y);
}
function sh(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function R0(e, t) {
  return sh(e.x, t.x) && sh(e.y, t.y);
}
function ah(e) {
  return Ze(e.x) / Ze(e.y);
}
function lh(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class lC {
  constructor() {
    this.members = [];
  }
  add(t) {
    gd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ((vd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), (t.resumeFrom = r), n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function cC(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n)) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: p, skewX: v, skewY: w } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), d && (r += `rotateX(${d}deg) `), p && (r += `rotateY(${p}deg) `), v && (r += `skewX(${v}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const uC = (e, t) => e.depth - t.depth;
class dC {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    gd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    vd(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(uC), (this.isDirty = !1), this.children.forEach(t);
  }
}
function gs(e) {
  const t = Me(e) ? e.get() : e;
  return nS(t) ? t.toValue() : t;
}
function fC(e, t) {
  const n = Nt.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Sn(r), e(i - t));
    };
  return Q.read(r, !0), () => Sn(r);
}
function pC(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function hC(e, t, n) {
  const r = Me(e) ? e : Jo(e);
  return r.start(md("", r, t, n)), r.animation;
}
const Dn = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 },
  xo = typeof window < "u" && window.MotionDebug !== void 0,
  xl = ["", "X", "Y", "Z"],
  mC = { visibility: "hidden" },
  ch = 1e3;
let gC = 0;
function wl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function N0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = l0(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Q, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && N0(r);
}
function M0({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = gC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1), xo && (Dn.totalNodes = Dn.resolvedTargetDeltas = Dn.recalculatedProjection = 0), this.nodes.forEach(xC), this.nodes.forEach(EC), this.nodes.forEach(PC), this.nodes.forEach(wC), xo && window.MotionDebug.record(Dn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new dC());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new yd()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = pC(s)), (this.instance = s);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if ((u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e)) {
        let d;
        const p = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0), d && d(), (d = fC(p, 250)), ms.hasAnimatedSinceResize && ((ms.hasAnimatedSinceResize = !1), this.nodes.forEach(dh));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: p, hasRelativeTargetChanged: v, layout: w }) => {
            if (this.isTreeAnimationBlocked()) {
              (this.target = void 0), (this.relativeTarget = void 0);
              return;
            }
            const x = this.options.transition || u.getDefaultTransition() || NC,
              { onLayoutAnimationStart: b, onLayoutAnimationComplete: h } = u.getProps(),
              m = !this.targetLayout || !R0(this.targetLayout, w) || v,
              y = !p && v;
            if (this.options.layoutRoot || (this.resumeFrom && this.resumeFrom.instance) || y || (p && (m || !this.currentAnimation))) {
              this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)), this.setAnimationOrigin(d, y);
              const S = { ...td(x, "layout"), onPlay: b, onComplete: h };
              (u.shouldReduceMotion || this.options.layoutRoot) && ((S.delay = 0), (S.type = !1)), this.startAnimation(S);
            } else p || dh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
            this.targetLayout = w;
          });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), Sn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(TC), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if ((window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && N0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (d.shouldResetTransform = !0), d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0), this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(uh);
        return;
      }
      this.isUpdating || this.nodes.forEach(SC), (this.isUpdating = !1), this.nodes.forEach(CC), this.nodes.forEach(vC), this.nodes.forEach(yC), this.clearAllSnapshots();
      const a = Nt.now();
      (Se.delta = Cn(0, 1e3 / 60, a - Se.timestamp)), (Se.timestamp = a), (Se.isProcessing = !0), dl.update.process(Se), dl.preRender.process(Se), dl.render.process(Se), (Se.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), bd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(bC), this.sharedNodes.forEach(kC);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || ((this.projectionUpdateScheduled = !0), Q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Q.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)), (this.layoutCorrected = ue()), (this.isLayoutDirty = !1), (this.projectionDelta = void 0), this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if ((this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a)) {
        const l = r(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: s, isRoot: l, offset: n(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : l };
      }
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !$0(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      s && (a || In(this.latestValues) || u) && (o(this.instance, c), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), MC(l), { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return ue();
      const l = a.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(AC))) {
        const { scroll: u } = this.root;
        u && (Er(l.x, u.offset.x), Er(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = ue();
      if ((tt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)) return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: d, options: p } = u;
        u !== this.root && d && p.layoutScroll && (d.wasRoot && tt(l, s), Er(l.x, d.offset.x), Er(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = ue();
      tt(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Pr(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }), In(u.latestValues) && Pr(l, u.latestValues);
      }
      return In(this.latestValues) && Pr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ue();
      tt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !In(c.latestValues)) continue;
        Oc(c.latestValues) && c.updateSnapshot();
        const u = ue(),
          d = c.measurePageBox();
        tt(u, d), rh(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return In(this.latestValues) && rh(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = { ...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0 };
    }
    clearMeasurements() {
      (this.scroll = void 0), (this.layout = void 0), (this.snapshot = void 0), (this.prevTransformTemplateValue = void 0), (this.targetDelta = void 0), (this.target = void 0), (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Se.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(s || (c && this.isSharedProjectionDirty) || this.isProjectionDirty || (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const { layout: d, layoutId: p } = this.options;
      if (!(!this.layout || !(d || p))) {
        if (((this.resolvedRelativeTargetAt = Se.timestamp), !this.targetDelta && !this.relativeTarget)) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1 ? ((this.relativeParent = v), this.forceRelativeParentToResolveTarget(), (this.relativeTarget = ue()), (this.relativeTargetOrigin = ue()), Ao(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox), tt(this.relativeTarget, this.relativeTargetOrigin)) : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if ((this.target || ((this.target = ue()), (this.targetWithTransforms = ue())), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), _S(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? (this.target = this.applyTransform(this.layout.layoutBox)) : tt(this.target, this.layout.layoutBox), b0(this.target, this.targetDelta)) : tt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? ((this.relativeParent = v), this.forceRelativeParentToResolveTarget(), (this.relativeTarget = ue()), (this.relativeTargetOrigin = ue()), Ao(this.relativeTargetOrigin, this.target, v.target), tt(this.relativeTarget, this.relativeTargetOrigin)) : (this.relativeParent = this.relativeTarget = void 0);
          }
          xo && Dn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Oc(this.parent.latestValues) || w0(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (((this.isProjectionDirty || (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty)) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Se.timestamp && (c = !1), c)) return;
      const { layout: u, layoutId: d } = this.options;
      if (((this.isTreeAnimating = !!((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))) return;
      tt(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x,
        v = this.treeScale.y;
      BS(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ue()));
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (eh(this.prevProjectionDelta.x, this.projectionDelta.x), eh(this.prevProjectionDelta.y, this.projectionDelta.y)), Mo(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== v || !lh(this.projectionDelta.x, this.prevProjectionDelta.x) || !lh(this.projectionDelta.y, this.prevProjectionDelta.y)) && ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), xo && Dn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Cr()), (this.projectionDelta = Cr()), (this.projectionDeltaWithTransform = Cr());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        d = Cr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !a);
      const p = ue(),
        v = l ? l.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        x = v !== w,
        b = this.getStack(),
        h = !b || b.members.length <= 1,
        m = !!(x && !h && this.options.crossfade === !0 && !this.path.some(RC));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        fh(d.x, s.x, C), fh(d.y, s.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ao(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), $C(this.relativeTarget, this.relativeTargetOrigin, p, C), y && aC(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = ue()), tt(y, this.relativeTarget)), x && ((this.animationValues = u), tC(u, c, this.latestValues, C, m, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (Sn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Q.update(() => {
          (ms.hasAnimatedSinceResize = !0),
            (this.currentAnimation = hC(0, ch, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(), (this.resumingFrom = this.currentAnimation = this.animationValues = void 0), this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ch), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (this !== s && this.layout && c && A0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ue();
          const d = Ze(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const p = Ze(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + p);
        }
        tt(a, l), Pr(a, u), Mo(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new lC()), this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({ transition: c ? c.transition : void 0, preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0 });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), s && ((this.projectionDelta = void 0), (this.needsReset = !0)), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)) return;
      const c = {};
      l.z && wl("z", s, c, this.animationValues);
      for (let u = 0; u < xl.length; u++) wl(`rotate${xl[u]}`, s, c, this.animationValues), wl(`skew${xl[u]}`, s, c, this.animationValues);
      s.render();
      for (const u in c) s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return mC;
      const c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset) return (this.needsReset = !1), (c.opacity = ""), (c.pointerEvents = gs(s == null ? void 0 : s.pointerEvents) || ""), (c.transform = u ? u(this.latestValues, "") : "none"), c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return this.options.layoutId && ((x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1), (x.pointerEvents = gs(s == null ? void 0 : s.pointerEvents) || "")), this.hasProjected && !In(this.latestValues) && ((x.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)), x;
      }
      const p = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), (c.transform = cC(this.projectionDeltaWithTransform, this.treeScale, p)), u && (c.transform = u(p, c.transform));
      const { x: v, y: w } = this.projectionDelta;
      (c.transformOrigin = `${v.origin * 100}% ${w.origin * 100}% 0`), d.animationValues ? (c.opacity = d === this ? ((l = (a = p.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1) : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit) : (c.opacity = d === this ? (p.opacity !== void 0 ? p.opacity : "") : p.opacityExit !== void 0 ? p.opacityExit : 0);
      for (const x in Xs) {
        if (p[x] === void 0) continue;
        const { correct: b, applyTo: h } = Xs[x],
          m = c.transform === "none" ? p[x] : b(p[x], d);
        if (h) {
          const y = h.length;
          for (let S = 0; S < y; S++) c[h[S]] = m;
        } else c[x] = m;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? gs(s == null ? void 0 : s.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(uh),
        this.root.sharedNodes.clear();
    }
  };
}
function vC(e) {
  e.updateLayout();
}
function yC(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? nt((d) => {
          const p = s ? n.measuredBox[d] : n.layoutBox[d],
            v = Ze(p);
          (p.min = r[d].min), (p.max = p.min + v);
        })
      : A0(i, n.layoutBox, r) &&
        nt((d) => {
          const p = s ? n.measuredBox[d] : n.layoutBox[d],
            v = Ze(r[d]);
          (p.max = p.min + v), e.relativeTarget && !e.currentAnimation && ((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + v));
        });
    const a = Cr();
    Mo(a, r, n.layoutBox);
    const l = Cr();
    s ? Mo(l, e.applyTransform(o, !0), n.measuredBox) : Mo(l, r, n.layoutBox);
    const c = !$0(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: p, layout: v } = d;
        if (p && v) {
          const w = ue();
          Ao(w, n.layoutBox, p.layoutBox);
          const x = ue();
          Ao(x, r, v.layoutBox), R0(w, x) || (u = !0), d.options.layoutRoot && ((e.relativeTarget = x), (e.relativeTargetOrigin = w), (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", { layout: r, snapshot: n, delta: l, layoutDelta: a, hasLayoutChanged: c, hasRelativeTargetChanged: u });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function xC(e) {
  xo && Dn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function wC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function bC(e) {
  e.clearSnapshot();
}
function uh(e) {
  e.clearMeasurements();
}
function SC(e) {
  e.isLayoutDirty = !1;
}
function CC(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function dh(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
}
function EC(e) {
  e.resolveTargetDelta();
}
function PC(e) {
  e.calcProjection();
}
function TC(e) {
  e.resetSkewAndRotation();
}
function kC(e) {
  e.removeLeadSnapshot();
}
function fh(e, t, n) {
  (e.translate = oe(t.translate, 0, n)), (e.scale = oe(t.scale, 1, n)), (e.origin = t.origin), (e.originPoint = t.originPoint);
}
function ph(e, t, n, r) {
  (e.min = oe(t.min, n.min, r)), (e.max = oe(t.max, n.max, r));
}
function $C(e, t, n, r) {
  ph(e.x, t.x, n.x, r), ph(e.y, t.y, n.y, r);
}
function RC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const NC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  hh = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  mh = hh("applewebkit/") && !hh("chrome/") ? Math.round : Pe;
function gh(e) {
  (e.min = mh(e.min)), (e.max = mh(e.max));
}
function MC(e) {
  gh(e.x), gh(e.y);
}
function A0(e, t, n) {
  return e === "position" || (e === "preserve-aspect" && !AS(ah(t), ah(n), 0.2));
}
function AC(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const _C = M0({ attachResizeListener: (e, t) => Dt(e, "resize", t), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => !0 }),
  bl = { current: void 0 },
  _0 = M0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!bl.current) {
        const e = new _C({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (bl.current = e);
      }
      return bl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  jC = { pan: { Feature: YS }, drag: { Feature: GS, ProjectionNode: _0, MeasureLayout: P0 } };
function vh(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    o = (i, s) => {
      if (i.pointerType === "touch" || g0()) return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && Q.postRender(() => l(i, s));
    };
  return Vt(e.current, n, o, { passive: !e.getProps()[r] });
}
class IC extends Mn {
  mount() {
    this.unmount = Ft(vh(this.node, !0), vh(this.node, !1));
  }
  unmount() {}
}
class DC extends Mn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Ft(
      Dt(this.node.current, "focus", () => this.onFocus()),
      Dt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const j0 = (e, t) => (t ? (e === t ? !0 : j0(e, t.parentElement)) : !1);
function Sl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, ka(n));
}
class OC extends Mn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Pe),
      (this.removeEndListeners = Pe),
      (this.removeAccessibleListeners = Pe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = Vt(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: c, onTapCancel: u, globalTapTarget: d } = this.node.getProps(),
                p = !d && !j0(this.node.current, a.target) ? u : c;
              p && Q.update(() => p(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Vt(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
        (this.removeEndListeners = Ft(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Sl("up", (l, c) => {
                  const { onTap: u } = this.node.getProps();
                  u && Q.postRender(() => u(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Dt(this.node.current, "keyup", s)),
              Sl("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Dt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Sl("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = Dt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Ft(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && Q.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), (this.isPressing = !1), this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !g0();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Q.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Vt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }),
      r = Dt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Ft(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Fc = new WeakMap(),
  Cl = new WeakMap(),
  LC = (e) => {
    const t = Fc.get(e.target);
    t && t(e);
  },
  FC = (e) => {
    e.forEach(LC);
  };
function VC({ root: e, ...t }) {
  const n = e || document;
  Cl.has(n) || Cl.set(n, {});
  const r = Cl.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(FC, { root: e, ...t })), r[o];
}
function zC(e, t, n) {
  const r = VC(t);
  return (
    Fc.set(e, n),
    r.observe(e),
    () => {
      Fc.delete(e), r.unobserve(e);
    }
  );
}
const BC = { some: 0, all: 1 };
class UC extends Mn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof o == "number" ? o : BC[o] },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (this.isInView === c || ((this.isInView = c), i && !c && this.hasEnteredView)) return;
        c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(),
          p = c ? u : d;
        p && p(l);
      };
    return zC(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(WC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function WC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const KC = { inView: { Feature: UC }, tap: { Feature: OC }, focus: { Feature: DC }, hover: { Feature: IC } },
  HC = { layout: { ProjectionNode: _0, MeasureLayout: P0 } },
  Sd = f.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" }),
  Ra = f.createContext({}),
  Cd = typeof window < "u",
  I0 = Cd ? f.useLayoutEffect : f.useEffect,
  D0 = f.createContext({ strict: !1 });
function GC(e, t, n, r, o) {
  var i, s;
  const { visualElement: a } = f.useContext(Ra),
    l = f.useContext(D0),
    c = f.useContext($a),
    u = f.useContext(Sd).reducedMotion,
    d = f.useRef();
  (r = r || l.renderer), !d.current && r && (d.current = r(e, { visualState: t, parent: a, props: n, presenceContext: c, blockInitialAnimation: c ? c.initial === !1 : !1, reducedMotionConfig: u }));
  const p = d.current,
    v = f.useContext(E0);
  p && !p.projection && o && (p.type === "html" || p.type === "svg") && YC(d.current, n, o, v);
  const w = f.useRef(!1);
  f.useInsertionEffect(() => {
    p && w.current && p.update(n, c);
  });
  const x = n[a0],
    b = f.useRef(!!x && !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, x)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, x)));
  return (
    I0(() => {
      p && ((w.current = !0), (window.MotionIsMounted = !0), p.updateFeatures(), bd.render(p.render), b.current && p.animationState && p.animationState.animateChanges());
    }),
    f.useEffect(() => {
      p &&
        (!b.current && p.animationState && p.animationState.animateChanges(),
        b.current &&
          (queueMicrotask(() => {
            var h;
            (h = window.MotionHandoffMarkAsComplete) === null || h === void 0 || h.call(window, x);
          }),
          (b.current = !1)));
    }),
    p
  );
}
function YC(e, t, n, r) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  (e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : O0(e.parent))), e.projection.setOptions({ layoutId: o, layout: i, alwaysMeasureLayout: !!s || (a && Sr(a)), visualElement: e, animationType: typeof i == "string" ? i : "both", initialPromotionConfig: r, layoutScroll: l, layoutRoot: c });
}
function O0(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : O0(e.parent);
}
function XC(e, t, n) {
  return f.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Sr(n) && (n.current = r));
    },
    [t]
  );
}
function Na(e) {
  return Ea(e.animate) || ed.some((t) => Qo(e[t]));
}
function L0(e) {
  return !!(Na(e) || e.variants);
}
function QC(e, t) {
  if (Na(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || Qo(n) ? n : void 0, animate: Qo(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function qC(e) {
  const { initial: t, animate: n } = QC(e, f.useContext(Ra));
  return f.useMemo(() => ({ initial: t, animate: n }), [yh(t), yh(n)]);
}
function yh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const xh = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] },
  Ur = {};
for (const e in xh) Ur[e] = { isEnabled: (t) => xh[e].some((n) => !!t[n]) };
function ZC(e) {
  for (const t in e) Ur[t] = { ...Ur[t], ...e[t] };
}
const JC = Symbol.for("motionComponentSymbol");
function eE({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && ZC(e);
  function i(a, l) {
    let c;
    const u = { ...f.useContext(Sd), ...a, layoutId: tE(a) },
      { isStatic: d } = u,
      p = qC(a),
      v = r(a, d);
    if (!d && Cd) {
      nE();
      const w = rE(u);
      (c = w.MeasureLayout), (p.visualElement = GC(o, v, u, t, w.ProjectionNode));
    }
    return g.jsxs(Ra.Provider, { value: p, children: [c && p.visualElement ? g.jsx(c, { visualElement: p.visualElement, ...u }) : null, n(o, a, XC(v, p.visualElement, l), v, d, p.visualElement)] });
  }
  const s = f.forwardRef(i);
  return (s[JC] = o), s;
}
function tE({ layoutId: e }) {
  const t = f.useContext(wd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function nE(e, t) {
  f.useContext(D0).strict;
}
function rE(e) {
  const { drag: t, layout: n } = Ur;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return { MeasureLayout: (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e)) ? r.MeasureLayout : void 0, ProjectionNode: r.ProjectionNode };
}
const oE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ed(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(oE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function F0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const V0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function z0(e, t, n, r) {
  F0(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(V0.has(o) ? o : xd(o), t.attrs[o]);
}
function B0(e, { layout: t, layoutId: n }) {
  return Jn.has(e) || e.startsWith("origin") || ((t || n !== void 0) && (!!Xs[e] || e === "opacity"));
}
function Pd(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o) (Me(o[s]) || (t.style && Me(t.style[s])) || B0(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[s] = o[s]);
  return i;
}
function U0(e, t, n) {
  const r = Pd(e, t, n);
  for (const o in e)
    if (Me(e[o]) || Me(t[o])) {
      const i = hi.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
function Td(e) {
  const t = f.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function iE({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const s = { latestValues: sE(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const W0 = (e) => (t, n) => {
  const r = f.useContext(Ra),
    o = f.useContext($a),
    i = () => iE(e, t, r, o);
  return n ? i() : Td(i);
};
function sE(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const p in i) o[p] = gs(i[p]);
  let { initial: s, animate: a } = e;
  const l = Na(e),
    c = L0(e);
  t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  const d = u ? a : s;
  if (d && typeof d != "boolean" && !Ea(d)) {
    const p = Array.isArray(d) ? d : [d];
    for (let v = 0; v < p.length; v++) {
      const w = Zu(e, p[v]);
      if (w) {
        const { transitionEnd: x, transition: b, ...h } = w;
        for (const m in h) {
          let y = h[m];
          if (Array.isArray(y)) {
            const S = u ? y.length - 1 : 0;
            y = y[S];
          }
          y !== null && (o[m] = y);
        }
        for (const m in x) o[m] = x[m];
      }
    }
  }
  return o;
}
const kd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  K0 = () => ({ ...kd(), attrs: {} }),
  H0 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  aE = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  lE = hi.length;
function cE(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < lE; i++) {
    const s = hi[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if ((typeof a == "number" ? (l = a === (s.startsWith("scale") ? 1 : 0)) : (l = parseFloat(a) === 0), !l || n)) {
      const c = H0(a, ld[s]);
      if (!l) {
        o = !1;
        const u = aE[s] || s;
        r += `${u}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
function $d(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (Jn.has(l)) {
      s = !0;
      continue;
    } else if (Lv(l)) {
      o[l] = c;
      continue;
    } else {
      const u = H0(c, ld[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = u)) : (r[l] = u);
    }
  }
  if ((t.transform || (s || n ? (r.transform = cE(t, e.transform, n)) : r.transform && (r.transform = "none")), a)) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
function wh(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function uE(e, t, n) {
  const r = wh(t, e.x, e.width),
    o = wh(n, e.y, e.height);
  return `${r} ${o}`;
}
const dE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  fE = { offset: "strokeDashoffset", array: "strokeDasharray" };
function pE(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? dE : fE;
  e[i.offset] = D.transform(-r);
  const s = D.transform(t),
    a = D.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Rd(e, { attrX: t, attrY: n, attrScale: r, originX: o, originY: i, pathLength: s, pathSpacing: a = 1, pathOffset: l = 0, ...c }, u, d) {
  if (($d(e, c, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: p, style: v, dimensions: w } = e;
  p.transform && (w && (v.transform = p.transform), delete p.transform), w && (o !== void 0 || i !== void 0 || v.transform) && (v.transformOrigin = uE(w, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), s !== void 0 && pE(p, s, a, l, !1);
}
const Nd = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  hE = {
    useVisualState: W0({
      scrapeMotionValuesFromProps: U0,
      createRenderState: K0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Q.read(() => {
          try {
            n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Q.render(() => {
            Rd(n, r, Nd(t.tagName), e.transformTemplate), z0(t, n);
          });
      },
    }),
  },
  mE = { useVisualState: W0({ scrapeMotionValuesFromProps: Pd, createRenderState: kd }) };
function G0(e, t, n) {
  for (const r in t) !Me(t[r]) && !B0(r, n) && (e[r] = t[r]);
}
function gE({ transformTemplate: e }, t) {
  return f.useMemo(() => {
    const n = kd();
    return $d(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function vE(e, t) {
  const n = e.style || {},
    r = {};
  return G0(r, n, e), Object.assign(r, gE(e, t)), r;
}
function yE(e, t) {
  const n = {},
    r = vE(e, t);
  return e.drag && e.dragListener !== !1 && ((n.draggable = !1), (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"), (r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), (n.style = r), n;
}
const xE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Qs(e) {
  return e.startsWith("while") || (e.startsWith("drag") && e !== "draggable") || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || xE.has(e);
}
let Y0 = (e) => !Qs(e);
function wE(e) {
  e && (Y0 = (t) => (t.startsWith("on") ? !Qs(t) : e(t)));
}
try {
  wE(require("@emotion/is-prop-valid").default);
} catch {}
function bE(e, t, n) {
  const r = {};
  for (const o in e) (o === "values" && typeof e.values == "object") || ((Y0(o) || (n === !0 && Qs(o)) || (!t && !Qs(o)) || (e.draggable && o.startsWith("onDrag"))) && (r[o] = e[o]));
  return r;
}
function SE(e, t, n, r) {
  const o = f.useMemo(() => {
    const i = K0();
    return Rd(i, t, Nd(r), e.transformTemplate), { ...i.attrs, style: { ...i.style } };
  }, [t]);
  if (e.style) {
    const i = {};
    G0(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function CE(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (Ed(n) ? SE : yE)(r, i, s, n),
      c = bE(r, typeof n == "string", e),
      u = n !== f.Fragment ? { ...c, ...l, ref: o } : {},
      { children: d } = r,
      p = f.useMemo(() => (Me(d) ? d.get() : d), [d]);
    return f.createElement(n, { ...u, children: p });
  };
}
function EE(e, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = { ...(Ed(r) ? hE : mE), preloadedFeatures: e, useRender: CE(o), createVisualElement: t, Component: r };
    return eE(s);
  };
}
const Vc = { current: null },
  X0 = { current: !1 };
function PE() {
  if (((X0.current = !0), !!Cd))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Vc.current = e.matches);
      e.addListener(t), t();
    } else Vc.current = !1;
}
function TE(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (Me(o)) e.addValue(r, o);
    else if (Me(i)) e.addValue(r, Jo(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Jo(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const bh = new WeakMap(),
  kE = [...zv, Re, En],
  $E = (e) => kE.find(Vv(e)),
  Sh = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class RE {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: i, visualState: s }, a = {}) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = id),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const p = Nt.now();
        this.renderScheduledAt < p && ((this.renderScheduledAt = p), Q.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c } = s;
    (this.latestValues = l), (this.baseTarget = { ...l }), (this.initialValues = n.initial ? { ...l } : {}), (this.renderState = c), (this.parent = t), (this.props = n), (this.presenceContext = r), (this.depth = t ? t.depth + 1 : 0), (this.reducedMotionConfig = o), (this.options = a), (this.blockInitialAnimation = !!i), (this.isControllingVariants = Na(n)), (this.isVariantNode = L0(n)), this.isVariantNode && (this.variantChildren = new Set()), (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in d) {
      const v = d[p];
      l[p] !== void 0 && Me(v) && v.set(l[p], !1);
    }
  }
  mount(t) {
    (this.current = t), bh.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), X0.current || PE(), (this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Vc.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    bh.delete(this.current), this.projection && this.projection.unmount(), Sn(this.notifyUpdate), Sn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Jn.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a), this.props.onUpdate && Q.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), i(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ur) {
      const n = Ur[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if ((!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t])) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ue();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), (this.prevProps = this.props), (this.props = t), (this.prevPresenceContext = this.presenceContext), (this.presenceContext = n);
    for (let r = 0; r < Sh.length; r++) {
      const o = Sh[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = TE(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues)), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && ((r = Jo(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)), r;
  }
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Dv(o) || jv(o)) ? (o = parseFloat(o)) : !$E(o) && En.test(n) && (o = Xv(t, n)), this.setBaseTarget(t, Me(o) ? o.get() : o)), Me(o) ? o.get() : o;
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = Zu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Me(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new yd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Q0 extends RE {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Qv);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function NE(e) {
  return window.getComputedStyle(e);
}
class ME extends Q0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = F0);
  }
  readValueFromInstance(t, n) {
    if (Jn.has(n)) {
      const r = cd(n);
      return (r && r.default) || 0;
    } else {
      const r = NE(t),
        o = (Lv(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return S0(t, n);
  }
  build(t, n, r) {
    $d(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Pd(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Me(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class AE extends Q0 {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = ue);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Jn.has(n)) {
      const r = cd(n);
      return (r && r.default) || 0;
    }
    return (n = V0.has(n) ? n : xd(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return U0(t, n, r);
  }
  build(t, n, r) {
    Rd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    z0(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Nd(t.tagName)), super.mount(t);
  }
}
const _E = (e, t) => (Ed(e) ? new AE(t) : new ME(t, { allowProjection: e !== f.Fragment })),
  jE = EE({ ...CS, ...KC, ...jC, ...HC }, _E),
  Y = p2(jE);
class IE extends f.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0), (r.width = n.offsetWidth || 0), (r.top = n.offsetTop), (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function DE({ children: e, isPresent: t }) {
  const n = f.useId(),
    r = f.useRef(null),
    o = f.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = f.useContext(Sd);
  return (
    f.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: c } = o.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        i && (u.nonce = i),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    g.jsx(IE, { isPresent: t, childRef: r, sizeRef: o, children: f.cloneElement(e, { ref: r }) })
  );
}
const OE = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: s }) => {
  const a = Td(LE),
    l = f.useId(),
    c = f.useCallback(
      (d) => {
        a.set(d, !0);
        for (const p of a.values()) if (!p) return;
        r && r();
      },
      [a, r]
    ),
    u = f.useMemo(() => ({ id: l, initial: t, isPresent: n, custom: o, onExitComplete: c, register: (d) => (a.set(d, !1), () => a.delete(d)) }), i ? [Math.random(), c] : [n, c]);
  return (
    f.useMemo(() => {
      a.forEach((d, p) => a.set(p, !1));
    }, [n]),
    f.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = g.jsx(DE, { isPresent: n, children: e })),
    g.jsx($a.Provider, { value: u, children: e })
  );
};
function LE() {
  return new Map();
}
const Hi = (e) => e.key || "";
function Ch(e) {
  const t = [];
  return (
    f.Children.forEach(e, (n) => {
      f.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const qs = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: o, presenceAffectsLayout: i = !0, mode: s = "sync" }) => {
    const a = f.useMemo(() => Ch(e), [e]),
      l = a.map(Hi),
      c = f.useRef(!0),
      u = f.useRef(a),
      d = Td(() => new Map()),
      [p, v] = f.useState(a),
      [w, x] = f.useState(a);
    I0(() => {
      (c.current = !1), (u.current = a);
      for (let m = 0; m < w.length; m++) {
        const y = Hi(w[m]);
        l.includes(y) ? d.delete(y) : d.get(y) !== !0 && d.set(y, !1);
      }
    }, [w, l.length, l.join("-")]);
    const b = [];
    if (a !== p) {
      let m = [...a];
      for (let y = 0; y < w.length; y++) {
        const S = w[y],
          C = Hi(S);
        l.includes(C) || (m.splice(y, 0, S), b.push(S));
      }
      s === "wait" && b.length && (m = b), x(Ch(m)), v(a);
      return;
    }
    const { forceRender: h } = f.useContext(wd);
    return g.jsx(g.Fragment, {
      children: w.map((m) => {
        const y = Hi(m),
          S = a === w || l.includes(y),
          C = () => {
            if (d.has(y)) d.set(y, !0);
            else return;
            let E = !0;
            d.forEach((T) => {
              T || (E = !1);
            }),
              E && (h == null || h(), x(u.current), o && o());
          };
        return g.jsx(OE, { isPresent: S, initial: !c.current || r ? void 0 : !1, custom: S ? void 0 : n, presenceAffectsLayout: i, mode: s, onExitComplete: S ? void 0 : C, children: m }, y);
      }),
    });
  },
  FE = () => {
    const e = [
      { title: "Image Generation", description: "Access to 10+ state-of-the-art AI image generation models in one unified interface", icon: "🎨", gradient: "from-fuchsia-600 to-pink-600", delay: 0.2 },
      { title: "Music Generation", description: "Create original music and audio with cutting-edge AI music generation tools", icon: "🎵", gradient: "from-rose-600 to-orange-600", delay: 0.3 },
      { title: "Video Generation", description: "Transform ideas into stunning videos using advanced AI video generation models", icon: "🎬", gradient: "from-orange-600 to-amber-600", delay: 0.4 },
      { title: "Prompt Marketplace", description: "Community-driven exchange of creative prompts and workflows", icon: "💡", gradient: "from-pink-600 to-rose-600", comingSoon: !0, delay: 0.5 },
    ];
    return g.jsxs("section", {
      id: "about",
      className: "relative min-h-screen py-32",
      children: [
        g.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [g.jsx("div", { className: "absolute w-[500px] h-[500px] -left-48 top-0 bg-rose-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" }), g.jsx("div", { className: "absolute w-[500px] h-[500px] -right-48 top-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" }), g.jsx("div", { className: "absolute w-[500px] h-[500px] left-48 bottom-0 bg-fuchsia-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" })] }),
        g.jsxs("div", {
          className: "container mx-auto px-4 relative",
          children: [
            g.jsxs("div", { className: "max-w-5xl mx-auto text-center mb-24", children: [g.jsxs(Y.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-6xl md:text-7xl font-bold mb-10", children: [g.jsx("span", { className: "bg-gradient-to-r from-rose-700 via-rose-500 to-rose-700 text-transparent bg-clip-text", children: "About" }), " ", g.jsxs("span", { className: "relative inline-block", children: ["CosmicAI", g.jsx("div", { className: "absolute -inset-2 bg-rose-500/10 blur-xl rounded-full" })] })] }), g.jsx(Y.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, className: "space-y-6", children: g.jsx("p", { className: "text-2xl text-muted-foreground leading-relaxed", children: "CosmicAI is a trailblazing all-in-one AI creativity platform that empowers creators by aggregating a wide range of generative AI tools for images, videos, and music into a unified, web3-powered interface." }) })] }),
            g.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto",
              children: e.map((t) =>
                g.jsxs(
                  Y.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: t.delay },
                    className: "relative group",
                    children: [
                      g.jsx("div", {
                        className: `absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 
                rounded-3xl transition-all duration-500 blur-xl`,
                      }),
                      g.jsxs("div", {
                        className: `relative p-10 rounded-3xl border border-rose-500/10 backdrop-blur-sm 
                bg-white/5 hover:bg-white/10 transition-all duration-500
                hover:border-rose-500/20 group overflow-hidden`,
                        children: [
                          t.comingSoon &&
                            g.jsx("div", {
                              className: `absolute -right-16 top-8 rotate-45 bg-gradient-to-r from-rose-500 to-pink-500 
                    px-16 py-2 text-sm font-semibold text-white tracking-wider`,
                              children: "COMING SOON",
                            }),
                          g.jsxs("div", {
                            className: "flex items-start gap-6",
                            children: [
                              g.jsx("span", { className: "text-4xl", children: t.icon }),
                              g.jsxs("div", {
                                className: "space-y-3 flex-1",
                                children: [
                                  g.jsxs("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                      g.jsx("h3", {
                                        className: `text-2xl font-semibold text-white group-hover:text-rose-400 
                        transition-colors duration-300`,
                                        children: t.title,
                                      }),
                                      t.title === "Image Generation" &&
                                        g.jsx("span", {
                                          className: `px-4 py-1.5 text-sm font-medium text-rose-400 
                          bg-rose-500/10 rounded-full border border-rose-500/20`,
                                          children: "10+ Models",
                                        }),
                                    ],
                                  }),
                                  g.jsx("p", {
                                    className: `text-lg text-muted-foreground group-hover:text-gray-300 transition-colors duration-300 
                      leading-relaxed`,
                                    children: t.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  t.title
                )
              ),
            }),
          ],
        }),
      ],
    });
  };
var q0 = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  Eh = fe.createContext && fe.createContext(q0),
  VE = ["attr", "size", "title"];
function zE(e, t) {
  if (e == null) return {};
  var n = BE(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++) (r = i[o]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function BE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Zs() {
  return (
    (Zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zs.apply(this, arguments)
  );
}
function Ph(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ph(Object(n), !0).forEach(function (r) {
          UE(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ph(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function UE(e, t, n) {
  return (t = WE(t)), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function WE(e) {
  var t = KE(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function KE(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z0(e) {
  return e && e.map((t, n) => fe.createElement(t.tag, Js({ key: n }, t.attr), Z0(t.child)));
}
function er(e) {
  return (t) => fe.createElement(HE, Zs({ attr: Js({}, e.attr) }, t), Z0(e.child));
}
function HE(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      s = zE(e, VE),
      a = o || n.size || "1em",
      l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), fe.createElement("svg", Zs({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, r, s, { className: l, style: Js(Js({ color: e.color || n.color }, n.style), e.style), height: a, width: a, xmlns: "http://www.w3.org/2000/svg" }), i && fe.createElement("title", null, i), e.children);
  };
  return Eh !== void 0 ? fe.createElement(Eh.Consumer, null, (n) => t(n)) : t(q0);
}
function GE(e) {
  return er({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" }, child: [] }] })(e);
}
function YE(e) {
  return er({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" }, child: [] }] })(e);
}
function XE(e) {
  return er({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" }, child: [] }] })(e);
}
function QE(e) {
  return er({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z" }, child: [] }] })(e);
}
function qE(e) {
  return er({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" }, child: [] }] })(e);
}
function ZE(e) {
  return er({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z" }, child: [] }] })(e);
}
const JE = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2048%2048'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.a{fill:none;stroke:%23000000;stroke-linecap:round;stroke-linejoin:round;}.b{fill:%23000000;}%3c/style%3e%3c/defs%3e%3ccircle%20class='a'%20cx='24'%20cy='24'%20r='21.5'/%3e%3cpath%20class='a'%20d='M7.051,37.2278C11.57,27.8692,8.8785,15.757,16.1682,13.8505s12.0561,1.3458,15.8692,2.4673,6.979,1.7158,7.6822,5.271C40.729,26.6916,24.1308,35.71,27.6636,45.5'/%3e%3cpath%20class='a'%20d='M24.3551,26.972c3.1963,2.5233,6.4961,1.6849,13.7957-1.3734'/%3e%3cpath%20class='a'%20d='M29.8489,15.5366c0-2.273-4.148-4.0973-6.7189-2.0786'/%3e%3ccircle%20class='a'%20cx='21.0467'%20cy='19.1215'%20r='3.3084'/%3e%3ccircle%20class='a'%20cx='21.0467'%20cy='19.1215'%20r='1.2897'/%3e%3ccircle%20class='b'%20cx='34.8411'%20cy='22.9907'%20r='0.775'/%3e%3cpath%20class='a'%20d='M42.3747,22.9906A18.4041,18.4041,0,0,0,25.0332,5.6266'/%3e%3c/svg%3e",
  e3 = () => {
    const e = [
        { quantity: "0%", description: "Buy Tax" },
        { quantity: "0%", description: "Sell Tax" },
      ],
      t = [
      ],
      n = [
        { text: "Buy COSM", icon: g.jsx(GE, {}), link: "https://app.uniswap.org/swap?outputCurrency=0x000000000000000000000000000" },
        { text: "Chart", icon: g.jsx(XE, {}), link: "https://dexscreener.com/ethereum/0xdf9e7120589c5271f0cb4810464417985e3910a3" },
      ],
      [r, o] = f.useState(e),
      [i, s] = f.useState(t),
      a = (l, c) => {
        const p = 33.333333333333336,
          v = l.map((b) => parseFloat(b.quantity) / p);
        let w = 0;
        const x = setInterval(() => {
          w < p
            ? (c(
                l.map((b, h) => {
                  const m = Math.min(parseFloat(b.quantity), (w + 1) * v[h]);
                  return { ...b, quantity: `${m.toFixed(0)}%` };
                })
              ),
              w++)
            : (c(l.map((b) => ({ ...b, quantity: b.quantity }))), clearInterval(x));
        }, 30);
        return () => clearInterval(x);
      };
    return (
      f.useEffect(() => {
        const l = a(e, o);
        return () => l();
      }, []),
      f.useEffect(() => {
        const l = a(t, s);
        return () => l();
      }, []),
      g.jsxs(g.Fragment, {
        children: [
          g.jsx("section", {
            id: "tokeninfo",
            className: "flex flex-col lg:flex-row items-center justify-center pt-10 md:pt-0 gap-10",
            children: g.jsxs("div", {
              className: "text-center lg:text-start space-y-10",
              children: [
                g.jsx("div", { className: "bg-[#000000] text-white p-4 rounded-lg border-2 border-[#9f1239]", children: g.jsx("p", { className: "text-2xl font-bold text-center", children: "COSM TOKEN" }) }),
                g.jsx("div", {
                  className: "bg-[#000000] text-white p-4 rounded-lg border-2 border-[#9f1239] overflow-hidden",
                  children: g.jsxs("p", {
                    className: "text-lg sm:text-xl font-bold break-all text-center",
                    children: [
                      "CA: ",
                      g.jsx("span", {
                        className: "cursor-pointer",
                        onClick: () => {
                          navigator.clipboard.writeText("0x000000000000000000000000000"), alert("Copied to clipboard!");
                        },
                        children: "0x000000000000000000000000000",
                      }),
                    ],
                  }),
                }),
                g.jsx("div", { className: "bg-[#000000] text-primary ", children: g.jsx("p", { className: "text-2xl font-bold text-center", children: "TOKENOMICS" }) }),
                g.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-2 gap-12", children: r.map(({ quantity: l, description: c }) => g.jsxs("div", { className: "space-y-2 text-center", children: [g.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: l }), g.jsx("p", { className: "text-xl text-muted-foreground", children: c })] }, c)) }),
                g.jsx("div", { className: "grid grid-cols-4 lg:grid-cols-4 gap-20", children: i.map(({ quantity: l, description: c }) => g.jsxs("div", { className: "space-y-2 text-center", children: [g.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: l }), g.jsx("p", { className: "text-xl text-muted-foreground", children: c })] }, c)) }),
              ],
            }),
          }),
          g.jsx("section", { children: g.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-2 gap-20 mt-20", children: n.map(({ text: l, icon: c, link: u }) => g.jsxs("a", { href: u, target: "_blank", rel: "noopener noreferrer", className: "flex flex-col items-center space-y-4", children: [g.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: l }), g.jsx("p", { className: "text-4xl text-primary", children: c })] }, l)) }) }),
          g.jsx("div", { className: "w-full border-t border-[#e11d48] my-8" }),
          g.jsx("br", {}),
          g.jsx("br", {}),
        ],
      })
    );
  };
function J0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = J0(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function ey() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = J0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Th = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  kh = ey,
  Md = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null) return kh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((c) => {
        const u = n == null ? void 0 : n[c],
          d = i == null ? void 0 : i[c];
        if (u === null) return null;
        const p = Th(u) || Th(d);
        return o[c][p];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, u) => {
          let [d, p] = u;
          return p === void 0 || (c[d] = p), c;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, u) => {
              let { class: d, className: p, ...v } = u;
              return Object.entries(v).every((w) => {
                let [x, b] = w;
                return Array.isArray(b) ? b.includes({ ...i, ...a }[x]) : { ...i, ...a }[x] === b;
              })
                ? [...c, d, p]
                : c;
            }, []);
    return kh(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  },
  Ad = "-";
function t3(e) {
  const t = r3(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(s) {
    const a = s.split(Ad);
    return a[0] === "" && a.length !== 1 && a.shift(), ty(a, t) || n3(s);
  }
  function i(s, a) {
    const l = n[s] || [];
    return a && r[s] ? [...l, ...r[s]] : l;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: i };
}
function ty(e, t) {
  var s;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? ty(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const i = e.join(Ad);
  return (s = t.validators.find(({ validator: a }) => a(i))) == null ? void 0 : s.classGroupId;
}
const $h = /^\[(.+)\]$/;
function n3(e) {
  if ($h.test(e)) {
    const t = $h.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function r3(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    i3(Object.entries(e.classGroups), n).forEach(([i, s]) => {
      zc(s, r, i, t);
    }),
    r
  );
}
function zc(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Rh(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (o3(o)) {
        zc(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      zc(s, Rh(t, i), n, r);
    });
  });
}
function Rh(e, t) {
  let n = e;
  return (
    t.split(Ad).forEach((r) => {
      n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }), (n = n.nextPart.get(r));
    }),
    n
  );
}
function o3(e) {
  return e.isThemeGetter;
}
function i3(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((i) => (typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i));
        return [n, o];
      })
    : e;
}
function s3(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(i, s) {
    n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(i) {
      let s = n.get(i);
      if (s !== void 0) return s;
      if ((s = r.get(i)) !== void 0) return o(i, s), s;
    },
    set(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    },
  };
}
const ny = "!";
function a3(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (s) {
    const a = [];
    let l = 0,
      c = 0,
      u;
    for (let x = 0; x < s.length; x++) {
      let b = s[x];
      if (l === 0) {
        if (b === r && (n || s.slice(x, x + o) === t)) {
          a.push(s.slice(c, x)), (c = x + o);
          continue;
        }
        if (b === "/") {
          u = x;
          continue;
        }
      }
      b === "[" ? l++ : b === "]" && l--;
    }
    const d = a.length === 0 ? s : s.substring(c),
      p = d.startsWith(ny),
      v = p ? d.substring(1) : d,
      w = u && u > c ? u - c : void 0;
    return { modifiers: a, hasImportantModifier: p, baseClassName: v, maybePostfixModifierPosition: w };
  };
}
function l3(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function c3(e) {
  return { cache: s3(e.cacheSize), splitModifiers: a3(e), ...t3(e) };
}
const u3 = /\s+/;
function d3(e, t) {
  const { splitModifiers: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
    i = new Set();
  return e
    .trim()
    .split(u3)
    .map((s) => {
      const { modifiers: a, hasImportantModifier: l, baseClassName: c, maybePostfixModifierPosition: u } = n(s);
      let d = r(u ? c.substring(0, u) : c),
        p = !!u;
      if (!d) {
        if (!u) return { isTailwindClass: !1, originalClassName: s };
        if (((d = r(c)), !d)) return { isTailwindClass: !1, originalClassName: s };
        p = !1;
      }
      const v = l3(a).join(":");
      return { isTailwindClass: !0, modifierId: l ? v + ny : v, classGroupId: d, originalClassName: s, hasPostfixModifier: p };
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: l, hasPostfixModifier: c } = s,
        u = a + l;
      return i.has(u) ? !1 : (i.add(u), o(l, c).forEach((d) => i.add(a + d)), !0);
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(" ");
}
function f3() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = ry(t)) && (r && (r += " "), (r += n));
  return r;
}
function ry(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = ry(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function p3(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const c = t.reduce((u, d) => d(u), e());
    return (n = c3(c)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const u = d3(l, n);
    return o(l, u), u;
  }
  return function () {
    return i(f3.apply(null, arguments));
  };
}
function J(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const oy = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  h3 = /^\d+\/\d+$/,
  m3 = new Set(["px", "full", "screen"]),
  g3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  v3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  y3 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  x3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function pt(e) {
  return zn(e) || m3.has(e) || h3.test(e);
}
function Jt(e) {
  return Qr(e, "length", k3);
}
function zn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Gi(e) {
  return Qr(e, "number", zn);
}
function fo(e) {
  return !!e && Number.isInteger(Number(e));
}
function w3(e) {
  return e.endsWith("%") && zn(e.slice(0, -1));
}
function U(e) {
  return oy.test(e);
}
function en(e) {
  return g3.test(e);
}
const b3 = new Set(["length", "size", "percentage"]);
function S3(e) {
  return Qr(e, b3, iy);
}
function C3(e) {
  return Qr(e, "position", iy);
}
const E3 = new Set(["image", "url"]);
function P3(e) {
  return Qr(e, E3, R3);
}
function T3(e) {
  return Qr(e, "", $3);
}
function po() {
  return !0;
}
function Qr(e, t, n) {
  const r = oy.exec(e);
  return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
}
function k3(e) {
  return v3.test(e);
}
function iy() {
  return !1;
}
function $3(e) {
  return y3.test(e);
}
function R3(e) {
  return x3.test(e);
}
function N3() {
  const e = J("colors"),
    t = J("spacing"),
    n = J("blur"),
    r = J("brightness"),
    o = J("borderColor"),
    i = J("borderRadius"),
    s = J("borderSpacing"),
    a = J("borderWidth"),
    l = J("contrast"),
    c = J("grayscale"),
    u = J("hueRotate"),
    d = J("invert"),
    p = J("gap"),
    v = J("gradientColorStops"),
    w = J("gradientColorStopPositions"),
    x = J("inset"),
    b = J("margin"),
    h = J("opacity"),
    m = J("padding"),
    y = J("saturate"),
    S = J("scale"),
    C = J("sepia"),
    E = J("skew"),
    T = J("space"),
    P = J("translate"),
    k = () => ["auto", "contain", "none"],
    M = () => ["auto", "hidden", "clip", "visible", "scroll"],
    O = () => ["auto", U, t],
    j = () => [U, t],
    Z = () => ["", pt, Jt],
    F = () => ["auto", zn, U],
    G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
    z = () => ["solid", "dashed", "dotted", "double", "none"],
    B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"],
    $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
    R = () => ["", "0", U],
    A = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
    V = () => [zn, Gi],
    K = () => [zn, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: { colors: [po], spacing: [pt, Jt], blur: ["none", "", en, U], brightness: V(), borderColor: [e], borderRadius: ["none", "", "full", en, U], borderSpacing: j(), borderWidth: Z(), contrast: V(), grayscale: R(), hueRotate: K(), invert: R(), gap: j(), gradientColorStops: [e], gradientColorStopPositions: [w3, Jt], inset: O(), margin: O(), opacity: V(), padding: j(), saturate: V(), scale: V(), sepia: R(), skew: K(), space: j(), translate: j() },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", U] }],
      container: ["container"],
      columns: [{ columns: [en] }],
      "break-after": [{ "break-after": A() }],
      "break-before": [{ "break-before": A() }],
      "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
      "object-position": [{ object: [...G(), U] }],
      overflow: [{ overflow: M() }],
      "overflow-x": [{ "overflow-x": M() }],
      "overflow-y": [{ "overflow-y": M() }],
      overscroll: [{ overscroll: k() }],
      "overscroll-x": [{ "overscroll-x": k() }],
      "overscroll-y": [{ "overscroll-y": k() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [x] }],
      "inset-x": [{ "inset-x": [x] }],
      "inset-y": [{ "inset-y": [x] }],
      start: [{ start: [x] }],
      end: [{ end: [x] }],
      top: [{ top: [x] }],
      right: [{ right: [x] }],
      bottom: [{ bottom: [x] }],
      left: [{ left: [x] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", fo, U] }],
      basis: [{ basis: O() }],
      "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", U] }],
      grow: [{ grow: R() }],
      shrink: [{ shrink: R() }],
      order: [{ order: ["first", "last", "none", fo, U] }],
      "grid-cols": [{ "grid-cols": [po] }],
      "col-start-end": [{ col: ["auto", { span: ["full", fo, U] }, U] }],
      "col-start": [{ "col-start": F() }],
      "col-end": [{ "col-end": F() }],
      "grid-rows": [{ "grid-rows": [po] }],
      "row-start-end": [{ row: ["auto", { span: [fo, U] }, U] }],
      "row-start": [{ "row-start": F() }],
      "row-end": [{ "row-end": F() }],
      "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", U] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", U] }],
      gap: [{ gap: [p] }],
      "gap-x": [{ "gap-x": [p] }],
      "gap-y": [{ "gap-y": [p] }],
      "justify-content": [{ justify: ["normal", ...$()] }],
      "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
      "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
      "align-content": [{ content: ["normal", ...$(), "baseline"] }],
      "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
      "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
      "place-content": [{ "place-content": [...$(), "baseline"] }],
      "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
      "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
      p: [{ p: [m] }],
      px: [{ px: [m] }],
      py: [{ py: [m] }],
      ps: [{ ps: [m] }],
      pe: [{ pe: [m] }],
      pt: [{ pt: [m] }],
      pr: [{ pr: [m] }],
      pb: [{ pb: [m] }],
      pl: [{ pl: [m] }],
      m: [{ m: [b] }],
      mx: [{ mx: [b] }],
      my: [{ my: [b] }],
      ms: [{ ms: [b] }],
      me: [{ me: [b] }],
      mt: [{ mt: [b] }],
      mr: [{ mr: [b] }],
      mb: [{ mb: [b] }],
      ml: [{ ml: [b] }],
      "space-x": [{ "space-x": [T] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [T] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", U, t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", U, pt] }],
      "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [en] }, en, U] }],
      h: [{ h: [U, t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", pt, U] }],
      "max-h": [{ "max-h": [U, t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", en, Jt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Gi] }],
      "font-family": [{ font: [po] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U] }],
      "line-clamp": [{ "line-clamp": ["none", zn, Gi] }],
      leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pt, U] }],
      "list-image": [{ "list-image": ["none", U] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", U] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [h] }],
      "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [h] }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", pt, Jt] }],
      "underline-offset": [{ "underline-offset": ["auto", pt, U] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: j() }],
      "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U] }],
      whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", U] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [h] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...G(), C3] }],
      "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
      "bg-size": [{ bg: ["auto", "cover", "contain", S3] }],
      "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, P3] }],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [w] }],
      "gradient-via-pos": [{ via: [w] }],
      "gradient-to-pos": [{ to: [w] }],
      "gradient-from": [{ from: [v] }],
      "gradient-via": [{ via: [v] }],
      "gradient-to": [{ to: [v] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [h] }],
      "border-style": [{ border: [...z(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [h] }],
      "divide-style": [{ divide: z() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...z()] }],
      "outline-offset": [{ "outline-offset": [pt, U] }],
      "outline-w": [{ outline: [pt, Jt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: Z() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [h] }],
      "ring-offset-w": [{ "ring-offset": [pt, Jt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", en, T3] }],
      "shadow-color": [{ shadow: [po] }],
      opacity: [{ opacity: [h] }],
      "mix-blend": [{ "mix-blend": B() }],
      "bg-blend": [{ "bg-blend": B() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", en, U] }],
      grayscale: [{ grayscale: [c] }],
      "hue-rotate": [{ "hue-rotate": [u] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [y] }],
      sepia: [{ sepia: [C] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [h] }],
      "backdrop-saturate": [{ "backdrop-saturate": [y] }],
      "backdrop-sepia": [{ "backdrop-sepia": [C] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U] }],
      duration: [{ duration: K() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", U] }],
      delay: [{ delay: K() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", U] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [S] }],
      "scale-x": [{ "scale-x": [S] }],
      "scale-y": [{ "scale-y": [S] }],
      rotate: [{ rotate: [fo, U] }],
      "translate-x": [{ "translate-x": [P] }],
      "translate-y": [{ "translate-y": [P] }],
      "skew-x": [{ "skew-x": [E] }],
      "skew-y": [{ "skew-y": [E] }],
      "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U] }],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U] }],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": j() }],
      "scroll-mx": [{ "scroll-mx": j() }],
      "scroll-my": [{ "scroll-my": j() }],
      "scroll-ms": [{ "scroll-ms": j() }],
      "scroll-me": [{ "scroll-me": j() }],
      "scroll-mt": [{ "scroll-mt": j() }],
      "scroll-mr": [{ "scroll-mr": j() }],
      "scroll-mb": [{ "scroll-mb": j() }],
      "scroll-ml": [{ "scroll-ml": j() }],
      "scroll-p": [{ "scroll-p": j() }],
      "scroll-px": [{ "scroll-px": j() }],
      "scroll-py": [{ "scroll-py": j() }],
      "scroll-ps": [{ "scroll-ps": j() }],
      "scroll-pe": [{ "scroll-pe": j() }],
      "scroll-pt": [{ "scroll-pt": j() }],
      "scroll-pr": [{ "scroll-pr": j() }],
      "scroll-pb": [{ "scroll-pb": j() }],
      "scroll-pl": [{ "scroll-pl": j() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", U] }],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [pt, Jt, Gi] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const M3 = p3(N3);
function ae(...e) {
  return M3(ey(e));
}
const A3 = Md("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80", secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80", outline: "text-foreground" } }, defaultVariants: { variant: "default" } });
function _3({ className: e, variant: t, ...n }) {
  return g.jsx("div", { className: ae(A3({ variant: t }), e), ...n });
}
const j3 = "/assets/marketing-YuG5sQeJ.gif",
  I3 = "/assets/advertising-GOmow-0h.gif",
  D3 = "/assets/digitalpainting-WY_ch2Ur.gif",
  O3 = "/assets/characterdesign-xqvqGcAB.gif",
  sy = "/assets/photorealism-jwlZ3Lzs.gif",
  L3 = "/assets/gameassets-5nx-u4_D.gif",
  F3 = "/assets/fashion-jxRBPbGu.gif",
  V3 = "/assets/productphotography-IlcvwVcs.gif",
  z3 = "/assets/muchmore-oik15wWb.png",
  B3 = { Photorealism: sy, DigitalPainting: D3, CharacterDesign: O3, Fashion: F3, Advertising: I3, Marketing: j3, ProductPhotography: V3, GameAssets: L3, AndMuchMore: z3 },
  Yi = ["Photorealism", "Digital Painting", "Character Design", "Fashion", "Advertising", "Marketing", "Product Photography", "Game Assets", "And Much More"],
  U3 = () => {
    const [e, t] = f.useState(sy),
      [n, r] = f.useState("Photorealism"),
      [, o] = f.useState("opacity-100"),
      i = (a) => {
        const l = a.replace(/\s+/g, "");
        t(B3[l]), r(a);
      },
      s = (a) => {
        o("opacity-0"),
          setTimeout(() => {
            i(a), o("opacity-100");
          }, 300);
      };
    return (
      f.useEffect(() => {
        const a = setInterval(() => {
          o("opacity-0"),
            setTimeout(() => {
              r((l) => {
                const u = (Yi.indexOf(l) + 1) % Yi.length,
                  d = Yi[u];
                return i(d), d;
              }),
                o("opacity-100");
            }, 300);
        }, 8e3);
        return () => clearInterval(a);
      }, []),
      g.jsxs("section", {
        id: "usecase",
        className: "relative min-h-screen py-24 sm:py-32",
        children: [
          g.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [g.jsx("div", { className: "absolute w-[500px] h-[500px] -left-48 top-0 bg-rose-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" }), g.jsx("div", { className: "absolute w-[500px] h-[500px] right-0 top-1/2 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" }), g.jsx("div", { className: "absolute w-[500px] h-[500px] -right-48 bottom-0 bg-fuchsia-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" })] }),
          g.jsxs("div", {
            className: "container relative",
            children: [
              g.jsxs(Y.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "max-w-4xl mx-auto text-center mb-16", children: [g.jsxs("h2", { className: "text-6xl md:text-7xl font-bold mb-6", children: [g.jsx("span", { className: "bg-gradient-to-r from-rose-700 via-rose-500 to-rose-700 text-transparent bg-clip-text", children: "Transform" }), " ", g.jsxs("span", { className: "relative inline-block", children: ["Your Vision", g.jsx("div", { className: "absolute -inset-2 bg-rose-500/10 blur-xl rounded-full" })] })] }), g.jsxs("p", { className: "text-2xl text-muted-foreground", children: ["Use ", g.jsx("span", { className: "text-rose-500 font-semibold", children: "CosmicAI" }), " Today For"] })] }),
              g.jsx(Y.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "max-w-5xl mx-auto mb-16",
                children: g.jsx("div", {
                  className: "flex flex-wrap justify-center gap-4",
                  children: Yi.map((a, l) =>
                    g.jsx(
                      Y.div,
                      {
                        initial: { opacity: 0, scale: 0.9 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: l * 0.1 },
                        onClick: () => s(a),
                        children: g.jsx(_3, {
                          variant: "secondary",
                          className: `
                    px-6 py-3 text-lg cursor-pointer backdrop-blur-sm
                    ${n === a ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25" : "bg-white/10 hover:bg-rose-500/80 border border-rose-500/20"}
                    transition-all duration-300 ease-out hover:scale-105
                  `,
                          children: a,
                        }),
                      },
                      a
                    )
                  ),
                }),
              }),
              g.jsxs(Y.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 },
                className: "relative max-w-6xl mx-auto",
                children: [
                  g.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent rounded-3xl blur-2xl" }),
                  g.jsx("div", {
                    className: "relative group",
                    children: g.jsx(qs, {
                      mode: "wait",
                      children: g.jsxs(
                        Y.div,
                        {
                          initial: { opacity: 0, scale: 0.95 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 1.05 },
                          transition: { duration: 0.5 },
                          className: "relative rounded-3xl overflow-hidden",
                          children: [
                            g.jsx("div", {
                              className: `absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500`,
                            }),
                            g.jsx("img", {
                              src: e,
                              className: `w-full h-auto object-cover rounded-3xl border-2 border-rose-500/20 
                    shadow-2xl shadow-rose-500/10`,
                              style: { maxHeight: "70vh" },
                              alt: n,
                            }),
                            g.jsxs("div", {
                              className: `absolute bottom-0 left-0 right-0 p-8 transform translate-y-full 
                  group-hover:translate-y-0 transition-transform duration-500`,
                              children: [g.jsx("h3", { className: "text-3xl font-bold text-white mb-2", children: n }), g.jsxs("p", { className: "text-lg text-gray-200 max-w-2xl", children: ["Transform your ideas into stunning ", n.toLowerCase(), " with CosmicAI"] })],
                            }),
                          ],
                        },
                        n
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  W3 = "/assets/textlogo-RgdXbpHH.png";
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ei() {
  return (
    (ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ei.apply(this, arguments)
  );
}
var un;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(un || (un = {}));
const Nh = "popstate";
function K3(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return Bc("", { pathname: i, search: s, hash: a }, (o.state && o.state.usr) || null, (o.state && o.state.key) || "default");
  }
  function n(r, o) {
    return typeof o == "string" ? o : ea(o);
  }
  return G3(t, n, null, e);
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ay(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function H3() {
  return Math.random().toString(36).substr(2, 8);
}
function Mh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Bc(e, t, n, r) {
  return n === void 0 && (n = null), ei({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? qr(t) : t, { state: n, key: (t && t.key) || r || H3() });
}
function ea(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function qr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function G3(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = un.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), s.replaceState(ei({}, s.state, { idx: c }), ""));
  function u() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = un.Pop;
    let b = u(),
      h = b == null ? null : b - c;
    (c = b), l && l({ action: a, location: x.location, delta: h });
  }
  function p(b, h) {
    a = un.Push;
    let m = Bc(x.location, b, h);
    n && n(m, b), (c = u() + 1);
    let y = Mh(m, c),
      S = x.createHref(m);
    try {
      s.pushState(y, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    i && l && l({ action: a, location: x.location, delta: 1 });
  }
  function v(b, h) {
    a = un.Replace;
    let m = Bc(x.location, b, h);
    n && n(m, b), (c = u());
    let y = Mh(m, c),
      S = x.createHref(m);
    s.replaceState(y, "", S), i && l && l({ action: a, location: x.location, delta: 0 });
  }
  function w(b) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      m = typeof b == "string" ? b : ea(b);
    return (m = m.replace(/ $/, "%20")), he(h, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, h);
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(b) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Nh, d),
        (l = b),
        () => {
          o.removeEventListener(Nh, d), (l = null);
        }
      );
    },
    createHref(b) {
      return t(o, b);
    },
    createURL: w,
    encodeLocation(b) {
      let h = w(b);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: v,
    go(b) {
      return s.go(b);
    },
  };
  return x;
}
var Ah;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(Ah || (Ah = {}));
function Y3(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? qr(t) : t,
    o = _d(r.pathname || "/", n);
  if (o == null) return null;
  let i = ly(e);
  X3(i);
  let s = null;
  for (let a = 0; s == null && a < i.length; ++a) {
    let l = aP(o);
    s = oP(i[a], l);
  }
  return s;
}
function ly(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = { relativePath: a === void 0 ? i.path || "" : a, caseSensitive: i.caseSensitive === !0, childrenIndex: s, route: i };
    l.relativePath.startsWith("/") && (he(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), (l.relativePath = l.relativePath.slice(r.length)));
    let c = xn([r, l.relativePath]),
      u = n.concat(l);
    i.children && i.children.length > 0 && (he(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), ly(i.children, t, u, c)), !(i.path == null && !i.index) && t.push({ path: c, score: nP(c, i.index), routesMeta: u });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of cy(i.path)) o(i, s, l);
    }),
    t
  );
}
function cy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = cy(r.join("/")),
    a = [];
  return a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))), o && a.push(...s), a.map((l) => (e.startsWith("/") && l === "" ? "/" : l));
}
function X3(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : rP(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Q3 = /^:[\w-]+$/,
  q3 = 3,
  Z3 = 2,
  J3 = 1,
  eP = 10,
  tP = -2,
  _h = (e) => e === "*";
function nP(e, t) {
  let n = e.split("/"),
    r = n.length;
  return n.some(_h) && (r += tP), t && (r += Z3), n.filter((o) => !_h(o)).reduce((o, i) => o + (Q3.test(i) ? q3 : i === "" ? J3 : eP), r);
}
function rP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function oP(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      u = iP({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, c);
    if (!u) return null;
    Object.assign(r, u.params);
    let d = a.route;
    i.push({ params: r, pathname: xn([o, u.pathname]), pathnameBase: dP(xn([o, u.pathnameBase])), route: d }), u.pathnameBase !== "/" && (o = xn([o, u.pathnameBase]));
  }
  return i;
}
function iP(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = sP(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: p, isOptional: v } = u;
      if (p === "*") {
        let x = a[d] || "";
        s = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[d];
      return v && !w ? (c[p] = void 0) : (c[p] = (w || "").replace(/%2F/g, "/")), c;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function sP(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), ay(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : n ? (o += "\\/*$") : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r];
}
function aP(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return ay(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function _d(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function lP(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? qr(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : cP(n, t)) : t, search: fP(r), hash: pP(o) };
}
function cP(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function El(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function uP(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function uy(e, t) {
  let n = uP(e);
  return t ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function dy(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string" ? (o = qr(e)) : ((o = ei({}, e)), he(!o.pathname || !o.pathname.includes("?"), El("?", "pathname", "search", o)), he(!o.pathname || !o.pathname.includes("#"), El("#", "pathname", "hash", o)), he(!o.search || !o.search.includes("#"), El("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      o.pathname = p.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = lP(o, a),
    c = s && s !== "/" && s.endsWith("/"),
    u = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const xn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  dP = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  fP = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  pP = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function hP(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const fy = ["post", "put", "patch", "delete"];
new Set(fy);
const mP = ["get", ...fy];
new Set(mP);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ti() {
  return (
    (ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ti.apply(this, arguments)
  );
}
const jd = f.createContext(null),
  gP = f.createContext(null),
  tr = f.createContext(null),
  Ma = f.createContext(null),
  nr = f.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  py = f.createContext(null);
function vP(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  vi() || he(!1);
  let { basename: r, navigator: o } = f.useContext(tr),
    { hash: i, pathname: s, search: a } = my(e, { relative: n }),
    l = s;
  return r !== "/" && (l = s === "/" ? r : xn([r, s])), o.createHref({ pathname: l, search: a, hash: i });
}
function vi() {
  return f.useContext(Ma) != null;
}
function Aa() {
  return vi() || he(!1), f.useContext(Ma).location;
}
function hy(e) {
  f.useContext(tr).static || f.useLayoutEffect(e);
}
function yP() {
  let { isDataRoute: e } = f.useContext(nr);
  return e ? MP() : xP();
}
function xP() {
  vi() || he(!1);
  let e = f.useContext(jd),
    { basename: t, future: n, navigator: r } = f.useContext(tr),
    { matches: o } = f.useContext(nr),
    { pathname: i } = Aa(),
    s = JSON.stringify(uy(o, n.v7_relativeSplatPath)),
    a = f.useRef(!1);
  return (
    hy(() => {
      a.current = !0;
    }),
    f.useCallback(
      function (c, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let d = dy(c, JSON.parse(s), i, u.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : xn([t, d.pathname])), (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [t, r, s, i, e]
    )
  );
}
function my(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = f.useContext(tr),
    { matches: o } = f.useContext(nr),
    { pathname: i } = Aa(),
    s = JSON.stringify(uy(o, r.v7_relativeSplatPath));
  return f.useMemo(() => dy(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function wP(e, t) {
  return bP(e, t);
}
function bP(e, t, n, r) {
  vi() || he(!1);
  let { navigator: o } = f.useContext(tr),
    { matches: i } = f.useContext(nr),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let c = Aa(),
    u;
  if (t) {
    var d;
    let b = typeof t == "string" ? qr(t) : t;
    l === "/" || ((d = b.pathname) != null && d.startsWith(l)) || he(!1), (u = b);
  } else u = c;
  let p = u.pathname || "/",
    v = p;
  if (l !== "/") {
    let b = l.replace(/^\//, "").split("/");
    v = "/" + p.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let w = Y3(e, { pathname: v }),
    x = TP(w && w.map((b) => Object.assign({}, b, { params: Object.assign({}, a, b.params), pathname: xn([l, o.encodeLocation ? o.encodeLocation(b.pathname).pathname : b.pathname]), pathnameBase: b.pathnameBase === "/" ? l : xn([l, o.encodeLocation ? o.encodeLocation(b.pathnameBase).pathname : b.pathnameBase]) })), i, n, r);
  return t && x ? f.createElement(Ma.Provider, { value: { location: ti({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u), navigationType: un.Pop } }, x) : x;
}
function SP() {
  let e = NP(),
    t = hP(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return f.createElement(f.Fragment, null, f.createElement("h2", null, "Unexpected Application Error!"), f.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? f.createElement("pre", { style: o }, n) : null, i);
}
const CP = f.createElement(SP, null);
class EP extends f.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle") ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? f.createElement(nr.Provider, { value: this.props.routeContext }, f.createElement(py.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
}
function PP(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = f.useContext(jd);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), f.createElement(nr.Provider, { value: t }, r);
}
function TP(e, t, n, r) {
  var o;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let u = s.findIndex((d) => d.route.id && (a == null ? void 0 : a[d.route.id]));
    u >= 0 || he(!1), (s = s.slice(0, Math.min(s.length, u + 1)));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u), d.route.id)) {
        let { loaderData: p, errors: v } = n,
          w = d.route.loader && p[d.route.id] === void 0 && (!v || v[d.route.id] === void 0);
        if (d.route.lazy || w) {
          (l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((u, d, p) => {
    let v,
      w = !1,
      x = null,
      b = null;
    n && ((v = a && d.route.id ? a[d.route.id] : void 0), (x = d.route.errorElement || CP), l && (c < 0 && p === 0 ? (AP("route-fallback", !1), (w = !0), (b = null)) : c === p && ((w = !0), (b = d.route.hydrateFallbackElement || null))));
    let h = t.concat(s.slice(0, p + 1)),
      m = () => {
        let y;
        return v ? (y = x) : w ? (y = b) : d.route.Component ? (y = f.createElement(d.route.Component, null)) : d.route.element ? (y = d.route.element) : (y = u), f.createElement(PP, { match: d, routeContext: { outlet: u, matches: h, isDataRoute: n != null }, children: y });
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? f.createElement(EP, { location: n.location, revalidation: n.revalidation, component: x, error: v, children: m(), routeContext: { outlet: null, matches: h, isDataRoute: !0 } }) : m();
  }, null);
}
var gy = (function (e) {
    return (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e;
  })(gy || {}),
  ta = (function (e) {
    return (e.UseBlocker = "useBlocker"), (e.UseLoaderData = "useLoaderData"), (e.UseActionData = "useActionData"), (e.UseRouteError = "useRouteError"), (e.UseNavigation = "useNavigation"), (e.UseRouteLoaderData = "useRouteLoaderData"), (e.UseMatches = "useMatches"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), (e.UseRouteId = "useRouteId"), e;
  })(ta || {});
function kP(e) {
  let t = f.useContext(jd);
  return t || he(!1), t;
}
function $P(e) {
  let t = f.useContext(gP);
  return t || he(!1), t;
}
function RP(e) {
  let t = f.useContext(nr);
  return t || he(!1), t;
}
function vy(e) {
  let t = RP(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || he(!1), n.route.id;
}
function NP() {
  var e;
  let t = f.useContext(py),
    n = $P(ta.UseRouteError),
    r = vy(ta.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function MP() {
  let { router: e } = kP(gy.UseNavigateStable),
    t = vy(ta.UseNavigateStable),
    n = f.useRef(!1);
  return (
    hy(() => {
      n.current = !0;
    }),
    f.useCallback(
      function (o, i) {
        i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, ti({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const jh = {};
function AP(e, t, n) {
  !t && !jh[e] && (jh[e] = !0);
}
function Uc(e) {
  he(!1);
}
function _P(e) {
  let { basename: t = "/", children: n = null, location: r, navigationType: o = un.Pop, navigator: i, static: s = !1, future: a } = e;
  vi() && he(!1);
  let l = t.replace(/^\/*/, "/"),
    c = f.useMemo(() => ({ basename: l, navigator: i, static: s, future: ti({ v7_relativeSplatPath: !1 }, a) }), [l, a, i, s]);
  typeof r == "string" && (r = qr(r));
  let { pathname: u = "/", search: d = "", hash: p = "", state: v = null, key: w = "default" } = r,
    x = f.useMemo(() => {
      let b = _d(u, l);
      return b == null ? null : { location: { pathname: b, search: d, hash: p, state: v, key: w }, navigationType: o };
    }, [l, u, d, p, v, w, o]);
  return x == null ? null : f.createElement(tr.Provider, { value: c }, f.createElement(Ma.Provider, { children: n, value: x }));
}
function jP(e) {
  let { children: t, location: n } = e;
  return wP(Wc(t), n);
}
new Promise(() => {});
function Wc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    f.Children.forEach(e, (r, o) => {
      if (!f.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === f.Fragment) {
        n.push.apply(n, Wc(r.props.children, i));
        return;
      }
      r.type !== Uc && he(!1), !r.props.index || !r.props.children || he(!1);
      let s = { id: r.props.id || i.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy };
      r.props.children && (s.children = Wc(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Kc() {
  return (
    (Kc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Kc.apply(this, arguments)
  );
}
function IP(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function DP(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function OP(e, t) {
  return e.button === 0 && (!t || t === "_self") && !DP(e);
}
const LP = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
  FP = "6";
try {
  window.__reactRouterVersion = FP;
} catch {}
const VP = "startTransition",
  Ih = ym[VP];
function zP(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = f.useRef();
  i.current == null && (i.current = K3({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = f.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = r || {},
    u = f.useCallback(
      (d) => {
        c && Ih ? Ih(() => l(d)) : l(d);
      },
      [l, c]
    );
  return f.useLayoutEffect(() => s.listen(u), [s, u]), f.createElement(_P, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: s, future: r });
}
const BP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  UP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  WP = f.forwardRef(function (t, n) {
    let { onClick: r, relative: o, reloadDocument: i, replace: s, state: a, target: l, to: c, preventScrollReset: u, unstable_viewTransition: d } = t,
      p = IP(t, LP),
      { basename: v } = f.useContext(tr),
      w,
      x = !1;
    if (typeof c == "string" && UP.test(c) && ((w = c), BP))
      try {
        let y = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(y.protocol + c) : new URL(c),
          C = _d(S.pathname, v);
        S.origin === y.origin && C != null ? (c = C + S.search + S.hash) : (x = !0);
      } catch {}
    let b = vP(c, { relative: o }),
      h = KP(c, { replace: s, state: a, target: l, preventScrollReset: u, relative: o, unstable_viewTransition: d });
    function m(y) {
      r && r(y), y.defaultPrevented || h(y);
    }
    return f.createElement("a", Kc({}, p, { href: w || b, onClick: x || i ? r : m, ref: n, target: l }));
  });
var Dh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"), (e.UseSubmit = "useSubmit"), (e.UseSubmitFetcher = "useSubmitFetcher"), (e.UseFetcher = "useFetcher"), (e.useViewTransitionState = "useViewTransitionState");
})(Dh || (Dh = {}));
var Oh;
(function (e) {
  (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(Oh || (Oh = {}));
function KP(e, t) {
  let { target: n, replace: r, state: o, preventScrollReset: i, relative: s, unstable_viewTransition: a } = t === void 0 ? {} : t,
    l = yP(),
    c = Aa(),
    u = my(e, { relative: s });
  return f.useCallback(
    (d) => {
      if (OP(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : ea(c) === ea(u);
        l(e, { replace: p, state: o, preventScrollReset: i, relative: s, unstable_viewTransition: a });
      }
    },
    [c, l, u, r, o, n, e, i, s, a]
  );
}
const HP = () =>
    g.jsxs("footer", {
      id: "footer",
      children: [
        g.jsx("hr", { className: "w-11/12 mx-auto" }),
        g.jsxs("section", {
          className: "container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8",
          children: [g.jsx("div", { className: "col-span-full xl:col-span-2", children: g.jsx("a", { href: "/", className: "font-bold text-xl flex", children: g.jsx("img", { src: W3, alt: "Logo", className: "h-20 md:h-20 lg:h-auto w-auto", style: { minWidth: "40px" } }) }) }), g.jsxs("div", { className: "flex flex-col gap-2", children: [g.jsx("h3", { className: "font-bold text-lg", children: "" }), g.jsx("div", { children: g.jsx("a", { target: "_blank", href: "https://x.com/CosmicAI_ETH", className: "opacity-60 hover:opacity-100", children: "" }) }), g.jsx("div", { children: g.jsx("a", { target: "_blank", href: "https://warpcast.com/stellaryai", className: "opacity-60 hover:opacity-100", children: "" }) })] }), g.jsxs("div", { className: "flex flex-col gap-2", children: [g.jsx("h3", { className: "font-bold text-lg", children: "" }), g.jsx("div", { children: g.jsx("a", { href: "mailto:contact@stellaryai.com", className: "opacity-60 hover:opacity-100", children: "" }) })] }), g.jsxs("div", { className: "flex flex-col gap-2", children: [g.jsx("h3", { className: "font-bold text-lg", children: "About" }), g.jsx("div", { children: g.jsx(WP, { to: "https://docs.cosmicai.cc/", className: "opacity-60 hover:opacity-100", children: "Docs" }) }), g.jsx("div", { children: g.jsx("a", { target: "_blank", href: "", className: "opacity-60 hover:opacity-100", children: "" }) })] }), g.jsxs("div", { className: "flex flex-col gap-2", children: [g.jsx("h3", { className: "font-bold text-lg", children: "Community" }), g.jsx("div", { children: g.jsx("a", { target: "_blank", href: "https://x.com/CosmicAI_ETH", className: "opacity-60 hover:opacity-100", children: "Twitter" }) }), g.jsx("div", { children: g.jsx("a", { target: "_blank", href: "https://t.me/CosmicAI_ETH", className: "opacity-60 hover:opacity-100", children: "Telegram" }) })] })],
        }),
        g.jsx("section", { className: "container pb-14 text-center", children: g.jsxs("h3", { children: ["© 2024 | All Rights Reserved -", " ", g.jsxs("a", { target: "_blank", href: "#", className: "text-primary transition-all border-primary hover:border-b-2", children: [g.jsx("span", { className: "text-primary", children: "Cosmic" }), g.jsx("span", { className: "text-foreground", children: "AI" })] })] }) }),
      ],
    }),
  Tr = f.forwardRef(({ className: e, ...t }, n) => g.jsx("div", { ref: n, className: ae("rounded-lg border bg-card text-card-foreground shadow-sm", e), ...t }));
Tr.displayName = "Card";
const wo = f.forwardRef(({ className: e, ...t }, n) => g.jsx("div", { ref: n, className: ae("flex flex-col space-y-1.5 p-6", e), ...t }));
wo.displayName = "CardHeader";
const GP = f.forwardRef(({ className: e, ...t }, n) => g.jsx("h3", { ref: n, className: ae("text-2xl font-semibold leading-none tracking-tight", e), ...t }));
GP.displayName = "CardTitle";
const YP = f.forwardRef(({ className: e, ...t }, n) => g.jsx("p", { ref: n, className: ae("text-sm text-muted-foreground", e), ...t }));
YP.displayName = "CardDescription";
const XP = f.forwardRef(({ className: e, ...t }, n) => g.jsx("div", { ref: n, className: ae("p-6 pt-0", e), ...t }));
XP.displayName = "CardContent";
const QP = f.forwardRef(({ className: e, ...t }, n) => g.jsx("div", { ref: n, className: ae("flex items-center p-6 pt-0", e), ...t }));
QP.displayName = "CardFooter";
const qP = () => g.jsxs("div", { className: "hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]", children: [g.jsx(Tr, { className: "absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10", children: g.jsx(wo, { className: "p-0", children: g.jsx("img", { src: "https://h7l0.c15.e2-1.dev/stellaryai-2/fluxy/1732508266661-0.png", alt: "AI Dashboard Interface", className: "w-full h-[200px] object-cover rounded-lg" }) }) }), g.jsx(Tr, { className: "absolute right-[20px] top-4 w-80 drop-shadow-xl shadow-black/10 dark:shadow-white/10", children: g.jsx(wo, { className: "p-0", children: g.jsx("img", { src: "https://h7l0.c15.e2-1.dev/stellaryai-2/fluxy/recraft-v3-1731887773212-0.png", alt: "Data Visualization", className: "w-full h-[180px] object-cover rounded-lg" }) }) }), g.jsx(Tr, { className: "absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10", children: g.jsx(wo, { className: "p-0", children: g.jsx("img", { src: "https://h7l0.c15.e2-1.dev/stellaryai-2/fluxy/recraft-v3-1732023185491-0.png", alt: "Machine Learning Processing", className: "w-full h-[160px] object-cover rounded-lg" }) }) }), g.jsx(Tr, { className: "absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10", children: g.jsx(wo, { className: "p-0", children: g.jsx("img", { src: "https://h7l0.c15.e2-1.dev/stellaryai-2/fluxy/flux-pro-v1.1-1731696373116-0.png", alt: "Automation Workflow", className: "w-full h-[190px] object-cover rounded-lg" }) }) })] }),
  ZP = () => {
    const e = (r, o) => Math.random() * (o - r) + r,
      n = Array.from({ length: 12 }).map((r, o) => {
        const i = e(1, 6),
          s = e(20, 60),
          a = e(0, 100),
          l = e(0, 20);
        return g.jsx("div", { style: { position: "absolute", bottom: "-100px", width: `${i}rem`, height: `${i}rem`, left: `${a}%`, animation: `bubble-rise ${s}s linear infinite`, animationDelay: `${-l}s`, background: "linear-gradient(135deg, rgba(225, 29, 72, 0.2), rgba(225, 29, 72, 0.05))", backdropFilter: "blur(8px)", border: "1px solid rgba(225, 29, 72, 0.15)", borderRadius: "50%", transform: "rotate(45deg)", transformStyle: "preserve-3d" } }, o);
      });
    return g.jsx("div", { style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: "-1" }, children: n });
  },
  JP = () => {
    fe.useEffect(() => {
      const e = document.createElement("style");
      return (
        (e.type = "text/css"),
        (e.innerText = `
      @keyframes bubble-rise {
        0% { transform: translateY(0); }
        100% { transform: translateY(-100vh); }
      }
    `),
        document.head.appendChild(e),
        () => {
          document.head.removeChild(e);
        }
      );
    }, []);
  },
  eT = () => {
    JP();
    const e = [
        { quantity: "10K+", description: "Images Generated" },
        { quantity: "300+", description: "Videos Created" },
        { quantity: "100+", description: "Music Tracks" },
        { quantity: "1000+", description: "Prompts Shared" },
      ],
      [t, n] = f.useState(e),
      r = (o, i) => {
        const l = 33.333333333333336,
          c = o.map((p) => parseFloat(p.quantity) / l);
        let u = 0;
        const d = setInterval(() => {
          u < l
            ? (i(
                o.map((p, v) => {
                  const w = Math.min(parseFloat(p.quantity), (u + 1) * c[v]);
                  return { ...p, quantity: `${w.toFixed(0)}%` };
                })
              ),
              u++)
            : (i(o.map((p) => ({ ...p, quantity: p.quantity }))), clearInterval(d));
        }, 30);
        return () => clearInterval(d);
      };
    return (
      f.useEffect(() => {
        const o = r(e, n);
        return () => o();
      }, []),
      g.jsxs(g.Fragment, {
        children: [
          g.jsx(ZP, {}),
          g.jsxs("section", {
            className: "relative min-h-screen flex flex-col lg:flex-row items-center justify-center pt-10 md:pt-20 gap-10 overflow-hidden",
            children: [
              g.jsxs("div", { className: "absolute inset-0", children: [g.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-transparent" }), g.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(225,29,72,0.15),transparent_50%)]" }), g.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(225,29,72,0.1),transparent_40%)]" })] }),
              g.jsxs("div", {
                className: "relative text-center lg:text-start space-y-8 z-10 max-w-4xl px-6",
                children: [
                  g.jsx("main", {
                    className: "relative",
                    children: g.jsxs("h1", {
                      className: "text-6xl md:text-9xl font-bold tracking-tight",
                      children: [
                        g.jsxs("div", {
                          className: "relative inline-block",
                          children: [
                            g.jsx("span", { className: "absolute -left-4 -top-4 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl animate-pulse" }),
                            g.jsx("span", {
                              className: `relative inline-block transform hover:translate-y-1 transition-transform duration-300
                  bg-gradient-to-br from-rose-700 via-rose-500 to-rose-700 text-transparent bg-clip-text`,
                              children: "The",
                            }),
                          ],
                        }),
                        " ",
                        g.jsxs("div", {
                          className: "relative inline-block mt-2",
                          children: [
                            g.jsx("span", { className: "absolute -right-4 -bottom-4 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl animate-pulse-slow" }),
                            g.jsx("span", {
                              className: `relative inline-block transform hover:-translate-y-1 transition-transform duration-300
                  bg-gradient-to-br from-rose-700 via-rose-500 to-rose-700 text-transparent bg-clip-text`,
                              children: "Aggregator",
                            }),
                          ],
                        }),
                        g.jsx("br", {}),
                        g.jsxs("div", { className: "relative inline-block mt-4", children: [g.jsx("span", { className: "absolute -left-6 -bottom-6 w-40 h-40 bg-rose-500/5 rounded-full blur-3xl animate-pulse-slow" }), g.jsxs("span", { className: "relative inline-block transform hover:scale-105 transition-transform duration-300", children: [g.jsx("span", { className: "bg-gradient-to-br from-rose-700 via-rose-500 to-rose-700 text-transparent bg-clip-text", children: "of" }), " ", g.jsx("span", { className: "text-white", children: "AI Creativity" })] })] }),
                      ],
                    }),
                  }),
                  g.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-20",
                    children: t.map(({ quantity: o, description: i }, s) =>
                      g.jsxs(
                        "div",
                        {
                          className: `group relative p-6 backdrop-blur-md bg-white/5 rounded-2xl border border-rose-500/20 
                hover:border-rose-500 transition-all duration-500 hover:scale-105`,
                          style: { transform: `perspective(1000px) rotateX(${s % 2 ? 5 : -5}deg)` },
                          children: [
                            g.jsx("div", {
                              className: `absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent opacity-0 
                  group-hover:opacity-100 transition-opacity rounded-2xl`,
                            }),
                            g.jsx("p", {
                              className: `text-4xl font-bold bg-gradient-to-br from-rose-600 to-rose-400 
                  text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300`,
                              children: o,
                            }),
                            g.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mt-2 group-hover:text-rose-400 transition-colors", children: i }),
                          ],
                        },
                        i
                      )
                    ),
                  }),
                ],
              }),
              g.jsx("div", { className: "relative perspective-1000 w-full max-w-2xl", children: g.jsx(qP, {}) }),
            ],
          }),
        ],
      })
    );
  };
function I() {
  return (
    (I = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    I.apply(this, arguments)
  );
}
function tT(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function yi(...e) {
  return (t) => e.forEach((n) => tT(n, t));
}
function we(...e) {
  return f.useCallback(yi(...e), e);
}
const Wr = f.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = f.Children.toArray(n),
    i = o.find(rT);
  if (i) {
    const s = i.props.children,
      a = o.map((l) => (l === i ? (f.Children.count(s) > 1 ? f.Children.only(null) : f.isValidElement(s) ? s.props.children : null) : l));
    return f.createElement(Hc, I({}, r, { ref: t }), f.isValidElement(s) ? f.cloneElement(s, void 0, a) : null);
  }
  return f.createElement(Hc, I({}, r, { ref: t }), n);
});
Wr.displayName = "Slot";
const Hc = f.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return f.isValidElement(n) ? f.cloneElement(n, { ...oT(r, n.props), ref: t ? yi(t, n.ref) : n.ref }) : f.Children.count(n) > 1 ? f.Children.only(null) : null;
});
Hc.displayName = "SlotClone";
const nT = ({ children: e }) => f.createElement(f.Fragment, null, e);
function rT(e) {
  return f.isValidElement(e) && e.type === nT;
}
function oT(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
const iT = Md("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-10 px-4 py-2", sm: "h-9 rounded-md px-3", lg: "h-11 rounded-md px-8", icon: "h-10 w-10" } }, defaultVariants: { variant: "default", size: "default" } }),
  _a = f.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
    const s = r ? Wr : "button";
    return g.jsx(s, { className: ae(iT({ variant: t, size: n, className: e })), ref: i, ...o });
  });
_a.displayName = "Button";
const sT = () => g.jsx("section", { id: "mcprogram", className: "bg-muted/50 py-16 my-24 sm:my-32", children: g.jsxs("div", { className: "container lg:grid lg:grid-cols-2 place-items-center", children: [g.jsxs("div", { className: "lg:col-start-1", children: [g.jsxs("h2", { className: "text-3xl md:text-4xl font-bold ", children: [g.jsx("span", { className: "text-primary", children: "Cosmic" }), g.jsx("span", { className: "text-foreground", children: "AI" }), g.jsxs("span", { className: "bg-foreground text-transparent bg-clip-text", children: [" ", "Model Creators Program", " "] }), "Boost your model's performance with our opt-in program"] }), g.jsx("p", { className: "text-muted-foreground text-xl mt-4 mb-8 lg:mb-0", children: "Opt-in. Earn on a per-generation basis. Collaborate, innovate, earn." })] }), g.jsx("div", { className: "space-y-4 lg:col-start-2", children: g.jsx(_a, { className: "w-full md:mr-4 md:w-auto text-2xl", children: "Coming Soon!" }) })] }) });
function Zr(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = f.createContext(s),
      l = n.length;
    n = [...n, s];
    function c(d) {
      const { scope: p, children: v, ...w } = d,
        x = (p == null ? void 0 : p[e][l]) || a,
        b = f.useMemo(() => w, Object.values(w));
      return f.createElement(x.Provider, { value: b }, v);
    }
    function u(d, p) {
      const v = (p == null ? void 0 : p[e][l]) || a,
        w = f.useContext(v);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return (c.displayName = i + "Provider"), [c, u];
  }
  const o = () => {
    const i = n.map((s) => f.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return f.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, aT(o, ...t)];
}
function aT(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function L(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
  };
}
const lT = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  ce = lT.reduce((e, t) => {
    const n = f.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        a = i ? Wr : t;
      return (
        f.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        f.createElement(a, I({}, s, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function yy(e, t) {
  e && pi.flushSync(() => e.dispatchEvent(t));
}
function Ce(e) {
  const t = f.useRef(e);
  return (
    f.useEffect(() => {
      t.current = e;
    }),
    f.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Id({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = cT({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    a = Ce(n),
    l = f.useCallback(
      (c) => {
        if (i) {
          const d = typeof c == "function" ? c(e) : c;
          d !== e && a(d);
        } else o(c);
      },
      [i, e, o, a]
    );
  return [s, l];
}
function cT({ defaultProp: e, onChange: t }) {
  const n = f.useState(e),
    [r] = n,
    o = f.useRef(r),
    i = Ce(t);
  return (
    f.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
const uT = f.createContext(void 0);
function Dd(e) {
  const t = f.useContext(uT);
  return e || t || "ltr";
}
const Kt = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {};
function dT(e, t) {
  return f.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Qt = (e) => {
  const { present: t, children: n } = e,
    r = fT(t),
    o = typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n),
    i = we(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? f.cloneElement(o, { ref: i }) : null;
};
Qt.displayName = "Presence";
function fT(e) {
  const [t, n] = f.useState(),
    r = f.useRef({}),
    o = f.useRef(e),
    i = f.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = dT(s, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return (
    f.useEffect(() => {
      const c = Xi(r.current);
      i.current = a === "mounted" ? c : "none";
    }, [a]),
    Kt(() => {
      const c = r.current,
        u = o.current;
      if (u !== e) {
        const p = i.current,
          v = Xi(c);
        e ? l("MOUNT") : v === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), (o.current = e);
      }
    }, [e, l]),
    Kt(() => {
      if (t) {
        const c = (d) => {
            const v = Xi(r.current).includes(d.animationName);
            d.target === t && v && pi.flushSync(() => l("ANIMATION_END"));
          },
          u = (d) => {
            d.target === t && (i.current = Xi(r.current));
          };
        return (
          t.addEventListener("animationstart", u),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
            t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: f.useCallback((c) => {
        c && (r.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function Xi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const pT = ym.useId || (() => {});
let hT = 0;
function ni(e) {
  const [t, n] = f.useState(pT());
  return (
    Kt(() => {
      e || n((r) => r ?? String(hT++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function ja(e) {
  const t = e + "CollectionProvider",
    [n, r] = Zr(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (v) => {
      const { scope: w, children: x } = v,
        b = fe.useRef(null),
        h = fe.useRef(new Map()).current;
      return fe.createElement(o, { scope: w, itemMap: h, collectionRef: b }, x);
    },
    a = e + "CollectionSlot",
    l = fe.forwardRef((v, w) => {
      const { scope: x, children: b } = v,
        h = i(a, x),
        m = we(w, h.collectionRef);
      return fe.createElement(Wr, { ref: m }, b);
    }),
    c = e + "CollectionItemSlot",
    u = "data-radix-collection-item",
    d = fe.forwardRef((v, w) => {
      const { scope: x, children: b, ...h } = v,
        m = fe.useRef(null),
        y = we(w, m),
        S = i(c, x);
      return fe.useEffect(() => (S.itemMap.set(m, { ref: m, ...h }), () => void S.itemMap.delete(m))), fe.createElement(Wr, { [u]: "", ref: y }, b);
    });
  function p(v) {
    const w = i(e + "CollectionConsumer", v);
    return fe.useCallback(() => {
      const b = w.collectionRef.current;
      if (!b) return [];
      const h = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(w.itemMap.values()).sort((S, C) => h.indexOf(S.ref.current) - h.indexOf(C.ref.current));
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: d }, p, r];
}
function mT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ce(e);
  f.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [n, t]);
}
const Gc = "dismissableLayer.update",
  gT = "dismissableLayer.pointerDownOutside",
  vT = "dismissableLayer.focusOutside";
let Lh;
const yT = f.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
  xy = f.forwardRef((e, t) => {
    var n;
    const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: a, onDismiss: l, ...c } = e,
      u = f.useContext(yT),
      [d, p] = f.useState(null),
      v = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document,
      [, w] = f.useState({}),
      x = we(t, (P) => p(P)),
      b = Array.from(u.layers),
      [h] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = b.indexOf(h),
      y = d ? b.indexOf(d) : -1,
      S = u.layersWithOutsidePointerEventsDisabled.size > 0,
      C = y >= m,
      E = xT((P) => {
        const k = P.target,
          M = [...u.branches].some((O) => O.contains(k));
        !C || M || (i == null || i(P), a == null || a(P), P.defaultPrevented || l == null || l());
      }, v),
      T = wT((P) => {
        const k = P.target;
        [...u.branches].some((O) => O.contains(k)) || (s == null || s(P), a == null || a(P), P.defaultPrevented || l == null || l());
      }, v);
    return (
      mT((P) => {
        y === u.layers.size - 1 && (o == null || o(P), !P.defaultPrevented && l && (P.preventDefault(), l()));
      }, v),
      f.useEffect(() => {
        if (d)
          return (
            r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ((Lh = v.body.style.pointerEvents), (v.body.style.pointerEvents = "none")), u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Fh(),
            () => {
              r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Lh);
            }
          );
      }, [d, v, r, u]),
      f.useEffect(
        () => () => {
          d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Fh());
        },
        [d, u]
      ),
      f.useEffect(() => {
        const P = () => w({});
        return document.addEventListener(Gc, P), () => document.removeEventListener(Gc, P);
      }, []),
      f.createElement(ce.div, I({}, c, { ref: x, style: { pointerEvents: S ? (C ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: L(e.onFocusCapture, T.onFocusCapture), onBlurCapture: L(e.onBlurCapture, T.onBlurCapture), onPointerDownCapture: L(e.onPointerDownCapture, E.onPointerDownCapture) }))
    );
  });
function xT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ce(e),
    r = f.useRef(!1),
    o = f.useRef(() => {});
  return (
    f.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let u = function () {
              wy(gT, n, c, { discrete: !0 });
            };
            var l = u;
            const c = { originalEvent: a };
            a.pointerType === "touch" ? (t.removeEventListener("click", o.current), (o.current = u), t.addEventListener("click", o.current, { once: !0 })) : u();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function wT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ce(e),
    r = f.useRef(!1);
  return (
    f.useEffect(() => {
      const o = (i) => {
        i.target && !r.current && wy(vT, n, { originalEvent: i }, { discrete: !1 });
      };
      return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  );
}
function Fh() {
  const e = new CustomEvent(Gc);
  document.dispatchEvent(e);
}
function wy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? yy(o, i) : o.dispatchEvent(i);
}
function bT(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous), [e]);
}
const ST = f.forwardRef((e, t) => f.createElement(ce.span, I({}, e, { ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style } }))),
  CT = ST,
  xi = "NavigationMenu",
  [Od, by, ET] = ja(xi),
  [Yc, PT, TT] = ja(xi),
  [Ld, iR] = Zr(xi, [ET, TT]),
  [kT, bt] = Ld(xi),
  [$T, RT] = Ld(xi),
  NT = f.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: i, delayDuration: s = 200, skipDelayDuration: a = 300, orientation: l = "horizontal", dir: c, ...u } = e,
      [d, p] = f.useState(null),
      v = we(t, (k) => p(k)),
      w = Dd(c),
      x = f.useRef(0),
      b = f.useRef(0),
      h = f.useRef(0),
      [m, y] = f.useState(!0),
      [S = "", C] = Id({
        prop: r,
        onChange: (k) => {
          const M = k !== "",
            O = a > 0;
          M ? (window.clearTimeout(h.current), O && y(!1)) : (window.clearTimeout(h.current), (h.current = window.setTimeout(() => y(!0), a))), o == null || o(k);
        },
        defaultProp: i,
      }),
      E = f.useCallback(() => {
        window.clearTimeout(b.current), (b.current = window.setTimeout(() => C(""), 150));
      }, [C]),
      T = f.useCallback(
        (k) => {
          window.clearTimeout(b.current), C(k);
        },
        [C]
      ),
      P = f.useCallback(
        (k) => {
          S === k
            ? window.clearTimeout(b.current)
            : (x.current = window.setTimeout(() => {
                window.clearTimeout(b.current), C(k);
              }, s));
        },
        [S, C, s]
      );
    return (
      f.useEffect(
        () => () => {
          window.clearTimeout(x.current), window.clearTimeout(b.current), window.clearTimeout(h.current);
        },
        []
      ),
      f.createElement(
        MT,
        {
          scope: n,
          isRootMenu: !0,
          value: S,
          dir: w,
          orientation: l,
          rootNavigationMenu: d,
          onTriggerEnter: (k) => {
            window.clearTimeout(x.current), m ? P(k) : T(k);
          },
          onTriggerLeave: () => {
            window.clearTimeout(x.current), E();
          },
          onContentEnter: () => window.clearTimeout(b.current),
          onContentLeave: E,
          onItemSelect: (k) => {
            C((M) => (M === k ? "" : k));
          },
          onItemDismiss: () => C(""),
        },
        f.createElement(ce.nav, I({ "aria-label": "Main", "data-orientation": l, dir: w }, u, { ref: v }))
      )
    );
  }),
  MT = (e) => {
    const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: i, children: s, value: a, onItemSelect: l, onItemDismiss: c, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: v } = e,
      [w, x] = f.useState(null),
      [b, h] = f.useState(new Map()),
      [m, y] = f.useState(null);
    return f.createElement(
      kT,
      {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: r,
        value: a,
        previousValue: bT(a),
        baseId: ni(),
        dir: o,
        orientation: i,
        viewport: w,
        onViewportChange: x,
        indicatorTrack: m,
        onIndicatorTrackChange: y,
        onTriggerEnter: Ce(u),
        onTriggerLeave: Ce(d),
        onContentEnter: Ce(p),
        onContentLeave: Ce(v),
        onItemSelect: Ce(l),
        onItemDismiss: Ce(c),
        onViewportContentChange: f.useCallback((S, C) => {
          h((E) => (E.set(S, C), new Map(E)));
        }, []),
        onViewportContentRemove: f.useCallback((S) => {
          h((C) => (C.has(S) ? (C.delete(S), new Map(C)) : C));
        }, []),
      },
      f.createElement(Od.Provider, { scope: t }, f.createElement($T, { scope: t, items: b }, s))
    );
  },
  AT = "NavigationMenuList",
  _T = f.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = bt(AT, n),
      i = f.createElement(ce.ul, I({ "data-orientation": o.orientation }, r, { ref: t }));
    return f.createElement(ce.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange }, f.createElement(Od.Slot, { scope: n }, o.isRootMenu ? f.createElement(Ty, { asChild: !0 }, i) : i));
  }),
  jT = "NavigationMenuItem",
  [IT, Sy] = Ld(jT),
  DT = f.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e,
      i = ni(),
      s = r || i || "LEGACY_REACT_AUTO_VALUE",
      a = f.useRef(null),
      l = f.useRef(null),
      c = f.useRef(null),
      u = f.useRef(() => {}),
      d = f.useRef(!1),
      p = f.useCallback((w = "start") => {
        if (a.current) {
          u.current();
          const x = Xc(a.current);
          x.length && Fd(w === "start" ? x : x.reverse());
        }
      }, []),
      v = f.useCallback(() => {
        if (a.current) {
          const w = Xc(a.current);
          w.length && (u.current = GT(w));
        }
      }, []);
    return f.createElement(IT, { scope: n, value: s, triggerRef: l, contentRef: a, focusProxyRef: c, wasEscapeCloseRef: d, onEntryKeyDown: p, onFocusProxyEnter: p, onRootContentClose: v, onContentFocusOutside: v }, f.createElement(ce.li, I({}, o, { ref: t })));
  }),
  Vh = "NavigationMenuTrigger",
  OT = f.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, disabled: r, ...o } = e,
      i = bt(Vh, e.__scopeNavigationMenu),
      s = Sy(Vh, e.__scopeNavigationMenu),
      a = f.useRef(null),
      l = we(a, s.triggerRef, t),
      c = ky(i.baseId, s.value),
      u = $y(i.baseId, s.value),
      d = f.useRef(!1),
      p = f.useRef(!1),
      v = s.value === i.value;
    return f.createElement(
      f.Fragment,
      null,
      f.createElement(
        Od.ItemSlot,
        { scope: n, value: s.value },
        f.createElement(
          HT,
          { asChild: !0 },
          f.createElement(
            ce.button,
            I({ id: c, disabled: r, "data-disabled": r ? "" : void 0, "data-state": Vd(v), "aria-expanded": v, "aria-controls": u }, o, {
              ref: l,
              onPointerEnter: L(e.onPointerEnter, () => {
                (p.current = !1), (s.wasEscapeCloseRef.current = !1);
              }),
              onPointerMove: L(
                e.onPointerMove,
                na(() => {
                  r || p.current || s.wasEscapeCloseRef.current || d.current || (i.onTriggerEnter(s.value), (d.current = !0));
                })
              ),
              onPointerLeave: L(
                e.onPointerLeave,
                na(() => {
                  r || (i.onTriggerLeave(), (d.current = !1));
                })
              ),
              onClick: L(e.onClick, () => {
                i.onItemSelect(s.value), (p.current = v);
              }),
              onKeyDown: L(e.onKeyDown, (w) => {
                const b = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
                v && w.key === b && (s.onEntryKeyDown(), w.preventDefault());
              }),
            })
          )
        )
      ),
      v &&
        f.createElement(
          f.Fragment,
          null,
          f.createElement(CT, {
            "aria-hidden": !0,
            tabIndex: 0,
            ref: s.focusProxyRef,
            onFocus: (w) => {
              const x = s.contentRef.current,
                b = w.relatedTarget,
                h = b === a.current,
                m = x == null ? void 0 : x.contains(b);
              (h || !m) && s.onFocusProxyEnter(h ? "start" : "end");
            },
          }),
          i.viewport && f.createElement("span", { "aria-owns": u })
        )
    );
  }),
  Cy = "NavigationMenuIndicator",
  LT = f.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = bt(Cy, e.__scopeNavigationMenu),
      i = !!o.value;
    return o.indicatorTrack ? Cv.createPortal(f.createElement(Qt, { present: n || i }, f.createElement(FT, I({}, r, { ref: t }))), o.indicatorTrack) : null;
  }),
  FT = f.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = bt(Cy, n),
      i = by(n),
      [s, a] = f.useState(null),
      [l, c] = f.useState(null),
      u = o.orientation === "horizontal",
      d = !!o.value;
    f.useEffect(() => {
      var v;
      const x = (v = i().find((b) => b.value === o.value)) === null || v === void 0 ? void 0 : v.ref.current;
      x && a(x);
    }, [i, o.value]);
    const p = () => {
      s && c({ size: u ? s.offsetWidth : s.offsetHeight, offset: u ? s.offsetLeft : s.offsetTop });
    };
    return Qc(s, p), Qc(o.indicatorTrack, p), l ? f.createElement(ce.div, I({ "aria-hidden": !0, "data-state": d ? "visible" : "hidden", "data-orientation": o.orientation }, r, { ref: t, style: { position: "absolute", ...(u ? { left: 0, width: l.size + "px", transform: `translateX(${l.offset}px)` } : { top: 0, height: l.size + "px", transform: `translateY(${l.offset}px)` }), ...r.style } })) : null;
  }),
  ri = "NavigationMenuContent",
  VT = f.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = bt(ri, e.__scopeNavigationMenu),
      i = Sy(ri, e.__scopeNavigationMenu),
      s = we(i.contentRef, t),
      a = i.value === o.value,
      l = { value: i.value, triggerRef: i.triggerRef, focusProxyRef: i.focusProxyRef, wasEscapeCloseRef: i.wasEscapeCloseRef, onContentFocusOutside: i.onContentFocusOutside, onRootContentClose: i.onRootContentClose, ...r };
    return o.viewport ? f.createElement(zT, I({ forceMount: n }, l, { ref: s })) : f.createElement(Qt, { present: n || a }, f.createElement(Ey, I({ "data-state": Vd(a) }, l, { ref: s, onPointerEnter: L(e.onPointerEnter, o.onContentEnter), onPointerLeave: L(e.onPointerLeave, na(o.onContentLeave)), style: { pointerEvents: !a && o.isRootMenu ? "none" : void 0, ...l.style } })));
  }),
  zT = f.forwardRef((e, t) => {
    const n = bt(ri, e.__scopeNavigationMenu),
      { onViewportContentChange: r, onViewportContentRemove: o } = n;
    return (
      Kt(() => {
        r(e.value, { ref: t, ...e });
      }, [e, t, r]),
      Kt(() => () => o(e.value), [e.value, o]),
      null
    );
  }),
  Pl = "navigationMenu.rootContentDismiss",
  Ey = f.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: i, wasEscapeCloseRef: s, onRootContentClose: a, onContentFocusOutside: l, ...c } = e,
      u = bt(ri, n),
      d = f.useRef(null),
      p = we(d, t),
      v = ky(u.baseId, r),
      w = $y(u.baseId, r),
      x = by(n),
      b = f.useRef(null),
      { onItemDismiss: h } = u;
    f.useEffect(() => {
      const y = d.current;
      if (u.isRootMenu && y) {
        const S = () => {
          var C;
          h(), a(), y.contains(document.activeElement) && ((C = o.current) === null || C === void 0 || C.focus());
        };
        return y.addEventListener(Pl, S), () => y.removeEventListener(Pl, S);
      }
    }, [u.isRootMenu, e.value, o, h, a]);
    const m = f.useMemo(() => {
      const S = x().map((M) => M.value);
      u.dir === "rtl" && S.reverse();
      const C = S.indexOf(u.value),
        E = S.indexOf(u.previousValue),
        T = r === u.value,
        P = E === S.indexOf(r);
      if (!T && !P) return b.current;
      const k = (() => {
        if (C !== E) {
          if (T && E !== -1) return C > E ? "from-end" : "from-start";
          if (P && C !== -1) return C > E ? "to-start" : "to-end";
        }
        return null;
      })();
      return (b.current = k), k;
    }, [u.previousValue, u.value, u.dir, x, r]);
    return f.createElement(
      Ty,
      { asChild: !0 },
      f.createElement(
        xy,
        I({ id: w, "aria-labelledby": v, "data-motion": m, "data-orientation": u.orientation }, c, {
          ref: p,
          onDismiss: () => {
            var y;
            const S = new Event(Pl, { bubbles: !0, cancelable: !0 });
            (y = d.current) === null || y === void 0 || y.dispatchEvent(S);
          },
          onFocusOutside: L(e.onFocusOutside, (y) => {
            var S;
            l();
            const C = y.target;
            (S = u.rootNavigationMenu) !== null && S !== void 0 && S.contains(C) && y.preventDefault();
          }),
          onPointerDownOutside: L(e.onPointerDownOutside, (y) => {
            var S;
            const C = y.target,
              E = x().some((P) => {
                var k;
                return (k = P.ref.current) === null || k === void 0 ? void 0 : k.contains(C);
              }),
              T = u.isRootMenu && ((S = u.viewport) === null || S === void 0 ? void 0 : S.contains(C));
            (E || T || !u.isRootMenu) && y.preventDefault();
          }),
          onKeyDown: L(e.onKeyDown, (y) => {
            const S = y.altKey || y.ctrlKey || y.metaKey;
            if (y.key === "Tab" && !S) {
              const T = Xc(y.currentTarget),
                P = document.activeElement,
                k = T.findIndex((j) => j === P),
                O = y.shiftKey ? T.slice(0, k).reverse() : T.slice(k + 1, T.length);
              if (Fd(O)) y.preventDefault();
              else {
                var E;
                (E = i.current) === null || E === void 0 || E.focus();
              }
            }
          }),
          onEscapeKeyDown: L(e.onEscapeKeyDown, (y) => {
            s.current = !0;
          }),
        })
      )
    );
  }),
  Py = "NavigationMenuViewport",
  BT = f.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = !!bt(Py, e.__scopeNavigationMenu).value;
    return f.createElement(Qt, { present: n || i }, f.createElement(UT, I({}, r, { ref: t })));
  }),
  UT = f.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, children: r, ...o } = e,
      i = bt(Py, n),
      s = we(t, i.onViewportChange),
      a = RT(ri, e.__scopeNavigationMenu),
      [l, c] = f.useState(null),
      [u, d] = f.useState(null),
      p = l ? (l == null ? void 0 : l.width) + "px" : void 0,
      v = l ? (l == null ? void 0 : l.height) + "px" : void 0,
      w = !!i.value,
      x = w ? i.value : i.previousValue;
    return (
      Qc(u, () => {
        u && c({ width: u.offsetWidth, height: u.offsetHeight });
      }),
      f.createElement(
        ce.div,
        I({ "data-state": Vd(w), "data-orientation": i.orientation }, o, { ref: s, style: { pointerEvents: !w && i.isRootMenu ? "none" : void 0, "--radix-navigation-menu-viewport-width": p, "--radix-navigation-menu-viewport-height": v, ...o.style }, onPointerEnter: L(e.onPointerEnter, i.onContentEnter), onPointerLeave: L(e.onPointerLeave, na(i.onContentLeave)) }),
        Array.from(a.items).map(([h, { ref: m, forceMount: y, ...S }]) => {
          const C = x === h;
          return f.createElement(
            Qt,
            { key: h, present: y || C },
            f.createElement(
              Ey,
              I({}, S, {
                ref: yi(m, (E) => {
                  C && E && d(E);
                }),
              })
            )
          );
        })
      )
    );
  }),
  WT = "FocusGroup",
  Ty = f.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = bt(WT, n);
    return f.createElement(Yc.Provider, { scope: n }, f.createElement(Yc.Slot, { scope: n }, f.createElement(ce.div, I({ dir: o.dir }, r, { ref: t }))));
  }),
  zh = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
  KT = "FocusGroupItem",
  HT = f.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = PT(n),
      i = bt(KT, n);
    return f.createElement(
      Yc.ItemSlot,
      { scope: n },
      f.createElement(
        ce.button,
        I({}, r, {
          ref: t,
          onKeyDown: L(e.onKeyDown, (s) => {
            if (["Home", "End", ...zh].includes(s.key)) {
              let l = o().map((d) => d.ref.current);
              if (([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && l.reverse(), zh.includes(s.key))) {
                const d = l.indexOf(s.currentTarget);
                l = l.slice(d + 1);
              }
              setTimeout(() => Fd(l)), s.preventDefault();
            }
          }),
        })
      )
    );
  });
function Xc(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Fd(e) {
  const t = document.activeElement;
  return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
function GT(e) {
  return (
    e.forEach((t) => {
      (t.dataset.tabindex = t.getAttribute("tabindex") || ""), t.setAttribute("tabindex", "-1");
    }),
    () => {
      e.forEach((t) => {
        const n = t.dataset.tabindex;
        t.setAttribute("tabindex", n);
      });
    }
  );
}
function Qc(e, t) {
  const n = Ce(t);
  Kt(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
function Vd(e) {
  return e ? "open" : "closed";
}
function ky(e, t) {
  return `${e}-trigger-${t}`;
}
function $y(e, t) {
  return `${e}-content-${t}`;
}
function na(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
const Ry = NT,
  Ny = _T,
  YT = DT,
  My = OT,
  Ay = LT,
  _y = VT,
  jy = BT;
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var XT = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QT = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  wi = (e, t) => {
    const n = f.forwardRef(({ color: r = "currentColor", size: o = 24, strokeWidth: i = 2, absoluteStrokeWidth: s, className: a = "", children: l, ...c }, u) => f.createElement("svg", { ref: u, ...XT, width: o, height: o, stroke: r, strokeWidth: s ? (Number(i) * 24) / Number(o) : i, className: ["lucide", `lucide-${QT(e)}`, a].join(" "), ...c }, [...t.map(([d, p]) => f.createElement(d, p)), ...(Array.isArray(l) ? l : [l])]));
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qT = wi("ArrowUpToLine", [
  ["path", { d: "M5 3h14", key: "7usisc" }],
  ["path", { d: "m18 13-6-6-6 6", key: "1kf1n9" }],
  ["path", { d: "M12 7v14", key: "1akyts" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZT = wi("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JT = wi("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ek = wi("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tk = wi("Circle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]),
  Iy = f.forwardRef(({ className: e, children: t, ...n }, r) => g.jsxs(Ry, { ref: r, className: ae("relative z-10 flex max-w-max flex-1 items-center justify-center", e), ...n, children: [t, g.jsx(Oy, {})] }));
Iy.displayName = Ry.displayName;
const Dy = f.forwardRef(({ className: e, ...t }, n) => g.jsx(Ny, { ref: n, className: ae("group flex flex-1 list-none items-center justify-center space-x-1", e), ...t }));
Dy.displayName = Ny.displayName;
const nk = YT,
  rk = Md("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),
  ok = f.forwardRef(({ className: e, children: t, ...n }, r) => g.jsxs(My, { ref: r, className: ae(rk(), "group", e), ...n, children: [t, " ", g.jsx(JT, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180", "aria-hidden": "true" })] }));
ok.displayName = My.displayName;
const ik = f.forwardRef(({ className: e, ...t }, n) => g.jsx(_y, { ref: n, className: ae("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", e), ...t }));
ik.displayName = _y.displayName;
const Oy = f.forwardRef(({ className: e, ...t }, n) => g.jsx("div", { className: ae("absolute left-0 top-full flex justify-center"), children: g.jsx(jy, { className: ae("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", e), ref: n, ...t }) }));
Oy.displayName = jy.displayName;
const sk = f.forwardRef(({ className: e, ...t }, n) => g.jsx(Ay, { ref: n, className: ae("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", e), ...t, children: g.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }) }));
sk.displayName = Ay.displayName;
let Tl = 0;
function ak() {
  f.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Bh()),
      document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Bh()),
      Tl++,
      () => {
        Tl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), Tl--;
      }
    );
  }, []);
}
function Bh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"), e;
}
const kl = "focusScope.autoFocusOnMount",
  $l = "focusScope.autoFocusOnUnmount",
  Uh = { bubbles: !1, cancelable: !0 },
  lk = f.forwardRef((e, t) => {
    const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...s } = e,
      [a, l] = f.useState(null),
      c = Ce(o),
      u = Ce(i),
      d = f.useRef(null),
      p = we(t, (x) => l(x)),
      v = f.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    f.useEffect(() => {
      if (r) {
        let m = function (E) {
            if (v.paused || !a) return;
            const T = E.target;
            a.contains(T) ? (d.current = T) : nn(d.current, { select: !0 });
          },
          y = function (E) {
            if (v.paused || !a) return;
            const T = E.relatedTarget;
            T !== null && (a.contains(T) || nn(d.current, { select: !0 }));
          },
          S = function (E) {
            if (document.activeElement === document.body) for (const P of E) P.removedNodes.length > 0 && nn(a);
          };
        var x = m,
          b = y,
          h = S;
        document.addEventListener("focusin", m), document.addEventListener("focusout", y);
        const C = new MutationObserver(S);
        return (
          a && C.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", m), document.removeEventListener("focusout", y), C.disconnect();
          }
        );
      }
    }, [r, a, v.paused]),
      f.useEffect(() => {
        if (a) {
          Kh.add(v);
          const x = document.activeElement;
          if (!a.contains(x)) {
            const h = new CustomEvent(kl, Uh);
            a.addEventListener(kl, c), a.dispatchEvent(h), h.defaultPrevented || (ck(hk(Ly(a)), { select: !0 }), document.activeElement === x && nn(a));
          }
          return () => {
            a.removeEventListener(kl, c),
              setTimeout(() => {
                const h = new CustomEvent($l, Uh);
                a.addEventListener($l, u), a.dispatchEvent(h), h.defaultPrevented || nn(x ?? document.body, { select: !0 }), a.removeEventListener($l, u), Kh.remove(v);
              }, 0);
          };
        }
      }, [a, c, u, v]);
    const w = f.useCallback(
      (x) => {
        if ((!n && !r) || v.paused) return;
        const b = x.key === "Tab" && !x.altKey && !x.ctrlKey && !x.metaKey,
          h = document.activeElement;
        if (b && h) {
          const m = x.currentTarget,
            [y, S] = uk(m);
          y && S ? (!x.shiftKey && h === S ? (x.preventDefault(), n && nn(y, { select: !0 })) : x.shiftKey && h === y && (x.preventDefault(), n && nn(S, { select: !0 }))) : h === m && x.preventDefault();
        }
      },
      [n, r, v.paused]
    );
    return f.createElement(ce.div, I({ tabIndex: -1 }, s, { ref: p, onKeyDown: w }));
  });
function ck(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e) if ((nn(r, { select: t }), document.activeElement !== n)) return;
}
function uk(e) {
  const t = Ly(e),
    n = Wh(t, e),
    r = Wh(t.reverse(), e);
  return [n, r];
}
function Ly(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Wh(e, t) {
  for (const n of e) if (!dk(n, { upTo: t })) return n;
}
function dk(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function fk(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && fk(e) && t && e.select();
  }
}
const Kh = pk();
function pk() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Hh(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Hh(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function Hh(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function hk(e) {
  return e.filter((t) => t.tagName !== "A");
}
const mk = ["top", "right", "bottom", "left"],
  Pn = Math.min,
  Ge = Math.max,
  ra = Math.round,
  Qi = Math.floor,
  Tn = (e) => ({ x: e, y: e }),
  gk = { left: "right", right: "left", bottom: "top", top: "bottom" },
  vk = { start: "end", end: "start" };
function qc(e, t, n) {
  return Ge(e, Pn(t, n));
}
function Ht(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gt(e) {
  return e.split("-")[0];
}
function Jr(e) {
  return e.split("-")[1];
}
function zd(e) {
  return e === "x" ? "y" : "x";
}
function Bd(e) {
  return e === "y" ? "height" : "width";
}
function eo(e) {
  return ["top", "bottom"].includes(Gt(e)) ? "y" : "x";
}
function Ud(e) {
  return zd(eo(e));
}
function yk(e, t, n) {
  n === void 0 && (n = !1);
  const r = Jr(e),
    o = Ud(e),
    i = Bd(o);
  let s = o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = oa(s)), [s, oa(s)];
}
function xk(e) {
  const t = oa(e);
  return [Zc(e), t, Zc(t)];
}
function Zc(e) {
  return e.replace(/start|end/g, (t) => vk[t]);
}
function wk(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function bk(e, t, n, r) {
  const o = Jr(e);
  let i = wk(Gt(e), n === "start", r);
  return o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Zc)))), i;
}
function oa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gk[t]);
}
function Sk(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Fy(e) {
  return typeof e != "number" ? Sk(e) : { top: e, right: e, bottom: e, left: e };
}
function ia(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
function Gh(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = eo(t),
    s = Ud(t),
    a = Bd(s),
    l = Gt(t),
    c = i === "y",
    u = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    p = r[a] / 2 - o[a] / 2;
  let v;
  switch (l) {
    case "top":
      v = { x: u, y: r.y - o.height };
      break;
    case "bottom":
      v = { x: u, y: r.y + r.height };
      break;
    case "right":
      v = { x: r.x + r.width, y: d };
      break;
    case "left":
      v = { x: r.x - o.width, y: d };
      break;
    default:
      v = { x: r.x, y: r.y };
  }
  switch (Jr(t)) {
    case "start":
      v[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      v[s] += p * (n && c ? -1 : 1);
      break;
  }
  return v;
}
const Ck = async (e, t, n) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: u, y: d } = Gh(c, r, l),
    p = r,
    v = {},
    w = 0;
  for (let x = 0; x < a.length; x++) {
    const { name: b, fn: h } = a[x],
      { x: m, y, data: S, reset: C } = await h({ x: u, y: d, initialPlacement: r, placement: p, strategy: o, middlewareData: v, rects: c, platform: s, elements: { reference: e, floating: t } });
    if (((u = m ?? u), (d = y ?? d), (v = { ...v, [b]: { ...v[b], ...S } }), C && w <= 50)) {
      w++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (c = C.rects === !0 ? await s.getElementRects({ reference: e, floating: t, strategy: o }) : C.rects), ({ x: u, y: d } = Gh(c, p, l))), (x = -1);
      continue;
    }
  }
  return { x: u, y: d, placement: p, strategy: o, middlewareData: v };
};
async function oi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    { boundary: c = "clippingAncestors", rootBoundary: u = "viewport", elementContext: d = "floating", altBoundary: p = !1, padding: v = 0 } = Ht(t, e),
    w = Fy(v),
    b = a[p ? (d === "floating" ? "reference" : "floating") : d],
    h = ia(await i.getClippingRect({ element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))), boundary: c, rootBoundary: u, strategy: l })),
    m = d === "floating" ? { ...s.floating, x: r, y: o } : s.reference,
    y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(y))) ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 } : { x: 1, y: 1 },
    C = ia(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: y, strategy: l }) : m);
  return { top: (h.top - C.top + w.top) / S.y, bottom: (C.bottom - h.bottom + w.bottom) / S.y, left: (h.left - C.left + w.left) / S.x, right: (C.right - h.right + w.right) / S.x };
}
const Yh = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const { x: n, y: r, placement: o, rects: i, platform: s, elements: a, middlewareData: l } = t,
        { element: c, padding: u = 0 } = Ht(e, t) || {};
      if (c == null) return {};
      const d = Fy(u),
        p = { x: n, y: r },
        v = Ud(o),
        w = Bd(v),
        x = await s.getDimensions(c),
        b = v === "y",
        h = b ? "top" : "left",
        m = b ? "bottom" : "right",
        y = b ? "clientHeight" : "clientWidth",
        S = i.reference[w] + i.reference[v] - p[v] - i.floating[w],
        C = p[v] - i.reference[v],
        E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let T = E ? E[y] : 0;
      (!T || !(await (s.isElement == null ? void 0 : s.isElement(E)))) && (T = a.floating[y] || i.floating[w]);
      const P = S / 2 - C / 2,
        k = T / 2 - x[w] / 2 - 1,
        M = Pn(d[h], k),
        O = Pn(d[m], k),
        j = M,
        Z = T - x[w] - O,
        F = T / 2 - x[w] / 2 + P,
        G = qc(j, F, Z),
        z = !l.arrow && Jr(o) != null && F != G && i.reference[w] / 2 - (F < j ? M : O) - x[w] / 2 < 0,
        B = z ? (F < j ? F - j : F - Z) : 0;
      return { [v]: p[v] + B, data: { [v]: G, centerOffset: F - G - B, ...(z && { alignmentOffset: B }) }, reset: z };
    },
  }),
  Ek = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, middlewareData: i, rects: s, initialPlacement: a, platform: l, elements: c } = t,
            { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: p, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: w = "none", flipAlignment: x = !0, ...b } = Ht(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const h = Gt(o),
            m = Gt(a) === a,
            y = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            S = p || (m || !x ? [oa(a)] : xk(a));
          !p && w !== "none" && S.push(...bk(a, x, w, y));
          const C = [a, ...S],
            E = await oi(t, b),
            T = [];
          let P = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((u && T.push(E[h]), d)) {
            const j = yk(o, s, y);
            T.push(E[j[0]], E[j[1]]);
          }
          if (((P = [...P, { placement: o, overflows: T }]), !T.every((j) => j <= 0))) {
            var k, M;
            const j = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1,
              Z = C[j];
            if (Z) return { data: { index: j, overflows: P }, reset: { placement: Z } };
            let F = (M = P.filter((G) => G.overflows[0] <= 0).sort((G, z) => G.overflows[1] - z.overflows[1])[0]) == null ? void 0 : M.placement;
            if (!F)
              switch (v) {
                case "bestFit": {
                  var O;
                  const G = (O = P.map((z) => [z.placement, z.overflows.filter((B) => B > 0).reduce((B, $) => B + $, 0)]).sort((z, B) => z[1] - B[1])[0]) == null ? void 0 : O[0];
                  G && (F = G);
                  break;
                }
                case "initialPlacement":
                  F = a;
                  break;
              }
            if (o !== F) return { reset: { placement: F } };
          }
          return {};
        },
      }
    );
  };
function Xh(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Qh(e) {
  return mk.some((t) => e[t] >= 0);
}
const Pk = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Ht(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await oi(t, { ...o, elementContext: "reference" }),
              s = Xh(i, n.reference);
            return { data: { referenceHiddenOffsets: s, referenceHidden: Qh(s) } };
          }
          case "escaped": {
            const i = await oi(t, { ...o, altBoundary: !0 }),
              s = Xh(i, n.floating);
            return { data: { escapedOffsets: s, escaped: Qh(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Tk(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Gt(n),
    a = Jr(n),
    l = eo(n) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    u = i && l ? -1 : 1,
    d = Ht(t, e);
  let { mainAxis: p, crossAxis: v, alignmentAxis: w } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return a && typeof w == "number" && (v = a === "end" ? w * -1 : w), l ? { x: v * u, y: p * c } : { x: p * c, y: v * u };
}
const kk = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await Tk(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  $k = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: h, y: m } = b;
                  return { x: h, y: m };
                },
              },
              ...l
            } = Ht(e, t),
            c = { x: n, y: r },
            u = await oi(t, l),
            d = eo(Gt(o)),
            p = zd(d);
          let v = c[p],
            w = c[d];
          if (i) {
            const b = p === "y" ? "top" : "left",
              h = p === "y" ? "bottom" : "right",
              m = v + u[b],
              y = v - u[h];
            v = qc(m, v, y);
          }
          if (s) {
            const b = d === "y" ? "top" : "left",
              h = d === "y" ? "bottom" : "right",
              m = w + u[b],
              y = w - u[h];
            w = qc(m, w, y);
          }
          const x = a.fn({ ...t, [p]: v, [d]: w });
          return { ...x, data: { x: x.x - n, y: x.y - r } };
        },
      }
    );
  },
  Rk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = Ht(e, t),
            u = { x: n, y: r },
            d = eo(o),
            p = zd(d);
          let v = u[p],
            w = u[d];
          const x = Ht(a, t),
            b = typeof x == "number" ? { mainAxis: x, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x };
          if (l) {
            const y = p === "y" ? "height" : "width",
              S = i.reference[p] - i.floating[y] + b.mainAxis,
              C = i.reference[p] + i.reference[y] - b.mainAxis;
            v < S ? (v = S) : v > C && (v = C);
          }
          if (c) {
            var h, m;
            const y = p === "y" ? "width" : "height",
              S = ["top", "left"].includes(Gt(o)),
              C = i.reference[d] - i.floating[y] + ((S && ((h = s.offset) == null ? void 0 : h[d])) || 0) + (S ? 0 : b.crossAxis),
              E = i.reference[d] + i.reference[y] + (S ? 0 : ((m = s.offset) == null ? void 0 : m[d]) || 0) - (S ? b.crossAxis : 0);
            w < C ? (w = C) : w > E && (w = E);
          }
          return { [p]: v, [d]: w };
        },
      }
    );
  },
  Nk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: i } = t,
            { apply: s = () => {}, ...a } = Ht(e, t),
            l = await oi(t, a),
            c = Gt(n),
            u = Jr(n),
            d = eo(n) === "y",
            { width: p, height: v } = r.floating;
          let w, x;
          c === "top" || c === "bottom" ? ((w = c), (x = u === ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating))) ? "start" : "end") ? "left" : "right")) : ((x = c), (w = u === "end" ? "top" : "bottom"));
          const b = v - l[w],
            h = p - l[x],
            m = !t.middlewareData.shift;
          let y = b,
            S = h;
          if (d) {
            const E = p - l.left - l.right;
            S = u || m ? Pn(h, E) : E;
          } else {
            const E = v - l.top - l.bottom;
            y = u || m ? Pn(b, E) : E;
          }
          if (m && !u) {
            const E = Ge(l.left, 0),
              T = Ge(l.right, 0),
              P = Ge(l.top, 0),
              k = Ge(l.bottom, 0);
            d ? (S = p - 2 * (E !== 0 || T !== 0 ? E + T : Ge(l.left, l.right))) : (y = v - 2 * (P !== 0 || k !== 0 ? P + k : Ge(l.top, l.bottom)));
          }
          await s({ ...t, availableWidth: S, availableHeight: y });
          const C = await o.getDimensions(i.floating);
          return p !== C.width || v !== C.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function kn(e) {
  return Vy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Qe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qt(e) {
  var t;
  return (t = (Vy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vy(e) {
  return e instanceof Node || e instanceof Qe(e).Node;
}
function Yt(e) {
  return e instanceof Element || e instanceof Qe(e).Element;
}
function Mt(e) {
  return e instanceof HTMLElement || e instanceof Qe(e).HTMLElement;
}
function qh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Qe(e).ShadowRoot;
}
function bi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Mk(e) {
  return ["table", "td", "th"].includes(kn(e));
}
function Wd(e) {
  const t = Kd(),
    n = ct(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) || (!t && (n.filter ? n.filter !== "none" : !1)) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Ak(e) {
  let t = Kr(e);
  for (; Mt(t) && !Ia(t); ) {
    if (Wd(t)) return t;
    t = Kr(t);
  }
  return null;
}
function Kd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ia(e) {
  return ["html", "body", "#document"].includes(kn(e));
}
function ct(e) {
  return Qe(e).getComputedStyle(e);
}
function Da(e) {
  return Yt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Kr(e) {
  if (kn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (qh(e) && e.host) || qt(e);
  return qh(t) ? t.host : t;
}
function zy(e) {
  const t = Kr(e);
  return Ia(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Mt(t) && bi(t) ? t : zy(t);
}
function ii(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = zy(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Qe(o);
  return i ? t.concat(s, s.visualViewport || [], bi(o) ? o : [], s.frameElement && n ? ii(s.frameElement) : []) : t.concat(o, ii(o, [], n));
}
function By(e) {
  const t = ct(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Mt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = ra(n) !== i || ra(r) !== s;
  return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function Hd(e) {
  return Yt(e) ? e : e.contextElement;
}
function _r(e) {
  const t = Hd(e);
  if (!Mt(t)) return Tn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = By(t);
  let s = (i ? ra(n.width) : n.width) / r,
    a = (i ? ra(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: s, y: a };
}
const _k = Tn(0);
function Uy(e) {
  const t = Qe(e);
  return !Kd() || !t.visualViewport ? _k : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function jk(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Qe(e)) ? !1 : t;
}
function Qn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Hd(e);
  let s = Tn(1);
  t && (r ? Yt(r) && (s = _r(r)) : (s = _r(e)));
  const a = jk(i, n, r) ? Uy(i) : Tn(0);
  let l = (o.left + a.x) / s.x,
    c = (o.top + a.y) / s.y,
    u = o.width / s.x,
    d = o.height / s.y;
  if (i) {
    const p = Qe(i),
      v = r && Yt(r) ? Qe(r) : r;
    let w = p.frameElement;
    for (; w && r && v !== p; ) {
      const x = _r(w),
        b = w.getBoundingClientRect(),
        h = ct(w),
        m = b.left + (w.clientLeft + parseFloat(h.paddingLeft)) * x.x,
        y = b.top + (w.clientTop + parseFloat(h.paddingTop)) * x.y;
      (l *= x.x), (c *= x.y), (u *= x.x), (d *= x.y), (l += m), (c += y), (w = Qe(w).frameElement);
    }
  }
  return ia({ width: u, height: d, x: l, y: c });
}
function Ik(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const o = Mt(n),
    i = qt(n);
  if (n === i) return t;
  let s = { scrollLeft: 0, scrollTop: 0 },
    a = Tn(1);
  const l = Tn(0);
  if ((o || (!o && r !== "fixed")) && ((kn(n) !== "body" || bi(i)) && (s = Da(n)), Mt(n))) {
    const c = Qn(n);
    (a = _r(n)), (l.x = c.x + n.clientLeft), (l.y = c.y + n.clientTop);
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - s.scrollLeft * a.x + l.x, y: t.y * a.y - s.scrollTop * a.y + l.y };
}
function Dk(e) {
  return Array.from(e.getClientRects());
}
function Wy(e) {
  return Qn(qt(e)).left + Da(e).scrollLeft;
}
function Ok(e) {
  const t = qt(e),
    n = Da(e),
    r = e.ownerDocument.body,
    o = Ge(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Ge(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Wy(e);
  const a = -n.scrollTop;
  return ct(r).direction === "rtl" && (s += Ge(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: s, y: a };
}
function Lk(e, t) {
  const n = Qe(e),
    r = qt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const c = Kd();
    (!c || (c && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
function Fk(e, t) {
  const n = Qn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Mt(e) ? _r(e) : Tn(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    c = r * i.y;
  return { width: s, height: a, x: l, y: c };
}
function Zh(e, t, n) {
  let r;
  if (t === "viewport") r = Lk(e, n);
  else if (t === "document") r = Ok(qt(e));
  else if (Yt(t)) r = Fk(t, n);
  else {
    const o = Uy(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return ia(r);
}
function Ky(e, t) {
  const n = Kr(e);
  return n === t || !Yt(n) || Ia(n) ? !1 : ct(n).position === "fixed" || Ky(n, t);
}
function Vk(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ii(e, [], !1).filter((a) => Yt(a) && kn(a) !== "body"),
    o = null;
  const i = ct(e).position === "fixed";
  let s = i ? Kr(e) : e;
  for (; Yt(s) && !Ia(s); ) {
    const a = ct(s),
      l = Wd(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : (!l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) || (bi(s) && !l && Ky(e, s))) ? (r = r.filter((u) => u !== s)) : (o = a), (s = Kr(s));
  }
  return t.set(e, r), r;
}
function zk(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [...(n === "clippingAncestors" ? Vk(t, this._c) : [].concat(n)), r],
    a = s[0],
    l = s.reduce((c, u) => {
      const d = Zh(t, u, o);
      return (c.top = Ge(d.top, c.top)), (c.right = Pn(d.right, c.right)), (c.bottom = Pn(d.bottom, c.bottom)), (c.left = Ge(d.left, c.left)), c;
    }, Zh(t, a, o));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}
function Bk(e) {
  return By(e);
}
function Uk(e, t, n) {
  const r = Mt(t),
    o = qt(t),
    i = n === "fixed",
    s = Qn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Tn(0);
  if (r || (!r && !i))
    if (((kn(t) !== "body" || bi(o)) && (a = Da(t)), r)) {
      const c = Qn(t, !0, i, t);
      (l.x = c.x + t.clientLeft), (l.y = c.y + t.clientTop);
    } else o && (l.x = Wy(o));
  return { x: s.left + a.scrollLeft - l.x, y: s.top + a.scrollTop - l.y, width: s.width, height: s.height };
}
function Jh(e, t) {
  return !Mt(e) || ct(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Hy(e, t) {
  const n = Qe(e);
  if (!Mt(e)) return n;
  let r = Jh(e, t);
  for (; r && Mk(r) && ct(r).position === "static"; ) r = Jh(r, t);
  return r && (kn(r) === "html" || (kn(r) === "body" && ct(r).position === "static" && !Wd(r))) ? n : r || Ak(e) || n;
}
const Wk = async function (e) {
  let { reference: t, floating: n, strategy: r } = e;
  const o = this.getOffsetParent || Hy,
    i = this.getDimensions;
  return { reference: Uk(t, await o(n), r), floating: { x: 0, y: 0, ...(await i(n)) } };
};
function Kk(e) {
  return ct(e).direction === "rtl";
}
const Hk = { convertOffsetParentRelativeRectToViewportRelativeRect: Ik, getDocumentElement: qt, getClippingRect: zk, getOffsetParent: Hy, getElementRects: Wk, getClientRects: Dk, getDimensions: Bk, getScale: _r, isElement: Yt, isRTL: Kk };
function Gk(e, t) {
  let n = null,
    r;
  const o = qt(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const { left: c, top: u, width: d, height: p } = e.getBoundingClientRect();
    if ((a || t(), !d || !p)) return;
    const v = Qi(u),
      w = Qi(o.clientWidth - (c + d)),
      x = Qi(o.clientHeight - (u + p)),
      b = Qi(c),
      m = { rootMargin: -v + "px " + -w + "px " + -x + "px " + -b + "px", threshold: Ge(0, Pn(1, l)) || 1 };
    let y = !0;
    function S(C) {
      const E = C[0].intersectionRatio;
      if (E !== l) {
        if (!y) return s();
        E
          ? s(!1, E)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 100));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...m, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, m);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Yk(e, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: o = !0, ancestorResize: i = !0, elementResize: s = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = r,
    c = Hd(e),
    u = o || i ? [...(c ? ii(c) : []), ...ii(t)] : [];
  u.forEach((h) => {
    o && h.addEventListener("scroll", n, { passive: !0 }), i && h.addEventListener("resize", n);
  });
  const d = c && a ? Gk(c, n) : null;
  let p = -1,
    v = null;
  s &&
    ((v = new ResizeObserver((h) => {
      let [m] = h;
      m &&
        m.target === c &&
        v &&
        (v.unobserve(t),
        cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          v && v.observe(t);
        }))),
        n();
    })),
    c && !l && v.observe(c),
    v.observe(t));
  let w,
    x = l ? Qn(e) : null;
  l && b();
  function b() {
    const h = Qn(e);
    x && (h.x !== x.x || h.y !== x.y || h.width !== x.width || h.height !== x.height) && n(), (x = h), (w = requestAnimationFrame(b));
  }
  return (
    n(),
    () => {
      u.forEach((h) => {
        o && h.removeEventListener("scroll", n), i && h.removeEventListener("resize", n);
      }),
        d && d(),
        v && v.disconnect(),
        (v = null),
        l && cancelAnimationFrame(w);
    }
  );
}
const Xk = (e, t, n) => {
    const r = new Map(),
      o = { platform: Hk, ...n },
      i = { ...o.platform, _c: r };
    return Ck(e, t, { ...o, platform: i });
  },
  Qk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r) ? (r.current != null ? Yh({ element: r.current, padding: o }).fn(n) : {}) : r ? Yh({ element: r, padding: o }).fn(n) : {};
      },
    };
  };
var vs = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function sa(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!sa(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !sa(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Gy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function em(e, t) {
  const n = Gy(e);
  return Math.round(t * n) / n;
}
function tm(e) {
  const t = f.useRef(e);
  return (
    vs(() => {
      t.current = e;
    }),
    t
  );
}
function qk(e) {
  e === void 0 && (e = {});
  const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: i, floating: s } = {}, transform: a = !0, whileElementsMounted: l, open: c } = e,
    [u, d] = f.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
    [p, v] = f.useState(r);
  sa(p, r) || v(r);
  const [w, x] = f.useState(null),
    [b, h] = f.useState(null),
    m = f.useCallback(
      (z) => {
        z != E.current && ((E.current = z), x(z));
      },
      [x]
    ),
    y = f.useCallback(
      (z) => {
        z !== T.current && ((T.current = z), h(z));
      },
      [h]
    ),
    S = i || w,
    C = s || b,
    E = f.useRef(null),
    T = f.useRef(null),
    P = f.useRef(u),
    k = tm(l),
    M = tm(o),
    O = f.useCallback(() => {
      if (!E.current || !T.current) return;
      const z = { placement: t, strategy: n, middleware: p };
      M.current && (z.platform = M.current),
        Xk(E.current, T.current, z).then((B) => {
          const $ = { ...B, isPositioned: !0 };
          j.current &&
            !sa(P.current, $) &&
            ((P.current = $),
            pi.flushSync(() => {
              d($);
            }));
        });
    }, [p, t, n, M]);
  vs(() => {
    c === !1 && P.current.isPositioned && ((P.current.isPositioned = !1), d((z) => ({ ...z, isPositioned: !1 })));
  }, [c]);
  const j = f.useRef(!1);
  vs(
    () => (
      (j.current = !0),
      () => {
        j.current = !1;
      }
    ),
    []
  ),
    vs(() => {
      if ((S && (E.current = S), C && (T.current = C), S && C)) {
        if (k.current) return k.current(S, C, O);
        O();
      }
    }, [S, C, O, k]);
  const Z = f.useMemo(() => ({ reference: E, floating: T, setReference: m, setFloating: y }), [m, y]),
    F = f.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    G = f.useMemo(() => {
      const z = { position: n, left: 0, top: 0 };
      if (!F.floating) return z;
      const B = em(F.floating, u.x),
        $ = em(F.floating, u.y);
      return a ? { ...z, transform: "translate(" + B + "px, " + $ + "px)", ...(Gy(F.floating) >= 1.5 && { willChange: "transform" }) } : { position: n, left: B, top: $ };
    }, [n, a, F.floating, u.x, u.y]);
  return f.useMemo(() => ({ ...u, update: O, refs: Z, elements: F, floatingStyles: G }), [u, O, Z, F, G]);
}
function Zk(e) {
  const [t, n] = f.useState(void 0);
  return (
    Kt(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            (s = c.inlineSize), (a = c.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const Yy = "Popper",
  [Xy, Qy] = Zr(Yy),
  [Jk, qy] = Xy(Yy),
  e$ = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = f.useState(null);
    return f.createElement(Jk, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  t$ = "PopperAnchor",
  n$ = f.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = qy(t$, n),
      s = f.useRef(null),
      a = we(t, s);
    return (
      f.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : f.createElement(ce.div, I({}, o, { ref: a }))
    );
  }),
  Zy = "PopperContent",
  [r$, sR] = Xy(Zy),
  o$ = f.forwardRef((e, t) => {
    var n, r, o, i, s, a, l, c;
    const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: v = "center", alignOffset: w = 0, arrowPadding: x = 0, avoidCollisions: b = !0, collisionBoundary: h = [], collisionPadding: m = 0, sticky: y = "partial", hideWhenDetached: S = !1, updatePositionStrategy: C = "optimized", onPlaced: E, ...T } = e,
      P = qy(Zy, u),
      [k, M] = f.useState(null),
      O = we(t, (to) => M(to)),
      [j, Z] = f.useState(null),
      F = Zk(j),
      G = (n = F == null ? void 0 : F.width) !== null && n !== void 0 ? n : 0,
      z = (r = F == null ? void 0 : F.height) !== null && r !== void 0 ? r : 0,
      B = d + (v !== "center" ? "-" + v : ""),
      $ = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m },
      R = Array.isArray(h) ? h : [h],
      A = R.length > 0,
      V = { padding: $, boundary: R.filter(i$), altBoundary: A },
      {
        refs: K,
        floatingStyles: Ue,
        placement: We,
        isPositioned: dt,
        middlewareData: me,
      } = qk({
        strategy: "fixed",
        placement: B,
        whileElementsMounted: (...to) => Yk(...to, { animationFrame: C === "always" }),
        elements: { reference: P.anchor },
        middleware: [
          kk({ mainAxis: p + z, alignmentAxis: w }),
          b && $k({ mainAxis: !0, crossAxis: !1, limiter: y === "partial" ? Rk() : void 0, ...V }),
          b && Ek({ ...V }),
          Nk({
            ...V,
            apply: ({ elements: to, rects: Jd, availableWidth: L1, availableHeight: F1 }) => {
              const { width: V1, height: z1 } = Jd.reference,
                Pi = to.floating.style;
              Pi.setProperty("--radix-popper-available-width", `${L1}px`), Pi.setProperty("--radix-popper-available-height", `${F1}px`), Pi.setProperty("--radix-popper-anchor-width", `${V1}px`), Pi.setProperty("--radix-popper-anchor-height", `${z1}px`);
            },
          }),
          j && Qk({ element: j, padding: x }),
          s$({ arrowWidth: G, arrowHeight: z }),
          S && Pk({ strategy: "referenceHidden", ...V }),
        ],
      }),
      [Ke, Ci] = Jy(We),
      Oe = Ce(E);
    Kt(() => {
      dt && (Oe == null || Oe());
    }, [dt, Oe]);
    const Ei = (o = me.arrow) === null || o === void 0 ? void 0 : o.x,
      j1 = (i = me.arrow) === null || i === void 0 ? void 0 : i.y,
      I1 = ((s = me.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0,
      [D1, O1] = f.useState();
    return (
      Kt(() => {
        k && O1(window.getComputedStyle(k).zIndex);
      }, [k]),
      f.createElement("div", { ref: K.setFloating, "data-radix-popper-content-wrapper": "", style: { ...Ue, transform: dt ? Ue.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: D1, "--radix-popper-transform-origin": [(a = me.transformOrigin) === null || a === void 0 ? void 0 : a.x, (l = me.transformOrigin) === null || l === void 0 ? void 0 : l.y].join(" ") }, dir: e.dir }, f.createElement(r$, { scope: u, placedSide: Ke, onArrowChange: Z, arrowX: Ei, arrowY: j1, shouldHideArrow: I1 }, f.createElement(ce.div, I({ "data-side": Ke, "data-align": Ci }, T, { ref: O, style: { ...T.style, animation: dt ? void 0 : "none", opacity: (c = me.hide) !== null && c !== void 0 && c.referenceHidden ? 0 : void 0 } }))))
    );
  });
function i$(e) {
  return e !== null;
}
const s$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, s;
    const { placement: a, rects: l, middlewareData: c } = t,
      d = ((n = c.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0,
      p = d ? 0 : e.arrowWidth,
      v = d ? 0 : e.arrowHeight,
      [w, x] = Jy(a),
      b = { start: "0%", center: "50%", end: "100%" }[x],
      h = ((r = (o = c.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2,
      m = ((i = (s = c.arrow) === null || s === void 0 ? void 0 : s.y) !== null && i !== void 0 ? i : 0) + v / 2;
    let y = "",
      S = "";
    return w === "bottom" ? ((y = d ? b : `${h}px`), (S = `${-v}px`)) : w === "top" ? ((y = d ? b : `${h}px`), (S = `${l.floating.height + v}px`)) : w === "right" ? ((y = `${-v}px`), (S = d ? b : `${m}px`)) : w === "left" && ((y = `${l.floating.width + v}px`), (S = d ? b : `${m}px`)), { data: { x: y, y: S } };
  },
});
function Jy(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const a$ = e$,
  l$ = n$,
  c$ = o$,
  u$ = f.forwardRef((e, t) => {
    var n;
    const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
    return r ? Cv.createPortal(f.createElement(ce.div, I({}, o, { ref: t })), r) : null;
  }),
  Rl = "rovingFocusGroup.onEntryFocus",
  d$ = { bubbles: !1, cancelable: !0 },
  Gd = "RovingFocusGroup",
  [Jc, e1, f$] = ja(Gd),
  [p$, t1] = Zr(Gd, [f$]),
  [h$, m$] = p$(Gd),
  g$ = f.forwardRef((e, t) => f.createElement(Jc.Provider, { scope: e.__scopeRovingFocusGroup }, f.createElement(Jc.Slot, { scope: e.__scopeRovingFocusGroup }, f.createElement(v$, I({}, e, { ref: t }))))),
  v$ = f.forwardRef((e, t) => {
    const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: i, currentTabStopId: s, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: l, onEntryFocus: c, ...u } = e,
      d = f.useRef(null),
      p = we(t, d),
      v = Dd(i),
      [w = null, x] = Id({ prop: s, defaultProp: a, onChange: l }),
      [b, h] = f.useState(!1),
      m = Ce(c),
      y = e1(n),
      S = f.useRef(!1),
      [C, E] = f.useState(0);
    return (
      f.useEffect(() => {
        const T = d.current;
        if (T) return T.addEventListener(Rl, m), () => T.removeEventListener(Rl, m);
      }, [m]),
      f.createElement(
        h$,
        { scope: n, orientation: r, dir: v, loop: o, currentTabStopId: w, onItemFocus: f.useCallback((T) => x(T), [x]), onItemShiftTab: f.useCallback(() => h(!0), []), onFocusableItemAdd: f.useCallback(() => E((T) => T + 1), []), onFocusableItemRemove: f.useCallback(() => E((T) => T - 1), []) },
        f.createElement(
          ce.div,
          I({ tabIndex: b || C === 0 ? -1 : 0, "data-orientation": r }, u, {
            ref: p,
            style: { outline: "none", ...e.style },
            onMouseDown: L(e.onMouseDown, () => {
              S.current = !0;
            }),
            onFocus: L(e.onFocus, (T) => {
              const P = !S.current;
              if (T.target === T.currentTarget && P && !b) {
                const k = new CustomEvent(Rl, d$);
                if ((T.currentTarget.dispatchEvent(k), !k.defaultPrevented)) {
                  const M = y().filter((G) => G.focusable),
                    O = M.find((G) => G.active),
                    j = M.find((G) => G.id === w),
                    F = [O, j, ...M].filter(Boolean).map((G) => G.ref.current);
                  n1(F);
                }
              }
              S.current = !1;
            }),
            onBlur: L(e.onBlur, () => h(!1)),
          })
        )
      )
    );
  }),
  y$ = "RovingFocusGroupItem",
  x$ = f.forwardRef((e, t) => {
    const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: i, ...s } = e,
      a = ni(),
      l = i || a,
      c = m$(y$, n),
      u = c.currentTabStopId === l,
      d = e1(n),
      { onFocusableItemAdd: p, onFocusableItemRemove: v } = c;
    return (
      f.useEffect(() => {
        if (r) return p(), () => v();
      }, [r, p, v]),
      f.createElement(
        Jc.ItemSlot,
        { scope: n, id: l, focusable: r, active: o },
        f.createElement(
          ce.span,
          I({ tabIndex: u ? 0 : -1, "data-orientation": c.orientation }, s, {
            ref: t,
            onMouseDown: L(e.onMouseDown, (w) => {
              r ? c.onItemFocus(l) : w.preventDefault();
            }),
            onFocus: L(e.onFocus, () => c.onItemFocus(l)),
            onKeyDown: L(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const x = S$(w, c.orientation, c.dir);
              if (x !== void 0) {
                w.preventDefault();
                let h = d()
                  .filter((m) => m.focusable)
                  .map((m) => m.ref.current);
                if (x === "last") h.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && h.reverse();
                  const m = h.indexOf(w.currentTarget);
                  h = c.loop ? C$(h, m + 1) : h.slice(m + 1);
                }
                setTimeout(() => n1(h));
              }
            }),
          })
        )
      )
    );
  }),
  w$ = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function b$(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function S$(e, t, n) {
  const r = b$(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return w$[r];
}
function n1(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function C$(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const E$ = g$,
  P$ = x$;
var T$ = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  sr = new WeakMap(),
  qi = new WeakMap(),
  Zi = {},
  Nl = 0,
  r1 = function (e) {
    return e && (e.host || r1(e.parentNode));
  },
  k$ = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = r1(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  $$ = function (e, t, n, r) {
    var o = k$(t, Array.isArray(e) ? e : [e]);
    Zi[n] || (Zi[n] = new WeakMap());
    var i = Zi[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      c = function (d) {
        !d || a.has(d) || (a.add(d), c(d.parentNode));
      };
    o.forEach(c);
    var u = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (p) {
          if (a.has(p)) u(p);
          else {
            var v = p.getAttribute(r),
              w = v !== null && v !== "false",
              x = (sr.get(p) || 0) + 1,
              b = (i.get(p) || 0) + 1;
            sr.set(p, x), i.set(p, b), s.push(p), x === 1 && w && qi.set(p, !0), b === 1 && p.setAttribute(n, "true"), w || p.setAttribute(r, "true");
          }
        });
    };
    return (
      u(t),
      a.clear(),
      Nl++,
      function () {
        s.forEach(function (d) {
          var p = sr.get(d) - 1,
            v = i.get(d) - 1;
          sr.set(d, p), i.set(d, v), p || (qi.has(d) || d.removeAttribute(r), qi.delete(d)), v || d.removeAttribute(n);
        }),
          Nl--,
          Nl || ((sr = new WeakMap()), (sr = new WeakMap()), (qi = new WeakMap()), (Zi = {}));
      }
    );
  },
  R$ = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || T$(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), $$(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Pt = function () {
    return (
      (Pt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      Pt.apply(this, arguments)
    );
  };
function o1(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function N$(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var ys = "right-scroll-bar-position",
  xs = "width-before-scroll-bar",
  M$ = "with-scroll-bars-hidden",
  A$ = "--removed-body-scroll-bar-size";
function _$(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function j$(e, t) {
  var n = f.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function I$(e, t) {
  return j$(t || null, function (n) {
    return e.forEach(function (r) {
      return _$(r, n);
    });
  });
}
function D$(e) {
  return e;
}
function O$(e, t) {
  t === void 0 && (t = D$);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var u = s;
            (s = []), u.forEach(i);
          },
          c = function () {
            return Promise.resolve().then(l);
          };
        c(),
          (n = {
            push: function (u) {
              s.push(u), c();
            },
            filter: function (u) {
              return (s = s.filter(u)), n;
            },
          });
      },
    };
  return o;
}
function L$(e) {
  e === void 0 && (e = {});
  var t = O$(null);
  return (t.options = Pt({ async: !0, ssr: !1 }, e)), t;
}
var i1 = function (e) {
  var t = e.sideCar,
    n = o1(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return f.createElement(r, Pt({}, n));
};
i1.isSideCarExport = !0;
function F$(e, t) {
  return e.useMedium(t), i1;
}
var s1 = L$(),
  Ml = function () {},
  Oa = f.forwardRef(function (e, t) {
    var n = f.useRef(null),
      r = f.useState({ onScrollCapture: Ml, onWheelCapture: Ml, onTouchMoveCapture: Ml }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      c = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      p = e.sideCar,
      v = e.noIsolation,
      w = e.inert,
      x = e.allowPinchZoom,
      b = e.as,
      h = b === void 0 ? "div" : b,
      m = o1(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
      y = p,
      S = I$([n, t]),
      C = Pt(Pt({}, m), o);
    return f.createElement(f.Fragment, null, u && f.createElement(y, { sideCar: s1, removeScrollBar: c, shards: d, noIsolation: v, inert: w, setCallbacks: i, allowPinchZoom: !!x, lockRef: n }), s ? f.cloneElement(f.Children.only(a), Pt(Pt({}, C), { ref: S })) : f.createElement(h, Pt({}, C, { className: l, ref: S }), a));
  });
Oa.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Oa.classNames = { fullWidth: xs, zeroRight: ys };
var nm,
  V$ = function () {
    if (nm) return nm;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function z$() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = V$();
  return t && e.setAttribute("nonce", t), e;
}
function B$(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function U$(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var W$ = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = z$()) && (B$(t, n), U$(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  K$ = function () {
    var e = W$();
    return function (t, n) {
      f.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  a1 = function () {
    var e = K$(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  H$ = { left: 0, top: 0, right: 0, gap: 0 },
  Al = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  G$ = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Al(n), Al(r), Al(o)];
  },
  Y$ = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return H$;
    var t = G$(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  X$ = a1(),
  Q$ = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          M$,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          ys,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          xs,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ys, " .")
        .concat(
          ys,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(xs, " .")
        .concat(
          xs,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(A$, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  q$ = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r,
      i = f.useMemo(
        function () {
          return Y$(o);
        },
        [o]
      );
    return f.createElement(X$, { styles: Q$(i, !t, o, n ? "" : "!important") });
  },
  eu = !1;
if (typeof window < "u")
  try {
    var Ji = Object.defineProperty({}, "passive", {
      get: function () {
        return (eu = !0), !0;
      },
    });
    window.addEventListener("test", Ji, Ji), window.removeEventListener("test", Ji, Ji);
  } catch {
    eu = !1;
  }
var ar = eu ? { passive: !1 } : !1,
  Z$ = function (e) {
    return e.tagName === "TEXTAREA";
  },
  l1 = function (e, t) {
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Z$(e) && n[t] === "visible");
  },
  J$ = function (e) {
    return l1(e, "overflowY");
  },
  e6 = function (e) {
    return l1(e, "overflowX");
  },
  rm = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = c1(e, n);
      if (r) {
        var o = u1(e, n),
          i = o[1],
          s = o[2];
        if (i > s) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  t6 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  n6 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  c1 = function (e, t) {
    return e === "v" ? J$(t) : e6(t);
  },
  u1 = function (e, t) {
    return e === "v" ? t6(t) : n6(t);
  },
  r6 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  o6 = function (e, t, n, r, o) {
    var i = r6(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      c = !1,
      u = s > 0,
      d = 0,
      p = 0;
    do {
      var v = u1(e, a),
        w = v[0],
        x = v[1],
        b = v[2],
        h = x - b - i * w;
      (w || h) && c1(e, a) && ((d += h), (p += w)), (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return ((u && ((o && d === 0) || (!o && s > d))) || (!u && ((o && p === 0) || (!o && -s > p)))) && (c = !0), c;
  },
  es = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  om = function (e) {
    return [e.deltaX, e.deltaY];
  },
  im = function (e) {
    return e && "current" in e ? e.current : e;
  },
  i6 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  s6 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  a6 = 0,
  lr = [];
function l6(e) {
  var t = f.useRef([]),
    n = f.useRef([0, 0]),
    r = f.useRef(),
    o = f.useState(a6++)[0],
    i = f.useState(function () {
      return a1();
    })[0],
    s = f.useRef(e);
  f.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    f.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var x = N$([e.lockRef.current], (e.shards || []).map(im), !0).filter(Boolean);
          return (
            x.forEach(function (b) {
              return b.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                x.forEach(function (b) {
                  return b.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = f.useCallback(function (x, b) {
      if ("touches" in x && x.touches.length === 2) return !s.current.allowPinchZoom;
      var h = es(x),
        m = n.current,
        y = "deltaX" in x ? x.deltaX : m[0] - h[0],
        S = "deltaY" in x ? x.deltaY : m[1] - h[1],
        C,
        E = x.target,
        T = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in x && T === "h" && E.type === "range") return !1;
      var P = rm(T, E);
      if (!P) return !0;
      if ((P ? (C = T) : ((C = T === "v" ? "h" : "v"), (P = rm(T, E))), !P)) return !1;
      if ((!r.current && "changedTouches" in x && (y || S) && (r.current = C), !C)) return !0;
      var k = r.current || C;
      return o6(k, b, x, k === "h" ? y : S, !0);
    }, []),
    l = f.useCallback(function (x) {
      var b = x;
      if (!(!lr.length || lr[lr.length - 1] !== i)) {
        var h = "deltaY" in b ? om(b) : es(b),
          m = t.current.filter(function (C) {
            return C.name === b.type && C.target === b.target && i6(C.delta, h);
          })[0];
        if (m && m.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!m) {
          var y = (s.current.shards || [])
              .map(im)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(b.target);
              }),
            S = y.length > 0 ? a(b, y[0]) : !s.current.noIsolation;
          S && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    c = f.useCallback(function (x, b, h, m) {
      var y = { name: x, delta: b, target: h, should: m };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== y;
          });
        }, 1);
    }, []),
    u = f.useCallback(function (x) {
      (n.current = es(x)), (r.current = void 0);
    }, []),
    d = f.useCallback(function (x) {
      c(x.type, om(x), x.target, a(x, e.lockRef.current));
    }, []),
    p = f.useCallback(function (x) {
      c(x.type, es(x), x.target, a(x, e.lockRef.current));
    }, []);
  f.useEffect(function () {
    return (
      lr.push(i),
      e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: p }),
      document.addEventListener("wheel", l, ar),
      document.addEventListener("touchmove", l, ar),
      document.addEventListener("touchstart", u, ar),
      function () {
        (lr = lr.filter(function (x) {
          return x !== i;
        })),
          document.removeEventListener("wheel", l, ar),
          document.removeEventListener("touchmove", l, ar),
          document.removeEventListener("touchstart", u, ar);
      }
    );
  }, []);
  var v = e.removeScrollBar,
    w = e.inert;
  return f.createElement(f.Fragment, null, w ? f.createElement(i, { styles: s6(o) }) : null, v ? f.createElement(q$, { gapMode: "margin" }) : null);
}
const c6 = F$(s1, l6);
var d1 = f.forwardRef(function (e, t) {
  return f.createElement(Oa, Pt({}, e, { ref: t, sideCar: c6 }));
});
d1.classNames = Oa.classNames;
const u6 = d1,
  tu = ["Enter", " "],
  d6 = ["ArrowDown", "PageUp", "Home"],
  f1 = ["ArrowUp", "PageDown", "End"],
  f6 = [...d6, ...f1],
  p6 = { ltr: [...tu, "ArrowRight"], rtl: [...tu, "ArrowLeft"] },
  h6 = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  La = "Menu",
  [si, m6, g6] = ja(La),
  [rr, p1] = Zr(La, [g6, Qy, t1]),
  Yd = Qy(),
  h1 = t1(),
  [v6, or] = rr(La),
  [y6, Si] = rr(La),
  x6 = (e) => {
    const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e,
      a = Yd(t),
      [l, c] = f.useState(null),
      u = f.useRef(!1),
      d = Ce(i),
      p = Dd(o);
    return (
      f.useEffect(() => {
        const v = () => {
            (u.current = !0), document.addEventListener("pointerdown", w, { capture: !0, once: !0 }), document.addEventListener("pointermove", w, { capture: !0, once: !0 });
          },
          w = () => (u.current = !1);
        return (
          document.addEventListener("keydown", v, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", w, { capture: !0 }), document.removeEventListener("pointermove", w, { capture: !0 });
          }
        );
      }, []),
      f.createElement(a$, a, f.createElement(v6, { scope: t, open: n, onOpenChange: d, content: l, onContentChange: c }, f.createElement(y6, { scope: t, onClose: f.useCallback(() => d(!1), [d]), isUsingKeyboardRef: u, dir: p, modal: s }, r)))
    );
  },
  m1 = f.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = Yd(n);
    return f.createElement(l$, I({}, o, r, { ref: t }));
  }),
  g1 = "MenuPortal",
  [w6, v1] = rr(g1, { forceMount: void 0 }),
  b6 = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = or(g1, t);
    return f.createElement(w6, { scope: t, forceMount: n }, f.createElement(Qt, { present: n || i.open }, f.createElement(u$, { asChild: !0, container: o }, r)));
  },
  xt = "MenuContent",
  [S6, Xd] = rr(xt),
  C6 = f.forwardRef((e, t) => {
    const n = v1(xt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = or(xt, e.__scopeMenu),
      s = Si(xt, e.__scopeMenu);
    return f.createElement(si.Provider, { scope: e.__scopeMenu }, f.createElement(Qt, { present: r || i.open }, f.createElement(si.Slot, { scope: e.__scopeMenu }, s.modal ? f.createElement(E6, I({}, o, { ref: t })) : f.createElement(P6, I({}, o, { ref: t })))));
  }),
  E6 = f.forwardRef((e, t) => {
    const n = or(xt, e.__scopeMenu),
      r = f.useRef(null),
      o = we(t, r);
    return (
      f.useEffect(() => {
        const i = r.current;
        if (i) return R$(i);
      }, []),
      f.createElement(Qd, I({}, e, { ref: o, trapFocus: n.open, disableOutsidePointerEvents: n.open, disableOutsideScroll: !0, onFocusOutside: L(e.onFocusOutside, (i) => i.preventDefault(), { checkForDefaultPrevented: !1 }), onDismiss: () => n.onOpenChange(!1) }))
    );
  }),
  P6 = f.forwardRef((e, t) => {
    const n = or(xt, e.__scopeMenu);
    return f.createElement(Qd, I({}, e, { ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, disableOutsideScroll: !1, onDismiss: () => n.onOpenChange(!1) }));
  }),
  Qd = f.forwardRef((e, t) => {
    const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: s, disableOutsidePointerEvents: a, onEntryFocus: l, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: v, disableOutsideScroll: w, ...x } = e,
      b = or(xt, n),
      h = Si(xt, n),
      m = Yd(n),
      y = h1(n),
      S = m6(n),
      [C, E] = f.useState(null),
      T = f.useRef(null),
      P = we(t, T, b.onContentChange),
      k = f.useRef(0),
      M = f.useRef(""),
      O = f.useRef(0),
      j = f.useRef(null),
      Z = f.useRef("right"),
      F = f.useRef(0),
      G = w ? u6 : f.Fragment,
      z = w ? { as: Wr, allowPinchZoom: !0 } : void 0,
      B = (R) => {
        var A, V;
        const K = M.current + R,
          Ue = S().filter((Oe) => !Oe.disabled),
          We = document.activeElement,
          dt = (A = Ue.find((Oe) => Oe.ref.current === We)) === null || A === void 0 ? void 0 : A.textValue,
          me = Ue.map((Oe) => Oe.textValue),
          Ke = z6(me, K, dt),
          Ci = (V = Ue.find((Oe) => Oe.textValue === Ke)) === null || V === void 0 ? void 0 : V.ref.current;
        (function Oe(Ei) {
          (M.current = Ei), window.clearTimeout(k.current), Ei !== "" && (k.current = window.setTimeout(() => Oe(""), 1e3));
        })(K),
          Ci && setTimeout(() => Ci.focus());
      };
    f.useEffect(() => () => window.clearTimeout(k.current), []), ak();
    const $ = f.useCallback((R) => {
      var A, V;
      return Z.current === ((A = j.current) === null || A === void 0 ? void 0 : A.side) && U6(R, (V = j.current) === null || V === void 0 ? void 0 : V.area);
    }, []);
    return f.createElement(
      S6,
      {
        scope: n,
        searchRef: M,
        onItemEnter: f.useCallback(
          (R) => {
            $(R) && R.preventDefault();
          },
          [$]
        ),
        onItemLeave: f.useCallback(
          (R) => {
            var A;
            $(R) || ((A = T.current) === null || A === void 0 || A.focus(), E(null));
          },
          [$]
        ),
        onTriggerLeave: f.useCallback(
          (R) => {
            $(R) && R.preventDefault();
          },
          [$]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: f.useCallback((R) => {
          j.current = R;
        }, []),
      },
      f.createElement(
        G,
        z,
        f.createElement(
          lk,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: L(i, (R) => {
              var A;
              R.preventDefault(), (A = T.current) === null || A === void 0 || A.focus();
            }),
            onUnmountAutoFocus: s,
          },
          f.createElement(
            xy,
            { asChild: !0, disableOutsidePointerEvents: a, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: v },
            f.createElement(
              E$,
              I({ asChild: !0 }, y, {
                dir: h.dir,
                orientation: "vertical",
                loop: r,
                currentTabStopId: C,
                onCurrentTabStopIdChange: E,
                onEntryFocus: L(l, (R) => {
                  h.isUsingKeyboardRef.current || R.preventDefault();
                }),
              }),
              f.createElement(
                c$,
                I({ role: "menu", "aria-orientation": "vertical", "data-state": S1(b.open), "data-radix-menu-content": "", dir: h.dir }, m, x, {
                  ref: P,
                  style: { outline: "none", ...x.style },
                  onKeyDown: L(x.onKeyDown, (R) => {
                    const V = R.target.closest("[data-radix-menu-content]") === R.currentTarget,
                      K = R.ctrlKey || R.altKey || R.metaKey,
                      Ue = R.key.length === 1;
                    V && (R.key === "Tab" && R.preventDefault(), !K && Ue && B(R.key));
                    const We = T.current;
                    if (R.target !== We || !f6.includes(R.key)) return;
                    R.preventDefault();
                    const me = S()
                      .filter((Ke) => !Ke.disabled)
                      .map((Ke) => Ke.ref.current);
                    f1.includes(R.key) && me.reverse(), F6(me);
                  }),
                  onBlur: L(e.onBlur, (R) => {
                    R.currentTarget.contains(R.target) || (window.clearTimeout(k.current), (M.current = ""));
                  }),
                  onPointerMove: L(
                    e.onPointerMove,
                    ai((R) => {
                      const A = R.target,
                        V = F.current !== R.clientX;
                      if (R.currentTarget.contains(A) && V) {
                        const K = R.clientX > F.current ? "right" : "left";
                        (Z.current = K), (F.current = R.clientX);
                      }
                    })
                  ),
                })
              )
            )
          )
        )
      )
    );
  }),
  T6 = f.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return f.createElement(ce.div, I({}, r, { ref: t }));
  }),
  nu = "MenuItem",
  sm = "menu.itemSelect",
  qd = f.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = f.useRef(null),
      s = Si(nu, e.__scopeMenu),
      a = Xd(nu, e.__scopeMenu),
      l = we(t, i),
      c = f.useRef(!1),
      u = () => {
        const d = i.current;
        if (!n && d) {
          const p = new CustomEvent(sm, { bubbles: !0, cancelable: !0 });
          d.addEventListener(sm, (v) => (r == null ? void 0 : r(v)), { once: !0 }), yy(d, p), p.defaultPrevented ? (c.current = !1) : s.onClose();
        }
      };
    return f.createElement(
      y1,
      I({}, o, {
        ref: l,
        disabled: n,
        onClick: L(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) === null || p === void 0 || p.call(e, d), (c.current = !0);
        },
        onPointerUp: L(e.onPointerUp, (d) => {
          var p;
          c.current || (p = d.currentTarget) === null || p === void 0 || p.click();
        }),
        onKeyDown: L(e.onKeyDown, (d) => {
          const p = a.searchRef.current !== "";
          n || (p && d.key === " ") || (tu.includes(d.key) && (d.currentTarget.click(), d.preventDefault()));
        }),
      })
    );
  }),
  y1 = f.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      s = Xd(nu, n),
      a = h1(n),
      l = f.useRef(null),
      c = we(t, l),
      [u, d] = f.useState(!1),
      [p, v] = f.useState("");
    return (
      f.useEffect(() => {
        const w = l.current;
        if (w) {
          var x;
          v(((x = w.textContent) !== null && x !== void 0 ? x : "").trim());
        }
      }, [i.children]),
      f.createElement(
        si.ItemSlot,
        { scope: n, disabled: r, textValue: o ?? p },
        f.createElement(
          P$,
          I({ asChild: !0 }, a, { focusable: !r }),
          f.createElement(
            ce.div,
            I({ role: "menuitem", "data-highlighted": u ? "" : void 0, "aria-disabled": r || void 0, "data-disabled": r ? "" : void 0 }, i, {
              ref: c,
              onPointerMove: L(
                e.onPointerMove,
                ai((w) => {
                  r ? s.onItemLeave(w) : (s.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus());
                })
              ),
              onPointerLeave: L(
                e.onPointerLeave,
                ai((w) => s.onItemLeave(w))
              ),
              onFocus: L(e.onFocus, () => d(!0)),
              onBlur: L(e.onBlur, () => d(!1)),
            })
          )
        )
      )
    );
  }),
  k6 = f.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return f.createElement(w1, { scope: e.__scopeMenu, checked: n }, f.createElement(qd, I({ role: "menuitemcheckbox", "aria-checked": aa(n) ? "mixed" : n }, o, { ref: t, "data-state": Zd(n), onSelect: L(o.onSelect, () => (r == null ? void 0 : r(aa(n) ? !0 : !n)), { checkForDefaultPrevented: !1 }) })));
  }),
  $6 = "MenuRadioGroup",
  [aR, R6] = rr($6, { value: void 0, onValueChange: () => {} }),
  N6 = "MenuRadioItem",
  M6 = f.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = R6(N6, e.__scopeMenu),
      i = n === o.value;
    return f.createElement(
      w1,
      { scope: e.__scopeMenu, checked: i },
      f.createElement(
        qd,
        I({ role: "menuitemradio", "aria-checked": i }, r, {
          ref: t,
          "data-state": Zd(i),
          onSelect: L(
            r.onSelect,
            () => {
              var s;
              return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
            },
            { checkForDefaultPrevented: !1 }
          ),
        })
      )
    );
  }),
  x1 = "MenuItemIndicator",
  [w1, A6] = rr(x1, { checked: !1 }),
  _6 = f.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      i = A6(x1, n);
    return f.createElement(Qt, { present: r || aa(i.checked) || i.checked === !0 }, f.createElement(ce.span, I({}, o, { ref: t, "data-state": Zd(i.checked) })));
  }),
  j6 = f.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return f.createElement(ce.div, I({ role: "separator", "aria-orientation": "horizontal" }, r, { ref: t }));
  }),
  I6 = "MenuSub",
  [lR, b1] = rr(I6),
  ts = "MenuSubTrigger",
  D6 = f.forwardRef((e, t) => {
    const n = or(ts, e.__scopeMenu),
      r = Si(ts, e.__scopeMenu),
      o = b1(ts, e.__scopeMenu),
      i = Xd(ts, e.__scopeMenu),
      s = f.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i,
      c = { __scopeMenu: e.__scopeMenu },
      u = f.useCallback(() => {
        s.current && window.clearTimeout(s.current), (s.current = null);
      }, []);
    return (
      f.useEffect(() => u, [u]),
      f.useEffect(() => {
        const d = a.current;
        return () => {
          window.clearTimeout(d), l(null);
        };
      }, [a, l]),
      f.createElement(
        m1,
        I({ asChild: !0 }, c),
        f.createElement(
          y1,
          I({ id: o.triggerId, "aria-haspopup": "menu", "aria-expanded": n.open, "aria-controls": o.contentId, "data-state": S1(n.open) }, e, {
            ref: yi(t, o.onTriggerChange),
            onClick: (d) => {
              var p;
              (p = e.onClick) === null || p === void 0 || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
            },
            onPointerMove: L(
              e.onPointerMove,
              ai((d) => {
                i.onItemEnter(d),
                  !d.defaultPrevented &&
                    !e.disabled &&
                    !n.open &&
                    !s.current &&
                    (i.onPointerGraceIntentChange(null),
                    (s.current = window.setTimeout(() => {
                      n.onOpenChange(!0), u();
                    }, 100)));
              })
            ),
            onPointerLeave: L(
              e.onPointerLeave,
              ai((d) => {
                var p;
                u();
                const v = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
                if (v) {
                  var w;
                  const x = (w = n.content) === null || w === void 0 ? void 0 : w.dataset.side,
                    b = x === "right",
                    h = b ? -5 : 5,
                    m = v[b ? "left" : "right"],
                    y = v[b ? "right" : "left"];
                  i.onPointerGraceIntentChange({
                    area: [
                      { x: d.clientX + h, y: d.clientY },
                      { x: m, y: v.top },
                      { x: y, y: v.top },
                      { x: y, y: v.bottom },
                      { x: m, y: v.bottom },
                    ],
                    side: x,
                  }),
                    window.clearTimeout(a.current),
                    (a.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300));
                } else {
                  if ((i.onTriggerLeave(d), d.defaultPrevented)) return;
                  i.onPointerGraceIntentChange(null);
                }
              })
            ),
            onKeyDown: L(e.onKeyDown, (d) => {
              const p = i.searchRef.current !== "";
              if (!(e.disabled || (p && d.key === " ")) && p6[r.dir].includes(d.key)) {
                var v;
                n.onOpenChange(!0), (v = n.content) === null || v === void 0 || v.focus(), d.preventDefault();
              }
            }),
          })
        )
      )
    );
  }),
  O6 = "MenuSubContent",
  L6 = f.forwardRef((e, t) => {
    const n = v1(xt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = or(xt, e.__scopeMenu),
      s = Si(xt, e.__scopeMenu),
      a = b1(O6, e.__scopeMenu),
      l = f.useRef(null),
      c = we(t, l);
    return f.createElement(
      si.Provider,
      { scope: e.__scopeMenu },
      f.createElement(
        Qt,
        { present: r || i.open },
        f.createElement(
          si.Slot,
          { scope: e.__scopeMenu },
          f.createElement(
            Qd,
            I({ id: a.contentId, "aria-labelledby": a.triggerId }, o, {
              ref: c,
              align: "start",
              side: s.dir === "rtl" ? "left" : "right",
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (u) => {
                var d;
                s.isUsingKeyboardRef.current && ((d = l.current) === null || d === void 0 || d.focus()), u.preventDefault();
              },
              onCloseAutoFocus: (u) => u.preventDefault(),
              onFocusOutside: L(e.onFocusOutside, (u) => {
                u.target !== a.trigger && i.onOpenChange(!1);
              }),
              onEscapeKeyDown: L(e.onEscapeKeyDown, (u) => {
                s.onClose(), u.preventDefault();
              }),
              onKeyDown: L(e.onKeyDown, (u) => {
                const d = u.currentTarget.contains(u.target),
                  p = h6[s.dir].includes(u.key);
                if (d && p) {
                  var v;
                  i.onOpenChange(!1), (v = a.trigger) === null || v === void 0 || v.focus(), u.preventDefault();
                }
              }),
            })
          )
        )
      )
    );
  });
function S1(e) {
  return e ? "open" : "closed";
}
function aa(e) {
  return e === "indeterminate";
}
function Zd(e) {
  return aa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function F6(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function V6(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function z6(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = V6(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find((c) => c.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function B6(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      l = t[i].y,
      c = t[s].x,
      u = t[s].y;
    l > r != u > r && n < ((c - a) * (r - l)) / (u - l) + a && (o = !o);
  }
  return o;
}
function U6(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return B6(n, t);
}
function ai(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
const W6 = x6,
  K6 = m1,
  H6 = b6,
  G6 = C6,
  Y6 = T6,
  X6 = qd,
  Q6 = k6,
  q6 = M6,
  Z6 = _6,
  J6 = j6,
  e8 = D6,
  t8 = L6,
  C1 = "DropdownMenu",
  [n8, cR] = Zr(C1, [p1]),
  ut = p1(),
  [r8, E1] = n8(C1),
  o8 = (e) => {
    const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: i, onOpenChange: s, modal: a = !0 } = e,
      l = ut(t),
      c = f.useRef(null),
      [u = !1, d] = Id({ prop: o, defaultProp: i, onChange: s });
    return f.createElement(r8, { scope: t, triggerId: ni(), triggerRef: c, contentId: ni(), open: u, onOpenChange: d, onOpenToggle: f.useCallback(() => d((p) => !p), [d]), modal: a }, f.createElement(W6, I({}, l, { open: u, onOpenChange: d, dir: r, modal: a }), n));
  },
  i8 = "DropdownMenuTrigger",
  s8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      i = E1(i8, n),
      s = ut(n);
    return f.createElement(
      K6,
      I({ asChild: !0 }, s),
      f.createElement(
        ce.button,
        I({ type: "button", id: i.triggerId, "aria-haspopup": "menu", "aria-expanded": i.open, "aria-controls": i.open ? i.contentId : void 0, "data-state": i.open ? "open" : "closed", "data-disabled": r ? "" : void 0, disabled: r }, o, {
          ref: yi(t, i.triggerRef),
          onPointerDown: L(e.onPointerDown, (a) => {
            !r && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
          }),
          onKeyDown: L(e.onKeyDown, (a) => {
            r || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
          }),
        })
      )
    );
  }),
  a8 = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = ut(t);
    return f.createElement(H6, I({}, r, n));
  },
  l8 = "DropdownMenuContent",
  c8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = E1(l8, n),
      i = ut(n),
      s = f.useRef(!1);
    return f.createElement(
      G6,
      I({ id: o.contentId, "aria-labelledby": o.triggerId }, i, r, {
        ref: t,
        onCloseAutoFocus: L(e.onCloseAutoFocus, (a) => {
          var l;
          s.current || (l = o.triggerRef.current) === null || l === void 0 || l.focus(), (s.current = !1), a.preventDefault();
        }),
        onInteractOutside: L(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent,
            c = l.button === 0 && l.ctrlKey === !0,
            u = l.button === 2 || c;
          (!o.modal || u) && (s.current = !0);
        }),
        style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" },
      })
    );
  }),
  u8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ut(n);
    return f.createElement(Y6, I({}, o, r, { ref: t }));
  }),
  d8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ut(n);
    return f.createElement(X6, I({}, o, r, { ref: t }));
  }),
  f8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ut(n);
    return f.createElement(Q6, I({}, o, r, { ref: t }));
  }),
  p8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ut(n);
    return f.createElement(q6, I({}, o, r, { ref: t }));
  }),
  h8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ut(n);
    return f.createElement(Z6, I({}, o, r, { ref: t }));
  }),
  m8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ut(n);
    return f.createElement(J6, I({}, o, r, { ref: t }));
  }),
  g8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ut(n);
    return f.createElement(e8, I({}, o, r, { ref: t }));
  }),
  v8 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ut(n);
    return f.createElement(t8, I({}, o, r, { ref: t, style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } }));
  }),
  y8 = o8,
  x8 = s8,
  w8 = a8,
  P1 = c8,
  T1 = u8,
  k1 = d8,
  $1 = f8,
  R1 = p8,
  N1 = h8,
  M1 = m8,
  A1 = g8,
  _1 = v8,
  b8 = y8,
  S8 = x8,
  C8 = f.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => g.jsxs(A1, { ref: o, className: ae("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", t && "pl-8", e), ...r, children: [n, g.jsx(ek, { className: "ml-auto h-4 w-4" })] }));
C8.displayName = A1.displayName;
const E8 = f.forwardRef(({ className: e, ...t }, n) => g.jsx(_1, { ref: n, className: ae("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...t }));
E8.displayName = _1.displayName;
const P8 = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => g.jsx(w8, { children: g.jsx(P1, { ref: r, sideOffset: t, className: ae("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...n }) }));
P8.displayName = P1.displayName;
const T8 = f.forwardRef(({ className: e, inset: t, ...n }, r) => g.jsx(k1, { ref: r, className: ae("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", e), ...n }));
T8.displayName = k1.displayName;
const k8 = f.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => g.jsxs($1, { ref: o, className: ae("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), checked: n, ...r, children: [g.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: g.jsx(N1, { children: g.jsx(ZT, { className: "h-4 w-4" }) }) }), t] }));
k8.displayName = $1.displayName;
const $8 = f.forwardRef(({ className: e, children: t, ...n }, r) => g.jsxs(R1, { ref: r, className: ae("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), ...n, children: [g.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: g.jsx(N1, { children: g.jsx(tk, { className: "h-2 w-2 fill-current" }) }) }), t] }));
$8.displayName = R1.displayName;
const R8 = f.forwardRef(({ className: e, inset: t, ...n }, r) => g.jsx(T1, { ref: r, className: ae("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e), ...n }));
R8.displayName = T1.displayName;
const N8 = f.forwardRef(({ className: e, ...t }, n) => g.jsx(M1, { ref: n, className: ae("-mx-1 my-1 h-px bg-muted", e), ...t }));
N8.displayName = M1.displayName;
function M8() {
  return g.jsx(b8, { children: g.jsx(S8, { asChild: !0 }) });
}
const A8 = "/assets/logo-g6BL5wNj.png",
  am = [
    { href: "#about", label: "About" },
    { href: "#mcprogram", label: "MC Program" },
    { href: "#usecase", label: "UseCase" },
    { href: "#tokeninfo", label: "Token" },
    { href: "#gallery", label: "Gallery" },
  ],
  _8 = () => {
    const [e, t] = f.useState(!1),
      [n, r] = f.useState("");
    return (
      f.useEffect(() => {
        const o = () => {
          t(window.scrollY > 20);
          const s = am
            .map((a) => a.href.substring(1))
            .find((a) => {
              const l = document.getElementById(a);
              if (l) {
                const c = l.getBoundingClientRect();
                return c.top <= 100 && c.bottom >= 100;
              }
              return !1;
            });
          s && r(s);
        };
        return window.addEventListener("scroll", o), () => window.removeEventListener("scroll", o);
      }, []),
      g.jsx(Y.header, {
        initial: { y: -100 },
        animate: { y: 0 },
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-white/80 dark:bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`,
        children: g.jsx(Iy, {
          className: "mx-auto",
          children: g.jsxs(Dy, {
            className: "container h-20 px-6 w-screen flex items-center justify-between",
            children: [
              g.jsx(nk, { className: "flex items-center", children: g.jsxs(Y.a, { href: "/", className: "flex items-center gap-3", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [g.jsx("img", { src: A8, alt: "Logo", className: "h-12 w-auto transition-transform duration-300 hover:rotate-6" }), g.jsxs("div", { className: "font-bold text-2xl", children: [g.jsx("span", { className: "bg-gradient-to-r from-rose-600 to-rose-400 text-transparent bg-clip-text", children: "Cosmic" }), g.jsx("span", { className: "text-foreground", children: "AI" })] })] }) }),
              g.jsx("nav", {
                className: "hidden md:flex items-center gap-1",
                children: am.map((o) =>
                  g.jsxs(
                    Y.a,
                    {
                      href: o.href,
                      className: `relative px-4 py-2 text-[17px] font-medium rounded-lg transition-colors
                  ${n === o.href.substring(1) ? "text-rose-500" : "text-foreground/80 hover:text-foreground"}`,
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      children: [n === o.href.substring(1) && g.jsx(Y.span, { layoutId: "activeSection", className: "absolute inset-0 bg-rose-500/10 rounded-lg", initial: !1, transition: { type: "spring", bounce: 0.2, duration: 0.6 } }), o.label],
                    },
                    o.href
                  )
                ),
              }),
              g.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  g.jsx(Y.div, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: g.jsx(_a, {
                      className: `bg-gradient-to-r from-rose-600 to-rose-400 text-white border-none
                  hover:opacity-90 transition-opacity px-6 py-2 text-md font-medium`,
                      onClick: () => (window.location.href = "https://app.cosmicai.cc/"),
                      children: "Launch App",
                    }),
                  }),
                  g.jsx(Y.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: g.jsx(M8, {}) }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  j8 = () => {
    const [e, t] = f.useState(!1);
    f.useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 400 ? t(!0) : t(!1);
      });
    }, []);
    const n = () => {
      window.scroll({ top: 0, left: 0 });
    };
    return g.jsx(g.Fragment, { children: e && g.jsx(_a, { onClick: n, className: "fixed bottom-4 right-4 opacity-90 shadow-md", size: "icon", children: g.jsx(qT, { className: "h-4 w-4" }) }) });
  },
  I8 = "/assets/toolkit-jMU3hNsW.png";
function ru(e) {
  return er({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z", fill: "currentColor" }, child: [] }] })(e);
}
const D8 = [
    { title: "Creative Upscaler", description: "Enhance your images with our Creative Upscaler tool.", icon: g.jsx(ru, { size: 24 }), image: "/images/creative-upscaler.gif" },
    { title: "Relighting", description: "Adjust and enhance the lighting of your images.", icon: g.jsx(ru, { size: 24 }), image: "/images/relighting.gif" },
  ],
  O8 = [
    { title: "Image Generation", description: "Elevate your creative journey with the innovative capabilities of our Image Creation tool. This platform does more than just visualize your ideas—it transforms them, pushing the boundaries of what's possible. It is equipped for everyone, from novices to experts, featuring a range of customizable options to suit your creative demands.", icon: g.jsx(ru, { size: 32 }), subFeatures: D8 },
    { title: "Music Generation", description: "Transform your musical ideas into reality with our advanced AI music generation tool. Create original compositions, explore different genres, and produce professional-quality tracks with ease. Perfect for musicians, producers, and creative enthusiasts looking to push the boundaries of musical creation.", icon: g.jsx(QE, { size: 32 }) },
    { title: "Video Generation", description: "Bring your stories to life with our cutting-edge AI video generation platform. Create stunning visual content, animate your ideas, and produce professional-quality videos effortlessly. Ideal for content creators, marketers, and anyone looking to make an impact with video.", icon: g.jsx(ZE, { size: 32 }) },
    { title: "Prompt Marketplace", description: "Coming Soon!", icon: g.jsx(qE, { size: 32 }) },
  ],
  L8 = () => {
    const [e, t] = f.useState(null);
    return g.jsxs("section", {
      className: "relative min-h-screen py-24 sm:py-32 overflow-hidden",
      children: [
        g.jsxs("div", { className: "absolute inset-0", children: [g.jsx("div", { className: "absolute w-[500px] h-[500px] -left-48 top-0 bg-rose-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" }), g.jsx("div", { className: "absolute w-[500px] h-[500px] right-0 top-1/2 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" }), g.jsx("div", { className: "absolute w-[500px] h-[500px] -right-48 bottom-0 bg-fuchsia-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" })] }),
        g.jsxs("div", {
          className: "container relative",
          children: [
            g.jsxs(Y.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center mb-20", children: [g.jsxs("h2", { className: "text-6xl md:text-7xl font-bold mb-6", children: [g.jsx("span", { className: "bg-gradient-to-r from-rose-700 via-rose-500 to-rose-700 text-transparent bg-clip-text", children: "Cosmic" }), g.jsxs("span", { className: "relative ml-4", children: ["Toolkit", g.jsx("div", { className: "absolute -inset-2 bg-rose-500/10 blur-xl rounded-full" })] })] }), g.jsx("p", { className: "text-2xl text-muted-foreground max-w-2xl mx-auto", children: "Unleash your creativity with our comprehensive suite of AI-powered tools" })] }),
            g.jsxs("div", {
              className: "grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-start",
              children: [
                g.jsx(Y.div, {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6 },
                  className: "flex flex-col gap-8",
                  children: O8.map(({ icon: n, title: r, description: o, subFeatures: i }, s) =>
                    g.jsx(
                      Y.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: s * 0.1 },
                        children: g.jsxs(Tr, {
                          onMouseEnter: () => t(r),
                          onMouseLeave: () => t(null),
                          className: `group relative overflow-hidden backdrop-blur-sm bg-white/5 
                    border border-rose-500/20 hover:border-rose-500/40 transition-all duration-500
                    ${r === "Prompt Marketplace" ? "opacity-75" : "hover:bg-white/10"}`,
                          children: [
                            g.jsx("div", {
                              className: `absolute inset-0 bg-gradient-to-r from-rose-500/10 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500`,
                            }),
                            g.jsxs("div", {
                              className: "relative p-8 flex items-start gap-6",
                              children: [
                                g.jsx("div", {
                                  className: `p-4 rounded-2xl shadow-lg shadow-rose-500/25
                      ${r === "Prompt Marketplace" ? "bg-gradient-to-br from-gray-500 to-gray-600" : "bg-gradient-to-br from-rose-500 to-pink-600"}`,
                                  children: n,
                                }),
                                g.jsxs("div", {
                                  className: "space-y-3 flex-1",
                                  children: [
                                    g.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        g.jsx("h3", {
                                          className: `text-2xl font-bold text-white group-hover:text-rose-400 
                          transition-colors duration-300`,
                                          children: r,
                                        }),
                                        r === "Prompt Marketplace"
                                          ? g.jsx("span", {
                                              className: `px-2 py-1 text-xs font-semibold text-white bg-gray-500/50 
                            rounded-full border border-gray-400/20`,
                                              children: "Coming Soon",
                                            })
                                          : g.jsx("span", {
                                              className: `px-2 py-1 text-xs font-semibold text-rose-400 
                            bg-rose-500/10 rounded-full border border-rose-500/20`,
                                              children: "Live",
                                            }),
                                      ],
                                    }),
                                    g.jsx("p", {
                                      className: `text-lg text-muted-foreground group-hover:text-gray-300 
                        transition-colors duration-300 leading-relaxed`,
                                      children: o,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            g.jsx(qs, {
                              children:
                                e === r &&
                                i &&
                                g.jsxs(Y.div, {
                                  initial: { opacity: 0, x: 20 },
                                  animate: { opacity: 1, x: 0 },
                                  exit: { opacity: 0, x: 20 },
                                  transition: { duration: 0.3 },
                                  className: `absolute top-0 left-full ml-8 bg-black/90 backdrop-blur-xl p-8 
                          rounded-2xl border border-rose-500/20 shadow-2xl w-[400px] z-10`,
                                  children: [
                                    g.jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Image Editing Tools" }),
                                    g.jsx("div", {
                                      className: "space-y-6",
                                      children: i.map(({ title: a, description: l, image: c }) =>
                                        g.jsxs(
                                          "div",
                                          {
                                            className: "group/feature flex gap-6 items-start",
                                            children: [
                                              c &&
                                                g.jsxs("div", {
                                                  className: "relative rounded-lg overflow-hidden w-24 h-24",
                                                  children: [
                                                    g.jsx("div", {
                                                      className: `absolute inset-0 bg-rose-500/20 group-hover/feature:bg-rose-500/40 
                                    transition-colors duration-300`,
                                                    }),
                                                    g.jsx("img", { src: c, alt: a, className: "w-full h-full object-cover" }),
                                                  ],
                                                }),
                                              g.jsxs("div", {
                                                children: [
                                                  g.jsx("h4", {
                                                    className: `text-xl font-semibold text-white group-hover/feature:text-rose-400 
                                  transition-colors duration-300`,
                                                    children: a,
                                                  }),
                                                  g.jsx("p", {
                                                    className: `text-gray-400 group-hover/feature:text-gray-300 
                                  transition-colors duration-300`,
                                                    children: l,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          a
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        }),
                      },
                      r
                    )
                  ),
                }),
                g.jsxs(Y.div, {
                  initial: { opacity: 0, x: 20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6 },
                  className: "relative sticky top-8",
                  children: [
                    g.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent rounded-3xl blur-2xl" }),
                    g.jsx("img", {
                      src: I8,
                      className: `relative rounded-3xl shadow-2xl shadow-rose-500/10 border-2 border-rose-500/20
                transform transition-transform duration-500 hover:scale-105`,
                      alt: "Toolkit Preview",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  F8 = "/assets/stellary1-FUTe8NU9.png",
  V8 = "/assets/stellary2-kVrqzr0t.png",
  z8 = "/assets/stellary3-nZ5O45IF.png",
  B8 = "/assets/stellary4-QutATZ_t.png",
  U8 = "/assets/stellary5--VVCdeJc.png",
  W8 = "/assets/stellary6-_5DV_L0b.png",
  K8 = "/assets/stellary7-AHaX6H9E.png",
  H8 = "/assets/stellary11-Lellu0lW.png",
  G8 = "/assets/stellary12-cTq1SwIP.png",
  Y8 = "/assets/stellary13-dpqbknru.png",
  X8 = "/assets/stellary14-dVLpUIwX.png",
  Q8 = "/assets/stellary15-Rkf79m0V.png",
  q8 = () => {
    const [e, t] = f.useState(null),
      [n, r] = f.useState("All"),
      [o, i] = f.useState(null),
      s = ["All", "Digital Art", "Character Design", "Landscape", "Portrait", "Abstract", "Concept Art"],
      a = [
        { src: F8, alt: "AI Generated Art 1", category: "Digital Art" },
        { src: V8, alt: "AI Generated Art 2", category: "Character Design" },
        { src: z8, alt: "AI Generated Art 3", category: "Landscape" },
        { src: B8, alt: "AI Generated Art 4", category: "Portrait" },
        { src: U8, alt: "AI Generated Art 5", category: "Abstract" },
        { src: W8, alt: "AI Generated Art 6", category: "Concept Art" },
        { src: K8, alt: "AI Generated Art 7", category: "Digital Art" },
        { src: Y8, alt: "AI Generated Art 8", category: "Character Design" },
        { src: X8, alt: "AI Generated Art 9", category: "Landscape" },
        { src: Q8, alt: "AI Generated Art 10", category: "Portrait" },
        { src: H8, alt: "AI Generated Art 11", category: "Abstract" },
        { src: G8, alt: "AI Generated Art 12", category: "Concept Art" },
      ],
      l = n === "All" ? a : a.filter((c) => c.category === n);
    return g.jsxs("section", {
      id: "gallery",
      className: "relative min-h-screen py-24 sm:py-32 overflow-hidden",
      children: [
        g.jsxs("div", { className: "absolute inset-0", children: [g.jsx("div", { className: "absolute w-[800px] h-[800px] -left-48 top-0 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" }), g.jsx("div", { className: "absolute w-[600px] h-[600px] right-0 top-1/2 bg-gradient-to-l from-fuchsia-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" }), g.jsx("div", { className: "absolute w-[700px] h-[700px] -right-48 bottom-0 bg-gradient-to-tr from-rose-500/30 to-orange-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" })] }),
        g.jsxs("div", {
          className: "container relative",
          children: [
            g.jsxs(Y.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center mb-24", children: [g.jsxs("div", { className: "relative inline-block mb-8", children: [g.jsx(Y.span, { className: "absolute -inset-8 bg-rose-500/10 blur-2xl rounded-full", animate: { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }, transition: { duration: 4, repeat: 1 / 0, repeatType: "reverse" } }), g.jsxs("h2", { className: "text-7xl md:text-8xl font-bold relative", children: [g.jsx("span", { className: "bg-gradient-to-r from-rose-700 via-rose-500 to-rose-700 text-transparent bg-clip-text", children: "Cosmic" }), g.jsx("span", { className: "ml-4 relative", children: "Gallery" })] })] }), g.jsx("p", { className: "text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "Explore the limitless possibilities of AI-generated artwork in our curated collection" })] }),
            g.jsx(Y.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "flex flex-wrap justify-center gap-4 mb-16",
              children: s.map((c, u) =>
                g.jsx(
                  Y.button,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { delay: u * 0.1 },
                    onClick: () => r(c),
                    className: `
                px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                backdrop-blur-sm border-2 hover:scale-105
                ${n === c ? "bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-500/25" : "bg-white/5 border-rose-500/20 text-white hover:border-rose-500/60"}
              `,
                    children: c,
                  },
                  c
                )
              ),
            }),
            g.jsx(Y.div, {
              layout: !0,
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
              children: g.jsx(qs, {
                mode: "popLayout",
                children: l.map((c, u) =>
                  g.jsxs(
                    Y.div,
                    {
                      layout: !0,
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.8 },
                      transition: { duration: 0.5, delay: u * 0.1 },
                      className: "group relative aspect-square overflow-hidden rounded-3xl",
                      onHoverStart: () => i(c.src),
                      onHoverEnd: () => i(null),
                      onClick: () => t(c.src),
                      children: [
                        g.jsx(Y.div, { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80", initial: { opacity: 0 }, animate: { opacity: o === c.src ? 1 : 0 }, transition: { duration: 0.3 } }),
                        g.jsx(Y.img, { src: c.src, alt: c.alt, className: "w-full h-full object-cover", whileHover: { scale: 1.1 }, transition: { duration: 0.5 } }),
                        g.jsx(Y.div, {
                          className: "absolute inset-0 flex flex-col justify-end p-6",
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: o === c.src ? 1 : 0, y: o === c.src ? 0 : 20 },
                          transition: { duration: 0.3 },
                          children: g.jsxs("div", {
                            className: "backdrop-blur-md bg-black/30 rounded-xl p-6 transform",
                            children: [
                              g.jsx("span", {
                                className: `inline-block px-4 py-1.5 text-sm font-medium text-rose-400 
                      bg-rose-500/10 rounded-full border border-rose-500/20 mb-3`,
                                children: c.category,
                              }),
                              g.jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: c.alt }),
                              g.jsx("p", { className: "text-gray-200 text-sm", children: "Click to view full image" }),
                            ],
                          }),
                        }),
                      ],
                    },
                    c.src
                  )
                ),
              }),
            }),
            g.jsx(qs, {
              children:
                e &&
                g.jsx(Y.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4",
                  onClick: () => t(null),
                  children: g.jsxs(Y.div, {
                    className: "relative max-w-7xl mx-auto",
                    initial: { scale: 0.9, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.9, opacity: 0 },
                    transition: { type: "spring", damping: 25 },
                    children: [
                      g.jsx("img", { src: e, alt: "Selected artwork", className: "max-w-full max-h-[85vh] object-contain rounded-3xl" }),
                      g.jsx("button", {
                        className: `absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 
                    hover:bg-black/70 rounded-full p-2 backdrop-blur-sm transition-all duration-300`,
                        onClick: (c) => {
                          c.stopPropagation(), t(null);
                        },
                        children: g.jsx("svg", { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: g.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }),
                      }),
                    ],
                  }),
                }),
            }),
          ],
        }),
      ],
    });
  },
  Z8 = () =>
    g.jsx("div", {
      className: "min-h-screen",
      children: g.jsxs("main", {
        className: "container py-20",
        children: [
          g.jsx("h1", { className: "text-4xl font-bold mb-12 text-center", children: "Terms of Service for COSM Token and CosmicAI Services" }),
          g.jsxs("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "1. Utility Token Disclaimer" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed mb-4", children: "The COSM Token is exclusively a utility token designed for accessing CosmicAI's subscriptions and services. It functions solely as a digital credit mechanism, analogous to web2 service credits, and is intended exclusively for accessing features within our platform. Users are explicitly advised to acquire tokens only for the purpose of accessing CosmicAI's services." }), g.jsx("p", { className: "text-foreground/80 leading-relaxed mb-4", children: "The COSM Token:" }), g.jsxs("ul", { className: "list-disc pl-6 mb-4 text-foreground/80 leading-relaxed", children: [g.jsx("li", { children: "Carries no intrinsic or real-world monetary value" }), g.jsx("li", { children: "Provides no rights to profit-sharing, dividends, or financial returns" }), g.jsx("li", { children: "Confers no governance, voting, management rights, ownership, or stake in CosmicAI or any affiliated entities" })] }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "The token contract has been irrevocably renounced, meaning CosmicAI has relinquished all control over the token's functionality, operations, or any ability to modify its behavior." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "2. Jurisdictional Restrictions" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "COSM Tokens and CosmicAI services are categorically not available to persons located in, residents of, or citizens of jurisdictions where such activities would be prohibited under applicable laws, regulations, or restrictions. Users bear sole responsibility for determining and ensuring their legal compliance with all applicable laws, regulations, and requirements in their respective jurisdictions prior to engaging with COSM Tokens." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "3. Token Usage and Limitations" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "The COSM Token exists exclusively as a utility token for accessing subscriptions and services offered on our platform. Any acquisition or use of COSM Tokens for purposes other than accessing platform services is expressly discouraged and contrary to their intended purpose." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "4. Regulatory Compliance and User Obligations" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "Users assume full and sole responsibility for ensuring that their purchase, possession, and use of COSM Tokens comply with all applicable laws, regulations, and requirements within their jurisdiction. CosmicAI expressly disclaims any and all liability for users' non-compliance with applicable laws or regulations. CosmicAI maintains absolute discretion to restrict or prohibit the availability of COSM Tokens in any jurisdiction where such activities may be regulated, restricted, or prohibited." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "5. Price Changes" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "We reserve the right to change our prices at any time with or without written notice. Any price changes will apply to the Fees charged to your account immediately after the effective date of the changes." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "6. Refunds and Cancellations" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "We do not offer any refunds for any products or services. All payments are final and nonrefundable. You may cancel your paid subscription at any time. If you do cancel your subscription, no refund of any kind will be provided. By using any of our products or services, you agree to withhold your right to a refund." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "7. Restrictions" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed mb-4", children: "You may not:" }), g.jsxs("ul", { className: "list-none pl-6 mb-4 text-foreground/80 leading-relaxed", children: [g.jsx("li", { children: "(i) Use the Services in a way that infringes, misappropriates or violates any person's rights;" }), g.jsx("li", { children: "(ii) Use any method to extract data from the Services, including web scraping, web harvesting, or web data extraction methods, other than as permitted through the API;" }), g.jsx("li", { children: "(iii) Represent that output from the Services was human-generated when it is not;" }), g.jsx("li", { children: "(iv) You will comply with any rate limits and other requirements in our documentation." })] })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "8. Third Party Services" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "Any third party software, services, or other products you use in connection with the Services are subject to their own terms, and we are not responsible for third party products." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "9. Disclaimer of Professional Advice" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "All information provided through this platform and associated services is strictly for informational purposes only. CosmicAI expressly disclaims any role as an advisor or consultant regarding token usage. Users are strongly advised to seek independent professional counsel before making any decisions involving COSM Tokens." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "10. Comprehensive Liability Disclaimer" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "CosmicAI and all affiliated parties expressly disclaim any and all liability, responsibility, or obligation for any losses, damages, or adverse outcomes arising from or related to the use, purchase, or trading of COSM Tokens. Users explicitly acknowledge and accept that they bear sole and complete responsibility for all risks, including but not limited to financial losses, market volatility, technical failures, or complete loss of value. CosmicAI provides no guarantees regarding token liquidity, market availability, or maintenance of any value." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "11. Risk Acknowledgment" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "Engagement with digital assets and cryptocurrencies inherently involves substantial risk, including but not limited to the potential for complete loss of capital. Users must carefully evaluate and assume full responsibility for all inherent risks, including extreme price volatility, limited or no liquidity, and technical vulnerabilities. Users acknowledge that past performance or utility does not guarantee future results or value." })] }),
              g.jsxs("section", { children: [g.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "12. Modification of Terms" }), g.jsx("p", { className: "text-foreground/80 leading-relaxed", children: "CosmicAI retains the unilateral right to modify, amend, or update these Terms of Service at any time without prior notice. Users bear sole responsibility for regularly reviewing these terms to remain informed of any changes. Continued use of the platform or services following any modifications constitutes acceptance of such changes." })] }),
            ],
          }),
        ],
      }),
    });
function J8() {
  return g.jsxs(zP, { children: [g.jsx(_8, {}), g.jsxs(jP, { children: [g.jsx(Uc, { path: "/", element: g.jsxs(g.Fragment, { children: [g.jsx(eT, {}), g.jsx(FE, {}), g.jsx(sT, {}), g.jsx(U3, {}), g.jsx(L8, {}), g.jsx(e3, {}), g.jsx(q8, {})] }) }), g.jsx(Uc, { path: "/termsofservice", element: g.jsx(Z8, {}) })] }), g.jsx(HP, {}), g.jsx(j8, {})] });
}
const eR = { theme: "system", setTheme: () => null },
  tR = f.createContext(eR);
function nR({ children: e, defaultTheme: t = "dark", storageKey: n = "vite-ui-theme", ...r }) {
  const [o, i] = f.useState(() => localStorage.getItem(n) || t);
  f.useEffect(() => {
    const a = window.document.documentElement;
    if ((a.classList.remove("light", "dark"), o === "system")) {
      const l = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      a.classList.add(l);
      return;
    }
    a.classList.add(o);
  }, [o]);
  const s = {
    theme: o,
    setTheme: (a) => {
      localStorage.setItem(n, a), i(a);
    },
  };
  return g.jsx(tR.Provider, { ...r, value: s, children: e });
}
_l.createRoot(document.getElementById("root")).render(g.jsx(fe.StrictMode, { children: g.jsx(nR, { children: g.jsx(J8, {}) }) }));
