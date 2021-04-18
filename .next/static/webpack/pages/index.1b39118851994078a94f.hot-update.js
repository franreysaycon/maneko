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
                _context.next = 13;
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
              _context.next = 10;
              break;

            case 8:
              _context.next = 10;
              return controls.start({
                x: -255 * (curIndex - 1)
              });

            case 10:
              setCurIndex(function (s) {
                return s - 1;
              });
              _context.next = 22;
              break;

            case 13:
              if (!(power < -60 && curIndex + 1 < cards.length)) {
                _context.next = 22;
                break;
              }

              if (!(cards.length > 3 && curIndex >= 1 && curIndex + 1 <= cards.length - 1)) {
                _context.next = 19;
                break;
              }

              _context.next = 17;
              return controls.start({
                x: -270 * (curIndex + 1) - 25
              });

            case 17:
              _context.next = 21;
              break;

            case 19:
              _context.next = 21;
              return controls.start({
                x: -255 * (curIndex + 1)
              });

            case 21:
              setCurIndex(function (s) {
                return s + 1;
              });

            case 22:
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
            lineNumber: 81,
            columnNumber: 34
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9DYXJkQ29sbGVjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiTW90aW9uQm94IiwibW90aW9uIiwiQm94Iiwic3dpcGVQb3dlciIsIm9mZnNldCIsImFic0Rpc3RhbmNlIiwiQ2FyZENvbGxlY3Rpb24iLCJjYXJkcyIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwidXNlU3RhdGUiLCJjdXJJbmRleCIsInNldEN1ckluZGV4IiwiaGFuZGxlRHJhZ0VuZCIsIl8iLCJwb3dlciIsIngiLCJsZW5ndGgiLCJzdGFydCIsInMiLCJsZWZ0IiwicmlnaHQiLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsIm1hcmdpblJpZ2h0IiwibWFwIiwiY2FyZCIsImlkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyw0REFBTSxDQUFDQyxvREFBRCxDQUF4QjtLQUFNRixTOztBQUVOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBaUJDLFdBQWpCLEVBQWlEO0FBQ2xFLFNBQVFELE1BQU0sR0FBR0MsV0FBVixHQUF5QixHQUFoQztBQUNELENBRkQ7O0FBSUEsSUFBTUMsY0FBNkMsR0FBRyxTQUFoREEsY0FBZ0QsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNuRSxNQUFNQyxRQUFRLEdBQUdDLGtFQUFZLEVBQTdCOztBQURtRSxrQkFFbkNDLHNEQUFRLENBQVMsQ0FBVCxDQUYyQjtBQUFBLE1BRTVEQyxRQUY0RDtBQUFBLE1BRWxEQyxXQUZrRDs7QUFJbkUsTUFBTUMsYUFBYTtBQUFBLHVWQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFZVixvQkFBWixTQUFZQSxNQUFaO0FBQ2RXLG1CQURjLEdBQ05aLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDWSxDQUFSLEVBQVcsR0FBWCxDQURKOztBQUFBLG9CQUVoQkQsS0FBSyxHQUFHLEVBQVIsSUFBY0osUUFBUSxHQUFFLENBQVYsS0FBZ0IsQ0FBQyxDQUZmO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQUdmSixLQUFLLENBQUNVLE1BQU4sR0FBZSxDQUFmLElBQW9CTixRQUFRLElBQUlKLEtBQUssQ0FBQ1UsTUFBTixHQUFlLENBQS9DLElBQW9ETixRQUFRLEdBQUcsQ0FBWCxHQUFlLENBSHBEO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBSVZILFFBQVEsQ0FBQ1UsS0FBVCxDQUFlO0FBQ25CRixpQkFBQyxFQUFFLENBQUMsR0FBRCxJQUFNTCxRQUFRLEdBQUMsQ0FBZixJQUFvQjtBQURKLGVBQWYsQ0FKVTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQVNWSCxRQUFRLENBQUNVLEtBQVQsQ0FBZTtBQUNuQkYsaUJBQUMsRUFBRSxDQUFDLEdBQUQsSUFBTUwsUUFBUSxHQUFDLENBQWY7QUFEZ0IsZUFBZixDQVRVOztBQUFBO0FBYWxCQyx5QkFBVyxDQUFDLFVBQUFPLENBQUM7QUFBQSx1QkFBSUEsQ0FBQyxHQUFHLENBQVI7QUFBQSxlQUFGLENBQVg7QUFia0I7QUFBQTs7QUFBQTtBQUFBLG9CQWNUSixLQUFLLEdBQUcsQ0FBQyxFQUFULElBQWVKLFFBQVEsR0FBRyxDQUFYLEdBQWVKLEtBQUssQ0FBQ1UsTUFkM0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBZWZWLEtBQUssQ0FBQ1UsTUFBTixHQUFlLENBQWYsSUFBb0JOLFFBQVEsSUFBSSxDQUFoQyxJQUFxQ0EsUUFBUSxHQUFHLENBQVgsSUFBZ0JKLEtBQUssQ0FBQ1UsTUFBTixHQUFlLENBZnJEO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBZ0JWVCxRQUFRLENBQUNVLEtBQVQsQ0FBZTtBQUNuQkYsaUJBQUMsRUFBRSxDQUFDLEdBQUQsSUFBTUwsUUFBUSxHQUFDLENBQWYsSUFBb0I7QUFESixlQUFmLENBaEJVOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBcUJWSCxRQUFRLENBQUNVLEtBQVQsQ0FBZTtBQUNuQkYsaUJBQUMsRUFBRSxDQUFDLEdBQUQsSUFBTUwsUUFBUSxHQUFDLENBQWY7QUFEZ0IsZUFBZixDQXJCVTs7QUFBQTtBQXlCbEJDLHlCQUFXLENBQUMsVUFBQU8sQ0FBQztBQUFBLHVCQUFJQSxDQUFDLEdBQUcsQ0FBUjtBQUFBLGVBQUYsQ0FBWDs7QUF6QmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJOLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBNkJBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQUssS0FBQyxFQUFDLE1BQVA7QUFBQSwyQkFDRSxxRUFBQyxvREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxjQUFRLEVBQUMsUUFIWDtBQUlFLFNBQUcsRUFBQyxVQUpOO0FBQUEsNkJBTUUscUVBQUMsU0FBRDtBQUNFLGVBQU8sRUFBQyxNQURWO0FBRUUsZ0JBQVEsRUFBQyxVQUZYO0FBR0UsY0FBTSxFQUFDLE9BSFQ7QUFJRSxZQUFJLEVBQUMsR0FKUDtBQUtFLHlCQUFpQixNQUxuQjtBQU1FLHVCQUFlLEVBQUU7QUFBRU8sY0FBSSxFQUFFLENBQVI7QUFBV0MsZUFBSyxFQUFFO0FBQWxCLFNBTm5CO0FBT0Usb0JBQVksRUFBRSxLQVBoQjtBQVFFLGVBQU8sRUFBRWIsUUFSWDtBQVNFLGtCQUFVLEVBQUU7QUFDVlEsV0FBQyxFQUFFO0FBQUVNLGdCQUFJLEVBQUUsUUFBUjtBQUFrQkMscUJBQVMsRUFBRSxHQUE3QjtBQUFrQ0MsbUJBQU8sRUFBRTtBQUEzQztBQURPLFNBVGQ7QUFZRSxpQkFBUyxFQUFFWCxhQVpiO0FBYUUsY0FBTSxNQWJSO0FBY0UsV0FBRyxFQUFFO0FBQ0gsa0JBQVE7QUFDTlksdUJBQVcsRUFBRTtBQURQLFdBREw7QUFJSCw2QkFBbUI7QUFDakJBLHVCQUFXLEVBQUU7QUFESTtBQUpoQixTQWRQO0FBQUEsa0JBdUJNbEIsS0FBSyxDQUFDbUIsR0FBTixDQUFXLFVBQUFDLElBQUk7QUFBQSw4QkFBSSxxRUFBQyw2Q0FBRCxvQkFBd0JBLElBQXhCLEdBQVdBLElBQUksQ0FBQ0MsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBLFNBQWY7QUF2Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0FyRUQ7O0dBQU10QixjO1VBQ2FHLDBEOzs7TUFEYkgsYztBQXVFTkEsY0FBYyxDQUFDdUIsWUFBZixHQUE4QjtBQUM1QnRCLE9BQUssRUFBRTtBQURxQixDQUE5QjtBQUllRCw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYjM5MTE4ODUxOTk0MDc4YTk0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xuaW1wb3J0IHsgQ2FyZFQgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbnRlcmZhY2UgQ2FyZENvbGxlY3Rpb25Qcm9wcyB7XG4gIGNhcmRzOiBDYXJkVFtdO1xufVxuXG5jb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb24oQm94KVxuXG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldDogbnVtYmVyLCBhYnNEaXN0YW5jZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIChvZmZzZXQgLyBhYnNEaXN0YW5jZSkgKiAxMDA7XG59XG5cbmNvbnN0IENhcmRDb2xsZWN0aW9uOiBSZWFjdC5GQzxDYXJkQ29sbGVjdGlvblByb3BzPiA9ICh7IGNhcmRzIH0pID0+IHtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgW2N1ckluZGV4LCBzZXRDdXJJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IGFzeW5jIChfLCB7IG9mZnNldCB9KSA9PiB7XG4gICAgY29uc3QgcG93ZXIgPSBzd2lwZVBvd2VyKG9mZnNldC54LCAzMDApO1xuICAgIGlmIChwb3dlciA+IDYwICYmIGN1ckluZGV4IC0xICE9PSAtMSkge1xuICAgICAgaWYoY2FyZHMubGVuZ3RoID4gMyAmJiBjdXJJbmRleCA8PSBjYXJkcy5sZW5ndGggLSAxICYmIGN1ckluZGV4IC0gMSA+IDEpe1xuICAgICAgICBhd2FpdCBjb250cm9scy5zdGFydCh7XG4gICAgICAgICAgeDogLTI3MCooY3VySW5kZXgtMSkgLSAyNSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhd2FpdCBjb250cm9scy5zdGFydCh7XG4gICAgICAgICAgeDogLTI1NSooY3VySW5kZXgtMSksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBzZXRDdXJJbmRleChzID0+IHMgLSAxKVxuICAgIH0gZWxzZSBpZiAocG93ZXIgPCAtNjAgJiYgY3VySW5kZXggKyAxIDwgY2FyZHMubGVuZ3RoKSB7XG4gICAgICBpZihjYXJkcy5sZW5ndGggPiAzICYmIGN1ckluZGV4ID49IDEgJiYgY3VySW5kZXggKyAxIDw9IGNhcmRzLmxlbmd0aCAtIDEgKXtcbiAgICAgICAgYXdhaXQgY29udHJvbHMuc3RhcnQoe1xuICAgICAgICAgIHg6IC0yNzAqKGN1ckluZGV4KzEpIC0gMjUsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhd2FpdCBjb250cm9scy5zdGFydCh7XG4gICAgICAgICAgeDogLTI1NSooY3VySW5kZXgrMSksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBzZXRDdXJJbmRleChzID0+IHMgKyAxKVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZD1cImZsZXhcIj5cbiAgICAgIDxCb3hcbiAgICAgICAgdz1cIjMzMHB4XCJcbiAgICAgICAgaD1cIjE3MHB4XCJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICBwb3M9XCJyZWxhdGl2ZVwiXG4gICAgICA+XG4gICAgICAgIDxNb3Rpb25Cb3hcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTcwcHhcIlxuICAgICAgICAgIGRyYWc9XCJ4XCJcbiAgICAgICAgICBkcmFnRGlyZWN0aW9uTG9ja1xuICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17eyBsZWZ0OiAwLCByaWdodDogMCB9fVxuICAgICAgICAgIGRyYWdNb21lbnR1bT17ZmFsc2V9XG4gICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgeDogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDYwMCwgZGFtcGluZzogMTAwfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH1cbiAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIFwiPmRpdlwiOiB7XG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTVweCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIj5kaXY6bGFzdC1jaGlsZFwiOiB7XG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgY2FyZHMubWFwKCBjYXJkID0+IDxDYXJkIGtleT17Y2FyZC5pZH0gey4uLmNhcmR9IC8+ICl9XG4gICAgICAgIDwvTW90aW9uQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuQ2FyZENvbGxlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBjYXJkczogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZENvbGxlY3Rpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=