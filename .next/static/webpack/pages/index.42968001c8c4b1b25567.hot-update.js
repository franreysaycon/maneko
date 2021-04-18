webpackHotUpdate_N_E("pages/index",{

/***/ "./src/component/CardCollection/index.tsx":
/*!************************************************!*\
  !*** ./src/component/CardCollection/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_franreysaycon_Repositories_maneko_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_franreysaycon_Repositories_maneko_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_franreysaycon_Repositories_maneko_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_franreysaycon_Repositories_maneko_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_franreysaycon_Repositories_maneko_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card */ "./src/component/CardCollection/Card.tsx");





var _jsxFileName = "/home/franreysaycon/Repositories/maneko-next/src/component/CardCollection/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_franreysaycon_Repositories_maneko_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var MotionBox = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Box"]);
_c = MotionBox;

var swipePower = function swipePower(offset, absDistance) {
  return offset / absDistance * 100;
};

var CardCollection = function CardCollection(_ref) {
  _s();

  var cards = _ref.cards;
  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__["useAnimation"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      curIndex = _useState[0],
      setCurIndex = _useState[1];

  var handleDragEnd = /*#__PURE__*/function () {
    var _ref3 = Object(_home_franreysaycon_Repositories_maneko_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_home_franreysaycon_Repositories_maneko_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_, _ref2) {
      var offset, power;
      return _home_franreysaycon_Repositories_maneko_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              offset = _ref2.offset;
              power = swipePower(offset.x, 300);

              if (!(power > 60 && curIndex - 1 !== -1)) {
                _context.next = 9;
                break;
              }

              _context.next = 5;
              return controls.start({
                x: -270 * (curIndex - 1) - (25 * curIndex - 1) + (curIndex === cards.length - 2 ? 25 : 0)
              });

            case 5:
              console.log(-270 * (curIndex + 1) - (25 * curIndex - 1) + (curIndex === cards.length - 2 ? 25 : 0));
              setCurIndex(function (s) {
                return s - 1;
              });
              _context.next = 14;
              break;

            case 9:
              if (!(power < -60 && curIndex + 1 < cards.length)) {
                _context.next = 14;
                break;
              }

              _context.next = 12;
              return controls.start({
                x: -270 * (curIndex + 1) - (25 * curIndex - 1) + (curIndex === cards.length - 2 ? 25 : 0)
              });

            case 12:
              console.log(-270 * (curIndex + 1) - (25 * curIndex - 1) + (curIndex === cards.length - 2 ? 25 : 0));
              setCurIndex(function (s) {
                return s + 1;
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDragEnd(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    d: "flex",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      w: "330px",
      h: "170px",
      overflow: "hidden",
      pos: "relative",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MotionBox, {
        display: "flex",
        position: "relative",
        height: "170px",
        drag: "x",
        dragDirectionLock: true,
        dragConstraints: {
          left: 0,
          right: 0
        },
        dragMomentum: false,
        animate: controls,
        transition: {
          x: {
            type: "spring",
            stiffness: 600,
            damping: 100
          }
        },
        onDragEnd: handleDragEnd,
        layout: true,
        css: {
          ">div": {
            marginRight: '15px'
          },
          ">div:last-child": {
            marginRight: '0px'
          }
        },
        children: cards.map(function (card) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread({}, card), card.id, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 34
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(CardCollection, "xeueF6z6wtncrju1wUz/CfQgPxw=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_5__["useAnimation"]];
});

_c2 = CardCollection;
CardCollection.defaultProps = {
  cards: []
};
/* harmony default export */ __webpack_exports__["default"] = (CardCollection);

var _c, _c2;

$RefreshReg$(_c, "MotionBox");
$RefreshReg$(_c2, "CardCollection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9DYXJkQ29sbGVjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiTW90aW9uQm94IiwibW90aW9uIiwiQm94Iiwic3dpcGVQb3dlciIsIm9mZnNldCIsImFic0Rpc3RhbmNlIiwiQ2FyZENvbGxlY3Rpb24iLCJjYXJkcyIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwidXNlU3RhdGUiLCJjdXJJbmRleCIsInNldEN1ckluZGV4IiwiaGFuZGxlRHJhZ0VuZCIsIl8iLCJwb3dlciIsIngiLCJzdGFydCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzIiwibGVmdCIsInJpZ2h0IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtYXJnaW5SaWdodCIsIm1hcCIsImNhcmQiLCJpZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFNBQVMsR0FBR0MsNERBQU0sQ0FBQ0Msb0RBQUQsQ0FBeEI7S0FBTUYsUzs7QUFFTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQWlCQyxXQUFqQixFQUFpRDtBQUNsRSxTQUFRRCxNQUFNLEdBQUdDLFdBQVYsR0FBeUIsR0FBaEM7QUFDRCxDQUZEOztBQUlBLElBQU1DLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdELE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDbkUsTUFBTUMsUUFBUSxHQUFHQyxrRUFBWSxFQUE3Qjs7QUFEbUUsa0JBRW5DQyxzREFBUSxDQUFTLENBQVQsQ0FGMkI7QUFBQSxNQUU1REMsUUFGNEQ7QUFBQSxNQUVsREMsV0FGa0Q7O0FBSW5FLE1BQU1DLGFBQWE7QUFBQSx1VkFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWVYsb0JBQVosU0FB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NkJBQW1CO0FBQ2pCQSx1QkFBVyxFQUFFO0FBREk7QUFKaEIsU0FkUDtBQUFBLGtCQXVCTXBCLEtBQUssQ0FBQ3FCLEdBQU4sQ0FBVyxVQUFBQyxJQUFJO0FBQUEsOEJBQUkscUVBQUMsNkNBQUQsb0JBQXdCQSxJQUF4QixHQUFXQSxJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQSxTQUFmO0FBdkJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBekREOztHQUFNeEIsYztVQUNhRywwRDs7O01BRGJILGM7QUEyRE5BLGNBQWMsQ0FBQ3lCLFlBQWYsR0FBOEI7QUFDNUJ4QixPQUFLLEVBQUU7QUFEcUIsQ0FBOUI7QUFJZUQsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDI5NjgwMDFjOGM0YjFiMjU1NjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcbmltcG9ydCB7IENhcmRUIH0gZnJvbSAnLi90eXBlcydcblxuaW50ZXJmYWNlIENhcmRDb2xsZWN0aW9uUHJvcHMge1xuICBjYXJkczogQ2FyZFRbXTtcbn1cblxuY29uc3QgTW90aW9uQm94ID0gbW90aW9uKEJveClcblxuY29uc3Qgc3dpcGVQb3dlciA9IChvZmZzZXQ6IG51bWJlciwgYWJzRGlzdGFuY2U6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIHJldHVybiAob2Zmc2V0IC8gYWJzRGlzdGFuY2UpICogMTAwO1xufVxuXG5jb25zdCBDYXJkQ29sbGVjdGlvbjogUmVhY3QuRkM8Q2FyZENvbGxlY3Rpb25Qcm9wcz4gPSAoeyBjYXJkcyB9KSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IFtjdXJJbmRleCwgc2V0Q3VySW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSBhc3luYyAoXywgeyBvZmZzZXQgfSkgPT4ge1xuICAgIGNvbnN0IHBvd2VyID0gc3dpcGVQb3dlcihvZmZzZXQueCwgMzAwKTtcbiAgICBpZiAocG93ZXIgPiA2MCAmJiBjdXJJbmRleCAtMSAhPT0gLTEpIHtcbiAgICAgIGF3YWl0IGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgeDogLTI3MCooY3VySW5kZXgtMSkgLSAoMjUqY3VySW5kZXgtMSkgKyAoY3VySW5kZXggPT09IGNhcmRzLmxlbmd0aCAtIDIgPyAyNSA6IDApLFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKC0yNzAqKGN1ckluZGV4KzEpIC0gKDI1KmN1ckluZGV4LTEpICsgKGN1ckluZGV4ID09PSBjYXJkcy5sZW5ndGggLSAyID8gMjUgOiAwKSlcbiAgICAgIHNldEN1ckluZGV4KHMgPT4gcyAtIDEpXG4gICAgfSBlbHNlIGlmIChwb3dlciA8IC02MCAmJiBjdXJJbmRleCArIDEgPCBjYXJkcy5sZW5ndGgpIHtcbiAgICAgIGF3YWl0IGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgeDogLTI3MCooY3VySW5kZXgrMSkgLSAoMjUqY3VySW5kZXgtMSkgKyAoY3VySW5kZXggPT09IGNhcmRzLmxlbmd0aCAtIDIgPyAyNSA6IDApLFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKC0yNzAqKGN1ckluZGV4KzEpIC0gKDI1KmN1ckluZGV4LTEpICsgKGN1ckluZGV4ID09PSBjYXJkcy5sZW5ndGggLSAyID8gMjUgOiAwKSlcbiAgICAgIHNldEN1ckluZGV4KHMgPT4gcyArIDEpXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBkPVwiZmxleFwiPlxuICAgICAgPEJveFxuICAgICAgICB3PVwiMzMwcHhcIlxuICAgICAgICBoPVwiMTcwcHhcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIHBvcz1cInJlbGF0aXZlXCJcbiAgICAgID5cbiAgICAgICAgPE1vdGlvbkJveFxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxNzBweFwiXG4gICAgICAgICAgZHJhZz1cInhcIlxuICAgICAgICAgIGRyYWdEaXJlY3Rpb25Mb2NrXG4gICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IGxlZnQ6IDAsIHJpZ2h0OiAwIH19XG4gICAgICAgICAgZHJhZ01vbWVudHVtPXtmYWxzZX1cbiAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICB4OiB7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogNjAwLCBkYW1waW5nOiAxMDB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgIGxheW91dFxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgXCI+ZGl2XCI6IHtcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxNXB4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiPmRpdjpsYXN0LWNoaWxkXCI6IHtcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyBjYXJkcy5tYXAoIGNhcmQgPT4gPENhcmQga2V5PXtjYXJkLmlkfSB7Li4uY2FyZH0gLz4gKX1cbiAgICAgICAgPC9Nb3Rpb25Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5DYXJkQ29sbGVjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhcmRzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkQ29sbGVjdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==