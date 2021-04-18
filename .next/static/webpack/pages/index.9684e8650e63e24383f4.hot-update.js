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
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return controls.start({
                x: -270 * (curIndex - 1) - (25 * curIndex - 1)
              });

            case 5:
              setCurIndex(function (s) {
                return s - 1;
              });
              _context.next = 12;
              break;

            case 8:
              if (!(power < -60 && curIndex + 1 < cards.length)) {
                _context.next = 12;
                break;
              }

              _context.next = 11;
              return controls.start({
                x: -270 * (curIndex + 1) - (25 * curIndex - 1) + (curIndex === cards.length - 2 ? 25 : 0)
              });

            case 11:
              setCurIndex(function (s) {
                return s + 1;
              });

            case 12:
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
            lineNumber: 67,
            columnNumber: 34
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9DYXJkQ29sbGVjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiTW90aW9uQm94IiwibW90aW9uIiwiQm94Iiwic3dpcGVQb3dlciIsIm9mZnNldCIsImFic0Rpc3RhbmNlIiwiQ2FyZENvbGxlY3Rpb24iLCJjYXJkcyIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwidXNlU3RhdGUiLCJjdXJJbmRleCIsInNldEN1ckluZGV4IiwiaGFuZGxlRHJhZ0VuZCIsIl8iLCJwb3dlciIsIngiLCJzdGFydCIsInMiLCJsZW5ndGgiLCJsZWZ0IiwicmlnaHQiLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsIm1hcmdpblJpZ2h0IiwibWFwIiwiY2FyZCIsImlkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyw0REFBTSxDQUFDQyxvREFBRCxDQUF4QjtLQUFNRixTOztBQUVOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBaUJDLFdBQWpCLEVBQWlEO0FBQ2xFLFNBQVFELE1BQU0sR0FBR0MsV0FBVixHQUF5QixHQUFoQztBQUNELENBRkQ7O0FBSUEsSUFBTUMsY0FBNkMsR0FBRyxTQUFoREEsY0FBZ0QsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNuRSxNQUFNQyxRQUFRLEdBQUdDLGtFQUFZLEVBQTdCOztBQURtRSxrQkFFbkNDLHNEQUFRLENBQVMsQ0FBVCxDQUYyQjtBQUFBLE1BRTVEQyxRQUY0RDtBQUFBLE1BRWxEQyxXQUZrRDs7QUFJbkUsTUFBTUMsYUFBYTtBQUFBLHVWQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFZVixvQkFBWixTQUFZQSxNQUFaO0FBQ2RXLG1C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aW5kZXguOTY4NGU4NjUwZTYzZTI0MzgzZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcbmltcG9ydCB7IENhcmRUIH0gZnJvbSAnLi90eXBlcydcblxuaW50ZXJmYWNlIENhcmRDb2xsZWN0aW9uUHJvcHMge1xuICBjYXJkczogQ2FyZFRbXTtcbn1cblxuY29uc3QgTW90aW9uQm94ID0gbW90aW9uKEJveClcblxuY29uc3Qgc3dpcGVQb3dlciA9IChvZmZzZXQ6IG51bWJlciwgYWJzRGlzdGFuY2U6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIHJldHVybiAob2Zmc2V0IC8gYWJzRGlzdGFuY2UpICogMTAwO1xufVxuXG5jb25zdCBDYXJkQ29sbGVjdGlvbjogUmVhY3QuRkM8Q2FyZENvbGxlY3Rpb25Qcm9wcz4gPSAoeyBjYXJkcyB9KSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IFtjdXJJbmRleCwgc2V0Q3VySW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSBhc3luYyAoXywgeyBvZmZzZXQgfSkgPT4ge1xuICAgIGNvbnN0IHBvd2VyID0gc3dpcGVQb3dlcihvZmZzZXQueCwgMzAwKTtcbiAgICBpZiAocG93ZXIgPiA2MCAmJiBjdXJJbmRleCAtMSAhPT0gLTEpIHtcbiAgICAgIGF3YWl0IGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgeDogLTI3MCooY3VySW5kZXgtMSkgLSAoMjUqY3VySW5kZXgtMSksXG4gICAgICB9KVxuICAgICAgc2V0Q3VySW5kZXgocyA9PiBzIC0gMSlcbiAgICB9IGVsc2UgaWYgKHBvd2VyIDwgLTYwICYmIGN1ckluZGV4ICsgMSA8IGNhcmRzLmxlbmd0aCkge1xuICAgICAgYXdhaXQgY29udHJvbHMuc3RhcnQoe1xuICAgICAgICB4OiAtMjcwKihjdXJJbmRleCsxKSAtICgyNSpjdXJJbmRleC0xKSArIChjdXJJbmRleCA9PT0gY2FyZHMubGVuZ3RoIC0gMiA/IDI1IDogMCksXG4gICAgICB9KVxuICAgICAgc2V0Q3VySW5kZXgocyA9PiBzICsgMSlcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGQ9XCJmbGV4XCI+XG4gICAgICA8Qm94XG4gICAgICAgIHc9XCIzMzBweFwiXG4gICAgICAgIGg9XCIxNzBweFwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgcG9zPVwicmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICA8TW90aW9uQm94XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgIGhlaWdodD1cIjE3MHB4XCJcbiAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgZHJhZ0RpcmVjdGlvbkxvY2tcbiAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICBkcmFnTW9tZW50dW09e2ZhbHNlfVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIHg6IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA2MDAsIGRhbXBpbmc6IDEwMH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG4gICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBcIj5kaXZcIjoge1xuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzE1cHgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI+ZGl2Omxhc3QtY2hpbGRcIjoge1xuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzBweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7IGNhcmRzLm1hcCggY2FyZCA9PiA8Q2FyZCBrZXk9e2NhcmQuaWR9IHsuLi5jYXJkfSAvPiApfVxuICAgICAgICA8L01vdGlvbkJveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbkNhcmRDb2xsZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FyZHM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRDb2xsZWN0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9