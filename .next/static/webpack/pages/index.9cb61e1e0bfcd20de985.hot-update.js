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

              console.log(-270 * (curIndex - 1) - 25 * curIndex + (curIndex === 1 ? 25 : 0));
              _context.next = 6;
              return controls.start({
                x: -270 * (curIndex - 1) - 25 * curIndex + (curIndex === 1 ? 25 : 0)
              });

            case 6:
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

              console.log(-270 * (curIndex + 1) - 25 * curIndex + (curIndex === cards.length - 2 ? 25 : 0));
              _context.next = 13;
              return controls.start({
                x: -270 * (curIndex + 1) - 25 * curIndex + (curIndex === cards.length - 2 ? 25 : 0)
              });

            case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9DYXJkQ29sbGVjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiTW90aW9uQm94IiwibW90aW9uIiwiQm94Iiwic3dpcGVQb3dlciIsIm9mZnNldCIsImFic0Rpc3RhbmNlIiwiQ2FyZENvbGxlY3Rpb24iLCJjYXJkcyIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwidXNlU3RhdGUiLCJjdXJJbmRleCIsInNldEN1ckluZGV4IiwiaGFuZGxlRHJhZ0VuZCIsIl8iLCJwb3dlciIsIngiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJzIiwibGVuZ3RoIiwibGVmdCIsInJpZ2h0IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtYXJnaW5SaWdodCIsIm1hcCIsImNhcmQiLCJpZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFNBQVMsR0FBR0MsNERBQU0sQ0FBQ0Msb0RBQUQsQ0FBeEI7S0FBTUYsUzs7QUFFTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQWlCQyxXQUFqQixFQUFpRDtBQUNsRSxTQUFRRCxNQUFNLEdBQUdDLFdBQVYsR0FBeUIsR0FBaEM7QUFDRCxDQUZEOztBQUlBLElBQU1DLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdELE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDbkUsTUFBTUMsUUFBUSxHQUFHQyxrRUFBWSxFQUE3Qjs7QUFEbUUsa0JBRW5DQyxzREFBUSxDQUFTLENBQVQsQ0FGMkI7QUFBQSxNQUU1REMsUUFGNEQ7QUFBQSxNQUVsREMsV0FGa0Q7O0FBSW5FLE1BQU1DLGFBQWE7QUFBQSx1VkFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWVYsb0JBQVosU0FBWUEsTUFBWjtBQUNkVyxtQkFEYyxHQUNOWixVQUFVLENBQUNDLE1BQU0sQ0FBQ1ksQ0FBUixFQUFXLEdBQVgsQ0FESjs7QUFBQSxvQkFFaEJELEtBQUssR0FBRyxFQUFSLElBQWNKLFFBQVEsR0FBRSxDQUFWLEtBQWdCLENBQUMsQ0FGZjtBQUFBO0FBQUE7QUFBQTs7QUFHbEJNLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDLEdBQUQsSUFBTVAsUUFBUSxHQUFDLENBQWYsSUFBcUIsS0FBR0EsUUFBeEIsSUFBcUNBLFFBQVEsS0FBSyxDQUFiLEdBQWlCLEVBQWpCLEdBQXNCLENBQTNELENBQVo7QUFIa0I7QUFBQSxxQkFJWkgsUUFBUSxDQUFDVyxLQUFULENBQWU7QUFDbkJILGlCQUFDLEVBQUUsQ0FBQyxHQUFELElBQU1MLFFBQVEsR0FBQyxDQUFmLElBQXFCLEtBQUdBLFFBQXhCLElBQXFDQSxRQUFRLEtBQUssQ0FBYixHQUFpQixFQUFqQixHQUFzQixDQUEzRDtBQURnQixlQUFmLENBSlk7O0FBQUE7QUFPbEJDLHlCQUFXLENBQUMsVUFBQVEsQ0FBQztBQUFBLHVCQUFJQSxDQUFDLEdBQUcsQ0FBUjtBQUFBLGVBQUYsQ0FBWDtBQVBrQjtBQUFBOztBQUFBO0FBQUEsb0JBUVRMLEtBQUssR0FBRyxDQUFDLEVBQVQsSUFBZUosUUFBUSxHQUFHLENBQVgsR0FBZUosS0FBSyxDQUFDYyxNQVIzQjtBQUFBO0FBQUE7QUFBQTs7QUFTbEJKLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDLEdBQUQsSUFBTVAsUUFBUSxHQUFDLENBQWYsSUFBcUIsS0FBR0EsUUFBeEIsSUFBcUNBLFFBQVEsS0FBS0osS0FBSyxDQUFDYyxNQUFOLEdBQWUsQ0FBNUIsR0FBZ0MsRUFBaEMsR0FBcUMsQ0FBMUUsQ0FBWjtBQVRrQjtBQUFBLHFCQVVaYixRQUFRLENBQUNXLEtBQVQsQ0FBZTtBQUNuQkgsaUJBQUMsRUFBRSxDQUFDLEdBQUQsSUFBTUwsUUFBUSxHQUFDLENBQWYsSUFBcUIsS0FBR0EsUUFBeEIsSUFBcUNBLFFBQVEsS0FBS0osS0FBSyxDQUFDYyxNQUFOLEdBQWUsQ0FBNUIsR0FBZ0MsRUFBaEMsR0FBcUMsQ0FBMUU7QUFEZ0IsZUFBZixDQVZZOztBQUFBO0FBYWxCVCx5QkFBVyxDQUFDLFVBQUFRLENBQUM7QUFBQSx1QkFBSUEsQ0FBQyxHQUFHLENBQVI7QUFBQSxlQUFGLENBQVg7O0FBYmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJQLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBaUJBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQUssS0FBQyxFQUFDLE1BQVA7QUFBQSwyQkFDRSxxRUFBQyxvREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsT0FBQyxFQUFDLE9BRko7QUFHRSxjQUFRLEVBQUMsUUFIWDtBQUlFLFNBQUcsRUFBQyxVQUpOO0FBQUEsNkJBTUUscUVBQUMsU0FBRDtBQUNFLGVBQU8sRUFBQyxNQURWO0FBRUUsZ0JBQVEsRUFBQyxVQUZYO0FBR0UsY0FBTSxFQUFDLE9BSFQ7QUFJRSxZQUFJLEVBQUMsR0FKUDtBQUtFLHlCQUFpQixNQUxuQjtBQU1FLHVCQUFlLEVBQUU7QUFBRVMsY0FBSSxFQUFFLENBQVI7QUFBV0MsZUFBSyxFQUFFO0FBQWxCLFNBTm5CO0FBT0Usb0JBQVksRUFBRSxLQVBoQjtBQVFFLGVBQU8sRUFBRWYsUUFSWDtBQVNFLGtCQUFVLEVBQUU7QUFDVlEsV0FBQyxFQUFFO0FBQUVRLGdCQUFJLEVBQUUsUUFBUjtBQUFrQkMscUJBQVMsRUFBRSxHQUE3QjtBQUFrQ0MsbUJBQU8sRUFBRTtBQUEzQztBQURPLFNBVGQ7QUFZRSxpQkFBUyxFQUFFYixhQVpiO0FBYUUsY0FBTSxNQWJSO0FBY0UsV0FBRyxFQUFFO0FBQ0gsa0JBQVE7QUFDTmMsdUJBQVcsRUFBRTtBQURQLFdBREw7QUFJSCw2QkFBbUI7QUFDakJBLHVCQUFXLEVBQUU7QUFESTtBQUpoQixTQWRQO0FBQUEsa0JBdUJNcEIsS0FBSyxDQUFDcUIsR0FBTixDQUFXLFVBQUFDLElBQUk7QUFBQSw4QkFBSSxxRUFBQyw2Q0FBRCxvQkFBd0JBLElBQXhCLEdBQVdBLElBQUksQ0FBQ0MsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBLFNBQWY7QUF2Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0F6REQ7O0dBQU14QixjO1VBQ2FHLDBEOzs7TUFEYkgsYztBQTJETkEsY0FBYyxDQUFDeUIsWUFBZixHQUE4QjtBQUM1QnhCLE9BQUssRUFBRTtBQURxQixDQUE5QjtBQUllRCw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Y2I2MWUxZTBiZmNkMjBkZTk4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xuaW1wb3J0IHsgQ2FyZFQgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbnRlcmZhY2UgQ2FyZENvbGxlY3Rpb25Qcm9wcyB7XG4gIGNhcmRzOiBDYXJkVFtdO1xufVxuXG5jb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb24oQm94KVxuXG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldDogbnVtYmVyLCBhYnNEaXN0YW5jZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIChvZmZzZXQgLyBhYnNEaXN0YW5jZSkgKiAxMDA7XG59XG5cbmNvbnN0IENhcmRDb2xsZWN0aW9uOiBSZWFjdC5GQzxDYXJkQ29sbGVjdGlvblByb3BzPiA9ICh7IGNhcmRzIH0pID0+IHtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgW2N1ckluZGV4LCBzZXRDdXJJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IGFzeW5jIChfLCB7IG9mZnNldCB9KSA9PiB7XG4gICAgY29uc3QgcG93ZXIgPSBzd2lwZVBvd2VyKG9mZnNldC54LCAzMDApO1xuICAgIGlmIChwb3dlciA+IDYwICYmIGN1ckluZGV4IC0xICE9PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coLTI3MCooY3VySW5kZXgtMSkgLSAoMjUqY3VySW5kZXgpICsgKGN1ckluZGV4ID09PSAxID8gMjUgOiAwKSlcbiAgICAgIGF3YWl0IGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgeDogLTI3MCooY3VySW5kZXgtMSkgLSAoMjUqY3VySW5kZXgpICsgKGN1ckluZGV4ID09PSAxID8gMjUgOiAwKSxcbiAgICAgIH0pXG4gICAgICBzZXRDdXJJbmRleChzID0+IHMgLSAxKVxuICAgIH0gZWxzZSBpZiAocG93ZXIgPCAtNjAgJiYgY3VySW5kZXggKyAxIDwgY2FyZHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygtMjcwKihjdXJJbmRleCsxKSAtICgyNSpjdXJJbmRleCkgKyAoY3VySW5kZXggPT09IGNhcmRzLmxlbmd0aCAtIDIgPyAyNSA6IDApKVxuICAgICAgYXdhaXQgY29udHJvbHMuc3RhcnQoe1xuICAgICAgICB4OiAtMjcwKihjdXJJbmRleCsxKSAtICgyNSpjdXJJbmRleCkgKyAoY3VySW5kZXggPT09IGNhcmRzLmxlbmd0aCAtIDIgPyAyNSA6IDApLFxuICAgICAgfSlcbiAgICAgIHNldEN1ckluZGV4KHMgPT4gcyArIDEpXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBkPVwiZmxleFwiPlxuICAgICAgPEJveFxuICAgICAgICB3PVwiMzMwcHhcIlxuICAgICAgICBoPVwiMTcwcHhcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIHBvcz1cInJlbGF0aXZlXCJcbiAgICAgID5cbiAgICAgICAgPE1vdGlvbkJveFxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxNzBweFwiXG4gICAgICAgICAgZHJhZz1cInhcIlxuICAgICAgICAgIGRyYWdEaXJlY3Rpb25Mb2NrXG4gICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IGxlZnQ6IDAsIHJpZ2h0OiAwIH19XG4gICAgICAgICAgZHJhZ01vbWVudHVtPXtmYWxzZX1cbiAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICB4OiB7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogNjAwLCBkYW1waW5nOiAxMDB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgIGxheW91dFxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgXCI+ZGl2XCI6IHtcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxNXB4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiPmRpdjpsYXN0LWNoaWxkXCI6IHtcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyBjYXJkcy5tYXAoIGNhcmQgPT4gPENhcmQga2V5PXtjYXJkLmlkfSB7Li4uY2FyZH0gLz4gKX1cbiAgICAgICAgPC9Nb3Rpb25Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5DYXJkQ29sbGVjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhcmRzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkQ29sbGVjdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==