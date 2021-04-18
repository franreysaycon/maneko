webpackHotUpdate_N_E("pages/index",{

/***/ "./src/component/ManekoPage/index.tsx":
/*!********************************************!*\
  !*** ./src/component/ManekoPage/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./src/component/ManekoPage/Header.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ "./src/component/ManekoPage/Sidebar.tsx");



var _jsxFileName = "/home/franreysaycon/Repositories/maneko-next/src/component/ManekoPage/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var AuthPage = function AuthPage(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      sidebarOpen = _useState[0],
      setSidebarOpen = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      w: "100vw",
      minH: "100vh",
      bgColor: "purple.900",
      p: "5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onSidebarOpen: function onSidebarOpen() {
          return setSidebarOpen(true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        w: "100%",
        p: "3",
        overflowY: "scroll",
        overflowX: "hidden",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
      children: sidebarOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClose: function onClose() {
          return setSidebarOpen(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 26
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(AuthPage, "5rGDkYpGQ8fHM9RkMWnKOwsxadk=");

_c = AuthPage;
/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

var _c;

$RefreshReg$(_c, "AuthPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9NYW5la29QYWdlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBdXRoUGFnZSIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJzaWRlYmFyT3BlbiIsInNldFNpZGViYXJPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ3BCQyxzREFBUSxDQUFDLEtBQUQsQ0FEWTtBQUFBLE1BQ25EQyxXQURtRDtBQUFBLE1BQ3RDQyxjQURzQzs7QUFHMUQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFLLE9BQUMsRUFBQyxPQUFQO0FBQWUsVUFBSSxFQUFDLE9BQXBCO0FBQTRCLGFBQU8sRUFBQyxZQUFwQztBQUFpRCxPQUFDLEVBQUMsR0FBbkQ7QUFBQSw4QkFDQSxxRUFBQywrQ0FBRDtBQUFRLHFCQUFhLEVBQUU7QUFBQSxpQkFBTUEsY0FBYyxDQUFDLElBQUQsQ0FBcEI7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFRSxxRUFBQyxvREFBRDtBQUFLLFNBQUMsRUFBQyxNQUFQO0FBQWMsU0FBQyxFQUFDLEdBQWhCO0FBQW9CLGlCQUFTLEVBQUMsUUFBOUI7QUFBdUMsaUJBQVMsRUFBQyxRQUFqRDtBQUFBLGtCQUNJSDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FLHFFQUFDLDZEQUFEO0FBQUEsZ0JBQ0lFLFdBQVcsaUJBQUkscUVBQUMsZ0RBQUQ7QUFBUyxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsY0FBYyxDQUFDLEtBQUQsQ0FBcEI7QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBYUQsQ0FoQkQ7O0dBQU1KLFE7O0tBQUFBLFE7QUFrQlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhjMmMyZjE4YzI0ZmY4M2UxZTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcidcblxuaW50ZXJmYWNlIEF1dGhQYWdlUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBBdXRoUGFnZTogUmVhY3QuRkM8QXV0aFBhZ2VQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCB3PVwiMTAwdndcIiBtaW5IPVwiMTAwdmhcIiBiZ0NvbG9yPVwicHVycGxlLjkwMFwiIHA9XCI1XCI+XG4gICAgICA8SGVhZGVyIG9uU2lkZWJhck9wZW49eygpID0+IHNldFNpZGViYXJPcGVuKHRydWUpfSAvPlxuICAgICAgICA8Qm94IHc9XCIxMDAlXCIgcD1cIjNcIiBvdmVyZmxvd1k9XCJzY3JvbGxcIiBvdmVyZmxvd1g9XCJoaWRkZW5cIj5cbiAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIHsgc2lkZWJhck9wZW4gJiYgPFNpZGViYXIgb25DbG9zZT17KCkgPT4gc2V0U2lkZWJhck9wZW4oZmFsc2UpfSAvPn1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9