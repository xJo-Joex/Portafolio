(() => {
var exports = {};
exports.id = "pages/github";
exports.ids = ["pages/github"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\joeve\\Documents\\portafolio\\components\\Layout.js";







const Layout = ({
  children,
  footer = true,
  dark,
  title
}) => {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleRouterChange = url => {
      // console.log(url);
      nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();
    };

    router.events.on("routeChangeStart", handleRouterChange);
    router.events.on("routeChangeConmplete", nprogress__WEBPACK_IMPORTED_MODULE_3___default().done());
    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      "bg-dark": dark,
      "bg-light": !dark
    }),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      className: "container py-4",
      children: [title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("text-center", {
          "text-light": dark
        }),
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), footer && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("footer", {
      className: "bg-dark text-light text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "container p-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: "\xA9 Joe Vega Portafolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["2021-", new Date().getFullYear()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "All rights Rerverd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\joeve\\Documents\\portafolio\\components\\Navbar.js";



const Navbar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container-fluid container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "navbar-brand",
          children: "Simple Portafolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        className: "navbar-toggler",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarNav",
        "aria-controls": "navbarNav",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "navbar-toggler-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "collapse navbar-collapse",
        id: "navbarNav",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "navbar-nav ms-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/blog",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "nav-link",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/github",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "nav-link",
                children: "Github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\joeve\\Documents\\portafolio\\pages\\_error.js";




const _error = ({
  statusCode
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: statusCode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: "text-center",
      children: ["Could not load your page: StatusCode ", statusCode]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: "text-center",
      children: "Could not load this page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_error);

/***/ }),

/***/ "./pages/github.js":
/*!*************************!*\
  !*** ./pages/github.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\joeve\\Documents\\portafolio\\pages\\github.js";




const Github = ({
  user,
  statusCode
}) => {
  if (statusCode) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_error__WEBPACK_IMPORTED_MODULE_1__.default, {
    statusCode: statusCode
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 26
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    footer: false,
    dark: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "col-md-4 offset-md-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "card card-body text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
            children: user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: user.avatar_url,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            children: user.bio
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: user.blog,
            target: "_blank",
            className: "btn btn-outline-secondary my-2 w-100",
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: user.html_url,
            target: "_blank",
            className: "btn btn-outline-secondary w-100",
            children: "Go to GitHub"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/xJo-Joex");
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();
  console.log(res);
  return {
    props: {
      user: data,
      statusCode
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Github);

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/github.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGFmb2xpby8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL3BvcnRhZm9saW8vLi9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3BvcnRhZm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcG9ydGFmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3BvcnRhZm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3BvcnRhZm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGFmb2xpby8uL3BhZ2VzL19lcnJvci5qcyIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvLy4vcGFnZXMvZ2l0aHViLmpzIiwid2VicGFjazovL3BvcnRhZm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3BvcnRhZm9saW8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vcG9ydGFmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGFmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGFmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL3BvcnRhZm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGFmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGFmb2xpby9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3BvcnRhZm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRhZm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3BvcnRhZm9saW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wb3J0YWZvbGlvL2lnbm9yZWR8QzpcXFVzZXJzXFxqb2V2ZVxcRG9jdW1lbnRzXFxwb3J0YWZvbGlvXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgZm9vdGVyID0gdHJ1ZSwgZGFyaywgdGl0bGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVyQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVyQ2hhbmdlKTtcclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbm1wbGV0ZVwiLCBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZXJDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgXCJiZy1kYXJrXCI6IGRhcmssIFwiYmctbGlnaHRcIjogIWRhcmsgfSl9PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS00XCI+XHJcbiAgICAgICAge3RpdGxlICYmIChcclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJ0ZXh0LWNlbnRlclwiLCB7IFwidGV4dC1saWdodFwiOiBkYXJrIH0pfT5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICB7Zm9vdGVyICYmIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgIDxoMT4mY29weTsgSm9lIFZlZ2EgUG9ydGFmb2xpbzwvaDE+XHJcbiAgICAgICAgICAgIDxwPjIwMjEte25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICAgIDxwPkFsbCByaWdodHMgUmVydmVyZDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjb250YWluZXJcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+U2ltcGxlIFBvcnRhZm9saW88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxyXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXHJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1zLWF1dG9cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkJsb2c8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dpdGh1YlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5HaXRodWI8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5jb25zdCBfZXJyb3IgPSAoeyBzdGF0dXNDb2RlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAge3N0YXR1c0NvZGUgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIENvdWxkIG5vdCBsb2FkIHlvdXIgcGFnZTogU3RhdHVzQ29kZSB7c3RhdHVzQ29kZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Db3VsZCBub3QgbG9hZCB0aGlzIHBhZ2U8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2Vycm9yO1xyXG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vX2Vycm9yXCI7XHJcblxyXG5jb25zdCBHaXRodWIgPSAoeyB1c2VyLCBzdGF0dXNDb2RlIH0pID0+IHtcclxuICBpZiAoc3RhdHVzQ29kZSkgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSAvPjtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBmb290ZXI9e2ZhbHNlfSBkYXJrPXt0cnVlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG9mZnNldC1tZC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT57dXNlci5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxwPnt1c2VyLmJpb308L3A+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17dXNlci5ibG9nfVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBteS0yIHctMTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e3VzZXIuaHRtbF91cmx9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHctMTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdvIHRvIEdpdEh1YlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMveEpvLUpvZXhcIik7XHJcblxyXG4gIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzID4gMjAwID8gcmVzLnN0YXR1cyA6IGZhbHNlO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB1c2VyOiBkYXRhLFxyXG4gICAgICBzdGF0dXNDb2RlLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaXRodWI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTlByb2dyZXNzIiwiY2xhc3NuYW1lcyIsIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiZGFyayIsInRpdGxlIiwicm91dGVyIiwiaGFuZGxlUm91dGVyQ2hhbmdlIiwidXJsIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJMaW5rIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsIm1hcCIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJsZW5ndGgiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlJlYWN0IiwiX2Vycm9yIiwiR2l0aHViIiwidXNlciIsImF2YXRhcl91cmwiLCJiaW8iLCJibG9nIiwiaHRtbF91cmwiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9