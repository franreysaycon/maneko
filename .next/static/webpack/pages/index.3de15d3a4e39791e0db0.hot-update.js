webpackHotUpdate_N_E("pages/index",{

/***/ "./src/component/CardCollection/Card.tsx":
/*!***********************************************!*\
  !*** ./src/component/CardCollection/Card.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/franreysaycon/Repositories/maneko-next/src/component/CardCollection/Card.tsx",
    _this = undefined;



var ISSUER_COLORS = {
  'bpi_atm': '#B20001',
  'bpi_cc': '#2B4162',
  'bdo_atm': '#003375',
  'ing_atm': '#ff6201'
};

var Card = function Card(_ref) {
  var type = _ref.type,
      balance = _ref.balance,
      name = _ref.name,
      issuer = _ref.issuer;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    d: "flex",
    flexDir: "column",
    p: "3",
    flex: "1 0 100%",
    maxWidth: "280px",
    h: "200px",
    borderRadius: "xl",
    bgColor: ISSUER_COLORS[issuer],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      d: "flex",
      textTransform: "uppercase",
      fontSize: "sm",
      color: "white",
      children: type
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      d: "flex",
      h: "100%",
      flexDir: "column",
      justifyContent: "center",
      children: [type === 'cc' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        textTransform: "uppercase",
        fontSize: "sm",
        color: "white",
        children: "outstanding balance"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        color: "white",
        fontSize: "xl",
        children: "PHP ".concat(balance)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      d: "flex",
      textTransform: "uppercase",
      justifyContent: "space-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        textTransform: "uppercase",
        fontSize: "sm",
        color: "white",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        textTransform: "uppercase",
        fontSize: "sm",
        color: "white",
        children: issuer.split('_')[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, _this);
};

_c = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c;

$RefreshReg$(_c, "Card");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9DYXJkQ29sbGVjdGlvbi9DYXJkLnRzeCJdLCJuYW1lcyI6WyJJU1NVRVJfQ09MT1JTIiwiQ2FyZCIsInR5cGUiLCJiYWxhbmNlIiwibmFtZSIsImlzc3VlciIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCLGFBQVcsU0FEUztBQUVwQixZQUFVLFNBRlU7QUFHcEIsYUFBVyxTQUhTO0FBSXBCLGFBQVc7QUFKUyxDQUF0Qjs7QUFPQSxJQUFNQyxJQUFxQixHQUFHLFNBQXhCQSxJQUF3QjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLE9BQVQsUUFBU0EsT0FBVDtBQUFBLE1BQWtCQyxJQUFsQixRQUFrQkEsSUFBbEI7QUFBQSxNQUF3QkMsTUFBeEIsUUFBd0JBLE1BQXhCO0FBQUEsc0JBQzVCLHFFQUFDLG9EQUFEO0FBQUssS0FBQyxFQUFDLE1BQVA7QUFBYyxXQUFPLEVBQUMsUUFBdEI7QUFBK0IsS0FBQyxFQUFDLEdBQWpDO0FBQXFDLFFBQUksRUFBQyxVQUExQztBQUFxRCxZQUFRLEVBQUMsT0FBOUQ7QUFBc0UsS0FBQyxFQUFDLE9BQXhFO0FBQWdGLGdCQUFZLEVBQUMsSUFBN0Y7QUFBa0csV0FBTyxFQUFFTCxhQUFhLENBQUNLLE1BQUQsQ0FBeEg7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFLLE9BQUMsRUFBQyxNQUFQO0FBQWMsbUJBQWEsRUFBQyxXQUE1QjtBQUF3QyxjQUFRLEVBQUMsSUFBakQ7QUFBc0QsV0FBSyxFQUFDLE9BQTVEO0FBQUEsZ0JBQXFFSDtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxvREFBRDtBQUFLLE9BQUMsRUFBQyxNQUFQO0FBQWMsT0FBQyxFQUFDLE1BQWhCO0FBQXVCLGFBQU8sRUFBQyxRQUEvQjtBQUF3QyxvQkFBYyxFQUFDLFFBQXZEO0FBQUEsaUJBQ0dBLElBQUksS0FBSyxJQUFULGlCQUFpQixxRUFBQyxxREFBRDtBQUFNLHFCQUFhLEVBQUMsV0FBcEI7QUFBZ0MsZ0JBQVEsRUFBQyxJQUF6QztBQUE4QyxhQUFLLEVBQUMsT0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcEIsZUFFRSxxRUFBQyxvREFBRDtBQUFLLGFBQUssRUFBQyxPQUFYO0FBQW1CLGdCQUFRLEVBQUMsSUFBNUI7QUFBQSxnQ0FBeUNDLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBTUUscUVBQUMsb0RBQUQ7QUFBSyxPQUFDLEVBQUMsTUFBUDtBQUFjLG1CQUFhLEVBQUMsV0FBNUI7QUFBd0Msb0JBQWMsRUFBQyxlQUF2RDtBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQU0scUJBQWEsRUFBQyxXQUFwQjtBQUFnQyxnQkFBUSxFQUFDLElBQXpDO0FBQThDLGFBQUssRUFBQyxPQUFwRDtBQUFBLGtCQUE2REM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMscURBQUQ7QUFBTSxxQkFBYSxFQUFDLFdBQXBCO0FBQWdDLGdCQUFRLEVBQUMsSUFBekM7QUFBOEMsYUFBSyxFQUFDLE9BQXBEO0FBQUEsa0JBQTZEQyxNQUFNLENBQUNDLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FENEI7QUFBQSxDQUE5Qjs7S0FBTUwsSTtBQWNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZGUxNWQzYTRlMzk3OTFlMGRiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmRUIH0gZnJvbSAnLi90eXBlcydcblxuY29uc3QgSVNTVUVSX0NPTE9SUyA9IHtcbiAgJ2JwaV9hdG0nOiAnI0IyMDAwMScsXG4gICdicGlfY2MnOiAnIzJCNDE2MicsXG4gICdiZG9fYXRtJzogJyMwMDMzNzUnLFxuICAnaW5nX2F0bSc6ICcjZmY2MjAxJyxcbn1cblxuY29uc3QgQ2FyZDogUmVhY3QuRkM8Q2FyZFQ+ID0gKHsgdHlwZSwgYmFsYW5jZSwgbmFtZSwgaXNzdWVyIH0pID0+IChcbiAgPEJveCBkPVwiZmxleFwiIGZsZXhEaXI9XCJjb2x1bW5cIiBwPVwiM1wiIGZsZXg9XCIxIDAgMTAwJVwiIG1heFdpZHRoPVwiMjgwcHhcIiBoPVwiMjAwcHhcIiBib3JkZXJSYWRpdXM9XCJ4bFwiIGJnQ29sb3I9e0lTU1VFUl9DT0xPUlNbaXNzdWVyXX0+XG4gICAgPEJveCBkPVwiZmxleFwiIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIiBmb250U2l6ZT1cInNtXCIgY29sb3I9XCJ3aGl0ZVwiPnt0eXBlfTwvQm94PlxuICAgIDxCb3ggZD1cImZsZXhcIiBoPVwiMTAwJVwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAge3R5cGUgPT09ICdjYycgJiYgPFRleHQgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiIGZvbnRTaXplPVwic21cIiBjb2xvcj1cIndoaXRlXCI+b3V0c3RhbmRpbmcgYmFsYW5jZTwvVGV4dD4gfVxuICAgICAgPEJveCBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJ4bFwiPntgUEhQICR7YmFsYW5jZX1gfTwvQm94PlxuICAgIDwvQm94PlxuICAgIDxCb3ggZD1cImZsZXhcIiB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICA8VGV4dCB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCIgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwid2hpdGVcIj57bmFtZX08L1RleHQ+XG4gICAgICA8VGV4dCB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCIgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwid2hpdGVcIj57aXNzdWVyLnNwbGl0KCdfJylbMF19PC9UZXh0PlxuICAgIDwvQm94PlxuICA8L0JveD5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==