webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_organisms_group_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/organisms/group-card */ "./components/organisms/group-card.jsx");




var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\pages\\index.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var data = __webpack_require__(/*! ./data.json */ "./pages/data.json");

var siteTitle = 'Cali Creators MeetUps';
var description = "We're the meetup groups for Twitch, Facebook, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!";
var url = 'https://calicreators.com';

function convertMeetupToTwitch(meetup) {
  var meetupList = meetup.map(function (event) {
    var city = event.group.localized_location.split(',')[0];
    var startDate = moment__WEBPACK_IMPORTED_MODULE_7___default.a.utc(event.time).utcOffset(event.utc_offset / 3600000).format();
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

function getUpcomingTwitchEvents() {
  return _getUpcomingTwitchEvents.apply(this, arguments);
}

function _getUpcomingTwitchEvents() {
  _getUpcomingTwitchEvents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var cacheBuster, twitchReq, twitchJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
  _getUpcomingMeetupEvents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var cacheBuster, meetupUrl, meetupComReq, meetupComJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cacheBuster = "&".concat(Math.floor(Math.random() * 1000)); // TODO remove hardcoded group name, dynamically get from data.json

            meetupUrl = "https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false".concat(cacheBuster);
            if (false) {}
            _context2.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(meetupUrl)["catch"](function (err) {
              console.log(err);
            });

          case 5:
            meetupComReq = _context2.sent;

            if (!meetupComReq) {
              _context2.next = 11;
              break;
            }

            _context2.next = 9;
            return meetupComReq.json();

          case 9:
            meetupComJson = _context2.sent;
            return _context2.abrupt("return", convertMeetupToTwitch(meetupComJson));

          case 11:
            _context2.next = 13;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 3000);
            });

          case 13:
            return _context2.abrupt("return", []);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUpcomingMeetupEvents.apply(this, arguments);
}

var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    events: [],
    loading: true
  }),
      upcomingTwitchEvents = _useState[0],
      setTwitchEvents = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    events: [],
    loading: true
  }),
      upcomingMeetupEvents = _useState2[0],
      setMeetupEvents = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var cachedData = JSON.parse(localStorage.get('twitchEvents') || '{}');

    if (cachedData === null || cachedData === void 0 ? void 0 : cachedData.updatedAt) {
      var fiveMinsAgo = new Date(Date.now() - 5 * 60000);

      if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
        setTwitchEvents({
          events: cachedData.events,
          loading: false
        });
        return;
      }
    }

    getUpcomingTwitchEvents().then(function (twitchEvents) {
      localStorage.setItem('twitchEvents', {
        events: twitchEvents,
        updatedAt: Date.now()
      });
      setTwitchEvents({
        events: twitchEvents,
        loading: false
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var cachedData = JSON.parse(localStorage.get('twitchEvents') || '{}');

    if (cachedData === null || cachedData === void 0 ? void 0 : cachedData.updatedAt) {
      var fiveMinsAgo = new Date(Date.now() - 5 * 60000);

      if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
        setMeetupEvents({
          events: cachedData.events,
          loading: false
        });
        return;
      }
    }

    getUpcomingMeetupEvents().then(function (meetupEvents) {
      localStorage.setItem('meetupEvents', {
        events: meetupEvents,
        updatedAt: Date.now()
      });
      setMeetupEvents({
        events: meetupEvents,
        loading: false
      });
    });
  }, []);

  var findNextEvent = function findNextEvent(groups, upcomingEvents) {
    return groups.map(function (group) {
      var nextEvent = upcomingEvents.find(function (event) {
        if (event.chapter.city === group.city) return true;
        return false;
      });
      return _objectSpread(_objectSpread({}, group), {}, {
        nextEvent: nextEvent || {}
      });
    });
  };

  var renderCards = function renderCards() {
    var upcomingEvents = upcomingTwitchEvents.events.concat(upcomingMeetupEvents.events);
    var loading = upcomingTwitchEvents.loading || upcomingMeetupEvents.loading;
    var groupsWithEvents = findNextEvent(data.groups, upcomingEvents).sort(function (a, b) {
      if (!a.nextEvent.start_date) return 1;
      if (!b.nextEvent.start_date) return -1;
      return new Date(a.nextEvent.start_date) - new Date(b.nextEvent.start_date);
    });
    return groupsWithEvents.map(function (groupWithEvent, i) {
      return __jsx(_components_organisms_group_card__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: groupWithEvent.name,
        group: groupWithEvent,
        loading: loading,
        totalCards: groupsWithEvents.length,
        position: i + 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 7
        }
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, siteTitle), __jsx("meta", {
    name: "Description",
    content: description.replace('<br/>', ' '),
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: siteTitle,
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(url, "/twitchsocal.gif"),
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: "800",
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: "800",
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description.replace('<br/>', ' '),
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-640232234" + " " + "hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-640232234" + " " + "title-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-640232234" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, siteTitle)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "jsx-640232234" + " " + "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-640232234" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, renderCards())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "640232234",
    __self: _this
  }, ".hero.jsx-640232234{color:#fff;min-height:100%;width:100%;}.title.jsx-640232234{margin:0;width:100%;min-height:120px;line-height:1.15;font-size:48px;font-family:'Knewave',sans-serif;-webkit-animation:colorwipe-jsx-640232234 6s infinite;animation:colorwipe-jsx-640232234 6s infinite;background:rgb(255,255,255);background:linear-gradient( 40deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(131,58,180,1) 30%, rgba(253,29,29,1) 55%, rgba(252,176,69,1) 70%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100% );background-size:2400px;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.title-wrapper.jsx-640232234{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;width:300px;margin:0 auto;}.title.jsx-640232234,.description.jsx-640232234{text-align:center;}.description.jsx-640232234{font-size:22px;font-weight:300;font-family:'Kanit',sans-serif;}.row.jsx-640232234{max-width:1000px;margin:65px auto;position:relative;min-height:410px;}@media (max-width:900px){.row.jsx-640232234{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@-webkit-keyframes colorwipe-jsx-640232234{0%{background-position:0%;}100%{background-position:100%;}}@keyframes colorwipe-jsx-640232234{0%{background-position:0%;}100%{background-position:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyTFMsQUFHd0IsQUFLRixBQXdCd0MsQUFPL0IsQUFHSCxBQUtFLEFBUUYsQUFRVSxBQUdFLFNBekRoQixFQUxLLElBdUNBLEVBS0MsQ0FSbkIsRUE5Qm1CLEdBc0RqQixFQUdBLEVBOURXLElBdUNxQixHQUtkLEdBdENELENBTG5CLGNBNENtQixFQXRDRixRQWlDakIsT0FoQ29DLEFBc0NwQyxLQUt1QiwwQkF2QlAsRUFuQmtCLFlBb0JwQixZQUNFLGNBQ2hCLEdBcUIwQiwyREExQ00sbUJBMkNULFNBakNwQixvRkFrQ0QsMkhBakN1Qix1QkFDQSx1QkFDTSw2QkFDTyxvQ0FDdEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBHcm91cENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvZ3JvdXAtY2FyZCc7XHJcblxyXG5jb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kYXRhLmpzb24nKTtcclxuXHJcbmNvbnN0IHNpdGVUaXRsZSA9ICdDYWxpIENyZWF0b3JzIE1lZXRVcHMnO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9XHJcbiAgXCJXZSdyZSB0aGUgbWVldHVwIGdyb3VwcyBmb3IgVHdpdGNoLCBGYWNlYm9vaywgc3RyZWFtZXJzLCBhbmQgZ2FtZXJzIGluIENhbGlmb3JuaWEhPGJyLz5GaW5kIHRoZSBjbG9zZXN0IG9uZSB0byB5b3Ugb3IgY29tZSB0byBhbGwgb3VyIGV2ZW50cyFcIjtcclxuY29uc3QgdXJsID0gJ2h0dHBzOi8vY2FsaWNyZWF0b3JzLmNvbSc7XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0TWVldHVwVG9Ud2l0Y2gobWVldHVwKSB7XHJcbiAgY29uc3QgbWVldHVwTGlzdCA9IG1lZXR1cC5tYXAoKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBjaXR5ID0gZXZlbnQuZ3JvdXAubG9jYWxpemVkX2xvY2F0aW9uLnNwbGl0KCcsJylbMF07XHJcbiAgICBjb25zdCBzdGFydERhdGUgPSBtb21lbnRcclxuICAgICAgLnV0YyhldmVudC50aW1lKVxyXG4gICAgICAudXRjT2Zmc2V0KGV2ZW50LnV0Y19vZmZzZXQgLyAzNjAwMDAwKVxyXG4gICAgICAuZm9ybWF0KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgY2l0eSxcclxuICAgICAgfSxcclxuICAgICAgdXJsOiBldmVudC5saW5rLFxyXG4gICAgICBzdGFydF9kYXRlOiBzdGFydERhdGUsXHJcbiAgICAgIHRpdGxlOiBldmVudC5uYW1lLFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG1lZXR1cExpc3Q7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVwY29taW5nVHdpdGNoRXZlbnRzKCkge1xyXG4gIGNvbnN0IGNhY2hlQnVzdGVyID0gYCYke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XHJcbiAgY29uc3QgdHdpdGNoUmVxID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9hcGkvc2VhcmNoLz9yZXN1bHRfdHlwZXM9dXBjb21pbmdfZXZlbnQmY291bnRyeV9jb2RlPUVhcnRoJHtjYWNoZUJ1c3Rlcn1gXHJcbiAgKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0d2l0Y2hKc29uID0gYXdhaXQgdHdpdGNoUmVxLmpzb24oKTtcclxuXHJcbiAgaWYgKHR3aXRjaEpzb24pIHtcclxuICAgIHJldHVybiB0d2l0Y2hKc29uLnJlc3VsdHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVwY29taW5nTWVldHVwRXZlbnRzKCkge1xyXG4gIGNvbnN0IGNhY2hlQnVzdGVyID0gYCYke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XHJcbiAgLy8gVE9ETyByZW1vdmUgaGFyZGNvZGVkIGdyb3VwIG5hbWUsIGR5bmFtaWNhbGx5IGdldCBmcm9tIGRhdGEuanNvblxyXG4gIGxldCBtZWV0dXBVcmwgPSBgaHR0cHM6Ly9hcGkubWVldHVwLmNvbS9vY3N0cmVhbWVycy9ldmVudHM/JnNpZ249dHJ1ZSZwaG90by1ob3N0PXNlY3VyZSZwYWdlPTUmaGFzX2VuZGVkPWZhbHNlJHtjYWNoZUJ1c3Rlcn1gO1xyXG4gIGlmIChwcm9jZXNzLmVudi5FTlYgIT09ICdkZXZlbG9wbWVudCcpXHJcbiAgICBtZWV0dXBVcmwgPSBgaHR0cHM6Ly9seW0yMG5oYjhqLmV4ZWN1dGUtYXBpLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2Rldj91cmw9JHttZWV0dXBVcmx9YDtcclxuICBjb25zdCBtZWV0dXBDb21SZXEgPSBhd2FpdCBmZXRjaChtZWV0dXBVcmwpLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChtZWV0dXBDb21SZXEpIHtcclxuICAgIGNvbnN0IG1lZXR1cENvbUpzb24gPSBhd2FpdCBtZWV0dXBDb21SZXEuanNvbigpO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRNZWV0dXBUb1R3aXRjaChtZWV0dXBDb21Kc29uKTtcclxuICB9XHJcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpO1xyXG5cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VwY29taW5nVHdpdGNoRXZlbnRzLCBzZXRUd2l0Y2hFdmVudHNdID0gdXNlU3RhdGUoe1xyXG4gICAgZXZlbnRzOiBbXSxcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3VwY29taW5nTWVldHVwRXZlbnRzLCBzZXRNZWV0dXBFdmVudHNdID0gdXNlU3RhdGUoe1xyXG4gICAgZXZlbnRzOiBbXSxcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjYWNoZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0KCd0d2l0Y2hFdmVudHMnKSB8fCAne30nKTtcclxuICAgIGlmIChjYWNoZWREYXRhPy51cGRhdGVkQXQpIHtcclxuICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgaWYgKG5ldyBEYXRlKGNhY2hlZERhdGEudXBkYXRlZEF0KSA+IGZpdmVNaW5zQWdvKSB7XHJcbiAgICAgICAgc2V0VHdpdGNoRXZlbnRzKHsgZXZlbnRzOiBjYWNoZWREYXRhLmV2ZW50cywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRVcGNvbWluZ1R3aXRjaEV2ZW50cygpLnRoZW4oKHR3aXRjaEV2ZW50cykgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHdpdGNoRXZlbnRzJywge1xyXG4gICAgICAgIGV2ZW50czogdHdpdGNoRXZlbnRzLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFR3aXRjaEV2ZW50cyh7IGV2ZW50czogdHdpdGNoRXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXQoJ3R3aXRjaEV2ZW50cycpIHx8ICd7fScpO1xyXG4gICAgaWYgKGNhY2hlZERhdGE/LnVwZGF0ZWRBdCkge1xyXG4gICAgICBjb25zdCBmaXZlTWluc0FnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA1ICogNjAwMDApO1xyXG4gICAgICBpZiAobmV3IERhdGUoY2FjaGVkRGF0YS51cGRhdGVkQXQpID4gZml2ZU1pbnNBZ28pIHtcclxuICAgICAgICBzZXRNZWV0dXBFdmVudHMoeyBldmVudHM6IGNhY2hlZERhdGEuZXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRVcGNvbWluZ01lZXR1cEV2ZW50cygpLnRoZW4oKG1lZXR1cEV2ZW50cykgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWVldHVwRXZlbnRzJywge1xyXG4gICAgICAgIGV2ZW50czogbWVldHVwRXZlbnRzLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldE1lZXR1cEV2ZW50cyh7IGV2ZW50czogbWVldHVwRXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmluZE5leHRFdmVudCA9IChncm91cHMsIHVwY29taW5nRXZlbnRzKSA9PiB7XHJcbiAgICByZXR1cm4gZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcclxuICAgICAgY29uc3QgbmV4dEV2ZW50ID0gdXBjb21pbmdFdmVudHMuZmluZCgoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuY2hhcHRlci5jaXR5ID09PSBncm91cC5jaXR5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmdyb3VwLFxyXG4gICAgICAgIG5leHRFdmVudDogbmV4dEV2ZW50IHx8IHt9LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cGNvbWluZ0V2ZW50cyA9IHVwY29taW5nVHdpdGNoRXZlbnRzLmV2ZW50cy5jb25jYXQoXHJcbiAgICAgIHVwY29taW5nTWVldHVwRXZlbnRzLmV2ZW50c1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvYWRpbmcgPVxyXG4gICAgICB1cGNvbWluZ1R3aXRjaEV2ZW50cy5sb2FkaW5nIHx8IHVwY29taW5nTWVldHVwRXZlbnRzLmxvYWRpbmc7XHJcbiAgICBjb25zdCBncm91cHNXaXRoRXZlbnRzID0gZmluZE5leHRFdmVudChkYXRhLmdyb3VwcywgdXBjb21pbmdFdmVudHMpLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhLm5leHRFdmVudC5zdGFydF9kYXRlKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAoIWIubmV4dEV2ZW50LnN0YXJ0X2RhdGUpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgbmV3IERhdGUoYS5uZXh0RXZlbnQuc3RhcnRfZGF0ZSkgLSBuZXcgRGF0ZShiLm5leHRFdmVudC5zdGFydF9kYXRlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gZ3JvdXBzV2l0aEV2ZW50cy5tYXAoKGdyb3VwV2l0aEV2ZW50LCBpKSA9PiAoXHJcbiAgICAgIDxHcm91cENhcmRcclxuICAgICAgICBrZXk9e2dyb3VwV2l0aEV2ZW50Lm5hbWV9XHJcbiAgICAgICAgZ3JvdXA9e2dyb3VwV2l0aEV2ZW50fVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgdG90YWxDYXJkcz17Z3JvdXBzV2l0aEV2ZW50cy5sZW5ndGh9XHJcbiAgICAgICAgcG9zaXRpb249e2kgKyAxfVxyXG4gICAgICAvPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJEZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uLnJlcGxhY2UoJzxici8+JywgJyAnKX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHt1cmx9L3R3aXRjaHNvY2FsLmdpZmB9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI4MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjgwMFwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb24ucmVwbGFjZSgnPGJyLz4nLCAnICcpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L2gxPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3JlbmRlckNhcmRzKCl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLbmV3YXZlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBjb2xvcndpcGUgNnMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDQwZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAyNSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDMwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1MywgMjksIDI5LCAxKSA1NSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDcwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDc1JSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNDAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpdGxlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSxcclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjVweCBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yd2lwZSB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\index.jsx */"));
};

_s(Home, "uAzSvysfHVz0TLzQiWY9k07bqbQ=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwic2l0ZVRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJjb252ZXJ0TWVldHVwVG9Ud2l0Y2giLCJtZWV0dXAiLCJtZWV0dXBMaXN0IiwibWFwIiwiZXZlbnQiLCJjaXR5IiwiZ3JvdXAiLCJsb2NhbGl6ZWRfbG9jYXRpb24iLCJzcGxpdCIsInN0YXJ0RGF0ZSIsIm1vbWVudCIsInV0YyIsInRpbWUiLCJ1dGNPZmZzZXQiLCJ1dGNfb2Zmc2V0IiwiZm9ybWF0IiwiY2hhcHRlciIsImxpbmsiLCJzdGFydF9kYXRlIiwidGl0bGUiLCJuYW1lIiwiZ2V0VXBjb21pbmdUd2l0Y2hFdmVudHMiLCJjYWNoZUJ1c3RlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZldGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInR3aXRjaFJlcSIsImpzb24iLCJ0d2l0Y2hKc29uIiwicmVzdWx0cyIsImdldFVwY29taW5nTWVldHVwRXZlbnRzIiwibWVldHVwVXJsIiwicHJvY2VzcyIsIm1lZXR1cENvbVJlcSIsIm1lZXR1cENvbUpzb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJIb21lIiwidXNlU3RhdGUiLCJldmVudHMiLCJsb2FkaW5nIiwidXBjb21pbmdUd2l0Y2hFdmVudHMiLCJzZXRUd2l0Y2hFdmVudHMiLCJ1cGNvbWluZ01lZXR1cEV2ZW50cyIsInNldE1lZXR1cEV2ZW50cyIsInVzZUVmZmVjdCIsImNhY2hlZERhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXQiLCJ1cGRhdGVkQXQiLCJmaXZlTWluc0FnbyIsIkRhdGUiLCJub3ciLCJ0aGVuIiwidHdpdGNoRXZlbnRzIiwic2V0SXRlbSIsIm1lZXR1cEV2ZW50cyIsImZpbmROZXh0RXZlbnQiLCJncm91cHMiLCJ1cGNvbWluZ0V2ZW50cyIsIm5leHRFdmVudCIsImZpbmQiLCJyZW5kZXJDYXJkcyIsImNvbmNhdCIsImdyb3Vwc1dpdGhFdmVudHMiLCJzb3J0IiwiYSIsImIiLCJncm91cFdpdGhFdmVudCIsImkiLCJsZW5ndGgiLCJyZXBsYWNlIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHNDQUFELENBQXBCOztBQUVBLElBQU1DLFNBQVMsR0FBRyx1QkFBbEI7QUFDQSxJQUFNQyxXQUFXLEdBQ2YsK0lBREY7QUFFQSxJQUFNQyxHQUFHLEdBQUcsMEJBQVo7O0FBRUEsU0FBU0MscUJBQVQsQ0FBK0JDLE1BQS9CLEVBQXVDO0FBQ3JDLE1BQU1DLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3ZDLFFBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGtCQUFaLENBQStCQyxLQUEvQixDQUFxQyxHQUFyQyxFQUEwQyxDQUExQyxDQUFiO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyw2Q0FBTSxDQUNyQkMsR0FEZSxDQUNYUCxLQUFLLENBQUNRLElBREssRUFFZkMsU0FGZSxDQUVMVCxLQUFLLENBQUNVLFVBQU4sR0FBbUIsT0FGZCxFQUdmQyxNQUhlLEVBQWxCO0FBSUEsV0FBTztBQUNMQyxhQUFPLEVBQUU7QUFDUFgsWUFBSSxFQUFKQTtBQURPLE9BREo7QUFJTE4sU0FBRyxFQUFFSyxLQUFLLENBQUNhLElBSk47QUFLTEMsZ0JBQVUsRUFBRVQsU0FMUDtBQU1MVSxXQUFLLEVBQUVmLEtBQUssQ0FBQ2dCO0FBTlIsS0FBUDtBQVFELEdBZGtCLENBQW5CO0FBZ0JBLFNBQU9sQixVQUFQO0FBQ0Q7O1NBRWNtQix1Qjs7Ozs7OE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLHVCQURSLGNBQzBCQyxJQUFJLENBQUND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akMsQ0FURixDQWxCRjtBQUFBO0FBQUE7QUFBQSxxaWJBREY7QUF3R0QsQ0E5TEQ7O0dBQU0zQixJOztLQUFBQSxJO0FBZ01TQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MTgwZjhlZDczMDc1YTQ0MzI0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBHcm91cENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvZ3JvdXAtY2FyZCc7XHJcblxyXG5jb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kYXRhLmpzb24nKTtcclxuXHJcbmNvbnN0IHNpdGVUaXRsZSA9ICdDYWxpIENyZWF0b3JzIE1lZXRVcHMnO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9XHJcbiAgXCJXZSdyZSB0aGUgbWVldHVwIGdyb3VwcyBmb3IgVHdpdGNoLCBGYWNlYm9vaywgc3RyZWFtZXJzLCBhbmQgZ2FtZXJzIGluIENhbGlmb3JuaWEhPGJyLz5GaW5kIHRoZSBjbG9zZXN0IG9uZSB0byB5b3Ugb3IgY29tZSB0byBhbGwgb3VyIGV2ZW50cyFcIjtcclxuY29uc3QgdXJsID0gJ2h0dHBzOi8vY2FsaWNyZWF0b3JzLmNvbSc7XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0TWVldHVwVG9Ud2l0Y2gobWVldHVwKSB7XHJcbiAgY29uc3QgbWVldHVwTGlzdCA9IG1lZXR1cC5tYXAoKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBjaXR5ID0gZXZlbnQuZ3JvdXAubG9jYWxpemVkX2xvY2F0aW9uLnNwbGl0KCcsJylbMF07XHJcbiAgICBjb25zdCBzdGFydERhdGUgPSBtb21lbnRcclxuICAgICAgLnV0YyhldmVudC50aW1lKVxyXG4gICAgICAudXRjT2Zmc2V0KGV2ZW50LnV0Y19vZmZzZXQgLyAzNjAwMDAwKVxyXG4gICAgICAuZm9ybWF0KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgY2l0eSxcclxuICAgICAgfSxcclxuICAgICAgdXJsOiBldmVudC5saW5rLFxyXG4gICAgICBzdGFydF9kYXRlOiBzdGFydERhdGUsXHJcbiAgICAgIHRpdGxlOiBldmVudC5uYW1lLFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG1lZXR1cExpc3Q7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVwY29taW5nVHdpdGNoRXZlbnRzKCkge1xyXG4gIGNvbnN0IGNhY2hlQnVzdGVyID0gYCYke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XHJcbiAgY29uc3QgdHdpdGNoUmVxID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9hcGkvc2VhcmNoLz9yZXN1bHRfdHlwZXM9dXBjb21pbmdfZXZlbnQmY291bnRyeV9jb2RlPUVhcnRoJHtjYWNoZUJ1c3Rlcn1gXHJcbiAgKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0d2l0Y2hKc29uID0gYXdhaXQgdHdpdGNoUmVxLmpzb24oKTtcclxuXHJcbiAgaWYgKHR3aXRjaEpzb24pIHtcclxuICAgIHJldHVybiB0d2l0Y2hKc29uLnJlc3VsdHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVwY29taW5nTWVldHVwRXZlbnRzKCkge1xyXG4gIGNvbnN0IGNhY2hlQnVzdGVyID0gYCYke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XHJcbiAgLy8gVE9ETyByZW1vdmUgaGFyZGNvZGVkIGdyb3VwIG5hbWUsIGR5bmFtaWNhbGx5IGdldCBmcm9tIGRhdGEuanNvblxyXG4gIGxldCBtZWV0dXBVcmwgPSBgaHR0cHM6Ly9hcGkubWVldHVwLmNvbS9vY3N0cmVhbWVycy9ldmVudHM/JnNpZ249dHJ1ZSZwaG90by1ob3N0PXNlY3VyZSZwYWdlPTUmaGFzX2VuZGVkPWZhbHNlJHtjYWNoZUJ1c3Rlcn1gO1xyXG4gIGlmIChwcm9jZXNzLmVudi5FTlYgIT09ICdkZXZlbG9wbWVudCcpXHJcbiAgICBtZWV0dXBVcmwgPSBgaHR0cHM6Ly9seW0yMG5oYjhqLmV4ZWN1dGUtYXBpLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2Rldj91cmw9JHttZWV0dXBVcmx9YDtcclxuICBjb25zdCBtZWV0dXBDb21SZXEgPSBhd2FpdCBmZXRjaChtZWV0dXBVcmwpLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChtZWV0dXBDb21SZXEpIHtcclxuICAgIGNvbnN0IG1lZXR1cENvbUpzb24gPSBhd2FpdCBtZWV0dXBDb21SZXEuanNvbigpO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRNZWV0dXBUb1R3aXRjaChtZWV0dXBDb21Kc29uKTtcclxuICB9XHJcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpO1xyXG5cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VwY29taW5nVHdpdGNoRXZlbnRzLCBzZXRUd2l0Y2hFdmVudHNdID0gdXNlU3RhdGUoe1xyXG4gICAgZXZlbnRzOiBbXSxcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3VwY29taW5nTWVldHVwRXZlbnRzLCBzZXRNZWV0dXBFdmVudHNdID0gdXNlU3RhdGUoe1xyXG4gICAgZXZlbnRzOiBbXSxcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjYWNoZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0KCd0d2l0Y2hFdmVudHMnKSB8fCAne30nKTtcclxuICAgIGlmIChjYWNoZWREYXRhPy51cGRhdGVkQXQpIHtcclxuICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgaWYgKG5ldyBEYXRlKGNhY2hlZERhdGEudXBkYXRlZEF0KSA+IGZpdmVNaW5zQWdvKSB7XHJcbiAgICAgICAgc2V0VHdpdGNoRXZlbnRzKHsgZXZlbnRzOiBjYWNoZWREYXRhLmV2ZW50cywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRVcGNvbWluZ1R3aXRjaEV2ZW50cygpLnRoZW4oKHR3aXRjaEV2ZW50cykgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHdpdGNoRXZlbnRzJywge1xyXG4gICAgICAgIGV2ZW50czogdHdpdGNoRXZlbnRzLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFR3aXRjaEV2ZW50cyh7IGV2ZW50czogdHdpdGNoRXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXQoJ3R3aXRjaEV2ZW50cycpIHx8ICd7fScpO1xyXG4gICAgaWYgKGNhY2hlZERhdGE/LnVwZGF0ZWRBdCkge1xyXG4gICAgICBjb25zdCBmaXZlTWluc0FnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA1ICogNjAwMDApO1xyXG4gICAgICBpZiAobmV3IERhdGUoY2FjaGVkRGF0YS51cGRhdGVkQXQpID4gZml2ZU1pbnNBZ28pIHtcclxuICAgICAgICBzZXRNZWV0dXBFdmVudHMoeyBldmVudHM6IGNhY2hlZERhdGEuZXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRVcGNvbWluZ01lZXR1cEV2ZW50cygpLnRoZW4oKG1lZXR1cEV2ZW50cykgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWVldHVwRXZlbnRzJywge1xyXG4gICAgICAgIGV2ZW50czogbWVldHVwRXZlbnRzLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldE1lZXR1cEV2ZW50cyh7IGV2ZW50czogbWVldHVwRXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmluZE5leHRFdmVudCA9IChncm91cHMsIHVwY29taW5nRXZlbnRzKSA9PiB7XHJcbiAgICByZXR1cm4gZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcclxuICAgICAgY29uc3QgbmV4dEV2ZW50ID0gdXBjb21pbmdFdmVudHMuZmluZCgoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuY2hhcHRlci5jaXR5ID09PSBncm91cC5jaXR5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmdyb3VwLFxyXG4gICAgICAgIG5leHRFdmVudDogbmV4dEV2ZW50IHx8IHt9LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cGNvbWluZ0V2ZW50cyA9IHVwY29taW5nVHdpdGNoRXZlbnRzLmV2ZW50cy5jb25jYXQoXHJcbiAgICAgIHVwY29taW5nTWVldHVwRXZlbnRzLmV2ZW50c1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvYWRpbmcgPVxyXG4gICAgICB1cGNvbWluZ1R3aXRjaEV2ZW50cy5sb2FkaW5nIHx8IHVwY29taW5nTWVldHVwRXZlbnRzLmxvYWRpbmc7XHJcbiAgICBjb25zdCBncm91cHNXaXRoRXZlbnRzID0gZmluZE5leHRFdmVudChkYXRhLmdyb3VwcywgdXBjb21pbmdFdmVudHMpLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhLm5leHRFdmVudC5zdGFydF9kYXRlKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAoIWIubmV4dEV2ZW50LnN0YXJ0X2RhdGUpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgbmV3IERhdGUoYS5uZXh0RXZlbnQuc3RhcnRfZGF0ZSkgLSBuZXcgRGF0ZShiLm5leHRFdmVudC5zdGFydF9kYXRlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gZ3JvdXBzV2l0aEV2ZW50cy5tYXAoKGdyb3VwV2l0aEV2ZW50LCBpKSA9PiAoXHJcbiAgICAgIDxHcm91cENhcmRcclxuICAgICAgICBrZXk9e2dyb3VwV2l0aEV2ZW50Lm5hbWV9XHJcbiAgICAgICAgZ3JvdXA9e2dyb3VwV2l0aEV2ZW50fVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgdG90YWxDYXJkcz17Z3JvdXBzV2l0aEV2ZW50cy5sZW5ndGh9XHJcbiAgICAgICAgcG9zaXRpb249e2kgKyAxfVxyXG4gICAgICAvPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJEZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uLnJlcGxhY2UoJzxici8+JywgJyAnKX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHt1cmx9L3R3aXRjaHNvY2FsLmdpZmB9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI4MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjgwMFwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb24ucmVwbGFjZSgnPGJyLz4nLCAnICcpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L2gxPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3JlbmRlckNhcmRzKCl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLbmV3YXZlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBjb2xvcndpcGUgNnMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDQwZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAyNSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDMwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1MywgMjksIDI5LCAxKSA1NSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDcwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDc1JSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNDAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpdGxlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSxcclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjVweCBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yd2lwZSB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9