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
                _context.next = 18;
                break;
              }

              if (!(cards.length > 3 && curIndex <= cards.length - 1 && curIndex - 1 > 1)) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return controls.start({
                x: -270 * (curIndex - 1) - 25
              });

            case 6:
              _context.next = 15;
              break;

            case 8:
              if (!(cards.length == 2)) {
                _context.next = 13;
                break;
              }

              _context.next = 11;
              return controls.start({
                x: -255 * (curIndex - 1)
              });

            case 11:
              _context.next = 15;
              break;

            case 13:
              _context.next = 15;
              return controls.start({
                x: -270 * (curIndex - 1)
              });

            case 15:
              setCurIndex(function (s) {
                return s - 1;
              });
              _context.next = 33;
              break;

            case 18:
              if (!(power < -60 && curIndex + 1 < cards.length)) {
                _context.next = 33;
                break;
              }

              if (!(cards.length > 3 && curIndex >= 1 && curIndex + 1 <= cards.length - 1)) {
                _context.next = 25;
                break;
              }

              console.log(-270 * (curIndex + 1) - 25);
              _context.next = 23;
              return controls.start({
                x: -270 * (curIndex + 1) - 25
              });

            case 23:
              _context.next = 32;
              break;

            case 25:
              if (!(cards.length == 2)) {
                _context.next = 30;
                break;
              }

              _context.next = 28;
              return controls.start({
                x: -255 * (curIndex + 1)
              });

            case 28:
              _context.next = 32;
              break;

            case 30:
              _context.next = 32;
              return controls.start({
                x: -270 * (curIndex + 1)
              });

            case 32:
              setCurIndex(function (s) {
                return s + 1;
              });

            case 33:
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
            lineNumber: 92,
            columnNumber: 34
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9DYXJkQ29sbGVjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiTW90aW9uQm94IiwibW90aW9uIiwiQm94Iiwic3dpcGVQb3dlciIsIm9mZnNldCIsImFic0Rpc3RhbmNlIiwiQ2FyZENvbGxlY3Rpb24iLCJjYXJkcyIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwidXNlU3RhdGUiLCJjdXJJbmRleCIsInNldEN1ckluZGV4IiwiaGFuZGxlRHJhZ0VuZCIsIl8iLCJwb3dlciIsIngiLCJsZW5ndGgiLCJzdGFydCIsInMiLCJjb25zb2xlIiwibG9nIiwibGVmdCIsInJpZ2h0IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtYXJnaW5SaWdodCIsIm1hcCIsImNhcmQiLCJpZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFNBQVMsR0FBR0MsNERBQU0sQ0FBQ0Msb0RBQUQsQ0FBeEI7S0FBTUYsUzs7QUFFTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQWlCQyxXQUFqQixFQUFpRDtBQUNsRSxTQUFRRCxNQUFNLEdBQUdDLFdBQVYsR0FBeUIsR0FBaEM7QUFDRCxDQUZEOztBQUlBLElBQU1DLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdELE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDbkUsTUFBTUMsUUFBUSxHQUFHQyxrRUFBWSxFQUE3Qjs7QUFEbUUsa0JBRW5DQyxzREFBUSxDQUFTLENBQVQsQ0FGMkI7QUFBQSxNQUU1REMsUUFGNEQ7QUFBQSxNQUVsREMsV0FGa0Q7O0FBSW5FLE1BQU1DLGFBQWE7QUFBQSx1VkFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWVYsb0JBQVosU0FB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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXG5pbXBvcnQgeyBDYXJkVCB9IGZyb20gJy4vdHlwZXMnXG5cbmludGVyZmFjZSBDYXJkQ29sbGVjdGlvblByb3BzIHtcbiAgY2FyZHM6IENhcmRUW107XG59XG5cbmNvbnN0IE1vdGlvbkJveCA9IG1vdGlvbihCb3gpXG5cbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0OiBudW1iZXIsIGFic0Rpc3RhbmNlOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gKG9mZnNldCAvIGFic0Rpc3RhbmNlKSAqIDEwMDtcbn1cblxuY29uc3QgQ2FyZENvbGxlY3Rpb246IFJlYWN0LkZDPENhcmRDb2xsZWN0aW9uUHJvcHM+ID0gKHsgY2FyZHMgfSkgPT4ge1xuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuICBjb25zdCBbY3VySW5kZXgsIHNldEN1ckluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcblxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gYXN5bmMgKF8sIHsgb2Zmc2V0IH0pID0+IHtcbiAgICBjb25zdCBwb3dlciA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIDMwMCk7XG4gICAgaWYgKHBvd2VyID4gNjAgJiYgY3VySW5kZXggLTEgIT09IC0xKSB7XG4gICAgICBpZihjYXJkcy5sZW5ndGggPiAzICYmIGN1ckluZGV4IDw9IGNhcmRzLmxlbmd0aCAtIDEgJiYgY3VySW5kZXggLSAxID4gMSl7XG4gICAgICAgIGF3YWl0IGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgICB4OiAtMjcwKihjdXJJbmRleC0xKSAtIDI1LFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjYXJkcy5sZW5ndGggPT0gMil7XG4gICAgICAgIGF3YWl0IGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgICB4OiAtMjU1KihjdXJJbmRleC0xKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhd2FpdCBjb250cm9scy5zdGFydCh7XG4gICAgICAgICAgeDogLTI3MCooY3VySW5kZXgtMSksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBzZXRDdXJJbmRleChzID0+IHMgLSAxKVxuICAgIH0gZWxzZSBpZiAocG93ZXIgPCAtNjAgJiYgY3VySW5kZXggKyAxIDwgY2FyZHMubGVuZ3RoKSB7XG4gICAgICBpZihjYXJkcy5sZW5ndGggPiAzICYmIGN1ckluZGV4ID49IDEgJiYgY3VySW5kZXggKyAxIDw9IGNhcmRzLmxlbmd0aCAtIDEgKXtcbiAgICAgICAgY29uc29sZS5sb2coLTI3MCooY3VySW5kZXgrMSkgLSAyNSlcbiAgICAgICAgYXdhaXQgY29udHJvbHMuc3RhcnQoe1xuICAgICAgICAgIHg6IC0yNzAqKGN1ckluZGV4KzEpIC0gMjUsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNhcmRzLmxlbmd0aCA9PSAyKXtcbiAgICAgICAgYXdhaXQgY29udHJvbHMuc3RhcnQoe1xuICAgICAgICAgIHg6IC0yNTUqKGN1ckluZGV4KzEpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgYXdhaXQgY29udHJvbHMuc3RhcnQoe1xuICAgICAgICAgIHg6IC0yNzAqKGN1ckluZGV4KzEpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgc2V0Q3VySW5kZXgocyA9PiBzICsgMSlcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGQ9XCJmbGV4XCI+XG4gICAgICA8Qm94XG4gICAgICAgIHc9XCIzMzBweFwiXG4gICAgICAgIGg9XCIxNzBweFwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgcG9zPVwicmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICA8TW90aW9uQm94XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgIGhlaWdodD1cIjE3MHB4XCJcbiAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgZHJhZ0RpcmVjdGlvbkxvY2tcbiAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICBkcmFnTW9tZW50dW09e2ZhbHNlfVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIHg6IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA2MDAsIGRhbXBpbmc6IDEwMH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG4gICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBcIj5kaXZcIjoge1xuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzE1cHgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI+ZGl2Omxhc3QtY2hpbGRcIjoge1xuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzBweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7IGNhcmRzLm1hcCggY2FyZCA9PiA8Q2FyZCBrZXk9e2NhcmQuaWR9IHsuLi5jYXJkfSAvPiApfVxuICAgICAgICA8L01vdGlvbkJveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbkNhcmRDb2xsZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FyZHM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRDb2xsZWN0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9