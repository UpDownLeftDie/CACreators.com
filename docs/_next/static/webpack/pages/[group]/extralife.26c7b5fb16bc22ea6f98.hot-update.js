webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./pages/[group]/extralife.jsx":
/*!*************************************!*\
  !*** ./pages/[group]/extralife.jsx ***!
  \*************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/molecules/team-member-cards */ "./components/molecules/team-member-cards.jsx");
/* harmony import */ var _components_atoms_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/atoms/header */ "./components/atoms/header.jsx");
/* harmony import */ var _components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/atoms/loading-icon */ "./components/atoms/loading-icon.jsx");
/* harmony import */ var _components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/atoms/progress-bar */ "./components/atoms/progress-bar.jsx");
/* harmony import */ var _components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/organisms/streamer-schedule */ "./components/organisms/streamer-schedule.jsx");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/utils */ "./src/utils.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\pages\\[group]\\extralife.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import Head from 'next/head';








var data = __webpack_require__(/*! ./data.json */ "./pages/[group]/data.json");

var API_BASE = 'https://www.extra-life.org/api';

function sortSchedule(schedule) {
  return schedule.filter(function (stream) {
    return new Date() < new Date(stream.timeEnd);
  }).sort(function (a, b) {
    return new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime();
  });
}

function getScheduleTimeRange(schedule) {
  var start = new Date(schedule[0].timeStart);
  var end = new Date(schedule[schedule.length - 1].timeEnd);
  return {
    start: start,
    end: end
  };
}

function sortParticipants(participants) {
  return participants.sort(function (a, b) {
    if (a.streamIsLive && !b.streamIsLive) return -1;
    if (b.streamIsLive && !a.streamIsLive) return 1;
    var donationsDiff = b.sumDonations - a.sumDonations;
    if (donationsDiff === 0) return a.displayName.localeCompare(b.displayName);
    return donationsDiff;
  }).map(function (member) {
    var _member$links;

    var newMember = _objectSpread(_objectSpread({}, member), {}, {
      avatarImageURL: "https:".concat(member.avatarImageURL)
    });

    if (member === null || member === void 0 ? void 0 : (_member$links = member.links) === null || _member$links === void 0 ? void 0 : _member$links.stream) {
      var stream = member.links.stream;
      var regex = stream.match(/channel=(.*)/);

      if (regex === null || regex === void 0 ? void 0 : regex[1]) {
        newMember = _objectSpread(_objectSpread({}, newMember), {}, {
          twitchUsername: regex[1]
        });
        return newMember;
      }
    }

    return newMember;
  });
}

var ExtraLifeTeam = function ExtraLifeTeam() {
  _s();

  var _groupData$schedule;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var group = router.query.group;
  var groupData = data[group];
  var schedule = (groupData === null || groupData === void 0 ? void 0 : (_groupData$schedule = groupData.schedule) === null || _groupData$schedule === void 0 ? void 0 : _groupData$schedule.length) ? sortSchedule(groupData.schedule) : [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      team = _useState[0],
      setTeam = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function fetchTeam() {
      return _fetchTeam.apply(this, arguments);
    }

    function _fetchTeam() {
      _fetchTeam = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, fetchedTeam;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_BASE, "/teams/").concat(groupData.id));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                fetchedTeam = _context.sent;
                return _context.abrupt("return", fetchedTeam);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchTeam.apply(this, arguments);
    }

    function fetchTeamMembers() {
      return _fetchTeamMembers.apply(this, arguments);
    }

    function _fetchTeamMembers() {
      _fetchTeamMembers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, fetchedTeamMembers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_BASE, "/teams/").concat(groupData.id, "/participants"));

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res.json();

              case 5:
                fetchedTeamMembers = _context2.sent;
                return _context2.abrupt("return", fetchedTeamMembers);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _fetchTeamMembers.apply(this, arguments);
    }

    function getData() {
      return _getData.apply(this, arguments);
    }

    function _getData() {
      _getData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var storageKey, cachedData, fiveMinsAgo, results, participants, newTeam, teamStorage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                storageKey = "".concat(group, "-extralife");
                cachedData = JSON.parse(localStorage.getItem(storageKey) || '{}');

                if (!(cachedData === null || cachedData === void 0 ? void 0 : cachedData.updatedAt)) {
                  _context3.next = 7;
                  break;
                }

                fiveMinsAgo = new Date(Date.now() - 5 * 60000);

                if (!(new Date(cachedData.updatedAt) > fiveMinsAgo)) {
                  _context3.next = 7;
                  break;
                }

                setTeam(cachedData.team);
                return _context3.abrupt("return");

              case 7:
                _context3.next = 9;
                return Promise.all([fetchTeam(), fetchTeamMembers()]);

              case 9:
                results = _context3.sent;
                participants = sortParticipants(results[1]);
                newTeam = _objectSpread(_objectSpread({}, results[0]), {}, {
                  participants: participants
                });
                teamStorage = {
                  team: newTeam,
                  updatedAt: Date.now()
                };
                localStorage.setItem(storageKey, JSON.stringify(teamStorage));
                setTeam(newTeam);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _getData.apply(this, arguments);
    }

    if (groupData === null || groupData === void 0 ? void 0 : groupData.id) getData();
  }, [group, groupData]);
  if (!(team === null || team === void 0 ? void 0 : team.participants)) return __jsx(_components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 35
    }
  });
  var isEventLive = false;

  if (schedule === null || schedule === void 0 ? void 0 : schedule.length) {
    var scheduleTimeRange = getScheduleTimeRange(schedule) || {};
    isEventLive = Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__["default"])(scheduleTimeRange.start, scheduleTimeRange.end);
  }

  return __jsx("div", {
    className: "jsx-748045253" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx(_components_atoms_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: team.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), __jsx("h2", {
    className: "jsx-748045253" + " " + "subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "Extra Life Team"), __jsx(_components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    progress: team.sumDonations,
    goal: team.fundraisingGoal,
    progressText: "Raised",
    goalText: "Goal",
    isMoney: true,
    width: 80,
    displayProgress: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), (schedule === null || schedule === void 0 ? void 0 : schedule.length) > 0 && isEventLive && __jsx("div", {
    className: "jsx-748045253" + " " + "streamerSchedule live",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-748045253",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, "Live Schedule"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-748045253" + " " + "teamMembers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: team.links.page,
    className: "jsx-748045253" + " " + "teamLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, "Join Team"), __jsx("h2", {
    className: "jsx-748045253",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, "Team Members"), __jsx(_components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_7__["default"], {
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  })), (schedule === null || schedule === void 0 ? void 0 : schedule.length) > 0 && !isEventLive && __jsx("div", {
    className: "jsx-748045253" + " " + "streamerSchedule upcoming",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-748045253",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, "Upcoming Event"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "748045253",
    __self: _this
  }, ".page.jsx-748045253{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.subheader.jsx-748045253{padding:0;margin:0;}.teamLink.jsx-748045253{color:#fff;padding:15px;border-radius:8px;font-size:24px;background:#26c2eb;-webkit-text-decoration:none;text-decoration:none;font-weight:bold;}.teamLink.jsx-748045253:hover{background:#0489ac;}.teamMembers.jsx-748045253{margin-top:40px;text-align:center;position:relative;}.streamerSchedule.jsx-748045253{margin-top:40px;width:100%;max-width:800px;}.streamerSchedule.upcoming.jsx-748045253 h2.jsx-748045253{margin-left:10%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEpTLEFBR3dCLEFBT0QsQUFJQyxBQVNRLEFBR0gsQUFLQSxBQUtBLFVBekJQLENBUEksQUFXQSxLQVlLLEFBS1AsQUFLYixHQXpCQSxBQVlBLEtBUm9CLEdBaUJGLE9BTEUsUUFYSCxDQWlCakIsU0FMQSxLQVhxQixtQkFDRSxTQWRDLHlDQWVMLGlCQUNuQixvQkFmdUIscUJBQ0YsNkZBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFRlYW1NZW1iZXJDYXJkcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy90ZWFtLW1lbWJlci1jYXJkcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9oZWFkZXInO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9sb2FkaW5nLWljb24nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgU3RyZWFtZXJTY2hlZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9zdHJlYW1lci1zY2hlZHVsZSc7XHJcbmltcG9ydCBjaGVja0lmRXZlbnRJc0xpdmUgZnJvbSAnLi4vLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuY29uc3QgQVBJX0JBU0UgPSAnaHR0cHM6Ly93d3cuZXh0cmEtbGlmZS5vcmcvYXBpJztcclxuXHJcbmZ1bmN0aW9uIHNvcnRTY2hlZHVsZShzY2hlZHVsZSkge1xyXG4gIHJldHVybiBzY2hlZHVsZVxyXG4gICAgLmZpbHRlcigoc3RyZWFtKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpIDwgbmV3IERhdGUoc3RyZWFtLnRpbWVFbmQpO1xyXG4gICAgfSlcclxuICAgIC5zb3J0KFxyXG4gICAgICAoYSwgYikgPT5cclxuICAgICAgICBuZXcgRGF0ZShhLnRpbWVTdGFydCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi50aW1lU3RhcnQpLmdldFRpbWUoKVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2NoZWR1bGVUaW1lUmFuZ2Uoc2NoZWR1bGUpIHtcclxuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHNjaGVkdWxlWzBdLnRpbWVTdGFydCk7XHJcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoc2NoZWR1bGVbc2NoZWR1bGUubGVuZ3RoIC0gMV0udGltZUVuZCk7XHJcbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0UGFydGljaXBhbnRzKHBhcnRpY2lwYW50cykge1xyXG4gIHJldHVybiBwYXJ0aWNpcGFudHNcclxuICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGlmIChhLnN0cmVhbUlzTGl2ZSAmJiAhYi5zdHJlYW1Jc0xpdmUpIHJldHVybiAtMTtcclxuICAgICAgaWYgKGIuc3RyZWFtSXNMaXZlICYmICFhLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIDE7XHJcbiAgICAgIGNvbnN0IGRvbmF0aW9uc0RpZmYgPSBiLnN1bURvbmF0aW9ucyAtIGEuc3VtRG9uYXRpb25zO1xyXG4gICAgICBpZiAoZG9uYXRpb25zRGlmZiA9PT0gMClcclxuICAgICAgICByZXR1cm4gYS5kaXNwbGF5TmFtZS5sb2NhbGVDb21wYXJlKGIuZGlzcGxheU5hbWUpO1xyXG4gICAgICByZXR1cm4gZG9uYXRpb25zRGlmZjtcclxuICAgIH0pXHJcbiAgICAubWFwKChtZW1iZXIpID0+IHtcclxuICAgICAgbGV0IG5ld01lbWJlciA9IHtcclxuICAgICAgICAuLi5tZW1iZXIsXHJcbiAgICAgICAgYXZhdGFySW1hZ2VVUkw6IGBodHRwczoke21lbWJlci5hdmF0YXJJbWFnZVVSTH1gLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAobWVtYmVyPy5saW5rcz8uc3RyZWFtKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdHJlYW0gfSA9IG1lbWJlci5saW5rcztcclxuICAgICAgICBjb25zdCByZWdleCA9IHN0cmVhbS5tYXRjaCgvY2hhbm5lbD0oLiopLyk7XHJcbiAgICAgICAgaWYgKHJlZ2V4Py5bMV0pIHtcclxuICAgICAgICAgIG5ld01lbWJlciA9IHsgLi4ubmV3TWVtYmVyLCB0d2l0Y2hVc2VybmFtZTogcmVnZXhbMV0gfTtcclxuICAgICAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgRXh0cmFMaWZlVGVhbSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdyb3VwIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YVtncm91cF07XHJcbiAgY29uc3Qgc2NoZWR1bGUgPSBncm91cERhdGE/LnNjaGVkdWxlPy5sZW5ndGhcclxuICAgID8gc29ydFNjaGVkdWxlKGdyb3VwRGF0YS5zY2hlZHVsZSlcclxuICAgIDogW107XHJcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9YCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtTWVtYmVycygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfS9wYXJ0aWNpcGFudHNgKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW1NZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtTWVtYmVycztcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBgJHtncm91cH0tZXh0cmFsaWZlYDtcclxuICAgICAgY29uc3QgY2FjaGVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkgfHwgJ3t9Jyk7XHJcbiAgICAgIGlmIChjYWNoZWREYXRhPy51cGRhdGVkQXQpIHtcclxuICAgICAgICBjb25zdCBmaXZlTWluc0FnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA1ICogNjAwMDApO1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZShjYWNoZWREYXRhLnVwZGF0ZWRBdCkgPiBmaXZlTWluc0Fnbykge1xyXG4gICAgICAgICAgc2V0VGVhbShjYWNoZWREYXRhLnRlYW0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoVGVhbSgpLCBmZXRjaFRlYW1NZW1iZXJzKCldKTtcclxuICAgICAgY29uc3QgcGFydGljaXBhbnRzID0gc29ydFBhcnRpY2lwYW50cyhyZXN1bHRzWzFdKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1RlYW0gPSB7XHJcbiAgICAgICAgLi4ucmVzdWx0c1swXSxcclxuICAgICAgICBwYXJ0aWNpcGFudHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHRlYW1TdG9yYWdlID0ge1xyXG4gICAgICAgIHRlYW06IG5ld1RlYW0sXHJcbiAgICAgICAgdXBkYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgICB9O1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh0ZWFtU3RvcmFnZSkpO1xyXG4gICAgICBzZXRUZWFtKG5ld1RlYW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGdyb3VwRGF0YT8uaWQpIGdldERhdGEoKTtcclxuICB9LCBbZ3JvdXAsIGdyb3VwRGF0YV0pO1xyXG4gIGlmICghdGVhbT8ucGFydGljaXBhbnRzKSByZXR1cm4gPExvYWRpbmdJY29uIC8+O1xyXG5cclxuICBsZXQgaXNFdmVudExpdmUgPSBmYWxzZTtcclxuICBpZiAoc2NoZWR1bGU/Lmxlbmd0aCkge1xyXG4gICAgY29uc3Qgc2NoZWR1bGVUaW1lUmFuZ2UgPSBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkgfHwge307XHJcbiAgICBpc0V2ZW50TGl2ZSA9IGNoZWNrSWZFdmVudElzTGl2ZShcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2Uuc3RhcnQsXHJcbiAgICAgIHNjaGVkdWxlVGltZVJhbmdlLmVuZFxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWV9IC8+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5FeHRyYSBMaWZlIFRlYW08L2gyPlxyXG4gICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICBwcm9ncmVzcz17dGVhbS5zdW1Eb25hdGlvbnN9XHJcbiAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgcHJvZ3Jlc3NUZXh0PVwiUmFpc2VkXCJcclxuICAgICAgICBnb2FsVGV4dD1cIkdvYWxcIlxyXG4gICAgICAgIGlzTW9uZXlcclxuICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgICAgZGlzcGxheVByb2dyZXNzXHJcbiAgICAgIC8+XHJcbiAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoID4gMCAmJiBpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIGxpdmVcIj5cclxuICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgIDxTdHJlYW1lclNjaGVkdWxlXHJcbiAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtTWVtYmVyc1wiPlxyXG4gICAgICAgIDxhIGhyZWY9e3RlYW0ubGlua3MucGFnZX0gY2xhc3NOYW1lPVwidGVhbUxpbmtcIj5cclxuICAgICAgICAgIEpvaW4gVGVhbVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8aDI+VGVhbSBNZW1iZXJzPC9oMj5cclxuICAgICAgICA8VGVhbU1lbWJlckNhcmRzIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoID4gMCAmJiAhaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSB1cGNvbWluZ1wiPlxyXG4gICAgICAgICAgPGgyPlVwY29taW5nIEV2ZW50PC9oMj5cclxuICAgICAgICAgIDxTdHJlYW1lclNjaGVkdWxlXHJcbiAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1YmhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluazpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNDg5YWM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZS51cGNvbWluZyBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRyYUxpZmVUZWFtO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogW3sgcGFyYW1zOiB7IGdyb3VwOiAnb2MnIH0gfSwgeyBwYXJhbXM6IHsgZ3JvdXA6ICdzZCcgfSB9XSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */"));
};

_s(ExtraLifeTeam, "kDlXXRrZHuZkgo2sTus0O9zmC6U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = ExtraLifeTeam;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ExtraLifeTeam);

var _c;

$RefreshReg$(_c, "ExtraLifeTeam");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwiQVBJX0JBU0UiLCJzb3J0U2NoZWR1bGUiLCJzY2hlZHVsZSIsImZpbHRlciIsInN0cmVhbSIsIkRhdGUiLCJ0aW1lRW5kIiwic29ydCIsImEiLCJiIiwidGltZVN0YXJ0IiwiZ2V0VGltZSIsImdldFNjaGVkdWxlVGltZVJhbmdlIiwic3RhcnQiLCJlbmQiLCJsZW5ndGgiLCJzb3J0UGFydGljaXBhbnRzIiwicGFydGljaXBhbnRzIiwic3RyZWFtSXNMaXZlIiwiZG9uYXRpb25zRGlmZiIsInN1bURvbmF0aW9ucyIsImRpc3BsYXlOYW1lIiwibG9jYWxlQ29tcGFyZSIsIm1hcCIsIm1lbWJlciIsIm5ld01lbWJlciIsImF2YXRhckltYWdlVVJMIiwibGlua3MiLCJyZWdleCIsIm1hdGNoIiwidHdpdGNoVXNlcm5hbWUiLCJFeHRyYUxpZmVUZWFtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ3JvdXAiLCJxdWVyeSIsImdyb3VwRGF0YSIsInVzZVN0YXRlIiwidGVhbSIsInNldFRlYW0iLCJ1c2VFZmZlY3QiLCJmZXRjaFRlYW0iLCJmZXRjaCIsImlkIiwicmVzIiwianNvbiIsImZldGNoZWRUZWFtIiwiZmV0Y2hUZWFtTWVtYmVycyIsImZldGNoZWRUZWFtTWVtYmVycyIsImdldERhdGEiLCJzdG9yYWdlS2V5IiwiY2FjaGVkRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cGRhdGVkQXQiLCJmaXZlTWluc0FnbyIsIm5vdyIsIlByb21pc2UiLCJhbGwiLCJyZXN1bHRzIiwibmV3VGVhbSIsInRlYW1TdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImlzRXZlbnRMaXZlIiwic2NoZWR1bGVUaW1lUmFuZ2UiLCJjaGVja0lmRXZlbnRJc0xpdmUiLCJuYW1lIiwiZnVuZHJhaXNpbmdH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RSxNQUFDLGdGQUFEO0FBQ0UsWUFBUSxFQUFFaEUsUUFEWjtBQUVFLGVBQVcsRUFBRW9DLElBQUksQ0FBQ3JCLFlBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQTdCSjtBQUFBO0FBQUE7QUFBQSwyelVBREY7QUFnRkQsQ0F4SUQ7O0dBQU1jLGE7VUFDV0UscUQ7OztLQURYRixhOztBQTBJU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuMjZjN2I1ZmIxNmJjMjJlYTZmOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVGVhbU1lbWJlckNhcmRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RlYW0tbWVtYmVyLWNhcmRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2hlYWRlcic7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2xvYWRpbmctaWNvbic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBTdHJlYW1lclNjaGVkdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL3N0cmVhbWVyLXNjaGVkdWxlJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJyk7XHJcblxyXG5jb25zdCBBUElfQkFTRSA9ICdodHRwczovL3d3dy5leHRyYS1saWZlLm9yZy9hcGknO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgY29uc3QgZG9uYXRpb25zRGlmZiA9IGIuc3VtRG9uYXRpb25zIC0gYS5zdW1Eb25hdGlvbnM7XHJcbiAgICAgIGlmIChkb25hdGlvbnNEaWZmID09PSAwKVxyXG4gICAgICAgIHJldHVybiBhLmRpc3BsYXlOYW1lLmxvY2FsZUNvbXBhcmUoYi5kaXNwbGF5TmFtZSk7XHJcbiAgICAgIHJldHVybiBkb25hdGlvbnNEaWZmO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBsZXQgbmV3TWVtYmVyID0ge1xyXG4gICAgICAgIC4uLm1lbWJlcixcclxuICAgICAgICBhdmF0YXJJbWFnZVVSTDogYGh0dHBzOiR7bWVtYmVyLmF2YXRhckltYWdlVVJMfWAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChtZW1iZXI/LmxpbmtzPy5zdHJlYW0pIHtcclxuICAgICAgICBjb25zdCB7IHN0cmVhbSB9ID0gbWVtYmVyLmxpbmtzO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyZWFtLm1hdGNoKC9jaGFubmVsPSguKikvKTtcclxuICAgICAgICBpZiAocmVnZXg/LlsxXSkge1xyXG4gICAgICAgICAgbmV3TWVtYmVyID0geyAuLi5uZXdNZW1iZXIsIHR3aXRjaFVzZXJuYW1lOiByZWdleFsxXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBFeHRyYUxpZmVUZWFtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZ3JvdXAgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBncm91cERhdGEgPSBkYXRhW2dyb3VwXTtcclxuICBjb25zdCBzY2hlZHVsZSA9IGdyb3VwRGF0YT8uc2NoZWR1bGU/Lmxlbmd0aFxyXG4gICAgPyBzb3J0U2NoZWR1bGUoZ3JvdXBEYXRhLnNjaGVkdWxlKVxyXG4gICAgOiBbXTtcclxuICBjb25zdCBbdGVhbSwgc2V0VGVhbV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRlYW0oKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH1gKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gZmV0Y2hlZFRlYW07XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRlYW1NZW1iZXJzKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9L3BhcnRpY2lwYW50c2ApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbU1lbWJlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gZmV0Y2hlZFRlYW1NZW1iZXJzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IGAke2dyb3VwfS1leHRyYWxpZmVgO1xyXG4gICAgICBjb25zdCBjYWNoZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSB8fCAne30nKTtcclxuICAgICAgaWYgKGNhY2hlZERhdGE/LnVwZGF0ZWRBdCkge1xyXG4gICAgICAgIGNvbnN0IGZpdmVNaW5zQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDUgKiA2MDAwMCk7XHJcbiAgICAgICAgaWYgKG5ldyBEYXRlKGNhY2hlZERhdGEudXBkYXRlZEF0KSA+IGZpdmVNaW5zQWdvKSB7XHJcbiAgICAgICAgICBzZXRUZWFtKGNhY2hlZERhdGEudGVhbSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2hUZWFtKCksIGZldGNoVGVhbU1lbWJlcnMoKV0pO1xyXG4gICAgICBjb25zdCBwYXJ0aWNpcGFudHMgPSBzb3J0UGFydGljaXBhbnRzKHJlc3VsdHNbMV0pO1xyXG5cclxuICAgICAgY29uc3QgbmV3VGVhbSA9IHtcclxuICAgICAgICAuLi5yZXN1bHRzWzBdLFxyXG4gICAgICAgIHBhcnRpY2lwYW50cyxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgdGVhbVN0b3JhZ2UgPSB7XHJcbiAgICAgICAgdGVhbTogbmV3VGVhbSxcclxuICAgICAgICB1cGRhdGVkQXQ6IERhdGUubm93KCksXHJcbiAgICAgIH07XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHRlYW1TdG9yYWdlKSk7XHJcbiAgICAgIHNldFRlYW0obmV3VGVhbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ3JvdXBEYXRhPy5pZCkgZ2V0RGF0YSgpO1xyXG4gIH0sIFtncm91cCwgZ3JvdXBEYXRhXSk7XHJcbiAgaWYgKCF0ZWFtPy5wYXJ0aWNpcGFudHMpIHJldHVybiA8TG9hZGluZ0ljb24gLz47XHJcblxyXG4gIGxldCBpc0V2ZW50TGl2ZSA9IGZhbHNlO1xyXG4gIGlmIChzY2hlZHVsZT8ubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB8fCB7fTtcclxuICAgIGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCxcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgIDxIZWFkZXIgdGl0bGU9e3RlYW0ubmFtZX0gLz5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YmhlYWRlclwiPkV4dHJhIExpZmUgVGVhbTwvaDI+XHJcbiAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgIHByb2dyZXNzPXt0ZWFtLnN1bURvbmF0aW9uc31cclxuICAgICAgICBnb2FsPXt0ZWFtLmZ1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgIGdvYWxUZXh0PVwiR29hbFwiXHJcbiAgICAgICAgaXNNb25leVxyXG4gICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICBkaXNwbGF5UHJvZ3Jlc3NcclxuICAgICAgLz5cclxuICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmIGlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmVhbWVyU2NoZWR1bGUgbGl2ZVwiPlxyXG4gICAgICAgICAgPGgyPkxpdmUgU2NoZWR1bGU8L2gyPlxyXG4gICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxyXG4gICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW1NZW1iZXJzXCI+XHJcbiAgICAgICAgPGEgaHJlZj17dGVhbS5saW5rcy5wYWdlfSBjbGFzc05hbWU9XCJ0ZWFtTGlua1wiPlxyXG4gICAgICAgICAgSm9pbiBUZWFtXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxoMj5UZWFtIE1lbWJlcnM8L2gyPlxyXG4gICAgICAgIDxUZWFtTWVtYmVyQ2FyZHMgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmICFpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIHVwY29taW5nXCI+XHJcbiAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxyXG4gICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW1MaW5rIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjZjMmViO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW1MaW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA0ODlhYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTWVtYmVycyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlLnVwY29taW5nIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=