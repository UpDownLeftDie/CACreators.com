webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/atoms/progress-bar.jsx":
/*!*******************************************!*\
  !*** ./components/atoms/progress-bar.jsx ***!
  \*******************************************/
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
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\progress-bar.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      goal = _ref.goal,
      height = _ref.height,
      progressText = _ref.progressText,
      goalText = _ref.goalText,
      isMoney = _ref.isMoney,
      displayProgress = _ref.displayProgress,
      displayPercent = _ref.displayPercent,
      width = _ref.width;
  var percent = (progress / goal * 100).toFixed(1);
  var progressTextCombined = null;
  var goalTextCombined = null;

  if (progressText) {
    progressTextCombined = "".concat(progressText, " ").concat(isMoney ? '$' : '').concat(progress);
  }

  if (goalText) {
    goalTextCombined = "".concat(goalText, " ").concat(isMoney ? '$' : '').concat(goal);
  }

  var barProgressText = null;

  if (displayProgress) {
    var str = "percent%";
    if (!displayPercent) str = "".concat(isMoney ? '$' : '').concat(progress);
    barProgressText = __jsx("span", {
      className: "jsx-3601565380" + " " + "barProgressText",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, str, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3601565380",
      __self: _this
    }, ".barProgressText.jsx-3601565380{position:absolute;font-size:0.9rem;color:#fff;text-shadow:0 0 5px black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JXLEFBR2lDLGtCQUNELGlCQUNOLFdBQ2UsMEJBQzVCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBudW1iZXIsIHN0cmluZywgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoe1xyXG4gIHByb2dyZXNzLFxyXG4gIGdvYWwsXHJcbiAgaGVpZ2h0LFxyXG4gIHByb2dyZXNzVGV4dCxcclxuICBnb2FsVGV4dCxcclxuICBpc01vbmV5LFxyXG4gIGRpc3BsYXlQcm9ncmVzcyxcclxuICBkaXNwbGF5UGVyY2VudCxcclxuICB3aWR0aCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHBlcmNlbnQgPSAoKHByb2dyZXNzIC8gZ29hbCkgKiAxMDApLnRvRml4ZWQoMSk7XHJcbiAgbGV0IHByb2dyZXNzVGV4dENvbWJpbmVkID0gbnVsbDtcclxuICBsZXQgZ29hbFRleHRDb21iaW5lZCA9IG51bGw7XHJcblxyXG4gIGlmIChwcm9ncmVzc1RleHQpIHtcclxuICAgIHByb2dyZXNzVGV4dENvbWJpbmVkID0gYCR7cHJvZ3Jlc3NUZXh0fSAke2lzTW9uZXkgPyAnJCcgOiAnJ30ke3Byb2dyZXNzfWA7XHJcbiAgfVxyXG4gIGlmIChnb2FsVGV4dCkge1xyXG4gICAgZ29hbFRleHRDb21iaW5lZCA9IGAke2dvYWxUZXh0fSAke2lzTW9uZXkgPyAnJCcgOiAnJ30ke2dvYWx9YDtcclxuICB9XHJcbiAgbGV0IGJhclByb2dyZXNzVGV4dCA9IG51bGw7XHJcbiAgaWYgKGRpc3BsYXlQcm9ncmVzcykge1xyXG4gICAgbGV0IHN0ciA9IGBwZXJjZW50JWA7XHJcbiAgICBpZiAoIWRpc3BsYXlQZXJjZW50KSBzdHIgPSBgJHtpc01vbmV5ID8gJyQnIDogJyd9JHtwcm9ncmVzc31gO1xyXG4gICAgYmFyUHJvZ3Jlc3NUZXh0ID0gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJQcm9ncmVzc1RleHRcIj5cclxuICAgICAgICB7c3RyfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuYmFyUHJvZ3Jlc3NUZXh0IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzVGV4dFwiPntwcm9ncmVzc1RleHRDb21iaW5lZH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2FsVGV4dFwiPntnb2FsVGV4dENvbWJpbmVkfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzQmFyXCI+XHJcbiAgICAgICAge2JhclByb2dyZXNzVGV4dH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9JTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzc1RleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb2FsVGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NCYXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTRjNmQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3BlcmNlbnR9JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIC00NWRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDI1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNzUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDc1JVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7aGVpZ2h0IC8gMn1weCAke2hlaWdodCAvIDJ9cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYmFyYmVycG9sZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBiYXJiZXJwb2xlIHtcclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtoZWlnaHR9cHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHByb2dyZXNzOiAwLFxyXG4gIGhlaWdodDogNDAsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBudWxsLFxyXG4gIGdvYWxUZXh0OiBudWxsLFxyXG4gIGlzTW9uZXk6IGZhbHNlLFxyXG4gIHdpZHRoOiAxMDAsXHJcbiAgZGlzcGxheVByb2dyZXNzOiBmYWxzZSxcclxuICBkaXNwbGF5UGVyY2VudDogdHJ1ZSxcclxufTtcclxuXHJcblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcclxuICBwcm9ncmVzczogbnVtYmVyLFxyXG4gIGdvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGhlaWdodDogbnVtYmVyLFxyXG4gIHByb2dyZXNzVGV4dDogc3RyaW5nLFxyXG4gIGdvYWxUZXh0OiBzdHJpbmcsXHJcbiAgaXNNb25leTogYm9vbCxcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGRpc3BsYXlQcm9ncmVzczogYm9vbCxcclxuICBkaXNwbGF5UGVyY2VudDogYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\progress-bar.jsx */"));
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, progressTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "goalText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, goalTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressBar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, barProgressText, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "482666932",
    dynamic: [width, height, percent, height / 2, height / 2, height],
    __self: _this
  }, ".wrapper.__jsx-style-dynamic-selector{width:".concat(width, "%;max-width:800px;}.progressText.__jsx-style-dynamic-selector{float:left;font-size:1rem;margin-left:10px;}.goalText.__jsx-style-dynamic-selector{float:right;font-size:1rem;margin-right:10px;}.progressBar.__jsx-style-dynamic-selector{position:relative;background:#1a4c6d;overflow:hidden;height:").concat(height, "px;border-radius:300px;width:100%;display:grid;place-items:center;}.progress.__jsx-style-dynamic-selector{width:").concat(percent, "%;background:#26c2eb;height:100%;text-align:right;justify-self:start;background-image:linear-gradient( -45deg, rgba(255,255,255,0.17) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.17) 50%, rgba(255,255,255,0.17) 75%, transparent 75% );background-size:").concat(height / 2, "px ").concat(height / 2, "px;overflow:hidden;-webkit-animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;}@-webkit-keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}@keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RTLEFBR2lELEFBSXpCLEFBS0MsQUFLTSxBQVVrQixBQXFCbUIsV0F4Q3hDLENBS0EsTUFLSSxRQVRGLENBS0MsU0FWRixBQXdCRyxDQVRILE1BVGxCLEVBS0EsT0FWQSxDQWV3QyxBQTZCdEMsRUFwQlksWUFDSyxpQkFDRSxPQVZDLFlBbUJuQixRQWxCVSxXQUNFLGFBQ00sbUJBQ3JCLCtIQWdCZ0YsOEVBQzlELGdCQUN3QixrSkFDMUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xccHJvZ3Jlc3MtYmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlzTW9uZXksXHJcbiAgZGlzcGxheVByb2dyZXNzLFxyXG4gIGRpc3BsYXlQZXJjZW50LFxyXG4gIHdpZHRoLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgcGVyY2VudCA9ICgocHJvZ3Jlc3MgLyBnb2FsKSAqIDEwMCkudG9GaXhlZCgxKTtcclxuICBsZXQgcHJvZ3Jlc3NUZXh0Q29tYmluZWQgPSBudWxsO1xyXG4gIGxldCBnb2FsVGV4dENvbWJpbmVkID0gbnVsbDtcclxuXHJcbiAgaWYgKHByb2dyZXNzVGV4dCkge1xyXG4gICAgcHJvZ3Jlc3NUZXh0Q29tYmluZWQgPSBgJHtwcm9ncmVzc1RleHR9ICR7aXNNb25leSA/ICckJyA6ICcnfSR7cHJvZ3Jlc3N9YDtcclxuICB9XHJcbiAgaWYgKGdvYWxUZXh0KSB7XHJcbiAgICBnb2FsVGV4dENvbWJpbmVkID0gYCR7Z29hbFRleHR9ICR7aXNNb25leSA/ICckJyA6ICcnfSR7Z29hbH1gO1xyXG4gIH1cclxuICBsZXQgYmFyUHJvZ3Jlc3NUZXh0ID0gbnVsbDtcclxuICBpZiAoZGlzcGxheVByb2dyZXNzKSB7XHJcbiAgICBsZXQgc3RyID0gYHBlcmNlbnQlYDtcclxuICAgIGlmICghZGlzcGxheVBlcmNlbnQpIHN0ciA9IGAke2lzTW9uZXkgPyAnJCcgOiAnJ30ke3Byb2dyZXNzfWA7XHJcbiAgICBiYXJQcm9ncmVzc1RleHQgPSAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhclByb2dyZXNzVGV4dFwiPlxyXG4gICAgICAgIHtzdHJ9XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5iYXJQcm9ncmVzc1RleHQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NUZXh0XCI+e3Byb2dyZXNzVGV4dENvbWJpbmVkfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvYWxUZXh0XCI+e2dvYWxUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJcIj5cclxuICAgICAgICB7YmFyUHJvZ3Jlc3NUZXh0fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH0lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdvYWxUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzc0JhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhNGM2ZDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzIHtcclxuICAgICAgICAgICAgd2lkdGg6ICR7cGVyY2VudH0lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjZjMmViO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgLTQ1ZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDI1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA1MCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSA1MCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSA3NSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNzUlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogJHtoZWlnaHQgLyAyfXB4ICR7aGVpZ2h0IC8gMn1weDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBiYXJiZXJwb2xlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGJhcmJlcnBvbGUge1xyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAke2hlaWdodH1weCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcHJvZ3Jlc3M6IDAsXHJcbiAgaGVpZ2h0OiA0MCxcclxuICBwcm9ncmVzc1RleHQ6IG51bGwsXHJcbiAgZ29hbFRleHQ6IG51bGwsXHJcbiAgaXNNb25leTogZmFsc2UsXHJcbiAgd2lkdGg6IDEwMCxcclxuICBkaXNwbGF5UHJvZ3Jlc3M6IGZhbHNlLFxyXG4gIGRpc3BsYXlQZXJjZW50OiB0cnVlLFxyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xyXG4gIHByb2dyZXNzOiBudW1iZXIsXHJcbiAgZ29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBzdHJpbmcsXHJcbiAgZ29hbFRleHQ6IHN0cmluZyxcclxuICBpc01vbmV5OiBib29sLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgZGlzcGxheVByb2dyZXNzOiBib29sLFxyXG4gIGRpc3BsYXlQZXJjZW50OiBib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\progress-bar.jsx */")));
};

_c = ProgressBar;
ProgressBar.defaultProps = {
  progress: 0,
  height: 40,
  progressText: null,
  goalText: null,
  isMoney: false,
  width: 100,
  displayProgress: false,
  displayPercent: true
};
ProgressBar.propTypes = {
  progress: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  goal: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  progressText: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  goalText: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isMoney: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  displayProgress: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  displayPercent: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"]
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

var _c;

$RefreshReg$(_c, "ProgressBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXIuanN4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJnb2FsIiwiaGVpZ2h0IiwicHJvZ3Jlc3NUZXh0IiwiZ29hbFRleHQiLCJpc01vbmV5IiwiZGlzcGxheVByb2dyZXNzIiwiZGlzcGxheVBlcmNlbnQiLCJ3aWR0aCIsInBlcmNlbnQiLCJ0b0ZpeGVkIiwicHJvZ3Jlc3NUZXh0Q29tYmluZWQiLCJnb2FsVGV4dENvbWJpbmVkIiwiYmFyUHJvZ3Jlc3NUZXh0Iiwic3RyIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FVZDtBQUFBLE1BVEpDLFFBU0ksUUFUSkEsUUFTSTtBQUFBLE1BUkpDLElBUUksUUFSSkEsSUFRSTtBQUFBLE1BUEpDLE1BT0ksUUFQSkEsTUFPSTtBQUFBLE1BTkpDLFlBTUksUUFOSkEsWUFNSTtBQUFBLE1BTEpDLFFBS0ksUUFMSkEsUUFLSTtBQUFBLE1BSkpDLE9BSUksUUFKSkEsT0FJSTtBQUFBLE1BSEpDLGVBR0ksUUFISkEsZUFHSTtBQUFBLE1BRkpDLGNBRUksUUFGSkEsY0FFSTtBQUFBLE1BREpDLEtBQ0ksUUFESkEsS0FDSTtBQUNKLE1BQU1DLE9BQU8sR0FBRyxDQUFFVCxRQUFRLEdBQUdDLElBQVosR0FBb0IsR0FBckIsRUFBMEJTLE9BQTFCLENBQWtDLENBQWxDLENBQWhCO0FBQ0EsTUFBSUMsb0JBQW9CLEdBQUcsSUFBM0I7QUFDQSxNQUFJQyxnQkFBZ0IsR0FBRyxJQUF2Qjs7QUFFQSxNQUFJVCxZQUFKLEVBQWtCO0FBQ2hCUSx3QkFBb0IsYUFBTVIsWUFBTixjQUFzQkUsT0FBTyxHQUFHLEdBQUgsR0FBUyxF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dEJoQixVQUFRLEVBQUVpQixpREFEWTtBQUV0QmhCLE1BQUksRUFBRWdCLGlEQUFNLENBQUNDLFVBRlM7QUFHdEJoQixRQUFNLEVBQUVlLGlEQUhjO0FBSXRCZCxjQUFZLEVBQUVnQixpREFKUTtBQUt0QmYsVUFBUSxFQUFFZSxpREFMWTtBQU10QmQsU0FBTyxFQUFFZSwrQ0FOYTtBQU90QlosT0FBSyxFQUFFUyxpREFQZTtBQVF0QlgsaUJBQWUsRUFBRWMsK0NBUks7QUFTdEJiLGdCQUFjLEVBQUVhLCtDQUFJQTtBQVRFLENBQXhCO0FBWWVyQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZ3JvdXBdL2V4dHJhbGlmZS44ZDM1ODYxZjE0YmRmODRkY2IwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbnVtYmVyLCBzdHJpbmcsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFByb2dyZXNzQmFyID0gKHtcclxuICBwcm9ncmVzcyxcclxuICBnb2FsLFxyXG4gIGhlaWdodCxcclxuICBwcm9ncmVzc1RleHQsXHJcbiAgZ29hbFRleHQsXHJcbiAgaXNNb25leSxcclxuICBkaXNwbGF5UHJvZ3Jlc3MsXHJcbiAgZGlzcGxheVBlcmNlbnQsXHJcbiAgd2lkdGgsXHJcbn0pID0+IHtcclxuICBjb25zdCBwZXJjZW50ID0gKChwcm9ncmVzcyAvIGdvYWwpICogMTAwKS50b0ZpeGVkKDEpO1xyXG4gIGxldCBwcm9ncmVzc1RleHRDb21iaW5lZCA9IG51bGw7XHJcbiAgbGV0IGdvYWxUZXh0Q29tYmluZWQgPSBudWxsO1xyXG5cclxuICBpZiAocHJvZ3Jlc3NUZXh0KSB7XHJcbiAgICBwcm9ncmVzc1RleHRDb21iaW5lZCA9IGAke3Byb2dyZXNzVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtwcm9ncmVzc31gO1xyXG4gIH1cclxuICBpZiAoZ29hbFRleHQpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG4gIGxldCBiYXJQcm9ncmVzc1RleHQgPSBudWxsO1xyXG4gIGlmIChkaXNwbGF5UHJvZ3Jlc3MpIHtcclxuICAgIGxldCBzdHIgPSBgcGVyY2VudCVgO1xyXG4gICAgaWYgKCFkaXNwbGF5UGVyY2VudCkgc3RyID0gYCR7aXNNb25leSA/ICckJyA6ICcnfSR7cHJvZ3Jlc3N9YDtcclxuICAgIGJhclByb2dyZXNzVGV4dCA9IChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyUHJvZ3Jlc3NUZXh0XCI+XHJcbiAgICAgICAge3N0cn1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmJhclByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1RleHRcIj57cHJvZ3Jlc3NUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29hbFRleHRcIj57Z29hbFRleHRDb21iaW5lZH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc0JhclwiPlxyXG4gICAgICAgIHtiYXJQcm9ncmVzc1RleHR9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofSU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ29hbFRleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzQmFyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE0YzZkO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtwZXJjZW50fSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDc1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NSVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2hlaWdodCAvIDJ9cHggJHtoZWlnaHQgLyAyfXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGJhcmJlcnBvbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgYmFyYmVycG9sZSB7XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aGVpZ2h0fXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9ncmVzczogMCxcclxuICBoZWlnaHQ6IDQwLFxyXG4gIHByb2dyZXNzVGV4dDogbnVsbCxcclxuICBnb2FsVGV4dDogbnVsbCxcclxuICBpc01vbmV5OiBmYWxzZSxcclxuICB3aWR0aDogMTAwLFxyXG4gIGRpc3BsYXlQcm9ncmVzczogZmFsc2UsXHJcbiAgZGlzcGxheVBlcmNlbnQ6IHRydWUsXHJcbn07XHJcblxyXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZ3Jlc3M6IG51bWJlcixcclxuICBnb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBoZWlnaHQ6IG51bWJlcixcclxuICBwcm9ncmVzc1RleHQ6IHN0cmluZyxcclxuICBnb2FsVGV4dDogc3RyaW5nLFxyXG4gIGlzTW9uZXk6IGJvb2wsXHJcbiAgd2lkdGg6IG51bWJlcixcclxuICBkaXNwbGF5UHJvZ3Jlc3M6IGJvb2wsXHJcbiAgZGlzcGxheVBlcmNlbnQ6IGJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==