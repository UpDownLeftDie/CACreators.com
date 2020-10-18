webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/atoms/stream-card.jsx":
/*!******************************************!*\
  !*** ./components/atoms/stream-card.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ "./components/atoms/card.jsx");
/* harmony import */ var _extralife_member_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extralife-member-buttons */ "./components/atoms/extralife-member-buttons.jsx");
/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress-bar */ "./components/atoms/progress-bar.jsx");


var _s = $RefreshSig$(),
    _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\stream-card.jsx",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function useWindowWidth() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      windowWidth = _useState[0],
      setWindowWidth = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(function () {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateWidth);
    updateWidth();
    return function () {
      return window.removeEventListener('resize', updateWidth);
    };
  }, []);
  return windowWidth;
}

_s(useWindowWidth, "Zj+xTgnj9/vJvHy3SKqWOQFQUoU=");

var StreamCard = function StreamCard(_ref) {
  _s2();

  var twitchUsername = _ref.twitchUsername,
      timeStart = _ref.timeStart,
      timeEnd = _ref.timeEnd,
      streamIsLive = _ref.streamIsLive,
      streamer = _ref.streamer,
      avatarImageURL = _ref.avatarImageURL,
      links = _ref.links;
  var windowWidth = useWindowWidth();
  var breakPoint = 600;
  var pastBreakPoint = windowWidth < breakPoint;
  var options = {
    hour: 'numeric',
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  };
  var startDate = null;
  var endDate = null;
  {
    var tempStart = new Date(timeStart);
    var tempEnd = new Date(timeEnd);
    startDate = tempStart.toLocaleDateString(undefined, options);
    endDate = tempEnd.toLocaleDateString(undefined, options);
  }
  var ribbon = {};

  if (streamIsLive && pastBreakPoint) {
    ribbon = _objectSpread(_objectSpread({}, ribbon), {}, {
      text: 'Live now!'
    });
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]) + " " + "cardWrapper  ".concat(streamIsLive ? 'isLive' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isGlowing: streamIsLive,
    ribbon: ribbon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]) + " " + "streamCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.twitch.tv/".concat(twitchUsername || streamer),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(streamer, "'s profile"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]) + " " + "streamerAvatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]) + " " + "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, streamer), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]) + " " + "times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, "Starts: "), __jsx("u", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, startDate)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "\xA0Till: "), __jsx("u", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1004318673", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, endDate))), __jsx(_progress_bar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    progress: 123,
    goal: 12421412,
    progressText: "Raised",
    goalText: "Goal",
    isMoney: true,
    displayProgress: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }))), __jsx(_extralife_member_buttons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    streamIsLive: streamIsLive,
    links: {
      donate: links.donate
    },
    columnLayout: !pastBreakPoint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1004318673",
    dynamic: [breakPoint],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{color:black;-webkit-text-decoration:none;text-decoration:none;}.cardWrapper.__jsx-style-dynamic-selector{display:grid;width:80%;min-width:280px;}.streamCard.__jsx-style-dynamic-selector{border-radius:20px;box-sizing:border-box;display:grid;grid-template-columns:auto 100px;grid-auto-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;grid-column-gap:20px;-webkit-column-gap:20px;column-gap:20px;}.isLive.__jsx-style-dynamic-selector{width:100%;}a.__jsx-style-dynamic-selector{display:grid;grid-template-columns:100px auto;grid-auto-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.streamerAvatar.__jsx-style-dynamic-selector{border-radius:50%;border:#000 solid 3px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:start;object-fit:cover;width:100px;max-height:100%;}.isLive.__jsx-style-dynamic-selector .streamerAvatar.__jsx-style-dynamic-selector{border:red solid 3px;}.center.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;place-items:center;}h3.__jsx-style-dynamic-selector{padding:0;margin:0;}@media (max-width:".concat(breakPoint, "px){a.__jsx-style-dynamic-selector,.streamCard.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;place-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR1MsQUFHeUIsQUFJQyxBQUtNLEFBV1IsQUFHRSxBQU1LLEFBU0csQUFHUixBQU9ILEFBS0ssVUFKTixDQTVCWCxDQXBCdUIsQ0FJWCxBQW1CdUIsS0FNWCxDQXBCQSxBQXdDeEIsRUFYQSxFQWpDa0IsZ0JBQ2xCLENBd0JvQixDQXBCTCxLQWNTLFFBYlcsUUFWbkMsTUF3QnFCLE1BZ0JHLEFBWUUsYUF6Q0Ysc0JBQ0gsRUFrQkEsbUJBQ0YsaUJBQ0wsS0FTTyxBQVlFLE9BcEJMLEVBUmxCLFVBaUJBLEFBWUEsSUFwQkEsMkJBckJnQixjQUNPLHFCQUNMLHdDQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFxzdHJlYW0tY2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc3RyaW5nLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQgRXh0cmFMaWZlTWVtYmVyQnV0dG9ucyBmcm9tICcuL2V4dHJhbGlmZS1tZW1iZXItYnV0dG9ucyc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL3Byb2dyZXNzLWJhcic7XHJcblxyXG5mdW5jdGlvbiB1c2VXaW5kb3dXaWR0aCgpIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVXaWR0aCgpIHtcclxuICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVdpZHRoKTtcclxuICAgIHVwZGF0ZVdpZHRoKCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVdpZHRoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIHdpbmRvd1dpZHRoO1xyXG59XHJcblxyXG5jb25zdCBTdHJlYW1DYXJkID0gKHtcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICB0aW1lU3RhcnQsXHJcbiAgdGltZUVuZCxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgc3RyZWFtZXIsXHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgbGlua3MsXHJcbn0pID0+IHtcclxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XHJcbiAgY29uc3QgYnJlYWtQb2ludCA9IDYwMDtcclxuICBjb25zdCBwYXN0QnJlYWtQb2ludCA9IHdpbmRvd1dpZHRoIDwgYnJlYWtQb2ludDtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgd2Vla2RheTogJ3Nob3J0JyxcclxuICAgIG1vbnRoOiAnc2hvcnQnLFxyXG4gICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgfTtcclxuICBsZXQgc3RhcnREYXRlID0gbnVsbDtcclxuICBsZXQgZW5kRGF0ZSA9IG51bGw7XHJcbiAge1xyXG4gICAgY29uc3QgdGVtcFN0YXJ0ID0gbmV3IERhdGUodGltZVN0YXJ0KTtcclxuICAgIGNvbnN0IHRlbXBFbmQgPSBuZXcgRGF0ZSh0aW1lRW5kKTtcclxuICAgIHN0YXJ0RGF0ZSA9IHRlbXBTdGFydC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcclxuICAgIGVuZERhdGUgPSB0ZW1wRW5kLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gIH1cclxuICBsZXQgcmliYm9uID0ge307XHJcbiAgaWYgKHN0cmVhbUlzTGl2ZSAmJiBwYXN0QnJlYWtQb2ludCkge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdMaXZlIG5vdyEnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZFdyYXBwZXIgICR7c3RyZWFtSXNMaXZlID8gJ2lzTGl2ZScgOiAnJ31gfT5cclxuICAgICAgPENhcmQgaXNHbG93aW5nPXtzdHJlYW1Jc0xpdmV9IHJpYmJvbj17cmliYm9ufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmVhbUNhcmRcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWUgfHwgc3RyZWFtZXJ9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0cmVhbWVyQXZhdGFyXCJcclxuICAgICAgICAgICAgICBzcmM9e2F2YXRhckltYWdlVVJMfVxyXG4gICAgICAgICAgICAgIGFsdD17YCR7c3RyZWFtZXJ9J3MgcHJvZmlsZWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgzPntzdHJlYW1lcn08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxiPlN0YXJ0czogPC9iPlxyXG4gICAgICAgICAgICAgICAgICA8dT57c3RhcnREYXRlfTwvdT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGI+Jm5ic3A7VGlsbDogPC9iPlxyXG4gICAgICAgICAgICAgICAgICA8dT57ZW5kRGF0ZX08L3U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzPXsxMjN9XHJcbiAgICAgICAgICAgICAgICBnb2FsPXsxMjQyMTQxMn1cclxuICAgICAgICAgICAgICAgIHByb2dyZXNzVGV4dD1cIlJhaXNlZFwiXHJcbiAgICAgICAgICAgICAgICBnb2FsVGV4dD1cIkdvYWxcIlxyXG4gICAgICAgICAgICAgICAgaXNNb25leVxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2dyZXNzXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8RXh0cmFMaWZlTWVtYmVyQnV0dG9uc1xyXG4gICAgICAgICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgICAgICAgbGlua3M9e3sgZG9uYXRlOiBsaW5rcy5kb25hdGUgfX1cclxuICAgICAgICAgICAgY29sdW1uTGF5b3V0PXshcGFzdEJyZWFrUG9pbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXJkV3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtQ2FyZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxMDBweDtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc0xpdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJBdmF0YXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogIzAwMCBzb2xpZCAzcHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc0xpdmUgLnN0cmVhbWVyQXZhdGFyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGltZXMge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHticmVha1BvaW50fXB4KSB7XHJcbiAgICAgICAgICAgIGEsIC5zdHJlYW1DYXJkIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN0cmVhbUNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgYXZhdGFySW1hZ2VVUkw6XHJcbiAgICAnaHR0cHM6Ly9hc3NldHMuZG9ub3Jkcml2ZS5jb20vY2xpZW50cy9leHRyYWxpZmUvaW1nL2F2YXRhci1jb25zdGl0dWVudC1kZWZhdWx0LmdpZicsXHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLnByb3BUeXBlcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG4gIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgLy8gc3RyZWFtOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\stream-card.jsx */")));
};

_s2(StreamCard, "SMxGJ/jjFm9yFKpSmRkHC6SLq4s=", false, function () {
  return [useWindowWidth];
});

_c = StreamCard;
StreamCard.defaultProps = {
  twitchUsername: null,
  streamIsLive: false,
  avatarImageURL: 'https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif'
};
StreamCard.propTypes = {
  twitchUsername: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  timeStart: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  timeEnd: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  streamIsLive: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  streamer: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  links: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
    donate: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired // stream: string.isRequired,

  }).isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9zdHJlYW0tY2FyZC5qc3giXSwibmFtZXMiOlsidXNlV2luZG93V2lkdGgiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1cGRhdGVXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlN0cmVhbUNhcmQiLCJ0d2l0Y2hVc2VybmFtZSIsInRpbWVTdGFydCIsInRpbWVFbmQiLCJzdHJlYW1Jc0xpdmUiLCJzdHJlYW1lciIsImF2YXRhckltYWdlVVJMIiwibGlua3MiLCJicmVha1BvaW50IiwicGFzdEJyZWFrUG9pbnQiLCJvcHRpb25zIiwiaG91ciIsIndlZWtkYXkiLCJtb250aCIsImRheSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ0ZW1wU3RhcnQiLCJEYXRlIiwidGVtcEVuZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsInJpYmJvbiIsInRleHQiLCJkb25hdGUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLENBQUQsQ0FEdEI7QUFBQSxNQUNqQkMsV0FEaUI7QUFBQSxNQUNKQyxjQURJOztBQUV4QkMsK0RBQWUsQ0FBQyxZQUFNO0FBQ3BCLGFBQVNDLFdBQVQsR0FBdUI7QUFDckJGLG9CQUFjLENBQUNHLE1BQU0sQ0FBQ0MsVUFBUixDQUFkO0FBQ0Q7O0FBQ0RELFVBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILFdBQWxDO0FB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RSxnQkFBYyxFQUNaO0FBSnNCLENBQTFCO0FBT0FOLFVBQVUsQ0FBQzBCLFNBQVgsR0FBdUI7QUFDckJ6QixnQkFBYyxFQUFFMEIsaURBREs7QUFFckJ6QixXQUFTLEVBQUV5QixpREFBTSxDQUFDQyxVQUZHO0FBR3JCekIsU0FBTyxFQUFFd0IsaURBQU0sQ0FBQ0MsVUFISztBQUlyQnhCLGNBQVksRUFBRXlCLCtDQUpPO0FBS3JCeEIsVUFBUSxFQUFFc0IsaURBQU0sQ0FBQ0MsVUFMSTtBQU1yQnRCLGdCQUFjLEVBQUVxQixpREFOSztBQU9yQnBCLE9BQUssRUFBRXVCLHdEQUFLLENBQUM7QUFDWE4sVUFBTSxFQUFFRyxpREFBTSxDQUFDQyxVQURKLENBRVg7O0FBRlcsR0FBRCxDQUFMLENBR0pBO0FBVmtCLENBQXZCO0FBYWU1Qix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZ3JvdXBdL2V4dHJhbGlmZS43MDE3Zjk2YmY2MTFkYTRjZmNkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHN0cmluZywgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IEV4dHJhTGlmZU1lbWJlckJ1dHRvbnMgZnJvbSAnLi9leHRyYWxpZmUtbWVtYmVyLWJ1dHRvbnMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5cclxuZnVuY3Rpb24gdXNlV2luZG93V2lkdGgoKSB7XHJcbiAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlV2lkdGgoKSB7XHJcbiAgICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVXaWR0aCk7XHJcbiAgICB1cGRhdGVXaWR0aCgpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVXaWR0aCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiB3aW5kb3dXaWR0aDtcclxufVxyXG5cclxuY29uc3QgU3RyZWFtQ2FyZCA9ICh7XHJcbiAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgdGltZVN0YXJ0LFxyXG4gIHRpbWVFbmQsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHN0cmVhbWVyLFxyXG4gIGF2YXRhckltYWdlVVJMLFxyXG4gIGxpbmtzLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgd2luZG93V2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xyXG4gIGNvbnN0IGJyZWFrUG9pbnQgPSA2MDA7XHJcbiAgY29uc3QgcGFzdEJyZWFrUG9pbnQgPSB3aW5kb3dXaWR0aCA8IGJyZWFrUG9pbnQ7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgIHdlZWtkYXk6ICdzaG9ydCcsXHJcbiAgICBtb250aDogJ3Nob3J0JyxcclxuICAgIGRheTogJ251bWVyaWMnLFxyXG4gIH07XHJcbiAgbGV0IHN0YXJ0RGF0ZSA9IG51bGw7XHJcbiAgbGV0IGVuZERhdGUgPSBudWxsO1xyXG4gIHtcclxuICAgIGNvbnN0IHRlbXBTdGFydCA9IG5ldyBEYXRlKHRpbWVTdGFydCk7XHJcbiAgICBjb25zdCB0ZW1wRW5kID0gbmV3IERhdGUodGltZUVuZCk7XHJcbiAgICBzdGFydERhdGUgPSB0ZW1wU3RhcnQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XHJcbiAgICBlbmREYXRlID0gdGVtcEVuZC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcclxuICB9XHJcbiAgbGV0IHJpYmJvbiA9IHt9O1xyXG4gIGlmIChzdHJlYW1Jc0xpdmUgJiYgcGFzdEJyZWFrUG9pbnQpIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnTGl2ZSBub3chJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmRXcmFwcGVyICAke3N0cmVhbUlzTGl2ZSA/ICdpc0xpdmUnIDogJyd9YH0+XHJcbiAgICAgIDxDYXJkIGlzR2xvd2luZz17c3RyZWFtSXNMaXZlfSByaWJib249e3JpYmJvbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1DYXJkXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lIHx8IHN0cmVhbWVyfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdHJlYW1lckF2YXRhclwiXHJcbiAgICAgICAgICAgICAgc3JjPXthdmF0YXJJbWFnZVVSTH1cclxuICAgICAgICAgICAgICBhbHQ9e2Ake3N0cmVhbWVyfSdzIHByb2ZpbGVgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Yj5TdGFydHM6IDwvYj5cclxuICAgICAgICAgICAgICAgICAgPHU+e3N0YXJ0RGF0ZX08L3U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxiPiZuYnNwO1RpbGw6IDwvYj5cclxuICAgICAgICAgICAgICAgICAgPHU+e2VuZERhdGV9PC91PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcz17MTIzfVxyXG4gICAgICAgICAgICAgICAgZ29hbD17MTI0MjE0MTJ9XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgICAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICAgICAgICAgIGlzTW9uZXlcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9ncmVzc1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPEV4dHJhTGlmZU1lbWJlckJ1dHRvbnNcclxuICAgICAgICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgICAgICAgIGxpbmtzPXt7IGRvbmF0ZTogbGlua3MuZG9uYXRlIH19XHJcbiAgICAgICAgICAgIGNvbHVtbkxheW91dD17IXBhc3RCcmVha1BvaW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZFdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbUNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMTAwcHg7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNMaXZlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyQXZhdGFyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6ICMwMDAgc29saWQgM3B4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNMaXZlIC5zdHJlYW1lckF2YXRhciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogcmVkIHNvbGlkIDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWVzIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7YnJlYWtQb2ludH1weCkge1xyXG4gICAgICAgICAgICBhLCAuc3RyZWFtQ2FyZCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIGF2YXRhckltYWdlVVJMOlxyXG4gICAgJ2h0dHBzOi8vYXNzZXRzLmRvbm9yZHJpdmUuY29tL2NsaWVudHMvZXh0cmFsaWZlL2ltZy9hdmF0YXItY29uc3RpdHVlbnQtZGVmYXVsdC5naWYnLFxyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZyxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIC8vIHN0cmVhbTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=