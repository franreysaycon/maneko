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
                x: -300 * (curIndex - 1)
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
                x: -300 * (curIndex + 1)
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
      h: "200px",
      overflow: "hidden",
      pos: "relative",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MotionBox, {
        display: "flex",
        position: "relative",
        height: "200px",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9DYXJkQ29sbGVjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiTW90aW9uQm94IiwibW90aW9uIiwiQm94Iiwic3dpcGVQb3dlciIsIm9mZnNldCIsImFic0Rpc3RhbmNlIiwiQ2FyZENvbGxlY3Rpb24iLCJjYXJkcyIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwidXNlU3RhdGUiLCJjdXJJbmRleCIsInNldEN1ckluZGV4IiwiaGFuZGxlRHJhZ0VuZCIsIl8iLCJwb3dlciIsIngiLCJzdGFydCIsInMiLCJsZW5ndGgiLCJsZWZ0IiwicmlnaHQiLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsIm1hcmdpblJpZ2h0IiwibWFwIiwiY2FyZCIsImlkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyw0REFBTSxDQUFDQyxvREFBRCxDQUF4QjtLQUFNRixTOztBQUVOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBaUJDLFdBQWpCLEVBQWlEO0FBQ2xFLFNBQVFELE1BQU0sR0FBR0MsV0FBVixHQUF5QixHQUFoQztBQUNELENBRkQ7O0FBSUEsSUFBTUMsY0FBNkMsR0FBRyxTQUFoREEsY0FBZ0QsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNuRSxNQUFNQyxRQUFRLEdBQUdDLGtFQUFZLEVBQTdCOztBQURtRSxrQkFFbkNDLHNEQUFRLENBQVMsQ0FBVCxDQUYyQjtBQUFBLE1BRTVEQyxRQUY0RDtBQUFBLE1BRWxEQyxXQUZrRDs7QUFJbkUsTUFBTUMsYUFBYTtBQUFBLHVWQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFZVixvQkFBWixTQUFZQSxNQUFaO0FBQ2RXLG1CQURjLEdBQ05aLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDWSxDQUFSLEVBQVcsR0FBWCxDQURKOztBQUFBLG9CQUVoQkQsS0FBSyxHQUFHLEVBQVIsSUFBY0osUUFBUSxHQUFFLENBQVYsS0FBZ0IsQ0FBQyxDQUZmO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBR1pILFFBQVEsQ0FBQ1MsS0FBVCxDQUFlO0FBQ25CRCxpQkFBQyxFQUFFLENBQUMsR0FBRCxJQUFNTCxRQUFRLEdBQUMsQ0FBZjtBQURnQixlQUFmLENBSFk7O0FBQUE7QUFNbEJDLHlCQUFXLENBQUMsVUFBQU0sQ0FBQztBQUFBLHVCQUFJQSxDQUFDLEdBQUcsQ0FBUjtBQUFBLGVBQUYsQ0FBWDtBQU5rQjtBQUFBOztBQUFBO0FBQUEsb0JBT1RILEtBQUssR0FBRyxDQUFDLEVBQVQsSUFBZUosUUFBUSxHQUFHLENBQVgsR0FBZUosS0FBSyxDQUFDWSxNQVAzQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQVFaWCxRQUFRLENBQUNTLEtBQVQsQ0FBZTtBQUNuQkQsaUJBQUMsRUFBRSxDQUFDLEdBQUQsSUFBTUwsUUFBUSxHQUFDLENBQWY7QUFEZ0IsZUFBZixDQVJZOztBQUFBO0FBV2xCQyx5QkFBVyxDQUFDLFVBQUFNLENBQUM7QUFBQSx1QkFBSUEsQ0FBQyxHQUFHLENBQVI7QUFBQSxlQUFGLENBQVg7O0FBWGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJMLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBZUEsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBSyxLQUFDLEVBQUMsTUFBUDtBQUFBLDJCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsT0FBQyxFQUFDLE9BREo7QUFFRSxPQUFDLEVBQUMsT0FGSjtBQUdFLGNBQVEsRUFBQyxRQUhYO0FBSUUsU0FBRyxFQUFDLFVBSk47QUFBQSw2QkFNRSxxRUFBQyxTQUFEO0FBQ0UsZUFBTyxFQUFDLE1BRFY7QUFFRSxnQkFBUSxFQUFDLFVBRlg7QUFHRSxjQUFNLEVBQUMsT0FIVDtBQUlFLFlBQUksRUFBQyxHQUpQO0FBS0UseUJBQWlCLE1BTG5CO0FBTUUsdUJBQWUsRUFBRTtBQUFFTyxjQUFJLEVBQUUsQ0FBUjtBQUFXQyxlQUFLLEVBQUU7QUFBbEIsU0FObkI7QUFPRSxvQkFBWSxFQUFFLEtBUGhCO0FBUUUsZUFBTyxFQUFFYixRQVJYO0FBU0Usa0JBQVUsRUFBRTtBQUNWUSxXQUFDLEVBQUU7QUFBRU0sZ0JBQUksRUFBRSxRQUFSO0FBQWtCQyxxQkFBUyxFQUFFLEdBQTdCO0FBQWtDQyxtQkFBTyxFQUFFO0FBQTNDO0FBRE8sU0FUZDtBQVlFLGlCQUFTLEVBQUVYLGFBWmI7QUFhRSxjQUFNLE1BYlI7QUFjRSxXQUFHLEVBQUU7QUFDSCxrQkFBUTtBQUNOWSx1QkFBVyxFQUFFO0FBRFAsV0FETDtBQUlILDZCQUFtQjtBQUNqQkEsdUJBQVcsRUFBRTtBQURJO0FBSmhCLFNBZFA7QUFBQSxrQkF1Qk1sQixLQUFLLENBQUNtQixHQUFOLENBQVcsVUFBQUMsSUFBSTtBQUFBLDhCQUFJLHFFQUFDLDZDQUFELG9CQUF3QkEsSUFBeEIsR0FBV0EsSUFBSSxDQUFDQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FBZjtBQXZCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9DRCxDQXZERDs7R0FBTXRCLGM7VUFDYUcsMEQ7OztNQURiSCxjO0FBeUROQSxjQUFjLENBQUN1QixZQUFmLEdBQThCO0FBQzVCdEIsT0FBSyxFQUFFO0FBRHFCLENBQTlCO0FBSWVELDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwYjM1YmZkZWY0ZTJmZDg3MTBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXG5pbXBvcnQgeyBDYXJkVCB9IGZyb20gJy4vdHlwZXMnXG5cbmludGVyZmFjZSBDYXJkQ29sbGVjdGlvblByb3BzIHtcbiAgY2FyZHM6IENhcmRUW107XG59XG5cbmNvbnN0IE1vdGlvbkJveCA9IG1vdGlvbihCb3gpXG5cbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0OiBudW1iZXIsIGFic0Rpc3RhbmNlOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gKG9mZnNldCAvIGFic0Rpc3RhbmNlKSAqIDEwMDtcbn1cblxuY29uc3QgQ2FyZENvbGxlY3Rpb246IFJlYWN0LkZDPENhcmRDb2xsZWN0aW9uUHJvcHM+ID0gKHsgY2FyZHMgfSkgPT4ge1xuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuICBjb25zdCBbY3VySW5kZXgsIHNldEN1ckluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcblxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gYXN5bmMgKF8sIHsgb2Zmc2V0IH0pID0+IHtcbiAgICBjb25zdCBwb3dlciA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIDMwMCk7XG4gICAgaWYgKHBvd2VyID4gNjAgJiYgY3VySW5kZXggLTEgIT09IC0xKSB7XG4gICAgICBhd2FpdCBjb250cm9scy5zdGFydCh7XG4gICAgICAgIHg6IC0zMDAqKGN1ckluZGV4LTEpLFxuICAgICAgfSlcbiAgICAgIHNldEN1ckluZGV4KHMgPT4gcyAtIDEpXG4gICAgfSBlbHNlIGlmIChwb3dlciA8IC02MCAmJiBjdXJJbmRleCArIDEgPCBjYXJkcy5sZW5ndGgpIHtcbiAgICAgIGF3YWl0IGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgeDogLTMwMCooY3VySW5kZXgrMSksXG4gICAgICB9KVxuICAgICAgc2V0Q3VySW5kZXgocyA9PiBzICsgMSlcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGQ9XCJmbGV4XCI+XG4gICAgICA8Qm94XG4gICAgICAgIHc9XCIzMzBweFwiXG4gICAgICAgIGg9XCIyMDBweFwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgcG9zPVwicmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICA8TW90aW9uQm94XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgZHJhZ0RpcmVjdGlvbkxvY2tcbiAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgbGVmdDogMCwgcmlnaHQ6IDAgfX1cbiAgICAgICAgICBkcmFnTW9tZW50dW09e2ZhbHNlfVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIHg6IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA2MDAsIGRhbXBpbmc6IDEwMH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG4gICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBcIj5kaXZcIjoge1xuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzE1cHgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI+ZGl2Omxhc3QtY2hpbGRcIjoge1xuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzBweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7IGNhcmRzLm1hcCggY2FyZCA9PiA8Q2FyZCBrZXk9e2NhcmQuaWR9IHsuLi5jYXJkfSAvPiApfVxuICAgICAgICA8L01vdGlvbkJveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbkNhcmRDb2xsZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FyZHM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRDb2xsZWN0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9