webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\jared\\ca-creators\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var groups = __webpack_require__(/*! ../groups.json */ "./groups.json");

var siteTitle = "CA Creators";
var description = "We're the meetup groups for Twitch, Mixer, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!";
var url = "https://cacreators.com";

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      upcomingTwitchEvents = _useState[0],
      setTwitchEvents = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      upcomingMeetupEvents = _useState2[0],
      setMeetupEvents = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getUpcomingTwitchEvents().then(function (twithcEvents) {
      setTwitchEvents(twithcEvents);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getUpcomingMeetupEvents().then(function (meetupEvents) {
      setMeetupEvents(meetupEvents);
    });
  }, []);

  var findNextEvent = function findNextEvent(city, upcomingEvents) {
    return upcomingEvents.find(function (event) {
      if (event.chapter.city === city) return true;
      return false;
    });
  };

  var renderCards = function renderCards() {
    var upcomingEvents = upcomingTwitchEvents.concat(upcomingMeetupEvents);
    var nextEvents = groups.map(function (group) {
      return findNextEvent(group.city, upcomingEvents);
    });
    console.log(nextEvents); // return (
    //   <Fragment>
    //     <Card
    //       groupName={"Twitch La"}
    //       city={"Los Angeles"}
    //       href={"https://meetups.twitch.tv/los-angeles/"}
    //       upcomingEvents={upcomingTwitchEvents}
    //     />
    //     <Card
    //       groupName={"OC Streamers"}
    //       city={"Orange"}
    //       href={"https://www.meetup.com/ocstreamers"}
    //       upcomingEvents={upcomingMeetupEvents}
    //     />
    //     <Card
    //       groupName={"Twitch SD"}
    //       city={"San Diego"}
    //       href={"https://meetups.twitch.tv/san-diego/"}
    //       upcomingEvents={upcomingTwitchEvents}
    //     />
    //   </Fragment>
    // );
  };

  return __jsx("div", {
    style: {
      minHeight: "100%",
      position: "absolute",
      width: "100%"
    },
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, siteTitle, ".com"), __jsx("meta", {
    name: "Description",
    content: description.replace("<br/>", " "),
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: siteTitle,
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(url, "/static/twitchsocal.gif"),
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:width",
    content: "800",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:height",
    content: "800",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description.replace("<br/>", " "),
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3866817834" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3866817834" + " " + "title-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3866817834" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, siteTitle)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "jsx-3866817834" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3866817834" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, renderCards())), __jsx("div", {
    className: "jsx-3866817834" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "This site is not affiliated or endorsed by Twitch, Mixer, or Meetup.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3866817834",
    __self: this
  }, "html,body{height:100%;margin:0;padding:0;}body{background-color:#9146ff;background-image:url(\"/static/funky-lines.webp\");background-size:600px;font-family:\"Kanit\",sans-serif,Avenir Next,Avenir,Helvetica, sans-serif;}.hero.jsx-3866817834{width:100%;color:#fff;}.title.jsx-3866817834{margin:0;width:100%;margin-top:50px;line-height:1.15;font-size:48px;font-family:\"Knewave\",sans-serif;-webkit-animation:colorwipe-jsx-3866817834 6s infinite;animation:colorwipe-jsx-3866817834 6s infinite;background:rgb(255,255,255);background:linear-gradient( 15deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(131,58,180,1) 25%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 75%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100% );background-size:900%;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.title-wrapper.jsx-3866817834{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;}.title.jsx-3866817834,.description.jsx-3866817834{text-align:center;}.description.jsx-3866817834{font-size:22px;font-weight:300;font-family:\"Kanit\",sans-serif;}.row.jsx-3866817834{max-width:880px;margin:40px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.footer.jsx-3866817834{color:#fff;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}@media (max-width:840px){.row.jsx-3866817834{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@-webkit-keyframes colorwipe-jsx-3866817834{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}@keyframes colorwipe-jsx-3866817834{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXGNhLWNyZWF0b3JzXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhrQixBQUd1QixBQUthLEFBT2QsQUFJRixBQXdCd0MsQUFLL0IsQUFHSCxBQUtDLEFBT0wsQUFXYSxBQU1DLEFBR0EsQUFHRSxTQWxFaEIsRUFKQSxBQWdETyxDQTVEVCxHQWdETyxDQUtDLEVBUm5CLEVBNUJrQixDQWhCTixDQVlaLENBZ0VFLEFBR0EsRUEzRWlELEFBOEVqRCxJQXRCUyxFQTNEWCxBQStDa0MsRUFLbkIsR0FwQ0ksRUE0Q04sV0FDTyxJQTVDSCxTQStCakIsS0Fja0IsQ0E1Q2tCLE1BZFosSUFpRUQsS0FOSCxhQXpETixJQWdDRSxDQW5Ca0IsQUE2Q1QsTUFYSixPQWRyQixVQTBCQSw0Q0ExREEsR0ErREUsS0FoQjZCLDJCQWxDQyw0QkFVN0Isb0VBeUJILDJJQXhCdUIscUJBQ0UsdUJBQ00sNkJBQ08sb0NBQ3RDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXGNhLWNyZWF0b3JzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCB7IG1vbWVudCwgdW5peCB9IGZyb20gXCJtb21lbnRcIjtcclxubGV0IGdyb3VwcyA9IHJlcXVpcmUoXCIuLi9ncm91cHMuanNvblwiKTtcclxuXHJcbmNvbnN0IHNpdGVUaXRsZSA9IFwiQ0EgQ3JlYXRvcnNcIjtcclxuY29uc3QgZGVzY3JpcHRpb24gPVxyXG4gIFwiV2UncmUgdGhlIG1lZXR1cCBncm91cHMgZm9yIFR3aXRjaCwgTWl4ZXIsIHN0cmVhbWVycywgYW5kIGdhbWVycyBpbiBDYWxpZm9ybmlhITxici8+RmluZCB0aGUgY2xvc2VzdCBvbmUgdG8geW91IG9yIGNvbWUgdG8gYWxsIG91ciBldmVudHMhXCI7XHJcbmNvbnN0IHVybCA9IFwiaHR0cHM6Ly9jYWNyZWF0b3JzLmNvbVwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbdXBjb21pbmdUd2l0Y2hFdmVudHMsIHNldFR3aXRjaEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VwY29taW5nTWVldHVwRXZlbnRzLCBzZXRNZWV0dXBFdmVudHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VXBjb21pbmdUd2l0Y2hFdmVudHMoKS50aGVuKHR3aXRoY0V2ZW50cyA9PiB7XHJcbiAgICAgIHNldFR3aXRjaEV2ZW50cyh0d2l0aGNFdmVudHMpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VXBjb21pbmdNZWV0dXBFdmVudHMoKS50aGVuKG1lZXR1cEV2ZW50cyA9PiB7XHJcbiAgICAgIHNldE1lZXR1cEV2ZW50cyhtZWV0dXBFdmVudHMpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmaW5kTmV4dEV2ZW50ID0gKGNpdHksIHVwY29taW5nRXZlbnRzKSA9PiB7XHJcbiAgICByZXR1cm4gdXBjb21pbmdFdmVudHMuZmluZChldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudC5jaGFwdGVyLmNpdHkgPT09IGNpdHkpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVwY29taW5nRXZlbnRzID0gdXBjb21pbmdUd2l0Y2hFdmVudHMuY29uY2F0KHVwY29taW5nTWVldHVwRXZlbnRzKTtcclxuICAgIGNvbnN0IG5leHRFdmVudHMgPSBncm91cHMubWFwKGdyb3VwID0+XHJcbiAgICAgIGZpbmROZXh0RXZlbnQoZ3JvdXAuY2l0eSwgdXBjb21pbmdFdmVudHMpXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cobmV4dEV2ZW50cyk7XHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICA8RnJhZ21lbnQ+XHJcbiAgICAvLyAgICAgPENhcmRcclxuICAgIC8vICAgICAgIGdyb3VwTmFtZT17XCJUd2l0Y2ggTGFcIn1cclxuICAgIC8vICAgICAgIGNpdHk9e1wiTG9zIEFuZ2VsZXNcIn1cclxuICAgIC8vICAgICAgIGhyZWY9e1wiaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9sb3MtYW5nZWxlcy9cIn1cclxuICAgIC8vICAgICAgIHVwY29taW5nRXZlbnRzPXt1cGNvbWluZ1R3aXRjaEV2ZW50c31cclxuICAgIC8vICAgICAvPlxyXG4gICAgLy8gICAgIDxDYXJkXHJcbiAgICAvLyAgICAgICBncm91cE5hbWU9e1wiT0MgU3RyZWFtZXJzXCJ9XHJcbiAgICAvLyAgICAgICBjaXR5PXtcIk9yYW5nZVwifVxyXG4gICAgLy8gICAgICAgaHJlZj17XCJodHRwczovL3d3dy5tZWV0dXAuY29tL29jc3RyZWFtZXJzXCJ9XHJcbiAgICAvLyAgICAgICB1cGNvbWluZ0V2ZW50cz17dXBjb21pbmdNZWV0dXBFdmVudHN9XHJcbiAgICAvLyAgICAgLz5cclxuICAgIC8vICAgICA8Q2FyZFxyXG4gICAgLy8gICAgICAgZ3JvdXBOYW1lPXtcIlR3aXRjaCBTRFwifVxyXG4gICAgLy8gICAgICAgY2l0eT17XCJTYW4gRGllZ29cIn1cclxuICAgIC8vICAgICAgIGhyZWY9e1wiaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9zYW4tZGllZ28vXCJ9XHJcbiAgICAvLyAgICAgICB1cGNvbWluZ0V2ZW50cz17dXBjb21pbmdUd2l0Y2hFdmVudHN9XHJcbiAgICAvLyAgICAgLz5cclxuICAgIC8vICAgPC9GcmFnbWVudD5cclxuICAgIC8vICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX0uY29tPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uLnJlcGxhY2UoXCI8YnIvPlwiLCBcIiBcIil9XHJcbiAgICAgICAgPjwvbWV0YT5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfT48L21ldGE+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9PjwvbWV0YT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PXtgJHt1cmx9L3N0YXRpYy90d2l0Y2hzb2NhbC5naWZgfVxyXG4gICAgICAgID48L21ldGE+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI4MDBcIj48L21ldGE+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiODAwXCI+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uLnJlcGxhY2UoXCI8YnIvPlwiLCBcIiBcIil9XHJcbiAgICAgICAgPjwvbWV0YT5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57c2l0ZVRpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgPjwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj57cmVuZGVyQ2FyZHMoKX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBUaGlzIHNpdGUgaXMgbm90IGFmZmlsaWF0ZWQgb3IgZW5kb3JzZWQgYnkgVHdpdGNoLCBNaXhlciwgb3IgTWVldHVwLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgOmdsb2JhbChodG1sLCBib2R5KSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MTQ2ZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2Z1bmt5LWxpbmVzLndlYnBcIik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDYwMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZiwgQXZlbmlyIE5leHQsIEF2ZW5pciwgSGVsdmV0aWNhLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVybyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJLbmV3YXZlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBhbmltYXRpb246IGNvbG9yd2lwZSA2cyBpbmZpbml0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMTVkZWcsXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTUlLFxyXG4gICAgICAgICAgICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMjUlLFxyXG4gICAgICAgICAgICByZ2JhKDI1MywgMjksIDI5LCAxKSA1MCUsXHJcbiAgICAgICAgICAgIHJnYmEoMjUyLCAxNzYsIDY5LCAxKSA3NSUsXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgODAlLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDkwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcclxuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUtd3JhcHBlciB7XHJcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSxcclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcclxuICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yd2lwZSB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzUlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVcGNvbWluZ1R3aXRjaEV2ZW50cygpIHtcclxuICBjb25zdCBjYWNoZUJ1c3RlciA9IGAmJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1gO1xyXG4gIGNvbnN0IHR3aXRjaFJlcSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvYXBpL3NlYXJjaC8/cmVzdWx0X3R5cGVzPXVwY29taW5nX2V2ZW50JmNvdW50cnlfY29kZT1FYXJ0aCR7Y2FjaGVCdXN0ZXJ9YFxyXG4gICkuY2F0Y2goZXJyID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHR3aXRjaEpzb24gPSBhd2FpdCB0d2l0Y2hSZXEuanNvbigpO1xyXG5cclxuICBpZiAodHdpdGNoSnNvbikge1xyXG4gICAgcmV0dXJuIHR3aXRjaEpzb24ucmVzdWx0cztcclxuICB9XHJcblxyXG4gIHJldHVybiBbXTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXBjb21pbmdNZWV0dXBFdmVudHMoKSB7XHJcbiAgY29uc3QgY2FjaGVCdXN0ZXIgPSBgJiR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YDtcclxuICAvLyBUT0RPIHJlbW92ZSBoYXJkY29kZWQgZ3JvdXAgbmFtZSwgZHluYW1pY2FsbHkgZ2V0IGZyb20gZ3JvdXBzLmpzb25cclxuICBjb25zdCBtZWV0dXBDb21SZXEgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL3NoaWVsZGVkLXBsYXRlYXUtMDYxNjcuaGVyb2t1YXBwLmNvbS9odHRwczovL2FwaS5tZWV0dXAuY29tL29jc3RyZWFtZXJzL2V2ZW50cz8mc2lnbj10cnVlJnBob3RvLWhvc3Q9c2VjdXJlJnBhZ2U9NSZoYXNfZW5kZWQ9ZmFsc2Uke2NhY2hlQnVzdGVyfWBcclxuICApLmNhdGNoKGVyciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAobWVldHVwQ29tUmVxKSB7XHJcbiAgICBjb25zdCBtZWV0dXBDb21Kc29uID0gYXdhaXQgbWVldHVwQ29tUmVxLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKG1lZXR1cENvbUpzb24pO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRNZWV0dXBUb1R3aXRjaChtZWV0dXBDb21Kc29uKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydE1lZXR1cFRvVHdpdGNoKG1lZXR1cCkge1xyXG4gIGNvbnN0IG1lZXR1cExpc3QgPSBtZWV0dXAubWFwKGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IGNpdHkgPSBldmVudC5ncm91cC5sb2NhbGl6ZWRfbG9jYXRpb24uc3BsaXQoXCIsXCIpWzBdO1xyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbW9tZW50KClcclxuICAgICAgLnVuaXgoZXZlbnQudGltZSlcclxuICAgICAgLy8gLnV0Y09mZnNldChldmVudC51dGNfb2Zmc2V0KVxyXG4gICAgICAuZm9ybWF0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhzdGFydERhdGUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgIGNpdHlcclxuICAgICAgfSxcclxuICAgICAgdXJsOiBldmVudC5saW5rLFxyXG4gICAgICBzdGFydF9kYXRlOiBzdGFydERhdGUsXHJcbiAgICAgIHRpdGxlOiBldmVudC5uYW1lXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbWVldHVwTGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\jared\\ca-creators\\pages\\index.js */"));
};

function getUpcomingTwitchEvents() {
  return _getUpcomingTwitchEvents.apply(this, arguments);
}

function _getUpcomingTwitchEvents() {
  _getUpcomingTwitchEvents = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var cacheBuster, twitchReq, twitchJson;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cacheBuster = "&".concat(Math.floor(Math.random() * 1000));
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth".concat(cacheBuster))["catch"](function (err) {
              console.log(err);
            });

          case 3:
            twitchReq = _context.sent;
            _context.next = 6;
            return twitchReq.json();

          case 6:
            twitchJson = _context.sent;

            if (!twitchJson) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", twitchJson.results);

          case 9:
            return _context.abrupt("return", []);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getUpcomingTwitchEvents.apply(this, arguments);
}

function getUpcomingMeetupEvents() {
  return _getUpcomingMeetupEvents.apply(this, arguments);
}

function _getUpcomingMeetupEvents() {
  _getUpcomingMeetupEvents = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var cacheBuster, meetupComReq, meetupComJson;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cacheBuster = "&".concat(Math.floor(Math.random() * 1000)); // TODO remove hardcoded group name, dynamically get from groups.json

            _context2.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://shielded-plateau-06167.herokuapp.com/https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false".concat(cacheBuster))["catch"](function (err) {
              console.log(err);
            });

          case 3:
            meetupComReq = _context2.sent;

            if (!meetupComReq) {
              _context2.next = 10;
              break;
            }

            _context2.next = 7;
            return meetupComReq.json();

          case 7:
            meetupComJson = _context2.sent;
            console.log(meetupComJson);
            return _context2.abrupt("return", convertMeetupToTwitch(meetupComJson));

          case 10:
            return _context2.abrupt("return", []);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUpcomingMeetupEvents.apply(this, arguments);
}

function convertMeetupToTwitch(meetup) {
  var meetupList = meetup.map(function (event) {
    var city = event.group.localized_location.split(",")[0];
    var startDate = Object(moment__WEBPACK_IMPORTED_MODULE_7__["moment"])().unix(event.time) // .utcOffset(event.utc_offset)
    .format();
    console.log(startDate);
    return {
      chapter: {
        city: city
      },
      url: event.link,
      start_date: startDate,
      title: event.name
    };
  });
  return meetupList;
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.431a03cced52029e0039.hot-update.js.map