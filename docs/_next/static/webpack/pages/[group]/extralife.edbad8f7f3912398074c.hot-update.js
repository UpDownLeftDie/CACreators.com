webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/atoms/stream-card.jsx":
/*!******************************************!*\
  !*** ./components/atoms/stream-card.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\stream-card.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var StreamCard = function StreamCard(_ref) {
  var twitchUsername = _ref.twitchUsername,
      timeStart = _ref.timeStart,
      timeEnd = _ref.timeEnd,
      streamIsLive = _ref.streamIsLive,
      streamer = _ref.streamer,
      avatarImageURL = _ref.avatarImageURL;
  var avatarUrl = avatarImageURL ? "https:".concat(avatarImageURL) : 'https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif';
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }; // eslint-disable-next-line prettier/prettier

  var startDate = Date.parse(timeStart).toLocaleDateString(undefined, options);
  var endDate = Date.parse(timeEnd);
  console.log(startDate);
  return __jsx("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.twitch.tv/".concat(twitchUsername || streamer),
    className: "jsx-4247340454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4247340454" + " " + "streamCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: avatarUrl,
    alt: "".concat(streamer, "'s profile"),
    className: "jsx-4247340454" + " " + "streamerAvatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-4247340454" + " " + "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-4247340454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, streamer), __jsx("div", {
    className: "jsx-4247340454" + " " + "times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-4247340454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Starts:"), __jsx("div", {
    className: "jsx-4247340454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Till:")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4247340454",
    __self: _this
  }, ".jsx-4247340454{width:100%;}.streamCard.jsx-4247340454{background:#fff;border-radius:20px;width:80%;padding:15px;display:grid;grid-template-columns:100px auto;grid-template-rows:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;grid-column-gap:20px;-webkit-column-gap:20px;column-gap:20px;}.isLive.jsx-4247340454{width:100%;}.streamerAvatar.jsx-4247340454{border-radius:50%;grid-column-start:1;place-self:center;object-fit:cover;width:100%;max-height:100%;}.right.jsx-4247340454{grid-column-start:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h3.jsx-4247340454{padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRFMsQUFFc0IsQUFFTyxBQWFMLEFBR08sQUFRRSxBQUtWLFVBQ0QsQ0FoQlgsQUFvQkYsS0FqQ3VCLEVBZ0JDLENBY3RCLENBTmUsZUF2QkgsR0FnQlEsT0FmTCxXQWdCSSxFQWZKLGFBQ29CLEVBZXRCLFdBQ0ssVUFLTSxNQUp4QixJQWhCMEIsd0JBQ0wsNENBb0JyQixpREFuQmdCLGNBQ08scUJBQ0wsd0NBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgU3RyZWFtQ2FyZCA9ICh7XHJcbiAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgdGltZVN0YXJ0LFxyXG4gIHRpbWVFbmQsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHN0cmVhbWVyLFxyXG4gIGF2YXRhckltYWdlVVJMLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgYXZhdGFyVXJsID0gYXZhdGFySW1hZ2VVUkxcclxuICAgID8gYGh0dHBzOiR7YXZhdGFySW1hZ2VVUkx9YFxyXG4gICAgOiAnaHR0cHM6Ly9hc3NldHMuZG9ub3Jkcml2ZS5jb20vY2xpZW50cy9leHRyYWxpZmUvaW1nL2F2YXRhci1jb25zdGl0dWVudC1kZWZhdWx0LmdpZic7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICB9O1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IChEYXRlLnBhcnNlKHRpbWVTdGFydCkpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIG9wdGlvbnNcclxuICApO1xyXG4gIGNvbnN0IGVuZERhdGUgPSBEYXRlLnBhcnNlKHRpbWVFbmQpO1xyXG4gIGNvbnNvbGUubG9nKHN0YXJ0RGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICBocmVmPXtgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWUgfHwgc3RyZWFtZXJ9YH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1DYXJkXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3RyZWFtZXJBdmF0YXJcIlxyXG4gICAgICAgICAgc3JjPXthdmF0YXJVcmx9XHJcbiAgICAgICAgICBhbHQ9e2Ake3N0cmVhbWVyfSdzIHByb2ZpbGVgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgPGgzPntzdHJlYW1lcn08L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lc1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIFN0YXJ0czpcclxuICAgICAgICAgICAgICB7Lyoge3N0YXJ0RGF0ZS50b0xvY2FsZUZvcm1hdCgnJUEsICVCICVlLCAlWScpfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgVGlsbDpcclxuICAgICAgICAgICAgICB7Lyoge2VuZERhdGV9ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAuc3RyZWFtQ2FyZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggYXV0bztcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzTGl2ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyQXZhdGFyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcblN0cmVhbUNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLnByb3BUeXBlcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG4gIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJlYW1DYXJkO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\stream-card.jsx */"));
};

_c = StreamCard;
StreamCard.defaultProps = {
  twitchUsername: null,
  streamIsLive: false
};
StreamCard.propTypes = {
  twitchUsername: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  timeStart: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  timeEnd: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  streamIsLive: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  streamer: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StreamCard);

var _c;

$RefreshReg$(_c, "StreamCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9zdHJlYW0tY2FyZC5qc3giXSwibmFtZXMiOlsiU3RyZWFtQ2FyZCIsInR3aXRjaFVzZXJuYW1lIiwidGltZVN0YXJ0IiwidGltZUVuZCIsInN0cmVhbUlzTGl2ZSIsInN0cmVhbWVyIiwiYXZhdGFySW1hZ2VVUkwiLCJhdmF0YXJVcmwiLCJvcHRpb25zIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJwYXJzZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsImVuZERhdGUiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FPYjtBQUFBLE1BTkpDLGNBTUksUUFOSkEsY0FNSTtBQUFBLE1BTEpDLFNBS0ksUUFMSkEsU0FLSTtBQUFBLE1BSkpDLE9BSUksUUFKSkEsT0FJSTtBQUFBLE1BSEpDLFlBR0ksUUFISkEsWUFHSTtBQUFBLE1BRkpDLFFBRUksUUFGSkEsUUFFSTtBQUFBLE1BREpDLGNBQ0ksUUFESkEsY0FDSTtBQUNKLE1BQU1DLFNBQVMsR0FBR0QsY0FBYyxtQkFDbkJBLGNBRG1CLElBRTVCLG9GQUZKO0FBR0EsTUFBTUUsT0FBTyxHQUFHO0FBQ2RDLFdBQU8sRUFBRSxNQURLO0FBRWRDLFFBQUksRUFBRSxTQUZRO0FBR2RDLFNBQUssRUFBRSxNQUhPO0FBSWRDLE9BQUcsRUFBRTtBQUpTLEdBQWhCLENBSkksQ0FVSjs7QUFDQSxNQUFNQyxTQUFTLEdBQUlDLElBQUksQ0FBQ0MsS0FBTCxDQUFXYixTQUFYLENBQUQsQ0FBd0JjLGtCQUF4QixDQUNoQkMsU0FEZ0IsRUFFaEJULE9BRmdCLENBQWxCO0FBSUEsTUFBTVUsT0FBTyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV1osT0FBWCxDQUFoQjtBQUNBZ0IsU0FBTyxDQUFDQyxHQUFSLENBQVlQLFNBQVo7QUFDQSxTQUNFO0FBQ0UsVUFBTSxFQUFDLFFBRFQ7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUdFLFFBQUksa0NBQTJCWixjQUFjLElBQUlJLFFBQTdDLENBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBQSx3Q0FBZSxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUVFLE9BQUcsRUFBRUUsU0FGUDtBQUdFLE9BQUcsWUFBS0YsUUFBTCxlQUhMO0FBQUEsd0NBQ1ksZ0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBQSx3Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsUUFBTCxDQURGLEVBRUU7QUFBQSx3Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLENBRkYsQ0FORixDQUxGO0FBQUE7QUFBQTtBQUFBLHcxS0FERjtBQW9FRCxDQTVGRDs7S0FBTUwsVTtBQThGTkEsVUFBVSxDQUFDcUIsWUFBWCxHQUEwQjtBQUN4QnBCLGdCQUFjLEVBQUUsSUFEUTtBQUV4QkcsY0FBWSxFQUFFO0FBRlUsQ0FBMUI7QUFLQUosVUFBVSxDQUFDc0IsU0FBWCxHQUF1QjtBQUNyQnJCLGdCQUFjLEVBQUVzQixpREFESztBQUVyQnJCLFdBQVMsRUFBRXFCLGlEQUFNLENBQUNDLFVBRkc7QUFHckJyQixTQUFPLEVBQUVvQixpREFBTSxDQUFDQyxVQUhLO0FBSXJCcEIsY0FBWSxFQUFFcUIsK0NBSk87QUFLckJwQixVQUFRLEVBQUVrQixpREFBTSxDQUFDQyxVQUxJO0FBTXJCbEIsZ0JBQWMsRUFBRWlCLGlEQUFNLENBQUNDO0FBTkYsQ0FBdkI7QUFTZXhCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLmVkYmFkOGY3ZjM5MTIzOTgwNzRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFN0cmVhbUNhcmQgPSAoe1xyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHRpbWVTdGFydCxcclxuICB0aW1lRW5kLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICBzdHJlYW1lcixcclxuICBhdmF0YXJJbWFnZVVSTCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGF2YXRhclVybCA9IGF2YXRhckltYWdlVVJMXHJcbiAgICA/IGBodHRwczoke2F2YXRhckltYWdlVVJMfWBcclxuICAgIDogJ2h0dHBzOi8vYXNzZXRzLmRvbm9yZHJpdmUuY29tL2NsaWVudHMvZXh0cmFsaWZlL2ltZy9hdmF0YXItY29uc3RpdHVlbnQtZGVmYXVsdC5naWYnO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB3ZWVrZGF5OiAnbG9uZycsXHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgfTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcclxuICBjb25zdCBzdGFydERhdGUgPSAoRGF0ZS5wYXJzZSh0aW1lU3RhcnQpKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICBvcHRpb25zXHJcbiAgKTtcclxuICBjb25zdCBlbmREYXRlID0gRGF0ZS5wYXJzZSh0aW1lRW5kKTtcclxuICBjb25zb2xlLmxvZyhzdGFydERhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lIHx8IHN0cmVhbWVyfWB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtQ2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0cmVhbWVyQXZhdGFyXCJcclxuICAgICAgICAgIHNyYz17YXZhdGFyVXJsfVxyXG4gICAgICAgICAgYWx0PXtgJHtzdHJlYW1lcn0ncyBwcm9maWxlYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXNcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICBTdGFydHM6XHJcbiAgICAgICAgICAgICAgey8qIHtzdGFydERhdGUudG9Mb2NhbGVGb3JtYXQoJyVBLCAlQiAlZSwgJVknKX0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIFRpbGw6XHJcbiAgICAgICAgICAgICAgey8qIHtlbmREYXRlfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLnN0cmVhbUNhcmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc0xpdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lckF2YXRhciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==